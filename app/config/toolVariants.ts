import { ToolKey } from './tools';

// Preset shapes mirror the client generator components' `preset`/`initial` props.
export interface NumberPreset { min?: number; max?: number; count?: number; unique?: boolean; sort?: 'none' | 'asc' | 'desc'; }
export interface WordPreset { count?: number; letters?: number; startsWith?: string; }
export interface PictionaryPreset { mode?: 'pictionary' | 'charades'; difficulty?: 'easy' | 'medium' | 'hard'; count?: number; }
export interface PosPreset { initial?: 'adjective' | 'verb' | 'noun' | 'adverb'; }
export interface TeamPreset { unitLabel?: 'Team' | 'Group'; units?: number; }
export interface DecisionPreset { mode?: 'options' | 'yesno'; }

export interface ToolVariant {
  slug: string;        // URL segment under the hub route
  h1: string;          // page H1 + meta title
  metaTitle: string;   // <title>
  description: string; // meta description
  intro: string;       // unique above-the-tool copy
  preset: NumberPreset | WordPreset | PictionaryPreset | PosPreset | TeamPreset | DecisionPreset;
}

export interface VariantHub {
  key: ToolKey;
  hubRoute: string;       // e.g. 'random-number-generator'
  hubLabel: string;       // short breadcrumb/link label
  variantsHeading: string;
  variants: ToolVariant[];
}

const numberVariants: ToolVariant[] = [
  { slug: '1-10', h1: 'Random Number Generator 1–10', metaTitle: 'Random Number Generator 1-10', description: 'Generate a random number between 1 and 10, free and instant. Pick one or many, with no-repeat and sorting options.', intro: 'Need a random number between 1 and 10? This generator is preset to the 1–10 range — just hit Generate. Great for quick decisions, simple games, and classroom picks. Change the range anytime below.', preset: { min: 1, max: 10 } },
  { slug: '1-100', h1: 'Random Number Generator 1–100', metaTitle: 'Random Number Generator 1-100', description: 'Generate a random number between 1 and 100, free and instant. Single pick or bulk, with no-repeat and sorting.', intro: 'Pick a random number from 1 to 100 in one click — the range is already set for you. Perfect for percentages, raffles, and number games. Adjust the range, count, or order below if you need something different.', preset: { min: 1, max: 100 } },
  { slug: '1-50', h1: 'Random Number Generator 1–50', metaTitle: 'Random Number Generator 1-50', description: 'Generate a random number between 1 and 50 instantly. Free, no sign-up, with no-repeat and sorting options.', intro: 'This tool is preset to pick a random number between 1 and 50. Tap Generate for an instant result, or change the minimum and maximum to fit your own range.', preset: { min: 1, max: 50 } },
  { slug: '1-20', h1: 'Random Number Generator 1–20', metaTitle: 'Random Number Generator 1-20', description: 'Generate a random number between 1 and 20 instantly. Free and no sign-up, with no-repeat and sorting.', intro: 'Get a random number from 1 to 20 with one tap. Handy for small draws, dice-style rolls, and quick games. The range is preset but fully adjustable below.', preset: { min: 1, max: 20 } },
  { slug: '1-1000', h1: 'Random Number Generator 1–1000', metaTitle: 'Random Number Generator 1-1000', description: 'Generate a random number between 1 and 1000 instantly. Free, with bulk, no-repeat, and sorting options.', intro: 'Pick a random number between 1 and 1000 — the wide range is already set up. Generate a single value or a whole batch with no repeats. Tune the range and count below.', preset: { min: 1, max: 1000 } },
  { slug: '1-5', h1: 'Random Number Generator 1–5', metaTitle: 'Random Number Generator 1-5', description: 'Generate a random number between 1 and 5 instantly. Free, no sign-up required.', intro: 'A quick random number between 1 and 5, preset and ready. Good for small groups, simple choices, and games. Change the range anytime below.', preset: { min: 1, max: 5 } },
  { slug: '1-6', h1: 'Random Number 1–6 (Dice Roller)', metaTitle: 'Random Number 1-6 — Dice Roller', description: 'Roll a random number between 1 and 6 — a free online dice roller. Roll one die or several at once.', intro: 'Rolling a die? This is preset to a random number between 1 and 6. Increase the count to roll several dice at once, or widen the range below for other games.', preset: { min: 1, max: 6 } },
  { slug: '1-3', h1: 'Random Number Generator 1–3', metaTitle: 'Random Number Generator 1-3', description: 'Generate a random number between 1 and 3 instantly. Free and no sign-up.', intro: 'Pick a random 1, 2, or 3 in one tap — the range is preset. Useful for three-way choices and quick splits. Adjust below for any other range.', preset: { min: 1, max: 3 } },
  { slug: '1-2', h1: 'Random Number Generator 1–2', metaTitle: 'Random Number Generator 1-2 (Coin Flip)', description: 'Generate a random number between 1 and 2 — a simple coin-flip style picker. Free and instant.', intro: 'A random 1 or 2, like a digital coin flip. Tap Generate to decide. Need something bigger? Change the maximum below.', preset: { min: 1, max: 2 } },
  { slug: 'no-repeats', h1: 'Random Number Generator with No Repeats', metaTitle: 'Random Number Generator — No Repeats (Unique)', description: 'Generate unique random numbers with no repeats. Perfect for draws, lotteries, and picking multiple winners.', intro: 'This generator is set to return unique numbers only — no value appears twice. Ideal for drawing multiple raffle winners or lottery-style picks. Set your range and how many you need, then Generate.', preset: { min: 1, max: 100, count: 6, unique: true } },
];

const wordVariants: ToolVariant[] = [
  { slug: '3-letter', h1: 'Random 3-Letter Word Generator', metaTitle: 'Random 3-Letter Word Generator', description: 'Generate random 3-letter words instantly. Free, family-friendly — great for word games, kids, and puzzles.', intro: 'This generator returns random three-letter words. Perfect for early readers, quick word games, and warm-up puzzles. Generate one or a whole list, then copy in a click.', preset: { letters: 3, count: 5 } },
  { slug: '4-letter', h1: 'Random 4-Letter Word Generator', metaTitle: 'Random 4-Letter Word Generator', description: 'Generate random 4-letter words instantly. Free and family-friendly — ideal for games and puzzles.', intro: 'Get random four-letter words on demand. Handy for word games, spelling practice, and puzzle building. Pull a single word or a full batch.', preset: { letters: 4, count: 5 } },
  { slug: '5-letter', h1: 'Random 5-Letter Word Generator', metaTitle: 'Random 5-Letter Word Generator', description: 'Generate random 5-letter words instantly — great for Wordle-style games, crosswords, and puzzles. Free.', intro: 'This tool generates random five-letter words — a favorite for Wordle-style games, crosswords, and starting-word ideas. Generate one or many and copy them instantly.', preset: { letters: 5, count: 5 } },
  { slug: '6-letter', h1: 'Random 6-Letter Word Generator', metaTitle: 'Random 6-Letter Word Generator', description: 'Generate random 6-letter words instantly. Free and family-friendly for games and puzzles.', intro: 'Random six-letter words at the tap of a button. Useful for tougher word games, crosswords, and vocabulary work. Get a single word or a list.', preset: { letters: 6, count: 5 } },
  { slug: '7-letter', h1: 'Random 7-Letter Word Generator', metaTitle: 'Random 7-Letter Word Generator', description: 'Generate random 7-letter words instantly. Free, family-friendly — for games, puzzles, and practice.', intro: 'Generate random seven-letter words for word games, anagrams, and puzzles. Pull one word at a time or a full set and copy with one click.', preset: { letters: 7, count: 5 } },
];

const pictionaryVariants: ToolVariant[] = [
  { slug: 'for-kids', h1: 'Pictionary Word Generator for Kids', metaTitle: 'Pictionary Word Generator for Kids (Easy)', description: 'Easy Pictionary words for kids — simple, family-friendly prompts ready for game night. Free, no sign-up.', intro: 'Preset to easy mode with simple, kid-friendly words like cat, sun, and cake. Perfect for children’s parties and classrooms. Switch the difficulty or game mode below anytime.', preset: { mode: 'pictionary', difficulty: 'easy', count: 1 } },
  { slug: 'for-adults', h1: 'Pictionary Word Generator for Adults', metaTitle: 'Pictionary Word Generator for Adults (Hard)', description: 'Hard Pictionary words for adults — challenging prompts and tricky phrases for a real test. Free and instant.', intro: 'Set to hard mode with challenging words and phrases for a grown-up crowd. Great for parties and competitive game nights. Adjust the difficulty or switch to charades below.', preset: { mode: 'pictionary', difficulty: 'hard', count: 1 } },
  { slug: 'charades', h1: 'Charades Word Generator', metaTitle: 'Charades Word Generator — Random Ideas', description: 'Random charades words and actions to act out, by difficulty. Free, instant, perfect for game night.', intro: 'This generator is set to charades mode — actions and scenarios to act out, no drawing. Choose a difficulty and generate prompts for your round. Switch to Pictionary anytime below.', preset: { mode: 'charades', difficulty: 'medium', count: 1 } },
  { slug: 'charades-for-adults', h1: 'Charades Word Generator for Adults', metaTitle: 'Charades for Adults — Word Generator (Hard)', description: 'Hard charades ideas for adults — tricky actions and scenarios to act out. Free and ready for game night.', intro: 'Charades on hard mode, tuned for adults — trickier actions and funny scenarios to act out. Generate a prompt per turn or a list for the whole round.', preset: { mode: 'charades', difficulty: 'hard', count: 1 } },
];

const teamVariants: ToolVariant[] = [
  { slug: 'groups', h1: 'Random Group Generator', metaTitle: 'Random Group Generator', description: 'Split a list of names into random, evenly-sized groups. Free and instant — perfect for classrooms and workshops.', intro: 'Paste your names and this tool splits them into fair, random groups. Set how many groups you want and shuffle as often as you like. Switch to teams anytime below.', preset: { unitLabel: 'Group', units: 3 } },
];

const decisionVariants: ToolVariant[] = [
  { slug: 'yes-or-no', h1: 'Yes or No Generator', metaTitle: 'Yes or No Generator — Random Answer', description: 'Get a random yes or no answer in one tap. A simple, unbiased decision maker for quick questions.', intro: 'Need a quick yes or no? Tap the button for a random, unbiased answer. For choices with more than two options, switch to the full decision maker below.', preset: { mode: 'yesno' } },
];

const posVariants: ToolVariant[] = [
  { slug: 'verbs', h1: 'Random Verb Generator', metaTitle: 'Random Verb Generator', description: 'Generate random verbs (action words) instantly. Free — great for writing prompts, grammar practice, and games.', intro: 'This generator is set to verbs — action words like sprint, shatter, and wander. Generate a list for writing prompts, grammar lessons, or Mad Libs. Switch to adjectives, nouns, or adverbs anytime below.', preset: { initial: 'verb' } },
  { slug: 'adverbs', h1: 'Random Adverb Generator', metaTitle: 'Random Adverb Generator', description: 'Generate random adverbs instantly — words like quickly and silently. Free, for writing and grammar practice.', intro: 'Preset to adverbs — words that modify verbs, usually ending in ‑ly, like quickly and silently. Handy for grammar exercises and writing prompts. Change the part of speech below.', preset: { initial: 'adverb' } },
];

export const variantHubs: VariantHub[] = [
  { key: 'number', hubRoute: 'random-number-generator', hubLabel: 'Number Generator', variantsHeading: 'Popular ranges & modes', variants: numberVariants },
  { key: 'word', hubRoute: 'random-word-generator', hubLabel: 'Word Generator', variantsHeading: 'By word length', variants: wordVariants },
  { key: 'pictionary', hubRoute: 'pictionary-word-generator', hubLabel: 'Pictionary Generator', variantsHeading: 'Pictionary & charades modes', variants: pictionaryVariants },
  { key: 'pos', hubRoute: 'random-adjective-generator', hubLabel: 'Adjective Generator', variantsHeading: 'Other parts of speech', variants: posVariants },
  { key: 'team', hubRoute: 'random-team-generator', hubLabel: 'Team Generator', variantsHeading: 'Teams & groups', variants: teamVariants },
  { key: 'decision', hubRoute: 'decision-maker', hubLabel: 'Decision Maker', variantsHeading: 'Decision modes', variants: decisionVariants },
];

export function getHub(hubRoute: string): VariantHub | undefined {
  return variantHubs.find((h) => h.hubRoute === hubRoute);
}

export function getVariant(hubRoute: string, slug: string): ToolVariant | undefined {
  return getHub(hubRoute)?.variants.find((v) => v.slug === slug);
}
