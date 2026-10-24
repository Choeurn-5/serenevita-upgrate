import React from 'react';
import Link from 'next/link';
import { getWellnessItems, getSiteSettings } from '@/lib/api';

export const metadata = {
  title: 'Wellness & Spa — Serene Vita Retreat',
  description: 'Restore body, mind, and spirit at Serene Vita Wellness Sanctuary. Traditional Khmer healing, daily sunrise yoga, sound therapy, and restorative spa rituals.',
};

export default async function WellnessPage() {
  const [items, settings] = await Promise.all([
    getWellnessItems(),
    getSiteSettings(),
  ]);

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* Hero Banner (post-27.css) */}
      <section
        style={{
          position: 'relative',
          padding: '9.5rem 1.5rem 7rem',
          backgroundImage: 'linear-gradient(rgba(18, 22, 18, 0.28), rgba(18, 22, 18, 0.50)), url(/storage/uploads/DSC02794.jpg)',
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
            Sanctuary for the Soul
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
            Serenevita Wellness
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.75rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              lineHeight: 1.85,
              color: '#F4EDE3',
              fontStyle: 'italic',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            “Wellness is the gentle act of coming home to yourself. It’s the permission to pause, to breathe, and to listen to what your mind, body, and soul truly need. It’s finding the light within and nurturing it—through quiet mornings, mindful movements, and moments of deep gratitude.”
          </blockquote>
        </div>
      </section>

      {/* Treatments Section (post-27.css in #FEFCF9) */}
      <section style={{ padding: '6.5rem 0', backgroundColor: '#FEFCF9' }}>
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
              Curated Therapies
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.75rem',
                color: '#472D1D',
                margin: '0.75rem 0 1rem',
              }}
            >
              Restorative Wellness Rituals
            </h2>
            <div className="wp-divider" />
            <p style={{ color: '#574646', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Inspired by age-old Khmer herbal traditions and mindful holistic wellness, each ritual is tailored to release stored tension and rejuvenate energy.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="wp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3px solid #676B56',
                }}
              >
                <div className="wp-image-zoom-container" style={{ height: '240px' }}>
                  <img src={item.image} alt={item.title} className="wp-image-zoom" />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.35rem 0.85rem',
                      backgroundColor: 'rgba(45, 47, 37, 0.85)',
                      color: '#FBE8D6',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {item.duration}
                  </div>
                </div>

                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#676B56',
                      fontWeight: 600,
                    }}
                  >
                    Holistic Treatment
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.5rem',
                      color: '#472D1D',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: '#574646', fontSize: '0.95rem', lineHeight: 1.75, flex: 1 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Book Spa Appointment */}
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
              Reserve Your Healing Journey
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
              Our spa pavilion practitioners offer bespoke wellness consultations and private outdoor yoga sessions tailored to your schedule.
            </p>
            <Link href="/contact-us" className="wp-btn-cream">
              Inquire Spa Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
