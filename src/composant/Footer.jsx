import { Mail, Instagram, Twitter, Youtube, Facebook, ArrowRight, Shield } from 'lucide-react';
import logo from '../assets/black.webp';

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
    <footer className="afro-footer">
      <style jsx>{`
        .afro-footer {
          background: #000000;
          border-top: 1px solid rgba(226, 88, 34, 0.3);
          width: 100%;
          margin: 0;
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        /* Effets de particules */
        .afro-footer-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .afro-footer-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(135deg, #e25822, #f9a825);
          border-radius: 50%;
          animation: afroFooterFloat linear infinite;
          opacity: 0.4;
        }

        @keyframes afroFooterFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .afro-footer-border {
          border-bottom: 1px solid rgba(226, 88, 34, 0.2);
          width: 100%;
        }

        .afro-footer-container {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
          position: relative;
          z-index: 2;
        }

        .afro-footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        @media (min-width: 1024px) {
          .afro-footer-content {
            padding: 0 2rem;
          }
        }

        /* Newsletter Section Premium */
        .afro-newsletter-section {
          padding: 4rem 0;
          width: 100%;
          position: relative;
        }

        .afro-newsletter-grid {
          display: grid;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .afro-newsletter-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        .afro-newsletter-content {
          position: relative;
        }

        .afro-newsletter-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(226, 88, 34, 0.2), rgba(249, 168, 37, 0.1));
          border: 1px solid rgba(226, 88, 34, 0.3);
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .afro-newsletter-badge-icon {
          width: 1rem;
          height: 1rem;
          color: #e25822;
        }

        .afro-newsletter-badge span {
          color: #e25822;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .afro-newsletter-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          color: #f5f5f5;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .afro-gradient-marron {
          background: linear-gradient(135deg, #e25822 0%, #f9a825 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .afro-newsletter-text {
          color: #a3a3a3;
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.6;
          max-width: 500px;
          margin-bottom: 2rem;
        }

        .afro-newsletter-form-container {
          position: relative;
          max-width: 500px;
        }

        .afro-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        @media (min-width: 640px) {
          .afro-newsletter-form {
            flex-direction: row;
          }
        }

        .afro-newsletter-input-wrapper {
          position: relative;
          flex: 1;
        }

        .afro-newsletter-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(226, 88, 34, 0.3);
          color: #f5f5f5;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .afro-newsletter-input::placeholder {
          color: #737373;
        }

        .afro-newsletter-input:focus {
          outline: none;
          border-color: #e25822;
          box-shadow: 0 0 0 3px rgba(226, 88, 34, 0.1);
          background: rgba(226, 88, 34, 0.05);
        }

        .afro-newsletter-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #e25822, #f9a825);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .afro-newsletter-input:focus ~ .afro-newsletter-underline {
          width: 100%;
        }

        .afro-newsletter-button {
          background: linear-gradient(135deg, #e25822, #f9a825);
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
          box-shadow: 0 4px 20px rgba(226, 88, 34, 0.3);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .afro-newsletter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .afro-newsletter-button:hover::before {
          left: 100%;
        }

        .afro-newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(226, 88, 34, 0.5);
        }

        .afro-newsletter-disclaimer {
          font-size: 0.75rem;
          color: #737373;
          max-width: 500px;
          margin-top: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .afro-newsletter-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .afro-newsletter-orb {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(226, 88, 34, 0.2), transparent);
          border: 2px solid rgba(226, 88, 34, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: afroNewsletterOrbGlow 3s ease-in-out infinite;
        }

        @keyframes afroNewsletterOrbGlow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(226, 88, 34, 0.3); 
          }
          50% { 
            box-shadow: 0 0 50px rgba(226, 88, 34, 0.5); 
          }
        }

        .afro-newsletter-icon {
          width: 3rem;
          height: 3rem;
          color: #e25822;
        }

        /* Main Footer Content */
        .afro-main-footer {
          padding: 4rem 0;
          width: 100%;
        }

        .afro-footer-grid {
          display: grid;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .afro-footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
            gap: 4rem;
          }
        }

        .afro-brand-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .afro-brand-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .afro-logo-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .afro-logo-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #e25822 0%, #f9a825 100%);
          border-radius: 16px;
          opacity: 0.8;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 20px rgba(226, 88, 34, 0.3);
        }

        .afro-logo-img {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          z-index: 2;
          filter: brightness(1.1) drop-shadow(0 2px 8px rgba(226, 88, 34, 0.3));
          object-fit: cover;
        }

        .afro-brand-logo:hover .afro-logo-background {
          opacity: 1;
          transform: scale(1.05) rotate(5deg);
        }

        .afro-brand-logo:hover .afro-logo-img {
          transform: scale(1.05) rotate(-5deg);
        }

        .afro-logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 3vw, 1.75rem);
          color: white;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
          flex-wrap: wrap;
        }

        .afro-logo-text-main {
          color: #e0e0e0;
          opacity: 0.9;
          font-weight: 700;
        }

        .afro-brand-description {
          color: #a3a3a3;
          line-height: 1.6;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          max-width: 400px;
        }

        .afro-social-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .afro-social-link {
          width: 3rem;
          height: 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(226, 88, 34, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
        }

        .afro-social-link:hover {
          background: rgba(226, 88, 34, 0.1);
          border-color: rgba(226, 88, 34, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(226, 88, 34, 0.2);
        }

        .afro-social-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #a3a3a3;
          transition: all 0.3s ease;
        }

        .afro-social-link:hover .afro-social-icon {
          color: #e25822;
          transform: scale(1.1);
        }

        .afro-links-section h4 {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          color: #f5f5f5;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }

        .afro-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .afro-links-list a {
          color: #a3a3a3;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          position: relative;
          display: inline-block;
        }

        .afro-links-list a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #e25822, #f9a825);
          transition: width 0.3s ease;
        }

        .afro-links-list a:hover {
          color: #e25822;
          transform: translateX(5px);
        }

        .afro-links-list a:hover::before {
          width: 20px;
        }

        /* Bottom Bar */
        .afro-bottom-bar {
          border-top: 1px solid rgba(226, 88, 34, 0.2);
          padding: 2rem 0;
          width: 100%;
        }

        .afro-bottom-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .afro-bottom-content {
            flex-direction: row;
            text-align: left;
            gap: 0;
          }
        }

        .afro-copyright {
          color: #a3a3a3;
          font-size: 0.875rem;
        }

        .afro-bottom-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .afro-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #e25822;
          font-size: 0.875rem;
          background: rgba(226, 88, 34, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(226, 88, 34, 0.2);
        }

        .afro-status-dot {
          width: 0.5rem;
          height: 0.5rem;
          background-color: #22c55e;
          border-radius: 50%;
          animation: afroPulse 2s infinite;
        }

        @keyframes afroPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .afro-made-with-love {
          color: #a3a3a3;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .afro-heart {
          color: #e25822;
          animation: afroHeartbeat 1.5s ease-in-out infinite;
        }

        @keyframes afroHeartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        /* Responsive optimisations */
        @media (max-width: 768px) {
          .afro-newsletter-section {
            padding: 3rem 0;
          }
          
          .afro-main-footer {
            padding: 3rem 0;
          }
          
          .afro-footer-grid {
            gap: 2rem;
          }
          
          .afro-brand-logo {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .afro-logo-text {
            justify-content: center;
          }
          
          .afro-social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .afro-footer-content {
            padding: 0 0.75rem;
          }
          
          .afro-newsletter-title {
            font-size: 1.5rem;
          }
          
          .afro-newsletter-text {
            font-size: 0.95rem;
          }
          
          .afro-newsletter-button {
            padding: 0.875rem 1.5rem;
          }
          
          .afro-bottom-right {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Support tactile */
        @media (hover: none) {
          .afro-newsletter-button:hover,
          .afro-social-link:hover,
          .afro-brand-logo:hover .afro-logo-background,
          .afro-brand-logo:hover .afro-logo-img,
          .afro-links-list a:hover {
            transform: none;
          }
        }
      `}</style>

      {/* Effets de particules */}
      <div className="afro-footer-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="afro-footer-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }} />
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="afro-footer-border">
        <div className="afro-footer-container">
          <div className="afro-footer-content">
            <div className="afro-newsletter-section">
              <div className="afro-newsletter-grid">
                <div className="afro-newsletter-content">
                  <div className="afro-newsletter-badge">
                    <Mail className="afro-newsletter-badge-icon" />
                    <span>Restez informé</span>
                  </div>
                  
                  <h2 className="afro-newsletter-title">
                    Rejoignez notre <span className="afro-gradient-marron">communauté</span>
                  </h2>
                  
                  <p className="afro-newsletter-text">
                    Recevez les dernières actualités, événements exclusifs et ressources 
                    premium directement dans votre boîte mail.
                  </p>

                  <div className="afro-newsletter-form-container">
                    <form className="afro-newsletter-form">
                      <div className="afro-newsletter-input-wrapper">
                        <input
                          type="email"
                          placeholder="Votre adresse email"
                          className="afro-newsletter-input"
                          required
                        />
                        <div className="afro-newsletter-underline"></div>
                      </div>
                      <button type="submit" className="afro-newsletter-button">
                        <span>S'abonner</span>
                        <ArrowRight size={18} />
                      </button>
                    </form>
                    
                    <p className="afro-newsletter-disclaimer">
                      <Shield size={14} />
                      Nous respectons votre vie privée. Désabonnez-vous à tout moment.
                    </p>
                  </div>
                </div>

                <div className="afro-newsletter-visual">
                  <div className="afro-newsletter-orb">
                    <Mail className="afro-newsletter-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="afro-footer-container">
        <div className="afro-footer-content">
          <div className="afro-main-footer">
            <div className="afro-footer-grid">
              {/* Brand Section */}
              <div className="afro-brand-section">
                <div className="afro-brand-logo">
                  <div className="afro-logo-wrapper">
                    <div className="afro-logo-background"></div>
                    <img src={logo} alt="THE BLACK BOOK" className="afro-logo-img" />
                  </div>
                  <div className="afro-logo-text">
                    <span className="afro-logo-text-main">AFRO</span>{' '}
                    <span className="afro-gradient-marron">BLACK BOOK</span>
                  </div>
                </div>
                
                <p className="afro-brand-description">
                  Plateforme éducative et culturelle dédiée à la valorisation 
                  de l'héritage africain et de sa diaspora. Ensemble, 
                  construisons un avenir ancré dans nos racines.
                </p>

                {/* Social Links */}
                <div className="afro-social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="afro-social-link"
                      aria-label={social.name}
                    >
                      <social.icon className="afro-social-icon" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key} className="afro-links-section">
                  <h4>{section.title}</h4>
                  <ul className="afro-links-list">
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
      <div className="afro-footer-border">
        <div className="afro-footer-container">
          <div className="afro-footer-content">
            <div className="afro-bottom-bar">
              <div className="afro-bottom-content">
                <div className="afro-copyright">
                  © 2025 THE BLACK BOOK. Tous droits réservés.
                </div>
                
                <div className="afro-bottom-right">
                  <span className="afro-made-with-love">
                    Fait avec <span className="afro-heart">❤</span> pour la diaspora africaine
                  </span>
                  <div className="afro-status">
                    <div className="afro-status-dot"></div>
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