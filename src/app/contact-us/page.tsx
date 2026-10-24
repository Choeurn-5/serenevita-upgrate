'use client';

import React, { useState } from 'react';
import { submitInquiry } from '@/lib/api';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    guests: 2,
    room_preference: 'Serene Pool Suite',
    subject: 'Booking Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const result = await submitInquiry(formData);
    setLoading(false);

    if (result.success) {
      setFeedback({ type: 'success', message: result.message });
      setFormData({
        name: '',
        email: '',
        phone: '',
        check_in: '',
        check_out: '',
        guests: 2,
        room_preference: 'Serene Pool Suite',
        subject: 'Booking Inquiry',
        message: '',
      });
    } else {
      setFeedback({ type: 'error', message: result.message });
    }
  };

  return (
    <div style={{ position: 'relative', backgroundColor: 'var(--wp-parchment-bg)' }}>
      {/* Banner (post-33.css) */}
      <section
        style={{
          position: 'relative',
          padding: '9.5rem 1.5rem 7rem',
          backgroundImage: 'linear-gradient(rgba(18, 22, 18, 0.28), rgba(18, 22, 18, 0.50)), url(/storage/uploads/SD-16.webp)',
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
            Connect With Us
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
            Contact Us Now
          </h1>
          <div style={{ width: '60px', height: '2px', backgroundColor: '#FBE8D6', margin: '0 auto 1.75rem', opacity: 0.9, boxShadow: '0 1px 6px rgba(0,0,0,0.4)' }} />
          <p style={{ color: '#F4EDE3', fontSize: '1.05rem', lineHeight: 1.8, textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
            Our guest experience concierge is at your service for bespoke bookings, private transfers, and retreat inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact & Form Section */}
      <section style={{ padding: '6.5rem 0', backgroundColor: 'var(--wp-sand-bg)' }}>
        <div className="wp-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4.5rem',
            }}
          >
            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#8B4513',
                    fontWeight: 600,
                  }}
                >
                  Sanctuary Coordinates
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    color: '#472D1D',
                    margin: '0.5rem 0 1rem',
                  }}
                >
                  Get In Touch
                </h2>
                <div className="wp-divider-left" />
                <p style={{ color: '#574646', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Whether you are planning your restorative vacation, a romantic honeymoon, or a tailored wellness retreat, our dedicated team will assist you with every request.
                </p>
              </div>

              <div
                className="wp-card"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  borderTop: '3px solid #8B4513',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#8B4513', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>
                    Sanctuary Address
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: '#2D2F25' }}>
                    Serene Vita Retreat, Cambodia
                  </strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: '#8B4513', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>
                    Telephone & WhatsApp
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: '#2D2F25' }}>
                    +855 12 345 678
                  </strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: '#8B4513', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>
                    Reservations Email
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: '#2D2F25' }}>
                    info@serenevita.asia
                  </strong>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: '#8B4513', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}>
                    Direct Booking Engine
                  </span>
                  <a
                    href="https://app.inn-connect.com/book2/?p=Serene+Vita+Retreat"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.95rem', color: '#8B4513', textDecoration: 'underline', fontWeight: 500 }}
                  >
                    Open Live Reservation Calendar &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div
              className="wp-card"
              style={{
                padding: '3rem',
                border: '1px solid rgba(71, 45, 29, 0.15)',
                borderTop: '3px solid #676B56',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  marginBottom: '0.5rem',
                  color: '#472D1D',
                }}
              >
                Send An Inquiry
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#5C5E5E', marginBottom: '2rem' }}>
                Fill out the form below. Your request will be directly received by our guest concierge.
              </p>

              {feedback && (
                <div
                  style={{
                    padding: '1rem',
                    borderRadius: '4px',
                    marginBottom: '1.5rem',
                    backgroundColor: feedback.type === 'success' ? '#FBF7EC' : '#FFEEEE',
                    border: `1px solid ${feedback.type === 'success' ? '#676B56' : '#E57373'}`,
                    color: feedback.type === 'success' ? '#2D2F25' : '#C62828',
                    fontSize: '0.95rem',
                  }}
                >
                  {feedback.message}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#574646', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FBF7EC',
                        border: '1px solid rgba(71, 45, 29, 0.2)',
                        borderRadius: '4px',
                        color: '#2D2F25',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#574646', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FBF7EC',
                        border: '1px solid rgba(71, 45, 29, 0.2)',
                        borderRadius: '4px',
                        color: '#2D2F25',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#574646', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FBF7EC',
                        border: '1px solid rgba(71, 45, 29, 0.2)',
                        borderRadius: '4px',
                        color: '#2D2F25',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#574646', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Suite Preference
                    </label>
                    <select
                      value={formData.room_preference}
                      onChange={(e) => setFormData({ ...formData, room_preference: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FBF7EC',
                        border: '1px solid rgba(71, 45, 29, 0.2)',
                        borderRadius: '4px',
                        color: '#2D2F25',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    >
                      <option value="Serene Pool Suite">Serene Pool Suite</option>
                      <option value="Serene Mount View">Serene Mount View Sanctuary</option>
                      <option value="Both / Not Sure">Both / Undecided</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#574646', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={formData.check_in}
                      onChange={(e) => setFormData({ ...formData, check_in: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FBF7EC',
                        border: '1px solid rgba(71, 45, 29, 0.2)',
                        borderRadius: '4px',
                        color: '#2D2F25',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#574646', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={formData.check_out}
                      onChange={(e) => setFormData({ ...formData, check_out: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#FBF7EC',
                        border: '1px solid rgba(71, 45, 29, 0.2)',
                        borderRadius: '4px',
                        color: '#2D2F25',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#574646', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Message & Special Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your expected arrival time, dietary wishes, or transfer requests..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      backgroundColor: '#FBF7EC',
                      border: '1px solid rgba(71, 45, 29, 0.2)',
                      borderRadius: '4px',
                      color: '#2D2F25',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="wp-btn-wood"
                  style={{
                    padding: '0.62rem 1.4rem',
                    fontSize: '0.78rem',
                    letterSpacing: '0.14em',
                    width: '100%',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? 'Submitting to Concierge...' : 'Send Inquiry Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
