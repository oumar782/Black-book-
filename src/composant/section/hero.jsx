import { useState, useEffect, useRef } from 'react';
import heroImage from '../../assets/hero-image.webp';
import './hero.css';
const Hero = () => {
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
    <section className="hero-section">
      <div className="hero-background">
        <img
          src={heroImage}
          alt="Femme africaine lisant, symbole d'éducation et de culture"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-text-content">
            <div className="hero-badge">
              <span>✨ Plateforme éducative & culturelle</span>
            </div>

            <div className="hero-title-section">
              <h1 className="hero-title">
                <span className="hero-title-main">Reconnecte-toi</span>
                <br />
                <span className="hero-title-typed">
                  {typedText}
                  <span className="typing-cursor">|</span>
                </span>
              </h1>
              
              <p className="hero-description">
                Découvre une bibliothèque de ressources premium, participe à des événements inspirants 
                et connecte-toi avec une communauté passionnée par la culture africaine.
              </p>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary">
                Découvrir les ressources
                <span className="btn-arrow">→</span>
              </button>
              
              <button className="btn btn-secondary">
                Regarder la démo
              </button>
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">
                    <div className="stat-icon-inner"></div>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container">
              <div className="floating-circle circle-1"></div>
              <div className="floating-circle circle-2"></div>
              <div className="floating-circle circle-3"></div>
              <div className="pulse-ring ring-1"></div>
              <div className="pulse-ring ring-2"></div>
              <div className="pulse-ring ring-3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Découvrir</span>
        <div className="scroll-arrow">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;