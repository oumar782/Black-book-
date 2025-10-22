import React, { useState, useEffect } from 'react';
import logo from '../assets/black.webp';

const HeaderPremium = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'À propos', href: '/a-propos', current: false },
    { name: 'The Apex', href: '/apex', current: false },
    { name: 'Ressources', href: '/nos-ressources', current: false },
    { name: 'Événements', href: '/evenements', current: false },
    { name: 'Défis', href: '/defis', current: false },
    { name: 'The Sun', href: '/the-sun', current: false },
    { name: 'Boutique', href: '/boutique', current: false },
    { name: 'Musée', href: '/musee', current: false },
    { name: 'Tourisme', href: '/tourisme', current: false },
    { name: 'Lada', href: '/lada', current: false },
    { name: 'Maps et Stats', href: '/maps-stats', current: false },
    { name: 'Caméléon', href: '/cameleon', current: false },
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
          z-index: 1000;
          background: ${isScrolled ? 'rgba(15, 10, 5, 0.98)' : 'rgba(26, 18, 11, 0.95)'};
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(139, 115, 85, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: ${isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.02) inset'
            : '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.02) inset'
          };
        }

        .header-premium-nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: ${isScrolled ? '70px' : '80px'};
          transition: height 0.4s ease;
        }

        /* Logo Styles */
        .header-premium-logo-container {
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-premium-logo-wrapper {
          position: relative;
          width: ${isScrolled ? '44px' : '52px'};
          height: ${isScrolled ? '44px' : '52px'};
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          flex-shrink: 0;
        }

        .header-premium-logo-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #e25822 0%, #f9a825 100%);
          border-radius: 14px;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 0 1px rgba(255, 107, 53, 0.1), 0 4px 20px rgba(255, 107, 53, 0.2);
        }

        .header-premium-logo-img {
          width: ${isScrolled ? '36px' : '44px'};
          height: ${isScrolled ? '36px' : '44px'};
          border-radius: 10px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
          filter: brightness(1.1) drop-shadow(0 2px 8px rgba(255, 107, 53, 0.3));
          object-fit: cover;
        }

        .header-premium-logo-container:hover .header-premium-logo-background {
          opacity: 1;
          transform: scale(1.1) rotate(5deg);
        }

        .header-premium-logo-container:hover .header-premium-logo-img {
          transform: scale(1.05) rotate(-5deg);
          filter: brightness(1.2) drop-shadow(0 4px 16px rgba(255, 107, 53, 0.5));
        }

        .header-premium-logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: ${isScrolled ? '1.3rem' : '1.5rem'};
          color: white;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
          transition: font-size 0.4s ease;
          white-space: nowrap;
        }

        .header-premium-logo-text span:first-child {
          color: #e0e0e0;
          opacity: 0.9;
          font-weight: 700;
        }

        .header-premium-logo-text span:last-child {
          background: linear-gradient(135deg, rgb(243, 108, 6) 0%, rgb(243, 108, 6) 50%, #f9a825 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          text-shadow: 0 2px 4px rgba(255, 107, 53, 0.2);
        }

        /* Desktop Navigation */
        .header-premium-nav-desktop {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .header-premium-nav-link {
          position: relative;
          padding: 12px 16px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #bbb;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.2px;
          border-radius: 10px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .header-premium-nav-link:hover,
        .header-premium-nav-link.active {
          color: white;
          background: rgba(255, 107, 53, 0.1);
          transform: translateY(-1px);
        }

        .header-premium-nav-link::before {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, rgb(243, 108, 6), rgb(243, 108, 6), #ff6b35);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 10px rgba(255, 107, 53, 0.4);
        }

        .header-premium-nav-link:hover::before,
        .header-premium-nav-link.active::before {
          width: 70%;
        }

        /* Desktop Dropdown Menu */
        .header-premium-nav-dropdown {
          position: relative;
        }

        .header-premium-dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #bbb;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 10px;
          white-space: nowrap;
        }

        .header-premium-dropdown-toggle:hover {
          color: white;
          background: rgba(255, 107, 53, 0.1);
        }

        .header-premium-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 8px;
          background: rgba(15, 10, 5, 0.98);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 16px;
          padding: 12px;
          min-width: 220px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 107, 53, 0.1);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 1001;
        }

        .header-premium-nav-dropdown:hover .header-premium-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .header-premium-dropdown-link {
          display: block;
          padding: 12px 16px;
          font-size: 0.9rem;
          color: #ccc;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          margin-bottom: 4px;
        }

        .header-premium-dropdown-link:hover {
          color: white;
          background: rgba(255, 107, 53, 0.15);
          transform: translateX(4px);
        }

        /* Auth Buttons Desktop */
        .header-premium-auth-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 24px;
        }

        .header-premium-auth-btn {
          padding: 10px 20px;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          white-space: nowrap;
          border: none;
          cursor: pointer;
        }

        .header-premium-login-btn {
          background: transparent;
          color: #bbb;
          border: 1px solid rgba(255, 107, 53, 0.4);
        }

        .header-premium-login-btn:hover {
          background: rgba(255, 107, 53, 0.1);
          color: white;
          border-color: rgba(255, 107, 53, 0.6);
          transform: translateY(-1px);
        }

        .header-premium-signup-btn {
          background: linear-gradient(135deg, rgb(243, 108, 6), #ff6b35);
          color: white;
          border: 1px solid rgba(255, 107, 53, 0.8);
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .header-premium-signup-btn:hover {
          background: linear-gradient(135deg, #e25822, rgb(243, 108, 6));
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }

        /* Mobile Menu Toggle */
        .header-premium-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.3);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          flex-shrink: 0;
        }

        .header-premium-menu-toggle:hover {
          background: rgba(255, 107, 53, 0.2);
          transform: scale(1.05);
        }

        .header-premium-menu-toggle span {
          display: block;
          width: 20px;
          height: 2px;
          background: white;
          margin: 2px 0;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .header-premium-menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .header-premium-menu-toggle.active span:nth-child(2) {
          opacity: 0;
        }

        .header-premium-menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Enhanced Mobile Menu */
        .header-premium-mobile-menu {
          position: fixed;
          top: ${isScrolled ? '70px' : '80px'};
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 10, 5, 0.98);
          backdrop-filter: blur(25px) saturate(180%);
          border-top: 1px solid rgba(255, 107, 53, 0.2);
          padding: 24px;
          overflow-y: auto;
          z-index: 999;
          animation: header-premium-slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          min-height: calc(100vh - ${isScrolled ? '70px' : '80px'});
        }

        .header-premium-mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 100%;
        }

        .header-premium-mobile-menu-item {
          display: block;
          padding: 18px 20px;
          font-size: 1.1rem;
          color: #ccc;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.02);
          text-align: left;
          width: 100%;
        }

        .header-premium-mobile-menu-item:hover,
        .header-premium-mobile-menu-item.active {
          color: white;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(255, 142, 83, 0.1));
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateX(8px);
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);
        }

        /* Mobile Auth Buttons */
        .header-premium-mobile-auth {
          display: flex;
          gap: 12px;
          margin: 24px 0;
          padding: 0 4px;
        }

        .header-premium-mobile-auth-btn {
          flex: 1;
          padding: 16px 20px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
          text-align: center;
          border: none;
          cursor: pointer;
        }

        .header-premium-mobile-login {
          background: transparent;
          color: #bbb;
          border: 1px solid rgba(255, 107, 53, 0.4);
        }

        .header-premium-mobile-login:hover {
          background: rgba(255, 107, 53, 0.1);
          color: white;
          border-color: rgba(255, 107, 53, 0.6);
        }

        .header-premium-mobile-signup {
          background: linear-gradient(135deg, rgb(243, 108, 6), #ff6b35);
          color: white;
          border: 1px solid rgba(255, 107, 53, 0.8);
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .header-premium-mobile-signup:hover {
          background: linear-gradient(135deg, #e25822, rgb(243, 108, 6));
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }

        /* Mobile Menu Sections */
        .header-premium-mobile-section {
          margin-bottom: 32px;
        }

        .header-premium-mobile-section-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #ff6b35;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
          padding: 0 20px;
          opacity: 0.8;
          border-left: 3px solid #ff6b35;
          padding-left: 16px;
        }

        /* Enhanced Scroll for Mobile Menu */
        .header-premium-mobile-menu::-webkit-scrollbar {
          width: 6px;
        }

        .header-premium-mobile-menu::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }

        .header-premium-mobile-menu::-webkit-scrollbar-thumb {
          background: rgba(255, 107, 53, 0.4);
          border-radius: 3px;
        }

        .header-premium-mobile-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 107, 53, 0.6);
        }

        /* Menu Footer pour le mobile */
        .header-premium-mobile-footer {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 107, 53, 0.2);
          text-align: center;
        }

        .header-premium-mobile-footer-text {
          font-size: 0.8rem;
          color: #888;
          opacity: 0.7;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .header-premium-nav-desktop {
            gap: 4px;
          }
          
          .header-premium-nav-link,
          .header-premium-dropdown-toggle {
            padding: 10px 12px;
            font-size: 0.85rem;
          }

          .header-premium-auth-buttons {
            margin-left: 16px;
            gap: 8px;
          }

          .header-premium-auth-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 1024px) {
          .header-premium-nav-desktop,
          .header-premium-auth-buttons {
            display: none;
          }

          .header-premium-menu-toggle {
            display: flex;
          }

          .header-premium-nav-container {
            padding: 0 20px;
          }
        }

        @media (max-width: 768px) {
          .header-premium-nav-container {
            padding: 0 16px;
          }

          .header-premium-mobile-menu {
            padding: 20px 16px;
          }

          .header-premium-mobile-menu-item {
            padding: 16px 18px;
            font-size: 1rem;
          }

          .header-premium-mobile-section-title {
            font-size: 0.85rem;
            padding: 0 18px;
          }

          .header-premium-mobile-auth {
            margin: 20px 0;
            gap: 10px;
          }

          .header-premium-mobile-auth-btn {
            padding: 14px 18px;
            font-size: 0.95rem;
          }

          /* Logo toujours complet même sur mobile */
          .header-premium-logo-text {
            font-size: ${isScrolled ? '1.1rem' : '1.3rem'};
          }

          .header-premium-logo-wrapper {
            width: ${isScrolled ? '40px' : '48px'};
            height: ${isScrolled ? '40px' : '48px'};
          }

          .header-premium-logo-img {
            width: ${isScrolled ? '32px' : '40px'};
            height: ${isScrolled ? '32px' : '40px'};
          }
        }

        @media (max-width: 480px) {
          .header-premium-logo-text {
            font-size: ${isScrolled ? '1rem' : '1.2rem'};
          }

          .header-premium-logo-wrapper {
            width: ${isScrolled ? '36px' : '44px'};
            height: ${isScrolled ? '36px' : '44px'};
          }

          .header-premium-logo-img {
            width: ${isScrolled ? '30px' : '36px'};
            height: ${isScrolled ? '30px' : '36px'};
          }

          .header-premium-mobile-menu {
            padding: 16px 12px;
          }

          .header-premium-mobile-menu-item {
            padding: 14px 16px;
            font-size: 0.95rem;
          }

          .header-premium-mobile-section-title {
            padding: 0 16px;
          }

          .header-premium-mobile-auth {
            flex-direction: column;
            gap: 8px;
          }

          .header-premium-mobile-auth-btn {
            padding: 12px 16px;
          }
        }

        /* Très petits écrans - Logo adaptatif mais toujours complet */
        @media (max-width: 360px) {
          .header-premium-logo-text {
            font-size: ${isScrolled ? '0.9rem' : '1.1rem'};
          }

          .header-premium-logo-container {
            gap: 10px;
          }

          .header-premium-logo-wrapper {
            width: ${isScrolled ? '34px' : '40px'};
            height: ${isScrolled ? '34px' : '40px'};
          }

          .header-premium-logo-img {
            width: ${isScrolled ? '28px' : '34px'};
            height: ${isScrolled ? '28px' : '34px'};
          }
        }

        /* Tall Screen Support */
        @media (max-height: 700px) and (orientation: landscape) {
          .header-premium-mobile-menu {
            padding: 16px;
          }

          .header-premium-mobile-menu-item {
            padding: 12px 16px;
            font-size: 0.9rem;
          }

          .header-premium-mobile-nav {
            gap: 4px;
          }
        }

        /* Support des très grands écrans */
        @media (min-width: 1920px) {
          .header-premium-nav-container {
            max-width: 1600px;
          }

          .header-premium-nav-desktop {
            gap: 12px;
          }

          .header-premium-nav-link,
          .header-premium-dropdown-toggle {
            padding: 14px 18px;
            font-size: 1rem;
          }

          .header-premium-auth-btn {
            padding: 12px 24px;
            font-size: 1rem;
          }
        }

        /* Animations */
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

        @keyframes header-premium-logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .header-premium-logo-wrapper:hover .header-premium-logo-img {
          animation: header-premium-logoPulse 2s ease-in-out infinite;
        }
      `}</style>

      <header className="header-premium">
        <div className="header-premium-nav-container">
          {/* Logo - Toujours complet sur tous les écrans */}
          <a className="header-premium-logo-container" href="/">
            <div className="header-premium-logo-wrapper">
              <div className="header-premium-logo-background"></div>
              <img src={logo} alt="The Black Book" className="header-premium-logo-img" />
            </div>
            <div className="header-premium-logo-text">
              <span>AFRO</span>&nbsp;
              <span>BLACK BOOK</span>
            </div>
          </a>

          {/* Desktop Navigation with Dropdown */}
          <nav className="header-premium-nav-desktop">
            {navigation.slice(0, 6).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`header-premium-nav-link ${item.current ? 'active' : ''}`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
            
            {/* Dropdown for remaining menu items */}
            <div className="header-premium-nav-dropdown">
              <button className="header-premium-dropdown-toggle">
                Plus
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
              </button>
              <div className="header-premium-dropdown-menu">
                {navigation.slice(6).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="header-premium-dropdown-link"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="header-premium-auth-buttons">
            <a href="/connexion" className="header-premium-auth-btn header-premium-login-btn">
              Connexion
            </a>
            <a href="/inscription" className="header-premium-auth-btn header-premium-signup-btn">
              S'inscrire
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`header-premium-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu principal"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="header-premium-mobile-menu">
            <nav className="header-premium-mobile-nav">
              {/* Mobile Auth Buttons */}
              <div className="header-premium-mobile-auth">
                <a 
                  href="/connexion" 
                  className="header-premium-mobile-auth-btn header-premium-mobile-login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </a>
                <a 
                  href="/inscription" 
                  className="header-premium-mobile-auth-btn header-premium-mobile-signup"
                  onClick={() => setIsMenuOpen(false)}
                >
                  S'inscrire
                </a>
              </div>

              {/* Main Navigation Section */}
              <div className="header-premium-mobile-section">
                <div className="header-premium-mobile-section-title">Navigation Principale</div>
                {navigation.slice(0, 6).map((item) => (
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

              {/* Additional Sections */}
              <div className="header-premium-mobile-section">
                <div className="header-premium-mobile-section-title">Contenus Exclusifs</div>
                {navigation.slice(6, 10).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="header-premium-mobile-menu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="header-premium-mobile-section">
                <div className="header-premium-mobile-section-title">Exploration</div>
                {navigation.slice(10, 13).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="header-premium-mobile-menu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="header-premium-mobile-section">
                <div className="header-premium-mobile-section-title">Divers</div>
                {navigation.slice(13).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="header-premium-mobile-menu-item"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Footer pour le menu mobile */}
              <div className="header-premium-mobile-footer">
                <div className="header-premium-mobile-footer-text">
                  AFRO BLACK BOOK © 2025
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default HeaderPremium;