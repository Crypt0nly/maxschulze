import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '24', label: 'Years Old' },
  { value: '187', label: 'cm Height' },
  { value: '3', label: 'Languages' },
  { value: '10+', label: 'Screen Credits' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding" style={{
      padding: '8rem 8%',
      background: '#0a0a0a',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: '8%', right: '8%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)',
      }} />

      <div className="about-grid">
        {/* Left: bio */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '1.5rem',
            }}
          >
            The Actor
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: 300,
              color: '#f5f0eb',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}
          >
            Born between worlds,<br />
            <em style={{ color: '#c9a84c' }}>defined by craft.</em>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              width: '60px', height: '1px',
              background: '#c9a84c',
              marginBottom: '2rem',
              transformOrigin: 'left',
            }}
          />

          {[
            `Born in Bratislava in 2001, Maximilian Schulze carries the rare dual identity of a German-Slovak actor who moves fluidly between European prestige and American ambition. Raised with a mother tongue that spans three languages — English, German, and Slovak — his voice is as versatile as his range.`,
            `He honed his craft at the legendary Lee Strasberg Theatre & Film Institute in Los Angeles (2021–2023), graduating with a deep commitment to emotional truth and character complexity. His breakthrough came swiftly — an HBO credit on Nathan Fielder's acclaimed series The Rehearsal, followed by the historical action feature 24 Hours to D-Day.`,
            `Now based between Berlin and Los Angeles, represented by Crawford Talents, Maximilian is building a body of work that bridges the intimacy of European storytelling with the scale of American production.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 + i * 0.1 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.92rem',
                lineHeight: 1.9,
                color: '#8a8a8a',
                marginBottom: '1.2rem',
              }}
            >
              {i === 1 ? (
                <>
                  He honed his craft at the legendary Lee Strasberg Theatre & Film Institute in
                  Los Angeles (2021–2023), graduating with a deep commitment to emotional truth and
                  character complexity. His breakthrough came swiftly — an HBO credit on Nathan Fielder's
                  acclaimed series <em style={{ color: '#c9a84c' }}>The Rehearsal</em>, followed by the
                  historical action feature <em style={{ color: '#c9a84c' }}>24 Hours to D-Day</em>.
                </>
              ) : text}
            </motion.p>
          ))}
        </div>

        {/* Right: stats + details */}
        <div>
          {/* Stats grid */}
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                style={{
                  background: '#0a0a0a',
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 300,
                  color: '#c9a84c',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: '#8a8a8a',
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              border: '1px solid rgba(201,168,76,0.2)',
              padding: '1.5rem',
            }}
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '1.5rem',
            }}>
              Quick Facts
            </div>
            {[
              ['Origin', 'Bratislava, Slovakia'],
              ['Nationality', 'German · Slovak'],
              ['Based In', 'Berlin · Los Angeles'],
              ['Training', 'Lee Strasberg, LA (2021–23)'],
              ['Agency', 'Crawford Talents'],
              ['Eye Color', 'Brown'],
              ['Hair', 'Dark Brown'],
              ['Working Permits', 'EU-27'],
            ].map(([key, val]) => (
              <div key={key} style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '0.9rem',
                marginBottom: '0.9rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                gap: '1rem',
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: '#8a8a8a',
                  letterSpacing: '0.05em',
                  flexShrink: 0,
                }}>
                  {key}
                </span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: '#f5f0eb',
                  fontWeight: 400,
                  textAlign: 'right',
                }}>
                  {val}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
