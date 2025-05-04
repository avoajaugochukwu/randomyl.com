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