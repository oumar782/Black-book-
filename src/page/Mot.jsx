import { useState, useEffect, useRef } from 'react';
import { Quote, Award, Heart, Target, Users, Globe, Star, ArrowLeft, Play, Linkedin, Twitter, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import founderPhoto from '../assets/cultural-pattern.webp';
import culturalPattern from '../assets/cultural-pattern.webp';
import './mot.css';

const FounderWord = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const achievements = [
    {
      icon: Award,
      value: "15+",
      label: "Années d'expérience"
    },
    {
      icon: Users,
      value: "50K+",
      label: "Vies impactées"
    },
    {
      icon: Globe,
      value: "12+",
      label: "Pays couverts"
    },
    {
      icon: Star,
      value: "25+",
      label: "Prix internationaux"
    }
  ];

  const quotes = [
    {
      text: "Notre héritage n'est pas un poids, mais des ailes qui nous portent vers l'avenir.",
      context: "Conférence UNESCO 2022"
    },
    {
      text: "Chaque enfant africain devrait grandir en connaissant la grandeur de ses origines.",
      context: "TEDx Dakar 2023"
    },
    {
      text: "La culture est le socle sur lequel nous bâtissons notre futur numérique.",
      context: "Sommet de l'Innovation Africaine"
    }
  ];

  return (
    <section ref={sectionRef} className="founder-word-section">
      {/* Navigation */}
      <nav className="founder-word-nav">
        <button 
          className="founder-word-back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
          Retour
        </button>
        <div className="founder-word-nav-logo">
          <span className="logo-text">THE BLACK BOOK</span>
        </div>
      </nav>

      <div className="founder-word-container">
        {/* Hero Section */}
        <div className="founder-word-hero">
          <div className="founder-word-hero-content">
            <div className={`founder-word-badge ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <span className="badge-sparkle"></span>
              Message Fondateur
            </div>

            <h1 className={`founder-word-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
              Une <span className="founder-word-title-gradient">Vision</span> Ancestrale,<br />
              Une <span className="founder-word-title-gradient">Mission</span> Moderne
            </h1>

            <div className={`founder-word-intro ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <p>
                Cher Visiteur,<br />
                Permettez-moi de partager avec vous l'essence même de ce qui a donné naissance à THE BLACK BOOK...
              </p>
            </div>
          </div>

          <div className="founder-word-hero-visual">
            <div className="founder-portrait-container">
              <div className="founder-portrait-wrapper">
                <img
                  src={founderPhoto}
                  alt="Dr. Kwame Nkrumah - Fondateur & Visionnaire"
                  className="founder-portrait"
                />
                <div className="portrait-overlay"></div>
                <div className="portrait-frame"></div>
                <div className="portrait-glow"></div>
              </div>
              
              <div className="founder-badge">
                <div className="founder-badge-content">
                  <Award size={20} />
                  <span>Visionnaire Culturel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="founder-word-content">
          <div className="founder-word-main">
            {/* Signature Section */}
            <div className="founder-signature-section">
              <div className="signature-card">
                <div className="signature-header">
                  <Quote size={32} className="quote-icon" />
                  <h2 className="signature-title">
                    Par <span className="signature-name">Mr. Halid Moussa Maiga</span>
                  </h2>
                  <p className="signature-role">Fondateur & Directeur Visionnaire</p>
                </div>

                <div className="signature-content">
                  <div className="founder-message">
                    <p className="message-paragraph">
                      <strong>C'est au crépuscule de ma carrière académique</strong>, après avoir parcouru les plus prestigieuses universités du monde, 
                      que j'ai réalisé l'urgence absolue de notre mission. J'observais avec inquiétude nos jeunes générations grandir 
                      dans un déficit identitaire criant, tandis que notre riche héritage culturel s'effilochait dans les mémoires.
                    </p>

                    <p className="message-paragraph">
                      <strong>THE BLACK BOOK est né d'une prise de conscience douloureuse</strong> : comment se fait-il que nos enfants 
                      connaissent mieux l'histoire des pharaons égyptiens que celle des royaumes Ashanti, Songhaï ou Kongo ? 
                      Comment expliquer que la philosophie Ubuntu soit si peu enseignée alors qu'elle porte des solutions 
                      aux défis les plus pressants de notre humanité ?
                    </p>

                    <p className="message-paragraph">
                      <strong>Notre plateforme n'est pas simplement un outil éducatif</strong> - c'est un acte de résistance culturelle. 
                      C'est la réponse à des siècles de narration biaisée, à des décennies d'aliénation subtile. 
                      Chaque ressource que nous créons, chaque événement que nous organisons, chaque connexion que nous facilitons 
                      est un pas de plus vers la restauration de notre dignité collective.
                    </p>

                    <div className="message-highlight">
                      <Heart size={24} className="highlight-icon" />
                      <p>
                        <strong>Nous ne préservons pas simplement le passé</strong> - nous activons un futur où chaque enfant africain 
                        pourra puiser dans la sagesse de ses ancêtres pour construire un monde meilleur.
                      </p>
                    </div>

                    <p className="message-paragraph">
                      <strong>Aujourd'hui, je vois cette vision prendre vie</strong> à travers les yeux brillants des jeunes qui découvrent 
                      pour la première fois la complexité mathématique des fractales africaines, la profondeur philosophique 
                      des contes oraux, ou l'ingéniosité des systèmes de gouvernance pré-coloniaux.
                    </p>

                    <p className="message-final">
                      <strong>Rejoignez-nous dans ce voyage de redécouverte</strong>. Ensemble, écrivons le nouveau chapitre 
                      de notre histoire - un chapitre où nous sommes les auteurs principaux de notre propre narration.
                    </p>
                    <div className="signature-block">
                      <div className="signature-line"></div>
                      <p className="signature-text">Avec conviction et espoir,</p>
                      <p className="signature-name-final">Mr. Halid Moussa Maiga</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="founder-achievements-section">
              <div className={`achievements-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
                <h3>Un Parcours Décoré</h3>
                <p>15 années dédiées à la préservation et valorisation du patrimoine culturel africain</p>
              </div>

              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.label}
                    className={`achievement-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="achievement-icon">
                      <achievement.icon size={24} />
                      <div className="achievement-glow"></div>
                    </div>
                    <div className="achievement-value">{achievement.value}</div>
                    <div className="achievement-label">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="founder-word-sidebar">
            {/* Quotes Carousel */}
            <div className="quotes-section">
              <h4>Citations Marquantes</h4>
              <div className="quotes-carousel">
                {quotes.map((quote, index) => (
                  <div
                    key={index}
                    className={`quote-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="quote-content">
                      <Quote size={20} className="quote-mark" />
                      <p className="quote-text">"{quote.text}"</p>
                      <div className="quote-context">{quote.context}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

       

            {/* Video Message */}
            <div className="video-section">
              <div className="video-card">
                <div className="video-thumbnail">
                  <div className="video-play-btn">
                    <Play size={24} fill="currentColor" />
                  </div>
                  <div className="video-overlay">
                    <span>Message Vidéo du Fondateur</span>
                    <p>Regarder le message complet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="founder-word-background">
        <div className="background-pattern pattern-1"></div>
        <div className="background-pattern pattern-2"></div>
        <div className="background-glow glow-1"></div>
        <div className="background-glow glow-2"></div>
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
      </div>
    </section>
  );
};

export default FounderWord;