import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Serene Vita Retreat — Regenerative Luxury Sanctuary',
  description: 'A regenerative luxury escape to recharge, explore, and connect. Discover tranquil infinity pools, mountain-facing suites, restorative wellness, and authentic gastronomy.',
  keywords: ['Serene Vita Retreat', 'Luxury Retreat Cambodia', 'Boutique Resort', 'Wellness Sanctuary', 'Infinity Pool Villa', 'Kampot Resort'],
  openGraph: {
    title: 'Serene Vita Retreat — Regenerative Luxury Escape',
    description: 'A regenerative luxury escape to recharge, explore, and connect with nature.',
    url: 'https://serenevita.asia',
    siteName: 'Serene Vita Retreat',
    images: [
      {
        url: '/storage/uploads/Pool-exterior-04-1.webp',
        width: 1200,
        height: 630,
        alt: 'Serene Vita Retreat Pool View',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Resort',
    name: 'Serene Vita Retreat',
    url: 'https://serenevita.asia',
    logo: '/storage/uploads/cropped-Untitled-2-1.webp',
    description: 'A regenerative luxury escape to recharge, explore, and connect.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Cambodia',
    },
    telephone: '+855 12 345 678',
    email: 'info@serenevita.asia',
    priceRange: '$$$',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Tiered Azure Infinity Pools' },
      { '@type': 'LocationFeatureSpecification', name: 'Holistic Spa & Wellness Pavilion' },
      { '@type': 'LocationFeatureSpecification', name: 'Fine Dining Khmer & Western Restaurant' },
      { '@type': 'LocationFeatureSpecification', name: 'Mountain View Balconies' },
      { '@type': 'LocationFeatureSpecification', name: 'High-Speed Wi-Fi' },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
