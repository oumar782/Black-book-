import { useState, useEffect } from 'react';
import { AlertTriangle, Eye, MessageCircle, Send, User, Calendar, MapPin, ThumbsUp, MessageSquare, Filter, Search, TrendingUp } from 'lucide-react';

const PremiumDenonciationPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    urgency: 'medium',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        title: '',
        category: '',
        description: '',
        location: '',
        urgency: 'medium',
        contact: ''
      });
    }, 3000);
  };

  // Données simulées des problèmes dénoncés
  const reportedProblems = [
    {
      id: 1,
      title: "Incivilités dans les transports en commun",
      description: "Comportements bruyants et manque de respect envers les autres usagers dans le métro et bus.",
      category: "comportement_public",
      location: "Paris, Métro ligne 13",
      date: "2024-12-10",
      urgency: "high",
      likes: 23,
      comments: 8,
      verified: true
    },
    {
      id: 2,
      title: "Déscolarisation des jeunes",
      description: "Taux d'abandon scolaire élevé dans certains quartiers, manque de suivi parental.",
      category: "education",
      location: "Marseille, Quartiers Nord",
      date: "2024-12-08",
      urgency: "high",
      likes: 45,
      comments: 12,
      verified: true
    },
    {
      id: 3,
      title: "Repli communautaire excessif",
      description: "Certains groupes refusent l'intégration et créent des tensions avec la population locale.",
      category: "integration",
      location: "Lyon, Villeurbanne",
      date: "2024-12-07",
      urgency: "medium",
      likes: 31,
      comments: 15,
      verified: false
    },
    {
      id: 4,
      title: "Travail au noir généralisé",
      description: "Système économique parallèle qui freine l'intégration professionnelle légale.",
      category: "economique",
      location: "Toulouse",
      date: "2024-12-05",
      urgency: "medium",
      likes: 18,
      comments: 6,
      verified: true
    },
    {
      id: 5,
      title: "Mariages forcés",
      description: "Pratiques traditionnelles contraires aux droits des femmes et des jeunes filles.",
      category: "social",
      location: "Île-de-France",
      date: "2024-12-03",
      urgency: "high",
      likes: 67,
      comments: 24,
      verified: true
    },
    {
      id: 6,
      title: "Refus des soins médicaux",
      description: "Certaines familles préfèrent les traitements traditionnels aux soins modernes.",
      category: "sante",
      location: "Lille",
      date: "2024-12-01",
      urgency: "medium",
      likes: 12,
      comments: 3,
      verified: false
    }
  ];

  const categories = [
    { value: 'all', label: 'Toutes les catégories', count: reportedProblems.length },
    { value: 'comportement_public', label: 'Comportements Publics', count: 1 },
    { value: 'education', label: 'Éducation', count: 1 },
    { value: 'integration', label: 'Intégration', count: 1 },
    { value: 'economique', label: 'Économique', count: 1 },
    { value: 'social', label: 'Social', count: 1 },
    { value: 'sante', label: 'Santé', count: 1 }
  ];

  const urgencyLevels = {
    low: { label: 'Faible', color: '#10B981' },
    medium: { label: 'Moyenne', color: '#C2410C' },
    high: { label: 'Élevée', color: '#EF4444' }
  };

  const filteredProblems = reportedProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || problem.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      comportement_public: '#3B82F6',
      education: '#8B5CF6',
      integration: '#C2410C',
      economique: '#EF4444',
      social: '#EC4899',
      sante: '#10B981'
    };
    return colors[category] || '#6B7280';
  };

  const getCategoryLabel = (category) => {
    const categoryObj = categories.find(cat => cat.value === category);
    return categoryObj ? categoryObj.label : 'Autre';
  };

  return (
    <div className="premium-denonciation-container">
      {/* Effet de particules animées */}
      <div className="denonciation-particles-background">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="denonciation-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${10 + Math.random() * 8}s`
          }} />
        ))}
      </div>

      {/* Curseur personnalisé */}
      <div 
        className="denonciation-custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <section className="premium-denonciation-section">
        <div className="premium-denonciation-content">
          {/* En-tête hero */}
          <div className="denonciation-hero-section">
            <div className="denonciation-hero-glow" />
            <div className="premium-denonciation-header">
              <div className="denonciation-header-badge">
                <AlertTriangle className="badge-icon-denonciation" />
                <span>Plateforme de Témoignages</span>
              </div>
              <h1 className="denonciation-main-title">
                <span className="denonciation-title-gradient">Problèmes</span>
                <span className="denonciation-title-accent"> Dénoncés</span>
              </h1>
              <div className="denonciation-title-underline">
                <div className="denonciation-underline-animation" />
              </div>
              <p className="denonciation-subtitle">
                Voix collectives pour un changement positif. Découvrez les défis identifiés 
                par la communauté et contribuez à votre tour.
              </p>
            </div>
          </div>

          <div className="denonciation-main-grid">
            {/* Section problèmes dénoncés */}
            <div className="problems-list-section">
              <div className="problems-list-glass">
                {/* En-tête avec statistiques */}
                <div className="problems-header">
                  <div className="problems-stats">
                    <div className="stat-item">
                      <div className="stat-number">{reportedProblems.length}</div>
                      <div className="stat-label">Problèmes signalés</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{reportedProblems.filter(p => p.urgency === 'high').length}</div>
                      <div className="stat-label">Urgences</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{reportedProblems.filter(p => p.verified).length}</div>
                      <div className="stat-label">Vérifiés</div>
                    </div>
                  </div>

                  {/* Barre de recherche et filtres */}
                  <div className="filters-section">
                    <div className="search-container">
                      <Search className="search-icon" />
                      <input
                        type="text"
                        placeholder="Rechercher un problème..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                      />
                    </div>
                    
                    <div className="category-filters">
                      <Filter className="filter-icon" />
                      <select 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="category-select"
                      >
                        {categories.map(category => (
                          <option key={category.value} value={category.value}>
                            {category.label} ({category.count})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Liste des problèmes */}
                <div className="problems-grid">
                  {filteredProblems.map((problem, index) => (
                    <div 
                      key={problem.id}
                      className="problem-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* En-tête de la carte */}
                      <div className="problem-card-header">
                        <div className="problem-meta">
                          <div 
                            className="problem-category"
                            style={{ backgroundColor: getCategoryColor(problem.category) }}
                          >
                            {getCategoryLabel(problem.category)}
                          </div>
                          <div className={`urgency-badge urgency-${problem.urgency}`}>
                            {urgencyLevels[problem.urgency].label}
                          </div>
                          {problem.verified && (
                            <div className="verified-badge">
                              ✅ Vérifié
                            </div>
                          )}
                        </div>
                        <div className="problem-date">
                          <Calendar className="date-icon" />
                          {new Date(problem.date).toLocaleDateString('fr-FR')}
                        </div>
                      </div>

                      {/* Contenu de la carte */}
                      <h3 className="problem-title">{problem.title}</h3>
                      <p className="problem-description">{problem.description}</p>

                      {/* Localisation */}
                      <div className="problem-location">
                        <MapPin className="location-icon" />
                        {problem.location}
                      </div>

                      {/* Interactions */}
                      <div className="problem-actions">
                        <div className="action-buttons">
                          <button className="action-btn like-btn">
                            <ThumbsUp className="action-icon" />
                            <span>{problem.likes}</span>
                          </button>
                          <button className="action-btn comment-btn">
                            <MessageSquare className="action-icon" />
                            <span>{problem.comments}</span>
                          </button>
                        </div>
                        <button className="view-details-btn">
                          <Eye className="view-icon" />
                          Voir les détails
                        </button>
                      </div>

                      {/* Effet de bordure */}
                      <div className="problem-card-glow" />
                    </div>
                  ))}
                </div>

                {/* Message si aucun résultat */}
                {filteredProblems.length === 0 && (
                  <div className="no-results">
                    <AlertTriangle className="no-results-icon" />
                    <h3>Aucun problème trouvé</h3>
                    <p>Aucun problème ne correspond à votre recherche. Essayez d'autres termes.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Formulaire de dénonciation */}
            <div className="denonciation-form-section">
              <div className="denonciation-form-glass">
                <div className="form-header">
                  <div className="form-badge">
                    <MessageCircle className="form-badge-icon" />
                    <span>Signaler un Problème</span>
                  </div>
                  <h2 className="form-title">
                    Votre <span className="form-title-accent">Témoignage</span>
                  </h2>
                  <p className="form-description">
                    Votre voix compte. Partagez les problèmes que vous observez 
                    pour aider à construire une communauté meilleure.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="success-denonciation-message">
                    <div className="success-denonciation-icon">
                      <TrendingUp className="success-icon-large" />
                    </div>
                    <h3 className="success-denonciation-title">Merci pour Votre Contribution</h3>
                    <p className="success-denonciation-description">
                      Votre signalement a été enregistré. Il sera examiné et pourra aider 
                      à identifier des solutions concrètes.
                    </p>
                    <div className="success-glow-denonciation" />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="premium-denonciation-form">
                    {/* Titre du problème */}
                    <div className="form-group">
                      <label className="form-label">Titre du Problème *</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="premium-input"
                        placeholder="Donnez un titre clair à votre signalement"
                        required
                      />
                    </div>

                    {/* Catégorie */}
                    <div className="form-group">
                      <label className="form-label">Catégorie *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="premium-select"
                        required
                      >
                        <option value="">Sélectionnez une catégorie</option>
                        {categories.filter(cat => cat.value !== 'all').map(category => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Description */}
                    <div className="form-group">
                      <label className="form-label">Description Détaillée *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="premium-textarea"
                        placeholder="Décrivez le problème de manière précise et factuelle. Incluez des exemples concrets si possible."
                        rows="5"
                        required
                      />
                    </div>

                    {/* Localisation */}
                    <div className="form-group">
                      <label className="form-label">Lieu *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="premium-input"
                        placeholder="Ville, quartier ou lieu précis"
                        required
                      />
                    </div>

                    {/* Niveau d'urgence */}
                    <div className="form-group">
                      <label className="form-label">Niveau d'Urgence</label>
                      <div className="urgency-options">
                        {Object.entries(urgencyLevels).map(([level, info]) => (
                          <label key={level} className="urgency-option">
                            <input
                              type="radio"
                              name="urgency"
                              value={level}
                              checked={formData.urgency === level}
                              onChange={handleInputChange}
                              className="urgency-radio"
                            />
                            <div 
                              className="urgency-indicator"
                              style={{ backgroundColor: info.color }}
                            />
                            <span className="urgency-label">{info.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Contact (optionnel) */}
                    <div className="form-group">
                      <label className="form-label">Contact (Optionnel)</label>
                      <div className="input-wrapper">
                        <User className="input-icon" />
                        <input
                          type="text"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          className="premium-input"
                          placeholder="Email ou téléphone pour suivi"
                        />
                      </div>
                    </div>

                    {/* Informations importantes */}
                    <div className="form-info">
                      <AlertTriangle className="info-icon" />
                      <div className="info-content">
                        <strong>Votre signalement est important :</strong>
                        <ul>
                          <li>Rester factuel et précis</li>
                          <li>Éviter les jugements de valeur</li>
                          <li>Proposer des solutions si possible</li>
                          <li>Respecter la confidentialité</li>
                        </ul>
                      </div>
                    </div>

                    {/* Bouton d'envoi */}
                    <button 
                      type="submit" 
                      className={`premium-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="submit-spinner" />
                          <span>Publication en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Publier le Signalement</span>
                          <Send className="send-icon" />
                        </>
                      )}
                      <div className="submit-glow-denonciation" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Section statistiques avancées */}
          <div className="advanced-stats-section">
            <div className="stats-glass">
              <h2 className="stats-title">Impact des Signalements</h2>
              <div className="advanced-stats-grid">
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <TrendingUp className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">78%</div>
                    <div className="stat-label">Des problèmes ont reçu des solutions</div>
                  </div>
                </div>
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <Eye className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">2.4K</div>
                    <div className="stat-label">Personnes sensibilisées</div>
                  </div>
                </div>
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <MessageCircle className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">156</div>
                    <div className="stat-label">Solutions proposées</div>
                  </div>
                </div>
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <ThumbsUp className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">89%</div>
                    <div className="stat-label">De satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-denonciation-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #9A3412 50%, #1a1a1a 75%, #0a0a0a 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          overflow-x: hidden;
          padding: 2rem 0;
        }

        /* Particules animées */
        .denonciation-particles-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .denonciation-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #C2410C 0%, #9A3412 100%);
          border-radius: 50%;
          animation: floatParticleDenonciation linear infinite;
          opacity: 0.3;
        }

        @keyframes floatParticleDenonciation {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Curseur personnalisé */
        .denonciation-custom-cursor {
          position: fixed;
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, #C2410C, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .premium-denonciation-section {
          position: relative;
          z-index: 2;
        }

        .premium-denonciation-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .denonciation-hero-section {
          position: relative;
          padding: 4rem 0 3rem;
          text-align: center;
        }

        .denonciation-hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(194, 65, 12, 0.1) 0%, transparent 70%);
          opacity: 0.6;
        }

        .premium-denonciation-header {
          position: relative;
        }

        .denonciation-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          border: 1px solid rgba(194, 65, 12, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: slideInDown 0.8s ease-out;
          color: white;
        }

        .badge-icon-denonciation {
          width: 1rem;
          height: 1rem;
          color: white;
        }

        .denonciation-header-badge span {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .denonciation-main-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 3.5rem;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .denonciation-title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .denonciation-title-accent {
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .denonciation-title-underline {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .denonciation-underline-animation {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #C2410C, transparent);
          border-radius: 2px;
          animation: underlinePulse 2s ease-in-out infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.3); opacity: 0.8; }
        }

        .denonciation-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        /* Grille principale */
        .denonciation-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        /* Section liste des problèmes */
        .problems-list-section {
          animation: fadeInLeft 0.8s ease-out both;
        }

        .problems-list-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
        }

        .problems-header {
          margin-bottom: 2rem;
        }

        .problems-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.5rem;
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #C2410C;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .filters-section {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .search-container {
          position: relative;
          flex: 1;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          font-size: 1rem;
        }

        .search-input:focus {
          outline: none;
          border-color: #C2410C;
        }

        .category-filters {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-icon {
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
        }

        .category-select {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }

        /* Grille des problèmes */
        .problems-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .problem-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out both;
          overflow: hidden;
        }

        .problem-card:hover {
          border-color: rgba(194, 65, 12, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(194, 65, 12, 0.1);
        }

        .problem-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .problem-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .problem-category {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .urgency-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
        }

        .urgency-high {
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .urgency-medium {
          background: rgba(194, 65, 12, 0.2);
          border: 1px solid rgba(194, 65, 12, 0.4);
        }

        .urgency-low {
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
        }

        .verified-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .problem-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
        }

        .date-icon {
          width: 1rem;
          height: 1rem;
        }

        .problem-title {
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          line-height: 1.4;
        }

        .problem-description {
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .problem-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .location-icon {
          width: 1rem;
          height: 1rem;
        }

        .problem-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: rgba(194, 65, 12, 0.1);
          color: #C2410C;
          border-color: rgba(194, 65, 12, 0.3);
        }

        .action-icon {
          width: 1rem;
          height: 1rem;
        }

        .view-details-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(194, 65, 12, 0.1);
          border: 1px solid rgba(194, 65, 12, 0.3);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          color: #C2410C;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-details-btn:hover {
          background: rgba(194, 65, 12, 0.2);
          transform: translateY(-1px);
        }

        .view-icon {
          width: 1rem;
          height: 1rem;
        }

        .problem-card-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(194, 65, 12, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .problem-card:hover .problem-card-glow {
          left: 100%;
        }

        /* Message aucun résultat */
        .no-results {
          text-align: center;
          padding: 3rem 2rem;
          color: #94a3b8;
        }

        .no-results-icon {
          width: 3rem;
          height: 3rem;
          color: #64748b;
          margin: 0 auto 1rem;
        }

        .no-results h3 {
          color: white;
          margin-bottom: 0.5rem;
        }

        /* Section formulaire */
        .denonciation-form-section {
          animation: fadeInRight 0.8s ease-out both;
        }

        .denonciation-form-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          position: sticky;
          top: 2rem;
        }

        .form-header {
          margin-bottom: 2rem;
        }

        .form-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(194, 65, 12, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .form-badge-icon {
          width: 1rem;
          height: 1rem;
          color: #C2410C;
        }

        .form-badge span {
          color: #C2410C;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .form-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.75rem;
          color: white;
          margin-bottom: 1rem;
        }

        .form-title-accent {
          background: linear-gradient(135deg, #C2410C, #9A3412);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-description {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 0.875rem;
        }

        .premium-denonciation-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .premium-input, .premium-select, .premium-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 0.75rem 1rem;
        }

        .premium-input:focus, .premium-select:focus, .premium-textarea:focus {
          outline: none;
          border-color: #C2410C;
          background: rgba(194, 65, 12, 0.03);
        }

        .premium-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .premium-input::placeholder, .premium-textarea::placeholder {
          color: #64748b;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
        }

        .premium-input {
          padding-left: 3rem;
        }

        /* Options d'urgence */
        .urgency-options {
          display: flex;
          gap: 1rem;
        }

        .urgency-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .urgency-radio {
          display: none;
        }

        .urgency-indicator {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .urgency-radio:checked + .urgency-indicator {
          border-color: white;
          box-shadow: 0 0 0 2px currentColor;
        }

        .urgency-label {
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .urgency-radio:checked ~ .urgency-label {
          color: white;
        }

        /* Informations du formulaire */
        .form-info {
          display: flex;
          gap: 1rem;
          background: rgba(194, 65, 12, 0.05);
          border: 1px solid rgba(194, 65, 12, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
        }

        .info-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #C2410C;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .info-content {
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .info-content ul {
          margin: 0.5rem 0 0 1rem;
          padding: 0;
        }

        .info-content li {
          margin-bottom: 0.25rem;
        }

        /* Bouton d'envoi */
        .premium-submit-btn {
          position: relative;
          background: linear-gradient(135deg, #C2410C, #9A3412);
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .premium-submit-btn:hover:not(.submitting) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(194, 65, 12, 0.4);
        }

        .premium-submit-btn.submitting {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .submit-spinner {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .send-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .submit-glow-denonciation {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .premium-submit-btn:hover .submit-glow-denonciation {
          left: 100%;
        }

        /* Message de succès */
        .success-denonciation-message {
          position: relative;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          overflow: hidden;
        }

        .success-denonciation-icon {
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent);
          border: 2px solid rgba(16, 185, 129, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          animation: successPulse 2s ease-in-out infinite;
        }

        .success-icon-large {
          width: 2rem;
          height: 2rem;
          color: #10B981;
        }

        .success-denonciation-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .success-denonciation-description {
          color: #94a3b8;
          line-height: 1.5;
          font-size: 0.875rem;
        }

        .success-glow-denonciation {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.1), transparent);
          animation: successGlow 3s ease-in-out infinite;
        }

        /* Section statistiques avancées */
        .advanced-stats-section {
          animation: fadeInUp 0.8s ease-out 1s both;
        }

        .stats-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
        }

        .stats-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: white;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .advanced-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .advanced-stat {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .advanced-stat:hover {
          border-color: rgba(194, 65, 12, 0.3);
          transform: translateY(-2px);
        }

        .stat-icon-wrapper {
          width: 50px;
          height: 50px;
          background: rgba(194, 65, 12, 0.1);
          border: 1px solid rgba(194, 65, 12, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #C2410C;
        }

        .stat-content {
          flex: 1;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: #C2410C;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
        }

        /* Animations */
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .denonciation-main-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .denonciation-form-glass {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .denonciation-main-title {
            font-size: 2.5rem;
          }

          .problems-list-glass,
          .denonciation-form-glass,
          .stats-glass {
            padding: 1.5rem;
          }

          .problems-stats {
            grid-template-columns: 1fr;
          }

          .filters-section {
            flex-direction: column;
          }

          .urgency-options {
            flex-direction: column;
            align-items: flex-start;
          }

          .advanced-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumDenonciationPage;