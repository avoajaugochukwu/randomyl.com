/* eslint-disable @typescript-eslint/no-explicit-any */
import { Phone, Type, Book, Box, QrCode, Hash, WholeWord, Palette, SpellCheck } from 'lucide-react';

export type ToolKey = 'phone' | 'noun' | 'bible' | 'object' | 'qr' | 'number' | 'word' | 'pictionary' | 'pos';

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
  }
];

export const TOOLS_PER_ROW = 4; 