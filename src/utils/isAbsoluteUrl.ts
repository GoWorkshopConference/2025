export const isAbsoluteUrl = (input: string) => {
  try {
    new URL(input); // 第二引数のbaseなしで成功するなら絶対URL
    return true;
  } catch {
    return false;
  }
};
if (import.meta.vitest) {
  const { describe, test, expect } = import.meta.vitest;
  describe("isAbsoluteUrl", () => {
    test.each<{ input: string; expected: boolean }>([
      { input: "https://example.com", expected: true },
      { input: "http://example.com", expected: true },
      { input: "https://example.com/path", expected: true },
      { input: "https://example.com/path?query=value", expected: true },
      { input: "/path", expected: false },
      { input: "./path", expected: false },
      { input: "../path", expected: false },
      { input: "path", expected: false },
      { input: "path/to/file", expected: false },
      { input: "", expected: false },
      { input: "not a url", expected: false },
    ])("isAbsoluteUrl($input) -> $expected", ({ input, expected }) => {
      expect(isAbsoluteUrl(input)).toBe(expected);
    });
  });
}
