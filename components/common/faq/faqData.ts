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
    default:
      return [];
  }
}; 