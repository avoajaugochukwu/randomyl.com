import { FAQItemType } from '../types';

export const colorFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the random color generator work?',
    answer:
      'Each time you click Generate, the tool picks random values for the red, green, and blue channels (each from 0 to 255) and combines them into a color. It then shows you a live swatch alongside the matching HEX and RGB codes. Everything runs in your browser, so results are instant and free.',
  },
  {
    id: 2,
    question: 'What is the difference between HEX and RGB?',
    answer:
      'They are two ways of writing the same color. HEX is a six-digit code like #A1B2C3, commonly used in CSS and design tools. RGB lists the red, green, and blue amounts separately, like rgb(161, 178, 195). Use whichever format your app, stylesheet, or design program prefers — they describe an identical color.',
  },
  {
    id: 3,
    question: 'How do I copy a color code?',
    answer:
      'Just click the HEX or RGB code next to any swatch and it is copied to your clipboard, with a quick confirmation message. You can also use the "Copy all hex" button to grab every HEX code at once as a comma-separated list, which is handy for pasting a whole palette somewhere.',
  },
  {
    id: 4,
    question: 'Can I generate a whole color palette?',
    answer:
      'Yes. Set the "How many colors" field to any number from 1 to 20 and click Generate to create a full palette at once. Each color appears as its own swatch with copyable codes. Keep clicking Generate to shuffle through fresh combinations until you find a set you like.',
  },
  {
    id: 5,
    question: 'What can I use random colors for?',
    answer:
      'Random colors are great for sparking ideas in web and graphic design, picking accent colors for UI mockups, choosing paint or art combinations, theming charts and diagrams, or just exploring unexpected pairings. They are a fast way to break out of a creative rut and discover combinations you might not have chosen on your own.',
  },
  {
    id: 6,
    question: 'Are the colors truly random?',
    answer:
      'The generator uses your browser\'s built-in random function to choose each red, green, and blue value independently, so every color is unpredictable and you will rarely see the same one twice. It is more than random enough for design inspiration, palettes, and everyday creative use.',
  },
  {
    id: 7,
    question: 'Is the random color generator free?',
    answer:
      'Completely free, with no sign-up, no limits, and no ads getting in the way. It runs entirely in your browser, so nothing is sent to a server and you can generate as many colors and palettes as you like.',
  },
];
