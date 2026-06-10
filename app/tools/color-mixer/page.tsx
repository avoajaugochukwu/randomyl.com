import { Metadata } from 'next';
import Link from 'next/link';
import ColorMixer from './ColorMixer';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Color Mixer — What Two Colors Make',
  description: 'Free color mixer. Pick two colors and see what they make — like blue and yellow make green. Paint-style color mixing, instant, no sign-up.',
  openGraph: { title: 'Color Mixer | Randomyl', description: 'Pick two colors and see what they make. Free paint-style color mixing tool.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/color-mixer`,
    languages: { 'en-US': `${baseUrl}/tools/color-mixer`, 'x-default': `${baseUrl}/tools/color-mixer` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Color Mixer',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/color-mixer`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function ColorMixerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Color Mixer"
        description="Pick two colors and see what they make — like blue and yellow make green. Based on paint-style mixing, instant and free."
        tag="Generator · Color & Design"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Color Mixer' }]}
      />
      <section className="wrap" id="app">
        <ColorMixer />
      </section>
      <section className="wrap">
        <p className="prose-intro">
          Want the why behind each combination? Read the{' '}
          <Link href="/blog/color-mixing-guide">color mixing guide</Link>, or grab a random shade with
          the <Link href="/tools/random-color-generator">random color generator</Link>.
        </p>
      </section>
      <ToolDescription toolKey="colormixer" />
      <FAQList type="colormixer" />
      <OtherTools current="colormixer" />
    </>
  );
}
