import { Mail, Instagram, Twitter, Youtube, Facebook, ArrowRight } from 'lucide-react';
import logo from '../assets/black.webp'; // Assure-toi d'importer le logo

const Footer = () => {
  const footerLinks = {
    platform: {
      title: "Plateforme",
      links: [
        { name: "Ressources", href: "/resources" },
        { name: "Événements", href: "/events" },
        { name: "Boutique", href: "/shop" },
        { name: "Blog", href: "/blog" },
      ]
    },
    community: {
      title: "Communauté", 
      links: [
        { name: "À propos", href: "/about" },
        { name: "Ambassadeurs", href: "/ambassadors" },
        { name: "Partenaires", href: "/partners" },
        { name: "Témoignages", href: "/testimonials" },
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "/help" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Status", href: "/status" },
      ]
    },
    legal: {
      title: "Légal",
      links: [
        { name: "Politique de confidentialité", href: "/privacy" },
        { name: "Conditions d'utilisation", href: "/terms" },
        { name: "Mentions légales", href: "/legal" },
        { name: "Cookies", href: "/cookies" },
      ]
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          background-color: #000;
          border-top: 1px solid rgba(115, 115, 115, 0.3);
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .footer-border {
          border-bottom: 1px solid rgba(115, 115, 115, 0.3);
          width: 100%;
        }

        .footer-container {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @media (min-width: 1024px) {
          .footer-content {
            padding: 0 32px;
          }
        }

        .newsletter-section {
          padding: 5rem 0;
          width: 100%;
        }

        .newsletter-grid {
          display: grid;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .newsletter-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        .newsletter-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2.25rem;
          color: #f5f5f5;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .gradient-orange {
          background: linear-gradient(135deg, #ff6b00 0%, #ff9d00 50%, #ff6b00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .newsletter-text {
          color: #a3a3a3;
          font-size: 1.125rem;
          line-height: 1.75;
          max-width: 500px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 500px;
        }

        @media (min-width: 640px) {
          .newsletter-form {
            flex-direction: row;
          }
        }

        .newsletter-input {
          flex: 1;
          background-color: rgba(115, 115, 115, 0.1);
          border: 1px solid rgba(115, 115, 115, 0.3);
          color: #f5f5f5;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .newsletter-input::placeholder {
          color: #737373;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #ff6b00;
          box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
          background-color: rgba(115, 115, 115, 0.15);
        }

        .newsletter-button {
          background: linear-gradient(135deg, #ff6b00 0%, #ff9d00 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(255, 107, 0, 0.3);
          position: relative;
          overflow: hidden;
        }

        .newsletter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .newsletter-button:hover::before {
          left: 100%;
        }

        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 107, 0, 0.5);
        }

        .newsletter-disclaimer {
          font-size: 0.75rem;
          color: #737373;
          max-width: 500px;
        }

        .main-footer {
          padding: 5rem 0;
          width: 100%;
        }

        .footer-grid {
          display: grid;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            gap: 4rem;
          }
        }

        .brand-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
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
          opacity: 0.8;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(255, 107, 0, 0.3);
        }

        .logo-img {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
          filter: brightness(1.1) drop-shadow(0 2px 8px rgba(255, 107, 0, 0.3));
          object-fit: cover;
        }

        .brand-logo:hover .logo-background {
          opacity: 1;
          transform: scale(1.05) rotate(5deg);
        }

        .brand-logo:hover .logo-img {
          transform: scale(1.05) rotate(-5deg);
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: 1.75rem;
          color: white;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
        }

        .logo-text-main {
          color: #e0e0e0;
          opacity: 0.9;
          font-weight: 700;
        }

        .brand-description {
          color: #a3a3a3;
          line-height: 1.75;
          font-size: 1.05rem;
          max-width: 400px;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-link {
          width: 3rem;
          height: 3rem;
          background-color: rgba(115, 115, 115, 0.1);
          border: 1px solid rgba(115, 115, 115, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background-color: rgba(255, 107, 0, 0.1);
          border-color: rgba(255, 107, 0, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 107, 0, 0.2);
        }

        .social-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #a3a3a3;
          transition: all 0.3s ease;
        }

        .social-link:hover .social-icon {
          color: #ff6b00;
          transform: scale(1.1);
        }

        .links-section h4 {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #f5f5f5;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }

        .links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .links-list a {
          color: #a3a3a3;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          position: relative;
        }

        .links-list a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #ff6b00, #ff9d00);
          transition: width 0.3s ease;
        }

        .links-list a:hover {
          color: #ff6b00;
          transform: translateX(5px);
        }

        .links-list a:hover::before {
          width: 20px;
        }

        .bottom-bar {
          border-top: 1px solid rgba(115, 115, 115, 0.3);
          padding: 2.5rem 0;
          width: 100%;
        }

        .bottom-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .bottom-content {
            flex-direction: row;
            text-align: left;
            gap: 0;
          }
        }

        .copyright {
          color: #a3a3a3;
          font-size: 0.875rem;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ff6b00;
          font-size: 0.875rem;
          background: rgba(255, 107, 0, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 107, 0, 0.2);
        }

        .status-dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .made-with-love {
          color: #a3a3a3;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart {
          color: #ff6b00;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>

      {/* Newsletter Section */}
      <div className="footer-border">
        <div className="footer-container">
          <div className="footer-content">
     
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-content">
          <div className="main-footer">
            <div className="footer-grid">
              {/* Brand Section */}
              <div className="brand-section">
                <div className="brand-logo">
                  <div className="logo-wrapper">
                    <div className="logo-background"></div>
                    <img src={logo} alt="THE BLACK BOOK" className="logo-img" />
                  </div>
                  <div className="logo-text">
                    <span className="logo-text-main">THE</span>{' '}
                    <span className="gradient-orange">BLACK BOOK</span>
                  </div>
                </div>
                
                <p className="brand-description">
                  Plateforme éducative et culturelle dédiée à la valorisation 
                  de l'héritage africain et de sa diaspora. Ensemble, 
                  construisons un avenir ancré dans nos racines.
                </p>

                {/* Social Links */}
                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="social-link"
                      aria-label={social.name}
                    >
                      <social.icon className="social-icon" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key} className="links-section">
                  <h4>{section.title}</h4>
                  <ul className="links-list">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href}>
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-border">
        <div className="footer-container">
          <div className="footer-content">
            <div className="bottom-bar">
              <div className="bottom-content">
                <div className="copyright">
                  © 2024 THE BLACK BOOK. Tous droits réservés.
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <span className="made-with-love">
                    Made with <span className="heart">❤️</span> for the African diaspora
                  </span>
                  <div className="status">
                    <div className="status-dot"></div>
                    <span>Tous les systèmes opérationnels</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;