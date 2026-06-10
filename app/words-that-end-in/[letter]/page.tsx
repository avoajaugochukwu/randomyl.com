import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '@/components/common/Hero';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';
import { wordsByEnding } from '../wordsByEnding';
import RandomWordPicker from '../../words-that-start-with/RandomWordPicker';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

export function generateStaticParams() {
  return LETTERS.map((letter) => ({ letter }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ letter: string }> };

function lengthGroups(words: string[]) {
  const buckets: { label: string; words: string[] }[] = [];
  for (const len of [3, 4, 5, 6, 7, 8]) {
    const w = words.filter((x) => x.length === len);
    if (w.length) buckets.push({ label: `${len}-letter words`, words: w });
  }
  const longer = words.filter((x) => x.length >= 9);
  if (longer.length) buckets.push({ label: '9-letter words and longer', words: longer });
  return buckets;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { letter } = await params;
  const L = letter.toLowerCase();
  const words = wordsByEnding[L];
  if (!words) return {};
  const U = L.toUpperCase();
  const url = `${baseUrl}/words-that-end-in/${L}`;
  return {
    title: `Words That End In ${U} — ${words.length} Common Words`,
    description: `A handy list of ${words.length} common English words that end in the letter ${U}, grouped by length (3–8+ letters). Great for word games, Wordle, Scrabble, and rhymes.`,
    openGraph: { title: `Words That End In ${U}`, description: `${words.length} common words that end in ${U}, grouped by length.`, type: 'website' },
    robots: { index: true, follow: true },
    alternates: { canonical: url, languages: { 'en-US': url, 'x-default': url } },
  };
}

export default async function WordsEndingInPage({ params }: Props) {
  const { letter } = await params;
  const L = letter.toLowerCase();
  const words = wordsByEnding[L];
  if (!words) notFound();
  const U = L.toUpperCase();
  const url = `${baseUrl}/words-that-end-in/${L}`;
  const groups = lengthGroups(words);
  const sample = words.filter((w) => w.length >= 4 && w.length <= 6).slice(0, 6).join(', ');
  const rare = words.length < 10;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Words That End In ${U}`,
    description: `A list of ${words.length} common English words that end in the letter ${U}.`,
    url,
    isPartOf: { '@type': 'WebSite', name: 'Randomyl', url: baseUrl },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title={`Words That End In ${U}`}
        description={`${words.length} common English words that end in the letter ${U}${sample ? ` — like ${sample}` : ''}. Grouped by length, perfect for word games, Wordle, Scrabble, and rhymes.`}
        tag="Word Lists · Words & Language"
        crumb={[
          { label: 'Home', href: '/' },
          { label: 'Word Lists', href: '/words-that-end-in' },
          { label: `Ending in ${U}` },
        ]}
      />

      <section className="wrap">
        <nav className="az-nav" aria-label="Browse words by ending letter">
          {LETTERS.map((c) => (
            <Link
              key={c}
              href={`/words-that-end-in/${c}`}
              className={c === L ? 'az-link is-active' : 'az-link'}
            >
              {c.toUpperCase()}
            </Link>
          ))}
        </nav>

        <RandomWordPicker words={words} letter={L} relation="ending with" />

        {rare ? (
          <p className="prose-intro">
            Very few English words end in the letter <strong>{U}</strong> — here are the most common
            ones. If you need more options for a word game, browse{' '}
            <Link href="/words-that-end-in">other ending letters</Link> or the{' '}
            <Link href="/words-that-start-with">words that start with each letter</Link>.
          </p>
        ) : (
          <p className="prose-intro">
            Plenty of everyday words end in <strong>{U}</strong>. Below are <strong>{words.length}</strong>{' '}
            common ones, sorted by length so you can quickly find the right fit — a short 3-letter
            answer, a 5-letter Wordle solution, or a longer word for Scrabble and crosswords. Want a
            single pick at random? Use the button above, or the{' '}
            <Link href="/tools/random-word-generator">random word generator</Link>.
          </p>
        )}

        {groups.map((g) => (
          <section key={g.label} className="word-group">
            <h2 className="h2">
              {g.label} that end in {U}
            </h2>
            <p className="word-list">
              {g.words.map((w, i) => (
                <span key={w}>
                  {w}
                  {i < g.words.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          </section>
        ))}

        <section className="word-group">
          <h2 className="h2">Using these words in games</h2>
          <ul>
            <li>
              <strong>Wordle:</strong> the 5-letter list above helps when you know the last letter of
              the answer ends in {U}.
            </li>
            <li>
              <strong>Scrabble &amp; Words With Friends:</strong> words ending in {U} are handy for
              hooking onto letters already on the board.
            </li>
            <li>
              <strong>Rhymes &amp; poetry:</strong> a shared ending letter is a quick way to find
              near-rhymes and line endings.
            </li>
            <li>
              Need a fresh starting letter instead? Try the{' '}
              <Link href="/words-that-start-with">words that start with</Link> lists or the{' '}
              <Link href="/tools/random-letter-generator">random letter generator</Link>.
            </li>
          </ul>
        </section>

        <section className="word-group">
          <h2 className="h2">Frequently asked questions</h2>
          <h3>How many words end in the letter {U}?</h3>
          <p>
            English has many words ending in {U}, including rare and technical terms. This page lists{' '}
            {words.length} of the most common, everyday words that end in {U}.
          </p>
          <h3>What is a good 5-letter word that ends in {U}?</h3>
          <p>
            Check the 5-letter group above — five-letter words ending in {U} are useful for solving
            Wordle once you know the final letter.
          </p>
          <h3>Where can I get a random word that ends in {U}?</h3>
          <p>
            Tap the “Random word ending with {U}” button above for an instant pick, or open the{' '}
            <Link href="/tools/random-word-generator">random word generator</Link> for more options.
          </p>
        </section>
      </section>

      <OtherTools current="letter" />
    </>
  );
}
