import { FAQItemType } from '../types';

export const charnameFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the character name generator work?',
    answer:
      'Pick a style and gender, choose how many names you want, and hit Generate. Each result pairs a random first name with a random surname from curated banks — for example "Lyra Thornwood" — so you get instant, ready-to-use character names. Everything runs in your browser, so results appear immediately with no loading or sign-up.',
  },
  {
    id: 2,
    question: 'What is the difference between fantasy and realistic names?',
    answer:
      'Fantasy names are invented, evocative names suited to high-fantasy worlds, RPGs, and sci-fi — think Eldrin Ashmere or Sylvara Moonshadow. Realistic names are common real-world given names and surnames spanning many cultures, ideal for contemporary or historical fiction. Switch between the two with the Style dropdown.',
  },
  {
    id: 3,
    question: 'What do the gender options do?',
    answer:
      'You can choose Male, Female, or Neutral to draw first names from that specific set, or pick Any to mix across all of them. Choosing Any re-picks a gender for each name in the batch, giving you a varied cast in a single click. Surnames are shared across genders.',
  },
  {
    id: 4,
    question: 'Can I use these names in my book or commercially?',
    answer:
      'Yes. The names are generated from common name elements and invented words, so you are free to use them in novels, games, films, or any commercial project with no attribution required. As with any name, do a quick search to avoid accidentally matching a real well-known person or trademarked character.',
  },
  {
    id: 5,
    question: 'What can I use the generated names for?',
    answer: [
      'Naming protagonists, villains, and side characters in novels and short stories.',
      'Creating player and non-player characters for tabletop RPGs like D&D.',
      'Populating worlds in video games, visual novels, and interactive fiction.',
      'Brainstorming names for screenplays, comics, and worldbuilding projects.',
    ],
  },
  {
    id: 6,
    question: 'Can I copy a whole batch of names at once?',
    answer:
      'Yes. After generating, use "Copy with commas" to grab the full list as a single comma-separated line, or "Copy line by line" to paste each name on its own row — handy for character sheets, spreadsheets, or notes. A toast confirms when the names are on your clipboard.',
  },
  {
    id: 7,
    question: 'Is the character name generator free?',
    answer:
      'Completely free, with no sign-up, no limits, and no ads interrupting your workflow. It runs entirely in your browser, so you can generate as many names as you like, as often as you like, at no cost.',
  },
];
