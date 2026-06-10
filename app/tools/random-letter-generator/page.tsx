import { Metadata } from 'next';
import Link from 'next/link';
import LetterGenerator from './LetterGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Letter Generator',
  description: 'Free random letter generator. Pick random letters A–Z — uppercase or lowercase, vowels or consonants, one or many at a time. Instant, no sign-up.',
  openGraph: { title: 'Random Letter Generator | Randomyl', description: 'Pick random letters A–Z, vowels or consonants, upper or lowercase. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-letter-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-letter-generator`, 'x-default': `${baseUrl}/tools/random-letter-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Letter Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-letter-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function LetterGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Letter Generator"
        description="Pick random letters from A to Z — uppercase or lowercase, the whole alphabet or just vowels or consonants. Free, instant, no sign-up."
        tag="Generator · Words & Language"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Letter Generator' }]}
      />
      <section className="wrap" id="app">
        <LetterGenerator />
      </section>
      <section className="wrap">
        <p className="prose-intro">
          Looking for words instead of single letters? Browse{' '}
          <Link href="/words-that-start-with">words that start with every letter (A–Z)</Link>,
          grouped by length for Wordle, Scrabble, and word games.
        </p>
      </section>
      <ToolDescription toolKey="letter" />
      <FAQList type="letter" />
      <OtherTools current="letter" />
    </>
  );
}
