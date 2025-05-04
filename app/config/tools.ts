/* eslint-disable @typescript-eslint/no-explicit-any */
import { Phone, Type, Book, Box, QrCode } from 'lucide-react';

export type ToolKey = 'phone' | 'noun' | 'bible' | 'object' | 'qr';

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
  }
];

export const TOOLS_PER_ROW = 4; 