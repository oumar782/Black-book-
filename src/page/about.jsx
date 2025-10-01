import { useState, useEffect, useRef } from 'react';
import culturalPattern from '../assets/cultural-pattern.webp';
import './about.css';
const About = () => {
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
      icon: "❤️",
      title: "Authenticité",
      description: "Nous préservons et transmettons la richesse authentique de nos cultures africaines.",
      color: "#EF4444"
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque ressource et expérience que nous proposons.",
      color: "#3B82F6"
    },
    {
      icon: "👥",
      title: "Communauté",
      description: "Nous créons un espace bienveillant où chacun peut apprendre et grandir ensemble.",
      color: "#8B5CF6"
    },
    {
      icon: "🌍",
      title: "Impact Global",
      description: "Nous œuvrons pour une reconnaissance mondiale de l'héritage africain.",
      color: "#10B981"
    }
  ];

  const team = [
    {
      name: "Dr. Amina Kone",
      role: "Fondatrice & Directrice",
      bio: "Historienne spécialisée en civilisations africaines, passionnée par la transmission culturelle.",
      initials: "AK",
      color: "#FF6B35"
    },
    {
      name: "Marcus Diallo",
      role: "Directeur Contenu",
      bio: "Expert en éducation digitale et ancien journaliste culturel.",
      initials: "MD",
      color: "#3B82F6"
    },
    {
      name: "Fatou Sané",
      role: "Responsable Communauté",
      bio: "Anthropologue et médiatrice culturelle, connecteuse d'âmes.",
      initials: "FS",
      color: "#8B5CF6"
    }
  ];

  return (
    <section ref={sectionRef} className="about-section">
      <div className="about-container">
        {/* Hero About */}
        <div className="about-hero">
          <div className="about-content">
            <div className={`content-badge ${isVisible ? 'animate-fade-in-up' : ''}`}>
              Notre Mission
            </div>
            
            <h1 className={`about-title ${isVisible ? 'animate-fade-in-up' : ''}`}>
              Révéler la <span className="title-gradient">Beauté</span> de notre Héritage
            </h1>
            
            <div className="about-text">
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

          <div className="about-visual">
            <div className="image-container">
              <img
                src={culturalPattern}
                alt="Motifs culturels africains représentant notre diversité"
                className="cultural-image"
              />
              <div className="image-overlay"></div>
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="values-section">
          <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="section-title">
              Nos <span className="title-gradient">Valeurs</span>
            </h2>
            <p className="section-description">
              Les principes qui guident chacune de nos actions et nous permettent 
              de créer une expérience authentique et enrichissante.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`value-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  '--value-color': value.color
                }}
              >
                <div className="value-icon">
                  <span className="icon-emoji">{value.icon}</span>
                  <div className="icon-glow"></div>
                  <div className="icon-pulse"></div>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        {/* L'équipe */}
        <div className="team-section">
          <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h2 className="section-title">
              Rencontre <span className="title-gradient">l'Équipe</span>
            </h2>
            <p className="section-description">
              Des passionnés qui dédient leur expertise à la valorisation 
              de notre patrimoine culturel africain.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`team-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  '--member-color': member.color
                }}
              >
                <div className="member-avatar">
                  <div 
                    className="avatar-circle"
                    style={{ background: member.color }}
                  >
                    <span className="avatar-initials">{member.initials}</span>
                  </div>
                  <div className="avatar-glow"></div>
                </div>
                
                <h3 className="member-name">{member.name}</h3>
                
                <p className="member-role">{member.role}</p>
                
                <p className="member-bio">{member.bio}</p>

                <div className="member-decoration">
                  <div className="decoration-dot dot-1"></div>
                  <div className="decoration-dot dot-2"></div>
                  <div className="decoration-dot dot-3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="decorative-background">
        <div className="background-pattern pattern-1"></div>
        <div className="background-pattern pattern-2"></div>
        <div className="background-orb orb-1"></div>
        <div className="background-orb orb-2"></div>
      </div>
    </section>
  );
};

export default About;