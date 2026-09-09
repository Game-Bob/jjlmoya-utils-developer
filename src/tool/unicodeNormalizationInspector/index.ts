import type { ToolDefinition } from "../../types";
import { unicodeNormalizationInspector } from "./entry";

export * from "./entry";

export const UNICODE_NORMALIZATION_INSPECTOR_TOOL: ToolDefinition = {
  entry: unicodeNormalizationInspector,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
