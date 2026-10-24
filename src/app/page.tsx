import React from 'react';
import Link from 'next/link';
import { getSiteSettings, getRooms, getDiningVenue } from '@/lib/api';

export default async function HomePage() {
  const [settings, rooms, dining] = await Promise.all([
    getSiteSettings(),
    getRooms(),
    getDiningVenue(),
  ]);

  const bookingUrl = settings?.booking_url || 'https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat';

  const galleryPreview = [
    { src: '/storage/uploads/SD-10.jpg', title: 'Colonial Retreat Architecture' },
    { src: '/storage/uploads/Pool-exterior-02.webp', title: 'Tiered Azure Infinity Pools' },
    { src: '/storage/uploads/Mount-View-ex01.jpg', title: 'Mountain Suite Verandah' },
    { src: '/storage/uploads/06-r.jpg', title: 'Tropical Shaded Colonnade' },
    { src: '/storage/uploads/Pool-interior-01.webp', title: 'Pool View Suite Master Bed' },
    { src: '/storage/uploads/SD-12.webp', title: 'Lush Rainforest Pathways' },
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* 1. HERO SECTION (post-20.css .elementor-element-b023316) */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#1E1714',
          padding: '6rem 1.5rem',
        }}
      >
        {/* Background Video */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/7DX7KlCHO2s?autoplay=1&mute=1&controls=0&loop=1&playlist=7DX7KlCHO2s&playsinline=1&rel=0&showinfo=0"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              minWidth: '177.77vh',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%) scale(1.15)',
              opacity: 0.72,
              border: 'none',
            }}
            title="Serene Vita Retreat Video"
            allow="autoplay; encrypted-media"
          />
          {/* Subtle Cinematic Hero Vignette Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(10, 14, 10, 0.18) 0%, rgba(10, 14, 10, 0.38) 75%, rgba(10, 14, 10, 0.60) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '140px',
              background: 'linear-gradient(to top, rgba(45, 47, 37, 0.85), transparent)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div
          className="wp-container"
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '920px',
            marginTop: '2rem',
          }}
        >
          {/* Subtle Tagline Badge */}
          <div
            className="animate-fade-up"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.4rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(251, 232, 214, 0.15)',
              border: '1px solid rgba(251, 232, 214, 0.35)',
              marginBottom: '1.75rem',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FBE8D6' }} />
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color: '#FFE4C4',
                fontWeight: 600,
              }}
            >
              Regenerative Luxury Sanctuary
            </span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FBE8D6' }} />
          </div>

          {/* Main Headline (post-20.css .elementor-element-53ee438) */}
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
              lineHeight: 1.08,
              fontWeight: 300,
              letterSpacing: '0.08em',
              textTransform: 'capitalize',
              color: '#FBFEFF',
              marginBottom: '1.25rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.65)',
            }}
          >
            {settings?.hero_headline || 'Serenevita'}
          </h1>

          <div
            className="animate-fade-up delay-200"
            style={{
              width: '80px',
              height: '2px',
              backgroundColor: '#FBE8D6',
              margin: '0 auto 1.75rem',
              opacity: 0.85,
            }}
          />

          {/* Subheadline (post-20.css .elementor-element-8f08e41) */}
          <p
            className="animate-fade-up delay-200"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              lineHeight: 1.85,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#F4EDE3',
              maxWidth: '720px',
              margin: '0 auto 2.75rem',
              fontWeight: 300,
              textShadow: '0 2px 10px rgba(0,0,0,0.6)',
            }}
          >
            {settings?.hero_subheadline || 'A Regenerative Luxury Escape to Recharge, Explore, and Connect.'}
          </p>

          {/* Hero Buttons (post-20.css .elementor-element-6a8448f) */}
          <div
            className="animate-fade-up delay-300"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            <a href="#sanctuaries" className="wp-btn-hero">
              View Sanctuaries
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wp-btn-cream"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION / PHILOSOPHY (post-20.css .elementor-element-5315ef5 in #2D2F25) */}
      <section
        style={{
          backgroundColor: '#2D2F25',
          color: '#FFFFFF',
          padding: '7rem 0',
          position: 'relative',
        }}
      >
        <div className="wp-container" style={{ textAlign: 'center', maxWidth: '860px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#FBE8D6',
              fontWeight: 600,
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            Welcome to Serene Vita
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 300,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              marginBottom: '1.5rem',
            }}
          >
            The Art of Restorative Living
          </h2>

          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: '#FBE8D6',
              margin: '0 auto 2.25rem',
              opacity: 0.8,
            }}
          />

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.15rem',
              lineHeight: '36px',
              fontWeight: 300,
              color: '#F8F7F7',
              marginBottom: '2.5rem',
            }}
          >
            At Serenevita, we believe your stay should be a direct reflection of your soul’s needs. Whether you seek the vibrant, sun-dappled energy of our tiered infinity pools or deep, solitary contemplation facing mist-cloaked rainforest mountains, our bespoke screen-free sanctuaries cocoon you in authentic luxury and undisturbed peace.
          </p>

          <Link href="/accommodation" className="wp-btn-hero" style={{ borderColor: '#FBE8D6' }}>
            Discover Our Suites
          </Link>
        </div>
      </section>

      {/* 3. RESORT CONCEPT & PILLARS (post-20.css .elementor-element-fd11678 in #F4EDE3) */}
      <section
        style={{
          backgroundColor: '#F4EDE3',
          padding: '6.5rem 0',
        }}
      >
        <div className="wp-container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem' }}>
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
              Curated Sanctuary Living
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                color: '#472D1D',
                margin: '0.75rem 0 1rem',
              }}
            >
              Why Serene Vita Retreat
            </h2>
            <div className="wp-divider" />
            <p style={{ color: '#5F6161', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Thoughtfully architected to honor the natural rhythm of our sanctuary, blending French colonial heritage with contemporary restorative comforts.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {[
              {
                title: 'Screen-Free Philosophy',
                subtitle: 'Deep Digital Renewal',
                desc: 'Intentionally television-free suites that encourage presence, meaningful conversation, and profound mental decompression.',
                icon: '🌿',
              },
              {
                title: 'Tiered Azure Infinity Pools',
                subtitle: 'Freshwater Oasis',
                desc: 'Two shimmering multi-level infinity pools mirroring the sky, framed by swaying tropical palms and cushioned daybeds.',
                icon: '💧',
              },
              {
                title: 'Serenity Dining',
                subtitle: 'Organic Gastronomy',
                desc: 'Farm-to-table Khmer delicacies and refined Western classics prepared with ingredients harvested from local organic growers.',
                icon: '🍽️',
              },
              {
                title: 'Holistic Spa Pavilion',
                subtitle: 'Mind & Body Harmony',
                desc: 'Traditional herbal compress therapies, ocean-view yoga sessions, and sound healing rituals for complete renewal.',
                icon: '✨',
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="wp-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderTop: '3px solid #676B56',
                }}
              >
                <div style={{ fontSize: '2.2rem' }}>{pillar.icon}</div>
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#676B56',
                      fontWeight: 600,
                    }}
                  >
                    {pillar.subtitle}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#472D1D',
                      marginTop: '0.25rem',
                    }}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <p style={{ color: '#5C5E5E', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SANCTUARY SHOWCASE (Rooms Overview - post-20.css & post-23.css) */}
      <section
        id="sanctuaries"
        style={{
          backgroundColor: '#FEFCF9',
          padding: '7rem 0',
        }}
      >
        <div className="wp-container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem' }}>
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
              Tailored Sanctuaries
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                color: '#472D1D',
                margin: '0.75rem 0 1rem',
              }}
            >
              Choose Your Sacred Space
            </h2>
            <div className="wp-divider" />
            <p style={{ color: '#574646', fontSize: '1.1rem' }}>
              Each suite is an intimate haven designed with private verandas, artisanal furnishings, and bespoke linen bedding.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {rooms?.map((room, idx) => (
              <div
                key={room.slug}
                className="wp-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  alignItems: 'center',
                  padding: '2.5rem',
                  gap: '3.5rem',
                  border: '1px solid rgba(71, 45, 29, 0.14)',
                }}
              >
                {/* Image Media preview */}
                <div
                  className="wp-image-zoom-container"
                  style={{
                    borderRadius: 'var(--radius-sm)',
                    height: '380px',
                    boxShadow: '0 12px 32px rgba(45, 47, 37, 0.12)',
                    order: idx % 2 === 1 ? 2 : 1,
                  }}
                >
                  <img
                    src={room.featured_image || '/storage/uploads/Pool-exterior-04-1.webp'}
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

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.4rem',
                      color: '#472D1D',
                      lineHeight: 1.2,
                    }}
                  >
                    {room.title}
                  </h3>

                  <p style={{ color: '#574646', fontSize: '1.05rem', lineHeight: 1.8 }}>
                    {room.short_description || room.description}
                  </p>

                  {/* Quick Specs */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1.25rem',
                      padding: '1rem 0',
                      borderTop: '1px solid rgba(71, 45, 29, 0.1)',
                      borderBottom: '1px solid rgba(71, 45, 29, 0.1)',
                      color: '#5C5E5E',
                      fontSize: '0.9rem',
                    }}
                  >
                    <span>📐 {room.room_size}</span>
                    <span>👥 {room.capacity}</span>
                    <span>🛏️ {room.bed_type}</span>
                    <span>🏷️ From ${room.starting_price} / night</span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                    <Link href={`/accommodation/${room.slug}`} className="wp-btn-cream">
                      View Suite Details
                    </Link>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wp-btn-wood"
                    >
                      Reserve Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DINING & GASTRONOMY TEASER (post-25.css in #FBF7EC) */}
      <section
        style={{
          backgroundColor: '#FBF7EC',
          padding: '7rem 0',
          borderTop: '1px solid rgba(71, 45, 29, 0.08)',
        }}
      >
        <div className="wp-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div>
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
                Culinary Haven
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                  color: '#472D1D',
                  margin: '0.75rem 0 1rem',
                }}
              >
                Serenity Restaurant
              </h2>
              <div className="wp-divider-left" />
              <p style={{ color: '#574646', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Dining at Serenevita is a celebration of seasonal Cambodian heritage paired with classical culinary technique. Whether enjoying a leisurely alfresco breakfast overlooking the pools or an intimate candlelit dinner tasting Khmer Amok, each dish is created with uncompromised attention to flavor.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/dinning" className="wp-btn-cream">
                  Explore Dining & Menu
                </Link>
              </div>
            </div>

            {/* Collage of images */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="wp-image-zoom-container" style={{ borderRadius: '4px', height: '240px' }}>
                <img src="/storage/uploads/11-r.webp" alt="Restaurant Terrace" className="wp-image-zoom" />
              </div>
              <div className="wp-image-zoom-container" style={{ borderRadius: '4px', height: '240px' }}>
                <img src="/storage/uploads/12-r.webp" alt="Khmer Gastronomy" className="wp-image-zoom" />
              </div>
              <div className="wp-image-zoom-container" style={{ borderRadius: '4px', height: '240px' }}>
                <img src="/storage/uploads/10-r-1-1024x684.webp" alt="Dining Presentation" className="wp-image-zoom" />
              </div>
              <div className="wp-image-zoom-container" style={{ borderRadius: '4px', height: '240px' }}>
                <img src="/storage/uploads/00-r.webp" alt="Outdoor Evening Seating" className="wp-image-zoom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GROUNDS & PHOTO CAROUSEL (post-20.css .elementor-element-9fd91f4 in #2D2F25) */}
      <section
        style={{
          backgroundColor: '#2D2F25',
          color: '#FFFFFF',
          padding: '7rem 0',
        }}
      >
        <div className="wp-container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#FBE8D6',
                fontWeight: 600,
              }}
            >
              Sanctuary Life
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                color: '#FFFFFF',
                margin: '0.75rem 0 1rem',
              }}
            >
              Moments of Peace & Wonder
            </h2>
            <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.5rem', opacity: 0.8 }} />
            <p style={{ color: '#D2CCCC', fontSize: '1.05rem', lineHeight: 1.8 }}>
              From morning mist dancing over the mountains to quiet starlit reflections in our infinity pool, discover the visual soul of Serene Vita.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {galleryPreview.map((item) => (
              <div
                key={item.title}
                className="wp-image-zoom-container"
                style={{
                  height: '280px',
                  borderRadius: '4px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                }}
              >
                <img src={item.src} alt={item.title} className="wp-image-zoom" />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(40,27,27,0.85) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: '#FFFFFF',
                      fontSize: '0.95rem',
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/gallery" className="wp-btn-hero" style={{ borderColor: '#FBE8D6' }}>
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 7. RESERVATION CALLOUT (SD-17.webp Background) */}
      <section
        style={{
          position: 'relative',
          padding: '8rem 1.5rem',
          backgroundImage: 'linear-gradient(rgba(18, 22, 18, 0.35), rgba(18, 22, 18, 0.58)), url(/storage/uploads/SD-17.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div className="wp-container" style={{ maxWidth: '750px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#FBE8D6',
              fontWeight: 600,
              textShadow: '0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            Your Journey Begins Here
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              color: '#FFFFFF',
              margin: '1rem 0 1.25rem',
              textShadow: '0 2px 14px rgba(0,0,0,0.55)',
            }}
          >
            Experience Serenevita
          </h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 2rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <p style={{ color: '#F8F7F7', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Allow yourself the luxury of quiet, uninterrupted time. Book directly for best rate guarantees, complimentary arrival amenities, and dedicated concierge planning.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wp-btn-cream"
            >
              Book Direct Reservation
            </a>
            <Link href="/contact-us" className="wp-btn-hero">
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
