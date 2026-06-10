import { FAQItemType } from '../types';

export const teamFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "How does the random team generator work?",
    answer: "Paste your list of names, choose how many teams you want, and click Generate. The tool shuffles everyone randomly and spreads them across your teams right in your browser — nothing is sent to a server, so it's instant and private."
  },
  {
    id: 2,
    question: "How do I enter the names?",
    answer: "Type or paste names into the box — one per line works best, but you can also separate them with commas. Blank lines and extra spaces are ignored automatically, so you don't have to tidy up your list first."
  },
  {
    id: 3,
    question: "How many teams can I split people into?",
    answer: "Set the 'Number of teams' field to whatever you need (at least 2). If you ask for more teams than you have names, the tool simply caps it so every team has at least one person."
  },
  {
    id: 4,
    question: "Are the teams even and fair?",
    answer: "Yes. Names are shuffled randomly and then dealt out one at a time, round-robin style, so the team sizes are always as even as possible. If the numbers don't divide evenly, the leftover people are spread out so no single team is overloaded."
  },
  {
    id: 5,
    question: "Can I re-shuffle the teams?",
    answer: "Absolutely. Just click Generate again for a brand-new random split. Re-shuffle as many times as you like until you get a line-up everyone is happy with — it's completely free every time."
  },
  {
    id: 6,
    question: "What's the difference between teams and groups?",
    answer: "Nothing functional — it's just the label. Use the team version for sports and competitions, or the group version for classroom and project breakouts. Both shuffle and split your names exactly the same way."
  },
  {
    id: 7,
    question: "Is the team generator free to use?",
    answer: "Yes, it's completely free with no sign-up, no limits, and no ads getting in the way. It's great for class breakouts, sports practice, game nights, and party activities whenever you need fair, random teams."
  },
];
