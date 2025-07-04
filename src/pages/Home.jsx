import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">BeceArt</h1>
          <p className="hero-subtitle">Roberto Becerro</p>
          <p className="hero-description">
            Artista urbano especializado en murales y grafitis que transforman espacios en obras de arte vibrantes y llenas de vida.
          </p>
          <Link to="/galeria" className="cta-button">
            Ver Obras
          </Link>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="preview-section">
        <div className="container">
          <div className="preview-grid">
            <div className="preview-card">
              <h3>Sobre Mí</h3>
              <p>Descubre mi historia y pasión por el arte urbano</p>
              <Link to="/sobre-mi" className="preview-link">Conocer más</Link>
            </div>
            <div className="preview-card">
              <h3>Galería</h3>
              <p>Explora mis murales y grafitis más destacados</p>
              <Link to="/galeria" className="preview-link">Ver obras</Link>
            </div>
            <div className="preview-card">
              <h3>Blog</h3>
              <p>Reflexiones y procesos creativos del arte urbano</p>
              <Link to="/blog" className="preview-link">Leer artículos</Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23ffffff" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          animation: drift 20s linear infinite;
        }

        @keyframes drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100px); }
        }

        .hero-content {
          text-align: center;
          z-index: 2;
          max-width: 800px;
          padding: 2rem;
        }

        .hero-title {
          font-size: clamp(3rem, 8vw, 8rem);
          font-weight: 900;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400% 400%;
          animation: gradientShift 4s ease-in-out infinite;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          margin-bottom: 2rem;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.5);
        }

        .preview-section {
          padding: 6rem 2rem;
          background: #1a1a1a;
        }

        .preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .preview-card {
          background: #2d2d2d;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .preview-card:hover {
          transform: translateY(-10px);
        }

        .preview-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #ff6b6b;
        }

        .preview-card p {
          color: #cccccc;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .preview-link {
          color: #4ecdc4;
          text-decoration: none;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .preview-link:hover {
          color: #ff6b6b;
        }

        @media (max-width: 768px) {
          .preview-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default Home