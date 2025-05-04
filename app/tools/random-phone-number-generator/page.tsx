// random-phone-number-generator

import { FAQList } from "@/components/common/faq/FAQList";
import Hero from "@/components/common/Hero";
import PhoneNumberGenerator from './PhoneNumberGenerator';
import { Metadata } from 'next';
import ToolDescription from '../components/descriptions/Description';
import { baseUrl } from "@/app/metadata";
// User should be able to enter details manually in separate input fields
// or
// user can use ai and describe what they want
// ask how many numbers they want to generate

export const metadata: Metadata = {
  title: 'Random Phone Number Generator | RandomAnything.io',
  description: 'Generate random phone numbers with our AI-powered phone number generator. Perfect for developers, testers, and educators.',
  openGraph: {
    title: 'Random Phone Number Generator | RandomAnything.io',
    description: 'Generate random phone numbers with our AI-powered phone number generator. Perfect for developers, testers, and educators.',
    type: 'website',
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: `${baseUrl}/tools/random-phone-number-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-phone-number-generator`,
      'x-default': `${baseUrl}/tools/random-phone-number-generator`,
    },
  },
};


export default function RandomPhoneNumberGenerator() {
  return (
    <>
      <Hero 
        title="Random Phone Number Generator" 
        description="Generate random phone numbers for any country or area code" 
      />
      <PhoneNumberGenerator />
      <ToolDescription toolKey="phone" />
      <FAQList type="phone" />
    </>
  );
}
