import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Map, Globe, Star, ArrowRight, Users, Shield, Crown, MapPin, Sparkles } from 'lucide-react';
import './sous.css';

const SouscriptionTourisme = () => {
  const experiences = [
    {
      name: "Voyage Découverte",
      icon: <Compass size={28} />,
      color: "#FF9E2C",
      tagline: "Pour ton premier pas africain",
      highlights: [
        "Itinéraires guidés",
        "Accompagnement local",
        "Expériences authentiques",
        "Communauté voyageurs"
      ],
      bestFor: "Premier voyage en Afrique",
      link: "/passerelle?type=decouverte"
    },
    {
      name: "Voyage Culturel",
      icon: <Map size={28} />,
      color: "#D4AF37",
      tagline: "Pour une immersion profonde",
      popular: true,
      highlights: [
        "Rencontres avec communautés",
        "Ateliers traditionnels",
        "Guides historiens",
        "Expériences exclusives"
      ],
      bestFor: "Immersion culturelle totale",
      link: "/passerelle?type=culturel"
    },
    {
      name: "Voyage Prestige",
      icon: <Crown size={28} />,
      color: "#8B7355",
      tagline: "Pour une expérience sur mesure",
      highlights: [
        "Conciergerie 24/7",
        "Accès VIP",
        "Logements exclusifs",
        "Services personnalisés"
      ],
      bestFor: "Voyageurs exigeants",
      link: "/passerelle?type=prestige"
    }
  ];

  const stats = [
    { number: "200+", label: "Destinations", icon: <MapPin size={20} /> },
    { number: "50+", label: "Guides locaux", icon: <Users size={20} /> },
    { number: "98%", label: "Satisfaction", icon: <Star size={20} /> },
    { number: "24/7", label: "Support", icon: <Shield size={20} /> }
  ];

  const testimonials = [
    {
      name: "Aïcha Touré",
      origin: "Paris, France",
      destination: "Sénégal & Mali",
      comment: "Un voyage qui a transformé ma vision de l'Afrique. Chaque rencontre était authentique, chaque expérience riche en émotions.",
      duration: "3 semaines",
      avatar: "AT"
    },
    {
      name: "Kwame Johnson",
      origin: "New York, USA",
      destination: "Ghana & Côte d'Ivoire",
      comment: "Enfin un tourisme qui respecte nos cultures et célèbre nos héritages. Une reconnexion puissante avec mes racines.",
      duration: "2 semaines",
      avatar: "KJ"
    }
  ];

  return (
    <section className="souscription-tourisme-section">
      <div className="souscription-tourisme-container">
        
        {/* Header élégant */}
        <div className="souscription-header">
          <div className="souscription-badge">
            <Sparkles size={16} />
            <span>Tourisme Authentique</span>
          </div>
          
          <h1 className="souscription-title">
            Voyage autrement. <span className="souscription-title-gradient">Reconnecte-toi.</span>
          </h1>
          
          <p className="souscription-description">
            Nous créons des expériences de voyage qui célèbrent l'Afrique et sa diaspora. 
            Loin des circuits touristiques, découvre des destinations authentiques, 
            rencontre des communautés inspirantes et revis ton héritage.
          </p>

          {/* Stats rapides */}
          <div className="souscription-stats">
            {stats.map((stat, index) => (
              <div key={index} className="souscription-stat-item">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grille des expériences */}
        <div className="souscription-experiences-grid">
          {experiences.map((experience) => (
            <div
              key={experience.name}
              className={`souscription-experience-card ${experience.popular ? 'souscription-popular' : ''}`}
            >
              {/* Badge populaire */}
              {experience.popular && (
                <div className="souscription-popular-badge">
                  <Star size={12} />
                  <span>Plus choisi</span>
                </div>
              )}

              {/* Icone et titre */}
              <div className="souscription-experience-header">
                <div 
                  className="souscription-experience-icon" 
                  style={{ 
                    backgroundColor: `${experience.color}20`, 
                    color: experience.color 
                  }}
                >
                  {experience.icon}
                </div>
                <h3 className="souscription-experience-name">{experience.name}</h3>
                <p className="souscription-experience-tagline">{experience.tagline}</p>
                <div className="souscription-experience-bestfor">
                  <Compass size={14} />
                  <span>Idéal pour : {experience.bestFor}</span>
                </div>
              </div>

              {/* Points forts */}
              <div className="souscription-experience-highlights">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="souscription-highlight-item">
                    <div 
                      className="souscription-highlight-dot" 
                      style={{ backgroundColor: experience.color }}
                    ></div>
                    <span className="souscription-highlight-text">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA avec lien */}
              <Link 
                to={experience.link}
                className={`souscription-experience-button ${experience.popular ? 'souscription-popular-button' : ''}`}
              >
                Explorer cette expérience
                <ArrowRight size={18} className="souscription-button-arrow" />
              </Link>
            </div>
          ))}
        </div>

        {/* Témoignages inspirants */}
        <div className="souscription-testimonials-section">
          <div className="souscription-testimonials-header">
            <div className="testimonials-title-content">
              <h3 className="souscription-testimonials-title">
                <Globe size={24} />
                Histoires de voyage
              </h3>
              <p className="souscription-testimonials-subtitle">
                Découvre comment nos voyageurs ont vécu leur reconnexion
              </p>
            </div>
            <div className="souscription-global-rating">
              <div className="global-rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <div className="global-rating-text">4.9/5 • 500+ voyages réussis</div>
            </div>
          </div>

          <div className="souscription-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="souscription-testimonial-card">
                <div className="souscription-testimonial-quote">"</div>
                
                <p className="souscription-testimonial-comment">{testimonial.comment}</p>
                
                <div className="souscription-testimonial-author">
                  <div className="souscription-author-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="souscription-author-info">
                    <div className="souscription-author-name">{testimonial.name}</div>
                    <div className="souscription-author-details">
                      <span>{testimonial.origin}</span>
                      <span className="detail-separator">•</span>
                      <span>{testimonial.destination}</span>
                      <span className="detail-separator">•</span>
                      <span>{testimonial.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="souscription-testimonial-journey">
                  <div className="journey-icon">
                    <Compass size={16} />
                  </div>
                  <span>Voyage {testimonial.destination}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final avec liens */}
        <div className="souscription-cta-section">
          <div className="souscription-cta-content">
            <div className="souscription-cta-icon">
              <Sparkles size={40} />
            </div>
            
            <div className="souscription-cta-text">
              <h3>Prêt pour ton voyage transformateur ?</h3>
              <p>
                Rejoins notre communauté de voyageurs curieux et découvre l'Afrique comme tu ne l'as jamais vue. 
                Des paysages à couper le souffle, des cultures vibrantes et des rencontres inoubliables t'attendent.
              </p>
            </div>
            
            <div className="souscription-cta-buttons">
              <Link 
                to="/passerelle" 
                className="souscription-cta-button primary"
              >
                <Compass size={20} />
                <span>Planifier mon voyage</span>
                <ArrowRight size={18} />
              </Link>
              
              <Link 
                to="/contact" 
                className="souscription-cta-button secondary"
              >
                <Users size={20} />
                <span>Rencontrer notre communauté</span>
              </Link>
            </div>
          </div>

          {/* Garanties */}
          <div className="souscription-guarantees">
            <div className="guarantee-item">
              <div>
                <Shield size={20} />
              </div>
              <div>
                <div className="guarantee-title">Garantie Authenticité</div>
                <div className="guarantee-desc">Expériences 100% locales et vérifiées</div>
              </div>
            </div>
            <div className="guarantee-item">
              <div>
                <Map size={20} />
              </div>
              <div>
                <div className="guarantee-title">Support 360°</div>
                <div className="guarantee-desc">Accompagnement avant, pendant et après</div>
              </div>
            </div>
            <div className="guarantee-item">
              <div>
                <Star size={20} />
              </div>
              <div>
                <div className="guarantee-title">Expertise Culturelle</div>
                <div className="guarantee-desc">Des guides passionnés par leur patrimoine</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="souscription-decorative-elements">
        <div className="souscription-floating-element element-1"></div>
        <div className="souscription-floating-element element-2"></div>
        <div className="souscription-floating-element element-3"></div>
      </div>
    </section>
  );
};

export default SouscriptionTourisme;