import { FAQItemType } from '../types';

export const objectFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "What types of values can I generate?",
    answer: [
      "Our generator supports multiple data types:",
      "• Strings - Random text values",
      "• Numbers - Random numerical values",
      "• Names - Random person names",
      "• Sentences - Random complete sentences",
      "• Words - Random single words",
      "• Emails - Random email addresses",
      "• Dates - Random date values"
    ]
  },
  {
    id: 2,
    question: "What are the advanced options for word generation?",
    answer: [
      "When generating words or strings, you can use these constraints:",
      "• Starts with - Specify the beginning characters",
      "• Contains - Include specific characters anywhere",
      "• Ends with - Specify the ending characters",
      "• Pattern - Use a pattern like '_t_s' where _ represents any character",
      "• Number of letters - Set an exact word length",
      "• Number of syllables - Specify the number of syllables"
    ]
  },
  {
    id: 3,
    question: "How many values can I generate at once?",
    answer: "You can generate up to 10 values at once. This limit helps ensure quick response times and high-quality results."
  },
  {
    id: 4,
    question: "Can I use context or prompts to guide the generation?",
    answer: "Yes! You can provide optional context or prompts to guide the AI. For example, you could specify 'scientific terms' or 'fantasy names' to get more relevant results."
  },
  {
    id: 5,
    question: "How do I copy the generated values?",
    answer: "There's a 'Copy' button next to the generated values. Clicking it will copy all values to your clipboard, with each value on a new line."
  },
  {
    id: 6,
    question: "Are the generated values unique?",
    answer: "Our AI-powered generator strives to provide unique values within each generation set. However, across multiple generations, values might occasionally repeat."
  },
  {
    id: 7,
    question: "What can I use this generator for?",
    answer: [
      "The generator has many use cases:",
      "• Testing and development",
      "• Content creation",
      "• Data generation",
      "• Educational materials",
      "• Creative writing",
      "• Mock data for applications"
    ]
  }
]; 