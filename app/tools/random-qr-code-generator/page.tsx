import { Metadata } from 'next';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import QRGenerator from './QRGenerator';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random QR Code Generator',
  description: 'Generate random QR codes with AI-powered content. Create QR codes for URLs, text, contact info, and more with custom styling.',
  openGraph: {
    title: 'Random QR Code Generator | Randomyl',
    description: 'Generate random QR codes with AI-powered content.',
    type: 'website',
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: `${baseUrl}/tools/random-qr-code-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-qr-code-generator`,
      'x-default': `${baseUrl}/tools/random-qr-code-generator`,
    },
  },
};

export default function QRGeneratorPage() {
  return (
    <>
      <Hero
        title="QR Code Generator"
        description="Generate QR codes with custom content and styling — scannable, exportable, and ready to embed anywhere."
        tag="Generator · Marketing & Web"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'QR Code Generator' }]}
      />
      <section className="wrap" id="app">
        <QRGenerator />
      </section>
      <ToolDescription toolKey="qr" />
      <FAQList type="qr" />
      <OtherTools current="qr" />
    </>
  );
} 