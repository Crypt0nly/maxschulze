import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const credits = {
  television: [
    {
      year: '2024',
      title: 'The Rehearsal',
      role: 'Commanding Officer',
      studio: 'HBO / Warner Brothers',
      director: 'Nathan Fielder',
      type: 'Television Series',
      highlight: true,
    },
  ],
  film: [
    {
      year: '2024',
      title: '24 Hours to D-Day',
      role: 'Huber',
      studio: 'The Asylum',
      director: 'Monroe Robertson',
      type: 'Feature Film',
      highlight: true,
    },
    {
      year: '2024',
      title: 'I Will Always Be Your Angel',
      role: 'Denis',
      studio: 'Independent',
      director: 'Maria Melnichenko',
      type: 'Short Film',
    },
    {
      year: '2024',
      title: 'Tomorrow',
      role: 'Driver',
      studio: 'Rising Tide Productions',
      director: 'Jackson Schlekewey',
      type: 'Short Film',
    },
    {
      year: '2024',
      title: 'Fisher vs Hayes',
      role: 'David Hayes',
      studio: 'AFI',
      director: 'Simon Schneider',
      type: 'Short Film',
    },
    {
      year: '2023',
      title: 'Das Sichere Haus',
      role: 'Klaus',
      studio: 'Chapman Media Arts',
      director: 'Linus Engelhardt',
      type: 'Short Film',
    },
    {
      year: '2023',
      title: 'Echoes of Tomorrow',
      role: 'Mr. Miller',
      studio: 'Moving Canvas Films',
      director: 'Fernanda Vilela',
      type: 'Short Film',
    },
    {
      year: '2022',
      title: 'Gap Year',
      role: 'Rowan',
      studio: 'Chapman Media Arts',
      director: 'Xiaochen Wu',
      type: 'Short Film',
    },
  ],
  theatre: [
    {
      year: '2025',
      title: 'What The Startup',
      role: 'Orlando',
      studio: 'Shakespeare Reloaded / Art Space in Exile Berlin',
      director: 'Meg Zrini',
      type: 'Theatre',
    },
    {
      year: '2022',
      title: 'Where The Cross Is Made',
      role: 'Nat Bartlett',
      studio: 'The Marilyn Monroe Theatre, Los Angeles',
      director: 'Remington Moses',
      type: 'Theatre',
    },
    {
      year: '2021',
      title: 'Fiddler on the Roof (Anatevka)',
      role: 'Lazar Wolf',
      studio: 'Sharoun Theater, Wolfsburg',
      director: 'Eyal Lerner',
      type: 'Theatre',
    },
  ],
  audio: [
    {
      year: '2024',
      title: 'Turning Point: The Bomb and the Cold War',
      role: 'Featured Voice',
      studio: 'Netflix',
      director: '—',
      type: 'Dubbing',
    },
  ],
}

const tabs = ['film', 'television', 'theatre', 'audio']

export default function Credits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState('film')

  return (
    <section id="credits" ref={ref} className="section-padding" style={{
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '1rem',
          }}>
            Filmography
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 300,
            color: '#f5f0eb',
            lineHeight: 1.15,
          }}>
            Selected <em style={{ color: '#c9a84c' }}>Credits</em>
          </h2>
        </motion.div>

        {/* Tabs — scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '0',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(201,168,76,0.2)',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid #c9a84c' : '2px solid transparent',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: activeTab === tab ? '#c9a84c' : '#8a8a8a',
                padding: '0.8rem 1.2rem',
                marginBottom: '-1px',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Credits list */}
        <div>
          {credits[activeTab].map((credit, i) => (
            <motion.div
              key={credit.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="credit-row"
              whileHover={{ x: 4 }}
            >
              {/* Year */}
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
                fontWeight: 300,
                color: credit.highlight ? '#c9a84c' : '#3a3a3a',
                flexShrink: 0,
              }}>
                {credit.year}
              </div>

              {/* Title + meta */}
              <div style={{ minWidth: 0 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.3rem',
                  flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
                    fontWeight: 400,
                    color: '#f5f0eb',
                    wordBreak: 'break-word',
                  }}>
                    {credit.title}
                  </span>
                  {credit.highlight && (
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.58rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#0a0a0a',
                      background: '#c9a84c',
                      padding: '0.15rem 0.6rem',
                      fontWeight: 500,
                      flexShrink: 0,
                    }}>
                      Featured
                    </span>
                  )}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(0.68rem, 2vw, 0.78rem)',
                  color: '#8a8a8a',
                  wordBreak: 'break-word',
                }}>
                  as <em>{credit.role}</em> · dir. {credit.director} · {credit.studio}
                </div>
                {/* Show type on mobile since we hide the column */}
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#3a3a3a',
                  marginTop: '0.3rem',
                  display: 'none',
                }}
                  className="credit-type-mobile"
                >
                  {credit.type}
                </div>
              </div>

              {/* Type label — hidden on mobile via CSS */}
              <div className="credit-type-label">
                {credit.type}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .credit-type-mobile { display: block !important; }
        }
      `}</style>
    </section>
  )
}
