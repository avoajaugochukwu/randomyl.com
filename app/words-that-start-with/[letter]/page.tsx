import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Hero from '@/components/common/Hero';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';
import { wordsByLetter } from '../wordsByLetter';
import RandomWordPicker from '../RandomWordPicker';

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
  const words = wordsByLetter[L];
  if (!words) return {};
  const U = L.toUpperCase();
  const url = `${baseUrl}/words-that-start-with/${L}`;
  return {
    title: `Words That Start With ${U} — ${words.length} Common Words`,
    description: `A handy list of ${words.length} common English words that start with the letter ${U}, grouped by length (3–8+ letters). Great for word games, Wordle, Scrabble, and writing.`,
    openGraph: { title: `Words That Start With ${U}`, description: `${words.length} common words that start with ${U}, grouped by length.`, type: 'website' },
    robots: { index: true, follow: true },
    alternates: { canonical: url, languages: { 'en-US': url, 'x-default': url } },
  };
}

export default async function WordsStartingWithPage({ params }: Props) {
  const { letter } = await params;
  const L = letter.toLowerCase();
  const words = wordsByLetter[L];
  if (!words) notFound();
  const U = L.toUpperCase();
  const url = `${baseUrl}/words-that-start-with/${L}`;
  const groups = lengthGroups(words);
  const sample = words.filter((w) => w.length >= 4 && w.length <= 6).slice(0, 6).join(', ');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Words That Start With ${U}`,
    description: `A list of ${words.length} common English words that start with the letter ${U}.`,
    url,
    isPartOf: { '@type': 'WebSite', name: 'Randomyl', url: baseUrl },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title={`Words That Start With ${U}`}
        description={`${words.length} common English words that begin with the letter ${U}${sample ? ` — like ${sample}` : ''}. Grouped by length, perfect for word games, Wordle openers, Scrabble, and writing.`}
        tag="Word Lists · Words & Language"
        crumb={[
          { label: 'Home', href: '/' },
          { label: 'Word Lists', href: '/words-that-start-with' },
          { label: `Starting with ${U}` },
        ]}
      />

      <section className="wrap">
        <nav className="az-nav" aria-label="Browse words by starting letter">
          {LETTERS.map((c) => (
            <Link
              key={c}
              href={`/words-that-start-with/${c}`}
              className={c === L ? 'az-link is-active' : 'az-link'}
            >
              {c.toUpperCase()}
            </Link>
          ))}
        </nav>

        <RandomWordPicker words={words} letter={L} />

        <p className="prose-intro">
          There are plenty of everyday words that start with <strong>{U}</strong>. Below are{' '}
          <strong>{words.length}</strong> common ones, sorted into groups by how many letters they
          have so you can quickly find the right fit — a short 3-letter answer, a 5-letter Wordle
          opener, or a longer word for Scrabble and crosswords. Want a single pick at random? Use the
          button above, or the{' '}
          <Link href="/tools/random-word-generator">random word generator</Link>.
        </p>

        {groups.map((g) => (
          <section key={g.label} className="word-group">
            <h2 className="h2">
              {g.label} that start with {U}
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
              <strong>Wordle:</strong> the 5-letter list above is a great place to find a strong
              opening guess that starts with {U}.
            </li>
            <li>
              <strong>Scrabble &amp; Words With Friends:</strong> longer words score more — scan the
              7- and 8-letter groups for high-value plays.
            </li>
            <li>
              <strong>Word games for kids:</strong> the 3- and 4-letter words are ideal for spelling
              practice and early readers.
            </li>
            <li>
              Need a random letter to start a new round? Try the{' '}
              <Link href="/tools/random-letter-generator">random letter generator</Link>.
            </li>
          </ul>
        </section>

        <section className="word-group">
          <h2 className="h2">Frequently asked questions</h2>
          <h3>How many words start with the letter {U}?</h3>
          <p>
            English has thousands of words beginning with {U}, including rare and technical terms.
            This page lists {words.length} of the most common, everyday words that start with {U} —
            the ones you are most likely to actually use.
          </p>
          <h3>What is a good 5-letter word that starts with {U}?</h3>
          <p>
            Check the 5-letter group above for options. Five-letter words that start with {U} make
            handy Wordle starting guesses.
          </p>
          <h3>Where can I get a random word that starts with {U}?</h3>
          <p>
            Tap the “Random word starting with {U}” button above for an instant pick from this list,
            or open the{' '}
            <Link href="/tools/random-word-generator">random word generator</Link> for more options.
          </p>
        </section>
      </section>

      <OtherTools current="letter" />
    </>
  );
}
