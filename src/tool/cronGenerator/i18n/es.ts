import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron';
const title = 'Generador de Expresiones Cron Online. Traductor y Visualizador';
const description =
  'Herramienta visual gratuita para generar expresiones Cron de Linux. Traduce * * * * * a lenguaje humano y visualiza las próximas 5 ejecuciones en tiempo real.';

const faqData = [
  {
    question: '¿Qué es una expresión Cron?',
    answer:
      'Es una cadena de texto que representa un horario de ejecución para tareas automáticas en sistemas tipo Unix (Linux, macOS). Se compone de 5 campos que definen minutos, horas, días del mes, meses y días de la semana.',
  },
  {
    question: '¿Es compatible con todos los sistemas?',
    answer:
      'Sí, las expresiones generadas siguen el estándar POSIX, compatible con Crontab de Linux, crons de macOS, y servicios cloud como AWS CloudWatch o GitHub Actions.',
  },
  {
    question: '¿Qué significa el asterisco (*) en Cron?',
    answer:
      'El asterisco es un comodín que significa "todos". Por ejemplo, un * en el campo de los minutos indica que la tarea se ejecutará cada minuto del rango definido.',
  },
  {
    question: '¿Cómo puedo verificar las próximas ejecuciones?',
    answer:
      'La herramienta incluye un visor en tiempo real que muestra exactamente las próximas 5 fechas y horas en las que se activará tu tarea según la expresión actual.',
  },
];

const howToData = [
  {
    name: 'Seleccionar el intervalo',
    text: 'Elige con qué frecuencia quieres que se ejecute la tarea usando los presets rápidos (cada minuto, cada hora, diariamente, etc.).',
  },
  {
    name: 'Configurar detalles avanzados',
    text: 'Cambia a la pestaña "Avanzado" para definir manualmente los minutos, horas o días de la semana específicos.',
  },
  {
    name: 'Verificar la traducción y las fechas',
    text: 'Lee la descripción en lenguaje humano y revisa las próximas 5 ejecuciones para confirmar que el horario es correcto.',
  },
  {
    name: 'Copiar expresión',
    text: 'Copia la cadena resultante y pégala directamente en tu archivo crontab o configuración de servidor.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minuto',
  labelHour: 'Hora',
  labelDom: 'Día (Mes)',
  labelMonth: 'Mes',
  labelDow: 'Día (Semana)',
  tabQuick: 'Rápido',
  tabAdvanced: 'Avanzado',
  fieldMinute: 'Minuto (0-59)',
  fieldHour: 'Hora (0-23)',
  fieldDom: 'Día del Mes (1-31)',
  fieldMonth: 'Mes (1-12)',
  fieldDow: 'Día de la Semana (0-6)',
  hintMinute: 'Ej: *, */5, 0,30',
  hintDow: '0 = Domingo, 6 = Sábado',
  labelNextRuns: 'Próximas Ejecuciones',
  btnCopy: 'Copiar Expresión',
  btnCopied: 'Copiado!',
  msgNoRuns: 'No se encontraron ejecuciones próximas razonables.',
  msgError: 'Error al calcular fechas.',
  presetEveryMinute: 'Cada minuto',
  presetEveryHour: 'Cada hora',
  presetDaily: 'Diario',
  presetWeekly: 'Semanal',
  presetMonthly: 'Mensual',
  presetYearly: 'Anual',
  descEveryMinute: 'Se ejecuta cada minuto',
  descEveryHour: 'Se ejecuta al inicio de cada hora',
  descEveryDay: 'Se ejecuta cada día a medianoche',
  descPrefix: 'Se ejecuta',
  descEveryMin: 'cada minuto',
  descEveryHourOnDot: 'cada hora en punto',
  descAtMinute: 'en el minuto {m} de cada hora',
  descAtTime: 'a las {h}:{m}',
  descOnDay: ' el día {d} del mes',
  descInMonth: ' en el mes {mon}',
  descIfDow: ' si es {d} (0=Dom, 6=Sab)',
  descDays: 'Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado',
  descInvalid: 'Expresión inválida',
  timeNow: 'ahora',
  timeMin: 'min',
  timeHour: 'h',
  timeDays: 'días',
  locale: 'es-ES',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'GNU Crontab Manual: Expresiones Cron en Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron en Wikipedia: Historia y Sintaxis',
      url: 'https://en.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La importancia de Cron en la automatización moderna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A pesar de vivir en la era de los servidores <em>serverless</em> y los flujos de trabajo en la nube, el sistema <strong>Crontab</strong> sigue siendo la columna vertebral de la infraestructura tecnológica mundial. Desde pequeños blogs hasta gigantescas infraestructuras bancarias, la programación de tareas es lo que permite que el mundo digital no se detenga.',
    },
    {
      type: 'title',
      text: 'Anatomía de una Expresión Cron',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Campo 1 - Minuto (0-59):</strong> Cuándo empieza la tarea dentro de la hora.',
        '<strong>Campo 2 - Hora (0-23):</strong> Formato de 24 horas obligatorio.',
        '<strong>Campo 3 - Día del Mes (1-31):</strong> Día calendario específico.',
        '<strong>Campo 4 - Mes (1-12):</strong> De enero a diciembre.',
        '<strong>Campo 5 - Día de la Semana (0-6):</strong> El 0 suele ser Domingo.',
      ],
    },
    {
      type: 'title',
      text: 'Operadores especiales y errores comunes',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Usa la barra <code>/</code> para definir pasos: <code>*/5</code> en minutos ejecuta cada 5 minutos. La coma <code>,</code> crea listas (<code>1,3,5</code>) y el guion <code>-</code> define rangos (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: 'El 90% de los servidores funcionan en <strong>UTC</strong>. Si programas una tarea a las 02:00 AM pensando en tu horario local, podrías ejecutarla en un momento inesperado. Además, Cron no tiene acceso a tu <code>$PATH</code> habitual — usa siempre rutas absolutas como <code>/usr/local/bin/node</code>.',
    },
  ],
};
