import { Metadata } from 'next';
import BibleVerseGenerator from './BibleVerseGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';
export const metadata: Metadata = {
  title: 'Random Bible Verse Generator',
  description: 'Generate random Bible verses by theme, book, or category. Perfect for daily devotionals, study, and spiritual inspiration.',
  openGraph: {
    title: 'Random Bible Verse Generator | Randomyl',
    description: 'Generate meaningful Bible verses with our AI-powered tool. Choose from different translations and themes.',
    type: 'website',
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: `${baseUrl}/tools/random-bible-verse-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-bible-verse-generator`,
      'x-default': `${baseUrl}/tools/random-bible-verse-generator`,
    },
  },
};

export default function BibleVersePage() {
  return (
    <>
      <Hero
        title="Random Bible Verse Generator"
        description="Generate meaningful Bible verses for daily devotionals, study, or inspiration. Specify themes, books, or categories to find verses that resonate."
        tag="Generator · Faith & Study"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Bible Verse Generator' }]}
      />
      <section className="wrap" id="app">
        <BibleVerseGenerator />
      </section>
      <ToolDescription toolKey="bible" />
      <FAQList type="bible" />
      <OtherTools current="bible" />
    </>
  );
} 