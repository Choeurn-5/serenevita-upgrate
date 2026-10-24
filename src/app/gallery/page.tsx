'use client';

import React, { useState, useEffect } from 'react';
import { DEFAULT_GALLERY } from '@/lib/defaultData';
import { GalleryItem } from '@/lib/types';
import { getGallery } from '@/lib/api';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [items, setItems] = useState<GalleryItem[]>(DEFAULT_GALLERY);

  useEffect(() => {
    getGallery().then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setItems(data);
      }
    }).catch(() => {});
  }, []);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'pool', label: 'Infinity Pools' },
    { id: 'mountain', label: 'Mountain Sanctuary' },
    { id: 'dining', label: 'Dining & Gastronomy' },
    { id: 'wellness', label: 'Wellness & Spa' },
    { id: 'grounds', label: 'Resort Grounds' },
  ];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* Banner (post-31.css) */}
      <section
        style={{
          position: 'relative',
          padding: '9.5rem 1.5rem 6rem',
          backgroundImage: 'linear-gradient(rgba(18, 22, 18, 0.28), rgba(18, 22, 18, 0.50)), url(/storage/uploads/SD-12.webp)',
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
            Visual Splendor
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
            Serene Vita Gallery
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.75rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <p style={{ color: '#F4EDE3', fontSize: '1.05rem', lineHeight: 1.8, textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Explore the tranquil spaces, architectural elegance, and natural splendor of our sanctuary.
          </p>
        </div>
      </section>

      {/* Filter Tabs (post-31.css) */}
      <section style={{ padding: '3.5rem 0 1rem', backgroundColor: '#FEFCF9' }}>
        <div className="wp-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.45rem 1.15rem',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    backgroundColor: isActive ? '#8B4513' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#574646',
                    border: isActive ? '1px solid #8B4513' : '1px solid rgba(71, 45, 29, 0.2)',
                    boxShadow: isActive ? '0 2px 8px rgba(139, 69, 19, 0.25)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '3rem 0 7rem', backgroundColor: '#FEFCF9' }}>
        <div className="wp-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="wp-image-zoom-container"
                style={{
                  height: '300px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(45, 47, 37, 0.1)',
                }}
              >
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="wp-image-zoom"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(40, 27, 27, 0.85) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: '#FFFFFF',
                      fontSize: '1rem',
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(20, 15, 12, 0.95)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            animation: 'wpFadeIn 0.25s ease-out',
          }}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2.5rem',
              background: 'none',
              border: 'none',
              color: '#FBE8D6',
              fontSize: '2rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          <img
            src={selectedPhoto.image_url}
            alt={selectedPhoto.title}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '4px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          />
          <span
            style={{
              color: '#FBE8D6',
              fontSize: '1.15rem',
              marginTop: '1.25rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.05em',
            }}
          >
            {selectedPhoto.title}
          </span>
        </div>
      )}
    </div>
  );
}
