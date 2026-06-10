import { Metadata } from 'next';
import TeamGenerator from './TeamGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import ToolVariants from '@/components/tools/ToolVariants';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Team Generator',
  description: 'Free random team generator. Paste a list of names and split them into fair, random teams or groups. Perfect for class, sports, and game night.',
  openGraph: {
    title: 'Random Team Generator | Randomyl',
    description: 'Free random team generator. Paste a list of names and split them into fair, random teams or groups. Perfect for class, sports, and game night.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-team-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-team-generator`,
      'x-default': `${baseUrl}/tools/random-team-generator`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Random Team Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-team-generator`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function TeamGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Team Generator"
        description="Paste your names and split them into fair, random teams in seconds — re-shuffle as often as you like. Free, instant, no sign-up."
        tag="Generator · Groups & Picking"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Team Generator' }]}
      />
      <section className="wrap" id="app">
        <TeamGenerator />
      </section>
      <ToolVariants hubRoute="random-team-generator" />
      <ToolDescription toolKey="team" />
      <FAQList type="team" />
      <OtherTools current="team" />
    </>
  );
}
