import { useState, useEffect, useRef } from 'react';
import heroImage from '../../assets/hero-image.webp';
import './hero.css';

const HeroPremium = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeedRef = useRef(150);
  const deletingSpeedRef = useRef(100);
  
  const texts = [
    "à ton héritage",
    "à tes racines",
    "à ta culture"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      
      if (isDeleting) {
        setTypedText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        typingSpeedRef.current = deletingSpeedRef.current;
      } else {
        setTypedText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        typingSpeedRef.current = 150;
      }

      if (!isDeleting && currentIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeedRef.current);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, texts]);

  const stats = [
    { label: 'Ressources disponibles', value: '500+' },
    { label: 'Membres actifs', value: '2K+' },
    { label: 'Certificats délivrés', value: '150+' },
  ];

  return (
    <section className="hero-premium-section">
      <div className="hero-premium-background">
        <img
          src={heroImage}
          alt="Femme africaine lisant, symbole d'éducation et de culture"
          className="hero-premium-image"
        />
        <div className="hero-premium-overlay"></div>
        <div className="hero-premium-gradient"></div>
      </div>

      <div className="hero-premium-content">
        <div className="hero-premium-grid">
          <div className="hero-premium-text-content">
            <div className="hero-premium-badge">
              <span> Plateforme éducative & culturelle</span>
            </div>

            <div className="hero-premium-title-section">
              <h1 className="hero-premium-title">
                <span className="hero-premium-title-main">Reconnecte-toi</span>
                <br />
                <span className="hero-premium-title-typed">
                  {typedText}
                  <span className="hero-premium-typing-cursor">|</span>
                </span>
              </h1>
              
              <p className="hero-premium-description">
                Découvre une bibliothèque de ressources premium, participe à des événements inspirants 
                et connecte-toi avec une communauté passionnée par la culture africaine.
              </p>
            </div>

            <div className="hero-premium-actions">
              <button className="hero-premium-btn hero-premium-btn-primary">
                Découvrir les ressources
                <span className="hero-premium-btn-arrow">→</span>
              </button>
              
              <button className="hero-premium-btn hero-premium-btn-secondary">
                Regarder la démo
              </button>
            </div>

            <div className="hero-premium-stats">
              {stats.map((stat, index) => (
                <div key={index} className="hero-premium-stat-item">
                  <div className="hero-premium-stat-icon">
                    <div className="hero-premium-stat-icon-inner"></div>
                  </div>
                  <div className="hero-premium-stat-value">{stat.value}</div>
                  <div className="hero-premium-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-premium-visual">
            <div className="hero-premium-visual-container">
              <div className="hero-premium-floating-circle hero-premium-circle-1"></div>
              <div className="hero-premium-floating-circle hero-premium-circle-2"></div>
              <div className="hero-premium-floating-circle hero-premium-circle-3"></div>
              <div className="hero-premium-pulse-ring hero-premium-ring-1"></div>
              <div className="hero-premium-pulse-ring hero-premium-ring-2"></div>
              <div className="hero-premium-pulse-ring hero-premium-ring-3"></div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default HeroPremium;