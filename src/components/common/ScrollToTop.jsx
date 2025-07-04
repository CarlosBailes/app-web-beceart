import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <Link to="/" className="logo">BeceArt</Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" className={isActive('/') ? 'active' : ''}>Inicio</Link></li>
          <li><Link to="/sobre-mi" className={isActive('/sobre-mi') ? 'active' : ''}>Sobre Mí</Link></li>
          <li><Link to="/galeria" className={isActive('/galeria') ? 'active' : ''}>Galería</Link></li>
          <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
          <li><Link to="/contacto" className={isActive('/contacto') ? 'active' : ''}>Contacto</Link></li>
        </ul>
      </nav>
      
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.95);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .logo {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-decoration: none;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: #ffffff;
          margin: 3px 0;
          transition: 0.3s;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #ff6b6b;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.95);
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }

          .nav-links.mobile-open {
            transform: translateX(0);
          }

          .nav-links a {
            padding: 1rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </header>
  )
}

export default Header