import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#doctors', label: 'Doctors' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef(null)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeMenu()
        menuToggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="navbar container">
        <a
          className="navbar__brand"
          href="#home"
          aria-label="CarePoint Clinic home"
          onClick={closeMenu}
        >
          <svg
            className="navbar__brand-icon"
            viewBox="0 0 40 40"
            aria-hidden="true"
          >
            <path
              d="M20 3.5 34 9v10.5c0 8.5-5.7 14.2-14 17-8.3-2.8-14-8.5-14-17V9l14-5.5Z"
              fill="currentColor"
              opacity=".12"
            />
            <path
              d="M20 3.5 34 9v10.5c0 8.5-5.7 14.2-14 17-8.3-2.8-14-8.5-14-17V9l14-5.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M20 12v15M12.5 19.5h15"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.6"
            />
          </svg>
          <span className="navbar__brand-name">
            CarePoint <span>Clinic</span>
          </span>
        </a>

        <button
          ref={menuToggleRef}
          className={`navbar__toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          className={`navbar__menu${isMenuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <div className="navbar__links">
            {navigationLinks.map((link) => (
              <a
                className="navbar__link"
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="button button--primary navbar__appointment"
            href="#appointment"
            onClick={closeMenu}
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
