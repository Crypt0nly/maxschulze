import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    title: 'Languages',
    icon: '◈',
    items: ['English (Native)', 'German (Native)', 'Slovak (Native)', 'Czech', 'Spanish'],
  },
  {
    title: 'Accents',
    icon: '◈',
    items: ['American Standard (Native)', 'Czech', 'Russian', 'Slovak'],
  },
  {
    title: 'Sports',
    icon: '◈',
    items: ['Alpine Skiing', 'Snowboarding', 'Soccer', 'Weight Training', 'Scuba Diving'],
  },
  {
    title: 'Special Skills',
    icon: '◈',
    items: ['Stunt Work', 'Motorsports', 'Drums', 'Driving (A1, A2, B License)'],
  },
]

const awards = [
  { year: '2025', title: 'Tomorrow — Short Film', note: 'Award Winner' },
  { year: '2023', title: 'Das Sichere Haus — Short Film', note: 'Award Winner' },
  { year: '2023', title: 'Echoes of Tomorrow — Short Film', note: 'Nominated' },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="section-padding" style={{
      padding: '8rem 8%',
      background: '#0a0a0a',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '1rem',
          }}>
            Capabilities
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 300,
            color: '#f5f0eb',
          }}>
            Skills & <em style={{ color: '#c9a84c' }}>Recognition</em>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{
                background: '#0a0a0a',
                padding: '2rem',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1.5rem',
              }}>
                <span style={{ color: '#c9a84c', fontSize: '0.9rem' }}>{cat.icon}</span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                }}>
                  {cat.title}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(0.7rem, 2vw, 0.78rem)',
                      color: '#f5f0eb',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '0.4rem 0.8rem',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '2rem',
          }}>
            Awards & Recognition
          </div>
          <div className="awards-row">
            {awards.map((award) => (
              <div
                key={award.title}
                style={{
                  flex: '1',
                  minWidth: '220px',
                  background: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  padding: '1.8rem',
                }}
              >
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                  color: '#c9a84c',
                  marginBottom: '0.5rem',
                }}>
                  {award.year}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.82rem',
                  color: '#f5f0eb',
                  marginBottom: '0.4rem',
                }}>
                  {award.title}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: award.note === 'Nominated' ? '#8a8a8a' : '#c9a84c',
                }}>
                  {award.note}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
