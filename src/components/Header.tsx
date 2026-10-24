'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SiteSetting } from '@/lib/types';
import { resolveImageUrl } from '@/lib/api';

interface HeaderProps {
  onOpenBooking?: () => void;
  bookingUrl?: string;
  settings?: SiteSetting;
}

export default function Header({ onOpenBooking, bookingUrl, settings }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'Dinning', href: '/dinning' },
    { name: 'Activity', href: '/activity' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const bookLink = bookingUrl || settings?.booking_url || 'https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat';
  const logoSrc = resolveImageUrl(settings?.logo_url) || '/storage/uploads/cropped-Untitled-2-1.webp';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: scrolled ? '72px' : '82px',
          zIndex: 9999,
          backgroundColor: scrolled ? 'rgba(139, 69, 19, 0.94)' : 'transparent',
          backgroundImage: scrolled ? 'none' : 'linear-gradient(to bottom, rgba(16, 12, 10, 0.65) 0%, rgba(16, 12, 10, 0.20) 70%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(251, 232, 214, 0.18)' : '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled ? '0 8px 30px -4px rgba(45, 25, 15, 0.28)' : 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="wp-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          {/* Logo with smooth size transition */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              height: '100%',
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src={logoSrc}
              alt={settings?.site_name || 'Serene Vita Retreat'}
              style={{
                maxHeight: scrolled ? '46px' : '54px',
                width: 'auto',
                verticalAlign: 'middle',
                filter: scrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
                transition: 'max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease',
              }}
            />
          </Link>

          {/* Desktop Navigation Menu (Elegant Luxury Layout) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              height: '100%',
              gap: '0.15rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* Book Now Button */}
            <div style={{ marginLeft: '1.25rem' }}>
              <a
                href={bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="header-book-btn"
              >
                Book Now
              </a>
            </div>
          </nav>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '40px',
              height: '40px',
              background: scrolled ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '2px',
              cursor: 'pointer',
              gap: '5px',
              padding: '6px',
              transition: 'all 0.25s ease',
            }}
            className="mobile-toggle-btn"
          >
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                backgroundColor: '#FFFFFF',
                borderRadius: '1px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                backgroundColor: '#FFFFFF',
                borderRadius: '1px',
                transition: 'opacity 0.2s ease',
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                backgroundColor: '#FFFFFF',
                borderRadius: '1px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            backgroundColor: 'rgba(28, 20, 16, 0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            animation: 'wpFadeIn 0.3s ease-out forwards',
          }}
        >
          {/* Close button in top-right */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'transparent',
              border: 'none',
              color: '#FFE4C4',
              fontSize: '1.8rem',
              cursor: 'pointer',
              padding: '8px',
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          <div style={{ marginBottom: '2.5rem' }}>
            <img
              src={logoSrc}
              alt={settings?.site_name || 'Serene Vita Retreat'}
              style={{ maxHeight: '55px', width: 'auto' }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.15rem',
              width: '100%',
              maxWidth: '320px',
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? 600 : 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: isActive ? '#FFE4C4' : '#F4EDE3',
                    textDecoration: 'none',
                    padding: '0.6rem 1rem',
                    width: '100%',
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(251, 232, 214, 0.12)',
                    transition: 'all 0.25s ease',
                  }}
                  className="mobile-nav-link"
                >
                  {link.name}
                </Link>
              );
            })}

            <div style={{ width: '100%', marginTop: '1.25rem' }}>
              <a
                href={bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="header-book-btn"
                style={{ width: '100%', textAlign: 'center', padding: '0.65rem 1.4rem' }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Luxury Navbar CSS Styles */}
      <style jsx global>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }

        /* Desktop Nav Link with Elegant Glowing Indicator */
        .nav-link-item {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 100%;
          color: #F8F5F2;
          text-decoration: none;
          padding: 0 16px;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: color 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 18px;
          left: 50%;
          width: 26px;
          height: 1.5px;
          background: linear-gradient(90deg, rgba(255, 228, 196, 0.2) 0%, #FFE4C4 50%, rgba(255, 228, 196, 0.2) 100%);
          border-radius: 2px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          opacity: 0;
          box-shadow: 0 0 10px rgba(255, 228, 196, 0.65);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
        }

        .nav-link-item:hover {
          color: #FFE4C4 !important;
          transform: translateY(-1px);
        }

        .nav-link-item:hover::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 0.95;
        }

        .nav-link-item.active {
          color: #FFE4C4 !important;
          font-weight: 600;
        }

        .nav-link-item.active::after {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
          background: #FFE4C4;
          box-shadow: 0 0 12px rgba(255, 228, 196, 0.8);
        }

        /* Compact Luxury Book Now Button in Header */
        .header-book-btn {
          background: linear-gradient(135deg, #FBE8D6 0%, #F5DFCB 100%);
          color: #472D1D !important;
          font-family: var(--font-btn);
          font-size: 0.74rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          padding: 0.46rem 1.25rem;
          border: 1px solid rgba(139, 69, 19, 0.22);
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
        }

        .header-book-btn:hover {
          background: linear-gradient(135deg, #FFF0E0 0%, #FBE8D6 100%);
          color: #2D1B0F !important;
          border-color: rgba(139, 69, 19, 0.42);
          transform: translateY(-1.5px);
          box-shadow: 0 6px 18px -2px rgba(251, 232, 214, 0.45), 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .header-book-btn:active {
          transform: translateY(0);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        }

        .mobile-nav-link:hover {
          color: #FFE4C4 !important;
          border-bottom-color: rgba(255, 228, 196, 0.4) !important;
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
}
