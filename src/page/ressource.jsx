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
  Sparkles
} from 'lucide-react';

// Import des images - à adapter selon votre structure de projet
import booksImage from '../assets/books-collection.webp';
import historyImage from '../assets/books-collection.webp';
import cultureImage from '../assets/books-collection.webp';
import leadershipImage from '../assets/books-collection.webp';
import economyImage from '../assets/books-collection.webp';
import philosophyImage from '../assets/books-collection.webp';
import './ressource.css';

const ResourcesCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [activeTab, setActiveTab] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
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

  // Définition des catégories organisées
  const categoryStructure = {
    'Tous': {
      name: 'Toutes les ressources',
      description: 'Explorez l\'ensemble de notre bibliothèque',
      color: '#FF6B35',
      icon: Library
    },
    'Scientifiques': {
      name: 'Ressources Scientifiques',
      description: 'Contenu académique, recherche et études approfondies',
      color: '#3B82F6',
      icon: GraduationCap,
      subcategories: ['Histoire', 'Économie', 'Anthropologie', 'Archéologie', 'Linguistique', 'Sciences Politiques']
    },
    'Non-Scientifiques': {
      name: 'Ressources Culturelles',
      description: 'Arts, traditions, spiritualité et expressions créatives',
      color: '#8B5CF6',
      icon: Sparkles,
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
      levelColor: "#FF6B35",
      priceColor: "#10B981",
      tags: ["Archéologie", "Commerce Transsaharien", "Structures Politiques"],
      author: "Dr. Ibrahim Traoré"
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
      levelColor: "#10B981",
      priceColor: "#FF6B35",
      tags: ["Tradition Orale", "Mythologie", "Sagesse Ancestrale"],
      author: "Mariam Kouyaté"
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
      levelColor: "#EF4444",
      priceColor: "#3B82F6",
      tags: ["Philosophie Managériale", "Études de Cas", "Psychologie Organisationnelle"],
      author: "Prof. Kwame Nkrumah"
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
      levelColor: "#FF6B35",
      priceColor: "#FF6B35",
      tags: ["Mouvements Artistiques", "Innovation", "Expression Culturelle"],
      author: "Aïssata Dembélé"
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
      levelColor: "#EF4444",
      priceColor: "#3B82F6",
      tags: ["Développement Durable", "Analyse Économique", "Innovation Sociale"],
      author: "Dr. Fatoumata Bâ"
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
      levelColor: "#EF4444",
      priceColor: "#FF6B35",
      tags: ["Sagesse Traditionnelle", "Réflexion", "Éthique Moderne"],
      author: "Sékou Diarra"
    },
    {
      id: 7,
      title: "Swahili Académique : Méthodologie d'Apprentissage",
      description: "Approche structurée pour maîtriser le swahili dans des contextes académiques et professionnels.",
      type: "Cours Interactif",
      category: "Linguistique",
      subcategory: "Scientifiques",
      level: "Débutant",
      duration: "20h de cours",
      rating: 4.9,
      downloads: 2156,
      price: "39€",
      featured: false,
      image: booksImage,
      levelColor: "#10B981",
      priceColor: "#3B82F6",
      tags: ["Méthodologie", "Linguistique Appliquée", "Communication Académique"],
      author: "Dr. Nala Mbeki"
    },
    {
      id: 8,
      title: "Masques Africains : Symbolisme et Spiritualité",
      description: "Voyage au cœur de la signification culturelle et spirituelle des masques dans les traditions africaines.",
      type: "Documentaire",
      category: "Culture",
      subcategory: "Non-Scientifiques",
      level: "Intermédiaire",
      duration: "90min vidéo",
      rating: 4.7,
      downloads: 1467,
      price: "Premium",
      featured: false,
      image: cultureImage,
      levelColor: "#FF6B35",
      priceColor: "#FF6B35",
      tags: ["Symbolisme", "Spiritualité", "Expression Artistique"],
      author: "Youssef Camara"
    },
    {
      id: 9,
      title: "Archéologie des Royaumes Africains : Nouvelles Découvertes",
      description: "Synthèse des récentes découvertes archéologiques éclairant l'histoire des civilisations africaines.",
      type: "Ebook",
      category: "Archéologie",
      subcategory: "Scientifiques",
      level: "Avancé",
      duration: "5h de lecture",
      rating: 4.8,
      downloads: 523,
      price: "24€",
      featured: true,
      image: historyImage,
      levelColor: "#EF4444",
      priceColor: "#3B82F6",
      tags: ["Recherche Archéologique", "Civilisations Anciennes", "Découvertes Scientifiques"],
      author: "Prof. Aminata Sow"
    },
    {
      id: 10,
      title: "Musique des Griots : Tradition et Innovation",
      description: "Exploration de l'évolution de la tradition musicale des griots dans le paysage contemporain.",
      type: "Audiobook",
      category: "Musique",
      subcategory: "Non-Scientifiques",
      level: "Intermédiaire",
      duration: "3h audio",
      rating: 4.7,
      downloads: 987,
      price: "Premium",
      featured: false,
      image: cultureImage,
      levelColor: "#FF6B35",
      priceColor: "#FF6B35",
      tags: ["Tradition Musicale", "Innovation", "Patrimoine Culturel"],
      author: "Koffi Mensah"
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
    <section ref={sectionRef} className="resources-catalog-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="header-badge">
            <Sparkles size={16} />
            <span>Bibliothèque Premium</span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Ressources <span className="text-gradient-orange">Africaines</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de ressources éducatives et culturelles 
            pour approfondir vos connaissances sur l'héritage africain.
          </p>
        </div>

        {/* Navigation par type de contenu */}
        <div className="content-type-navigation">
          <div className="navigation-header">
            <h2 className="navigation-title">Explorer par Catégorie</h2>
            <p className="navigation-subtitle">Choisissez votre domaine d'intérêt</p>
          </div>
          <div className="tabs-container">
            {Object.entries(categoryStructure).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={key}
                  className={`content-tab ${activeTab === key ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(key);
                    setActiveCategory('Tous');
                  }}
                  style={{ '--tab-color': category.color }}
                >
                  <div className="tab-content">
                    <div className="tab-icon">
                      <IconComponent size={32} />
                    </div>
                    <div className="tab-text">
                      <span className="tab-name">{category.name}</span>
                      <span className="tab-description">{category.description}</span>
                    </div>
                    <div className="tab-count">
                      {key === 'Tous' && stats.total}
                      {key === 'Scientifiques' && stats.scientific}
                      {key === 'Non-Scientifiques' && stats.cultural}
                    </div>
                  </div>
                  <div className="tab-indicator"></div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Barre de recherche avancée */}
        <div className={`search-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="search-container">
            <div className="search-header">
              <h3 className="search-title">Recherche Avancée</h3>
              <p className="search-subtitle">
                Trouvez précisément ce que vous cherchez dans notre collection
              </p>
            </div>
            <div className="search-input-group">
              <div className="search-input-wrapper">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher par titre, description, auteur ou tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    className="clear-search"
                    onClick={() => setSearchQuery('')}
                    title="Effacer la recherche"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Filtres par sous-catégorie */}
          <div className="category-filters-section">
            <div className="filters-header">
              <div className="filters-label-wrapper">
                <Filter size={16} />
                <span className="filters-label">Filtrer par domaine :</span>
              </div>
              <span className="active-category">
                {activeCategory === 'Tous' ? 'Tous les domaines' : activeCategory}
              </span>
            </div>
            <div className="filters-grid">
              <button
                className={`category-filter ${activeCategory === 'Tous' ? 'active' : ''}`}
                onClick={() => setActiveCategory('Tous')}
              >
                <span className="filter-text">Tous les domaines</span>
                <span className="filter-count">
                  {activeTab === 'Tous' ? resources.length : 
                   resources.filter(r => r.subcategory === activeTab).length}
                </span>
              </button>
              {categoryStructure[activeTab]?.subcategories?.map((subcategory) => {
                const count = resources.filter(r => 
                  r.subcategory === activeTab && r.category === subcategory
                ).length;
                return (
                  <button
                    key={subcategory}
                    className={`category-filter ${activeCategory === subcategory ? 'active' : ''}`}
                    onClick={() => setActiveCategory(subcategory)}
                  >
                    <span className="filter-text">{subcategory}</span>
                    <span className="filter-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Statistiques en temps réel */}
        <div className={`live-stats ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <Library size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.total}+</div>
                <div className="stat-label">Ressources Total</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Download size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">15K+</div>
                <div className="stat-label">Téléchargements</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <TrendingUp size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">{stats.categories}</div>
                <div className="stat-label">Domaines d'Expertise</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <Award size={24} />
              </div>
              <div className="stat-content">
                <div className="stat-value">4.8/5</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Résultats de recherche */}
        <div className="results-section">
          <div className="results-header">
            <div className="results-info">
              <span className="results-count">{filteredResources.length}</span>
              <span className="results-text">
                {filteredResources.length === 1 ? 'ressource trouvée' : 'ressources trouvées'}
              </span>
              {activeCategory !== 'Tous' && (
                <span className="active-filter-tag">
                  dans <strong>{activeCategory}</strong>
                </span>
              )}
              {searchQuery && (
                <span className="search-query-tag">
                  pour "<strong>{searchQuery}</strong>"
                </span>
              )}
            </div>
            <div className="results-sort">
              <span className="sort-label">Trier par :</span>
              <select className="sort-select">
                <option>Plus populaire</option>
                <option>Plus récent</option>
                <option>Note élevée</option>
                <option>Alphabétique</option>
              </select>
            </div>
          </div>

          {/* Grille des ressources */}
          {filteredResources.length > 0 ? (
            <div className="resources-grid">
              {filteredResources.map((resource, index) => (
                <div
                  key={resource.id}
                  className={`resource-card ${isVisible ? 'animate-fade-in-up' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-inner">
                    {/* En-tête de la carte avec image */}
                    <div className="card-header">
                      <div className="card-image">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="resource-image"
                          onError={(e) => {
                            e.target.src = booksImage; // Image de fallback
                          }}
                        />
                        <div className="image-overlay"></div>
                        
                        {/* Badges contextuels */}
                        <div className="card-badges">
                          <div 
                            className="level-badge"
                            style={{ backgroundColor: resource.levelColor }}
                          >
                            {resource.level}
                          </div>
                          {resource.featured && (
                            <div className="featured-badge">
                              <Star size={14} />
                              Recommandé
                            </div>
                          )}
                        </div>

                        {/* Métadonnées overlay */}
                        <div className="resource-meta-overlay">
                          <div className="type-info">
                            {getTypeIcon(resource.type)}
                            <span className="type-name">{resource.type}</span>
                          </div>
                          <div className="duration-info">
                            <Clock size={14} />
                            <span className="duration-text">{resource.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corps de la carte */}
                    <div className="card-body">
                      <div className="card-category">
                        <span className="category-tag">{resource.category}</span>
                        <div className="rating-display">
                          <Star size={14} fill="currentColor" />
                          <span className="rating-value">{resource.rating}</span>
                        </div>
                      </div>

                      <h3 className="resource-title">{resource.title}</h3>
                      <p className="resource-description">{resource.description}</p>

                      {/* Auteur */}
                      <div className="author-info">
                        <User size={14} />
                        <span className="author-label">Par </span>
                        <span className="author-name">{resource.author}</span>
                      </div>

                      {/* Tags */}
                      <div className="resource-tags">
                        {resource.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="resource-tag">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Métriques */}
                      <div className="resource-metrics">
                        <div className="metric downloads">
                          <Download size={14} />
                          <span className="metric-value">{resource.downloads.toLocaleString()}</span>
                          <span className="metric-label">téléchargements</span>
                        </div>
                        <div 
                          className={`price-tag ${resource.price.toLowerCase()}`}
                          style={{ backgroundColor: resource.priceColor }}
                        >
                          {resource.price}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="card-actions">
                      <button className="primary-action">
                        <span className="action-text">Accéder au contenu</span>
                        <ArrowRight size={16} />
                      </button>
                      <button className="secondary-action" title="Aperçu">
                        <Eye size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Effets visuels */}
                  <div className="card-hover-effect"></div>
                  <div className="card-glow-effect"></div>
                </div>
              ))}
            </div>
          ) : (
            /* État aucun résultat */
            <div className="no-results-state">
              <div className="no-results-content">
                <div className="no-results-icon">
                  <Search size={48} />
                </div>
                <h3 className="no-results-title">Aucune ressource correspondante</h3>
                <p className="no-results-description">
                  Nous n'avons trouvé aucun résultat pour votre recherche. 
                  Essayez d'ajuster vos critères ou explorez une autre catégorie.
                </p>
                <div className="no-results-actions">
                  <button 
                    className="reset-filters-btn"
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('Tous');
                    }}
                  >
                    Réinitialiser les filtres
                  </button>
                  <button 
                    className="browse-all-btn"
                    onClick={() => setActiveTab('Tous')}
                  >
                    Parcourir toute la bibliothèque
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chargement de plus de contenu */}
        {filteredResources.length > 0 && (
          <div className={`load-more-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="load-more-content">
              <p className="load-more-text">
                Vous avez vu {filteredResources.length} ressources sur {stats.total}+ disponibles
              </p>
              <button className="load-more-button">
                <span className="button-text">Charger plus de ressources</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Éléments décoratifs */}
      <div className="decorative-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
    </section>
  );
};

export default ResourcesCatalog;