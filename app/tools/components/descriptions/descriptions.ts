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
  },
  letter: {
    about: {
      title: "Random Letter Generator",
      description: "Our random letter generator picks letters of the alphabet at random, right in your browser. Choose uppercase or lowercase, the whole alphabet or just vowels or consonants, and generate one letter or a whole set instantly."
    },
    features: [
      "Pick from A–Z, vowels only, or consonants only",
      "Uppercase or lowercase output",
      "Generate one letter or many at once",
      "Optional no-repeat mode",
      "One-click copy",
      "Instant and free, no sign-up"
    ],
    useCases: [
      "Word and alphabet games",
      "Classroom and early-reading activities",
      "Picking a random starting letter",
      "Name and brainstorming prompts",
      "Drawing prompts and challenges",
      "Scattergories-style games"
    ]
  },
  color: {
    about: {
      title: "Random Color Generator",
      description: "Our random color generator creates colors at random and shows each one as a live swatch with its hex and RGB codes. Generate a single color or a full palette and copy the codes in one click — perfect for design and inspiration."
    },
    features: [
      "Live color swatches",
      "Hex and RGB codes for every color",
      "Generate one color or a whole palette",
      "Click to copy any code",
      "Endless fresh combinations",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Web and graphic design",
      "Brand and palette inspiration",
      "Art and illustration",
      "UI and theme prototyping",
      "Beating creative block",
      "Color games and learning"
    ]
  },
  animal: {
    about: {
      title: "Random Animal Generator",
      description: "Our random animal generator picks animals at random from a big, family-friendly list spanning mammals, birds, reptiles, sea life, and more. Generate one animal or a whole list for games, writing, and learning."
    },
    features: [
      "Wide range of animals from around the world",
      "Generate one or many at once",
      "Family-friendly and kid-safe",
      "Copy your list in a click",
      "Great for prompts and games",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Kids' games and learning",
      "Writing and drawing prompts",
      "Charades and guessing games",
      "Classroom activities",
      "Creative brainstorming",
      "Trivia and quizzes"
    ]
  },
  team: {
    about: {
      title: "Random Team Generator",
      description: "Our random team generator takes your list of names and splits them into fair, random teams or groups. Just paste names, choose how many teams you want, and shuffle — perfect for class, sports, and game night."
    },
    features: [
      "Paste any list of names",
      "Choose the number of teams or groups",
      "Fair, evenly-sized random split",
      "Re-shuffle as many times as you like",
      "Copy the results in a click",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "PE class and sports teams",
      "Classroom group work",
      "Game night and parties",
      "Office workshops and breakouts",
      "Tournaments and brackets",
      "Any time you need fair teams"
    ]
  },
  country: {
    about: {
      title: "Random Country Generator",
      description: "Our random country generator picks countries at random from around the world, complete with flags and capital cities. Generate one country or a list for geography practice, games, and travel inspiration."
    },
    features: [
      "Random countries from every continent",
      "Flag and capital city for each",
      "Generate one or many at once",
      "Filter by region (where available)",
      "Copy your list in a click",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Geography lessons and quizzes",
      "Travel and bucket-list ideas",
      "Trivia and guessing games",
      "Writing and project prompts",
      "Language and culture learning",
      "Classroom activities"
    ]
  },
  decision: {
    about: {
      title: "Decision Maker",
      description: "Our decision maker takes the options you type and picks one at random, so you can settle choices fast and fairly. There's also a one-tap yes-or-no mode for the quickest decisions of all."
    },
    features: [
      "Enter any list of options",
      "Picks one fairly at random",
      "Quick yes-or-no mode",
      "Re-decide as many times as you like",
      "No bias, no overthinking",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Settling group choices",
      "Picking where to eat",
      "Breaking a tie",
      "Yes-or-no questions",
      "Choosing chores or turns",
      "Beating decision paralysis"
    ]
  },
  sentence: {
    about: {
      title: "Random Sentence Generator",
      description: "Our random sentence generator builds complete, varied sentences from curated word banks. Generate one sentence or a batch to spark writing, warm up, or practice a language — fresh every time."
    },
    features: [
      "Complete, grammatical sentences",
      "Fresh combinations every time",
      "Generate one or several at once",
      "Family-friendly word banks",
      "Copy your sentences in a click",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Creative writing prompts",
      "Beating writer's block",
      "Typing and handwriting practice",
      "Language learning and ESL",
      "Warm-up exercises",
      "Testing fonts and layouts"
    ]
  },
  question: {
    about: {
      title: "Random Question Generator",
      description: "Our random question generator serves up conversation starters, ice-breakers, and thought-provoking questions at random. Pick a vibe and generate questions for groups, dates, classrooms, and games."
    },
    features: [
      "Fun, deep, and ice-breaker questions",
      "Generate one or a whole set",
      "Family-friendly options",
      "Great for groups and pairs",
      "Copy your questions in a click",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Ice-breakers and team-building",
      "Conversation starters",
      "Classroom discussion",
      "Date-night and friends",
      "Journaling prompts",
      "Party and road-trip games"
    ]
  },
  fact: {
    about: {
      title: "Random Fact Generator",
      description: "Our random fact generator surfaces fascinating, verified true facts across science, space, animals, history, the human body, geography, and food. Every fact is human-reviewed and evergreen — generate one or a whole batch to learn something new."
    },
    features: [
      "Hand-verified, accurate facts",
      "Seven categories to choose from",
      "Generate one or many at once",
      "Family-friendly and evergreen",
      "Copy your facts in a click",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Trivia and quizzes",
      "Classroom warm-ups",
      "Conversation starters",
      "Social media posts",
      "Beating boredom",
      "Learning something new daily"
    ]
  },
  emoji: {
    about: {
      title: "Random Emoji Generator",
      description: "Our random emoji generator picks emojis at random from categories like faces, animals, food, and symbols. Generate a single emoji or a whole string and copy them in a tap — fun for chats, captions, and games."
    },
    features: [
      "Pick by category or all emojis",
      "Generate one or a whole set",
      "Tap any emoji to copy it",
      "Copy the whole string at once",
      "Works on mobile and desktop",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Chats and messaging",
      "Social media captions",
      "Emoji guessing games",
      "Passwords and nicknames",
      "Creative prompts",
      "Just for fun"
    ]
  },
  truthordare: {
    about: {
      title: "Truth or Dare Generator",
      description: "Our truth or dare generator delivers random truth questions and dare challenges by difficulty, so the game never stalls. Choose truths, dares, or a mix and keep the laughs coming — no cards needed."
    },
    features: [
      "Random truths and dares",
      "Easy, medium, and bold levels",
      "Truths-only, dares-only, or mixed",
      "Generate one or a list",
      "Family-friendly options",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Parties and game night",
      "Sleepovers",
      "Road trips",
      "Ice-breakers",
      "Team-building",
      "Group hangouts"
    ]
  },
  username: {
    about: {
      title: "Random Username Generator",
      description: "Our random username generator combines words, styles, and numbers into unique, memorable handles. Generate a batch of ideas for gaming, social media, and new accounts, then copy your favorite in a click."
    },
    features: [
      "Unique, memorable username ideas",
      "Different styles and patterns",
      "Optional numbers and separators",
      "Generate a batch at once",
      "Copy any username in a click",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Gaming and gamertags",
      "Social media handles",
      "New account sign-ups",
      "Forums and communities",
      "Streaming and content",
      "Burner and alt accounts"
    ]
  },
  charname: {
    about: {
      title: "Character Name Generator",
      description: "Our character name generator creates names for stories, games, and worlds — fantasy or realistic, in a range of styles. Generate a list of options to name heroes, villains, NPCs, and everyone in between."
    },
    features: [
      "Fantasy and realistic styles",
      "Male, female, and neutral options",
      "First and last name combinations",
      "Generate a batch of ideas",
      "Copy any name in a click",
      "Free, instant, no sign-up"
    ],
    useCases: [
      "Novels and short stories",
      "Tabletop RPGs and D&D",
      "Video game characters",
      "Screenwriting and worldbuilding",
      "Role-play and fan fiction",
      "Naming NPCs and avatars"
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