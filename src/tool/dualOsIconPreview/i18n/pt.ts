import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'Auditoria de ícones de app para iOS e Android';
const description = 'Envie um logótipo e audite o seu aspeto no iPhone e no Pixel. Inspecione modos do iOS, máscaras adaptativas do Android, margens seguras e ícones temáticos no navegador.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Enviar logótipo', uploadAction: 'Escolher uma imagem', uploadHint: 'A mesma marca preenche os dois telemóveis', dropHint: 'PNG, JPG, WEBP ou SVG', labelAppName: 'Nome da app', appNamePlaceholder: 'Mostrado por baixo do ícone', labelBrandColor: 'Cor de destaque do sistema', labelIosAppearance: 'Aspeto do iOS', iosAppearanceHint: 'Verifique a marca em todos os modos do ecrã principal', iosDefault: 'Predefinido', iosDark: 'Escuro', iosClear: 'Claro', iosTinted: 'Colorido', labelAndroidShape: 'Máscara adaptativa do Android', androidShapeHint: 'O launcher pode alterar a forma exterior', androidCircle: 'Círculo', androidSquircle: 'Squircle', androidRounded: 'Arredondado', androidTeardrop: 'Gota', labelAndroidTheme: 'Pré visualizar ícone temático', androidThemeHint: 'Recolore cada ícone com uma tonalidade do sistema e preserva a sua silhueta', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Ecrã principal', androidHomeLabel: 'Launcher', safeZoneLabel: 'Máscara do iOS', adaptiveLayerLabel: 'Ícone adaptativo', monochromeLabel: 'Camada temática', nameFallback: 'A sua app', emptyLogo: 'O seu logótipo', fileError: 'Escolha um ficheiro de imagem para continuar.', statusReady: 'Pronto', statusNeedsReview: 'Adicionar logótipo', stageKicker: 'Dois contextos de dispositivo, uma auditoria', stageNote: 'Inspecione cada tratamento no seu contexto', auditTitle: 'Auditoria do logótipo', auditHint: 'Medido localmente a partir da imagem carregada', auditWaiting: 'Envie um logótipo', auditNotChecked: 'Não verificado', auditFile: 'Tela', auditAspect: 'Proporção', auditResolution: 'Resolução', auditIosMask: 'Margem da máscara iOS', auditAndroidZone: 'Zona segura Android', auditMargin: 'Margem mínima', auditTransparency: 'Borda alfa', auditTransparent: 'Transparente', auditFullBleed: 'Preenchimento total', statusPass: 'PASSA', statusReview: 'REVER',
};
const faq = [
  { question: 'O que verifica esta auditoria do ícone da app?', answer: 'Verifica dimensões, proporção, resolução, margem transparente, margem da máscara do iOS e zona segura adaptativa do Android. Também permite inspecionar o nome da app no tamanho do launcher.' },
  { question: 'Posso ver iPhone e Android ao mesmo tempo?', answer: 'Sim. O mesmo logótipo e nome aparecem simultaneamente num ecrã principal do iPhone e num launcher Pixel, mantendo visível o contexto dos dois dispositivos.' },
  { question: 'O que faz o modo de ícone temático do Android?', answer: 'Aplica uma tonalidade do sistema e um tratamento monocromático a todos os ícones Android da cena, incluindo o ícone enviado, as apps vizinhas e a dock. Assim pode verificar se a silhueta continua legível sem as cores originais.' },
  { question: 'O logótipo sai do meu navegador?', answer: 'Não. A imagem é lida e medida localmente no navegador. Esta ferramenta não a envia para um servidor.' },
  { question: 'Está pronto para enviar a app para uma loja?', answer: 'Não. É uma auditoria local de design e assets. Para a exportação final, o comportamento do launcher e a aprovação da loja, use as ferramentas da Apple e do Android, além de um dispositivo real ou emulador.' },
];
const howTo = [
  { name: 'Enviar o logótipo', text: 'Escolha um logótipo PNG, JPG, WEBP ou SVG. A mesma imagem local aparece nos dois contextos de dispositivo.' },
  { name: 'Introduzir o nome da app', text: 'Escreva a etiqueta do launcher e confirme se continua legível junto dos nomes reais das apps vizinhas.' },
  { name: 'Inspecionar os aspetos do iOS', text: 'Alterne entre Predefinido, Escuro, Claro e Colorido e procure contraste fraco ou detalhes que desaparecem.' },
  { name: 'Inspecionar as máscaras do Android', text: 'Experimente círculo, squircle, arredondado e gota. Depois ative o modo temático para rever a versão monocromática em todo o launcher.' },
  { name: 'Agir sobre a auditoria', text: 'Adicione espaço, simplifique detalhes finos ou melhore o contraste antes de preparar os assets finais da plataforma.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'pt', slug: 'auditoria-icones-app-ios-android', title, description, faqTitle: 'Perguntas frequentes', bibliographyTitle: 'Referências', ui, faq, howTo, seo: [
  { type: 'title', text: 'Audite o ícone da sua app antes do lançamento', level: 2 },
  { type: 'paragraph', html: 'Envie um logótipo e inspecione-o simultaneamente no contexto de um ecrã principal do iPhone e de um launcher Pixel. Esta auditoria de ícones mede a tela, a proporção, a resolução, a margem transparente, a margem da máscara do iOS e a zona segura adaptativa do Android. Introduza também o nome real da app, porque uma marca pode passar na verificação do ícone e falhar quando a etiqueta do launcher deixa de ser legível.' },
  { type: 'title', text: 'O que esta auditoria do ícone verifica', level: 3 },
  { type: 'list', items: ['Tela e proporção: confirme que a origem é quadrada antes de as ferramentas da plataforma adicionarem o seu próprio tratamento.', 'Resolução: detete ficheiros de origem pequenos antes de ficarem desfocados ou inutilizáveis em launchers maiores.', 'Margem exterior: veja se formas ou letras importantes estão demasiado próximas da máscara do iOS ou da zona segura do Android.', 'Etiqueta do launcher: verifique o nome da app à mesma escala dos ícones vizinhos e detete quebras de linha estranhas.', 'Tratamento temático do Android: aplique uma tonalidade monocromática do sistema ao alvo, aos ícones vizinhos e à dock para revelar uma silhueta fraca.'] },
  { type: 'title', text: 'Veja os dois contextos de dispositivo ao mesmo tempo', level: 3 },
  { type: 'paragraph', html: 'Use as duas vistas do telemóvel como uma única superfície de auditoria. Percorra os aspetos Predefinido, Escuro, Claro e Colorido do iOS e experimente depois as máscaras círculo, squircle, arredondado e gota do Android. O objetivo é perceber como o mesmo asset se comporta em superfícies de launcher, não declarar uma plataforma melhor do que a outra.' },
  { type: 'title', text: 'O que a auditoria não pode garantir', level: 3 },
  { type: 'paragraph', html: 'Esta é uma revisão de design e assets no navegador, não substitui Xcode, Android Studio, um dispositivo real ou um emulador. Launchers, versões do sistema e fabricantes podem aplicar máscaras, espaçamento, contraste e regras de ícones temáticos diferentes. Use a auditoria para encontrar riscos cedo e valide depois os assets finais nos ambientes que suporta.' },
  { type: 'tip', title: 'Rotina prática de auditoria', html: 'Reveja o logótipo no menor tamanho prático e em todos os tratamentos disponíveis. Se só funcionar com um fundo, uma máscara ou as cores originais, simplifique o desenho ou acrescente margem antes de publicar.' },
] });
