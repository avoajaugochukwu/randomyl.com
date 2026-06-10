import { Metadata } from 'next';
import QuestionGenerator from './QuestionGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Question Generator',
  description: 'Free random question generator. Get conversation starters, ice-breakers, and deep questions for groups, classrooms, dates, and games.',
  openGraph: { title: 'Random Question Generator | Randomyl', description: 'Generate random questions and conversation starters. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-question-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-question-generator`, 'x-default': `${baseUrl}/tools/random-question-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Question Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-question-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function QuestionGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Question Generator"
        description="Get random conversation starters, ice-breakers, and thought-provoking questions for groups, classrooms, and games. Free, instant, no sign-up."
        tag="Generator · Fun & Social"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Question Generator' }]}
      />
      <section className="wrap" id="app">
        <QuestionGenerator />
      </section>
      <ToolDescription toolKey="question" />
      <FAQList type="question" />
      <OtherTools current="question" />
    </>
  );
}
