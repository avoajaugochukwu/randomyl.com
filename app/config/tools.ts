/* eslint-disable @typescript-eslint/no-explicit-any */
import { Phone, Type, Book, Box, QrCode, Hash, WholeWord, Palette, SpellCheck,
  ALargeSmall, Droplet, PawPrint, Users, Flag, Scale, Quote, HelpCircle,
  Lightbulb, Smile, Flame, AtSign, Drama } from 'lucide-react';

export type ToolKey = 'phone' | 'noun' | 'bible' | 'object' | 'qr' | 'number' | 'word' | 'pictionary' | 'pos'
  | 'letter' | 'color' | 'animal' | 'team' | 'country' | 'decision' | 'sentence' | 'question'
  | 'fact' | 'emoji' | 'truthordare' | 'username' | 'charname';

export interface Tool {
  key: ToolKey;
  icon: any;
  iconColor: string;
  label: string;
  description: string;
  route: string;
  comingSoon?: boolean;
}

export const tools: Tool[] = [
  {
    key: 'phone',
    label: 'Random Phone Number Generator',
    icon: Phone,
    iconColor: '#2563eb',
    route: 'random-phone-number-generator',
    description: 'Generate valid-format phone numbers for any country or region. Perfect for testing, mock data, or development needs.',
    comingSoon: false
  },
  {
    key: 'noun',
    label: 'Random Noun Generator',
    icon: Type,
    iconColor: '#16a34a',
    route: 'random-noun-generator',
    description: 'Create lists of random nouns - concrete, abstract, proper, or themed. Ideal for writing, education, and content creation.',
    comingSoon: false
  },
  {
    key: 'bible',
    label: 'Random Bible Verse Generator',
    icon: Book,
    iconColor: '#ca8a04',
    route: 'random-bible-verse-generator',
    description: 'Generate random Bible verses with specific themes, books, or categories. Perfect for daily devotionals, study, or inspiration.',
    comingSoon: false
  },
  {
    key: 'object',
    label: 'Random Object Generator',
    icon: Box,
    iconColor: '#9333ea',
    route: 'random-object-generator',
    description: 'Generate random JavaScript objects with custom properties and types. Perfect for testing APIs, mock data, and development.',
    comingSoon: false
  },
  {
    key: 'qr',
    label: 'QR Code Generator',
    icon: QrCode,
    iconColor: '#f59e0b',
    route: 'random-qr-code-generator',
    description: 'Generate random QR codes with custom content and styling',
    comingSoon: false
  },
  {
    key: 'number',
    label: 'Random Number Generator',
    icon: Hash,
    iconColor: '#0891b2',
    route: 'random-number-generator',
    description: 'Pick random numbers in any range — single or bulk, with no-repeat and sorting options. Instant and free.',
    comingSoon: false
  },
  {
    key: 'word',
    label: 'Random Word Generator',
    icon: WholeWord,
    iconColor: '#db2777',
    route: 'random-word-generator',
    description: 'Generate random English words by length or starting letter. Perfect for games, brainstorming, and writing prompts.',
    comingSoon: false
  },
  {
    key: 'pictionary',
    label: 'Pictionary Word Generator',
    icon: Palette,
    iconColor: '#7c3aed',
    route: 'pictionary-word-generator',
    description: 'Random Pictionary and charades words by difficulty — easy for kids, hard for adults. Ready for game night.',
    comingSoon: false
  },
  {
    key: 'pos',
    label: 'Random Adjective Generator',
    icon: SpellCheck,
    iconColor: '#ea580c',
    route: 'random-adjective-generator',
    description: 'Generate random adjectives, verbs, nouns, and adverbs by part of speech. Great for writing and grammar practice.',
    comingSoon: false
  },
  {
    key: 'letter',
    label: 'Random Letter Generator',
    icon: ALargeSmall,
    iconColor: '#0d9488',
    route: 'random-letter-generator',
    description: 'Pick random letters A–Z, uppercase or lowercase, vowels or consonants. Instant and free for games and learning.',
    comingSoon: false
  },
  {
    key: 'color',
    label: 'Random Color Generator',
    icon: Droplet,
    iconColor: '#e11d48',
    route: 'random-color-generator',
    description: 'Generate random colors with hex and RGB codes and live swatches. Perfect for design, art, and inspiration.',
    comingSoon: false
  },
  {
    key: 'animal',
    label: 'Random Animal Generator',
    icon: PawPrint,
    iconColor: '#65a30d',
    route: 'random-animal-generator',
    description: 'Generate random animals from around the world. Great for kids, games, writing prompts, and learning.',
    comingSoon: false
  },
  {
    key: 'team',
    label: 'Random Team Generator',
    icon: Users,
    iconColor: '#2563eb',
    route: 'random-team-generator',
    description: 'Paste a list of names and split them into fair, random teams or groups. Free and instant for class and sports.',
    comingSoon: false
  },
  {
    key: 'country',
    label: 'Random Country Generator',
    icon: Flag,
    iconColor: '#7c3aed',
    route: 'random-country-generator',
    description: 'Pick random countries from around the world, with flags and capitals. Great for geography, games, and travel ideas.',
    comingSoon: false
  },
  {
    key: 'decision',
    label: 'Decision Maker',
    icon: Scale,
    iconColor: '#ca8a04',
    route: 'decision-maker',
    description: 'Type your options and let the decision maker pick one at random. Includes a quick yes-or-no mode.',
    comingSoon: false
  },
  {
    key: 'sentence',
    label: 'Random Sentence Generator',
    icon: Quote,
    iconColor: '#db2777',
    route: 'random-sentence-generator',
    description: 'Generate random sentences for writing prompts, brainstorming, and language practice. Free and instant.',
    comingSoon: false
  },
  {
    key: 'question',
    label: 'Random Question Generator',
    icon: HelpCircle,
    iconColor: '#0891b2',
    route: 'random-question-generator',
    description: 'Generate random questions and conversation starters — fun, deep, or ice-breakers. Great for groups and games.',
    comingSoon: false
  },
  {
    key: 'fact',
    label: 'Random Fact Generator',
    icon: Lightbulb,
    iconColor: '#f59e0b',
    route: 'random-fact-generator',
    description: 'Discover random, verified true facts across science, space, animals, history, and more. Fun and family-friendly.',
    comingSoon: false
  },
  {
    key: 'emoji',
    label: 'Random Emoji Generator',
    icon: Smile,
    iconColor: '#eab308',
    route: 'random-emoji-generator',
    description: 'Generate random emojis by category — copy one or a whole set in a click. Fun for chats, posts, and games.',
    comingSoon: false
  },
  {
    key: 'truthordare',
    label: 'Truth or Dare Generator',
    icon: Flame,
    iconColor: '#dc2626',
    route: 'truth-or-dare-generator',
    description: 'Random truth questions and dare challenges by difficulty. Free and instant — perfect for parties and game night.',
    comingSoon: false
  },
  {
    key: 'username',
    label: 'Random Username Generator',
    icon: AtSign,
    iconColor: '#0d9488',
    route: 'random-username-generator',
    description: 'Generate unique, available-looking usernames and handles for gaming, social, and sign-ups. Instant and free.',
    comingSoon: false
  },
  {
    key: 'charname',
    label: 'Character Name Generator',
    icon: Drama,
    iconColor: '#7c3aed',
    route: 'character-name-generator',
    description: 'Generate character names for stories and games — fantasy or realistic, by style. Great for writers and RPGs.',
    comingSoon: false
  }
];

export const TOOLS_PER_ROW = 4; 