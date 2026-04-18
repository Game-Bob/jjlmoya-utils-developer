import type { ToolDefinition } from './types';
import { JSON_FORMATTER_TOOL } from './tool/jsonFormatter/index';
import { SVG_TO_CSS_TOOL } from './tool/svgToCss/index';
import { ASPECT_RATIO_TOOL } from './tool/aspectRatio/index';
import { PLACEHOLDER_GENERATOR_TOOL } from './tool/placeholderGenerator/index';
import { URL_ENCODER_DECODER_TOOL } from './tool/urlEncoderDecoder/index';
import { DUPLICATE_CSS_REMOVER_TOOL } from './tool/duplicateCssRemover/index';
import { CSS_TO_INLINE_CONVERTER_TOOL } from './tool/cssToInlineConverter/index';
import { CSS_SPECIFICITY_CALCULATOR_TOOL } from './tool/cssSpecificityCalculator/index';
import { CRON_GENERATOR_TOOL } from './tool/cronGenerator/index';
import { KEYCODE_TOOL } from './tool/keycode/index';
import { LLM_COST_CALCULATOR_TOOL } from './tool/llmCostCalculator/index';
import { MUSICAL_TYPOGRAPHY_TOOL } from './tool/musicalTypography/index';
import { MOBILE_MOCKUP_GENERATOR_TOOL } from './tool/mobileMockupGenerator/index';
import { HASH_GENERATOR_TOOL } from './tool/hashGenerator/index';
import { PROMPT_LIBRARY_TOOL } from './tool/promptLibrary/index';
import { COLOR_CONVERTER_TOOL } from './tool/colorConverter/index';
import { READABILITY_CALCULATOR_TOOL } from './tool/readabilityCalculator/index';
import { SVG_SANITIZER_TOOL } from './tool/svgSanitizer/index';
import { UTM_GENERATOR_TOOL } from './tool/utmGenerator/index';
import { URL_CLEANER_TOOL } from './tool/urlCleaner/index';
import { INSPECTOR_CERTIFICADOS_SSL_TOOL } from './tool/inspectorCertificadosSsl/index';
import { GENERADOR_SECURITY_TXT_TOOL } from './tool/generadorSecurityTxt/index';
import { CALCULADORA_TIEMPO_DATOS_TOOL } from './tool/calculadoraTiempoDatos/index';
import { CONVERSOR_EXCEL_CSV_HTML_TOOL } from './tool/conversorExcelCsvHtml/index';

export const ALL_TOOLS: ToolDefinition[] = [JSON_FORMATTER_TOOL, SVG_TO_CSS_TOOL, ASPECT_RATIO_TOOL, PLACEHOLDER_GENERATOR_TOOL, URL_ENCODER_DECODER_TOOL, DUPLICATE_CSS_REMOVER_TOOL, CSS_TO_INLINE_CONVERTER_TOOL, CSS_SPECIFICITY_CALCULATOR_TOOL, CRON_GENERATOR_TOOL, KEYCODE_TOOL, LLM_COST_CALCULATOR_TOOL, MUSICAL_TYPOGRAPHY_TOOL, MOBILE_MOCKUP_GENERATOR_TOOL, HASH_GENERATOR_TOOL, PROMPT_LIBRARY_TOOL, COLOR_CONVERTER_TOOL, READABILITY_CALCULATOR_TOOL, SVG_SANITIZER_TOOL, UTM_GENERATOR_TOOL, URL_CLEANER_TOOL, INSPECTOR_CERTIFICADOS_SSL_TOOL, GENERADOR_SECURITY_TXT_TOOL, CALCULADORA_TIEMPO_DATOS_TOOL, CONVERSOR_EXCEL_CSV_HTML_TOOL];

export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
