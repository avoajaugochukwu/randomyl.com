import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/common/Hero';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';
import { wordsByLetter } from './wordsByLetter';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const metadata: Metadata = {
  title: 'Words That Start With Every Letter (A–Z Word Lists)',
  description:
    'Browse common English words that start with each letter A to Z, grouped by length. Perfect for Wordle, Scrabble, crosswords, word games, and writing.',
  openGraph: {
    title: 'Words That Start With Every Letter (A–Z)',
    description: 'Common word lists for every letter of the alphabet, grouped by length.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/words-that-start-with`,
    languages: {
      'en-US': `${baseUrl}/words-that-start-with`,
      'x-default': `${baseUrl}/words-that-start-with`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Words That Start With Every Letter (A–Z)',
  description: 'Common English word lists for every letter of the alphabet, grouped by length.',
  url: `${baseUrl}/words-that-start-with`,
  isPartOf: { '@type': 'WebSite', name: 'Randomyl', url: baseUrl },
};

export default function WordsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Words That Start With Every Letter"
        description="Pick a letter to see a list of common English words that start with it, grouped by length — handy for Wordle, Scrabble, crosswords, and word games."
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
            const count = wordsByLetter[c]?.length ?? 0;
            return (
              <Link key={c} href={`/words-that-start-with/${c}`} className="letter-card">
                <span className="letter-card-letter">{c.toUpperCase()}</span>
                <span className="letter-card-count">{count} words</span>
              </Link>
            );
          })}
        </div>

        <p className="prose-intro">
          Looking for a random word instead of a list? Try the{' '}
          <Link href="/tools/random-word-generator">random word generator</Link>, or spin up a random
          letter to start a fresh round with the{' '}
          <Link href="/tools/random-letter-generator">random letter generator</Link>.
        </p>
      </section>

      <OtherTools current="letter" />
    </>
  );
}
