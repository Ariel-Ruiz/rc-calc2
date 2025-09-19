import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../contexts/I18nProvider'

export default function Header() {
  const { t, lang, toggleLang } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className='navbar-tittle'>
          <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
            ☰
          </button>
          <h1 className="navbar-title">{t?.page_title}🦆</h1>
          <button className="navbar-lang-movil" id="toggleLang" onClick={toggleLang}>
            {lang}
          </button>
        </div>

        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            onClick={toggleMenu}
            className={location.pathname === '/' ? 'active' : ''}
          >
            {t?.nav?.profit}
          </Link>
          <Link
            to="/rollertap"
            onClick={toggleMenu}
            className={location.pathname === '/rollertap' ? 'active' : ''}
          >
            {t?.nav?.rollertap}
          </Link>
        </nav>
        <div className="navbar-lang-container">
          <button className="navbar-lang" id="toggleLang" onClick={toggleLang}>
            {lang}
          </button>
        </div>
      </div>
    </header>
  )
}