import { Metadata } from 'next';
import Link from 'next/link';
import MoodRingGenerator from './MoodRingGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Mood Ring Generator',
  description: 'Free mood ring generator. Tap for a random mood-ring color and its meaning — from calm blue to stressed black. Instant, fun, no sign-up.',
  openGraph: { title: 'Mood Ring Generator | Randomyl', description: 'Get a random mood-ring color and what it means. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/mood-ring-generator`,
    languages: { 'en-US': `${baseUrl}/tools/mood-ring-generator`, 'x-default': `${baseUrl}/tools/mood-ring-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Mood Ring Generator',
  applicationCategory: 'GameApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/mood-ring-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function MoodRingGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Mood Ring Generator"
        description="Tap the ring for a random mood-ring color and what it traditionally means — from calm blue to stressed black. Free, instant, and just for fun."
        tag="Generator · Fun & Social"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Mood Ring Generator' }]}
      />
      <section className="wrap" id="app">
        <MoodRingGenerator />
      </section>
      <section className="wrap">
        <p className="prose-intro">
          Curious what each color really means and how mood rings actually work? Read the full{' '}
          <Link href="/blog/mood-ring-color-meanings">mood ring color meanings guide</Link>, or pick
          a shade with the <Link href="/tools/random-color-generator">random color generator</Link>.
        </p>
      </section>
      <ToolDescription toolKey="moodring" />
      <FAQList type="moodring" />
      <OtherTools current="moodring" />
    </>
  );
}
