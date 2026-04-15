import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'desinfetante-svg-online';
const title = 'Sanitizador SVG Online';
const description = 'Otimize e limpe SVGs exportados do Figma, Adobe Illustrator ou Inkscape. Remova metadados, atributos desnecessários e grupos vazios para obter um SVG pronto para produção.';

const faqData = [
  { question: 'Posso colar o HTML completo de uma página com um SVG incorporado?', answer: 'Sim. O sanitizador detecta o elemento SVG dentro do HTML e extrai apenas esse bloco para processamento. Funciona também se você colar o fragmento SVG diretamente.' },
  { question: 'Funciona com SVGs do Illustrator?', answer: 'Sim. O Illustrator exporta SVGs com declarações XML, metadados e namespaces proprietários que o sanitizador remove. O resultado é um SVG compatível com todos os navegadores modernos.' },
  { question: 'Qual é a diferença entre limpeza e minificação?', answer: 'A limpeza remove atributos e tags desnecessários, mas mantém o formato indentado para que você possa ler e editar o código. A minificação também collapsa tudo em uma linha para reduzir o tamanho do arquivo ao máximo.' },
  { question: 'Remover IDs pode quebrar o SVG?', answer: 'Apenas se um elemento no SVG faz referência a outro por ID, por exemplo através de fill="url(#gradient)". Nesse caso, desabilite a opção Remover IDs. Ela está desabilitada por padrão justamente para evitar esse problema.' },
  { question: 'Meu código SVG é enviado para algum servidor?', answer: 'Não. Todo processamento acontece em seu navegador usando as APIs DOMParser e XMLSerializer nativas. O código nunca deixa seu dispositivo.' },
];

const howToData = [
  { name: 'Cole o SVG', text: 'Cole o código SVG exportado do Figma, Illustrator ou Inkscape na área de texto.' },
  { name: 'Configure opções', text: 'Ative ou desative opções: remover IDs, remover largura/altura e minificar de acordo com suas necessidades.' },
  { name: 'Limpe', text: 'Clique em Limpar SVG para processar o código e obter o resultado otimizado.' },
  { name: 'Copie ou baixe', text: 'Use os botões Copiar ou Baixar para obter o SVG limpo pronto para produção.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };

const ui: SvgSanitizerUI = { labelInput: 'Cole seu SVG sujo aqui', labelOutput: 'SVG Limpo', optRemoveIds: 'Remover IDs', optRemoveWH: 'Remover largura/altura', optMinify: 'Minificar', btnSanitize: 'Limpar SVG', btnCopy: 'Copiar', btnCopied: 'Copiado', btnDownload: 'Baixar', statOriginal: 'Original', statCleaned: 'Limpo', statReduction: 'Redução', statElems: 'Elem. removidos', statAttrs: 'Attrs. removidos', errorPaste: 'Cole um SVG antes de limpar.', errorProcess: 'Erro ao processar o SVG.', };

export const content: ToolLocaleContent<SvgSanitizerUI> = { slug, title, description, ui, faqTitle: 'Perguntas Frequentes', faq: faqData, bibliographyTitle: 'Referências', bibliography: [{ name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' }, { name: 'Figma SVG Export - Official Documentation', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' }, { name: 'SVGO - SVG Optimizer (open source reference)', url: 'https://github.com/svg/svgo' }], howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo: [{ type: 'title', text: 'Sanitizador SVG: Limpar Código do Figma e Illustrator', level: 2 }, { type: 'paragraph', html: 'Cole qualquer SVG exportado do <strong>Figma</strong>, Adobe Illustrator ou do inspetor do navegador e obtenha um arquivo vetorial limpo e otimizado pronto para produção.' }, { type: 'title', text: 'Por que SVGs exportados são tão sujos?', level: 3 }, { type: 'paragraph', html: 'Quando você exporta um SVG do Figma, você obtém um arquivo carregado com atributos que fazem sentido apenas dentro do aplicativo: <code>data-name</code>, <code>xml:space</code>, referências a camadas internas e metadados de design. O resultado é um SVG que pode pesar 40-70% mais do que o necessário.' }, { type: 'title', text: 'O que o Sanitizador remove', level: 3 }, { type: 'list', items: ['<strong>Metadados do editor:</strong> <code>metadata</code>, tags <code>title</code> e <code>desc</code> que Figma e Illustrator adicionam automaticamente.', '<strong>Namespaces Inkscape:</strong> todos os elementos com prefixo <code>inkscape:</code> e <code>sodipodi:</code>.', '<strong>Atributos desnecessários:</strong> <code>xml:space</code>, <code>version</code>, <code>xmlns:*</code> supérfluos e atributos Figma <code>data-*</code>.', '<strong>Grupos vazios:</strong> elementos <code>&lt;g&gt;</code> sem conteúdo deixados como artefatos de camadas deletadas.', '<strong>Declarações XML:</strong> a declaração <code>&lt;?xml version="1.0"?&gt;</code> e DOCTYPE desnecessários ao incorporar SVG em HTML.'] }] };
