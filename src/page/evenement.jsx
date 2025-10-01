import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Star, ArrowRight, Video, Coffee, BookOpen } from 'lucide-react';

const EventsCalendar = () => {
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
      case 'Masterclass': return 'event-badge-masterclass';
      case 'Atelier': return 'event-badge-atelier';
      case 'Conférence': return 'event-badge-conference';
      case 'Formation': return 'event-badge-formation';
      case 'Discussion': return 'event-badge-discussion';
      default: return 'event-badge-default';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Débutant': return 'event-badge-debutant';
      case 'Intermédiaire': return 'event-badge-intermediaire';
      case 'Avancé': return 'event-badge-avance';
      default: return 'event-badge-default';
    }
  };

  return (
    <section className="elegant-events-section">
      <div className="elegant-events-container">
        {/* Particules d'arrière-plan animées */}
        <div className="animated-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${i * 0.5}s`,
              '--duration': `${15 + i * 2}s`,
              '--size': `${2 + i % 3}px`,
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`
            }} />
          ))}
        </div>

        {/* En-tête */}
        <div className="elegant-events-header">
          <h1 className="elegant-main-title">
            <span className="title-word title-word-1">Événements</span>
            <span className="title-word title-word-2">&</span>
            <span className="title-word title-word-3">Ateliers</span>
          </h1>
          <p className="elegant-subtitle">
            Rejoins-nous pour des expériences enrichissantes qui connectent tradition et modernité. 
            Participe à des masterclasses, ateliers et discussions avec des experts passionnés.
          </p>
        </div>

        {/* Statistiques rapides */}
        <div className="elegant-stats-grid">
          {[
            { number: "24", label: "Événements ce mois" },
            { number: "450+", label: "Participants actifs" },
            { number: "15", label: "Experts intervenants" },
            { number: "4.9", label: "Satisfaction moyenne" }
          ].map((stat, index) => (
            <div key={index} className="elegant-stat-card" style={{ '--delay': `${index * 0.1}s` }}>
              <div className="stat-number-wrapper">
                <span className="elegant-stat-number">{stat.number}</span>
                <div className="stat-glow"></div>
              </div>
              <div className="elegant-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Onglets */}
        <div className="elegant-tabs-container">
          <div className="elegant-tabs-wrapper">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`elegant-tab ${activeTab === tab ? 'elegant-tab-active' : 'elegant-tab-inactive'}`}
                style={{ '--delay': `${index * 0.05}s` }}
              >
                <span className="tab-content">{tab}</span>
                <div className="tab-underline"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Grille des événements */}
        <div className="elegant-events-grid">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="elegant-event-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              {/* Effet de bordure animée */}
              <div className="card-border-glow"></div>
              <div className="card-hover-effect"></div>
              
              <div className="elegant-card-content">
                {/* En-tête avec badges */}
                <div className="elegant-card-header">
                  <div className="elegant-badges-container">
                    <span className={`elegant-badge ${getTypeColor(event.type)}`}>
                      <span className="badge-text">{event.type}</span>
                      <div className="badge-glow"></div>
                    </span>
                    <span className={`elegant-badge ${getLevelColor(event.level)}`}>
                      <span className="badge-text">{event.level}</span>
                      <div className="badge-glow"></div>
                    </span>
                    {event.featured && (
                      <span className="elegant-badge-featured">
                        <Star className="elegant-featured-icon" />
                        <span className="badge-text">Featured</span>
                        <div className="featured-sparkle"></div>
                      </span>
                    )}
                  </div>
                  <div className="icon-container">
                    <event.icon className="elegant-card-icon" />
                    <div className="icon-orb"></div>
                  </div>
                </div>

                {/* Titre et description */}
                <h3 className="elegant-card-title">
                  {event.title}
                </h3>
                <p className="elegant-card-description">
                  {event.description}
                </p>

                {/* Détails de l'événement */}
                <div className="elegant-details-container">
                  <div className="elegant-detail-row">
                    <div className="detail-item">
                      <Calendar className="elegant-detail-icon" />
                      <span className="elegant-detail-date">{event.date}</span>
                    </div>
                    <div className="detail-item">
                      <Clock className="elegant-detail-icon" />
                      <span className="elegant-detail-time">{event.time}</span>
                    </div>
                  </div>
                  
                  <div className="elegant-detail-row">
                    <div className="detail-item">
                      <MapPin className="elegant-detail-icon" />
                      <span className="elegant-detail-format">{event.format}</span>
                    </div>
                    <div className="detail-item">
                      <Users className="elegant-detail-icon" />
                      <span className="elegant-detail-participants">
                        {event.participants}/{event.maxParticipants} participants
                      </span>
                    </div>
                  </div>
                  
                  <div className="elegant-detail-footer">
                    <div className="elegant-instructor">
                      <span className="elegant-instructor-label">Animé par </span>
                      <span className="elegant-instructor-name">{event.instructor}</span>
                    </div>
                    <div className="elegant-duration">
                      <span className="elegant-duration-label">Durée: </span>
                      <span className="elegant-duration-value">{event.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Barre de progression des inscriptions */}
                <div className="elegant-progress-container">
                  <div className="elegant-progress-labels">
                    <span>Places disponibles</span>
                    <span>{event.maxParticipants - event.participants} restantes</span>
                  </div>
                  <div className="elegant-progress-bar">
                    <div 
                      className="elegant-progress-fill"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    >
                      <div className="progress-shine"></div>
                    </div>
                  </div>
                </div>

                {/* Prix et CTA */}
                <div className="elegant-card-footer">
                  <div className="elegant-price">
                    {event.price === "Gratuit" ? (
                      <span className="elegant-price-free">
                        <span className="price-text">Gratuit</span>
                        <div className="price-glow"></div>
                      </span>
                    ) : event.price === "Premium" ? (
                      <span className="elegant-price-premium">
                        <span className="price-text">Inclus Premium</span>
                        <div className="price-glow"></div>
                      </span>
                    ) : (
                      <span className="elegant-price-paid">
                        <span className="price-text">{event.price}</span>
                        <div className="price-glow"></div>
                      </span>
                    )}
                  </div>
                  
                  <button 
                    className={`elegant-register-btn ${event.participants >= event.maxParticipants ? 'elegant-register-disabled' : ''}`}
                    disabled={event.participants >= event.maxParticipants}
                  >
                    <span className="btn-text">
                      {event.participants >= event.maxParticipants ? 'Complet' : 'S\'inscrire'}
                    </span>
                    <div className="btn-orb">
                      <ArrowRight className="elegant-register-icon" />
                    </div>
                    <div className="btn-glow"></div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA pour voir plus d'événements */}
        <div className="elegant-cta-container">
          <p className="elegant-cta-text">
            Plus de 50 événements programmés dans les prochains mois !
          </p>
          <button className="elegant-calendar-btn">
            <span className="btn-content">Voir le calendrier complet</span>
            <div className="btn-orb">
              <ArrowRight className="elegant-calendar-icon" />
            </div>
            <div className="btn-trail"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .elegant-events-section {
          padding: 6rem 0;
          background: 
            linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2d1a0c 70%, #1a0f0a 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', 'SF Pro Display', -apple-system, sans-serif;
        }

        /* Particules animées */
        .animated-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: linear-gradient(45deg, #ff8c00, #ff6b00, #ff4500);
          border-radius: 50%;
          opacity: 0;
          animation: floatParticle var(--duration) ease-in-out var(--delay) infinite;
          filter: blur(1px);
        }

        @keyframes floatParticle {
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

        .elegant-events-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        /* En-tête avec animation de texte */
        .elegant-events-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .elegant-main-title {
          font-weight: 800;
          font-size: clamp(3rem, 6vw, 5rem);
          margin-bottom: 2rem;
          line-height: 1.1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .title-word {
          background: linear-gradient(135deg, #ffffff 0%, #ff8c00 25%, #ff6b00 50%, #ff4500 75%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% 100%;
          animation: titleShimmer 6s ease-in-out infinite;
          position: relative;
        }

        .title-word-1 { animation-delay: 0s; }
        .title-word-2 { 
          font-size: 0.8em;
          animation-delay: 0.2s;
        }
        .title-word-3 { 
          animation-delay: 0.4s;
          color: #ff8c00;
        }

        @keyframes titleShimmer {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }

        .elegant-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 48rem;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 300;
          letter-spacing: 0.5px;
          animation: fadeInUp 1s ease-out 0.5s both;
        }

        /* Statistiques élégantes */
        .elegant-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .elegant-stat-card {
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 140, 0, 0.1);
          border-radius: 2rem;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.8s ease-out var(--delay) both;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .elegant-stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 140, 0, 0.1), 
            transparent);
          transition: left 0.6s ease;
        }

        .elegant-stat-card:hover::before {
          left: 100%;
        }

        .elegant-stat-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 140, 0, 0.3);
          box-shadow: 
            0 20px 40px rgba(255, 140, 0, 0.15),
            0 0 80px rgba(255, 140, 0, 0.05);
        }

        .stat-number-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .elegant-stat-number {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 3rem;
          background: linear-gradient(135deg, #ff8c00, #ff6b00, #ff4500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
        }

        .stat-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.3) 0%, transparent 70%);
          filter: blur(10px);
          animation: pulseGlow 2s ease-in-out infinite;
        }

        .elegant-stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        /* Onglets sophistiqués */
        .elegant-tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .elegant-tabs-wrapper {
          display: inline-flex;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1.5rem;
          padding: 0.5rem;
          position: relative;
        }

        .elegant-tab {
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
          animation: slideInUp 0.6s ease-out var(--delay) both;
        }

        .tab-content {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .tab-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff8c00, #ff6b00);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(-50%);
        }

        .elegant-tab:hover {
          color: rgba(255, 255, 255, 0.9);
        }

        .elegant-tab:hover .tab-underline {
          width: 80%;
        }

        .elegant-tab-active {
          background: linear-gradient(135deg, 
            rgba(255, 140, 0, 0.2), 
            rgba(255, 107, 0, 0.1));
          color: #ffffff;
          box-shadow: 
            0 8px 25px rgba(255, 140, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .elegant-tab-active .tab-underline {
          width: 80%;
        }

        /* Cartes d'événements ultra-élégantes */
        .elegant-events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2.5rem;
        }

        .elegant-event-card {
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(255, 255, 255, 0.02) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 2rem;
          position: relative;
          overflow: hidden;
          animation: cardFloatIn 0.8s ease-out var(--delay) both;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card-border-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 2rem;
          background: linear-gradient(135deg, 
            rgba(255, 140, 0, 0.1), 
            rgba(255, 107, 0, 0.05), 
            transparent 30%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card-hover-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 140, 0, 0.05), 
            transparent);
          transition: left 0.6s ease;
        }

        .elegant-event-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: rgba(255, 140, 0, 0.3);
          box-shadow: 
            0 25px 50px rgba(255, 140, 0, 0.15),
            0 0 100px rgba(255, 140, 0, 0.05);
        }

        .elegant-event-card:hover .card-border-glow {
          opacity: 1;
        }

        .elegant-event-card:hover .card-hover-effect {
          left: 100%;
        }

        .elegant-card-content {
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        /* En-tête de carte */
        .elegant-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .elegant-badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .elegant-badge {
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

        .badge-text {
          position: relative;
          z-index: 2;
        }

        .badge-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .elegant-badge:hover .badge-glow {
          opacity: 1;
        }

        .elegant-badge-featured {
          background: linear-gradient(135deg, #ff8c00, #ff6b00);
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
          animation: featuredPulse 2s ease-in-out infinite;
        }

        .featured-sparkle {
          position: absolute;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0;
          animation: sparkleFlash 3s ease-in-out infinite;
        }

        .elegant-featured-icon {
          width: 0.875rem;
          height: 0.875rem;
        }

        .icon-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .elegant-card-icon {
          width: 2rem;
          height: 2rem;
          color: #ff8c00;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .icon-orb {
          position: absolute;
          width: 3rem;
          height: 3rem;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: orbRotate 4s linear infinite;
        }

        .elegant-event-card:hover .elegant-card-icon {
          transform: scale(1.1) rotate(5deg);
        }

        /* Titre et description */
        .elegant-card-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.4;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #ffffff 0%, #ff8c00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .elegant-event-card:hover .elegant-card-title {
          background: linear-gradient(135deg, #ff8c00 0%, #ff6b00 50%, #ff4500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .elegant-card-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        /* Détails */
        .elegant-details-container {
          margin-bottom: 2rem;
        }

        .elegant-detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .elegant-detail-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #ff8c00;
          transition: all 0.3s ease;
        }

        .elegant-event-card:hover .elegant-detail-icon {
          transform: scale(1.1);
          color: #ff6b00;
        }

        .elegant-detail-date,
        .elegant-detail-time,
        .elegant-detail-format,
        .elegant-detail-participants {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .elegant-detail-date { color: #ffffff; }
        .elegant-detail-time { color: rgba(255, 255, 255, 0.8); }
        .elegant-detail-format { color: rgba(255, 255, 255, 0.8); }
        .elegant-detail-participants { color: rgba(255, 255, 255, 0.8); }

        .elegant-detail-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .elegant-instructor-label,
        .elegant-duration-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }

        .elegant-instructor-name,
        .elegant-duration-value {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .elegant-instructor-name {
          background: linear-gradient(135deg, #ff8c00, #ff6b00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Barre de progression */
        .elegant-progress-container {
          margin-bottom: 2rem;
        }

        .elegant-progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.75rem;
        }

        .elegant-progress-bar {
          width: 100%;
          height: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          overflow: hidden;
          position: relative;
        }

        .elegant-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff8c00, #ff6b00, #ff4500);
          border-radius: 1rem;
          position: relative;
          transition: width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .progress-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.4), 
            transparent);
          animation: progressShine 2s ease-in-out infinite;
        }

        /* Pied de carte */
        .elegant-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .elegant-price {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          position: relative;
        }

        .elegant-price-free {
          color: #10b981;
          position: relative;
        }

        .elegant-price-premium {
          background: linear-gradient(135deg, #ff8c00, #ff6b00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .elegant-price-paid {
          color: #ffffff;
          position: relative;
        }

        .price-text {
          position: relative;
          z-index: 2;
        }

        .price-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, currentColor 0%, transparent 70%);
          filter: blur(10px);
          opacity: 0.3;
          animation: pricePulse 3s ease-in-out infinite;
        }

        .elegant-register-btn {
          background: linear-gradient(135deg, #ff8c00, #ff6b00, #ff4500);
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

        .btn-text {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .btn-orb {
          width: 1.5rem;
          height: 1.5rem;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .elegant-register-icon {
          width: 1rem;
          height: 1rem;
          transition: all 0.3s ease;
        }

        .btn-glow {
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

        .elegant-register-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 30px rgba(255, 140, 0, 0.4),
            0 0 50px rgba(255, 140, 0, 0.2);
        }

        .elegant-register-btn:hover .btn-glow {
          left: 100%;
        }

        .elegant-register-btn:hover .btn-orb {
          transform: scale(1.2);
          background: rgba(255, 255, 255, 0.3);
        }

        .elegant-register-btn:hover .elegant-register-icon {
          transform: translateX(3px);
        }

        .elegant-register-disabled {
          background: #6b7280;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none !important;
        }

        .elegant-register-disabled:hover .btn-glow,
        .elegant-register-disabled:hover .btn-orb {
          transform: none;
        }

        /* CTA */
        .elegant-cta-container {
          text-align: center;
          margin-top: 5rem;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .elegant-cta-text {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
          font-size: 1.25rem;
          font-weight: 300;
        }

        .elegant-calendar-btn {
          background: transparent;
          color: #ff8c00;
          border: 1px solid rgba(255, 140, 0, 0.5);
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

        .btn-content {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .elegant-calendar-btn:hover {
          background: rgba(255, 140, 0, 0.1);
          border-color: #ff8c00;
          transform: translateY(-5px);
          box-shadow: 
            0 20px 40px rgba(255, 140, 0, 0.3),
            0 0 80px rgba(255, 140, 0, 0.1);
        }

        .elegant-calendar-btn:hover .btn-orb {
          transform: scale(1.2) rotate(90deg);
          background: rgba(255, 140, 0, 0.3);
        }

        .elegant-calendar-btn:hover .elegant-calendar-icon {
          transform: translateX(5px);
        }

        .btn-trail {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 140, 0, 0.2), 
            transparent);
          transition: left 0.6s ease;
        }

        .elegant-calendar-btn:hover .btn-trail {
          left: 100%;
        }

        /* Badge colors */
        .event-badge-masterclass { 
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(147, 51, 234, 0.1));
          color: #d8b4fe;
        }
        .event-badge-masterclass .badge-glow {
          background: radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%);
        }

        .event-badge-atelier { 
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1));
          color: #93c5fd;
        }
        .event-badge-atelier .badge-glow {
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
        }

        .event-badge-conference { 
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
          color: #86efac;
        }
        .event-badge-conference .badge-glow {
          background: radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%);
        }

        .event-badge-formation { 
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1));
          color: #fca5a5;
        }
        .event-badge-formation .badge-glow {
          background: radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%);
        }

        .event-badge-discussion { 
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(255, 140, 0, 0.1));
          color: #ff8c00;
        }
        .event-badge-discussion .badge-glow {
          background: radial-gradient(circle, rgba(255, 140, 0, 0.3) 0%, transparent 70%);
        }

        .event-badge-debutant { 
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
          color: #86efac;
        }
        .event-badge-intermediaire { 
          background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(255, 140, 0, 0.1));
          color: #ff8c00;
        }
        .event-badge-avance { 
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1));
          color: #fca5a5;
        }
        .event-badge-default { 
          background: rgba(100, 100, 100, 0.2);
          color: #a0a0a0;
        }

        /* Animations principales */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardFloatIn {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }

        @keyframes featuredPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 140, 0, 0.3); }
          50% { box-shadow: 0 0 30px rgba(255, 140, 0, 0.6); }
        }

        @keyframes sparkleFlash {
          0%, 100% { 
            opacity: 0; 
            transform: translate(0, 0) scale(0); 
          }
          50% { 
            opacity: 1; 
            transform: translate(10px, -10px) scale(1); 
          }
        }

        @keyframes orbRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes progressShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes pricePulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .elegant-events-grid {
            grid-template-columns: 1fr;
          }
          
          .elegant-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .elegant-card-content {
            padding: 1.5rem;
          }
          
          .elegant-detail-row {
            flex-direction: column;
            gap: 1rem;
          }
          
          .elegant-detail-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .elegant-card-footer {
            flex-direction: column;
            gap: 1.5rem;
            align-items: stretch;
          }
          
          .elegant-register-btn {
            justify-content: center;
          }

          .elegant-main-title {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .elegant-events-container {
            padding: 0 1rem;
          }
          
          .elegant-stats-grid {
            grid-template-columns: 1fr;
          }
          
          .elegant-tabs-wrapper {
            flex-direction: column;
            width: 100%;
          }
          
          .elegant-tab {
            text-align: center;
          }

          .elegant-events-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default EventsCalendar;