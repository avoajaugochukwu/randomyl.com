import { FAQItemType } from '../types';

export const bibleFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "What translations are available?",
    answer: [
      "We support several major Bible translations:",
      "• King James Version (KJV)",
      "• New International Version (NIV)",
      "• English Standard Version (ESV)",
      "• New Living Translation (NLT)",
      "The default translation is KJV if none is specified."
    ]
  },
  {
    id: 2,
    question: "How can I specify what kind of verses I want?",
    answer: [
      "You can request verses in several ways:",
      "• By theme (e.g., 'verses about love')",
      "• By book (e.g., 'from Psalms')",
      "• By testament (e.g., 'New Testament verses')",
      "• By author (e.g., 'Paul's writings')",
      "• By topic (e.g., 'about faith and hope')",
      "You can also combine these criteria in your prompt!"
    ]
  },
  {
    id: 3,
    question: "How many verses can I generate at once?",
    answer: "You can generate up to 5 verses in a single request. For more verses, you can make multiple requests. This limit helps ensure quality and relevance in the generated results."
  },
  {
    id: 4,
    question: "What information comes with each verse?",
    answer: [
      "Each generated verse includes:",
      "• The verse text",
      "• Biblical reference (book, chapter, verse)",
      "• Translation used",
      "• Context (when relevant)",
      "• Theme or category",
      "You can copy verses with or without these additional details."
    ]
  },
  {
    id: 5,
    question: "Are the verses accurate?",
    answer: "Yes! Our generator uses verified Bible translations and ensures accuracy in both the verse text and references. However, as with any tool, we recommend verifying verses in your personal Bible for study purposes."
  },
  {
    id: 6,
    question: "Can I use this for Bible study?",
    answer: "While our generator is a great tool for inspiration and discovering relevant verses, we recommend using it as a supplement to, not a replacement for, traditional Bible study methods. It's perfect for finding relevant verses to study further."
  },
  {
    id: 7,
    question: "How do I get the best results?",
    answer: [
      "Tips for best results:",
      "• Be specific about themes or topics",
      "• Mention preferred Bible books if any",
      "• Specify your preferred translation",
      "• Include context if needed",
      "• Use clear, simple prompts",
      "Example: 'Give me 3 verses about courage from the Old Testament in NIV'"
    ]
  },
  {
    id: 8,
    question: "Can I share the generated verses?",
    answer: "Yes! You can easily copy verses with or without references and share them. We encourage proper attribution of Bible verses when sharing, which is why we include the translation and reference information."
  }
]; 