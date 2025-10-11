import React, { useState } from 'react';
import logo from '../assets/black.webp';

const HeaderPremium = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'À propos', href: '/a-propos', current: false },
    { name: 'Ressources', href: '/Nos-ressources', current: false },
    { name: 'Événements', href: '/evenements', current: false },
    { name: 'Boutique', href: '/boutique', current: false },
    { name: 'Blog', href: '/Blog', current: false },
    { name: 'Fracture', href: '/fracture', current: false },
    { name: 'Contact', href: '/contact', current: false }
  ];

  return (
    <>
      <style jsx>{`
        .header-premium {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(26, 18, 11, 0.95);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(139, 115, 85, 0.1);
          box-shadow: 
            0 4px 30px rgba(0, 0, 0, 0.4),
            0 1px 0 rgba(255, 255, 255, 0.02) inset;
        }

        .header-premium-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        .header-premium-logo-container {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
        }

        .header-premium-logo-wrapper {
          position: relative;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .header-premium-logo-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 50%, #ff6b35 100%);
          border-radius: 16px;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 0 0 1px rgba(255, 107, 53, 0.1),
            0 4px 20px rgba(255, 107, 53, 0.2);
        }

        .header-premium-logo-img {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
          filter: 
            brightness(1.1)
            drop-shadow(0 2px 8px rgba(255, 107, 53, 0.3));
          object-fit: cover;
        }

        .header-premium-logo-container:hover .header-premium-logo-background {
          opacity: 1;
          transform: scale(1.1) rotate(5deg);
        }

        .header-premium-logo-container:hover .header-premium-logo-img {
          transform: scale(1.05) rotate(-5deg);
          filter: 
            brightness(1.2)
            drop-shadow(0 4px 16px rgba(255, 107, 53, 0.5));
        }

        .header-premium-logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
        }

        .header-premium-logo-text span:first-child {
          color: #e0e0e0;
          opacity: 0.9;
          font-weight: 700;
        }

        .header-premium-logo-text span:last-child {
          background: linear-gradient(135deg, #ffffff 0%, #ff8e53 50%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          text-shadow: 0 2px 4px rgba(255, 107, 53, 0.2);
        }

        .header-premium-nav-desktop {
          display: flex;
          gap: 28px;
        }

        .header-premium-nav-link {
          position: relative;
          padding: 10px 0;
          font-size: 0.95rem;
          font-weight: 500;
          color: #bbb;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.2px;
        }

        .header-premium-nav-link:hover,
        .header-premium-nav-link.active {
          color: white;
          transform: translateY(-1px);
        }

        .header-premium-nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35, #ff8e53, #ff6b35);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 10px rgba(255, 107, 53, 0.4);
        }

        .header-premium-nav-link:hover::before,
        .header-premium-nav-link.active::before {
          width: 100%;
        }

        .header-premium-cta-buttons {
          display: flex;
          gap: 16px;
        }

        .header-premium-btn {
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

        .header-premium-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .header-premium-btn:hover::before {
          left: 100%;
        }

        .header-premium-btn-outline {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 107, 53, 0.3);
          backdrop-filter: blur(10px);
        }

        .header-premium-btn-outline:hover {
          background: rgba(255, 107, 53, 0.1);
          border-color: rgba(255, 107, 53, 0.5);
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 107, 53, 0.1);
        }

        .header-premium-btn-primary {
          background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
          color: white;
          box-shadow: 
            0 4px 20px rgba(255, 107, 53, 0.3),
            0 0 0 1px rgba(255, 107, 53, 0.1);
        }

        .header-premium-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 30px rgba(255, 107, 53, 0.5),
            0 0 0 1px rgba(255, 107, 53, 0.2);
          background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%);
        }

        .header-premium-menu-toggle {
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

        .header-premium-menu-toggle:hover {
          background: rgba(255, 107, 53, 0.1);
          transform: scale(1.1);
        }

        .header-premium-mobile-menu {
          position: absolute;
          top: 84px;
          left: 20px;
          right: 20px;
          background: rgba(26, 18, 11, 0.98);
          backdrop-filter: blur(25px) saturate(180%);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 107, 53, 0.1);
          animation: header-premium-slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 49;
        }

        .header-premium-mobile-menu-item {
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

        .header-premium-mobile-menu-item:hover,
        .header-premium-mobile-menu-item.active {
          color: white;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 142, 83, 0.1));
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateX(8px);
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);
        }

        .header-premium-mobile-menu-footer {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 107, 53, 0.2);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .header-premium-nav-desktop,
          .header-premium-cta-buttons {
            display: none;
          }

          .header-premium-menu-toggle {
            display: block;
          }

          .header-premium-nav-container {
            padding: 0 20px;
          }

          .header-premium-logo-text span:first-child {
            display: none;
          }
        }

        @keyframes header-premium-slideDown {
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
        @keyframes header-premium-logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .header-premium-logo-wrapper:hover .header-premium-logo-img {
          animation: header-premium-logoPulse 2s ease-in-out infinite;
        }

        /* Animation pour le menu mobile */
        @keyframes header-premium-slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .header-premium-animate-slideIn {
          animation: header-premium-slideIn 0.3s ease-out forwards;
        }

        /* Effet glow sur les boutons */
        .header-premium-shadow-glow {
          box-shadow: 0 0 15px rgba(255, 107, 53, 0.6);
        }

        /* Effet glow au hover */
        .header-premium-group:hover .header-premium-group-hover-animate-glow-pulse {
          animation: header-premium-glowPulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes header-premium-glowPulse {
          0% {
            box-shadow: 0 0 0 rgba(255, 107, 53, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 107, 53, 0.8);
          }
          100% {
            box-shadow: 0 0 0 rgba(255, 107, 53, 0.5);
          }
        }

        /* Style pour les liens actifs */
        .header-premium-nav-link-active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ff6b35;
          border-radius: 1px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .header-premium-nav-link-active:hover::after {
          transform: scaleX(1);
        }
      `}</style>

      <header className="header-premium">
        <div className="header-premium-nav-container">
          {/* Logo amélioré */}
          <div className="header-premium-logo-container" onClick={() => window.location.href = '/'}>
            <div className="header-premium-logo-wrapper">
              <div className="header-premium-logo-background"></div>
              <img src={logo} alt="The Black Book" className="header-premium-logo-img" />
            </div>
            <div className="header-premium-logo-text">
              <span>THE</span>&nbsp;
              <span>BLACK BOOK</span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="header-premium-nav-desktop">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`header-premium-nav-link ${item.current ? 'active' : ''}`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="header-premium-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="header-premium-mobile-menu" id="header-premium-mobile-menu">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`header-premium-mobile-menu-item ${item.current ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
           
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderPremium;