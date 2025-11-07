import { useState, useEffect } from 'react';
import { AlertTriangle, Eye, MessageCircle, Send, User, Calendar, MapPin, ThumbsUp, MessageSquare, Filter, Search, TrendingUp, Shield, Users, Target, X, Clock, CheckCircle } from 'lucide-react';

const PremiumDenonciationPage = () => {
  const [formData, setFormData] = useState({
    titre: '',
    categorie: '',
    description: '',
    lieu: '',
    niveau_urgence: 'moyen',
    contact: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [fractures, setFractures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [selectedFracture, setSelectedFracture] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Charger les données depuis l'API
  useEffect(() => {
    fetchFractures();
    fetchStats();
  }, []);

  const fetchFractures = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://backblack.vercel.app/api/fracture/');
      const result = await response.json();
      if (result.success) {
        // Filtrer pour n'afficher que les témoignages vérifiés (statut "en_cours" ou "traite")
        const filteredFractures = result.data.filter(fracture => 
          fracture.statut !== 'en_attente'
        );
        setFractures(filteredFractures);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des fractures:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('https://backblack.vercel.app/fracture/statistiques/total');
      const result = await response.json();
      if (result.success) {
        setStats(result.data);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des statistiques:', error);
    }
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
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
    
    try {
      const response = await fetch('https://backblack.vercel.app/api/fractures', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        // Recharger les données
        fetchFractures();
        fetchStats();
        
        // Reset du formulaire
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            titre: '',
            categorie: '',
            description: '',
            lieu: '',
            niveau_urgence: 'moyen',
            contact: ''
          });
        }, 3000);
      } else {
        alert('Erreur: ' + result.error);
      }
    } catch (error) {
      alert('Erreur lors de l\'envoi du témoignage');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleViewDetails = (fracture) => {
    setSelectedFracture(fracture);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFracture(null);
  };

  const categories = [
    { value: 'all', label: 'Toutes les catégories', count: fractures.length },
    { value: 'comportement_public', label: 'Comportements Publics', count: fractures.filter(f => f.categorie === 'comportement_public').length },
    { value: 'education', label: 'Éducation', count: fractures.filter(f => f.categorie === 'education').length },
    { value: 'integration', label: 'Intégration', count: fractures.filter(f => f.categorie === 'integration').length },
    { value: 'economique', label: 'Économique', count: fractures.filter(f => f.categorie === 'economique').length },
    { value: 'social', label: 'Social', count: fractures.filter(f => f.categorie === 'social').length },
    { value: 'sante', label: 'Santé', count: fractures.filter(f => f.categorie === 'sante').length }
  ];

  const urgencyLevels = {
    faible: { label: 'Faible', color: '#10B981', icon: '🟢' },
    moyen: { label: 'Moyenne', color: '#f9a825', icon: '🟡' },
    eleve: { label: 'Élevée', color: '#e25822', icon: '🔴' }
  };

  const statutStyles = {
    en_attente: { label: 'En Attente', color: '#6B7280', bgColor: 'rgba(107, 114, 128, 0.1)', icon: Clock },
    en_cours: { label: 'En Cours', color: '#f9a825', bgColor: 'rgba(249, 168, 37, 0.1)', icon: AlertTriangle },
    traite: { label: 'Traité', color: '#10B981', bgColor: 'rgba(16, 185, 129, 0.1)', icon: CheckCircle }
  };

  const filteredFractures = fractures.filter(fracture => {
    const matchesSearch = fracture.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fracture.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || fracture.categorie === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      comportement_public: '#e25822',
      education: '#f9a825',
      integration: '#e25822',
      economique: '#f9a825',
      social: '#e25822',
      sante: '#f9a825'
    };
    return colors[category] || '#6B7280';
  };

  const getCategoryLabel = (category) => {
    const categoryObj = categories.find(cat => cat.value === category);
    return categoryObj ? categoryObj.label : 'Autre';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="premium-denonciation-container">
      {/* Effets visuels avancés */}
      <div className="denonciation-particles-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="denonciation-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      {/* Lignes de grille animées */}
      <div className="animated-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* Curseur personnalisé premium */}
      <div 
        className="denonciation-custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Modal de détails */}
      {showModal && selectedFracture && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X className="close-icon" />
            </button>
            
            <div className="modal-header">
              <div className="modal-badges">
                <div 
                  className="modal-category"
                  style={{ backgroundColor: getCategoryColor(selectedFracture.categorie) }}
                >
                  {getCategoryLabel(selectedFracture.categorie)}
                </div>
                <div 
                  className="modal-urgency"
                  style={{ 
                    backgroundColor: `${urgencyLevels[selectedFracture.niveau_urgence].color}20`,
                    borderColor: urgencyLevels[selectedFracture.niveau_urgence].color,
                    color: urgencyLevels[selectedFracture.niveau_urgence].color
                  }}
                >
                  <span className="urgency-icon">
                    {urgencyLevels[selectedFracture.niveau_urgence].icon}
                  </span>
                  {urgencyLevels[selectedFracture.niveau_urgence].label}
                </div>
                <div 
                  className="modal-statut"
                  style={{ 
                    backgroundColor: statutStyles[selectedFracture.statut].bgColor,
                    color: statutStyles[selectedFracture.statut].color
                  }}
                >
                  {statutStyles[selectedFracture.statut].label}
                </div>
              </div>
              
              <div className="modal-date">
                <Calendar className="date-icon" />
                {formatDate(selectedFracture.date_creation)}
              </div>
            </div>

            <h2 className="modal-title">{selectedFracture.titre}</h2>
            
            <div className="modal-location">
              <MapPin className="location-icon" />
              {selectedFracture.lieu}
            </div>

            <div className="modal-description">
              <h3>Description détaillée</h3>
              <p>{selectedFracture.description}</p>
            </div>

            {selectedFracture.contact && (
              <div className="modal-contact">
                <h3>Contact</h3>
                <div className="contact-info">
                  <User className="contact-icon" />
                  <span>{selectedFracture.contact}</span>
                </div>
              </div>
            )}

            <div className="modal-actions">
              <button className="modal-action-btn support-btn">
                <ThumbsUp className="action-icon" />
                Soutenir ce témoignage
              </button>
              <button className="modal-action-btn comment-btn">
                <MessageSquare className="action-icon" />
                Ajouter un commentaire
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="premium-denonciation-section">
        <div className="premium-denonciation-content">
          {/* En-tête hero améliorée */}
          <div className="denonciation-hero-section">
            <div className="hero-glow-effect">
              <div className="glow-orb orb-1"></div>
              <div className="glow-orb orb-2"></div>
              <div className="glow-orb orb-3"></div>
            </div>
            
            <div className="premium-denonciation-header">
              <div className="denonciation-header-badge">
                <Shield className="badge-icon-denonciation" />
                <span>Plateforme Fractures Sociales</span>
              </div>
              
              <h1 className="denonciation-main-title">
                <span className="title-line">Témoignages</span>
                <span className="title-line title-accent">Fractures Sociales</span>
              </h1>
              
              <div className="title-underline-container">
                <div className="title-underline"></div>
                <div className="title-underline-accent"></div>
              </div>
              
              <p className="denonciation-subtitle">
                Ensemble, identifions les fractures pour mieux les réparer. 
                Votre témoignage contribue à une société plus inclusive et solidaire.
              </p>

              {/* Statistiques hero */}
              {stats && (
                <div className="hero-stats">
                  <div className="hero-stat">
                    <div className="hero-stat-number">{stats.total_fractures}</div>
                    <div className="hero-stat-label">Témoignages</div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-number">{stats.fractures_urgentes}</div>
                    <div className="hero-stat-label">Urgences</div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-number">{stats.traitees}</div>
                    <div className="hero-stat-label">Résolus</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="denonciation-main-grid">
            {/* Section liste des fractures */}
            <div className="problems-list-section">
              <div className="problems-list-glass">
                {/* En-tête avec statistiques */}
                <div className="problems-header">
                  <div className="problems-stats">
                    <div className="stat-item">
                      <div className="stat-icon-wrapper">
                        <Users className="stat-icon" />
                      </div>
                      <div className="stat-number">{fractures.length}</div>
                      <div className="stat-label">Témoignages</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-icon-wrapper">
                        <AlertTriangle className="stat-icon" />
                      </div>
                      <div className="stat-number">{fractures.filter(f => f.niveau_urgence === 'eleve').length}</div>
                      <div className="stat-label">Urgences</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-icon-wrapper">
                        <Target className="stat-icon" />
                      </div>
                      <div className="stat-number">{fractures.filter(f => f.statut === 'traite').length}</div>
                      <div className="stat-label">Résolus</div>
                    </div>
                  </div>

                  {/* Barre de recherche et filtres améliorés */}
                  <div className="filters-section">
                    <div className="search-container">
                      <Search className="search-icon" />
                      <input
                        type="text"
                        placeholder="Rechercher un témoignage..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                      />
                      <div className="search-glow"></div>
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

                {/* Liste des fractures */}
                {loading ? (
                  <div className="loading-section">
                    <div className="loading-spinner"></div>
                    <p>Chargement des témoignages...</p>
                  </div>
                ) : (
                  <div className="problems-grid">
                    {filteredFractures.map((fracture, index) => (
                      <div 
                        key={fracture.id}
                        className="problem-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* En-tête de la carte */}
                        <div className="problem-card-header">
                          <div className="problem-meta">
                            <div 
                              className="problem-category"
                              style={{ backgroundColor: getCategoryColor(fracture.categorie) }}
                            >
                              {getCategoryLabel(fracture.categorie)}
                            </div>
                            <div 
                              className="urgency-badge"
                              style={{ 
                                backgroundColor: `${urgencyLevels[fracture.niveau_urgence].color}20`,
                                borderColor: urgencyLevels[fracture.niveau_urgence].color,
                                color: urgencyLevels[fracture.niveau_urgence].color
                              }}
                            >
                              <span className="urgency-icon">
                                {urgencyLevels[fracture.niveau_urgence].icon}
                              </span>
                              {urgencyLevels[fracture.niveau_urgence].label}
                            </div>
                            <div 
                              className="statut-badge"
                              style={{ 
                                backgroundColor: statutStyles[fracture.statut].bgColor,
                                color: statutStyles[fracture.statut].color
                              }}
                            >
                              {statutStyles[fracture.statut].label}
                            </div>
                          </div>
                          <div className="problem-date">
                            <Calendar className="date-icon" />
                            {formatDate(fracture.date_creation)}
                          </div>
                        </div>

                        {/* Contenu de la carte */}
                        <h3 className="problem-title">{fracture.titre}</h3>
                        <p className="problem-description">
                          {fracture.description.length > 150 
                            ? `${fracture.description.substring(0, 150)}...` 
                            : fracture.description
                          }
                        </p>

                        {/* Localisation */}
                        <div className="problem-location">
                          <MapPin className="location-icon" />
                          {fracture.lieu}
                        </div>

                        {/* Métadonnées */}
                        <div className="problem-metadata">
                          {fracture.contact && (
                            <div className="metadata-item">
                              <User className="metadata-icon" />
                              <span>Contact: {fracture.contact}</span>
                            </div>
                          )}
                        </div>

                        {/* Interactions */}
                        <div className="problem-actions">
                          <div className="action-buttons">
                            <button className="action-btn like-btn">
                              <ThumbsUp className="action-icon" />
                              <span>Soutenir</span>
                            </button>
                            <button className="action-btn comment-btn">
                              <MessageSquare className="action-icon" />
                              <span>Commenter</span>
                            </button>
                          </div>
                          <button 
                            className="view-details-btn"
                            onClick={() => handleViewDetails(fracture)}
                          >
                            <Eye className="view-icon" />
                            Détails
                          </button>
                        </div>

                        {/* Effets visuels */}
                        <div className="problem-card-glow" />
                        <div className="card-hover-effect"></div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Message si aucun résultat */}
                {!loading && filteredFractures.length === 0 && (
                  <div className="no-results">
                    <div className="no-results-icon-wrapper">
                      <Search className="no-results-icon" />
                    </div>
                    <h3>Aucun témoignage trouvé</h3>
                    <p>Aucune fracture ne correspond à votre recherche. Essayez d'autres termes ou créez le premier témoignage.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Formulaire de témoignage */}
            <div className="denonciation-form-section">
              <div className="denonciation-form-glass">
                <div className="form-header">
                  <div className="form-badge">
                    <MessageCircle className="form-badge-icon" />
                    <span>Signaler une Fracture</span>
                  </div>
                  <h2 className="form-title">
                    Votre <span className="form-title-accent">Témoignage</span>
                  </h2>
                  <p className="form-description">
                    Votre voix est essentielle. Partagez les fractures sociales que vous observez 
                    pour construire ensemble une société plus juste et solidaire.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="success-denonciation-message">
                    <div className="success-denonciation-icon">
                      <TrendingUp className="success-icon-large" />
                    </div>
                    <h3 className="success-denonciation-title">Merci pour Votre Courage</h3>
                    <p className="success-denonciation-description">
                      Votre témoignage a été enregistré et sera examiné avec attention. 
                      Une fois vérifié, il apparaîtra dans la liste des témoignages.
                    </p>
                    <div className="success-particles">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="success-particle" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="premium-denonciation-form">
                    {/* Titre du problème */}
                    <div className="form-group">
                      <label className="form-label">
                        <span>Titre de la Fracture *</span>
                        <div className="label-required"></div>
                      </label>
                      <input
                        type="text"
                        name="titre"
                        value={formData.titre}
                        onChange={handleInputChange}
                        className="premium-input"
                        placeholder="Donnez un titre clair à votre témoignage"
                        required
                      />
                    </div>

                    {/* Catégorie */}
                    <div className="form-group">
                      <label className="form-label">
                        <span>Catégorie *</span>
                        <div className="label-required"></div>
                      </label>
                      <select
                        name="categorie"
                        value={formData.categorie}
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
                      <label className="form-label">
                        <span>Description Détaillée *</span>
                        <div className="label-required"></div>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="premium-textarea"
                        placeholder="Décrivez la fracture sociale de manière précise et factuelle. Incluez des exemples concrets si possible."
                        rows="5"
                        required
                      />
                    </div>

                    {/* Localisation */}
                    <div className="form-group">
                      <label className="form-label">
                        <span>Lieu *</span>
                        <div className="label-required"></div>
                      </label>
                      <input
                        type="text"
                        name="lieu"
                        value={formData.lieu}
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
                              name="niveau_urgence"
                              value={level}
                              checked={formData.niveau_urgence === level}
                              onChange={handleInputChange}
                              className="urgency-radio"
                            />
                            <div 
                              className="urgency-indicator"
                              style={{ backgroundColor: info.color }}
                            >
                              <span className="urgency-dot"></span>
                            </div>
                            <span className="urgency-label">
                              <span className="urgency-icon">{info.icon}</span>
                              {info.label}
                            </span>
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
                        <strong>Votre témoignage est précieux :</strong>
                        <ul>
                          <li>✅ Restez factuel et précis dans vos observations</li>
                          <li>✅ Évitez les jugements et les généralisations</li>
                          <li>✅ Proposez des pistes de solutions si possible</li>
                          <li>✅ Respectez l'anonymat des personnes concernées</li>
                          <li>⚠️ Votre témoignage sera vérifié avant publication</li>
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
                          <div className="submit-spinner"></div>
                          <span>Publication en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Publier le Témoignage</span>
                          <Send className="send-icon" />
                        </>
                      )}
                      <div className="submit-glow-denonciation" />
                      <div className="btn-particles">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="btn-particle" />
                        ))}
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Section impact améliorée */}
          <div className="advanced-stats-section">
            <div className="stats-glass">
              <h2 className="stats-title">Impact des Témoignages</h2>
              <p className="stats-subtitle">
                Chaque témoignage contribue à une meilleure compréhension des fractures sociales
              </p>
              
              <div className="advanced-stats-grid">
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <TrendingUp className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">78%</div>
                    <div className="stat-label">Des fractures identifiées ont initié des actions</div>
                  </div>
                  <div className="stat-progress">
                    <div className="progress-bar" style={{width: '78%'}}></div>
                  </div>
                </div>
                
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <Users className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">2.4K</div>
                    <div className="stat-label">Citoyens engagés dans le dialogue</div>
                  </div>
                  <div className="stat-progress">
                    <div className="progress-bar" style={{width: '65%'}}></div>
                  </div>
                </div>
                
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <MessageCircle className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">156</div>
                    <div className="stat-label">Solutions concrètes proposées</div>
                  </div>
                  <div className="stat-progress">
                    <div className="progress-bar" style={{width: '45%'}}></div>
                  </div>
                </div>
                
                <div className="advanced-stat">
                  <div className="stat-icon-wrapper">
                    <Target className="stat-icon" />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">89%</div>
                    <div className="stat-label">De satisfaction des contributeurs</div>
                  </div>
                  <div className="stat-progress">
                    <div className="progress-bar" style={{width: '89%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
    

        @keyframes gradientShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        /* Lignes de grille animées */
        .animated-grid-lines {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .grid-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(226, 88, 34, 0.03), transparent);
          height: 1px;
          width: 100%;
          animation: gridLineMove 20s linear infinite;
        }

        .grid-line:nth-child(1) { top: 25%; animation-delay: 0s; }
        .grid-line:nth-child(2) { top: 50%; animation-delay: -6.66s; }
        .grid-line:nth-child(3) { top: 75%; animation-delay: -13.33s; }

        @keyframes gridLineMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Particules animées améliorées */
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
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #e25822, #f9a825, #e25822);
          border-radius: 50%;
          animation: floatParticleDenonciation linear infinite;
          opacity: 0.4;
          filter: blur(0.5px);
        }

        @keyframes floatParticleDenonciation {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100px) rotate(360deg) scale(1.2);
            opacity: 0;
          }
        }

        /* Curseur personnalisé premium */
        .denonciation-custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, #e25822, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
          filter: blur(1px);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 2rem;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalAppear 0.3s ease-out;
        }

        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          padding: 0.5rem;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-close-btn:hover {
          background: rgba(226, 88, 34, 0.2);
          border-color: #e25822;
        }

        .close-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .modal-badges {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .modal-category {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .modal-urgency, .modal-statut {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid;
        }

        .modal-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .modal-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }

        .modal-description, .modal-contact {
          margin-bottom: 2rem;
        }

        .modal-description h3, .modal-contact h3 {
          color: white;
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .modal-description p {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 1rem;
        }

        .contact-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .modal-action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid;
        }

        .support-btn {
          background: rgba(226, 88, 34, 0.1);
          border-color: rgba(226, 88, 34, 0.3);
          color: #e25822;
        }

        .support-btn:hover {
          background: rgba(226, 88, 34, 0.2);
          transform: translateY(-1px);
        }

        .comment-btn {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
          color: #94a3b8;
        }

        .comment-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
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

        /* Hero Section améliorée */
        .denonciation-hero-section {
          position: relative;
          padding: 6rem 0 4rem;
          text-align: center;
          overflow: hidden;
        }

        .hero-glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
          animation: orbFloat 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #e25822, transparent);
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #f9a825, transparent);
          top: 60%;
          right: 10%;
          animation-delay: -2.66s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #e25822, transparent);
          bottom: 20%;
          left: 20%;
          animation-delay: -5.33s;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }

        .premium-denonciation-header {
          position: relative;
        }

        .denonciation-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, rgba(226, 88, 34, 0.2), rgba(249, 168, 37, 0.2));
          border: 1px solid rgba(226, 88, 34, 0.3);
          padding: 0.75rem 2rem;
          border-radius: 50px;
          margin-bottom: 3rem;
          backdrop-filter: blur(20px);
          animation: slideInDown 0.8s ease-out;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .denonciation-header-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .denonciation-header-badge:hover::before {
          left: 100%;
        }

        .badge-icon-denonciation {
          width: 1.25rem;
          height: 1.25rem;
          color: #e25822;
        }

        .denonciation-main-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 4rem;
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
          line-height: 1.1;
        }

        .title-line {
          display: block;
        }

        .title-accent {
          background: linear-gradient(135deg, #e25822 0%, #f9a825 50%, #e25822 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: titleGradient 3s ease infinite;
        }

        @keyframes titleGradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        .title-underline-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
          gap: 0.5rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #64748b, transparent);
          border-radius: 2px;
          animation: underlinePulse 2s ease-in-out infinite;
        }

        .title-underline-accent {
          width: 40px;
          height: 4px;
          background: linear-gradient(90deg, #e25822, #f9a825);
          border-radius: 2px;
          animation: underlinePulse 2s ease-in-out infinite reverse;
        }

        .denonciation-subtitle {
          font-size: 1.375rem;
          color: #94a3b8;
          max-width: 800px;
          margin: 0 auto 3rem;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          animation: fadeInUp 0.8s ease-out 0.8s both;
        }

        .hero-stat {
          text-align: center;
        }

        .hero-stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #e25822;
          margin-bottom: 0.5rem;
        }

        .hero-stat-label {
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Grille principale */
        .denonciation-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        /* Section liste des problèmes améliorée */
        .problems-list-section {
          animation: fadeInLeft 0.8s ease-out both;
        }

        .problems-list-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .problems-list-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e25822, transparent);
        }

        .problems-header {
          margin-bottom: 2.5rem;
        }

        .problems-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .stat-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-item:hover {
          border-color: rgba(226, 88, 34, 0.3);
          transform: translateY(-2px);
        }

        .stat-icon-wrapper {
          width: 50px;
          height: 50px;
          background: rgba(226, 88, 34, 0.1);
          border: 1px solid rgba(226, 88, 34, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .stat-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #e25822;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #e25822;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .filters-section {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .search-container {
          position: relative;
          flex: 1;
        }

        .search-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
          z-index: 2;
        }

        .search-input {
          width: 100%;
          padding: 1rem 1.25rem 1rem 3.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .search-input:focus {
          outline: none;
          border-color: #e25822;
          background: rgba(226, 88, 34, 0.03);
        }

        .search-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(226, 88, 34, 0.1), transparent);
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .search-input:focus ~ .search-glow {
          opacity: 1;
        }

        .category-filters {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.5rem 1rem;
        }

        .filter-icon {
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
        }

        .category-select {
          background: transparent;
          border: none;
          color: white;
          font-size: 0.875rem;
          cursor: pointer;
        }

        .category-select:focus {
          outline: none;
        }

        /* Grille des problèmes améliorée */
        .problems-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .problem-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s ease;
          animation: fadeInUp 0.6s ease-out both;
          overflow: hidden;
        }

        .problem-card:hover {
          border-color: rgba(226, 88, 34, 0.4);
          transform: translateY(-4px);
          box-shadow: 
            0 20px 40px rgba(226, 88, 34, 0.15),
            0 0 0 1px rgba(226, 88, 34, 0.1);
        }

        .problem-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .problem-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .problem-category {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .urgency-badge, .statut-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid;
        }

        .urgency-icon {
          font-size: 0.875rem;
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
          margin-bottom: 1rem;
          font-size: 1.375rem;
          line-height: 1.4;
        }

        .problem-description {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1rem;
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

        .problem-metadata {
          margin-bottom: 1.5rem;
        }

        .metadata-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.875rem;
        }

        .metadata-icon {
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
          border-radius: 10px;
          padding: 0.75rem 1.25rem;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .action-btn:hover {
          background: rgba(226, 88, 34, 0.1);
          color: #e25822;
          border-color: rgba(226, 88, 34, 0.3);
          transform: translateY(-1px);
        }

        .action-icon {
          width: 1.125rem;
          height: 1.125rem;
        }

        .view-details-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(226, 88, 34, 0.1);
          border: 1px solid rgba(226, 88, 34, 0.3);
          border-radius: 10px;
          padding: 0.75rem 1.5rem;
          color: #e25822;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .view-details-btn:hover {
          background: rgba(226, 88, 34, 0.2);
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(226, 88, 34, 0.2);
        }

        .view-icon {
          width: 1.125rem;
          height: 1.125rem;
        }

        .problem-card-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(226, 88, 34, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .problem-card:hover .problem-card-glow {
          left: 100%;
        }

        .card-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(226, 88, 34, 0.03), transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .problem-card:hover .card-hover-effect {
          opacity: 1;
        }

        /* Loading state */
        .loading-section {
          text-align: center;
          padding: 4rem 2rem;
          color: #94a3b8;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(226, 88, 34, 0.3);
          border-top: 3px solid #e25822;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }

        /* Message aucun résultat amélioré */
        .no-results {
          text-align: center;
          padding: 4rem 2rem;
          color: #94a3b8;
        }

        .no-results-icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .no-results-icon {
          width: 2rem;
          height: 2rem;
          color: #64748b;
        }

        .no-results h3 {
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        /* Section formulaire améliorée */
        .denonciation-form-section {
          animation: fadeInRight 0.8s ease-out both;
        }

        .denonciation-form-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          position: sticky;
          top: 2rem;
          overflow: hidden;
        }

        .denonciation-form-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f9a825, transparent);
        }

        .form-header {
          margin-bottom: 2.5rem;
        }

        .form-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(226, 88, 34, 0.1);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(226, 88, 34, 0.2);
        }

        .form-badge-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #e25822;
        }

        .form-badge span {
          color: #e25822;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .form-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .form-title-accent {
          background: linear-gradient(135deg, #e25822, #f9a825);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-description {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 1rem;
        }

        .premium-denonciation-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-weight: 600;
          color: white;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .label-required {
          width: 4px;
          height: 4px;
          background: #e25822;
          border-radius: 50%;
        }

        .premium-input, .premium-select, .premium-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 1rem 1.25rem;
        }

        .premium-input:focus, .premium-select:focus, .premium-textarea:focus {
          outline: none;
          border-color: #e25822;
          background: rgba(226, 88, 34, 0.03);
          box-shadow: 0 0 0 3px rgba(226, 88, 34, 0.1);
        }

        .premium-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
          line-height: 1.5;
        }

        .premium-input::placeholder, .premium-textarea::placeholder {
          color: #64748b;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
          z-index: 2;
        }

        .premium-input {
          padding-left: 3.5rem;
        }

        /* Options d'urgence améliorées */
        .urgency-options {
          display: flex;
          gap: 1.5rem;
        }

        .urgency-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.75rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
          flex: 1;
        }

        .urgency-option:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-1px);
        }

        .urgency-radio {
          display: none;
        }

        .urgency-indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .urgency-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .urgency-radio:checked + .urgency-indicator {
          border-color: currentColor;
        }

        .urgency-radio:checked + .urgency-indicator .urgency-dot {
          opacity: 1;
        }

        .urgency-radio:checked ~ .urgency-label {
          color: white;
        }

        .urgency-label {
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.3s ease;
        }

        /* Informations du formulaire améliorées */
        .form-info {
          display: flex;
          gap: 1.5rem;
          background: rgba(226, 88, 34, 0.05);
          border: 1px solid rgba(226, 88, 34, 0.2);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .form-info::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #e25822, #f9a825);
        }

        .info-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #e25822;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .info-content {
          color: #94a3b8;
          font-size: 0.875rem;
          flex: 1;
        }

        .info-content strong {
          color: white;
          display: block;
          margin-bottom: 0.75rem;
        }

        .info-content ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .info-content li {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Bouton d'envoi premium */
        .premium-submit-btn {
          position: relative;
          background: linear-gradient(135deg, #e25822, #f9a825);
          border: none;
          padding: 1.25rem 2.5rem;
          border-radius: 16px;
          color: white;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          overflow: hidden;
          transition: all 0.4s ease;
          font-size: 1.125rem;
        }

        .premium-submit-btn:hover:not(.submitting) {
          transform: translateY(-3px);
          box-shadow: 
            0 20px 40px rgba(226, 88, 34, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .premium-submit-btn.submitting {
          opacity: 0.8;
          cursor: not-allowed;
          transform: scale(0.98);
        }

        .submit-spinner {
          width: 1.5rem;
          height: 1.5rem;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
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

        .btn-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .btn-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: btnParticle 1.5s ease-in-out infinite;
        }

        .btn-particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .btn-particle:nth-child(2) { top: 80%; left: 20%; animation-delay: 0.2s; }
        .btn-particle:nth-child(3) { top: 40%; left: 90%; animation-delay: 0.4s; }
        .btn-particle:nth-child(4) { top: 60%; left: 5%; animation-delay: 0.6s; }
        .btn-particle:nth-child(5) { top: 10%; left: 70%; animation-delay: 0.8s; }
        .btn-particle:nth-child(6) { top: 90%; left: 80%; animation-delay: 1s; }

        @keyframes btnParticle {
          0%, 100% { transform: translateY(0) scale(0); opacity: 0; }
          50% { transform: translateY(-10px) scale(1); opacity: 1; }
        }

        /* Message de succès premium */
        .success-denonciation-message {
          position: relative;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          overflow: hidden;
        }

        .success-denonciation-icon {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.2), transparent);
          border: 2px solid rgba(16, 185, 129, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          animation: successPulse 2s ease-in-out infinite;
        }

        .success-icon-large {
          width: 2.5rem;
          height: 2.5rem;
          color: #10B981;
        }

        .success-denonciation-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .success-denonciation-description {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .success-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .success-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #10B981;
          border-radius: 50%;
          animation: successParticle 3s ease-in-out infinite;
        }

        .success-particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .success-particle:nth-child(2) { top: 80%; left: 20%; animation-delay: 0.5s; }
        .success-particle:nth-child(3) { top: 40%; left: 90%; animation-delay: 1s; }
        .success-particle:nth-child(4) { top: 60%; left: 5%; animation-delay: 1.5s; }
        .success-particle:nth-child(5) { top: 10%; left: 70%; animation-delay: 2s; }
        .success-particle:nth-child(6) { top: 90%; left: 80%; animation-delay: 2.5s; }
        .success-particle:nth-child(7) { top: 30%; left: 30%; animation-delay: 0.2s; }
        .success-particle:nth-child(8) { top: 70%; left: 60%; animation-delay: 0.7s; }

        @keyframes successParticle {
          0%, 100% { transform: translateY(0) scale(0); opacity: 0; }
          50% { transform: translateY(-20px) scale(1); opacity: 1; }
        }

        /* Section statistiques avancées améliorée */
        .advanced-stats-section {
          animation: fadeInUp 0.8s ease-out 1s both;
        }

        .stats-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .stats-glass::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f9a825, transparent);
        }

        .stats-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2.5rem;
          color: white;
          text-align: center;
          margin-bottom: 1rem;
        }

        .stats-subtitle {
          color: #94a3b8;
          text-align: center;
          margin-bottom: 3rem;
          font-size: 1.125rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .advanced-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .advanced-stat {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .advanced-stat:hover {
          border-color: rgba(226, 88, 34, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(226, 88, 34, 0.1);
        }

        .stat-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(226, 88, 34, 0.1);
          border: 1px solid rgba(226, 88, 34, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon {
          width: 2rem;
          height: 2rem;
          color: #e25822;
        }

        .stat-content {
          flex: 1;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: #e25822;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .stat-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #e25822, #f9a825);
          border-radius: 0 0 20px 20px;
          transition: width 1s ease-in-out;
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

        @keyframes successPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 1200px) {
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

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
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
            align-items: stretch;
          }

          .advanced-stats-grid {
            grid-template-columns: 1fr;
          }

          .problem-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .problem-actions {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }

          .action-buttons {
            justify-content: space-between;
          }

          .modal-content {
            padding: 1.5rem;
            margin: 1rem;
          }

          .modal-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .premium-denonciation-content {
            padding: 0 1rem;
          }

          .denonciation-main-title {
            font-size: 2rem;
          }

          .denonciation-subtitle {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumDenonciationPage;