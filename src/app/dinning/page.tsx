import React from 'react';
import Link from 'next/link';
import { getDiningVenue, getSiteSettings, resolveImageUrl } from '@/lib/api';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Dining — Serenity Restaurant | Serene Vita Retreat',
  description: 'A culinary journey to international and local Khmer gastronomy. Discover fresh seasonal farm-to-table cuisine at Serenity Restaurant.',
};

export default async function DinningPage() {
  const [dining, settings] = await Promise.all([
    getDiningVenue(),
    getSiteSettings(),
  ]);

  const cards = [
    { title: 'AREA', value: dining.area, img: resolveImageUrl('/storage/uploads/00-r.webp'), desc: 'Intimate dining space with garden & pool vistas' },
    { title: 'TABLE', value: dining.capacity, img: resolveImageUrl('/storage/uploads/10-r-1-1024x684.webp'), desc: 'Handcrafted teak tables with candlelight ambiance' },
    { title: 'FOOD', value: dining.food_type, img: resolveImageUrl('/storage/uploads/12-r.webp'), desc: 'Authentic Khmer heritage recipes & refined Western classics' },
    { title: 'DRINK', value: dining.drinks_type, img: resolveImageUrl('/storage/uploads/11-r.webp'), desc: 'Botanical mocktails, craft cocktails, organic tea & fine wine' },
    { title: 'MEAL', value: dining.meal_times, img: resolveImageUrl('/storage/uploads/09-rr.webp'), desc: 'Sunrise breakfast, relaxed lunch & romantic starlit dinner' },
  ];

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* Banner (post-25.css) */}
      <section
        style={{
          position: 'relative',
          padding: '9.5rem 1.5rem 7rem',
          backgroundImage: `linear-gradient(rgba(18, 22, 18, 0.28), rgba(18, 22, 18, 0.50)), url(${resolveImageUrl(dining.hero_image) || resolveImageUrl('/storage/uploads/11-r.webp')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="wp-container" style={{ maxWidth: '850px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#FBE8D6',
              fontWeight: 600,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            {dining.subtitle || 'A Gastronomic Journey'}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
              color: '#FFFFFF',
              margin: '1rem 0',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.55)',
            }}
          >
            {dining.title || 'Serenity Restaurant'}
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.75rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <p
            style={{
              color: '#F4EDE3',
              fontSize: '1.05rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.85,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            {dining.description}
          </p>
        </div>
      </section>

      {/* Information Cards (post-25.css .elementor-element in #FBF7EC) */}
      <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--wp-linen-bg)' }}>
        <div className="wp-container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#676B56',
                fontWeight: 600,
              }}
            >
              Atmosphere & Details
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.75rem',
                color: '#472D1D',
                margin: '0.75rem 0 1rem',
              }}
            >
              Restaurant Specifications
            </h2>
            <div className="wp-divider" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="wp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3px solid #676B56',
                }}
              >
                <div className="wp-image-zoom-container" style={{ height: '240px' }}>
                  <img src={card.img} alt={card.title} className="wp-image-zoom" />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#676B56',
                      fontWeight: 600,
                    }}
                  >
                    {card.title}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#472D1D',
                    }}
                  >
                    {card.value}
                  </h3>
                  <p style={{ color: '#574646', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dining Reservation Callout */}
          <div
            style={{
              marginTop: '5rem',
              backgroundColor: '#2D2F25',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              border: '1px solid rgba(251, 232, 214, 0.25)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Private Dining & Special Dietary Requests
            </h3>
            <p
              style={{
                color: '#D2CCCC',
                maxWidth: '650px',
                margin: '0 auto 2rem',
                fontSize: '1.05rem',
                lineHeight: 1.8,
              }}
            >
              Our culinary team is pleased to cater to vegan, gluten-free, or bespoke anniversary dining setups upon request. Please connect with our concierge prior to arrival.
            </p>
            <Link href="/contact-us" className="wp-btn-cream">
              Contact Restaurant Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
