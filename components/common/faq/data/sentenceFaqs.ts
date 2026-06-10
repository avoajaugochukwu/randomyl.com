import { FAQItemType } from '../types';

export const sentenceFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the random sentence generator work?',
    answer:
      'The tool picks a random sentence template and fills each slot with a random word from curated banks of adjectives, nouns, verbs, adverbs, and places. It then capitalizes the first letter and adds ending punctuation, so you get a complete, fresh sentence every time you click Generate.',
  },
  {
    id: 2,
    question: 'Are the generated sentences grammatical?',
    answer:
      'Yes. The templates are written as complete English sentences, and the word banks are chosen so they fit those patterns. The result reads as proper, grammatical English — though the meaning is intentionally random and sometimes playful.',
  },
  {
    id: 3,
    question: 'How many sentences can I generate at once?',
    answer:
      'You can generate from 1 to 10 sentences at a time. Just set the number in the "How many sentences" field and click Generate. The default is 3.',
  },
  {
    id: 4,
    question: 'What can I use random sentences for?',
    answer: [
      'Writing prompts and creative brainstorming when you need a spark of inspiration.',
      'Typing and handwriting practice with varied, unpredictable text.',
      'ESL and language-learning exercises for reading, dictation, and grammar drills.',
      'Filler or placeholder text for mockups and design layouts.',
    ],
  },
  {
    id: 5,
    question: 'Are the sentences family-friendly?',
    answer:
      'Absolutely. Every word in the banks is hand-picked to be clean and family-friendly, so the generator is safe to use in classrooms, with kids, and in any setting.',
  },
  {
    id: 6,
    question: 'Can I copy the sentences?',
    answer:
      'Yes. After generating, click the Copy button to copy all the sentences to your clipboard, one per line. You can then paste them anywhere you like.',
  },
  {
    id: 7,
    question: 'Is the random sentence generator free?',
    answer:
      'Yes, it is completely free with no sign-up required. Everything runs instantly in your browser — there are no API calls, no limits, and no cost.',
  },
];
