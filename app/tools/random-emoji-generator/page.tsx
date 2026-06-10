import { Metadata } from 'next';
import EmojiGenerator from './EmojiGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Emoji Generator',
  description: 'Free random emoji generator. Get random emojis by category — copy one or a whole set in a tap. Fun for chats, captions, and games.',
  openGraph: { title: 'Random Emoji Generator | Randomyl', description: 'Generate random emojis by category and copy them in a tap. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-emoji-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-emoji-generator`, 'x-default': `${baseUrl}/tools/random-emoji-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Emoji Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-emoji-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function EmojiGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Emoji Generator"
        description="Generate random emojis by category and copy one or a whole set in a tap. Free, instant, and fun for chats and games."
        tag="Generator · Fun & Social"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Emoji Generator' }]}
      />
      <section className="wrap" id="app">
        <EmojiGenerator />
      </section>
      <ToolDescription toolKey="emoji" />
      <FAQList type="emoji" />
      <OtherTools current="emoji" />
    </>
  );
}
