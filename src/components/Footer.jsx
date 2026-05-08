export default function Footer() {
  return (
    <footer style={{
      padding: '2.5rem 5%',
      background: '#0a0a0a',
      borderTop: '1px solid rgba(201,168,76,0.1)',
    }}>
      <div className="footer-inner">
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.1rem',
          fontWeight: 300,
          color: '#f5f0eb',
          letterSpacing: '0.1em',
        }}>
          Maximilian <span style={{ color: '#c9a84c' }}>Schulze</span>
        </div>

        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.65rem',
          color: '#3a3a3a',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          © {new Date().getFullYear()} · All Rights Reserved
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/max.sml_/' },
            { label: 'IMDb', href: 'https://www.imdb.com/name/nm15005132/' },
            { label: 'Filmmakers', href: 'https://www.filmmakers.eu/en/actors/maximilian-schulze' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3a3a3a',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = '#c9a84c'}
              onMouseLeave={e => e.target.style.color = '#3a3a3a'}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
