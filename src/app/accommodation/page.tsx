import React from 'react';
import Link from 'next/link';
import { getRooms, getSiteSettings, resolveImageUrl } from '@/lib/api';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Accommodations & Suites — Serene Vita Retreat',
  description: 'Explore our luxurious screen-free sanctuaries. Choose between the vibrant Serene Pool Suite or the serene mountain-facing sanctuary.',
};

export default async function AccommodationPage() {
  const [rooms, settings] = await Promise.all([
    getRooms(),
    getSiteSettings(),
  ]);

  const bookingUrl = settings?.booking_url || 'https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat';

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* Banner (post-23.css) */}
      <section
        style={{
          position: 'relative',
          padding: '9.5rem 1.5rem 6.5rem',
          backgroundImage: 'linear-gradient(rgba(18, 22, 18, 0.28), rgba(18, 22, 18, 0.50)), url(/storage/uploads/SD-17.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="wp-container" style={{ maxWidth: '800px' }}>
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
            Restorative Living
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              color: '#FFFFFF',
              margin: '1rem 0',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.55)',
            }}
          >
            Our Rooms & Suites
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.5rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <p style={{ color: '#F4EDE3', fontSize: '1.05rem', lineHeight: 1.8, textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
            At Serenevita, we believe your stay should be a direct reflection of your soul’s needs. Screen-free, nature-connected sanctuaries crafted for quiet luxury.
          </p>
        </div>
      </section>

      {/* Room Showcase */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--wp-sand-bg)' }}>
        <div className="wp-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {rooms.map((room, idx) => (
              <div
                key={room.slug}
                className="wp-card"
                style={{
                  padding: '3rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '3.5rem',
                  alignItems: 'center',
                  border: '1px solid rgba(71, 45, 29, 0.12)',
                }}
              >
                {/* Media preview */}
                <div
                  className="wp-image-zoom-container"
                  style={{
                    borderRadius: 'var(--radius-sm)',
                    height: '380px',
                    boxShadow: '0 12px 32px rgba(45,47,37,0.12)',
                    order: idx % 2 === 1 ? 2 : 1,
                  }}
                >
                  <img
                    src={resolveImageUrl(room.featured_image) || resolveImageUrl('/storage/uploads/Pool-exterior-04-1.webp')}
                    alt={room.title}
                    className="wp-image-zoom"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.4rem 1rem',
                      backgroundColor: 'rgba(45, 47, 37, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#FBE8D6',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    {room.view}
                  </div>
                </div>

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', order: idx % 2 === 1 ? 1 : 2 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.78rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#8B4513',
                      fontWeight: 600,
                    }}
                  >
                    {room.subtitle}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.5rem',
                      color: '#472D1D',
                      lineHeight: 1.15,
                    }}
                  >
                    {room.title}
                  </h2>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#574646' }}>
                    {room.description}
                  </p>

                  {/* Highlights */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      padding: '1rem 0',
                      borderTop: '1px solid rgba(71, 45, 29, 0.1)',
                      borderBottom: '1px solid rgba(71, 45, 29, 0.1)',
                      color: '#5C5E5E',
                      fontSize: '0.95rem',
                    }}
                  >
                    <span>📐 {room.room_size}</span>
                    <span>👥 {room.capacity}</span>
                    <span>🛏️ {room.bed_type}</span>
                    <span>🏷️ From ${room.starting_price} / night</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                    <Link href={`/accommodation/${room.slug}`} className="wp-btn-cream">
                      View Suite & Amenities
                    </Link>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wp-btn-wood"
                    >
                      Book This Suite
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
