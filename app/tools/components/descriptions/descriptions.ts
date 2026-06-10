import { ToolKey } from "@/app/config/tools";

interface ToolDescription {
  about: {
    title: string;
    description: string;
  };
  features: string[];
  useCases: string[];
}

const toolDescriptions: Record<ToolKey, ToolDescription> = {
  noun: {
    about: {
      title: "Noun Generator",
      description: "Our AI-powered noun generator creates contextually relevant nouns based on your specific needs. Whether you need concrete nouns for descriptive writing, abstract nouns for conceptual work, or proper nouns for creative stories, our tool can help."
    },
    features: [
      "Generate multiple nouns at once",
      "Specify noun types (concrete, abstract, proper, collective)",
      "Get definitions and explanations",
      "Copy in different formats (comma-separated or line-by-line)",
      "Natural language input for easy use"
    ],
    useCases: [
      "Creative writing and storytelling",
      "Educational materials and worksheets",
      "Language learning exercises",
      "Content generation for websites",
      "Testing and development data"
    ]
  },
  object: {
    about: {
      title: "Random Value Generator",
      description: "Our AI-powered random value generator creates various types of data with customizable constraints. Whether you need random words, numbers, names, or other types of values, our tool provides intelligent and contextually relevant results."
    },
    features: [
      "Multiple data type support (strings, numbers, names, etc.)",
      "Advanced word generation options",
      "Context-aware generation with prompts",
      "Batch generation up to 10 values",
      "Copy results in one click",
      "AI-powered for natural results",
      "Real-time generation"
    ],
    useCases: [
      "Software testing and development",
      "Content creation and writing",
      "Educational resource creation",
      "Data population and mocking",
      "Creative writing assistance",
      "Learning and practice exercises",
      "API and form testing"
    ]
  },
  phone: {
    about: {
      title: "Phone Number Generator",
      description: "Generate valid-format phone numbers for any country or region. Our phone number generator creates numbers that match real-world formats, perfect for testing, mock data, or development needs."
    },
    features: [
      "Multiple country format support",
      "Bulk generation available",
      "Valid number patterns",
      "Copy in various formats",
      "Area code customization"
    ],
    useCases: [
      "Application testing",
      "CRM system development",
      "User interface mockups",
      "Database population",
      "Form validation testing"
    ]
  },
  bible: {
    about: {
      title: "Bible Verse Generator",
      description: "Our Bible verse generator helps you discover relevant scripture passages based on themes, topics, or random selection. Perfect for daily devotionals, study, or finding inspiration."
    },
    features: [
      "Theme-based verse selection",
      "Multiple translations available",
      "Context provided with verses",
      "Easy copy and share functionality",
      "Categorized verse browsing"
    ],
    useCases: [
      "Daily devotionals",
      "Bible study preparation",
      "Sermon preparation",
      "Social media sharing",
      "Personal reflection"
    ]
  },
  qr: {
    about: {
      title: "QR Code Generator",
      description: "Our AI-powered QR code generator creates custom QR codes with intelligent content generation. Perfect for marketing, business, or personal use."
    },
    features: [
      "Multiple content type support",
      "AI-powered content generation",
      "Custom size and colors",
      "Error correction options",
      "Multiple download formats",
      "Context-aware generation",
      "Real-time preview"
    ],
    useCases: [
      "Marketing materials",
      "Business cards",
      "Product packaging",
      "Website links",
      "Contact sharing",
      "WiFi sharing",
      "Testing and development"
    ]
  },
  number: {
    about: {
      title: "Random Number Generator",
      description: "Our random number generator picks numbers in any range you set, instantly and right in your browser. Generate a single number or thousands at once, force unique results with no repeats, and sort them however you like — no sign-up and no limits."
    },
    features: [
      "Any minimum and maximum range",
      "Single pick or bulk generation (up to 10,000)",
      "No-repeat (unique) mode",
      "Sort low-to-high, high-to-low, or random order",
      "One-click copy",
      "Runs fully in your browser — fast and private"
    ],
    useCases: [
      "Raffles and giveaway draws",
      "Lottery and bingo numbers",
      "Picking a random winner",
      "Classroom and games",
      "Sampling and research",
      "Software testing and mock data"
    ]
  },
  word: {
    about: {
      title: "Random Word Generator",
      description: "Our random word generator produces real English words on demand. Filter by exact length or starting letter, generate one word or a whole list, and copy your results in a click — perfect for games, brainstorming, and beating writer's block."
    },
    features: [
      "Filter by word length",
      "Filter by starting letter",
      "Generate up to 50 words at once",
      "Copy as a list or comma-separated",
      "Family-friendly word bank",
      "Instant, no sign-up, works offline"
    ],
    useCases: [
      "Word games and puzzles",
      "Brainstorming and ideation",
      "Creative writing prompts",
      "Vocabulary practice",
      "Password inspiration",
      "Improv and party games"
    ]
  },
  pictionary: {
    about: {
      title: "Pictionary Word Generator",
      description: "Our Pictionary and charades word generator serves up random prompts sorted by difficulty, so game night runs itself. Switch between draw-it (Pictionary) and act-it (charades) modes, choose easy, medium, or hard, and generate a single word or a full round."
    },
    features: [
      "Pictionary (draw) and charades (act) modes",
      "Easy, medium, and hard difficulty levels",
      "Kid-friendly and adult-friendly words",
      "Generate one word or a whole round",
      "Copy the full list",
      "No sign-up — start playing instantly"
    ],
    useCases: [
      "Family game night",
      "Classroom and ESL activities",
      "Office team-building",
      "Parties and ice-breakers",
      "Birthday and holiday games",
      "Drama and improv warm-ups"
    ]
  },
  pos: {
    about: {
      title: "Random Adjective Generator",
      description: "Our part-of-speech generator gives you random adjectives, verbs, nouns, and adverbs at the tap of a button. Pick the word type you need and generate a list instantly — ideal for writing exercises, grammar lessons, and word games."
    },
    features: [
      "Adjectives, verbs, nouns, and adverbs",
      "Switch part of speech instantly",
      "Generate up to 30 words at once",
      "Copy as a list or comma-separated",
      "Curated, family-friendly word banks",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Creative writing prompts",
      "Grammar and ESL lessons",
      "Mad Libs-style games",
      "Describing-word exercises",
      "Brainstorming and naming",
      "Vocabulary building"
    ]
  }
};

export const getToolDescription = (key: ToolKey): ToolDescription => {
  switch (key) {
    case 'qr':
      return toolDescriptions[key];
    default:
      return toolDescriptions[key];
  }
};