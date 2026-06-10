import { FAQItemType } from '../types';

export const colormixerFaqs: FAQItemType[] = [
  {
    id: 1,
    question: 'How does the color mixer work?',
    answer:
      'Pick a first color and a second color from the dropdowns, and the mixer instantly shows what they make, with a live swatch of the result. It is based on paint and pigment (subtractive) mixing — the way colors combine when you blend paints, markers, or dyes.',
  },
  {
    id: 2,
    question: 'What do blue and yellow make?',
    answer:
      'Blue and yellow make green. Blue and red make purple, and red and yellow make orange — those three are the classic "secondary" colors you get from mixing two primary colors.',
  },
  {
    id: 3,
    question: 'Why is this different from mixing light (RGB)?',
    answer:
      'Paint mixing is subtractive: pigments absorb light, so blue and yellow paint make green. Mixing colored light is additive and works differently — red and green light, for example, make yellow. This tool uses the paint model, which is what most people mean by "mixing colors."',
  },
  {
    id: 4,
    question: 'What two colors make brown?',
    answer:
      'Mixing complementary colors makes brown — for example green and red, blue and orange, or purple and yellow. Combining all three primary colors (red, yellow, and blue) also produces brown.',
  },
  {
    id: 5,
    question: 'How do I make a color lighter or darker?',
    answer:
      'Add white to make a lighter "tint" (red plus white makes pink) and add black to make a darker "shade" (red plus black makes maroon). You can try both in the mixer by choosing white or black as one of your colors.',
  },
];
