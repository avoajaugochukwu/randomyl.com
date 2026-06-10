import { FAQItemType } from '../types';

export const emojiFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "How does the random emoji generator work?",
    answer: "Pick a category (or leave it on 'All emojis'), choose how many emojis you want, and press Generate. The tool instantly picks emojis at random from its built-in lists right in your browser — no waiting, no sign-up, and nothing sent to a server."
  },
  {
    id: 2,
    question: "What emoji categories can I choose from?",
    answer: [
      "You can pull from any of these groups, or mix them all together with 'All emojis':",
      "• Smileys & faces — happy, cool, and silly expressions",
      "• Animals — dogs, cats, foxes, and more",
      "• Food & drink — fruit, snacks, and meals",
      "• Activities & sports — balls, games, and outdoor fun",
      "• Travel & places — cars, planes, and landmarks",
      "• Objects, Symbols, and Nature & weather — everyday icons, hearts, stars, and seasons"
    ]
  },
  {
    id: 3,
    question: "How do I copy one emoji versus the whole set?",
    answer: "Every emoji is a tappable chip — just click one to copy that single emoji on its own. To grab everything at once, press 'Copy all' and the full set is copied as a single string you can paste anywhere."
  },
  {
    id: 4,
    question: "Will the emojis work everywhere across different devices?",
    answer: "Yes. The generator uses standard Unicode emojis, so they paste into chats, captions, documents, and most apps. Keep in mind that the exact look of an emoji can vary slightly between platforms like iOS, Android, and Windows, since each draws its own style."
  },
  {
    id: 5,
    question: "Are the emojis family-friendly?",
    answer: "Yes. Every emoji in the lists is hand-picked to be clean and appropriate for all ages. There are no offensive or adult entries, so it's safe to use in classrooms, with kids, and in any public setting."
  },
  {
    id: 6,
    question: "What can I use the random emojis for?",
    answer: [
      "There are lots of fun and handy ways to use it:",
      "• Spicing up chats, comments, and social captions",
      "• Picking a reaction or a daily mood emoji",
      "• Party games like emoji charades or guessing challenges",
      "• Brainstorming icons for a project, theme, or playlist",
      "• Classroom activities and creative writing prompts"
    ]
  },
  {
    id: 7,
    question: "How many emojis can I generate at once?",
    answer: "You can generate anywhere from 1 to 30 emojis at a time. When you ask for fewer emojis than a category holds, you'll get a no-repeat mix; for larger counts the tool fills in extras so you always get the number you asked for."
  }
];
