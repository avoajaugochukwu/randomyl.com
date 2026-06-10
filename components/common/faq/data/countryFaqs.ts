import { FAQItemType } from '../types';

export const countryFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the random country generator work?',
    answer:
      'Pick a region (or leave it on "All regions"), choose how many countries you want, then press Generate. The tool instantly draws random countries from its built-in list, right in your browser. Nothing is sent to a server, so results appear immediately and work even offline.',
  },
  {
    id: 2,
    question: 'Can I filter countries by region or continent?',
    answer:
      'Yes. Use the Region dropdown to limit results to Africa, Asia, Europe, North America, South America, or Oceania. Leave it on "All regions" to draw from every country in the list at once.',
  },
  {
    id: 3,
    question: 'Does each result include the flag and capital city?',
    answer:
      'It does. Every country card shows the country\'s flag emoji, its name, its capital city, and the region it belongs to, so you get a quick snapshot at a glance.',
  },
  {
    id: 4,
    question: 'How many countries are in the list?',
    answer:
      'The generator includes around 100 well-known countries spread across all six regions. If you ask for more countries than are available in a region, it simply returns the whole shuffled list for that region.',
  },
  {
    id: 5,
    question: 'What can I use the random country generator for?',
    answer: [
      'Geography practice and capital-city quizzes for students.',
      'Trivia nights, classroom games, and icebreakers.',
      'Picking a random travel destination or dream-trip idea.',
      'Choosing a country for a writing prompt, project, or theme.',
    ],
  },
  {
    id: 6,
    question: 'Can I copy the results?',
    answer:
      'Yes. After generating, click the Copy button to copy the country names as a comma-separated list. You can paste them straight into a document, spreadsheet, quiz, or message.',
  },
  {
    id: 7,
    question: 'Is the random country generator free?',
    answer:
      'Completely free, with no sign-up, no limits, and no ads on the tool itself. Everything runs client-side in your browser, so you can generate as many random countries as you like.',
  },
];
