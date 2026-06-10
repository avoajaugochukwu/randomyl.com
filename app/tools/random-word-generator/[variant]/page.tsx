import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import WordGenerator from '../WordGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import ToolVariants from '@/components/tools/ToolVariants';
import { baseUrl } from '@/app/metadata';
import { getHub, getVariant, type WordPreset } from '@/app/config/toolVariants';

const HUB = 'random-word-generator';

export function generateStaticParams() {
  return (getHub(HUB)?.variants ?? []).map((v) => ({ variant: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ variant: string }> }): Promise<Metadata> {
  const { variant } = await params;
  const v = getVariant(HUB, variant);
  if (!v) return {};
  const url = `${baseUrl}/tools/${HUB}/${v.slug}`;
  return {
    title: v.metaTitle,
    description: v.description,
    openGraph: { title: `${v.h1} | Randomyl`, description: v.description, type: 'website' },
    robots: { index: true, follow: true },
    alternates: { canonical: url, languages: { 'en-US': url, 'x-default': url } },
  };
}

export default async function WordVariantPage({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  const hub = getHub(HUB);
  const v = getVariant(HUB, variant);
  if (!hub || !v) notFound();

  const url = `${baseUrl}/tools/${HUB}/${v.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: v.h1,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    url,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title={v.h1}
        description={v.intro}
        tag="Generator · Words & Language"
        crumb={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: hub.hubLabel, href: `/tools/${HUB}` },
          { label: v.h1 },
        ]}
      />
      <section className="wrap" id="app">
        <WordGenerator preset={v.preset as WordPreset} />
      </section>
      <ToolVariants hubRoute={HUB} currentSlug={v.slug} />
      <ToolDescription toolKey="word" />
      <FAQList type="word" />
      <OtherTools current="word" />
    </>
  );
}
