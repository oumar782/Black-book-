import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Youtube, Facebook, ArrowRight, Shield, MapPin, Phone, Globe, Heart } from 'lucide-react';
import logo from '../assets/black.webp';

const Footer = () => {
  const footerLinks = {
    platform: {
      title: "Plateforme",
      links: [
        { name: "The Apex", href: "/apex" },
        { name: "Événements", href: "/evenements" },
        { name: "Défis", href: "/defis" },
        { name: "The Sun", href: "/the-sun" },
      ]
    },
    exploration: {
      title: "Exploration", 
      links: [
        { name: "Musée", href: "/Musée" },
        { name: "Tourisme", href: "/tourisme" },
        { name: "Lada", href: "/lada" },
        { name: "Caméléon", href: "/cameleon" },
      ]
    },
    company: {
      title: "Entreprise",
      links: [
        { name: "Mot du Promoteur", href: "/Mot-du-promotteur" },
        { name: "Notre Mission", href: "/À-propos" },
        { name: "Équipe", href: "/equipe" },
        { name: "Carrières", href: "/carrieres" },
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "/help" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Politique", href: "/privacy" },
      ]
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/theblackbook' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/theblackbook' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/theblackbook' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/theblackbook' },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Dakar, Sénégal", href: "#", external: false },
    { icon: Phone, text: "+221 33 800 0000", href: "tel:+221338000000", external: true },
    { icon: Mail, text: "contact@theblackbook.com", href: "mailto:contact@theblackbook.com", external: true },
    { icon: Globe, text: "www.theblackbook.com", href: "https://theblackbook.com", external: true },
  ];

  return (
    <>
      <style jsx>{`
        /* Styles de base */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #fff;
        }

        /* Footer Premium */
        .footer-premium {
          background: linear-gradient(180deg, #0A0A0A 0%, #141414 100%);
          border-top: 1px solid rgba(226, 88, 34, 0.3);
          width: 100%;
          margin: 0;
          padding: 0;
          position: relative;
          overflow: hidden;
        }

        .footer-premium-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* Newsletter Section */
        .footer-premium-newsletter {
          padding: 80px 0;
          width: 100%;
          position: relative;
        }

        .footer-premium-newsletter-grid {
          display: grid;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .footer-premium-newsletter-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 80px;
          }
        }

        .footer-premium-newsletter-content {
          position: relative;
        }

        .footer-premium-newsletter-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(226, 88, 34, 0.1);
          border: 1.5px solid rgba(226, 88, 34, 0.3);
          padding: 10px 24px;
          border-radius: 50px;
          margin-bottom: 28px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .footer-premium-newsletter-badge:hover {
          background: rgba(226, 88, 34, 0.15);
          transform: translateY(-2px);
        }

        .footer-premium-newsletter-badge span {
          color: #e25822;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .footer-premium-newsletter-title {
          font-weight: 800;
          font-size: 42px;
          color: #f5f5f5;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .footer-premium-gradient {
          background: linear-gradient(135deg, #E25822, #F9A825);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-premium-newsletter-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          line-height: 1.6;
          max-width: 500px;
          margin-bottom: 36px;
          font-weight: 400;
        }

        .footer-premium-form-container {
          position: relative;
          max-width: 500px;
        }

        .footer-premium-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .footer-premium-form {
            flex-direction: row;
          }
        }

        .footer-premium-input-wrapper {
          position: relative;
          flex: 1;
        }

        .footer-premium-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(226, 88, 34, 0.3);
          color: #f5f5f5;
          padding: 16px 24px;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          font-weight: 500;
        }

        .footer-premium-input::placeholder {
          color: #737373;
          font-weight: 400;
        }

        .footer-premium-input:focus {
          outline: none;
          border-color: #E25822;
          box-shadow: 0 0 0 3px rgba(226, 88, 34, 0.1);
          background: rgba(226, 88, 34, 0.05);
        }

        .footer-premium-button {
          background: linear-gradient(135deg, #E25822, #F9A825);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(226, 88, 34, 0.3);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          font-size: 16px;
          letter-spacing: 0.5px;
        }

        .footer-premium-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(226, 88, 34, 0.5);
          background: linear-gradient(135deg, #D44A1A, #F9A825);
        }

        .footer-premium-button-arrow {
          transition: transform 0.3s ease;
        }

        .footer-premium-button:hover .footer-premium-button-arrow {
          transform: translateX(4px);
        }

        .footer-premium-disclaimer {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          max-width: 500px;
          margin-top: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 400;
        }

        .footer-premium-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-premium-orb {
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(226, 88, 34, 0.1), transparent);
          border: 2px solid rgba(226, 88, 34, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: footerPremiumOrbGlow 3s ease-in-out infinite;
          position: relative;
        }

        @keyframes footerPremiumOrbGlow {
          0%, 100% { 
            box-shadow: 0 0 40px rgba(226, 88, 34, 0.3); 
          }
          50% { 
            box-shadow: 0 0 60px rgba(226, 88, 34, 0.5); 
          }
        }

        .footer-premium-orb::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: linear-gradient(45deg, transparent, rgba(226, 88, 34, 0.2), transparent);
          animation: footerPremiumRotate 20s linear infinite;
          z-index: -1;
        }

        @keyframes footerPremiumRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .footer-premium-icon {
          width: 60px;
          height: 60px;
          color: #E25822;
        }

        /* Main Footer Content */
        .footer-premium-main {
          padding: 80px 0;
          width: 100%;
        }

        .footer-premium-grid {
          display: grid;
          gap: 48px;
        }

        @media (min-width: 1024px) {
          .footer-premium-grid {
            grid-template-columns: 1.5fr repeat(4, 1fr);
            gap: 64px;
          }
        }

        .footer-premium-brand {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .footer-premium-logo-container {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          text-decoration: none;
        }

        .footer-premium-logo-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-premium-logo-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #E25822, #F9A825);
          border-radius: 14px;
          opacity: 0;
          transition: all 0.4s ease;
          box-shadow: 0 0 0 1px rgba(226, 88, 34, 0.1), 0 4px 20px rgba(226, 88, 34, 0.2);
        }

        .footer-premium-logo-img {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
          filter: brightness(1.1) drop-shadow(0 2px 8px rgba(226, 88, 34, 0.3));
          object-fit: cover;
        }

        .footer-premium-logo-container:hover .footer-premium-logo-background {
          opacity: 1;
          transform: scale(1.1) rotate(5deg);
        }

        .footer-premium-logo-container:hover .footer-premium-logo-img {
          transform: scale(1.05) rotate(-5deg);
        }

        .footer-premium-logo-text {
          font-weight: 800;
          font-size: 24px;
          color: white;
          display: flex;
          align-items: center;
          letter-spacing: -0.5px;
          line-height: 1.1;
       white-space: nowrap; /* Ajouté pour éviter le retour à la ligne */

        }

        .footer-premium-logo-text-main {
          color: #e0e0e0;
          opacity: 0.9;
          font-weight: 700;
        }

        .footer-premium-logo-gradient {
          background: linear-gradient(135deg, #E25822, #F9A825);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
            white-space: nowrap; /* Ajouté pour éviter le retour à la ligne */
        }

        .footer-premium-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 16px;
          max-width: 400px;
          font-weight: 400;
        }

        /* Contact Info */
        .footer-premium-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0;
        }

        .footer-premium-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 15px;
          font-weight: 400;
        }

        .footer-premium-contact-item:hover {
          color: #E25822;
          transform: translateX(5px);
        }

        .footer-premium-contact-icon {
          width: 18px;
          height: 18px;
          color: #E25822;
        }

        /* Social Links */
        .footer-premium-social {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .footer-premium-social-link {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(226, 88, 34, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .footer-premium-social-link:hover {
          background: rgba(226, 88, 34, 0.1);
          border-color: rgba(226, 88, 34, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(226, 88, 34, 0.2);
        }

        .footer-premium-social-icon {
          width: 20px;
          height: 20px;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .footer-premium-social-link:hover .footer-premium-social-icon {
          color: #E25822;
          transform: scale(1.1);
        }

        /* Links Sections */
        .footer-premium-links-section h4 {
          font-weight: 700;
          color: #f5f5f5;
          margin-bottom: 24px;
          font-size: 18px;
          letter-spacing: 0.5px;
        }

        .footer-premium-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-premium-links-list a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
          padding: 8px 0;
          position: relative;
          display: inline-block;
          font-weight: 400;
        }

        .footer-premium-links-list a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #E25822, #F9A825);
          transition: width 0.3s ease;
        }

        .footer-premium-links-list a:hover {
          color: #E25822;
          transform: translateX(8px);
        }

        .footer-premium-links-list a:hover::before {
          width: 24px;
        }

        /* Bottom Bar */
        .footer-premium-bottom {
          border-top: 1px solid rgba(226, 88, 34, 0.2);
          padding: 40px 0;
          width: 100%;
        }

        .footer-premium-bottom-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-premium-bottom-content {
            flex-direction: row;
            text-align: left;
            gap: 0;
          }
        }

        .footer-premium-copyright {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 400;
        }

        .footer-premium-bottom-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-premium-status {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E25822;
          font-size: 14px;
          background: rgba(226, 88, 34, 0.1);
          padding: 10px 20px;
          border-radius: 25px;
          border: 1px solid rgba(226, 88, 34, 0.2);
          font-weight: 500;
        }

        .footer-premium-status-dot {
          width: 8px;
          height: 8px;
          background-color: #22c55e;
          border-radius: 50%;
          animation: footerPremiumPulse 2s infinite;
        }

        @keyframes footerPremiumPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .footer-premium-made-with {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 400;
        }

        .footer-premium-heart {
          color: #E25822;
          animation: footerPremiumHeartbeat 1.5s ease-in-out infinite;
        }

        @keyframes footerPremiumHeartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        /* Legal Links */
        .footer-premium-legal {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 16px;
        }

        @media (min-width: 768px) {
          .footer-premium-legal {
            margin-top: 0;
            justify-content: flex-end;
          }
        }

        .footer-premium-legal-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          font-weight: 400;
        }

        .footer-premium-legal-link:hover {
          color: #E25822;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-premium-container {
            padding: 0 20px;
          }
          
          .footer-premium-newsletter {
            padding: 60px 0;
          }
          
          .footer-premium-newsletter-title {
            font-size: 36px;
          }
          
          .footer-premium-main {
            padding: 60px 0;
          }
          
          .footer-premium-grid {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .footer-premium-newsletter {
            padding: 40px 0;
          }
          
          .footer-premium-newsletter-title {
            font-size: 32px;
          }
          
          .footer-premium-newsletter-text {
            font-size: 16px;
            margin-bottom: 28px;
          }
          
          .footer-premium-newsletter-grid {
            gap: 40px;
          }
          
          .footer-premium-main {
            padding: 40px 0;
          }
          
          .footer-premium-orb {
            width: 220px;
            height: 220px;
          }
          
          .footer-premium-icon {
            width: 48px;
            height: 48px;
          }
          
          .footer-premium-bottom {
            padding: 32px 0;
          }
          
          .footer-premium-bottom-content {
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .footer-premium-container {
            padding: 0 16px;
          }
          
          .footer-premium-newsletter {
            padding: 32px 0;
          }
          
          .footer-premium-newsletter-title {
            font-size: 28px;
          }
          
          .footer-premium-newsletter-text {
            font-size: 15px;
            margin-bottom: 24px;
          }
          
          .footer-premium-newsletter-badge {
            padding: 8px 20px;
            margin-bottom: 20px;
          }
          
          .footer-premium-form {
            flex-direction: column;
          }
          
          .footer-premium-button {
            padding: 14px 24px;
            justify-content: center;
          }
          
          .footer-premium-logo-container {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          
          .footer-premium-logo-text {
            justify-content: center;
          }
          
          .footer-premium-description {
            text-align: center;
          }
          
          .footer-premium-contact {
            align-items: center;
          }
          
          .footer-premium-social {
            justify-content: center;
          }
          
          .footer-premium-links-section {
            text-align: center;
          }
          
          .footer-premium-links-list a:hover {
            transform: translateX(0);
          }
          
          .footer-premium-bottom-right {
            flex-direction: column;
            gap: 16px;
          }
          
          .footer-premium-legal {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer-premium">
        <div className="footer-premium-container">
          {/* Newsletter Section */}
          <div className="footer-premium-newsletter">
            <div className="footer-premium-newsletter-grid">
              <div className="footer-premium-newsletter-content">
                <div className="footer-premium-newsletter-badge">
                  <Mail size={16} />
                  <span>Restez informé</span>
                </div>
                
                <h2 className="footer-premium-newsletter-title">
                  Rejoignez notre <span className="footer-premium-gradient">communauté</span>
                </h2>
                
                <p className="footer-premium-newsletter-text">
                  Recevez les dernières actualités, événements exclusifs et ressources 
                  premium directement dans votre boîte mail. Soyez les premiers informés.
                </p>

                <div className="footer-premium-form-container">
                  <form className="footer-premium-form">
                   
                   
                  </form>
                  
                  <p className="footer-premium-disclaimer">
                    <Shield size={14} />
                    Nous respectons votre vie privée. Désabonnez-vous à tout moment.
                  </p>
                </div>
              </div>

              <div className="footer-premium-visual">
                <div className="footer-premium-orb">
                  <Mail size={40} className="footer-premium-icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="footer-premium-main">
            <div className="footer-premium-grid">
              {/* Brand Section */}
              <div className="footer-premium-brand">
                <Link to="/" className="footer-premium-logo-container">
                  <div className="footer-premium-logo-wrapper">
                    <div className="footer-premium-logo-background"></div>
                    <img src={logo} alt="THE BLACK BOOK" className="footer-premium-logo-img" />
                  </div>
                  <div className="footer-premium-logo-text">
                    <span className="footer-premium-logo-text-main">Afro</span>
                    <span className="footer-premium-logo-gradient">Black Book</span>
                  </div>
                </Link>
                
                <p className="footer-premium-description">
                  Plateforme éducative et culturelle dédiée à la valorisation 
                  de l'héritage africain et de sa diaspora. Ensemble, 
                  construisons un avenir ancré dans nos racines.
                </p>

                {/* Contact Info */}
                <div className="footer-premium-contact">
                  {contactInfo.map((item, index) => (
                    item.external ? (
                      <a
                        key={index}
                        href={item.href}
                        className="footer-premium-contact-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <item.icon size={18} className="footer-premium-contact-icon" />
                        <span>{item.text}</span>
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={item.href}
                        className="footer-premium-contact-item"
                      >
                        <item.icon size={18} className="footer-premium-contact-icon" />
                        <span>{item.text}</span>
                      </Link>
                    )
                  ))}
                </div>

                {/* Social Links */}
                <div className="footer-premium-social">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="footer-premium-social-link"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon size={20} className="footer-premium-social-icon" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([key, section]) => (
                <div key={key} className="footer-premium-links-section">
                  <h4>{section.title}</h4>
                  <ul className="footer-premium-links-list">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link to={link.href}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-premium-bottom">
            <div className="footer-premium-bottom-content">
              <div className="footer-premium-copyright">
                © {new Date().getFullYear()} AFRO BLACK BOOK. Tous droits réservés.
              </div>
              
              <div className="footer-premium-bottom-right">
                <div className="footer-premium-made-with">
                  Fait avec <Heart size={14} className="footer-premium-heart" /> pour la diaspora africaine
                </div>
                <div className="footer-premium-status">
                  <div className="footer-premium-status-dot"></div>
                  <span>Tous les systèmes opérationnels</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="footer-premium-legal">
              <Link to="/privacy" className="footer-premium-legal-link">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="footer-premium-legal-link">
                Conditions d'utilisation
              </Link>
              <Link to="/cookies" className="footer-premium-legal-link">
                Cookies
              </Link>
              <Link to="/legal" className="footer-premium-legal-link">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;