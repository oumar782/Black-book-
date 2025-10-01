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
      case 'Masterclass': return 'type-masterclass';
      case 'Atelier': return 'type-atelier';
      case 'Conférence': return 'type-conference';
      case 'Formation': return 'type-formation';
      case 'Discussion': return 'type-discussion';
      default: return 'type-default';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Débutant': return 'level-debutant';
      case 'Intermédiaire': return 'level-intermediaire';
      case 'Avancé': return 'level-avance';
      default: return 'level-default';
    }
  };

  return (
    <section className="events-calendar">
      <div className="container">
        {/* En-tête */}
        <div className="header">
          <h1 className="title">
            Événements & <span className="highlight">Ateliers</span>
          </h1>
          <p className="description">
            Rejoins-nous pour des expériences enrichissantes qui connectent tradition et modernité. 
            Participe à des masterclasses, ateliers et discussions avec des experts passionnés.
          </p>
        </div>

        {/* Statistiques rapides */}
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">24</div>
            <div className="stat-label">Événements ce mois</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">450+</div>
            <div className="stat-label">Participants actifs</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">15</div>
            <div className="stat-label">Experts intervenants</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">4.9</div>
            <div className="stat-label">Satisfaction moyenne</div>
          </div>
        </div>

        {/* Onglets */}
        <div className="tabs-container">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des événements */}
        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="event-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-content">
                {/* En-tête avec badges */}
                <div className="card-header">
                  <div className="badges">
                    <span className={`badge ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`badge ${getLevelColor(event.level)}`}>
                      {event.level}
                    </span>
                    {event.featured && (
                      <span className="badge featured">
                        <Star className="icon" />
                        Featured
                      </span>
                    )}
                  </div>
                  <event.icon className="event-icon" />
                </div>

                {/* Titre et description */}
                <h3 className="event-title">
                  {event.title}
                </h3>
                <p className="event-description">
                  {event.description}
                </p>

                {/* Détails de l'événement */}
                <div className="event-details">
                  <div className="detail-row">
                    <Calendar className="detail-icon" />
                    <span className="detail-text">{event.date}</span>
                    <Clock className="detail-icon" />
                    <span className="detail-text">{event.time}</span>
                  </div>
                  
                  <div className="detail-row">
                    <MapPin className="detail-icon" />
                    <span className="detail-text">{event.format}</span>
                    <Users className="detail-icon" />
                    <span className="detail-text">
                      {event.participants}/{event.maxParticipants} participants
                    </span>
                  </div>
                  
                  <div className="detail-row">
                    <div className="detail-text">
                      <span className="label">Animé par </span>
                      <span className="instructor">{event.instructor}</span>
                    </div>
                    <div className="detail-text">
                      <span className="label">Durée: </span>
                      <span className="duration">{event.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Barre de progression des inscriptions */}
                <div className="progress-container">
                  <div className="progress-info">
                    <span className="progress-label">Places disponibles</span>
                    <span className="progress-remaining">{event.maxParticipants - event.participants} restantes</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Prix et CTA */}
                <div className="card-footer">
                  <div className="price">
                    {event.price === "Gratuit" ? (
                      <span className="price-free">Gratuit</span>
                    ) : event.price === "Premium" ? (
                      <span className="price-premium">Inclus Premium</span>
                    ) : (
                      <span className="price-paid">{event.price}</span>
                    )}
                  </div>
                  
                  <button 
                    className={`cta-button ${event.participants >= event.maxParticipants ? 'disabled' : ''}`}
                    disabled={event.participants >= event.maxParticipants}
                  >
                    {event.participants >= event.maxParticipants ? 'Complet' : 'S\'inscrire'}
                    <ArrowRight className="cta-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA pour voir plus d'événements */}
        <div className="cta-section">
          <p className="cta-text">
            Plus de 50 événements programmés dans les prochains mois !
          </p>
          <button className="cta-outline">
            Voir le calendrier complet
            <ArrowRight className="cta-icon" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .events-calendar {
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Header styles */
        .header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .highlight {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .description {
          font-size: 1.25rem;
          color: #6b7280;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 107, 53, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(255, 107, 53, 0.15);
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6b7280;
        }

        /* Tabs */
        .tabs-container {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .tabs {
          display: inline-flex;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 0.25rem;
          border: 1px solid rgba(255, 107, 53, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .tab {
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab:hover {
          color: #1a1a1a;
        }

        .tab.active {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        /* Events grid */
        .events-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .events-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .event-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 107, 53, 0.1);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .event-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-content {
          padding: 2rem;
        }

        /* Card header */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .badge {
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .type-masterclass {
          background: rgba(147, 51, 234, 0.1);
          color: #9333ea;
        }

        .type-atelier {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .type-conference {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .type-formation {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .type-discussion {
          background: rgba(255, 107, 53, 0.1);
          color: #ff6b35;
        }

        .level-debutant {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .level-intermediaire {
          background: rgba(255, 107, 53, 0.1);
          color: #ff6b35;
        }

        .level-avance {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .featured {
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
        }

        .event-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #ff6b35;
        }

        /* Event title and description */
        .event-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        .event-card:hover .event-title {
          color: #ff6b35;
        }

        .event-description {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* Event details */
        .event-details {
          margin-bottom: 1.5rem;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .detail-icon {
          width: 1rem;
          height: 1rem;
          color: #ff6b35;
        }

        .detail-text {
          color: #6b7280;
        }

        .label {
          color: #6b7280;
        }

        .instructor {
          color: #ff6b35;
          font-weight: 600;
        }

        .duration {
          color: #1a1a1a;
          font-weight: 600;
        }

        /* Progress bar */
        .progress-container {
          margin-bottom: 1.5rem;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          border-radius: 10px;
          transition: width 0.8s ease;
        }

        /* Card footer */
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .price-free {
          color: #22c55e;
        }

        .price-premium {
          color: #ff6b35;
        }

        .price-paid {
          color: #1a1a1a;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
        }

        .cta-button:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }

        .cta-button.disabled {
          background: #9ca3af;
          cursor: not-allowed;
          box-shadow: none;
        }

        .cta-icon {
          width: 1rem;
          height: 1rem;
          transition: transform 0.3s ease;
        }

        .cta-button:hover:not(.disabled) .cta-icon {
          transform: translateX(3px);
        }

        /* CTA section */
        .cta-section {
          text-align: center;
          margin-top: 4rem;
        }

        .cta-text {
          color: #6b7280;
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }

        .cta-outline {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 2rem;
          background: transparent;
          color: #ff6b35;
          border: 2px solid rgba(255, 107, 53, 0.3);
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-outline:hover {
          background: rgba(255, 107, 53, 0.1);
          border-color: #ff6b35;
        }
      `}</style>
    </section>
  );
};

export default EventsCalendar;