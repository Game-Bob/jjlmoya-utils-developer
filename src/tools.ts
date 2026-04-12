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

export const ALL_TOOLS: ToolDefinition[] = [JSON_FORMATTER_TOOL, SVG_TO_CSS_TOOL, ASPECT_RATIO_TOOL, PLACEHOLDER_GENERATOR_TOOL, URL_ENCODER_DECODER_TOOL, DUPLICATE_CSS_REMOVER_TOOL, CSS_TO_INLINE_CONVERTER_TOOL, CSS_SPECIFICITY_CALCULATOR_TOOL, CRON_GENERATOR_TOOL];
