import { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  Headphones, 
  GraduationCap, 
  Monitor, 
  Film, 
  Image, 
  BarChart3,
  Star,
  Download,
  Clock,
  User,
  ArrowRight,
  ChevronDown,
  Eye,
  Filter,
  Library,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  Play,
  Bookmark,
  Share2
} from 'lucide-react';

// Import des images - à adapter selon votre structure de projet
import booksImage from '../assets/books-collection.webp';
import historyImage from '../assets/books-collection.webp';
import cultureImage from '../assets/books-collection.webp';
import leadershipImage from '../assets/books-collection.webp';
import economyImage from '../assets/books-collection.webp';
import philosophyImage from '../assets/books-collection.webp';
import './ressource.css';

const RessourcesPremium = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [activeTab, setActiveTab] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [savedResources, setSavedResources] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const toggleSaveResource = (resourceId) => {
    setSavedResources(prev => {
      const newSet = new Set(prev);
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId);
      } else {
        newSet.add(resourceId);
      }
      return newSet;
    });
  };

  // Définition des catégories organisées
  const categoryStructure = {
    'Tous': {
      name: 'Toutes les ressources',
      description: 'Explorez l\'ensemble de notre bibliothèque premium',
      color: '#e25822',
      icon: Library,
      gradient: 'linear-gradient(135deg, #e25822 0%, #ff7b47 100%)'
    },
    'Scientifiques': {
      name: 'Ressources Scientifiques',
      description: 'Contenu académique, recherche et études approfondies',
      color: '#e25822',
      icon: GraduationCap,
      gradient: 'linear-gradient(135deg, #e25822 0%, #ff7b47 100%)',
      subcategories: ['Histoire', 'Économie', 'Anthropologie', 'Archéologie', 'Linguistique', 'Sciences Politiques']
    },
    'Non-Scientifiques': {
      name: 'Ressources Culturelles',
      description: 'Arts, traditions, spiritualité et expressions créatives',
      color: '#e25822',
      icon: Sparkles,
      gradient: 'linear-gradient(135deg, #e25822 0%, #ff7b47 100%)',
      subcategories: ['Culture', 'Art', 'Spiritualité', 'Littérature', 'Musique', 'Cinéma']
    }
  };

  const resources = [
    {
      id: 1,
      title: "Les Empires du Mali et du Songhaï : Analyse Historique",
      description: "Étude approfondie des structures politiques, économiques et sociales des grands empires ouest-africains.",
      type: "Ebook",
      category: "Histoire",
      subcategory: "Scientifiques",
      level: "Intermédiaire",
      duration: "3h de lecture",
      rating: 4.9,
      downloads: 2847,
      price: "Gratuit",
      featured: true,
      image: historyImage,
      levelColor: "#e25822",
      priceColor: "#10b981",
      tags: ["Archéologie", "Commerce Transsaharien", "Structures Politiques"],
      author: "Dr. Ibrahim Traoré",
      progress: 0
    },
    {
      id: 2,
      title: "Contes et Légendes Akan : Trésors de l'Oralité",
      description: "Collection authentique de récits traditionnels préservant la sagesse ancestrale du peuple Akan.",
      type: "Audiobook",
      category: "Culture",
      subcategory: "Non-Scientifiques",
      level: "Débutant",
      duration: "2h30 audio",
      rating: 4.8,
      downloads: 1923,
      price: "Premium",
      featured: false,
      image: cultureImage,
      levelColor: "#10b981",
      priceColor: "#e25822",
      tags: ["Tradition Orale", "Mythologie", "Sagesse Ancestrale"],
      author: "Mariam Kouyaté",
      progress: 45
    },
    {
      id: 3,
      title: "Leadership Ubuntu : Applications en Management Moderne",
      description: "Cadre théorique et études de cas sur l'application des principes Ubuntu dans les organisations contemporaines.",
      type: "Masterclass",
      category: "Leadership",
      subcategory: "Scientifiques",
      level: "Avancé",
      duration: "4h de formation",
      rating: 4.9,
      downloads: 856,
      price: "29€",
      featured: true,
      image: leadershipImage,
      levelColor: "#ef4444",
      priceColor: "#e25822",
      tags: ["Philosophie Managériale", "Études de Cas", "Psychologie Organisationnelle"],
      author: "Prof. Kwame Nkrumah",
      progress: 100
    },
    {
      id: 4,
      title: "Art Contemporain Africain : Révolution Esthétique",
      description: "Exploration des mouvements artistiques innovants redéfinissant le paysage culturel africain global.",
      type: "Guide Visuel",
      category: "Art",
      subcategory: "Non-Scientifiques",
      level: "Intermédiaire",
      duration: "150 pages",
      rating: 4.7,
      downloads: 1245,
      price: "Premium",
      featured: false,
      image: cultureImage,
      levelColor: "#e25822",
      priceColor: "#e25822",
      tags: ["Mouvements Artistiques", "Innovation", "Expression Culturelle"],
      author: "Aïssata Dembélé",
      progress: 25
    },
    {
      id: 5,
      title: "Économies Circulaires : Modèles Africains Durables",
      description: "Analyse économique des systèmes traditionnels et innovations modernes pour un développement soutenable.",
      type: "Rapport",
      category: "Économie",
      subcategory: "Scientifiques",
      level: "Avancé",
      duration: "2h de lecture",
      rating: 4.6,
      downloads: 634,
      price: "19€",
      featured: false,
      image: economyImage,
      levelColor: "#ef4444",
      priceColor: "#e25822",
      tags: ["Développement Durable", "Analyse Économique", "Innovation Sociale"],
      author: "Dr. Fatoumata Bâ",
      progress: 0
    },
    {
      id: 6,
      title: "Philosophie Bantoue : Sagesse pour le Monde Moderne",
      description: "Dialogue entre la sagesse traditionnelle bantoue et les défis philosophiques contemporains.",
      type: "Ebook",
      category: "Spiritualité",
      subcategory: "Non-Scientifiques",
      level: "Avancé",
      duration: "4h de lecture",
      rating: 4.8,
      downloads: 789,
      price: "Premium",
      featured: true,
      image: philosophyImage,
      levelColor: "#ef4444",
      priceColor: "#e25822",
      tags: ["Sagesse Traditionnelle", "Réflexion", "Éthique Moderne"],
      author: "Sékou Diarra",
      progress: 75
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesTab = activeTab === 'Tous' || resource.subcategory === activeTab;
    const matchesCategory = activeCategory === 'Tous' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         resource.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Ebook': return <BookOpen size={16} />;
      case 'Audiobook': return <Headphones size={16} />;
      case 'Masterclass': return <GraduationCap size={16} />;
      case 'Cours Interactif': return <Monitor size={16} />;
      case 'Documentaire': return <Film size={16} />;
      case 'Guide Visuel': return <Image size={16} />;
      case 'Rapport': return <BarChart3 size={16} />;
      default: return <BookOpen size={16} />;
    }
  };

  const getCategoryStats = () => {
    const totalResources = resources.length;
    const scientificResources = resources.filter(r => r.subcategory === 'Scientifiques').length;
    const culturalResources = resources.filter(r => r.subcategory === 'Non-Scientifiques').length;
    
    return {
      total: totalResources,
      scientific: scientificResources,
      cultural: culturalResources,
      categories: activeTab === 'Tous' ? 12 : categoryStructure[activeTab]?.subcategories?.length || 6
    };
  };

  const stats = getCategoryStats();

  return (
    <section ref={sectionRef} className="ressources-premium-section">
      <div className="ressources-premium-container">
        {/* En-tête avec design premium */}
        <div className="ressources-premium-header">
          <div className="ressources-premium-header-content">
           
            <h1 className="ressources-premium-title">
              Ressources <span className="ressources-premium-title-accent">Premium</span>
            </h1>
            <p className="ressources-premium-description">
              Accédez à une bibliothèque unique de connaissances africaines, 
              soigneusement sélectionnée par nos experts.
            </p>
            
            {/* Statistiques rapides */}
            <div className="ressources-premium-quick-stats">
              <div className="ressources-premium-quick-stat">
                <span className="ressources-premium-quick-stat-value">{stats.total}+</span>
                <span className="ressources-premium-quick-stat-label">Ressources</span>
              </div>
              <div className="ressources-premium-quick-stat">
                <span className="ressources-premium-quick-stat-value">15K+</span>
                <span className="ressources-premium-quick-stat-label">Téléchargements</span>
              </div>
              <div className="ressources-premium-quick-stat">
                <span className="ressources-premium-quick-stat-value">4.8/5</span>
                <span className="ressources-premium-quick-stat-label">Évaluation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation principale */}
        <div className="ressources-premium-main-nav">
          {Object.entries(categoryStructure).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                className={`ressources-premium-nav-item ${activeTab === key ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(key);
                  setActiveCategory('Tous');
                }}
              >
                <div className="ressources-premium-nav-icon">
                  <IconComponent size={20} />
                </div>
                <span className="ressources-premium-nav-text">{category.name}</span>
                <div className="ressources-premium-nav-indicator"></div>
              </button>
            );
          })}
        </div>

        {/* Barre de recherche avancée */}
        <div className={`ressources-premium-search-section ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="ressources-premium-search-card">
            <div className="ressources-premium-search-header">
              <h3>Recherche Avancée</h3>
              <p>Trouvez exactement ce dont vous avez besoin</p>
            </div>
            
            <div className="ressources-premium-search-input-container">
              <Search className="ressources-premium-search-icon" size={20} />
              <input
                type="text"
                placeholder="Rechercher par titre, auteur, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ressources-premium-search-input"
              />
              {searchQuery && (
                <button 
                  className="ressources-premium-clear-search"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filtres rapides */}
            <div className="ressources-premium-quick-filters">
              <div className="ressources-premium-filters-scroll">
                <button
                  className={`ressources-premium-quick-filter ${activeCategory === 'Tous' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('Tous')}
                >
                  Tous
                </button>
                {categoryStructure[activeTab]?.subcategories?.map((subcategory) => (
                  <button
                    key={subcategory}
                    className={`ressources-premium-quick-filter ${activeCategory === subcategory ? 'active' : ''}`}
                    onClick={() => setActiveCategory(subcategory)}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section des résultats */}
        <div className="ressources-premium-results-section">
          <div className="ressources-premium-results-header">
            <div className="ressources-premium-results-info">
              <h2>Résultats de la recherche</h2>
              <p>
                {filteredResources.length} {filteredResources.length === 1 ? 'ressource trouvée' : 'ressources trouvées'}
                {activeCategory !== 'Tous' && ` dans ${activeCategory}`}
                {searchQuery && ` pour "${searchQuery}"`}
              </p>
            </div>
            
            <div className="ressources-premium-sort-options">
              <select className="ressources-premium-sort-select">
                <option>Trier par : Pertinence</option>
                <option>Plus populaire</option>
                <option>Plus récent</option>
                <option>Note élevée</option>
              </select>
            </div>
          </div>

          {/* Grille des ressources */}
          {filteredResources.length > 0 ? (
            <div className="ressources-premium-resources-grid">
              {filteredResources.map((resource, index) => (
                <div
                  key={resource.id}
                  className={`ressources-premium-resource-card ${isVisible ? 'animate-stagger' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image et overlay */}
                  <div className="ressources-premium-card-media">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="ressources-premium-resource-image"
                    />
                    <div className="ressources-premium-media-overlay">
                      {/* Badges */}
                      <div className="ressources-premium-card-badges">
                        <div 
                          className="ressources-premium-level-badge"
                          style={{ backgroundColor: resource.levelColor }}
                        >
                          {resource.level}
                        </div>
                        {resource.featured && (
                          <div className="ressources-premium-featured-badge">
                            <Star size={12} fill="currentColor" />
                            Recommandé
                          </div>
                        )}
                      </div>

                      {/* Actions rapides */}
                      <div className="ressources-premium-media-actions">
                        <button 
                          className={`ressources-premium-save-btn ${savedResources.has(resource.id) ? 'saved' : ''}`}
                          onClick={() => toggleSaveResource(resource.id)}
                        >
                          <Bookmark size={16} fill={savedResources.has(resource.id) ? "currentColor" : "none"} />
                        </button>
                        <button className="ressources-premium-play-btn">
                          <Play size={16} fill="currentColor" />
                        </button>
                      </div>
                    </div>

                    {/* Barre de progression */}
                    {resource.progress > 0 && (
                      <div className="ressources-premium-progress-bar">
                        <div 
                          className="ressources-premium-progress-fill"
                          style={{ width: `${resource.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Contenu de la carte */}
                  <div className="ressources-premium-card-content">
                    <div className="ressources-premium-card-header">
                      <div className="ressources-premium-type-indicator">
                        {getTypeIcon(resource.type)}
                        <span>{resource.type}</span>
                      </div>
                      <div className="ressources-premium-rating">
                        <Star size={14} fill="currentColor" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>

                    <h3 className="ressources-premium-resource-title">{resource.title}</h3>
                    <p className="ressources-premium-resource-description">{resource.description}</p>

                    {/* Métadonnées */}
                    <div className="ressources-premium-resource-meta">
                      <div className="ressources-premium-meta-item">
                        <User size={14} />
                        <span>{resource.author}</span>
                      </div>
                      <div className="ressources-premium-meta-item">
                        <Clock size={14} />
                        <span>{resource.duration}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="ressources-premium-resource-tags">
                      {resource.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="ressources-premium-resource-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer de la carte */}
                    <div className="ressources-premium-card-footer">
                      <div className="ressources-premium-stats">
                        <div className="ressources-premium-stat">
                          <Download size={14} />
                          <span>{resource.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="ressources-premium-card-actions">
                        <div 
                          className={`ressources-premium-price ${resource.price.toLowerCase()}`}
                        >
                          {resource.price}
                        </div>
                        <button className="ressources-premium-action-btn">
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Effets de hover */}
                  <div className="ressources-premium-card-hover"></div>
                </div>
              ))}
            </div>
          ) : (
            /* État aucun résultat */
            <div className="ressources-premium-empty-state">
              <div className="ressources-premium-empty-icon">
                <Search size={48} />
              </div>
              <h3>Aucun résultat trouvé</h3>
              <p>Essayez d'ajuster vos critères de recherche ou explorez d'autres catégories.</p>
              <div className="ressources-premium-empty-actions">
                <button 
                  className="ressources-premium-primary-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('Tous');
                  }}
                >
                  Réinitialiser les filtres
                </button>
                <button 
                  className="ressources-premium-secondary-btn"
                  onClick={() => setActiveTab('Tous')}
                >
                  Parcourir tout le catalogue
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Section d'appel à l'action */}
        {filteredResources.length > 0 && (
          <div className="ressources-premium-cta-section">
            <div className="ressources-premium-cta-card">
              <div className="ressources-premium-cta-content">
                <h3>Vous n'avez pas trouvé ce que vous cherchiez ?</h3>
                <p>Notre bibliothèque s'enrichit constamment de nouvelles ressources.</p>
              </div>
              <button className="ressources-premium-cta-btn">
                <span>Voir toutes les ressources</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Éléments décoratifs modernes */}
      <div className="ressources-premium-background">
        <div className="ressources-premium-gradient-orb ressources-premium-orb-1"></div>
        <div className="ressources-premium-gradient-orb ressources-premium-orb-2"></div>
        <div className="ressources-premium-gradient-orb ressources-premium-orb-3"></div>
        <div className="ressources-premium-grid-overlay"></div>
      </div>
    </section>
  );
};

export default RessourcesPremium;