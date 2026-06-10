import { Metadata } from 'next';
import ColorGenerator from './ColorGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Color Generator',
  description: 'Free random color generator with hex and RGB codes and live swatches. Generate a single color or a whole palette instantly — perfect for design and inspiration.',
  openGraph: { title: 'Random Color Generator | Randomyl', description: 'Generate random colors with hex and RGB codes and live swatches. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-color-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-color-generator`, 'x-default': `${baseUrl}/tools/random-color-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Color Generator',
  applicationCategory: 'DesignApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-color-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function ColorGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Color Generator"
        description="Generate random colors with hex and RGB codes and live swatches — one color or a whole palette. Free, instant, no sign-up."
        tag="Generator · Design & Color"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Color Generator' }]}
      />
      <section className="wrap" id="app">
        <ColorGenerator />
      </section>
      <ToolDescription toolKey="color" />
      <FAQList type="color" />
      <OtherTools current="color" />
    </>
  );
}
