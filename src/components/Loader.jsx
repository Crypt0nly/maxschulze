import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0,
        background: '#0a0a0a',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '3rem',
          fontWeight: 300,
          color: '#f5f0eb',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}>
          Maximilian
        </div>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '3rem',
          fontWeight: 300,
          color: '#c9a84c',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
        }}>
          Schulze
        </div>
        <motion.div
          style={{
            marginTop: '2rem',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
            width: 0,
          }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
