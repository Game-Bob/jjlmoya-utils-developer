import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'datos-abiertos-csv-json-valores-faltantes-filas-duplicadas-comprobador',
  title: 'Comprobador de valores faltantes en CSV de datos abiertos',
  description: 'Comprueba tablas CSV y JSON localmente para detectar valores faltantes, filas duplicadas, tipos mezclados, errores de análisis y valores numéricos atípicos.',
  ui: { ...ui, fileLabel: 'Cargar una tabla CSV o JSON', pasteLabel: 'O pega una tabla', exampleButton: 'Inspeccionar ejemplo', profileButton: 'Comprobar estos datos', clearButton: 'Borrar perfil', noFile: 'Ningún archivo seleccionado', dropHint: 'Suelta un archivo o selecciónalo del dispositivo', localBoundary: 'El archivo permanece en este navegador. No se sube nada.', intakeTitle: 'Trae una tabla al banco de pruebas', emptyTitle: 'El banco de inspección está listo', factsTitle: 'Hechos medidos en tus datos', signalTitle: 'Mapa de señales', signalIntro: 'Empieza por las señales que requieren una decisión humana.', warningsTitle: 'Señales que requieren contexto', reviewTitle: 'Nota de revisión editable' },
  seo: [
    { type: 'title', text: 'Encuentra problemas estructurales antes de reutilizar datos abiertos', level: 2 },
    { type: 'paragraph', html: 'Una tabla puede parecer ordenada y esconder campos vacíos, registros duplicados, tipos mezclados, filas mal formadas o números extremos. Esta herramienta lee CSV o JSON en el navegador y convierte esas señales en recuentos que se pueden rastrear hasta las filas originales.' },
    { type: 'title', text: 'Qué conviene revisar en una tabla pública', level: 2 },
    { type: 'paragraph', html: 'Se cuentan por separado los valores ausentes, null y en blanco. Las filas duplicadas aparecen con sus números de fila y los valores numéricos atípicos se marcan con límites IQR de Tukey. Una señal abre una pregunta de revisión, no dicta un veredicto.' },
    { type: 'list', items: ['Compara la cabecera CSV o la estructura JSON con la documentación de origen.', 'Revisa las filas duplicadas antes de eliminar registros.', 'Interpreta tipos mezclados y atípicos con unidades y contexto del dominio.', 'Conserva la fuente, el periodo, las definiciones y el uso previsto junto al perfil.'] },
  ],
  faqTitle: 'Preguntas sobre la revisión de tablas',
  faq: [
    { question: '¿Qué archivos puede revisar?', answer: 'Un CSV con fila de cabecera o un array JSON de objetos. Un objeto JSON también puede guardar ese array bajo data, rows o records.' },
    { question: '¿Cómo distingue faltante, null, blanco y cero?', answer: 'Una propiedad JSON ausente, JSON null, un texto vacío y el cero numérico se registran por separado.' },
    { question: '¿Cómo calcula los valores atípicos?', answer: 'Usa los límites de Tukey con 1,5 veces el rango intercuartílico y muestra las filas afectadas.' },
    { question: '¿Demuestra que el conjunto tiene buena calidad?', answer: 'No. Mide señales estructurales, pero no demuestra exactitud, semántica, procedencia, legalidad ni adecuación.' },
  ],
  bibliography,
  howTo: [
    { name: 'Preparar la tabla', text: 'Usa una cabecera CSV estable o un array JSON y conserva el contexto de la fuente.' },
    { name: 'Cargar los datos', text: 'Elige un archivo local, pega el texto o abre el ejemplo incluido.' },
    { name: 'Leer las señales', text: 'Revisa recuentos de faltantes, blancos, duplicados, tipos mezclados y atípicos.' },
    { name: 'Rastrear las filas', text: 'Vuelve al archivo original usando los números de fila y los hallazgos por columna.' },
    { name: 'Editar la revisión', text: 'Añade el propósito y las decisiones, y guarda la nota junto a la fuente.' },
  ],
});
