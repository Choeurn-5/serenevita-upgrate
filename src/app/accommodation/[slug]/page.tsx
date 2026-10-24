import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRoomBySlug, getSiteSettings, resolveImageUrl } from '@/lib/api';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [room, settings] = await Promise.all([
    getRoomBySlug(slug),
    getSiteSettings(),
  ]);

  if (!room) {
    notFound();
  }

  const bookLink = settings.booking_url || 'https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat';

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* Room Hero Header (post-1395.css & post-1739.css) */}
      <section
        style={{
          position: 'relative',
          padding: '9.5rem 1.5rem 6rem',
          backgroundImage: `linear-gradient(rgba(18, 22, 18, 0.28), rgba(18, 22, 18, 0.50)), url(${resolveImageUrl(room.featured_image)})`,
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
            {room.subtitle}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              color: '#FFFFFF',
              margin: '1rem 0',
              textShadow: '0 2px 16px rgba(0, 0, 0, 0.55)',
            }}
          >
            {room.title}
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.5rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <p
            style={{
              color: '#F4EDE3',
              fontSize: '1.15rem',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            {room.short_description}
          </p>
        </div>
      </section>

      {/* Main Specs Bar */}
      <section
        style={{
          backgroundColor: '#2D2F25',
          color: '#FFFFFF',
          padding: '1.75rem 0',
          borderBottom: '3px solid #8B4513',
        }}
      >
        <div className="wp-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FBE8D6', display: 'block' }}>
                Room Dimensions
              </span>
              <strong style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 400, color: '#FFFFFF' }}>
                {room.room_size}
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FBE8D6', display: 'block' }}>
                Capacity
              </span>
              <strong style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 400, color: '#FFFFFF' }}>
                {room.capacity}
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FBE8D6', display: 'block' }}>
                Bed Arrangement
              </span>
              <strong style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 400, color: '#FFFFFF' }}>
                {room.bed_type}
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FBE8D6', display: 'block' }}>
                Orientation
              </span>
              <strong style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 400, color: '#FFFFFF' }}>
                {room.view}
              </strong>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FBE8D6', display: 'block' }}>
                Nightly Rate
              </span>
              <strong style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: '#FBE8D6' }}>
                ${room.starting_price} <span style={{ fontSize: '0.85rem', fontWeight: 300, color: '#D2CCCC' }}>/ night</span>
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Suite Content & Gallery Grid */}
      <section style={{ padding: '6rem 0', backgroundColor: '#FEFCF9' }}>
        <div className="wp-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
              alignItems: 'start',
            }}
          >
            {/* Left: Detailed Story */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
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
                  Sanctuary Profile
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    color: '#472D1D',
                    marginTop: '0.5rem',
                  }}
                >
                  The Sanctuary Experience
                </h2>
                <div className="wp-divider-left" />
                <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: '#574646' }}>
                  {room.description}
                </p>
              </div>

              {/* Categorized Amenities */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.75rem',
                    color: '#472D1D',
                    marginBottom: '1.5rem',
                  }}
                >
                  Suite Inclusions & Amenities
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                  {room.amenities &&
                    Object.entries(room.amenities).map(([category, items]) => (
                      <div
                        key={category}
                        style={{
                          backgroundColor: '#FBF7EC',
                          padding: '1.75rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(71, 45, 29, 0.12)',
                        }}
                      >
                        <h4
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.2rem',
                            color: '#8B4513',
                            marginBottom: '0.85rem',
                            borderBottom: '1px solid rgba(71, 45, 29, 0.1)',
                            paddingBottom: '0.5rem',
                          }}
                        >
                          {category}
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {Array.isArray(items) &&
                            items.map((item, idx) => (
                              <li
                                key={idx}
                                style={{
                                  fontSize: '0.9rem',
                                  color: '#574646',
                                  display: 'flex',
                                  alignItems: 'baseline',
                                  gap: '0.5rem',
                                }}
                              >
                                <span style={{ color: '#8B4513', fontSize: '0.75rem' }}>✓</span>
                                {item}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Right: Booking Summary Card */}
            <div
              style={{
                backgroundColor: '#2D2F25',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-sm)',
                padding: '2.5rem',
                border: '1px solid rgba(251, 232, 214, 0.3)',
                boxShadow: '0 16px 40px rgba(45, 47, 37, 0.18)',
                position: 'sticky',
                top: '100px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#FBE8D6',
                  fontWeight: 600,
                }}
              >
                Instant Reservation
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  color: '#FFFFFF',
                  margin: '0.5rem 0',
                }}
              >
                {room.title}
              </h3>
              <div style={{ fontSize: '1.75rem', color: '#FBE8D6', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
                ${room.starting_price}{' '}
                <span style={{ fontSize: '0.95rem', fontWeight: 300, color: '#D2CCCC' }}>
                  USD / Night
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '1.25rem 0',
                  marginBottom: '1.75rem',
                  fontSize: '0.88rem',
                  color: '#F4EDE3',
                  lineHeight: 1.5,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#C5A880', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>Complimentary organic Khmer breakfast</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#C5A880', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>Welcome herbal infusion & cold towel</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#C5A880', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>Unlimited access to tiered infinity pools</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#C5A880', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>High-speed Wi-Fi in all suites</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#C5A880', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span>No prepayment needed for inquiry reservations</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wp-btn-cream"
                  style={{ textAlign: 'center', width: '100%', padding: '0.55rem 1.25rem', fontSize: '0.76rem' }}
                >
                  Book Online via Engine
                </a>
                <Link
                  href="/contact-us"
                  className="wp-btn-hero"
                  style={{ textAlign: 'center', width: '100%', borderColor: '#FBE8D6', padding: '0.55rem 1.25rem', fontSize: '0.76rem' }}
                >
                  Inquire via Concierge
                </Link>
              </div>
            </div>
          </div>

          {/* Photo Gallery of Suite */}
          {room.gallery_images && room.gallery_images.length > 0 && (
            <div style={{ marginTop: '6rem' }}>
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
                  Visual Perspective
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.4rem',
                    color: '#472D1D',
                    marginTop: '0.5rem',
                  }}
                >
                  Suite Photo Gallery
                </h3>
                <div className="wp-divider" />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {room.gallery_images.map((img, idx) => (
                  <div
                    key={idx}
                    className="wp-image-zoom-container"
                    style={{
                      height: '280px',
                      borderRadius: '4px',
                      boxShadow: '0 8px 24px rgba(45, 47, 37, 0.1)',
                    }}
                  >
                    <img
                      src={resolveImageUrl(img)}
                      alt={`${room.title} photo ${idx + 1}`}
                      className="wp-image-zoom"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
