import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/common/Hero';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';
import { wordsByEnding } from './wordsByEnding';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const metadata: Metadata = {
  title: 'Words That End In Every Letter (A–Z Word Lists)',
  description:
    'Browse common English words that end in each letter A to Z, grouped by length. Perfect for Wordle, Scrabble, crosswords, rhymes, and word games.',
  openGraph: {
    title: 'Words That End In Every Letter (A–Z)',
    description: 'Common word lists for every ending letter of the alphabet, grouped by length.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/words-that-end-in`,
    languages: {
      'en-US': `${baseUrl}/words-that-end-in`,
      'x-default': `${baseUrl}/words-that-end-in`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Words That End In Every Letter (A–Z)',
  description: 'Common English word lists for every ending letter of the alphabet, grouped by length.',
  url: `${baseUrl}/words-that-end-in`,
  isPartOf: { '@type': 'WebSite', name: 'Randomyl', url: baseUrl },
};

export default function WordsEndingHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Words That End In Every Letter"
        description="Pick a letter to see common English words that end in it, grouped by length — handy for Wordle, Scrabble, crosswords, and rhymes."
        tag="Word Lists · Words & Language"
        crumb={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Word Lists' },
        ]}
      />

      <section className="wrap">
        <div className="letter-grid">
          {LETTERS.map((c) => {
            const count = wordsByEnding[c]?.length ?? 0;
            return (
              <Link key={c} href={`/words-that-end-in/${c}`} className="letter-card">
                <span className="letter-card-letter">{c.toUpperCase()}</span>
                <span className="letter-card-count">{count} words</span>
              </Link>
            );
          })}
        </div>

        <p className="prose-intro">
          Looking for the other end of the word? Browse{' '}
          <Link href="/words-that-start-with">words that start with every letter</Link>, grab a random
          word from the <Link href="/tools/random-word-generator">random word generator</Link>, or
          spin a fresh letter with the{' '}
          <Link href="/tools/random-letter-generator">random letter generator</Link>.
        </p>
      </section>

      <OtherTools current="letter" />
    </>
  );
}
