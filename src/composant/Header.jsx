import React, { useState } from 'react';
import logo from '../assets/black.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'À propos', href: '/a-propos', current: false },
    { name: 'Ressources', href: '/Nos-ressources', current: false },
    { name: 'Événements', href: '/events', current: false },
    { name: 'Boutique', href: '/shop', current: false },
    { name: 'Blog', href: '/blog', current: false },
  ];

  return (
    <>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 4px 30px rgba(0, 0, 0, 0.4),
            0 1px 0 rgba(255, 255, 255, 0.02) inset;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
        }

        .logo-wrapper {
          position: relative;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ff6b00 0%, #ff9d00 50%, #ff6b00 100%);
          border-radius: 16px;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 0 0 1px rgba(255, 107, 0, 0.1),
            0 4px 20px rgba(255, 107, 0, 0.2);
        }

        .logo-img {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
          filter: 
            brightness(1.1)
            drop-shadow(0 2px 8px rgba(255, 107, 0, 0.3));
          object-fit: cover;
        }

        .logo-container:hover .logo-background {
          opacity: 1;
          transform: scale(1.1) rotate(5deg);
        }

        .logo-container:hover .logo-img {
          transform: scale(1.05) rotate(-5deg);
          filter: 
            brightness(1.2)
            drop-shadow(0 4px 16px rgba(255, 107, 0, 0.5));
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
        }

        .logo-text span:first-child {
          color: #e0e0e0;
          opacity: 0.9;
          font-weight: 700;
        }

        .logo-text span:last-child {
          background: linear-gradient(135deg, #ffffff 0%, #ff9d00 50%, #ff6b00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          text-shadow: 0 2px 4px rgba(255, 107, 0, 0.2);
        }

        .nav-desktop {
          display: flex;
          gap: 28px;
        }

        .nav-link {
          position: relative;
          padding: 10px 0;
          font-size: 0.95rem;
          font-weight: 500;
          color: #bbb;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.2px;
        }

        .nav-link:hover,
        .nav-link.active {
          color: white;
          transform: translateY(-1px);
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b00, #ff9d00, #ff6b00);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 10px rgba(255, 107, 0, 0.4);
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
        }

        .btn {
          padding: 10px 24px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: none;
          outline: none;
          position: relative;
          overflow: hidden;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .btn:hover::before {
          left: 100%;
        }

        .btn-outline {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff6b00 0%, #ff9d00 100%);
          color: white;
          box-shadow: 
            0 4px 20px rgba(255, 107, 0, 0.3),
            0 0 0 1px rgba(255, 107, 0, 0.1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 30px rgba(255, 107, 0, 0.5),
            0 0 0 1px rgba(255, 107, 0, 0.2);
          background: linear-gradient(135deg, #ff7b1a 0%, #ffad33 100%);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.8rem;
          cursor: pointer;
          padding: 8px;
          border-radius: 10px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .menu-toggle:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: scale(1.1);
        }

        .mobile-menu {
          position: absolute;
          top: 84px;
          left: 20px;
          right: 20px;
          background: rgba(8, 8, 8, 0.98);
          backdrop-filter: blur(25px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.03);
          animation: slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 49;
        }

        .mobile-menu-item {
          display: block;
          padding: 16px 20px;
          font-size: 1.1rem;
          color: #ccc;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          margin-bottom: 4px;
          border: 1px solid transparent;
        }

        .mobile-menu-item:hover,
        .mobile-menu-item.active {
          color: white;
          background: linear-gradient(135deg, rgba(255, 107, 0, 0.15), rgba(255, 157, 0, 0.1));
          border-color: rgba(255, 107, 0, 0.2);
          transform: translateX(8px);
          box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);
        }

        .mobile-menu-footer {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .nav-desktop,
          .cta-buttons {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .nav-container {
            padding: 0 20px;
          }

          .logo-text span:first-child {
            display: none;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Animation de pulse subtile pour le logo */
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .logo-wrapper:hover .logo-img {
          animation: logoPulse 2s ease-in-out infinite;
        }
      `}</style>

      <header className="header">
        <div className="nav-container">
          {/* Logo amélioré */}
          <div className="logo-container" onClick={() => window.location.href = '/'}>
            <div className="logo-wrapper">
              <div className="logo-background"></div>
              <img src={logo} alt="The Black Book" className="logo-img" />
            </div>
            <div className="logo-text">
              <span>THE</span>&nbsp;
              <span>BLACK BOOK</span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="nav-desktop">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${item.current ? 'active' : ''}`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button className="btn btn-outline">Se connecter</button>
            <button className="btn btn-primary">S'abonner</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu" id="mobile-menu">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`mobile-menu-item ${item.current ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
            <div className="mobile-menu-footer">
              <button className="btn btn-outline" onClick={() => setIsMenuOpen(false)}>
                Se connecter
              </button>
              <button className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
                S'abonner
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;