import { FAQItemType } from './types';
import { homepageFaqs } from './data/homepageFaqs';
import { phoneFaqs } from './data/phoneFaqs';
import { nounFaqs } from './data/nounFaqs';
import { bibleFaqs } from './data/bibleFaqs';
import { objectFaqs } from './data/objectFaqs';
import { ToolKey } from '@/app/config/tools';
import { qrFaqs } from './data/qrFaqs';
import { numberFaqs } from './data/numberFaqs';
import { wordFaqs } from './data/wordFaqs';
import { pictionaryFaqs } from './data/pictionaryFaqs';
import { posFaqs } from './data/posFaqs';
import { letterFaqs } from './data/letterFaqs';
import { colorFaqs } from './data/colorFaqs';
import { animalFaqs } from './data/animalFaqs';
import { teamFaqs } from './data/teamFaqs';
import { countryFaqs } from './data/countryFaqs';
import { decisionFaqs } from './data/decisionFaqs';
import { sentenceFaqs } from './data/sentenceFaqs';
import { questionFaqs } from './data/questionFaqs';

export type FAQType = 'homepage' | ToolKey;

export const getFAQs = (type: FAQType): FAQItemType[] => {
  switch (type) {
    case 'homepage':
      return homepageFaqs;
    case 'phone':
      return phoneFaqs;
    case 'noun':
      return nounFaqs;
    case 'bible':
      return bibleFaqs;
    case 'object':
      return objectFaqs;
    case 'qr':
      return qrFaqs;
    case 'number':
      return numberFaqs;
    case 'word':
      return wordFaqs;
    case 'pictionary':
      return pictionaryFaqs;
    case 'pos':
      return posFaqs;
    case 'letter':
      return letterFaqs;
    case 'color':
      return colorFaqs;
    case 'animal':
      return animalFaqs;
    case 'team':
      return teamFaqs;
    case 'country':
      return countryFaqs;
    case 'decision':
      return decisionFaqs;
    case 'sentence':
      return sentenceFaqs;
    case 'question':
      return questionFaqs;
    default:
      return [];
  }
}; 