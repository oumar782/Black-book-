import React, { useState, useEffect, useRef } from 'react';
import { Heart, Users, Sun, Globe, Shield, Star, Quote, ArrowRight, Play, Pause, Volume2, VolumeX, ChevronRight, ChevronLeft, Clock, MapPin, UsersRound, Sparkles } from 'lucide-react';
import './sun.css';

const SoleilPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const carouselRef = useRef(null);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Terre Sacrée',
      subtitle: 'Berceau de l\'Humanité'
    },
    {
      url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Soleil Éternel',
      subtitle: 'Source de Vie et d\'Unité'
    },
    {
      url: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Ancêtres Sages',
      subtitle: 'Notre Héritage Commun'
    },
    {
      url: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'Cultures Unies',
      subtitle: 'Diversité dans l\'Harmonie'
    }
  ];

  const features = [
    {
      icon: <Clock className="feature-icon" />,
      title: "7 Millions d'Années",
      description: "Histoire humaine préservée en terre africaine",
      color: "var(--accent-gold)"
    },
    {
      icon: <MapPin className="feature-icon" />,
      title: "54 Nations",
      description: "Unies par un destin commun et un soleil partagé",
      color: "var(--accent-orange)"
    },
    {
      icon: <UsersRound className="feature-icon" />,
      title: "2000+ Cultures",
      description: "Richesse linguistique et traditionnelle unique",
      color: "var(--accent-red)"
    },
    {
      icon: <Sparkles className="feature-icon" />,
      title: "Héritage Mélanine",
      description: "Sagesse ancestrale inscrite dans notre essence",
      color: "var(--accent-sun)"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className={`africa-premium ${isVisible ? 'visible' : ''}`}>
    

      {/* Hero Carousel Cinématographique */}
      <section className="hero-carousel" id="section-0">
        <div className="cosmic-overlay"></div>
        <div className="carousel-track">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="slide-gradient"></div>
              <div className="particle-field">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="particle" style={{ '--particle-delay': `${i * 0.2}s` }}></div>
                ))}
              </div>
              <div className="slide-content">
                <div className="content-wrapper">
                  <div className="title-group">
                    <div className="title-decoration">
                      <div className="title-line left"></div>
                      <div className="title-ornament"></div>
                      <div className="title-line right"></div>
                    </div>
                    <h1 className="slide-title">
                      <span className="title-main">{image.title}</span>
                      <span className="title-accent">{image.subtitle}</span>
                    </h1>
                  </div>
                  
                  <p className="slide-description">
                    {index === 0 && "Terre sacrée où l'humanité a pris son premier souffle, gardienne des secrets les plus anciens de notre existence commune."}
                    {index === 1 && "Le même soleil qui a vu naître nos ancêtres continue de nous unir dans sa lumière éternelle et bienveillante."}
                    {index === 2 && "La sagesse de ceux qui nous ont précédés résonne à travers les âges, guidant nos pas vers l'unité retrouvée."}
                    {index === 3 && "Dans la riche tapisserie de nos cultures diverses, se tisse l'histoire unique d'un peuple aux racines communes."}
                  </p>

                  <div className="hero-actions">
                    <button className="cta-btn primary">
                      <div className="btn-aurora"></div>
                      <span>Commencer la Prière</span>
                      <div className="btn-sparkle">
                        <Sparkles size={16} />
                      </div>
                    </button>
                    <button className="cta-btn secondary">
                      <span>Découvrir l'Héritage</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contrôles Élégants */}
        <div className="carousel-controls">
          <button className="control-btn prev" onClick={prevSlide}>
            <div className="control-orb"></div>
            <ChevronLeft size={20} />
          </button>
          
          <div className="pagination">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="dot-progress"></div>
                <div className="dot-core"></div>
              </button>
            ))}
          </div>
          
          <button className="control-btn next" onClick={nextSlide}>
            <div className="control-orb"></div>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicateur de défilement Animé */}
        <div className="scroll-indicator">
          <div className="scroll-track">
            <div className="scroll-orb"></div>
          </div>
          <span>Explorer la Sagesse</span>
        </div>
      </section>

      {/* Features Grid avec Animations Avancées */}
      <section className="features-section" id="section-1">
        <div className="cosmic-background">
          <div className="cosmic-orb large"></div>
          <div className="cosmic-orb medium"></div>
          <div className="cosmic-orb small"></div>
        </div>
        
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <div className="badge-orb"></div>
              <Star className="badge-icon" size={20} />
              <span>Notre Essence</span>
            </div>
            <h2 className="section-title">
              <span className="title-glow">L'Héritage Africain</span>
            </h2>
            <p className="section-subtitle">
              Découvrez les piliers fondamentaux de notre identité commune et de notre riche patrimoine
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="card-orbital">
                  <div className="orbital-ring"></div>
                </div>
                <div className="card-glow" style={{ '--glow-color': feature.color }}></div>
                <div className="card-content">
                  <div className="feature-icon-wrapper" style={{ '--icon-color': feature.color }}>
                 
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <div className="feature-ornament">
                    <div className="ornament-dot"></div>
                    <div className="ornament-line"></div>
                    <div className="ornament-dot"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Principal avec Design Organique */}
      <section className="message-section" id="section-2">
        <div className="organic-background">
          <div className="organic-shape shape-1"></div>
          <div className="organic-shape shape-2"></div>
          <div className="organic-shape shape-3"></div>
        </div>
        
        <div className="container">
          <div className="message-grid">
            <div className="message-visual">
              <div className="sacred-geometry">
                <div className="geometry-base">
                  <div className="sun-core">
                    <div className="core-pulse"></div>
                    <div className="core-glow"></div>
                    <div className="core-sparkles">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="sparkle" style={{ '--angle': `${i * 30}deg` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="geometry-ring ring-1"></div>
                  <div className="geometry-ring ring-2"></div>
                  <div className="geometry-ring ring-3"></div>
                </div>
                <div className="africa-silhouette">
                  <div className="silhouette-glow"></div>
                </div>
              </div>
            </div>

            <div className="message-content">
              <div className="content-header">
                <div className="title-decoration">
                  <div className="title-orb"></div>
                  <Sun className="title-icon" size={28} />
                  <h2>Le Message du Soleil</h2>
                </div>
                <div className="accent-bar">
                  <div className="bar-glow"></div>
                </div>
              </div>

              <div className="message-text">
                <p className="lead-text">
                  <strong>Le Soleil</strong> c'est une page pour nous rappeler que nous sommes 
                  <span className="highlight"> un même organisme</span> avec 
                  <span className="highlight"> un but commun</span>.
                </p>
                
                <div className="message-points">
                  <div className="point-item">
                    <div className="point-marker">
                      <div className="marker-pulse"></div>
                    </div>
                    <p>
                      Trop de choses nous ont séparé 
                      <em> (religions, cartes, endoctrinement...)</em> 
                      il est temps de <strong>se reconnecter</strong>
                    </p>
                  </div>
                  
                  <div className="point-item">
                    <div className="point-marker">
                      <div className="marker-pulse"></div>
                    </div>
                    <p>
                      À travers ce même <strong>soleil</strong> auquel nos ancêtres 
                      ont déjà répondu par leur <strong>mélanine</strong>
                    </p>
                  </div>
                  
                  <div className="point-item">
                    <div className="point-marker">
                      <div className="marker-pulse"></div>
                    </div>
                    <p>
                      Réponse que la génération vivante donnera à travers 
                      <strong> une prière commune</strong> pour nos 
                      <strong> ancêtres, pour nous, et nos héritiers</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="message-actions">
                <button className="action-btn primary">
                  <div className="btn-orbital"></div>
                  <Heart size={18} />
                  <span>Rejoindre le Cercle</span>
                </button>
                <button className="action-btn outline">
                  <Users size={18} />
                  <span>Partager la Lumière</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prières avec Design Sacré */}
      <section className="prayers-section" id="section-3">
        <div className="sacred-background">
          <div className="sacred-pattern"></div>
          <div className="sacred-glow"></div>
        </div>
        
        <div className="container">
          <div className="section-header">
            <div className="header-badge">
              <div className="badge-orb"></div>
              <Quote className="badge-icon" size={20} />
              <span>Prières Sacrées</span>
            </div>
            <h2 className="section-title">
              <span className="title-glow">Invocation d'Unité</span>
            </h2>
            <p className="section-subtitle">
              Des paroles qui transcendent le temps pour célébrer notre connexion divine
            </p>
          </div>

          <div className="prayers-display">
            <div className="prayer-main">
              <div className="prayer-card">
                <div className="card-aura"></div>
                <div className="card-header">
                  <div className="prayer-badge">
                    <Shield size={18} />
                    <span>Hymne à la Terre</span>
                  </div>
                  <div className="prayer-meta">
                    <span className="meta-item">Prière Sacrée</span>
                    <span className="meta-item">Cérémonie d'Unité</span>
                  </div>
                </div>

                <div className="prayer-content">
                  <div className="prayer-text">
                    <p className="prayer-line">Ô Terre d'Afrique, souffle ancien et jeune à la fois,</p>
                    <p className="prayer-line">De tes collines aux déserts, des fleuves aux forêts,</p>
                    <p className="prayer-line">Ton cœur bat dans chaque pas de tes enfants.</p>
                    
                    <div className="prayer-break">
                      <div className="break-ornament"></div>
                    </div>
                    
                    <p className="prayer-line">Nous venons de mille langues, mais nos voix t'appellent en un seul chant.</p>
                    <p className="prayer-line">Nous portons des noms différents, mais notre sang coule du même soleil.</p>
                    
                    <div className="prayer-break">
                      <div className="break-ornament"></div>
                    </div>
                    
                    <p className="prayer-line">Que l'aube trouve nos mains unies,</p>
                    <p className="prayer-line">Que le midi nous trouve au travail,</p>
                    <p className="prayer-line">Que le soir nous trouve en paix.</p>
                  </div>

                  <div className="prayer-seal">
                    <div className="seal-container">
                      <div className="seal-ring"></div>
                      <div className="seal-circle">
                        <span className="seal-text">Ase</span>
                      </div>
                    </div>
                    <p className="seal-meaning">Que la parole porte fruit</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prayer-sidebar">
              <div className="sidebar-card">
                <div className="card-aura"></div>
                <h4>Autres Prières</h4>
                <div className="prayer-list">
                  {['Afrique Debout', 'Invocation de Protection', 'Hymne aux Ancêtres', 'Chant d\'Unité'].map((prayer, index) => (
                    <button key={index} className="prayer-item">
                      <div className="item-orb"></div>
                      <div className="item-icon">
                        <Star size={14} />
                      </div>
                      <span>{prayer}</span>
                      <ChevronRight size={14} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="ritual-info">
                <div className="ritual-header">
                  <Clock size={18} />
                  <span>Cérémonie du Soleil</span>
                </div>
                <p>Rejoignez-nous chaque aube pour la prière commune</p>
                <button className="ritual-btn">
                  <div className="btn-orbital"></div>
                  <span>Participer</span>
                  <Sun size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Épique */}
      <section className="cta-final">
        <div className="epic-background">
          <div className="epic-glow"></div>
          <div className="epic-particle-field">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="epic-particle" style={{ '--epic-delay': `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <div className="badge-orbital"></div>
              <Sparkles size={20} />
              <span>Rejoignez le Mouvement</span>
            </div>
            
            <h2 className="cta-title">
              Ensemble, sous le même <span className="accent">Soleil</span>
            </h2>
            
            <p className="cta-description">
              Devenez gardien de la tradition et artisan de l'unité africaine. 
              Votre lumière compte dans ce cercle sacré.
            </p>

            <div className="cta-actions">
              <button className="cta-btn primary large">
                <div className="btn-aurora-large"></div>
                <Sun size={20} />
                <span>Commencer le Voyage</span>
                <div className="btn-sparkle-group">
                  <Sparkles size={14} />
                  <Sparkles size={14} />
                  <Sparkles size={14} />
                </div>
              </button>
              
              <button className="cta-btn outline">
                <span>Découvrir les Traditions</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="community-stats">
              {[
                { number: '10K+', label: 'Âmes Unies' },
                { number: '54', label: 'Nations Représentées' },
                { number: '7M', label: 'Ans d\'Héritage' }
              ].map((stat, index) => (
                <div key={index} className="stat">
                  <div className="stat-orb"></div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default SoleilPage;