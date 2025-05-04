import { Metadata } from 'next';
import Link from 'next/link';
import { tools } from '@/app/config/tools';
import Hero from '@/components/common/Hero';
import { baseUrl } from '@/app/metadata';
export const metadata: Metadata = {
  title: 'Random Generator Tools | RandomAnything.io',
  description: 'Explore our collection of random generators. Generate phone numbers, nouns, text, and more with our AI-powered tools.',
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: `${baseUrl}/tools`,
    languages: {
      'en-US': `${baseUrl}/tools`,
      'x-default': `${baseUrl}/tools`,
    },
  },
};

export default function ToolsPage() {
  return (
    <div className="">
      <Hero
        title="Random Generator Tools"
        description="Explore our collection of random generators. Generate phone numbers, nouns, text, and more with our AI-powered tools." />
      <div className="max-w-6xl mx-auto px-4">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.key}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <tool.icon size={24} color={tool.iconColor} />
                <h2 className="text-xl font-semibold">{tool.label}</h2>
              </div>
              <p className="text-gray-600 mb-4">
                {tool.description}
              </p>
              {!tool.comingSoon ? (
                <Link
                  href={`/tools/${tool.route}`}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Try Now
                </Link>
              ) : (
                <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">More Tools Coming Soon</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are constantly working on new generators to help you create random anything.
            Check back regularly for updates or subscribe to our newsletter to be notified
            when new tools are released.
          </p>
        </div>
      </div>
    </div>
  );
} 