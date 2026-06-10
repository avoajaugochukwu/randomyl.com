import { FAQItemType } from '../types';

export const factFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the random fact generator work?',
    answer:
      'Pick a category (or leave it on "All facts"), choose how many facts you want, and press Generate. The tool instantly draws facts at random from a curated list, right in your browser. There is no waiting, no sign-up, and no API calls — everything happens on your device.',
  },
  {
    id: 2,
    question: 'Are the facts actually true and accurate?',
    answer:
      'Yes. Every fact in the generator is hand-verified for accuracy and chosen to be evergreen, so it stays correct over time rather than going stale. We deliberately avoid clickbait "fun facts" that turn out to be myths, so you can confidently share what you read here.',
  },
  {
    id: 3,
    question: 'What categories of facts are available?',
    answer:
      'You can explore facts across science, space, animals, history, the human body, geography, and food. Pull from a single category to stay on topic, or leave it on "All facts" to mix every category together.',
  },
  {
    id: 4,
    question: 'How many facts can I generate at once?',
    answer:
      'You can generate anywhere from 1 to 10 facts at a time. Facts are sampled without repeats, so you never get the same one twice in a single batch. If you ask for more facts than a category contains, the tool simply returns the whole shuffled list.',
  },
  {
    id: 5,
    question: 'What can I use the random facts for?',
    answer:
      'They are great for trivia and quiz night, ice-breakers, and starting conversations. Teachers use them as classroom warm-ups and bell-ringers, writers use them for inspiration, and plenty of people just pull a quick fact to share on social media or with friends.',
  },
  {
    id: 6,
    question: 'Can I copy the facts I generate?',
    answer:
      'Yes. Press the Copy button and every fact in your current batch is copied to your clipboard, one per line, ready to paste into a document, message, slide, or post.',
  },
  {
    id: 7,
    question: 'Is the random fact generator free?',
    answer:
      'Completely free, with no sign-up, no limits, and no ads interrupting your results. Generate as many facts as you like, as often as you like.',
  },
];
