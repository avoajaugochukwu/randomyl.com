import { Metadata } from 'next';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import QRGenerator from './QRGenerator';
import ToolDescription from '../components/descriptions/Description';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random QR Code Generator | RandomAnything.io',
  description: 'Generate random QR codes with AI-powered content. Create QR codes for URLs, text, contact info, and more with custom styling.',
  openGraph: {
    title: 'Random QR Code Generator | RandomAnything.io',
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
    <div>
      <Hero 
        title="Random QR Code Generator" 
        description="Generate random QR codes with AI-powered content. Perfect for testing, mockups, or creative projects." 
      />
      <QRGenerator />
      <ToolDescription toolKey="qr" />
      <FAQList type="qr" />
    </div>
  );
} 