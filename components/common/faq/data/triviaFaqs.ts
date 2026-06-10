import { FAQItemType } from '../types';

export const triviaFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the trivia questions generator work?',
    answer:
      'Pick a category (or leave it on "All categories"), choose how many questions you want, and press Generate. The tool instantly pulls random trivia questions from a curated set, right in your browser. Each question hides its answer until you press "Show answer," so you can use it to host a quiz.',
  },
  {
    id: 2,
    question: 'What trivia categories are available?',
    answer:
      'There are eight: general knowledge, geography, history, science & nature, movies & TV, music, sports, and animals. You can pull from a single category or mix them all together.',
  },
  {
    id: 3,
    question: 'Do the questions come with answers?',
    answer:
      'Yes. Every question has its answer attached. Answers stay hidden until you choose to reveal them, which makes it easy to read questions aloud and check answers as a group.',
  },
  {
    id: 4,
    question: 'Are the trivia questions family-friendly?',
    answer:
      'Yes. The questions are based on well-known, broadly appropriate facts, so the generator works for classrooms, family quiz nights, and players of all ages.',
  },
  {
    id: 5,
    question: 'Can I use this for a quiz night?',
    answer:
      'Definitely. Generate a batch of questions for each round, keep the answers hidden while teams guess, then reveal them to score. Mix categories for a balanced quiz or stick to one theme per round.',
  },
];
