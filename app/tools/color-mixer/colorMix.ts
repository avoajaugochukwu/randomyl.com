export interface MixColor {
  key: string;
  label: string;
  hex: string;
}

// Common colors people ask about ("what does blue and yellow make?").
export const colors: MixColor[] = [
  { key: 'red', label: 'Red', hex: '#dc2626' },
  { key: 'orange', label: 'Orange', hex: '#ea580c' },
  { key: 'yellow', label: 'Yellow', hex: '#facc15' },
  { key: 'green', label: 'Green', hex: '#16a34a' },
  { key: 'blue', label: 'Blue', hex: '#2563eb' },
  { key: 'purple', label: 'Purple', hex: '#7c3aed' },
  { key: 'pink', label: 'Pink', hex: '#ec4899' },
  { key: 'brown', label: 'Brown', hex: '#78350f' },
  { key: 'black', label: 'Black', hex: '#111827' },
  { key: 'white', label: 'White', hex: '#ffffff' },
];

export interface MixResult {
  name: string;
  hex: string;
}

// Subtractive (paint / pigment) mixing — what people mean by "what does X and Y make".
// Keys are the two color keys sorted alphabetically and joined with "+".
export const mixes: Record<string, MixResult> = {
  'blue+red': { name: 'Purple', hex: '#7c3aed' },
  'blue+yellow': { name: 'Green', hex: '#16a34a' },
  'red+yellow': { name: 'Orange', hex: '#ea580c' },
  'blue+green': { name: 'Teal (blue-green)', hex: '#0d9488' },
  'green+yellow': { name: 'Yellow-green (chartreuse)', hex: '#84cc16' },
  'green+red': { name: 'Brown', hex: '#78350f' },
  'blue+orange': { name: 'Brown', hex: '#6b4a2b' },
  'purple+yellow': { name: 'Brown', hex: '#6b5b2b' },
  'orange+purple': { name: 'Brown', hex: '#6b3f2b' },
  'green+orange': { name: 'Olive / brown', hex: '#556b2f' },
  'blue+purple': { name: 'Indigo', hex: '#4f46e5' },
  'orange+red': { name: 'Red-orange', hex: '#f97316' },
  'pink+red': { name: 'Rose', hex: '#e11d48' },
  'blue+pink': { name: 'Lavender purple', hex: '#8b5cf6' },
  'green+purple': { name: 'Muddy grey-green', hex: '#4b5563' },
  'green+pink': { name: 'Muddy grey', hex: '#9ca3af' },
  // tints (with white)
  'red+white': { name: 'Pink', hex: '#fb7185' },
  'blue+white': { name: 'Light blue', hex: '#93c5fd' },
  'green+white': { name: 'Light green', hex: '#86efac' },
  'white+yellow': { name: 'Pale yellow', hex: '#fef08a' },
  'orange+white': { name: 'Peach', hex: '#fdba74' },
  'purple+white': { name: 'Lavender', hex: '#c4b5fd' },
  'pink+white': { name: 'Light pink', hex: '#fbcfe8' },
  'brown+white': { name: 'Tan / beige', hex: '#d2b48c' },
  // shades (with black)
  'black+white': { name: 'Grey', hex: '#6b7280' },
  'black+red': { name: 'Maroon', hex: '#7f1d1d' },
  'black+blue': { name: 'Navy', hex: '#1e3a8a' },
  'black+green': { name: 'Dark green', hex: '#14532d' },
  'black+yellow': { name: 'Olive', hex: '#6b6b16' },
  'black+orange': { name: 'Dark brown', hex: '#5c3a1e' },
  'black+purple': { name: 'Deep violet', hex: '#3b0764' },
  'black+pink': { name: 'Dark mauve', hex: '#831843' },
};

function avgHex(a: string, b: string): string {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [r1, g1, b1] = p(a);
  const [r2, g2, b2] = p(b);
  const c = (x: number, y: number) => Math.round((x + y) / 2).toString(16).padStart(2, '0');
  return `#${c(r1, r2)}${c(g1, g2)}${c(b1, b2)}`;
}

export function mix(aKey: string, bKey: string): MixResult & { same: boolean } {
  const a = colors.find((c) => c.key === aKey)!;
  const b = colors.find((c) => c.key === bKey)!;
  if (aKey === bKey) return { name: a.label, hex: a.hex, same: true };
  const key = [aKey, bKey].sort().join('+');
  const found = mixes[key];
  if (found) return { ...found, same: false };
  // fallback: a real averaged swatch with an honest label
  return { name: 'A muddy blend of the two', hex: avgHex(a.hex, b.hex), same: false };
}
