import { describe, expect, it } from "vitest";
import { inspectCodePoints, inspectPair, reportText } from "./logic";

describe("unicode normalization inspector logic", () => {
  it("detects canonical equivalence from precomposed and decomposed text", () => {
    const result = inspectPair("café", "cafe\u0301");
    expect(result.exactEqual).toBe(false);
    expect(result.kind).toBe("canonical");
    expect(result.forms.every((item) => item.equal)).toBe(true);
  });

  it("separates compatibility equivalence from canonical equivalence", () => {
    const result = inspectPair("Ａ", "A");
    expect(result.kind).toBe("compatibility");
    expect(result.forms.find((item) => item.form === "NFC")?.equal).toBe(false);
    expect(result.forms.find((item) => item.form === "NFKC")?.equal).toBe(true);
  });

  it("recognizes exact equality and genuine differences", () => {
    expect(inspectPair("same", "same").kind).toBe("same");
    expect(inspectPair("cat", "car").kind).toBe("different");
  });

  it("reports code points as Unicode scalar values and flags controls", () => {
    const records = inspectCodePoints("A\u200B\t");
    expect(records.map((record) => record.codePoint)).toEqual([
      "U+0041",
      "U+200B",
      "U+0009",
    ]);
    expect(records[1]?.flags).toContain("format");
    expect(records[1]?.flags).toContain("invisible");
    expect(records[2]?.display).toBe("TAB");
  });

  it("creates a compact copyable report", () => {
    const report = reportText(inspectPair("é", "e\u0301"));
    expect(report).toContain("Result: canonical");
    expect(report).toContain("NFC: equal");
    expect(report).toContain("U+00E9");
  });
});
