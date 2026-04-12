export interface HashGeneratorUI extends Record<string, string> {
  labelInput: string;
  placeholderInput: string;
  labelSalt: string;
  placeholderSalt: string;
  labelRounds: string;
  copyMd5: string;
  copySha1: string;
  copySha256: string;
  copySha512: string;
}
