export function formatString(input: string): string {
  const noSpaces = input.replace(/\s+/g, "_");
  const formatted = noSpaces.replace(/[^\w_]/g, "_").toLowerCase();
  return formatted;
}
