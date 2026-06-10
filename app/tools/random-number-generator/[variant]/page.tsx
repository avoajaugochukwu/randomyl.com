import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NumberGenerator from '../NumberGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import ToolVariants from '@/components/tools/ToolVariants';
import { baseUrl } from '@/app/metadata';
import { getHub, getVariant, type NumberPreset } from '@/app/config/toolVariants';

const HUB = 'random-number-generator';

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

export default async function NumberVariantPage({ params }: { params: Promise<{ variant: string }> }) {
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
        tag="Generator · Numbers & Utility"
        crumb={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: hub.hubLabel, href: `/tools/${HUB}` },
          { label: v.h1 },
        ]}
      />
      <section className="wrap" id="app">
        <NumberGenerator preset={v.preset as NumberPreset} />
      </section>
      <ToolVariants hubRoute={HUB} currentSlug={v.slug} />
      <ToolDescription toolKey="number" />
      <FAQList type="number" />
      <OtherTools current="number" />
    </>
  );
}
