import { Metadata } from 'next';
import CharacterNameGenerator from './CharacterNameGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Character Name Generator',
  description: 'Free character name generator for stories and games. Generate fantasy or realistic character names by style and gender. Great for writers, RPGs, and worldbuilding.',
  openGraph: { title: 'Character Name Generator | Randomyl', description: 'Generate fantasy or realistic character names for stories and games. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/character-name-generator`,
    languages: { 'en-US': `${baseUrl}/tools/character-name-generator`, 'x-default': `${baseUrl}/tools/character-name-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Character Name Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/character-name-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function CharacterNameGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Character Name Generator"
        description="Generate character names for stories and games — fantasy or realistic, by style and gender. Free, instant, perfect for writers and RPGs."
        tag="Generator · Names & Writing"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Character Name Generator' }]}
      />
      <section className="wrap" id="app">
        <CharacterNameGenerator />
      </section>
      <ToolDescription toolKey="charname" />
      <FAQList type="charname" />
      <OtherTools current="charname" />
    </>
  );
}
