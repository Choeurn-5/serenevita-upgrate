import React from 'react';
import Link from 'next/link';
import { getActivities, getSiteSettings, resolveImageUrl } from '@/lib/api';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Activities & Experiences — Serene Vita Retreat',
  description: 'Immerse in curated adventures. From guided national park rainforest treks and cooking masterclasses to peaceful sunset infinity pool lounging.',
};

export default async function ActivityPage() {
  const [activities, settings] = await Promise.all([
    getActivities(),
    getSiteSettings(),
  ]);

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* Banner (post-29.css) */}
      <section
        style={{
          position: 'relative',
          padding: '9.5rem 1.5rem 7rem',
          backgroundImage: `linear-gradient(rgba(18, 22, 18, 0.28), rgba(18, 22, 18, 0.50)), url(${resolveImageUrl('/storage/uploads/SD-00.webp')})`,
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
            Curated Leisure
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
            Activities & Services
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
            Immerse yourself in authentic cultural, botanical, and rejuvenating experiences crafted for mindful exploration.
          </p>
        </div>
      </section>

      {/* Activities Grid (post-29.css in #F5EFE5) */}
      <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--wp-sand-bg)' }}>
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
              Excursions & Masterclasses
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.75rem',
                color: '#472D1D',
                margin: '0.75rem 0 1rem',
              }}
            >
              Signature Experiences
            </h2>
            <div className="wp-divider" />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {activities.map((act) => (
              <div
                key={act.id}
                className="wp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3px solid #676B56',
                }}
              >
                <div className="wp-image-zoom-container" style={{ height: '260px' }}>
                  <img src={resolveImageUrl(act.image)} alt={act.title} className="wp-image-zoom" />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
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
                    Curated Activity
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      color: '#472D1D',
                    }}
                  >
                    {act.title}
                  </h3>
                  <p style={{ color: '#574646', fontSize: '0.95rem', lineHeight: 1.75, flex: 1 }}>
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Concierge Callout */}
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
              Custom Itineraries & Private Guides
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
              Looking for a private mountain trek or a bespoke celebration by the infinity pools? Our guest experience concierge will curate an unforgettable stay.
            </p>
            <Link href="/contact-us" className="wp-btn-cream">
              Plan Custom Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
