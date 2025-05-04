import { Metadata } from "next";

export const baseUrl = 'https://randomyl.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Randomyl',
    default: 'Randomyl - Generate Random Data Instantly',
  },
  description: 'Generate random data in seconds. Perfect for businesses, freelancers, and professionals looking to streamline their data generation process.',
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-US': baseUrl,
      'x-default': baseUrl
    },
  },
  openGraph: {
    title: "Randomyl - Generate Random Data Instantly",
    description: "Generate random data in seconds. Perfect for businesses, freelancers, and professionals looking to streamline their data generation process.",
    url: baseUrl,
    siteName: "Randomyl",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Randomyl - Generate Random Data Instantly",
    description: "Generate random data in seconds. Perfect for businesses, freelancers, and professionals looking to streamline their data generation process.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  icons: {
    icon: "favicon_io/favicon.ico",
    apple: "favicon_io/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "favicon_io/favicon.ico",
    },
    shortcut: "favicon_io/favicon.ico",
  }
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Randomyl',
  description: 'Generate random data in seconds. Perfect for businesses, freelancers, and professionals looking to streamline their data generation process.',
  url: baseUrl,
  // potentialAction: {
  //   '@type': 'SearchAction',
  //   target: {
  //     '@type': 'EntryPoint',
  //     urlTemplate: `${baseUrl}/blog?q={search_term_string}`
  //   },
  //   'query-input': 'required name=search_term_string'
  // },
  publisher: {
    '@type': 'Organization',
    name: 'Randomyl',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`
    }
  }
};