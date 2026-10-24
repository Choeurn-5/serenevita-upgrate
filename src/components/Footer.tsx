'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#2D2F25',
        color: '#FFFFFF',
        borderTop: '3px solid #8B4513',
        paddingTop: '5rem',
        marginTop: '0',
      }}
    >
      <div className="wp-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3.5rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {/* Col 1: Brand & Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/" style={{ display: 'inline-block' }}>
              <img
                src="/storage/uploads/cropped-Untitled-2-1.webp"
                alt="Serene Vita Retreat"
                style={{ maxHeight: '55px', width: 'auto' }}
              />
            </Link>
            <p style={{ color: '#D2CCCC', fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300 }}>
              A regenerative luxury escape thoughtfully nestled in lush rainforest tranquility. Recharge in screen-free sanctuaries, savor organic gastronomy, and renew your spirit.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(251, 232, 214, 0.12)',
                  border: '1px solid rgba(251, 232, 214, 0.25)',
                  color: '#FBE8D6',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Screen-Free Luxury
              </span>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(251, 232, 214, 0.12)',
                  border: '1px solid rgba(251, 232, 214, 0.25)',
                  color: '#FBE8D6',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Nature Connected
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#FBE8D6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              The Retreat
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Accommodations & Suites', href: '/accommodation' },
                { label: 'Serenity Restaurant & Dining', href: '/dinning' },
                { label: 'Curated Activities & Treks', href: '/activity' },
                { label: 'Wellness Sanctuary & Spa', href: '/wellness' },
                { label: 'Photo & Video Gallery', href: '/gallery' },
                { label: 'Concierge & Reservations', href: '/contact-us' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="footer-nav-link"
                  style={{
                    color: '#D2CCCC',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Accommodations Quick Access */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#FBE8D6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Sanctuaries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                href="/accommodation/serene-pool-suite"
                className="footer-nav-link"
                style={{ color: '#D2CCCC', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 300 }}
              >
                Private Pool Suite Villa (85 m²)
              </Link>
              <Link
                href="/accommodation/serene-mount-view"
                className="footer-nav-link"
                style={{ color: '#D2CCCC', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 300 }}
              >
                Premier Mount View Room (80 m²)
              </Link>
              <p style={{ color: '#949389', fontSize: '0.875rem', marginTop: '0.5rem', lineHeight: 1.6 }}>
                Check-in: 14:00 • Check-out: 12:00
                <br />
                Direct bookings guaranteed best rates.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Booking */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                color: '#FBE8D6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.2rem',
              }}
            >
              Direct Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', color: '#EAE1D5', fontSize: '0.88rem', fontWeight: 300 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Street 2309, Kep City, Cambodia</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+855 15 255 529</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C5A880" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@serenevita.asia</span>
              </div>
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <a
                href="https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat"
                target="_blank"
                rel="noopener noreferrer"
                className="wp-btn-cream"
                style={{ textAlign: 'center', width: '100%', padding: '0.55rem 1.25rem', fontSize: '0.76rem' }}
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (from post-20.css & Astra) */}
        <div
          style={{
            padding: '1.75rem 0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            color: '#949389',
            fontSize: '0.85rem',
          }}
        >
          <p style={{ margin: 0, color: '#949389' }}>
            © {currentYear} Serene Vita Retreat. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/" style={{ color: '#949389', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/" style={{ color: '#949389', textDecoration: 'none' }}>
              Terms of Stay
            </Link>
            <Link href="/contact-us" style={{ color: '#949389', textDecoration: 'none' }}>
              Location & Directions
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-nav-link:hover {
          color: #FFE4C4 !important;
          transform: translateX(4px);
        }
      `}</style>
    </footer>
  );
}
