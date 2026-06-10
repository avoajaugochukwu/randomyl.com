import { Metadata } from 'next';
import TruthOrDareGenerator from './TruthOrDareGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Truth or Dare Generator',
  description: 'Free truth or dare generator. Random clean truth questions and dare challenges by difficulty — perfect for parties, sleepovers, and game night.',
  openGraph: { title: 'Truth or Dare Generator | Randomyl', description: 'Random truth questions and dare challenges by difficulty. Free, clean, and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/truth-or-dare-generator`,
    languages: { 'en-US': `${baseUrl}/tools/truth-or-dare-generator`, 'x-default': `${baseUrl}/tools/truth-or-dare-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Truth or Dare Generator',
  applicationCategory: 'GameApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/truth-or-dare-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function TruthOrDareGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Truth or Dare Generator"
        description="Random clean truth questions and dare challenges by difficulty — truths only, dares only, or a mix. Free, instant, and ready for game night."
        tag="Generator · Games & Fun"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Truth or Dare' }]}
      />
      <section className="wrap" id="app">
        <TruthOrDareGenerator />
      </section>
      <ToolDescription toolKey="truthordare" />
      <FAQList type="truthordare" />
      <OtherTools current="truthordare" />
    </>
  );
}
