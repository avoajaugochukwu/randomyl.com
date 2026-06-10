export interface Mood {
  color: string;   // ring color name
  hex: string;     // swatch color
  mood: string;    // short mood label
  meaning: string; // what the color traditionally signals
}

// Traditional mood-ring color chart. A real mood ring's color comes from
// thermochromic liquid crystals reacting to skin temperature, so warmer
// (relaxed) hands read blue/violet and cooler (tense) hands read amber/black.
export const moods: Mood[] = [
  { color: 'Violet', hex: '#7c3aed', mood: 'Passionate & happy', meaning: 'Excited, romantic, and full of energy — the warmest, most positive reading.' },
  { color: 'Blue', hex: '#2563eb', mood: 'Calm & relaxed', meaning: 'At ease, happy, and content — the classic “everything is good” color.' },
  { color: 'Blue-green', hex: '#0d9488', mood: 'Relaxed but alert', meaning: 'Calm and somewhat charged — chilled out but still switched on.' },
  { color: 'Green', hex: '#16a34a', mood: 'Neutral & average', meaning: 'Calm, balanced, and steady — the everyday baseline mood.' },
  { color: 'Amber', hex: '#d97706', mood: 'Mixed & uncertain', meaning: 'A little nervous or unsettled, with mixed emotions and a busy mind.' },
  { color: 'Gray', hex: '#6b7280', mood: 'Anxious & strained', meaning: 'Tense and on edge — cool hands and a restless, worried feeling.' },
  { color: 'Black', hex: '#1f2937', mood: 'Stressed & tense', meaning: 'Stressed, overworked, or anxious — the coolest, most tense reading.' },
];
