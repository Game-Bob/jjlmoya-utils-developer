import type { ToolDefinition } from './types';
import { JSON_FORMATTER_TOOL } from './tool/jsonFormatter/index';
import { SVG_TO_CSS_TOOL } from './tool/svgToCss/index';

export const ALL_TOOLS: ToolDefinition[] = [JSON_FORMATTER_TOOL, SVG_TO_CSS_TOOL];
