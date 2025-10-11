import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, ArrowRight, Video, Coffee, BookOpen } from 'lucide-react';

const AfroEventsCalendar = () => {
  const [activeTab, setActiveTab] = useState('À venir');

  const tabs = ['À venir', 'Passés', 'Mes événements'];

  const events = [
    {
      id: 1,
      title: "Masterclass : Leadership Africain Moderne",
      description: "Découvrez les principes du leadership Ubuntu et comment les appliquer dans le monde professionnel contemporain.",
      type: "Masterclass",
      format: "En ligne",
      date: "15 Décembre 2024",
      time: "14h00 - 17h00",
      duration: "3 heures",
      instructor: "Dr. Amina Kone",
      participants: 45,
      maxParticipants: 60,
      price: "Premium",
      level: "Intermédiaire",
      featured: true,
      icon: Video,
      category: "Leadership"
    },
    {
      id: 2,
      title: "Atelier : Contes et Traditions Orales",
      description: "Séance interactive de partage de contes traditionnels africains et techniques de narration.",
      type: "Atelier",
      format: "Présentiel",
      date: "22 Décembre 2024",
      time: "10h00 - 12h00",
      duration: "2 heures",
      instructor: "Fatou Sané",
      participants: 12,
      maxParticipants: 20,
      price: "19€",
      level: "Tous niveaux",
      featured: false,
      icon: Coffee,
      category: "Culture"
    },
    {
      id: 3,
      title: "Conférence : L'Art Contemporain Africain",
      description: "Table ronde avec des artistes et curateurs sur les tendances actuelles de l'art africain.",
      type: "Conférence",
      format: "Hybride",
      date: "28 Décembre 2024",
      time: "19h00 - 21h00",
      duration: "2 heures",
      instructor: "Collectif d'artistes",
      participants: 89,
      maxParticipants: 100,
      price: "Gratuit",
      level: "Tous niveaux",
      featured: true,
      icon: Star,
      category: "Art"
    },
    {
      id: 4,
      title: "Formation : Histoire des Royaumes Africains",
      description: "Plongée approfondie dans l'histoire des grands empires africains et leur héritage.",
      type: "Formation",
      format: "En ligne",
      date: "5 Janvier 2025",
      time: "9h00 - 16h00",
      duration: "6 heures",
      instructor: "Marcus Diallo",
      participants: 23,
      maxParticipants: 50,
      price: "49€",
      level: "Avancé",
      featured: false,
      icon: BookOpen,
      category: "Histoire"
    },
    {
      id: 5,
      title: "Cercle de Discussion : Philosophie Bantoue",
      description: "Échanges autour des concepts philosophiques bantous et leur application moderne.",
      type: "Discussion",
      format: "En ligne",
      date: "12 Janvier 2025",
      time: "15h00 - 16h30",
      duration: "1h30",
      instructor: "Dr. Kwame Asante",
      participants: 8,
      maxParticipants: 15,
      price: "Premium",
      level: "Avancé",
      featured: false,
      icon: Users,
      category: "Spiritualité"
    },
    {
      id: 6,
      title: "Atelier Cuisine : Saveurs d'Afrique de l'Ouest",
      description: "Apprenez à préparer des plats traditionnels dans une ambiance conviviale et culturelle.",
      type: "Atelier",
      format: "Présentiel",
      date: "19 Janvier 2025",
      time: "14h00 - 18h00",
      duration: "4 heures",
      instructor: "Chef Aminata",
      participants: 15,
      maxParticipants: 16,
      price: "35€",
      level: "Débutant",
      featured: true,
      icon: Coffee,
      category: "Culture"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Masterclass': return 'afro-badge-masterclass';
      case 'Atelier': return 'afro-badge-atelier';
      case 'Conférence': return 'afro-badge-conference';
      case 'Formation': return 'afro-badge-formation';
      case 'Discussion': return 'afro-badge-discussion';
      default: return 'afro-badge-default';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Débutant': return 'afro-badge-debutant';
      case 'Intermédiaire': return 'afro-badge-intermediaire';
      case 'Avancé': return 'afro-badge-avance';
      default: return 'afro-badge-default';
    }
  };

  return (
    <section className="afro-events-section">
      <div className="afro-events-container">
        {/* Particules d'arrière-plan animées */}
        <div className="afro-animated-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="afro-particle" style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${15 + i * 2}s`,
              '--size': `${2 + i % 3}px`,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`
            }} />
          ))}
        </div>

        {/* En-tête */}
        <div className="afro-events-header">
          <h1 className="afro-main-title">
            <span className="afro-title-word afro-title-word-1">Événements</span>
            <span className="afro-title-word afro-title-word-2">&</span>
            <span className="afro-title-word afro-title-word-3">Ateliers</span>
          </h1>
          <p className="afro-subtitle">
            Rejoins-nous pour des expériences enrichissantes qui connectent tradition et modernité. 
            Participe à des masterclasses, ateliers et discussions avec des experts passionnés.
          </p>
        </div>

        {/* Statistiques rapides */}
        <div className="afro-stats-grid">
          {[
            { number: "24", label: "Événements ce mois" },
            { number: "450+", label: "Participants actifs" },
            { number: "15", label: "Experts intervenants" },
            { number: "4.9", label: "Satisfaction moyenne" }
          ].map((stat, index) => (
            <div key={index} className="afro-stat-card" style={{ '--delay': `${index * 0.1}s` }}>
              <div className="afro-stat-number-wrapper">
                <span className="afro-stat-number">{stat.number}</span>
                <div className="afro-stat-glow"></div>
              </div>
              <div className="afro-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Onglets */}
        <div className="afro-tabs-container">
          <div className="afro-tabs-wrapper">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`afro-tab ${activeTab === tab ? 'afro-tab-active' : 'afro-tab-inactive'}`}
                style={{ '--delay': `${index * 0.05}s` }}
              >
                <span className="afro-tab-content">{tab}</span>
                <div className="afro-tab-underline"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Grille des événements */}
        <div className="afro-events-grid">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="afro-event-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              {/* Effet de bordure animée */}
              <div className="afro-card-border-glow"></div>
              <div className="afro-card-hover-effect"></div>
              
              <div className="afro-card-content">
                {/* En-tête avec badges */}
                <div className="afro-card-header">
                  <div className="afro-badges-container">
                    <span className={`afro-badge ${getTypeColor(event.type)}`}>
                      <span className="afro-badge-text">{event.type}</span>
                      <div className="afro-badge-glow"></div>
                    </span>
                    <span className={`afro-badge ${getLevelColor(event.level)}`}>
                      <span className="afro-badge-text">{event.level}</span>
                      <div className="afro-badge-glow"></div>
                    </span>
                    {event.featured && (
                      <span className="afro-badge-featured">
                        <Star className="afro-featured-icon" />
                        <span className="afro-badge-text">Featured</span>
                        <div className="afro-featured-sparkle"></div>
                      </span>
                    )}
                  </div>
                  <div className="afro-icon-container">
                    <event.icon className="afro-card-icon" />
                    <div className="afro-icon-orb"></div>
                  </div>
                </div>

                {/* Titre et description */}
                <h3 className="afro-card-title">
                  {event.title}
                </h3>
                <p className="afro-card-description">
                  {event.description}
                </p>

                {/* Détails de l'événement */}
                <div className="afro-details-container">
                  <div className="afro-detail-row">
                    <div className="afro-detail-item">
                      <Calendar className="afro-detail-icon" />
                      <span className="afro-detail-date">{event.date}</span>
                    </div>
                    <div className="afro-detail-item">
                      <Clock className="afro-detail-icon" />
                      <span className="afro-detail-time">{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="afro-detail-row">
                    <div className="afro-detail-item">
                      <MapPin className="afro-detail-icon" />
                      <span className="afro-detail-format">{event.format}</span>
                    </div>
                    <div className="afro-detail-item">
                      <Users className="afro-detail-icon" />
                      <span className="afro-detail-participants">
                        {event.participants}/{event.maxParticipants} participants
                      </span>
                    </div>
                  </div>
                  
                  <div className="afro-detail-footer">
                    <div className="afro-instructor">
                      <span className="afro-instructor-label">Animé par </span>
                      <span className="afro-instructor-name">{event.instructor}</span>
                    </div>
                    <div className="afro-duration">
                      <span className="afro-duration-label">Durée: </span>
                      <span className="afro-duration-value">{event.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Barre de progression des inscriptions */}
                <div className="afro-progress-container">
                  <div className="afro-progress-labels">
                    <span>Places disponibles</span>
                    <span>{event.maxParticipants - event.participants} restantes</span>
                  </div>
                  <div className="afro-progress-bar">
                    <div 
                      className="afro-progress-fill"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    >
                      <div className="afro-progress-shine"></div>
                    </div>
                  </div>
                </div>

                {/* Prix et CTA */}
                <div className="afro-card-footer">
                  <div className="afro-price">
                    {event.price === "Gratuit" ? (
                      <span className="afro-price-free">
                        <span className="afro-price-text">Gratuit</span>
                        <div className="afro-price-glow"></div>
                      </span>
                    ) : event.price === "Premium" ? (
                      <span className="afro-price-premium">
                        <span className="afro-price-text">Inclus Premium</span>
                        <div className="afro-price-glow"></div>
                      </span>
                    ) : (
                      <span className="afro-price-paid">
                        <span className="afro-price-text">{event.price}</span>
                        <div className="afro-price-glow"></div>
                      </span>
                    )}
                  </div>
                  
                  <button 
                    className={`afro-register-btn ${event.participants >= event.maxParticipants ? 'afro-register-disabled' : ''}`}
                    disabled={event.participants >= event.maxParticipants}
                  >
                    <span className="afro-btn-text">
                      {event.participants >= event.maxParticipants ? 'Complet' : 'S\'inscrire'}
                    </span>
                    <div className="afro-btn-orb">
                      <ArrowRight className="afro-register-icon" />
                    </div>
                    <div className="afro-btn-glow"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA pour voir plus d'événements */}
        <div className="afro-cta-container">
          <p className="afro-cta-text">
            Plus de 50 événements programmés dans les prochains mois !
          </p>
          <button className="afro-calendar-btn">
            <span className="afro-btn-content">Voir le calendrier complet</span>
            <div className="afro-btn-orb">
              <ArrowRight className="afro-calendar-icon" />
            </div>
            <div className="afro-btn-trail"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .afro-events-section {
          padding: 6rem 0;
          background: 
            linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #1a0f0a 70%, #0a0a0a 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
        }

        /* Particules animées */
        .afro-animated-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .afro-particle {
          position: absolute;
          background: linear-gradient(45deg, #ff6b35, #ff8e53, #ff6b35);
          border-radius: 50%;
          opacity: 0;
          animation: afroFloatParticle var(--duration) ease-in-out var(--delay) infinite;
          filter: blur(1px);
        }

        @keyframes afroFloatParticle {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.3;
          }
          50% {
            transform: translate(100px, -100px) rotate(180deg);
            opacity: 0.6;
          }
        }

        .afro-events-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        /* En-tête avec animation de texte */
        .afro-events-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .afro-main-title {
          font-weight: 800;
          font-size: clamp(3rem, 6vw, 5rem);
          margin-bottom: 2rem;
          line-height: 1.1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .afro-title-word {
          background: linear-gradient(135deg, #ffffff 0%, #ff6b35 25%, #ff8e53 50%, #ff6b35 75%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 100%;
          animation: afroTitleShimmer 6s ease-in-out infinite;
          position: relative;
        }

        .afro-title-word-1 { animation-delay: 0s; }
        .afro-title-word-2 { 
          font-size: 0.8em;
          animation-delay: 0.2s;
        }
        .afro-title-word-3 { 
          animation-delay: 0.4s;
          color: #ff6b35;
        }

        @keyframes afroTitleShimmer {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }

        .afro-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 48rem;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
          letter-spacing: 0.5px;
          animation: afroFadeInUp 1s ease-out 0.5s both;
        }

        /* Statistiques élégantes */
        .afro-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .afro-stat-card {
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 107, 53, 0.1);
          border-radius: 2rem;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: afroSlideInUp 0.8s ease-out var(--delay) both;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .afro-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 107, 53, 0.1), 
            transparent);
          transition: left 0.6s ease;
        }

        .afro-stat-card:hover::before {
          left: 100%;
        }

        .afro-stat-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 107, 53, 0.3);
          box-shadow: 
            0 20px 40px rgba(255, 107, 53, 0.15),
            0 0 80px rgba(255, 107, 53, 0.05);
        }

        .afro-stat-number-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .afro-stat-number {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 3rem;
          background: linear-gradient(135deg, #ff6b35, #ff8e53, #ff6b35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
        }

        .afro-stat-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
          filter: blur(10px);
          animation: afroPulseGlow 2s ease-in-out infinite;
        }

        .afro-stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        /* Onglets sophistiqués */
        .afro-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
          animation: afroFadeInUp 0.8s ease-out 0.3s both;
        }

        .afro-tabs-wrapper {
          display: inline-flex;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 0.5rem;
          position: relative;
        }

        .afro-tab {
          padding: 1rem 2rem;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 1rem;
          border: none;
          cursor: pointer;
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: afroSlideInUp 0.6s ease-out var(--delay) both;
        }

        .afro-tab-content {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .afro-tab-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35, #ff8e53);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(-50%);
        }

        .afro-tab:hover {
          color: rgba(255, 255, 255, 0.9);
        }

        .afro-tab:hover .afro-tab-underline {
          width: 80%;
        }

        .afro-tab-active {
          background: linear-gradient(135deg, 
            rgba(255, 107, 53, 0.2), 
            rgba(255, 142, 83, 0.1));
          color: #ffffff;
          box-shadow: 
            0 8px 25px rgba(255, 107, 53, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .afro-tab-active .afro-tab-underline {
          width: 80%;
        }

        /* Cartes d'événements ultra-élégantes */
        .afro-events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2.5rem;
        }

        .afro-event-card {
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          position: relative;
          overflow: hidden;
          animation: afroCardFloatIn 0.8s ease-out var(--delay) both;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .afro-card-border-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 2rem;
          background: linear-gradient(135deg, 
            rgba(255, 107, 53, 0.1), 
            rgba(255, 142, 83, 0.05), 
            transparent 30%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .afro-card-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 107, 53, 0.05), 
            transparent);
          transition: left 0.6s ease;
        }

        .afro-event-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: rgba(255, 107, 53, 0.3);
          box-shadow: 
            0 25px 50px rgba(255, 107, 53, 0.15),
            0 0 100px rgba(255, 107, 53, 0.05);
        }

        .afro-event-card:hover .afro-card-border-glow {
          opacity: 1;
        }

        .afro-event-card:hover .afro-card-hover-effect {
          left: 100%;
        }

        .afro-card-content {
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        /* En-tête de carte */
        .afro-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .afro-badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .afro-badge {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .afro-badge-text {
          position: relative;
          z-index: 2;
        }

        .afro-badge-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .afro-badge:hover .afro-badge-glow {
          opacity: 1;
        }

        .afro-badge-featured {
          background: linear-gradient(135deg, #ff6b35, #ff8e53);
          color: white;
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          animation: afroFeaturedPulse 2s ease-in-out infinite;
        }

        .afro-featured-sparkle {
          position: absolute;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0;
          animation: afroSparkleFlash 3s ease-in-out infinite;
        }

        .afro-featured-icon {
          width: 0.875rem;
          height: 0.875rem;
        }

        .afro-icon-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .afro-card-icon {
          width: 2rem;
          height: 2rem;
          color: #ff6b35;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .afro-icon-orb {
          position: absolute;
          width: 3rem;
          height: 3rem;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: afroOrbRotate 4s linear infinite;
        }

        .afro-event-card:hover .afro-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        /* Titre et description */
        .afro-card-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.4;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ffffff 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .afro-event-card:hover .afro-card-title {
          background: linear-gradient(135deg, #ff6b35 0%, #ff8e53 50%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .afro-card-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        /* Détails */
        .afro-details-container {
          margin-bottom: 2rem;
        }

        .afro-detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .afro-detail-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .afro-detail-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #ff6b35;
          transition: all 0.3s ease;
        }

        .afro-event-card:hover .afro-detail-icon {
          transform: scale(1.1);
          color: #ff8e53;
        }

        .afro-detail-date,
        .afro-detail-time,
        .afro-detail-format,
        .afro-detail-participants {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .afro-detail-date { color: #ffffff; }
        .afro-detail-time { color: rgba(255, 255, 255, 0.8); }
        .afro-detail-format { color: rgba(255, 255, 255, 0.8); }
        .afro-detail-participants { color: rgba(255, 255, 255, 0.8); }

        .afro-detail-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .afro-instructor-label,
        .afro-duration-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }

        .afro-instructor-name,
        .afro-duration-value {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .afro-instructor-name {
          background: linear-gradient(135deg, #ff6b35, #ff8e53);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Barre de progression */
        .afro-progress-container {
          margin-bottom: 2rem;
        }

        .afro-progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.75rem;
        }

        .afro-progress-bar {
          width: 100%;
          height: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
        }

        .afro-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b35, #ff8e53, #ff6b35);
          border-radius: 1rem;
          position: relative;
          transition: width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .afro-progress-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.4), 
            transparent);
          animation: afroProgressShine 2s ease-in-out infinite;
        }

        /* Pied de carte */
        .afro-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .afro-price {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          position: relative;
        }

        .afro-price-free {
          color: #10b981;
          position: relative;
        }

        .afro-price-premium {
          background: linear-gradient(135deg, #ff6b35, #ff8e53);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .afro-price-paid {
          color: #ffffff;
          position: relative;
        }

        .afro-price-text {
          position: relative;
          z-index: 2;
        }

        .afro-price-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
          filter: blur(10px);
          opacity: 0.3;
          animation: afroPricePulse 3s ease-in-out infinite;
        }

        .afro-register-btn {
          background: linear-gradient(135deg, #ff6b35, #ff8e53, #ff6b35);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 1.5rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .afro-btn-text {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .afro-btn-orb {
          width: 1.5rem;
          height: 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .afro-register-icon {
          width: 1rem;
          height: 1rem;
          transition: all 0.3s ease;
        }

        .afro-btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent);
          transition: left 0.6s ease;
        }

        .afro-register-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 30px rgba(255, 107, 53, 0.4),
            0 0 50px rgba(255, 107, 53, 0.2);
        }

        .afro-register-btn:hover .afro-btn-glow {
          left: 100%;
        }

        .afro-register-btn:hover .afro-btn-orb {
          transform: scale(1.2);
          background: rgba(255, 255, 255, 0.3);
        }

        .afro-register-btn:hover .afro-register-icon {
          transform: translateX(3px);
        }

        .afro-register-disabled {
          background: #6b7280;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        .afro-register-disabled:hover .afro-btn-glow,
        .afro-register-disabled:hover .afro-btn-orb {
          transform: none;
        }

        /* CTA */
        .afro-cta-container {
          text-align: center;
          margin-top: 5rem;
          animation: afroFadeInUp 1s ease-out 0.8s both;
        }

        .afro-cta-text {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
          font-size: 1.25rem;
          font-weight: 300;
        }

        .afro-calendar-btn {
          background: transparent;
          color: #ff6b35;
          border: 1px solid rgba(255, 107, 53, 0.5);
          padding: 1.25rem 2.5rem;
          border-radius: 1.5rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .afro-btn-content {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .afro-calendar-btn:hover {
          background: rgba(255, 107, 53, 0.1);
          border-color: #ff6b35;
          transform: translateY(-5px);
          box-shadow: 
            0 20px 40px rgba(255, 107, 53, 0.3),
            0 0 80px rgba(255, 107, 53, 0.1);
        }

        .afro-calendar-btn:hover .afro-btn-orb {
          transform: scale(1.2) rotate(90deg);
          background: rgba(255, 107, 53, 0.3);
        }

        .afro-calendar-btn:hover .afro-calendar-icon {
          transform: translateX(5px);
        }

        .afro-btn-trail {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 107, 53, 0.2), 
            transparent);
          transition: left 0.6s ease;
        }

        .afro-calendar-btn:hover .afro-btn-trail {
          left: 100%;
        }

        /* Badge colors */
        .afro-badge-masterclass { 
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.1));
          color: #ff6b35;
        }
        .afro-badge-masterclass .afro-badge-glow {
          background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
        }

        .afro-badge-atelier { 
          background: linear-gradient(135deg, rgba(255, 142, 83, 0.2), rgba(255, 142, 83, 0.1));
          color: #ff8e53;
        }
        .afro-badge-atelier .afro-badge-glow {
          background: radial-gradient(circle, rgba(255, 142, 83, 0.3) 0%, transparent 70%);
        }

        .afro-badge-conference { 
          background: linear-gradient(135deg, rgba(255, 142, 83, 0.2), rgba(255, 142, 83, 0.1));
          color: #ff8e53;
        }
        .afro-badge-conference .afro-badge-glow {
          background: radial-gradient(circle, rgba(255, 142, 83, 0.3) 0%, transparent 70%);
        }

        .afro-badge-formation { 
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.1));
          color: #ff6b35;
        }
        .afro-badge-formation .afro-badge-glow {
          background: radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, transparent 70%);
        }

        .afro-badge-discussion { 
          background: linear-gradient(135deg, rgba(255, 142, 83, 0.2), rgba(255, 142, 83, 0.1));
          color: #ff8e53;
        }
        .afro-badge-discussion .afro-badge-glow {
          background: radial-gradient(circle, rgba(255, 142, 83, 0.3) 0%, transparent 70%);
        }

        .afro-badge-debutant { 
          background: linear-gradient(135deg, rgba(255, 142, 83, 0.2), rgba(255, 142, 83, 0.1));
          color: #ff8e53;
        }
        .afro-badge-intermediaire { 
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.1));
          color: #ff6b35;
        }
        .afro-badge-avance { 
          background: linear-gradient(135deg, rgba(255, 142, 83, 0.2), rgba(255, 142, 83, 0.1));
          color: #ff8e53;
        }
        .afro-badge-default { 
          background: rgba(100, 100, 100, 0.2);
          color: #a0a0a0;
        }

        /* Animations principales */
        @keyframes afroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes afroSlideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes afroCardFloatIn {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes afroPulseGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes afroFeaturedPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 107, 53, 0.6); }
        }

        @keyframes afroSparkleFlash {
          0%, 100% { 
            opacity: 0; 
            transform: translate(0, 0) scale(0); 
          }
          50% { 
            opacity: 1; 
            transform: translate(10px, -10px) scale(1); 
          }
        }

        @keyframes afroOrbRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes afroProgressShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes afroPricePulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .afro-events-grid {
            grid-template-columns: 1fr;
          }
          
          .afro-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .afro-card-content {
            padding: 1.5rem;
          }
          
          .afro-detail-row {
            flex-direction: column;
            gap: 1rem;
          }
          
          .afro-detail-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .afro-card-footer {
            flex-direction: column;
            gap: 1.5rem;
            align-items: stretch;
          }
          
          .afro-register-btn {
            justify-content: center;
          }

          .afro-main-title {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .afro-events-container {
            padding: 0 1rem;
          }
          
          .afro-stats-grid {
            grid-template-columns: 1fr;
          }
          
          .afro-tabs-wrapper {
            flex-direction: column;
            width: 100%;
          }
          
          .afro-tab {
            text-align: center;
          }

          .afro-events-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default AfroEventsCalendar;