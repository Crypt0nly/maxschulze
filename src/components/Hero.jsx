import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: isMobile ? 'flex-start' : 'center',
      overflow: 'hidden',
      background: '#0a0a0a',
      paddingTop: isMobile ? '80px' : '0',
    }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
      }} />

      {/* Photo — top on mobile, absolute right on desktop */}
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            width: '100%',
            height: '55vw',
            maxHeight: '320px',
            minHeight: '220px',
            background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <img
            src="https://imgproxy.filmmakers.eu/BTtN0Ts4uL5Bt-KvriGny2fFuOTIWxSnjXppC1sXEi8/rt:fit/w:3840/h:2160/czM6Ly9maWxtbWFrZXJzLWV1LXdlc3QtMS9wcm9kdWN0aW9uL2Q3MTlkZWUwLTAxNGYtNDc2OC1hYzM1LWVlOTgzZTFlYmMxMS5qcGVn.jpg"
            alt="Maximilian Schulze"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'contrast(1.05) brightness(0.92)',
            }}
            onError={e => { e.target.style.display = 'none' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.85) 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '0.6rem', right: '0.8rem',
            fontSize: '0.6rem', color: 'rgba(201,168,76,0.5)',
            letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif',
          }}>
            © Dominic Pascal
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            right: '8%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '380px',
            height: '520px',
            background: 'linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)',
            border: '1px solid rgba(201,168,76,0.2)',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://imgproxy.filmmakers.eu/BTtN0Ts4uL5Bt-KvriGny2fFuOTIWxSnjXppC1sXEi8/rt:fit/w:3840/h:2160/czM6Ly9maWxtbWFrZXJzLWV1LXdlc3QtMS9wcm9kdWN0aW9uL2Q3MTlkZWUwLTAxNGYtNDc2OC1hYzM1LWVlOTgzZTFlYmMxMS5qcGVn.jpg"
            alt="Maximilian Schulze"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'contrast(1.05) brightness(0.92)',
            }}
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.style.background = 'linear-gradient(160deg, #1e1a14 0%, #0d0d0d 100%)'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.8) 100%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '1rem', right: '1rem',
            fontSize: '0.65rem', color: 'rgba(201,168,76,0.5)',
            letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif',
          }}>
            © Dominic Pascal
          </div>
        </motion.div>
      )}

      {/* Text content */}
      <div style={{
        position: isMobile ? 'relative' : 'relative',
        zIndex: 2,
        paddingLeft: isMobile ? '0' : '8%',
        paddingRight: isMobile ? '0' : '0',
        width: '100%',
        maxWidth: isMobile ? '100%' : '700px',
        padding: isMobile ? '2.5rem 1.5rem 5rem' : undefined,
        textAlign: isMobile ? 'center' : 'left',
      }}>
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '1.2rem',
          }}
        >
          Actor · Berlin & Los Angeles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: '#f5f0eb',
            marginBottom: '0.3rem',
          }}
        >
          Maximilian
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: '#c9a84c',
            marginBottom: '1.5rem',
          }}
        >
          Schulze
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            width: '80px', height: '1px',
            background: '#c9a84c',
            marginBottom: '1.5rem',
            transformOrigin: isMobile ? 'center' : 'left',
            margin: isMobile ? '0 auto 1.5rem' : '0 0 1.5rem',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)',
            fontStyle: 'italic',
            color: '#8a8a8a',
            lineHeight: 1.7,
            maxWidth: isMobile ? '100%' : '420px',
            marginBottom: '2.5rem',
          }}
        >
          German-Slovak actor trained at the Lee Strasberg Theatre & Film Institute, 
          known for HBO's <em style={{ color: '#c9a84c' }}>The Rehearsal</em> and 
          the historical feature <em style={{ color: '#c9a84c' }}>24 Hours to D-Day</em>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start',
          }}
        >
          <button
            onClick={() => document.getElementById('credits')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.85rem 2.2rem',
              background: '#c9a84c',
              color: '#0a0a0a',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              flexShrink: 0,
            }}
            onMouseEnter={e => e.target.style.background = '#e4c97e'}
            onMouseLeave={e => e.target.style.background = '#c9a84c'}
          >
            View Credits
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.85rem 2.2rem',
              background: 'transparent',
              color: '#f5f0eb',
              border: '1px solid rgba(245,240,235,0.3)',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.color = '#c9a84c' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(245,240,235,0.3)'; e.target.style.color = '#f5f0eb' }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — hide on mobile */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: '#8a8a8a',
            textTransform: 'uppercase',
          }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown size={16} color="#c9a84c" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
