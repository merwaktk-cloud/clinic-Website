import './Footer.css'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About the clinic' },
  { href: '#doctors', label: 'Our doctors' },
  { href: '#reviews', label: 'Patient reviews' },
  { href: '#contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '#services', label: 'General Medicine' },
  { href: '#services', label: 'Cardiology' },
  { href: '#services', label: 'Dermatology' },
  { href: '#services', label: 'Pediatrics' },
  { href: '#services', label: 'Dental & Orthopedic Care' },
]

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand-column">
            <a className="site-footer__brand" href="#home">
              <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path
                  d="M20 3.5 34 9v10.5c0 8.5-5.7 14.2-14 17-8.3-2.8-14-8.5-14-17V9l14-5.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M20 12v15M12.5 19.5h15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.6"
                />
              </svg>
              <span>
                CarePoint <small>Clinic</small>
              </span>
            </a>
            <p>
             Committed to compassionate care, healthier lives, and a better healthcare experience for every patient.
            </p>
          </div>

          <nav className="site-footer__column" aria-label="Footer navigation">
            <h2>Explore</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__column" aria-label="Footer services">
            <h2>Services</h2>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2>Social</h2>
            <ul className="site-footer__social-list">
              <li>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="3" y1="21" x2="21" y2="3">
                        <stop stopColor="#FFC107" />
                        <stop offset=".5" stopColor="#F56040" />
                        <stop offset="1" stopColor="#C13584" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      stroke="url(#instagram-gradient)"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="url(#instagram-gradient)"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.1"
                      fill="url(#instagram-gradient)"
                    />
                  </svg>
                  Instagram
                </span>
              </li>
              <li>
                <span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#1877F2"
                      d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z"
                    />
                  </svg>
                  Facebook
                </span>
              </li>
              <li>
                <span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#0A66C2"
                      d="M5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 9h3.4v11.5H3.5V9Zm5.5 0h3.2v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.5 0 4.2 2.3 4.2 5.3v6.5h-3.4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.1 1.5-2.1 3v5.9H9V9Z"
                    />
                  </svg>
                  LinkedIn
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {currentYear} CarePoint Clinic.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
