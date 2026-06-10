import { FAQItemType } from '../types';

export const letterFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "How do I generate a random letter?",
    answer: "Choose how many letters you want, pick whether to draw from the whole alphabet, vowels, or consonants, set the case, then click Generate. A single letter shows as one big card; multiple letters appear as chips you can copy."
  },
  {
    id: 2,
    question: "Can I get only vowels or only consonants?",
    answer: "Yes. Use the 'Letters' dropdown to draw from vowels only (A, E, I, O, U) or consonants only (the other 21 letters). Leave it on 'Whole alphabet' to draw from all 26."
  },
  {
    id: 3,
    question: "Can I choose uppercase or lowercase?",
    answer: "Yes. The 'Case' dropdown switches every result between uppercase (A, B, C) and lowercase (a, b, c) so it matches whatever you're working on."
  },
  {
    id: 4,
    question: "What does the 'No repeats' option do?",
    answer: "When 'No repeats' is on, every letter in the result is unique — none are picked twice. If you ask for more letters than the selected pool holds (for example 10 unique vowels when there are only 5), you'll see a friendly message instead of a result."
  },
  {
    id: 5,
    question: "How many letters can I generate at once?",
    answer: "Up to 50 at a time. Multiple letters display as chips, and the Copy button puts them on your clipboard as a comma-separated list."
  },
  {
    id: 6,
    question: "What can I use the random letter generator for?",
    answer: [
      "Popular uses include:",
      "• Picking a starting letter for word games like Scattergories and Categories",
      "• Classroom alphabet and phonics activities",
      "• Fair, random team or turn order",
      "• Choosing letters for hangman, crosswords, or quizzes",
      "• Naming and brainstorming prompts"
    ]
  },
  {
    id: 7,
    question: "Is it free and private?",
    answer: "Completely free, no sign-up, and it runs entirely in your browser — your choices and results never leave your device."
  }
];
