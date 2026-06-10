import { FAQItemType } from '../types';

export const numberFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "How does the random number generator work?",
    answer: "You set a minimum and maximum, choose how many numbers you want, and click Generate. The tool picks numbers within that range right in your browser — nothing is sent to a server, so it's instant and private."
  },
  {
    id: 2,
    question: "Can I generate numbers with no repeats?",
    answer: "Yes. Turn on 'No repeats (unique numbers only)' and every number in your result will be different. Just make sure your range is at least as large as the number of values you're requesting — you can't draw 10 unique numbers from a range of 5."
  },
  {
    id: 3,
    question: "What's the largest range or count I can use?",
    answer: "You can set any minimum and maximum, including negative numbers, and generate up to 10,000 numbers at once. For most raffles, games, and tests that's far more than enough."
  },
  {
    id: 4,
    question: "Can I generate a number between 1 and 10, or 1 and 100?",
    answer: "Absolutely — that's the most common use. Set the minimum to 1 and the maximum to 10 (or 100, or any value) and generate. You can also sort the results low-to-high or high-to-low."
  },
  {
    id: 5,
    question: "Is this random number generator really random?",
    answer: "It uses your browser's built-in pseudo-random number generator, which is more than random enough for raffles, games, picking winners, classroom use, and testing. For cryptographic or security-critical uses, a dedicated cryptographic RNG is recommended."
  },
  {
    id: 6,
    question: "Is it free and do I need an account?",
    answer: "It's completely free with no sign-up, no limits, and no ads getting in the way. Generate as many numbers as you need, as often as you like."
  },
  {
    id: 7,
    question: "Can I use it to pick a raffle or giveaway winner?",
    answer: "Yes. Number your entrants, set the range to match (e.g., 1 to 250), keep the count at 1, and generate to pick a winner. For multiple winners, increase the count and turn on 'No repeats'."
  }
];
