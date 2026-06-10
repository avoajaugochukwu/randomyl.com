import { FAQItemType } from '../types';

export const usernameFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the random username generator work?',
    answer:
      'It combines hand-picked adjectives and nouns from a curated word bank, then formats them based on the style you choose. Everything runs in your browser, so results are instant and never leave your device.',
  },
  {
    id: 2,
    question: 'What username styles are available?',
    answer:
      'You can pick from four styles: Adjective + Noun (SwiftTiger), Adjective + Noun + Number (SwiftTiger42), Noun + Number (Tiger2048), and a lowercase underscore style (swift_tiger). There is also an option to make every result lowercase.',
  },
  {
    id: 3,
    question: 'Are these usernames available and unique to me?',
    answer:
      'The generator does not check availability on any platform, so always verify a name on the site you want to use it. Within a single batch, results are de-duplicated, but the same combinations can appear for other users since they are drawn from a shared word bank.',
  },
  {
    id: 4,
    question: 'Can I add numbers to my username?',
    answer:
      'Yes. The number-based styles append a random 2 to 4 digit number, which is a great way to make a name unique when your favorite handle is already taken.',
  },
  {
    id: 5,
    question: 'What can I use these usernames for?',
    answer:
      'They work well for gaming tags, Discord and social media handles, forum accounts, streaming aliases, and quick throwaway sign-ups. The word bank is kept family-friendly so the names are safe to use anywhere.',
  },
  {
    id: 6,
    question: 'Can I copy a whole batch at once?',
    answer:
      'Yes. Generate up to 20 usernames at a time and copy them all comma-separated or line by line with one click. You can also click any individual username chip to copy just that one.',
  },
  {
    id: 7,
    question: 'Is the username generator free?',
    answer:
      'Completely free, with no sign-up, no limits, and no API calls. Generate as many usernames as you like, as often as you like.',
  },
];
