export interface LlmCostCalculatorUI extends Record<string, string> {
  labelModel: string;
  labelInputTokens: string;
  labelOutputTokens: string;
  labelRequests: string;
  unitWords: string;
  labelCostPerRequest: string;
  labelTotal: string;
  labelInput: string;
  labelOutput: string;
}
