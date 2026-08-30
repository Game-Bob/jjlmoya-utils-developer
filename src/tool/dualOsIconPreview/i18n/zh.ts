import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy { locale: string; slug: string; title: string; description: string; faqTitle: string; bibliographyTitle: string; ui: DualOsIconPreviewUI; faq: { question: string; answer: string }[]; howTo: { name: string; text: string }[]; seo: SEOSection[]; }
function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}
const title = 'iOS 和 Android 应用图标审计';
const description = '上传 logo，审计它在 iPhone 和 Pixel 上的显示效果。在浏览器中检查 iOS 模式、Android 自适应遮罩、安全留白和主题图标。';
const ui: DualOsIconPreviewUI = {
  labelUpload: '上传 logo', uploadAction: '选择图片', uploadHint: '同一个标志填充两部手机', dropHint: 'PNG、JPG、WEBP 或 SVG', labelAppName: '应用名称', appNamePlaceholder: '显示在图标下方', labelBrandColor: '系统强调色', labelIosAppearance: 'iOS 外观', iosAppearanceHint: '在每种主屏幕模式中检查标志', iosDefault: '默认', iosDark: '深色', iosClear: '透明', iosTinted: '着色', labelAndroidShape: 'Android 自适应遮罩', androidShapeHint: '启动器可以改变外部形状', androidCircle: '圆形', androidSquircle: '圆角方形', androidRounded: '圆角', androidTeardrop: '水滴', labelAndroidTheme: '预览主题图标', androidThemeHint: '用一种系统色重新着色所有图标，同时保留轮廓', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: '主屏幕', androidHomeLabel: '启动器', safeZoneLabel: 'iOS 遮罩', adaptiveLayerLabel: '自适应图标', monochromeLabel: '主题图层', nameFallback: '你的应用', emptyLogo: '你的 logo', fileError: '请选择图片文件后继续。', statusReady: '准备就绪', statusNeedsReview: '添加 logo', stageKicker: '两个设备场景，一次审计', stageNote: '在真实场景中检查每种处理', auditTitle: 'Logo 审计', auditHint: '根据已加载图片在本地测量', auditWaiting: '上传 logo', auditNotChecked: '尚未检查', auditFile: '画布', auditAspect: '宽高比', auditResolution: '分辨率', auditIosMask: 'iOS 遮罩留白', auditAndroidZone: 'Android 安全区域', auditMargin: '最小边缘留白', auditTransparency: 'Alpha 边缘', auditTransparent: '透明', auditFullBleed: '铺满', statusPass: '通过', statusReview: '检查',
};
const faq = [
  { question: '这个应用图标审计会检查什么？', answer: '它会检查图片尺寸、宽高比、分辨率、透明边缘留白、iOS 遮罩留白和 Android 自适应安全区域，也可以查看启动器尺寸下的应用名称。' },
  { question: '可以同时查看 iPhone 和 Android 吗？', answer: '可以。同一个 logo 和应用名称会同时显示在 iPhone 主屏幕和 Pixel 启动器中，两个设备的周围信息都会保留。' },
  { question: 'Android 主题图标模式有什么作用？', answer: '它会对场景中的所有 Android 图标应用同一种系统色和单色处理，包括上传的图标、周围的应用和 dock。这样可以检查没有原始颜色时轮廓是否仍然清晰。' },
  { question: 'Logo 会离开我的浏览器吗？', answer: '不会。图片会在浏览器中本地读取和测量，这个工具不会把它上传到服务器。' },
  { question: '结果可以直接用于提交应用商店吗？', answer: '不可以。这是本地设计和资源审计。最终导出、启动器行为和商店审核仍应使用 Apple 与 Android 平台工具，以及真实设备或模拟器进行验证。' },
];
const howTo = [
  { name: '上传 logo', text: '选择 PNG、JPG、WEBP 或 SVG logo。同一张本地图片会显示在两个设备场景中。' },
  { name: '输入应用名称', text: '输入启动器标签，检查它在周围真实应用标签旁边是否仍然清晰。' },
  { name: '检查 iOS 外观', text: '切换默认、深色、透明和着色模式，查找对比度不足或消失的细节。' },
  { name: '检查 Android 遮罩', text: '尝试圆形、圆角方形、圆角和水滴遮罩，然后启用主题图标检查整个启动器中的单色版本。' },
  { name: '根据审计采取行动', text: '在准备最终平台资源前增加留白、简化细节或改善对比度。' },
];

export const content = createDualOsIconPreviewContent({ locale: 'zh', slug: 'dual-ios-android-app-icon-preview', title, description, faqTitle: '常见问题', bibliographyTitle: '参考资料', ui, faq, howTo, seo: [
  { type: 'title', text: '发布前审计应用图标', level: 2 },
  { type: 'paragraph', html: '上传一个 logo，同时在 iPhone 主屏幕和 Pixel 启动器场景中检查它。这个应用图标审计会测量画布、宽高比、分辨率、透明边缘留白、iOS 遮罩留白和 Android 自适应安全区域。也请输入真实的应用名称，因为图标本身通过检查后，启动器标签仍可能变得难以阅读。' },
  { type: 'title', text: '应用图标审计检查的内容', level: 3 },
  { type: 'list', items: ['画布和宽高比: 在平台工具添加自己的处理前，确认源文件是正方形。', '分辨率: 在小源文件于较大的启动器场景中变模糊前发现它们。', '边缘留白: 查看重要的形状或文字是否离 iOS 遮罩或 Android 安全区域太近。', '启动器标签: 在与相邻图标相同的尺寸下检查应用名称，发现不自然的换行。', 'Android 主题处理: 对目标图标、周围图标和 dock 应用单色系统色，避免原始颜色掩盖脆弱的轮廓。'] },
  { type: 'title', text: '同时查看两个设备场景', level: 3 },
  { type: 'paragraph', html: '把两部手机的视图当作一个审计界面。切换 iOS 默认、深色、透明和着色外观，再尝试 Android 圆形、圆角方形、圆角和水滴遮罩。目的是了解同一资源在不同启动器表面上的表现，而不是让两个平台进行对比竞争。' },
  { type: 'title', text: '这个审计无法保证什么', level: 3 },
  { type: 'paragraph', html: '这是基于浏览器的设计和资源检查，不是 Xcode、Android Studio、真实设备或模拟器的替代品。启动器、操作系统版本和制造商可能使用不同的遮罩、间距、对比度和主题图标规则。先用审计尽早发现风险，再在你支持的环境中验证最终平台资源。' },
  { type: 'tip', title: '实用的审计流程', html: '在每种处理下，以实际使用的最小尺寸检查 logo。如果它只有在某个背景、遮罩或原始颜色下才有效，请在发布前简化图形或增加留白。' },
] });
