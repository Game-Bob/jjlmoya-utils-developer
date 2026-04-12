import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Store } from './store';
import { RenderingEngine } from './rendering';
import { DEVICES, GRADIENTS, EXPORT_WIDTH, EXPORT_HEIGHT, LAYOUT_PRESETS } from './constants';
import type { MockupImage, MockupVariant } from './types';
import type { MobileMockupGeneratorUI } from './ui';

interface AppRefs {
  root: HTMLElement;
  uploadInput: HTMLInputElement;
  previewGrid: HTMLElement;
  emptyState: HTMLElement;
  fontSelect: HTMLSelectElement;
  gradientStart: HTMLInputElement;
  gradientEnd: HTMLInputElement;
  gradientAngle: HTMLInputElement;
  angleValue: HTMLElement;
  gradientPresets: HTMLElement;
  downloadBtn: HTMLElement;
  clearBtn: HTMLElement;
  deviceBtns: NodeListOf<Element>;
  replaceInput: HTMLInputElement;
  safeAreaToggle: HTMLElement;
  safeAreaDot: HTMLElement;
  safeAreaColorInput: HTMLInputElement;
  massReplaceBtn: HTMLElement;
  massReplaceInput: HTMLInputElement;
}

export class App {
  store = new Store();
  refs!: AppRefs;
  t!: MobileMockupGeneratorUI;
  currentTargetId: string | null = null;
  isAddingVariant = false;
  isReplacingBackground = false;

  constructor() {
    this.init();
  }

  private init() {
    this.refs = this.getRefs();
    this.t = JSON.parse(this.refs.root.dataset.i18n ?? '{}') as MobileMockupGeneratorUI;
    this.setupAllListeners();
    this.syncUIWithStore();
    this.renderPresets();
    this.updateVisibility();
    this.renderGrid();
  }

  private getRefs(): AppRefs {
    return {
      root: document.getElementById('mmg-root')!,
      uploadInput: document.getElementById('mmg-upload') as HTMLInputElement,
      previewGrid: document.getElementById('mmg-grid')!,
      emptyState: document.getElementById('mmg-empty')!,
      fontSelect: document.getElementById('mmg-font') as HTMLSelectElement,
      gradientStart: document.getElementById('mmg-grad-start') as HTMLInputElement,
      gradientEnd: document.getElementById('mmg-grad-end') as HTMLInputElement,
      gradientAngle: document.getElementById('mmg-grad-angle') as HTMLInputElement,
      angleValue: document.getElementById('mmg-angle-val')!,
      gradientPresets: document.getElementById('mmg-presets')!,
      downloadBtn: document.getElementById('mmg-download')!,
      clearBtn: document.getElementById('mmg-clear')!,
      deviceBtns: document.querySelectorAll('[data-device]'),
      replaceInput: document.getElementById('mmg-replace') as HTMLInputElement,
      safeAreaToggle: document.getElementById('mmg-safe-toggle')!,
      safeAreaDot: document.getElementById('mmg-safe-dot')!,
      safeAreaColorInput: document.getElementById('mmg-safe-color') as HTMLInputElement,
      massReplaceBtn: document.getElementById('mmg-mass-btn')!,
      massReplaceInput: document.getElementById('mmg-mass-input') as HTMLInputElement,
    };
  }

  private setupAllListeners() {
    this.setupUploadZone();
    this.setupColorControls();
    this.setupDeviceAndFont();
    this.setupGlobalControls();
    this.setupSafeArea();
    this.setupGridEvents();
    this.setupReplaceListener();
  }

  private setupUploadZone() {
    this.refs.uploadInput.addEventListener('change', (e) => this.handleUpload(e));
    this.refs.massReplaceBtn.addEventListener('click', () => this.refs.massReplaceInput.click());
    this.refs.massReplaceInput.addEventListener('change', (e) => this.handleMassReplace(e));
  }

  private setupColorControls() {
    this.refs.gradientStart.addEventListener('input', () => this.updateColors());
    this.refs.gradientEnd.addEventListener('input', () => this.updateColors());
    this.refs.gradientAngle.addEventListener('input', () => {
      this.refs.angleValue.textContent = `${this.refs.gradientAngle.value}\u00b0`;
      this.updateColors();
    });
    document.getElementById('mmg-swap-colors')?.addEventListener('click', () => {
      const tmp = this.refs.gradientStart.value;
      this.refs.gradientStart.value = this.refs.gradientEnd.value;
      this.refs.gradientEnd.value = tmp;
      this.updateColors();
    });
  }

  private setupDeviceAndFont() {
    this.refs.fontSelect.addEventListener('change', () => {
      this.store.font = this.refs.fontSelect.value;
      this.store.save();
      this.renderGrid();
    });
    this.refs.deviceBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.store.device = (btn as HTMLElement).dataset.device || 'iphone';
        this.store.save();
        this.updateDeviceButtons();
        this.renderGrid();
      });
    });
  }

  private setupGlobalControls() {
    this.refs.clearBtn.addEventListener('click', () => {
      if (!confirm(this.t.confirmClear)) return;
      this.store.images = [];
      this.store.save();
      this.updateVisibility();
      this.renderGrid();
    });
    this.refs.downloadBtn.addEventListener('click', () => this.exportZip());
  }

  private setupSafeArea() {
    this.refs.safeAreaToggle.addEventListener('click', () => {
      this.store.showSafeArea = !this.store.showSafeArea;
      this.store.save();
      this.updateSafeAreaUI();
      this.renderGrid();
    });
    this.refs.safeAreaColorInput.addEventListener('input', () => {
      this.store.safeAreaColor = this.refs.safeAreaColorInput.value;
      this.store.save();
      this.renderGrid();
    });
  }

  private setupGridEvents() {
    this.refs.previewGrid.addEventListener('input', (e) => this.onGridInput(e));
    this.refs.previewGrid.addEventListener('click', (e) => this.onGridClick(e));
  }

  private onGridInput(e: Event) {
    const target = e.target as HTMLElement;
    const id = target.dataset.imgId;
    const type = target.dataset.type;
    const img = this.store.images.find((i) => i.id === id);
    if (!img || !type) return;
    const val = (target as HTMLInputElement).value;
    this.applySettingFromInput(img, type, val);
    this.updateRangeLabel(type, id!, val);
    this.refreshSingle(img);
    this.store.save();
  }

  private applySettingFromInput(img: MockupImage, type: string, val: string) {
    const numFields = ['spacing', 'textSize', 'textRotation', 'textY', 'textX', 'deviceOffsetX', 'deviceOffsetY'];
    if (type === 'text') { img.settings.text = val; return; }
    if (type === 'textColor') { img.settings.textColor = val; return; }
    if (numFields.includes(type)) (img.settings as Record<string, unknown>)[type] = parseInt(val);
  }

  private updateRangeLabel(type: string, id: string, val: string) {
    const label = this.refs.previewGrid.querySelector(`[data-label-for="${type}-${id}"]`);
    if (!label) return;
    const suffixMap: Record<string, string> = { textSize: 'px', textRotation: '\u00b0' };
    const suffix = suffixMap[type] ?? '%';
    label.textContent = `${val}${suffix}`;
  }

  private onGridClick(e: Event) {
    this.tryCardAction(e.target as HTMLElement);
  }

  private tryCardAction(target: HTMLElement) {
    const actions: Array<[string, (el: HTMLElement) => void]> = [
      ['.mmg-delete-img', (el) => this.deleteImage(el.dataset.imgId!)],
      ['.mmg-duplicate-img', (el) => this.duplicateImage(el.dataset.imgId!)],
      ['.mmg-replace-img', (el) => this.startReplace(el.dataset.imgId!, false, false)],
      ['.mmg-replace-bg', (el) => this.startReplace(el.dataset.imgId!, false, true)],
      ['.mmg-add-variant', (el) => this.startReplace(el.dataset.imgId!, true, false)],
      ['.mmg-clear-bg', (el) => this.clearBg(el.dataset.imgId!)],
      ['.mmg-reset-text', (el) => this.resetText(el.dataset.imgId!)],
      ['.mmg-reset-device', (el) => this.resetDevice(el.dataset.imgId!)],
      ['.mmg-preset-btn', (el) => this.applyPreset(el.dataset.imgId!, parseInt(el.dataset.presetIndex ?? '0'))],
    ];
    for (const [sel, fn] of actions) {
      const el = target.closest(sel) as HTMLElement;
      if (el) { fn(el); return; }
    }
    this.tryVariantAction(target);
  }

  private tryVariantAction(target: HTMLElement) {
    const deleteVariant = target.closest('.mmg-delete-variant') as HTMLElement;
    const variantTab = target.closest('.mmg-variant-tab') as HTMLElement;
    if (deleteVariant) { this.deleteVariant(deleteVariant.dataset.imgId!, deleteVariant.dataset.varId!); return; }
    if (variantTab) this.activateVariant(variantTab.dataset.imgId!, variantTab.dataset.varId!);
  }

  private deleteImage(id: string) {
    this.store.images = this.store.images.filter((i) => i.id !== id);
    this.store.save();
    this.updateVisibility();
    this.renderGrid();
  }

  private duplicateImage(id: string) {
    const idx = this.store.images.findIndex((img) => img.id === id);
    const original = this.store.images[idx];
    if (!original) return;
    const copy: MockupImage = {
      ...original,
      id: Math.random().toString(36).slice(2, 11),
      settings: { ...original.settings },
      variants: original.variants.map((v) => ({ ...v, id: Math.random().toString(36).slice(2, 11) })),
    };
    this.store.images.splice(idx + 1, 0, copy);
    this.store.save();
    this.renderGrid();
  }

  private startReplace(id: string, addVariant: boolean, replaceBg: boolean) {
    this.currentTargetId = id;
    this.isAddingVariant = addVariant;
    this.isReplacingBackground = replaceBg;
    this.refs.replaceInput.click();
  }

  private clearBg(id: string) {
    const img = this.store.images.find((i) => i.id === id);
    if (!img) return;
    img.settings.bgImage = null;
    this.store.save();
    this.renderGrid();
  }

  private resetText(id: string) {
    const img = this.store.images.find((i) => i.id === id);
    if (!img) return;
    img.settings.textSize = 28;
    img.settings.textY = 82;
    img.settings.textX = 50;
    img.settings.textRotation = 0;
    img.settings.textColor = '#ffffff';
    this.store.save();
    this.renderGrid();
  }

  private resetDevice(id: string) {
    const img = this.store.images.find((i) => i.id === id);
    if (!img) return;
    img.settings.spacing = 40;
    img.settings.deviceOffsetX = 0;
    img.settings.deviceOffsetY = 0;
    this.store.save();
    this.renderGrid();
  }

  private applyPreset(id: string, index: number) {
    const img = this.store.images.find((i) => i.id === id);
    const preset = LAYOUT_PRESETS[index];
    if (!img || !preset) return;
    img.settings.spacing = preset.spacing;
    img.settings.textY = preset.textY;
    img.settings.textX = preset.textX;
    img.settings.textSize = preset.textSize ?? img.settings.textSize;
    img.settings.deviceOffsetX = preset.deviceOffsetX;
    img.settings.deviceOffsetY = preset.deviceOffsetY;
    img.settings.textRotation = preset.rotation;
    this.store.save();
    this.renderGrid();
  }

  private deleteVariant(imgId: string, varId: string) {
    const img = this.store.images.find((i) => i.id === imgId);
    if (!img || !varId || img.variants.length <= 1) return;
    img.variants = img.variants.filter((v) => v.id !== varId);
    if (img.activeVariantId === varId) img.activeVariantId = img.variants[0].id;
    this.store.save();
    this.renderGrid();
  }

  private activateVariant(imgId: string, varId: string) {
    const img = this.store.images.find((i) => i.id === imgId);
    if (img && varId) { img.activeVariantId = varId; this.renderGrid(); }
  }

  private setupReplaceListener() {
    this.refs.replaceInput.addEventListener('change', async (e) => {
      if (!this.currentTargetId) return;
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const dataUrl = await this.readFile(file);
      const img = this.store.images.find((i) => i.id === this.currentTargetId);
      if (img) await this.applyReplaceResult(img, dataUrl);
      this.store.save();
      this.renderGrid();
      this.refs.replaceInput.value = '';
      this.currentTargetId = null;
    });
  }

  private async applyReplaceResult(img: MockupImage, dataUrl: string) {
    if (this.isReplacingBackground) { img.settings.bgImage = dataUrl; return; }
    if (this.isAddingVariant) { this.addVariant(img, dataUrl); return; }
    this.replaceActiveVariant(img, dataUrl);
  }

  private addVariant(img: MockupImage, dataUrl: string) {
    const existing = img.variants.map((v) => v.language);
    const lang = this.getNextLang(existing, img.variants.length);
    const newVariant: MockupVariant = { id: Math.random().toString(36).slice(2, 11), language: lang, dataUrl };
    img.variants.push(newVariant);
    img.activeVariantId = newVariant.id;
  }

  private getNextLang(existing: string[], count: number): string {
    const candidates = ['EN', 'FR', 'DE', 'IT'];
    const found = candidates.find((l) => !existing.includes(l));
    return found ?? `V${count + 1}`;
  }

  private replaceActiveVariant(img: MockupImage, dataUrl: string) {
    const variant = img.variants.find((v) => v.id === img.activeVariantId) ?? img.variants[0];
    if (variant) variant.dataUrl = dataUrl;
  }

  private async handleUpload(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    for (const file of Array.from(files)) {
      const dataUrl = await this.readFile(file);
      this.store.images.push(this.createMockupImage(dataUrl));
    }
    this.store.save();
    this.updateVisibility();
    this.renderGrid();
  }

  private createMockupImage(dataUrl: string): MockupImage {
    const variantId = Math.random().toString(36).slice(2, 11);
    return {
      id: Math.random().toString(36).slice(2, 11),
      variants: [{ id: variantId, language: 'ES', dataUrl }],
      activeVariantId: variantId,
      settings: { text: '', spacing: 40, textSize: 28, textColor: '#ffffff', textRotation: 0, textY: 82, textX: 50, deviceOffsetX: 0, deviceOffsetY: 0, bgImage: null },
    };
  }

  private async handleMassReplace(e: Event) {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    const fileList = Array.from(files);
    for (let i = 0; i < fileList.length; i++) {
      const dataUrl = await this.readFile(fileList[i]);
      await this.applyMassReplaceFile(dataUrl, i);
    }
    this.store.save();
    this.updateVisibility();
    this.renderGrid();
    this.refs.massReplaceInput.value = '';
  }

  private async applyMassReplaceFile(dataUrl: string, index: number) {
    if (this.store.images[index]) { this.replaceActiveVariant(this.store.images[index], dataUrl); return; }
    this.store.images.push(this.createMockupImage(dataUrl));
  }

  private updateColors() {
    this.store.gradient = {
      start: this.refs.gradientStart.value,
      end: this.refs.gradientEnd.value,
      angle: parseInt(this.refs.gradientAngle.value),
    };
    this.store.save();
    this.refreshAll();
  }

  private updateSafeAreaUI() {
    this.refs.safeAreaToggle.classList.toggle('mmg-toggle-on', this.store.showSafeArea);
    this.refs.safeAreaDot.style.transform = this.store.showSafeArea ? 'translateX(1.25rem)' : 'translateX(0)';
  }

  private syncUIWithStore() {
    this.refs.fontSelect.value = this.store.font;
    this.refs.gradientStart.value = this.store.gradient.start;
    this.refs.gradientEnd.value = this.store.gradient.end;
    this.refs.gradientAngle.value = this.store.gradient.angle.toString();
    this.refs.angleValue.textContent = `${this.store.gradient.angle}\u00b0`;
    this.refs.safeAreaColorInput.value = this.store.safeAreaColor;
    this.updateSafeAreaUI();
    this.updateDeviceButtons();
  }

  private updateDeviceButtons() {
    this.refs.deviceBtns.forEach((btn) => {
      btn.classList.toggle('mmg-device-active', (btn as HTMLElement).dataset.device === this.store.device);
    });
  }

  private renderPresets() {
    this.refs.gradientPresets.innerHTML = GRADIENTS.map((g) => `<button class="mmg-preset-swatch" style="background:linear-gradient(135deg,${g.start},${g.end})" data-start="${g.start}" data-end="${g.end}"></button>`).join('');
    this.refs.gradientPresets.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.refs.gradientStart.value = (btn as HTMLButtonElement).dataset.start!;
        this.refs.gradientEnd.value = (btn as HTMLButtonElement).dataset.end!;
        this.updateColors();
      });
    });
  }

  private updateVisibility() {
    const has = this.store.images.length > 0;
    this.refs.emptyState.style.display = has ? 'none' : '';
    this.refs.previewGrid.style.display = has ? '' : 'none';
    this.refs.downloadBtn.style.display = has ? '' : 'none';
    this.refs.clearBtn.style.display = has ? '' : 'none';
  }

  renderGrid() {
    this.refs.previewGrid.innerHTML = this.store.images.map((img) => this.renderCard(img)).join('');
    this.refreshAll();
  }

  private renderCard(img: MockupImage): string {
    return `<div class="mmg-preview-card">
      <div class="mmg-card-actions">
        <button data-img-id="${img.id}" class="mmg-card-action-btn mmg-duplicate-img" title="${this.t.cardTitleDuplicate}">${this.svgDuplicate()}</button>
        <button data-img-id="${img.id}" class="mmg-card-action-btn mmg-replace-img" title="${this.t.cardTitleReplace}">${this.svgUpload()}</button>
      </div>
      <div class="mmg-canvas-wrap"><canvas id="canvas-${img.id}" class="mmg-canvas"></canvas></div>
      <div class="mmg-card-body">
        ${this.renderLayoutPresets(img)}
        ${this.renderBrandingSection(img)}
        ${this.renderDeviceSection(img)}
        ${this.renderSceneSection(img)}
        <button data-img-id="${img.id}" class="mmg-delete-img mmg-delete-btn">${this.t.cardBtnDeleteScene}</button>
      </div>
    </div>`;
  }

  private renderLayoutPresets(img: MockupImage): string {
    const presetNames: Record<string, string> = {
      classic: this.t.presetClassic, mobileBottom: this.t.presetMobileBottom,
      mobileTop: this.t.presetMobileTop, focus: this.t.presetFocus,
      dynamic: this.t.presetDynamic, splitLeft: this.t.presetSplitLeft,
      splitRight: this.t.presetSplitRight, imageLeft: this.t.presetImageLeft,
      imageRight: this.t.presetImageRight,
    };
    return `<div class="mmg-section">
      <h4 class="mmg-section-label">${this.t.cardSectionLayouts}</h4>
      <div class="mmg-presets-grid">${LAYOUT_PRESETS.map((p, idx) => `<button class="mmg-preset-btn" data-img-id="${img.id}" data-preset-index="${idx}">${presetNames[p.name] ?? p.name}</button>`).join('')}</div>
    </div>`;
  }

  private renderBrandingSection(img: MockupImage): string {
    return `<div class="mmg-section">
      <div class="mmg-section-head">
        <h4 class="mmg-section-label">${this.t.cardSectionBranding}</h4>
        <button data-img-id="${img.id}" class="mmg-reset-text mmg-reset-btn" title="${this.t.cardTitleResetText}">${this.svgReset()}</button>
      </div>
      <div class="mmg-color-row">
        <span class="mmg-color-sublabel">${this.t.cardLabelColor}</span>
        <div class="mmg-color-field">
          <input type="color" value="${img.settings.textColor}" data-img-id="${img.id}" data-type="textColor" class="mmg-color-input" />
          <span class="mmg-color-hex">${img.settings.textColor.toUpperCase()}</span>
        </div>
      </div>
      <textarea data-img-id="${img.id}" data-type="text" placeholder="${this.t.cardTextPlaceholder}" class="mmg-textarea">${img.settings.text}</textarea>
      <div class="mmg-range-grid">
        ${this.renderRangeInput(img, 'textSize', this.t.cardRangeLabelSize, 10, 120, 'px')}
        ${this.renderRangeInput(img, 'textX', this.t.cardRangeLabelX, 0, 100, '%')}
        ${this.renderRangeInput(img, 'textY', this.t.cardRangeLabelY, 0, 100, '%')}
        ${this.renderRangeInput(img, 'textRotation', this.t.cardRangeLabelRotation, -90, 90, '\u00b0')}
      </div>
    </div>`;
  }

  private renderDeviceSection(img: MockupImage): string {
    return `<div class="mmg-section">
      <div class="mmg-section-head">
        <h4 class="mmg-section-label">${this.t.cardSectionDevice}</h4>
        <button data-img-id="${img.id}" class="mmg-reset-device mmg-reset-btn" title="${this.t.cardTitleResetDevice}">${this.svgReset()}</button>
      </div>
      <div class="mmg-range-grid">
        ${this.renderRangeInput(img, 'spacing', this.t.cardRangeLabelScale, 0, 100, '%')}
        ${this.renderRangeInput(img, 'deviceOffsetX', this.t.cardRangeLabelX, -50, 50, '%')}
        ${this.renderRangeInput(img, 'deviceOffsetY', this.t.cardRangeLabelY, -50, 50, '%')}
      </div>
    </div>`;
  }

  private renderSceneSection(img: MockupImage): string {
    const clearBtn = img.settings.bgImage ? `<button data-img-id="${img.id}" class="mmg-clear-bg mmg-clear-bg-btn">${this.svgTrash()}</button>` : '';
    return `<div class="mmg-section">
      <h4 class="mmg-section-label">${this.t.cardSectionScene}</h4>
      <div class="mmg-scene-row">
        <button data-img-id="${img.id}" class="mmg-replace-bg mmg-scene-btn">${this.svgImage()} ${this.t.cardBtnSpecialBg}</button>
        ${clearBtn}
      </div>
    </div>`;
  }

  private renderRangeInput(img: MockupImage, type: string, label: string, min: number, max: number, suffix: string): string {
    const val = (img.settings as Record<string, unknown>)[type] as number;
    return `<div class="mmg-range-item">
      <div class="mmg-range-row">
        <span>${label}</span>
        <span data-label-for="${type}-${img.id}">${val}${suffix}</span>
      </div>
      <input type="range" min="${min}" max="${max}" value="${val}" data-img-id="${img.id}" data-type="${type}" class="mmg-range" />
    </div>`;
  }

  private refreshAll() {
    this.store.images.forEach((img) => this.refreshSingle(img));
  }

  private refreshSingle(image: MockupImage) {
    const canvas = document.getElementById(`canvas-${image.id}`) as HTMLCanvasElement;
    if (!canvas) return;
    const variant = image.variants.find((v) => v.id === image.activeVariantId) ?? image.variants[0];
    if (!variant) return;
    RenderingEngine.drawMockup(canvas, image, {
      dataUrl: variant.dataUrl,
      device: DEVICES[this.store.device],
      gs: { gradient: this.store.gradient, font: this.store.font, safeArea: { show: this.store.showSafeArea, color: this.store.safeAreaColor } },
    });
  }

  private async exportZip() {
    const zip = new JSZip();
    const originalHTML = this.refs.downloadBtn.innerHTML;
    this.refs.downloadBtn.innerHTML = this.t.processingExport;
    this.refs.downloadBtn.setAttribute('disabled', 'true');
    const canvas = document.createElement('canvas');
    canvas.width = EXPORT_WIDTH;
    canvas.height = EXPORT_HEIGHT;
    await this.renderAllToZip(zip, canvas);
    await this.saveZip(zip);
    this.refs.downloadBtn.innerHTML = this.t.exportDone;
    setTimeout(() => {
      this.refs.downloadBtn.innerHTML = originalHTML;
      this.refs.downloadBtn.removeAttribute('disabled');
    }, 2000);
  }

  private async renderAllToZip(zip: JSZip, canvas: HTMLCanvasElement) {
    for (let i = 0; i < this.store.images.length; i++) {
      const img = this.store.images[i];
      for (const variant of img.variants) await this.renderVariantToZip(zip, img, variant, canvas, i);
    }
  }

  private async renderVariantToZip(zip: JSZip, img: MockupImage, variant: MockupVariant, canvas: HTMLCanvasElement, idx: number) {
    await RenderingEngine.drawMockup(canvas, img, {
      dataUrl: variant.dataUrl,
      device: DEVICES[this.store.device],
      gs: { gradient: this.store.gradient, font: this.store.font, safeArea: { show: this.store.showSafeArea, color: this.store.safeAreaColor } },
      isExport: true,
    });
    const blob = await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), 'image/webp', 1.0));
    const suffix = img.variants.length > 1 ? `-${variant.language.toUpperCase()}` : '';
    zip.file(`mockup-${idx + 1}${suffix}.webp`, blob);
  }

  private async saveZip(zip: JSZip) {
    const ts = new Date().toISOString().replace(/[:\-]|\..+/g, '').replace('T', '_');
    const tag = this.store.device === 'iphone' ? 'ios' : 'android';
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, `${ts}-store-mocks-${tag}.zip`);
  }

  private readFile(file: File): Promise<string> {
    return new Promise((r) => {
      const reader = new FileReader();
      reader.onload = (e) => r(e.target?.result as string);
      reader.readAsDataURL(file);
    });
  }

  private svgDuplicate(): string {
    return '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>';
  }

  private svgUpload(): string {
    return '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>';
  }

  private svgReset(): string {
    return '<svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>';
  }

  private svgTrash(): string {
    return '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>';
  }

  private svgImage(): string {
    return '<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>';
  }

}
