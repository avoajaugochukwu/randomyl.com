import { Metadata } from 'next';
import UsernameGenerator from './UsernameGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Username Generator',
  description: 'Free random username generator. Get unique, memorable usernames and handles for gaming, social media, and sign-ups. Instant and free.',
  openGraph: { title: 'Random Username Generator | Randomyl', description: 'Generate unique usernames and handles for gaming and social media. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-username-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-username-generator`, 'x-default': `${baseUrl}/tools/random-username-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Username Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-username-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function UsernameGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Username Generator"
        description="Generate unique, memorable usernames and handles for gaming, social media, and new accounts. Free, instant, no sign-up."
        tag="Generator · Names & Identity"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Username Generator' }]}
      />
      <section className="wrap" id="app">
        <UsernameGenerator />
      </section>
      <ToolDescription toolKey="username" />
      <FAQList type="username" />
      <OtherTools current="username" />
    </>
  );
}
