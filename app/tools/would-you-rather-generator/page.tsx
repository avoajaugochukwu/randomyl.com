import { Metadata } from 'next';
import Link from 'next/link';
import WouldYouRatherGenerator from './WouldYouRatherGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Would You Rather Generator',
  description: 'Free would you rather generator. Get random would-you-rather questions — funny, hard, deep, food, gross, and kid-friendly. Instant, no sign-up.',
  openGraph: { title: 'Would You Rather Generator | Randomyl', description: 'Random would-you-rather questions by category — funny, hard, deep, and more. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/would-you-rather-generator`,
    languages: { 'en-US': `${baseUrl}/tools/would-you-rather-generator`, 'x-default': `${baseUrl}/tools/would-you-rather-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Would You Rather Generator',
  applicationCategory: 'GameApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/would-you-rather-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function WouldYouRatherGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Would You Rather Generator"
        description="Get random would-you-rather questions by category — funny, hard, deep, food, gross, and kid-friendly. Free, instant, perfect for parties, road trips, and game night."
        tag="Generator · Fun & Social"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Would You Rather Generator' }]}
      />
      <section className="wrap" id="app">
        <WouldYouRatherGenerator />
      </section>
      <section className="wrap">
        <p className="prose-intro">
          Want a big bank to read from instead? Browse{' '}
          <Link href="/blog/would-you-rather-questions">200+ would you rather questions</Link>, or
          mix in a round of{' '}
          <Link href="/blog/truth-or-dare-questions">truth or dare</Link>.
        </p>
      </section>
      <ToolDescription toolKey="wouldyourather" />
      <FAQList type="wouldyourather" />
      <OtherTools current="wouldyourather" />
    </>
  );
}
