import React from 'react';
import Link from 'next/link';
import { getDiningVenue, getSiteSettings, resolveImageUrl } from '@/lib/api';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Dining — Serenity Restaurant | Serene Vita Retreat',
  description: 'A culinary journey to international and local Khmer gastronomy. Discover fresh seasonal farm-to-table cuisine at Serenity Restaurant in Kep, Cambodia.',
};

export default async function DinningPage() {
  const [dining, settings] = await Promise.all([
    getDiningVenue(),
    getSiteSettings(),
  ]);

  const cards = [
    {
      index: '01',
      category: 'SPACE & AMBIANCE',
      title: 'AREA',
      value: dining.area,
      img: resolveImageUrl('/storage/uploads/00-r.webp'),
      desc: 'Intimate dining space thoughtfully oriented toward tranquil lush gardens, open-air breezes, and tiered pool vistas.',
      tag: 'Garden & Pool Outlook',
      highlight: 'Al fresco colonnade with natural coastal ventilation',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      index: '02',
      category: 'SEATING CAPACITY',
      title: 'TABLE',
      value: dining.capacity,
      img: resolveImageUrl('/storage/uploads/10-r-1-1024x684.webp'),
      desc: 'Handcrafted teak tables illuminated with warm candlelight and soft twilight ambiance for quiet, uninterrupted dining.',
      tag: 'Artisanal Teak & Light',
      highlight: 'Generous table spacing for complete conversation intimacy',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="5" width="16" height="6" rx="2" />
          <path d="M6 11v8" />
          <path d="M18 11v8" />
          <path d="M10 11v5" />
          <path d="M14 11v5" />
        </svg>
      ),
    },
    {
      index: '03',
      category: 'CULINARY ART',
      title: 'FOOD',
      value: dining.food_type,
      img: resolveImageUrl('/storage/uploads/12-r.webp'),
      desc: 'Authentic royal Khmer heritage recipes paired with refined Western classics, created with produce from nearby organic growers.',
      tag: 'Farm-to-Table Heritage',
      highlight: 'Signature Khmer Amok, Kampot pepper crab & grilled seafood',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      index: '04',
      category: 'CELLAR & MIXOLOGY',
      title: 'DRINK',
      value: dining.drinks_type,
      img: resolveImageUrl('/storage/uploads/11-r.webp'),
      desc: 'Botanical mocktails, craft cocktails, organic herbal infusions, fresh young coconuts, and a cellar of curated international wines.',
      tag: 'Botanical Cocktails & Wine',
      highlight: 'House-made syrups, local garden herbs & premium spirits',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8" />
          <path d="M12 15v7" />
          <path d="M12 15a7 7 0 0 0 7-7c0-2-2-6-7-6S5 6 5 8a7 7 0 0 0 7 7z" />
        </svg>
      ),
    },
    {
      index: '05',
      category: 'DINING RHYTHM',
      title: 'MEAL',
      value: dining.meal_times,
      img: resolveImageUrl('/storage/uploads/09-rr.webp'),
      desc: 'Gentle sunrise breakfast, relaxed tropical lunches with garden breezes, and romantic starlit dinners under the Kep evening sky.',
      tag: 'All-Day Gastronomic Service',
      highlight: 'Breakfast (07:00-10:30), Lunch (12:00-15:00), Dinner (18:00-22:00)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  const galleryImages = dining.gallery_images && dining.gallery_images.length > 0
    ? dining.gallery_images.map(img => resolveImageUrl(img))
    : [
      resolveImageUrl('/storage/uploads/10-r-1-1024x684.webp'),
      resolveImageUrl('/storage/uploads/00-r.webp'),
      resolveImageUrl('/storage/uploads/12-r.webp'),
      resolveImageUrl('/storage/uploads/09-rr.webp'),
    ];

  const features = dining.features && dining.features.length > 0
    ? dining.features
    : [
      'Farm-to-Table Fresh Produce',
      'Al Fresco Starlit Terrace Seating',
      'Private Tasting Dinners on Request',
      'Sommelier-Curated Wine Pairings',
    ];

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          position: 'relative',
          padding: '10rem 1.5rem 7.5rem',
          backgroundImage: `linear-gradient(rgba(18, 22, 18, 0.32), rgba(18, 22, 18, 0.55)), url(${resolveImageUrl(dining.hero_image) || resolveImageUrl('/storage/uploads/11-r.webp')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="wp-container" style={{ maxWidth: '880px' }}>
          <span
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.4rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(251, 232, 214, 0.16)',
              border: '1px solid rgba(251, 232, 214, 0.35)',
              marginBottom: '1.5rem',
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
            className="animate-fade-up delay-100"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.75rem, 6.5vw, 4.75rem)',
              color: '#FFFFFF',
              margin: '0.75rem 0 1.25rem',
              textShadow: '0 2px 16px rgba(0, 0, 0, 0.6)',
              letterSpacing: '0.04em',
            }}
          >
            {dining.title || 'Serenity Restaurant'}
          </h1>
          <div style={{ width: '70px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.75rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <p
            className="animate-fade-up delay-200"
            style={{
              color: '#F4EDE3',
              fontSize: '1.08rem',
              maxWidth: '720px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.85,
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.55)',
              fontWeight: 300,
            }}
          >
            {dining.description}
          </p>

          <div className="animate-fade-up delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="#specifications" className="wp-btn-hero">
              View Specifications
            </a>
            <Link href="/contact-us" className="wp-btn-cream">
              Reserve Dining Table
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CULINARY PILLARS HIGHLIGHT BADGE ROW */}
      <section style={{ backgroundColor: '#2D2F25', padding: '2.5rem 1.5rem', borderBottom: '1px solid rgba(251, 232, 214, 0.15)' }}>
        <div className="wp-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            {features.map((feat, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  color: '#FBE8D6',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  letterSpacing: '0.04em',
                  padding: '0.5rem 0.75rem',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(197, 168, 128, 0.18)',
                    border: '1px solid rgba(197, 168, 128, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C5A880',
                    fontSize: '0.85rem',
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <span style={{ fontWeight: 400, color: '#EAE1D5' }}>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INFORMATION CARDS (Ultra-Elegant Luxury Specification Grid) */}
      <section id="specifications" style={{ padding: '7rem 0 6rem', backgroundColor: 'var(--wp-linen-bg)' }}>
        <div className="wp-container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#8B4513',
                fontWeight: 600,
              }}
            >
              Atmosphere & Craft
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                color: '#472D1D',
                margin: '0.75rem 0 1rem',
              }}
            >
              Restaurant Specifications
            </h2>
            <div className="wp-divider" />
            <p style={{ color: '#574646', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Each detail is tailored to harmonize sensory indulgence with quiet natural seclusion.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {cards.map((card) => (
              <div key={card.title} className="luxury-dining-card">
                {/* Image Media with zoom, overlay & floating pills */}
                <div className="dining-img-wrap">
                  <img src={card.img} alt={card.value} className="dining-img" />
                  <div className="dining-overlay" />

                  {/* Top-Left Category Index Badge */}
                  <div className="dining-badge-pill">
                    {card.index} • {card.category}
                  </div>

                  {/* Top-Right Floating Icon */}
                  <div className="dining-icon-badge">
                    {card.icon}
                  </div>

                  {/* Bottom-Right Subtitle Pill */}
                  <div className="dining-tag-pill">
                    {card.tag}
                  </div>
                </div>

                {/* Card Content Body */}
                <div
                  style={{
                    padding: '2.25rem 2rem 2.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    flex: 1,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.74rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#8B4513',
                        fontWeight: 700,
                      }}
                    >
                      {card.title}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        color: '#878080',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Feature
                    </span>
                  </div>

                  <h3 className="dining-title">
                    {card.value}
                  </h3>

                  <div className="dining-divider-line" />

                  <p style={{ color: '#574646', fontSize: '0.96rem', lineHeight: 1.75 }}>
                    {card.desc}
                  </p>

                  {/* Feature Benefit Line */}
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1.15rem',
                      borderTop: '1px solid rgba(71, 45, 29, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      color: '#676B56',
                      fontSize: '0.86rem',
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ color: '#C5A880', fontSize: '1rem', flexShrink: 0 }}>✦</span>
                    <span style={{ lineHeight: 1.5 }}>{card.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. VISUAL PERSPECTIVE (Restaurant Atmosphere Photo Gallery) */}
          <div style={{ marginTop: '6.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#8B4513',
                  fontWeight: 600,
                }}
              >
                Visual Experience
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  color: '#472D1D',
                  marginTop: '0.5rem',
                }}
              >
                Serenity Restaurant Gallery
              </h3>
              <div className="wp-divider" />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="wp-image-zoom-container"
                  style={{
                    height: '240px',
                    borderRadius: '8px',
                    boxShadow: '0 8px 24px rgba(45, 47, 37, 0.1)',
                    border: '1px solid rgba(71, 45, 29, 0.1)',
                  }}
                >
                  <img
                    src={img}
                    alt={`Serenity Restaurant Ambience ${idx + 1}`}
                    className="wp-image-zoom"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(40, 27, 27, 0.7) 0%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        color: '#FFFFFF',
                        fontSize: '0.85rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Dining Perspective {idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. DINING RESERVATION CALLOUT */}
          <div
            style={{
              marginTop: '6rem',
              backgroundColor: '#2D2F25',
              color: '#FFFFFF',
              borderRadius: '12px',
              padding: '4rem 2.5rem',
              textAlign: 'center',
              border: '1px solid rgba(251, 232, 214, 0.25)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent 0%, #C5A880 30%, #FBE8D6 50%, #C5A880 70%, transparent 100%)',
              }}
            />

            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.76rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#FBE8D6',
                fontWeight: 600,
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Tailored Gastronomy
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                color: '#FFFFFF',
                marginBottom: '1rem',
              }}
            >
              Private Dining & Special Dietary Requests
            </h3>

            <p
              style={{
                color: '#D2CCCC',
                maxWidth: '680px',
                margin: '0 auto 2.25rem',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Our culinary team is pleased to cater to vegan, plant-based, gluten-free, or bespoke anniversary candlelight setups upon request. Please connect with our guest concierge prior to arrival.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact-us" className="wp-btn-cream">
                Contact Restaurant Concierge
              </Link>
              <a
                href={settings.booking_url || 'https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat'}
                target="_blank"
                rel="noopener noreferrer"
                className="wp-btn-hero"
                style={{ borderColor: '#FBE8D6' }}
              >
                Book Resort Stay
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
