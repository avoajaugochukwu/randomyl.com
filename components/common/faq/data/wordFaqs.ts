import { FAQItemType } from '../types';

export const wordFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "How do I generate random words?",
    answer: "Choose how many words you want, optionally filter by length or starting letter, then click Generate Words. Results appear instantly and can be copied as a list or comma-separated."
  },
  {
    id: 2,
    question: "Can I get words of a specific length?",
    answer: "Yes. Use the 'Word length' dropdown to get only 3, 4, 5, 6, 7, or 8-letter words — handy for crosswords, Wordle-style games, and puzzles. Leave it on 'Any length' for a full mix."
  },
  {
    id: 3,
    question: "Can I generate words that start with a certain letter?",
    answer: "Yes. Type a letter (or two) into the 'Starts with' box and every generated word will begin with it. Combine it with the length filter to narrow results even further."
  },
  {
    id: 4,
    question: "How many words can I generate at once?",
    answer: "Up to 50 at a time. You can copy the whole batch as a comma-separated line or line-by-line for pasting into documents and spreadsheets."
  },
  {
    id: 5,
    question: "Are the words appropriate for kids and classrooms?",
    answer: "Yes. The word bank is curated to be family-friendly, so it's safe for classrooms, kids' games, and all-ages activities."
  },
  {
    id: 6,
    question: "What can I use the random word generator for?",
    answer: [
      "Common uses include:",
      "• Word games like Pictionary, charades, and Scattergories",
      "• Brainstorming names, themes, and ideas",
      "• Creative writing prompts to beat writer's block",
      "• Vocabulary and spelling practice",
      "• Inspiration for memorable passwords"
    ]
  },
  {
    id: 7,
    question: "Is it free and private?",
    answer: "Completely free, no sign-up, and it runs entirely in your browser — your filters and results never leave your device."
  }
];
