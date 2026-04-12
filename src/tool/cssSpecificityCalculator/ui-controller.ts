import { calculateSpecificity, compareSpecificity } from './logic';

type SpecDisp = { ids: HTMLElement; cls: HTMLElement; els: HTMLElement };
type SpecBlocks = { a: HTMLElement; b: HTMLElement; tie: HTMLElement };

function renderSpec(disp: SpecDisp, spec: [number, number, number]): void {
  disp.ids.textContent = spec[0].toString();
  disp.cls.textContent = spec[1].toString();
  disp.els.textContent = spec[2].toString();
}

function setBlockWinner(block: HTMLElement, isWinner: boolean): void {
  block.style.borderColor = isWinner ? 'var(--spec-success)' : '';
  block.style.paddingTop = isWinner ? '2.5rem' : '';
  block.style.boxShadow = isWinner ? '0 0 0 2px var(--spec-success)' : '';
  const banner = block.querySelector('.spec-winner-banner') as HTMLElement | null;
  if (banner) banner.style.transform = isWinner ? 'translateY(0)' : 'translateY(-100%)';
}

function updateResult(ins: [HTMLInputElement, HTMLInputElement], disps: [SpecDisp, SpecDisp], blocks: SpecBlocks): void {
  const vA = ins[0].value.trim();
  const vB = ins[1].value.trim();
  const specA = calculateSpecificity(vA);
  const specB = calculateSpecificity(vB);
  renderSpec(disps[0], specA);
  renderSpec(disps[1], specB);
  const win = compareSpecificity(specA, specB);
  setBlockWinner(blocks.a, win === 1 && !!vA);
  setBlockWinner(blocks.b, win === -1 && !!vB);
  const isTie = win === 0 && !!vA && !!vB;
  blocks.tie.style.opacity = isTie ? '1' : '0';
  blocks.tie.style.transform = isTie ? 'translateY(0)' : 'translateY(6px)';
}

export function setupCalculator(): void {
  const inputA = document.getElementById('spec-input-a') as HTMLInputElement | null;
  const inputB = document.getElementById('spec-input-b') as HTMLInputElement | null;
  const blockA = document.getElementById('spec-block-a');
  const blockB = document.getElementById('spec-block-b');
  const tieMsg = document.getElementById('spec-tie-msg');
  if (!inputA || !inputB || !blockA || !blockB || !tieMsg) return;
  const dispA: SpecDisp = {
    ids: document.getElementById('spec-res-a-ids')!,
    cls: document.getElementById('spec-res-a-cls')!,
    els: document.getElementById('spec-res-a-els')!,
  };
  const dispB: SpecDisp = {
    ids: document.getElementById('spec-res-b-ids')!,
    cls: document.getElementById('spec-res-b-cls')!,
    els: document.getElementById('spec-res-b-els')!,
  };
  const blocks: SpecBlocks = { a: blockA, b: blockB, tie: tieMsg };
  const ins: [HTMLInputElement, HTMLInputElement] = [inputA, inputB];
  const compare = () => updateResult(ins, [dispA, dispB], blocks);
  inputA.addEventListener('input', compare);
  inputB.addEventListener('input', compare);
}
