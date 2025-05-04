import { FAQItemType } from '../types';

export const qrFaqs: FAQItemType[] = [
  {
    id: 1,
    question: "What types of QR codes can I generate?",
    answer: [
      "Our generator supports multiple content types:",
      "• URLs - Website links",
      "• Text - Plain text content",
      "• Contact Info - vCard format",
      "• Email - Email addresses",
      "• Phone Numbers - Callable phone numbers",
      "• WiFi - Network credentials",
      "• Calendar Events - Event details"
    ]
  },
  {
    id: 2,
    question: "What are the customization options?",
    answer: [
      "You can customize several aspects of your QR code:",
      "• Size - From 100px to 1000px",
      "• Error correction level - From 7% to 30%",
      "• Colors - Both foreground and background",
      "• Content type - Multiple formats available"
    ]
  },
  {
    id: 3,
    question: "What's error correction level?",
    answer: "Error correction level determines how much damage a QR code can sustain while remaining scannable. Higher levels make the code more resistant to damage but also larger."
  },
  {
    id: 4,
    question: "Can I use prompts to guide the content generation?",
    answer: "Yes! You can provide optional prompts to guide the AI in generating relevant content. For example, specify 'tech blog' for URLs or 'restaurant' for contact information."
  },
  {
    id: 5,
    question: "What file formats can I download?",
    answer: "You can download your generated QR codes in PNG, SVG, or JPEG format. SVG is best for scaling, while PNG offers better quality for most uses."
  },
  {
    id: 6,
    question: "Are the generated QR codes scannable?",
    answer: "Yes! All generated QR codes are fully scannable and follow standard specifications. They can be read by any QR code scanner or smartphone camera."
  },
  {
    id: 7,
    question: "What can I use these QR codes for?",
    answer: [
      "QR codes have many uses:",
      "• Marketing materials",
      "• Business cards",
      "• Product packaging",
      "• Website links",
      "• Contact sharing",
      "• WiFi sharing",
      "• Testing and development"
    ]
  }
]; 