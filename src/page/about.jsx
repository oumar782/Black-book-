import { useState, useEffect, useRef } from 'react';
import { Heart, Target, Users, Globe, HeartHandshake, Award, UsersRound, GlobeLock } from 'lucide-react';
import culturalPattern from '../assets/cultural-pattern.webp';
import './about.css';

const AboutPremium = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const values = [
    {
      icon: HeartHandshake,
      title: "Authenticité",
      description: "Nous préservons et transmettons la richesse authentique de nos cultures africaines.",
      color: "#8B7355"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque ressource et expérience que nous proposons.",
      color: "#7D5A3A"
    },
    {
      icon: UsersRound,
      title: "Communauté",
      description: "Nous créons un espace bienveillant où chacun peut apprendre et grandir ensemble.",
      color: "#5C4033"
    },
    {
      icon: GlobeLock,
      title: "Impact Global",
      description: "Nous œuvrons pour une reconnaissance mondiale de l'héritage africain.",
      color: "#A9927D"
    }
  ];

  const team = [
    {
      name: "Dr. Amina Kone",
      role: "Fondatrice & Directrice",
      bio: "Historienne spécialisée en civilisations africaines, passionnée par la transmission culturelle.",
      initials: "AK",
      color: "#8B7355"
    },
    {
      name: "Marcus Diallo",
      role: "Directeur Contenu",
      bio: "Expert en éducation digitale et ancien journaliste culturel.",
      initials: "MD",
      color: "#7D5A3A"
    },
    {
      name: "Fatou Sané",
      role: "Responsable Communauté",
      bio: "Anthropologue et médiatrice culturelle, connecteuse d'âmes.",
      initials: "FS",
      color: "#5C4033"
    }
  ];

  return (
    <section ref={sectionRef} className="about-premium-section">
      <div className="about-premium-container">
        {/* Hero About */}
        <div className="about-premium-hero">
          <div className="about-premium-content">
            <div className={`about-premium-content-badge ${isVisible ? 'animate-fade-in-up' : ''}`}>
              Notre Mission
            </div>
            
            <h1 className={`about-premium-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
              Révéler la <span className="about-premium-title-gradient">Beauté</span> de notre Héritage
            </h1>
            
            <div className="about-premium-text">
              <p className={`${isVisible ? 'animate-fade-in-up' : ''}`}>
                THE BLACK BOOK est né d'une conviction profonde : notre héritage africain 
                mérite d'être célébré, partagé et transmis aux générations futures.
              </p>
              
              <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Nous croyons que la connaissance de nos racines est un pilier fondamental 
                pour construire un avenir épanoui et fier. C'est pourquoi nous avons créé 
                cette plateforme unique qui rassemble ressources éducatives, événements 
                culturels et communauté bienveillante.
              </p>
              
              <p className={`${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                Chaque jour, nous travaillons pour rendre accessible la richesse de nos 
                cultures, depuis les royaumes anciens jusqu'aux innovations contemporaines, 
                en passant par les arts, la philosophie et les traditions orales qui font 
                notre fierté.
              </p>
            </div>
          </div>

          <div className="about-premium-visual">
            <div className="about-premium-image-container">
              <img
                src={culturalPattern}
                alt="Motifs culturels africains représentant notre diversité"
                className="about-premium-cultural-image"
              />
              <div className="about-premium-image-overlay"></div>
              <div className="about-premium-floating-elements">
                <div className="about-premium-floating-element about-premium-element-1"></div>
                <div className="about-premium-floating-element about-premium-element-2"></div>
                <div className="about-premium-floating-element about-premium-element-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="about-premium-values-section">
          <div className={`about-premium-section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="about-premium-section-title">
              Nos <span className="about-premium-title-gradient">Valeurs</span>
            </h2>
            <p className="about-premium-section-description">
              Les principes qui guident chacune de nos actions et nous permettent 
              de créer une expérience authentique et enrichissante.
            </p>
          </div>

          <div className="about-premium-values-grid">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`about-premium-value-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  '--about-premium-value-color': value.color
                }}
              >
                <div className="about-premium-value-icon">
                  <value.icon size={32} className="about-premium-icon-svg" />
                  <div className="about-premium-icon-glow"></div>
                  <div className="about-premium-icon-pulse"></div>
                </div>
                <h3 className="about-premium-value-title">{value.title}</h3>
                <p className="about-premium-value-description">{value.description}</p>
                <div className="about-premium-value-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        {/* L'équipe */}
        <div className="about-premium-team-section">
          <div className={`about-premium-section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="about-premium-section-title">
              Rencontre <span className="about-premium-title-gradient">l'Équipe</span>
            </h2>
            <p className="about-premium-section-description">
              Des passionnés qui dédient leur expertise à la valorisation 
              de notre patrimoine culturel africain.
            </p>
          </div>

          <div className="about-premium-team-grid">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`about-premium-team-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  '--about-premium-member-color': member.color
                }}
              >
                <div className="about-premium-member-avatar">
                  <div 
                    className="about-premium-avatar-circle"
                    style={{ background: member.color }}
                  >
                    <span className="about-premium-avatar-initials">{member.initials}</span>
                  </div>
                  <div className="about-premium-avatar-glow"></div>
                </div>
                
                <h3 className="about-premium-member-name">{member.name}</h3>
                
                <p className="about-premium-member-role">{member.role}</p>
                
                <p className="about-premium-member-bio">{member.bio}</p>

                <div className="about-premium-member-decoration">
                  <div className="about-premium-decoration-dot about-premium-dot-1"></div>
                  <div className="about-premium-decoration-dot about-premium-dot-2"></div>
                  <div className="about-premium-decoration-dot about-premium-dot-3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="about-premium-decorative-background">
        <div className="about-premium-background-pattern about-premium-pattern-1"></div>
        <div className="about-premium-background-pattern about-premium-pattern-2"></div>
        <div className="about-premium-background-orb about-premium-orb-1"></div>
        <div className="about-premium-background-orb about-premium-orb-2"></div>
      </div>
    </section>
  );
};

export default AboutPremium;