import { Metadata } from 'next';
import DecisionMaker from './DecisionMaker';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import ToolVariants from '@/components/tools/ToolVariants';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Decision Maker',
  description: 'Free decision maker. Type your options and let it pick one at random, or use the quick yes-or-no mode. Fast, fair, and unbiased.',
  openGraph: {
    title: 'Decision Maker | Randomyl',
    description: 'Free decision maker. Type your options and let it pick one at random, or use the quick yes-or-no mode. Fast, fair, and unbiased.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/decision-maker`,
    languages: {
      'en-US': `${baseUrl}/tools/decision-maker`,
      'x-default': `${baseUrl}/tools/decision-maker`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Decision Maker',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${baseUrl}/tools/decision-maker`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function DecisionMakerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Decision Maker"
        description="Can't decide? Type your options and let the decision maker pick one at random — fair, fast, and unbiased. Free, no sign-up."
        tag="Generator · Decisions"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Decision Maker' }]}
      />
      <section className="wrap" id="app">
        <DecisionMaker />
      </section>
      <ToolVariants hubRoute="decision-maker" />
      <ToolDescription toolKey="decision" />
      <FAQList type="decision" />
      <OtherTools current="decision" />
    </>
  );
}
