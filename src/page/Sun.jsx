import React, { useState, useEffect, useRef } from 'react';
import { Heart, Users, Sun, Globe, Shield, Star, Quote, ArrowRight, Play, Pause, Volume2, VolumeX, ChevronRight, ChevronLeft, Clock, MapPin, UsersRound, Sparkles, X } from 'lucide-react';
import './sun.css';

const SoleilPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [prayers, setPrayers] = useState([]);
  const [currentPrayer, setCurrentPrayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showParticipationModal, setShowParticipationModal] = useState(false);
  const [participationForm, setParticipationForm] = useState({
    user_name: '',
    user_email: '',
    user_country: '',
    user_message: ''
  });
  const [participating, setParticipating] = useState(false);
  const carouselRef = useRef(null);

  // URLs des APIs
  const API_BASE = 'https://backblack.vercel.app/api';
  const PRAYERS_API = `${API_BASE}/priere`;
  const PARTICIPATIONS_API = `${API_BASE}/participation/`;

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
      icon: <Clock className="soleil-feature-icon" />,
      title: "7 Millions d'Années",
      description: "Histoire humaine préservée en terre africaine",
      color: "var(--soleil-accent-gold)"
    },
    {
      icon: <MapPin className="soleil-feature-icon" />,
      title: "54 Nations",
      description: "Unies par un destin commun et un soleil partagé",
      color: "var(--soleil-accent-orange)"
    },
    {
      icon: <UsersRound className="soleil-feature-icon" />,
      title: "2000+ Cultures",
      description: "Richesse linguistique et traditionnelle unique",
      color: "var(--soleil-accent-red)"
    },
    {
      icon: <Sparkles className="soleil-feature-icon" />,
      title: "Héritage Mélanine",
      description: "Sagesse ancestrale inscrite dans notre essence",
      color: "var(--soleil-accent-sun)"
    }
  ];

  const countries = [
    "Algérie", "Angola", "Bénin", "Botswana", "Burkina Faso", "Burundi", "Cameroun", "Cap-Vert",
    "République Centrafricaine", "Comores", "République Démocratique du Congo", "Congo", "Côte d'Ivoire",
    "Djibouti", "Égypte", "Érythrée", "Eswatini", "Éthiopie", "Gabon", "Gambie", "Ghana", "Guinée",
    "Guinée-Bissau", "Guinée équatoriale", "Kenya", "Lesotho", "Liberia", "Libye", "Madagascar", "Malawi",
    "Mali", "Maroc", "Maurice", "Mauritanie", "Mozambique", "Namibie", "Niger", "Nigeria", "Ouganda",
    "Rwanda", "São Tomé-et-Príncipe", "Sénégal", "Seychelles", "Sierra Leone", "Somalie", "Soudan",
    "Soudan du Sud", "Tanzanie", "Tchad", "Togo", "Tunisie", "Zambie", "Zimbabwe", "Autre"
  ];

  // Charger les prières depuis l'API
  const fetchPrayers = async () => {
    try {
      setLoading(true);
      const response = await fetch(PRAYERS_API);
      if (response.ok) {
        const data = await response.json();
        setPrayers(data);
        if (data.length > 0) {
          setCurrentPrayer(data[0]);
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement des prières:', error);
    } finally {
      setLoading(false);
    }
  };

  // Ouvrir le modal de participation
  const openParticipationModal = () => {
    setShowParticipationModal(true);
  };

  // Fermer le modal
  const closeParticipationModal = () => {
    setShowParticipationModal(false);
    setParticipationForm({
      user_name: '',
      user_email: '',
      user_country: '',
      user_message: ''
    });
  };

  // Gérer les changements du formulaire
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setParticipationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Participer à une prière
  const participateToPrayer = async (e) => {
    e.preventDefault();
    
    try {
      setParticipating(true);
      
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const response = await fetch(PARTICIPATIONS_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prayer_id: currentPrayer.id,
          user_name: participationForm.user_name,
          user_email: participationForm.user_email,
          user_country: participationForm.user_country,
          user_message: participationForm.user_message,
          timezone: timezone
        })
      });

      if (response.ok) {
        const participation = await response.json();
        alert('🙏 Merci pour votre participation ! Votre prière a été enregistrée.');
        closeParticipationModal();
      } else {
        const error = await response.json();
        alert(`❌ ${error.error || 'Erreur lors de la participation'}`);
      }
    } catch (error) {
      console.error('Erreur participation:', error);
      alert('❌ Erreur de connexion au serveur');
    } finally {
      setParticipating(false);
    }
  };

  // Changer de prière
  const selectPrayer = (prayer) => {
    setCurrentPrayer(prayer);
  };

  useEffect(() => {
    setIsVisible(true);
    fetchPrayers();
    
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
    <div className={`soleil-container ${isVisible ? 'soleil-visible' : ''}`}>
    
      {/* Hero Carousel Cinématographique */}
      <section className="soleil-hero-carousel" id="section-0">
        <div className="soleil-cosmic-overlay"></div>
        <div className="soleil-carousel-track">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`soleil-carousel-slide ${index === currentSlide ? 'soleil-active' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="soleil-slide-gradient"></div>
              <div className="soleil-particle-field">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="soleil-particle" style={{ '--soleil-particle-delay': `${i * 0.2}s` }}></div>
                ))}
              </div>
              <div className="soleil-slide-content">
                <div className="soleil-content-wrapper">
                  <div className="soleil-title-group">
                    <div className="soleil-title-decoration">
                      <div className="soleil-title-line soleil-left"></div>
                      <div className="soleil-title-ornament"></div>
                      <div className="soleil-title-line soleil-right"></div>
                    </div>
                    <h1 className="soleil-slide-title">
                      <span className="soleil-title-main">{image.title}</span>
                      <span className="soleil-title-accent">{image.subtitle}</span>
                    </h1>
                  </div>
                  
                  <p className="soleil-slide-description">
                    {index === 0 && "Terre sacrée où l'humanité a pris son premier souffle, gardienne des secrets les plus anciens de notre existence commune."}
                    {index === 1 && "Le même soleil qui a vu naître nos ancêtres continue de nous unir dans sa lumière éternelle et bienveillante."}
                    {index === 2 && "La sagesse de ceux qui nous ont précédés résonne à travers les âges, guidant nos pas vers l'unité retrouvée."}
                    {index === 3 && "Dans la riche tapisserie de nos cultures diverses, se tisse l'histoire unique d'un peuple aux racines communes."}
                  </p>

                  <div className="soleil-hero-actions">
                    <button 
                      className="soleil-cta-btn soleil-primary"
                      onClick={() => document.getElementById('section-3').scrollIntoView({ behavior: 'smooth' })}
                    >
                      <div className="soleil-btn-aurora"></div>
                      <span>Commencer la Prière</span>
                      <div className="soleil-btn-sparkle">
                        <Sparkles size={16} />
                      </div>
                    </button>
                    <button className="soleil-cta-btn soleil-secondary">
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
        <div className="soleil-carousel-controls">
          <button className="soleil-control-btn soleil-prev" onClick={prevSlide}>
            <div className="soleil-control-orb"></div>
            <ChevronLeft size={20} />
          </button>
          
          <div className="soleil-pagination">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`soleil-pagination-dot ${index === currentSlide ? 'soleil-active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="soleil-dot-progress"></div>
                <div className="soleil-dot-core"></div>
              </button>
            ))}
          </div>
          
          <button className="soleil-control-btn soleil-next" onClick={nextSlide}>
            <div className="soleil-control-orb"></div>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicateur de défilement Animé */}
        <div className="soleil-scroll-indicator">
          <div className="soleil-scroll-track">
            <div className="soleil-scroll-orb"></div>
          </div>
          <span>Explorer la Sagesse</span>
        </div>
      </section>

      {/* Features Grid avec Animations Avancées */}
      <section className="soleil-features-section" id="section-1">
        <div className="soleil-cosmic-background">
          <div className="soleil-cosmic-orb soleil-large"></div>
          <div className="soleil-cosmic-orb soleil-medium"></div>
          <div className="soleil-cosmic-orb soleil-small"></div>
        </div>
        
        <div className="soleil-container-inner">
          <div className="soleil-section-header">
            <div className="soleil-header-badge">
              <div className="soleil-badge-orb"></div>
              <Star className="soleil-badge-icon" size={20} />
              <span>Notre Essence</span>
            </div>
            <h2 className="soleil-section-title">
              <span className="soleil-title-glow">L'Héritage Africain</span>
            </h2>
            <p className="soleil-section-subtitle">
              Découvrez les piliers fondamentaux de notre identité commune et de notre riche patrimoine
            </p>
          </div>

          <div className="soleil-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="soleil-feature-card" style={{ '--soleil-delay': `${index * 0.1}s` }}>
                <div className="soleil-card-orbital">
                  <div className="soleil-orbital-ring"></div>
                </div>
                <div className="soleil-card-glow" style={{ '--soleil-glow-color': feature.color }}></div>
                <div className="soleil-card-content">
                  <div className="soleil-feature-icon-wrapper" style={{ '--soleil-icon-color': feature.color }}>
                    {feature.icon}
                  </div>
                  <h3 className="soleil-feature-title">{feature.title}</h3>
                  <p className="soleil-feature-description">{feature.description}</p>
                  <div className="soleil-feature-ornament">
                    <div className="soleil-ornament-dot"></div>
                    <div className="soleil-ornament-line"></div>
                    <div className="soleil-ornament-dot"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Principal avec Design Organique */}
      <section className="soleil-message-section" id="section-2">
        <div className="soleil-organic-background">
          <div className="soleil-organic-shape soleil-shape-1"></div>
          <div className="soleil-organic-shape soleil-shape-2"></div>
          <div className="soleil-organic-shape soleil-shape-3"></div>
        </div>
        
        <div className="soleil-container-inner">
          <div className="soleil-message-grid">
            <div className="soleil-message-visual">
              <div className="soleil-sacred-geometry">
                <div className="soleil-geometry-base">
                  <div className="soleil-sun-core">
                    <div className="soleil-core-pulse"></div>
                    <div className="soleil-core-glow"></div>
                    <div className="soleil-core-sparkles">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="soleil-sparkle" style={{ '--soleil-angle': `${i * 30}deg` }}></div>
                      ))}
                    </div>
                  </div>
                  <div className="soleil-geometry-ring soleil-ring-1"></div>
                  <div className="soleil-geometry-ring soleil-ring-2"></div>
                  <div className="soleil-geometry-ring soleil-ring-3"></div>
                </div>
                <div className="soleil-africa-silhouette">
                  <div className="soleil-silhouette-glow"></div>
                </div>
              </div>
            </div>

            <div className="soleil-message-content">
              <div className="soleil-content-header">
                <div className="soleil-title-decoration">
                  <div className="soleil-title-orb"></div>
                  <Sun className="soleil-title-icon" size={28} />
                  <h2>Le Message du Soleil</h2>
                </div>
                <div className="soleil-accent-bar">
                  <div className="soleil-bar-glow"></div>
                </div>
              </div>

              <div className="soleil-message-text">
                <p className="soleil-lead-text">
                  <strong>Le Soleil</strong> c'est une page pour nous rappeler que nous sommes 
                  <span className="soleil-highlight"> un même organisme</span> avec 
                  <span className="soleil-highlight"> un but commun</span>.
                </p>
                
                <div className="soleil-message-points">
                  <div className="soleil-point-item">
                    <div className="soleil-point-marker">
                      <div className="soleil-marker-pulse"></div>
                    </div>
                    <p>
                      Trop de choses nous ont séparé 
                      <em> (religions, cartes, endoctrinement...)</em> 
                      il est temps de <strong>se reconnecter</strong>
                    </p>
                  </div>
                  
                  <div className="soleil-point-item">
                    <div className="soleil-point-marker">
                      <div className="soleil-marker-pulse"></div>
                    </div>
                    <p>
                      À travers ce même <strong>soleil</strong> auquel nos ancêtres 
                      ont déjà répondu par leur <strong>mélanine</strong>
                    </p>
                  </div>
                  
                  <div className="soleil-point-item">
                    <div className="soleil-point-marker">
                      <div className="soleil-marker-pulse"></div>
                    </div>
                    <p>
                      Réponse que la génération vivante donnera à travers 
                      <strong> une prière commune</strong> pour nos 
                      <strong> ancêtres, pour nous, et nos héritiers</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="soleil-message-actions">
                <button 
                  className="soleil-action-btn soleil-primary"
                  onClick={() => document.getElementById('section-3').scrollIntoView({ behavior: 'smooth' })}
                >
                  <div className="soleil-btn-orbital"></div>
                  <Heart size={18} />
                  <span>Rejoindre le Cercle</span>
                </button>
                <button className="soleil-action-btn soleil-outline">
                  <Users size={18} />
                  <span>Partager la Lumière</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prières avec Design Sacré */}
      <section className="soleil-prayers-section" id="section-3">
        <div className="soleil-sacred-background">
          <div className="soleil-sacred-pattern"></div>
          <div className="soleil-sacred-glow"></div>
        </div>
        
        <div className="soleil-container-inner">
          <div className="soleil-section-header">
            <div className="soleil-header-badge">
              <div className="soleil-badge-orb"></div>
              <Quote className="soleil-badge-icon" size={20} />
              <span>Prières Sacrées</span>
            </div>
            <h2 className="soleil-section-title">
              <span className="soleil-title-glow">Invocation d'Unité</span>
            </h2>
            <p className="soleil-section-subtitle">
              Des paroles qui transcendent le temps pour célébrer notre connexion divine
            </p>
          </div>

          {loading ? (
            <div className="soleil-loading-prayer">
              <div className="soleil-prayer-loading-spinner"></div>
              <p>Chargement des prières sacrées...</p>
            </div>
          ) : currentPrayer ? (
            <div className="soleil-prayers-display">
              <div className="soleil-prayer-main">
                <div className="soleil-prayer-card">
                  <div className="soleil-card-aura"></div>
                  <div className="soleil-card-header">
                    <div className="soleil-prayer-badge">
                      <Shield size={18} />
                      <span>{currentPrayer.category || 'Prière Sacrée'}</span>
                    </div>
                    <div className="soleil-prayer-meta">
                      <span className="soleil-meta-item">{currentPrayer.type || 'Prière'}</span>
                      <span className="soleil-meta-item">{currentPrayer.duration} min</span>
                    </div>
                  </div>

                  <div className="soleil-prayer-content">
                    <h3 className="soleil-prayer-title">{currentPrayer.title}</h3>
                    <div className="soleil-prayer-text">
                      {currentPrayer.content.split('\n').map((line, index) => (
                        <p key={index} className="soleil-prayer-line">{line}</p>
                      ))}
                    </div>

                    <div className="soleil-prayer-seal">
                      <div className="soleil-seal-container">
                        <div className="soleil-seal-ring"></div>
                        <div className="soleil-seal-circle">
                          <span className="soleil-seal-text">Ase</span>
                        </div>
                      </div>
                      <p className="soleil-seal-meaning">Que la parole porte fruit</p>
                    </div>
                  </div>

                  <div className="soleil-prayer-actions">
                    <button 
                      className="soleil-ritual-btn soleil-large"
                      onClick={openParticipationModal}
                    >
                      <div className="soleil-btn-orbital"></div>
                      <Sun size={18} />
                      <span>Participer à cette Prière</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="soleil-prayer-sidebar">
                <div className="soleil-sidebar-card">
                  <div className="soleil-card-aura"></div>
                  <h4>Autres Prières</h4>
                  <div className="soleil-prayer-list">
                    {prayers.map((prayer) => (
                      <button 
                        key={prayer.id} 
                        className={`soleil-prayer-item ${currentPrayer.id === prayer.id ? 'soleil-active' : ''}`}
                        onClick={() => selectPrayer(prayer)}
                      >
                        <div className="soleil-item-orb"></div>
                        <div className="soleil-item-icon">
                          <Star size={14} />
                        </div>
                        <span>{prayer.title}</span>
                        <ChevronRight size={14} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="soleil-ritual-info">
                  <div className="soleil-ritual-header">
                    <Clock size={18} />
                    <span>Cérémonie du Soleil</span>
                  </div>
                  <p>Rejoignez-nous chaque aube pour la prière commune</p>
                  <button 
                    className="soleil-ritual-btn"
                    onClick={openParticipationModal}
                  >
                    <div className="soleil-btn-orbital"></div>
                    <span>Participer Maintenant</span>
                    <Sun size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="soleil-no-prayers">
              <p>Aucune prière disponible pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal de Participation */}
      {showParticipationModal && (
        <div className="soleil-modal-overlay">
          <div className="soleil-participation-modal">
            <div className="soleil-modal-header">
              <h3>Participer à la Prière</h3>
              <button className="soleil-modal-close" onClick={closeParticipationModal}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={participateToPrayer} className="soleil-participation-form">
              <div className="soleil-form-group">
                <label htmlFor="user_name">Votre Nom Complet *</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={participationForm.user_name}
                  onChange={handleFormChange}
                  required
                  placeholder="Entrez votre nom complet"
                />
              </div>

              <div className="soleil-form-group">
                <label htmlFor="user_email">Votre Email *</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={participationForm.user_email}
                  onChange={handleFormChange}
                  required
                  placeholder="Entrez votre email"
                />
              </div>

              <div className="soleil-form-group">
                <label htmlFor="user_country">Votre Pays</label>
                <select
                  id="user_country"
                  name="user_country"
                  value={participationForm.user_country}
                  onChange={handleFormChange}
                >
                  <option value="">Sélectionnez votre pays</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div className="soleil-form-group">
                <label htmlFor="user_message">Votre Message (Optionnel)</label>
                <textarea
                  id="user_message"
                  name="user_message"
                  value={participationForm.user_message}
                  onChange={handleFormChange}
                  rows="4"
                  placeholder="Partagez un message, une intention ou une dédicace..."
                />
              </div>

              <div className="soleil-form-actions">
                <button 
                  type="button" 
                  className="soleil-btn-outline"
                  onClick={closeParticipationModal}
                >
                  Annuler
                </button>
                <button 
                  type="submit" 
                  className="soleil-btn-primary"
                  disabled={participating}
                >
                  {participating ? (
                    <>
                      <div className="soleil-prayer-loading-spinner soleil-small"></div>
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <Heart size={16} />
                      Confirmer la Participation
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CTA Final Épique */}
      <section className="soleil-cta-final">
        <div className="soleil-epic-background">
          <div className="soleil-epic-glow"></div>
          <div className="soleil-epic-particle-field">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="soleil-epic-particle" style={{ '--soleil-epic-delay': `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="soleil-container-inner">
          <div className="soleil-cta-content">
            <div className="soleil-cta-badge">
              <div className="soleil-badge-orbital"></div>
              <Sparkles size={20} />
              <span>Rejoignez le Mouvement</span>
            </div>
            
            <h2 className="soleil-cta-title">
              Ensemble, sous le même <span className="soleil-accent">Soleil</span>
            </h2>
            
            <p className="soleil-cta-description">
              Devenez gardien de la tradition et artisan de l'unité africaine. 
              Votre lumière compte dans ce cercle sacré.
            </p>

            <div className="soleil-cta-actions">
              <button 
                className="soleil-cta-btn soleil-primary soleil-large"
                onClick={() => document.getElementById('section-3').scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="soleil-btn-aurora-large"></div>
                <Sun size={20} />
                <span>Commencer le Voyage</span>
                <div className="soleil-btn-sparkle-group">
                  <Sparkles size={14} />
                  <Sparkles size={14} />
                  <Sparkles size={14} />
                </div>
              </button>
              
              <button className="soleil-cta-btn soleil-outline">
                <span>Découvrir les Traditions</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="soleil-community-stats">
              {[
                { number: '10K+', label: 'Âmes Unies' },
                { number: '54', label: 'Nations Représentées' },
                { number: '7M', label: 'Ans d\'Héritage' }
              ].map((stat, index) => (
                <div key={index} className="soleil-stat">
                  <div className="soleil-stat-orb"></div>
                  <div className="soleil-stat-number">{stat.number}</div>
                  <div className="soleil-stat-label">{stat.label}</div>
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