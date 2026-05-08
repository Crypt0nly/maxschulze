import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ExternalLink } from 'lucide-react'

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="section-padding" style={{
      padding: '8rem 8%',
      background: '#0d0d0d',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="contact-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '1rem',
            }}>
              Get in Touch
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 300,
              color: '#f5f0eb',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}>
              Collaborate &<br />
              <em style={{ color: '#c9a84c' }}>Connect.</em>
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.92rem',
              lineHeight: 1.9,
              color: '#8a8a8a',
              marginBottom: '2.5rem',
            }}>
              For casting inquiries, collaboration proposals, or representation matters,
              please reach out through Crawford Talents or connect directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  href: 'mailto:caprice@crawfordtalents.com',
                  icon: <Mail size={18} color="#c9a84c" />,
                  label: 'Agent — Crawford Talents',
                  value: 'caprice@crawfordtalents.com',
                },
                {
                  href: 'https://www.instagram.com/max.sml_/',
                  icon: <InstagramIcon size={18} color="#c9a84c" />,
                  label: 'Instagram',
                  value: '@max.sml_',
                  external: true,
                },
                {
                  href: 'https://www.imdb.com/name/nm15005132/',
                  icon: <ExternalLink size={18} color="#c9a84c" />,
                  label: 'IMDb',
                  value: 'Maximilian Schulze — nm15005132',
                  external: true,
                },
              ].map(({ href, icon, label, value, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.2rem 1.5rem',
                    border: '1px solid rgba(201,168,76,0.2)',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    color: '#f5f0eb',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#c9a84c'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'}
                >
                  <div style={{ flexShrink: 0 }}>{icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#8a8a8a',
                      marginBottom: '0.2rem',
                    }}>
                      {label}
                    </div>
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(0.72rem, 2.5vw, 0.85rem)',
                      color: '#f5f0eb',
                      wordBreak: 'break-all',
                    }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: quote + photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{
              border: '1px solid rgba(201,168,76,0.15)',
              padding: '2.5rem',
              marginBottom: '2rem',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: '-0.5px', left: '2rem',
                background: '#0d0d0d',
                padding: '0 0.5rem',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem',
                color: '#c9a84c',
                lineHeight: 1,
              }}>
                "
              </div>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.05rem, 3vw, 1.3rem)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: '#f5f0eb',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                Villains are not too far from heroes — somewhere along the path,
                they just took a wrong turn. You have to find where that happened,
                make them human.
              </p>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c9a84c',
              }}>
                — Maximilian Schulze
              </div>
            </div>

            {/* Second photo */}
            <div style={{
              height: '280px',
              background: '#1a1a1a',
              border: '1px solid rgba(201,168,76,0.1)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img
                src="https://imgproxy.filmmakers.eu/RK6ZJe5BX4hKymRokoA7KA8dhtXMFkQfd4t3sQERVLc/rt:fit/w:3840/h:2160/czM6Ly9maWxtbWFrZXJzLWV1LXdlc3QtMS9wcm9kdWN0aW9uLzVjZDBlYzg0LTkzOWMtNGRmMS04NzQ3LTRlZjNhOTZiZWEyYy5qcGVn.jpg"
                alt="Maximilian Schulze"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'contrast(1.05) brightness(0.85)',
                }}
                onError={e => { e.target.style.display = 'none' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(13,13,13,0.7) 100%)',
              }} />
              <div style={{
                position: 'absolute', bottom: '0.8rem', right: '0.8rem',
                fontSize: '0.6rem', color: 'rgba(201,168,76,0.4)',
                fontFamily: 'Inter, sans-serif',
              }}>
                © Dominic Pascal
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
