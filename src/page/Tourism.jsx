import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, MapPin, Globe, Mountain, Castle, Filter, X, 
  Calendar, Users, Star, ArrowRight, ChevronDown, 
  Compass, Palette, Camera, History, Sparkles,
  Plane, Heart, Share2, Clock, Navigation
} from 'lucide-react';
import './tourism.css';
// Données de démonstration
const tourismData = [
  {
    id: 1,
    title: "Les Alpes Suisses",
    country: "Suisse",
    category: "paysage",
    description: "Découvrez les sommets enneigés et les vallées verdoyantes des Alpes suisses, un paradis pour les amateurs de nature et de sports d'hiver.",
    image: "/images/alpes-suisses.jpg",
    highlights: ["Randonnée alpine", "Ski de classe mondiale", "Villages pittoresques"],
    rating: 4.8,
    visitors: "2.5M/an",
    bestSeason: "Décembre à Mars",
    experience: "Aventure en montagne",
    priceRange: "$$$"
  },
  {
    id: 2,
    title: "Rome Antique",
    country: "Italie", 
    category: "heritage",
    description: "Plongez dans l'histoire de la Rome antique à travers ses monuments emblématiques et ses ruines millénaires.",
    image: "/images/rome-antique.jpg",
    highlights: ["Colisée", "Forum Romain", "Panathéon"],
    rating: 4.9,
    visitors: "7M/an",
    bestSeason: "Avril à Juin",
    experience: "Voyage dans le temps", 
    priceRange: "$$"
  },
  {
    id: 3,
    title: "Santorini",
    country: "Grèce",
    category: "paysage", 
    description: "L'île aux maisons blanches et aux couchers de soleil légendaires, joyau de la mer Égée.",
    image: "/images/santorini.jpg",
    highlights: ["Couchers de soleil", "Architecture cycladique", "Plages volcaniques"],
    rating: 4.7,
    visitors: "2M/an",
    bestSeason: "Mai à Octobre",
    experience: "Évasion romantique",
    priceRange: "$$$"
  },
  {
    id: 4,
    title: "Kyoto Traditionnel", 
    country: "Japon",
    category: "heritage",
    description: "Imprégnez-vous de la culture japonaise traditionnelle dans l'ancienne capitale impériale.",
    image: "/images/kyoto.jpg",
    highlights: ["Temples anciens", "Quartiers historiques", "Cérémonie du thé"],
    rating: 4.8,
    visitors: "53M/an",
    bestSeason: "Mars à Mai",
    experience: "Culture et tradition",
    priceRange: "$$"
  },
  {
    id: 5,
    title: "Paysages de Norvège",
    country: "Norvège",
    category: "paysage",
    description: "Fjords majestueux, aurores boréales et villages de pêcheurs colorés.",
    image: "/images/norvege.jpg",
    highlights: ["Fjords", "Aurores boréales", "Villages côtiers"],
    rating: 4.6,
    visitors: "1.2M/an",
    bestSeason: "Juin à Août",
    experience: "Nature sauvage",
    priceRange: "$$$"
  },
  {
    id: 6,
    title: "Machu Picchu",
    country: "Pérou",
    category: "heritage",
    description: "La citadelle inca perdue, chef-d'œuvre d'architecture et témoignage d'une civilisation avancée.",
    image: "/images/machu-picchu.jpg",
    highlights: ["Architecture inca", "Vue panoramique", "Histoire mystérieuse"],
    rating: 4.9,
    visitors: "1.5M/an",
    bestSeason: "Mai à Septembre",
    experience: "Aventure historique",
    priceRange: "$$"
  }
];

const TourismExplorer = () => {
  const [destinations, setDestinations] = useState(tourismData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = tourismData;
    
    if (searchTerm) {
      filtered = filtered.filter(dest => 
        dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.experience.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }
    
    if (selectedCountry !== 'all') {
      filtered = filtered.filter(dest => dest.country === selectedCountry);
    }

    if (selectedExperience !== 'all') {
      filtered = filtered.filter(dest => dest.experience === selectedExperience);
    }
    
    setDestinations(filtered);
  }, [searchTerm, selectedCategory, selectedCountry, selectedExperience]);

  const countries = [...new Set(tourismData.map(dest => dest.country))];
  const experiences = [...new Set(tourismData.map(dest => dest.experience))];

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedCountry('all');
    setSelectedExperience('all');
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="tourism-explorer-app">
      

      <section className="tourism-hero-parallax">
        <div className="tourism-parallax-background">
          <div className="tourism-parallax-layer tourism-layer-1"></div>
          <div className="tourism-parallax-layer tourism-layer-2"></div>
          <div className="tourism-parallax-layer tourism-layer-3"></div>
        </div>
        
        <div className="tourism-hero-content">
          <div className="tourism-container">
            <div className="tourism-hero-text">
              <div className="tourism-hero-badge">
                <Sparkles size={16} />
                Explorez le monde différemment
              </div>
              
              <h1 className="tourism-hero-title">
                <span className="tourism-title-line">Des expériences</span>
                <span className="tourism-title-line tourism-highlight">
                  <span className="tourism-highlight-text">inoubliables</span>
                  <div className="tourism-highlight-underline"></div>
                </span>
                <span className="tourism-title-line">vous attendent</span>
              </h1>
              
              <p className="tourism-hero-subtitle">
                Découvrez des destinations uniques, des paysages époustouflants et 
                un héritage culturel riche à travers le monde.
              </p>

              <div className="tourism-hero-search">
                <div className="tourism-search-container">
                  <Search className="tourism-search-icon" />
                  <input
                    type="text"
                    placeholder="Où souhaitez-vous voyager ?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="tourism-search-input"
                  />
                  <button className="tourism-search-button">
                    <Navigation size={20} />
                  </button>
                </div>
              </div>

              <div className="tourism-hero-stats">
                <div className="tourism-stat-item">
                  <div className="tourism-stat-number">150+</div>
                  <div className="tourism-stat-label">Destinations uniques</div>
                </div>
                <div className="tourism-stat-item">
                  <div className="tourism-stat-number">4.8</div>
                  <div className="tourism-stat-label">Note moyenne</div>
                </div>
                <div className="tourism-stat-item">
                  <div className="tourism-stat-number">10M+</div>
                  <div className="tourism-stat-label">Visiteurs satisfaits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tourism-scroll-indicator">
          <div className="tourism-scroll-arrow"></div>
        </div>
      </section>

      <section className="tourism-filters-section">
        <div className="tourism-container">
          <div className="tourism-filters-container">
            <div className="tourism-filter-group">
              <div className="tourism-filter-item">
                <label className="tourism-filter-label">Type de destination</label>
                <div className="tourism-select-wrapper">
                  <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="tourism-filter-select"
                  >
                    <option value="all">Tous types</option>
                    <option value="paysage">Paysages</option>
                    <option value="heritage">Patrimoine</option>
                  </select>
                  <ChevronDown className="tourism-select-arrow" />
                </div>
              </div>
              
              <div className="tourism-filter-item">
                <label className="tourism-filter-label">Pays</label>
                <div className="tourism-select-wrapper">
                  <select 
                    value={selectedCountry} 
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="tourism-filter-select"
                  >
                    <option value="all">Tous pays</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                  <ChevronDown className="tourism-select-arrow" />
                </div>
              </div>
              
              <div className="tourism-filter-item">
                <label className="tourism-filter-label">Expérience</label>
                <div className="tourism-select-wrapper">
                  <select 
                    value={selectedExperience} 
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    className="tourism-filter-select"
                  >
                    <option value="all">Toutes expériences</option>
                    {experiences.map(exp => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                  <ChevronDown className="tourism-select-arrow" />
                </div>
              </div>
            </div>
            
            <button className="tourism-filter-reset" onClick={resetFilters}>
              <X size={16} />
              Réinitialiser
            </button>
          </div>
        </div>
      </section>

      <section className="tourism-destinations-section">
        <div className="tourism-container">
          <div className="tourism-section-header">
            <h2 className="tourism-section-title">
              <span className="tourism-title-decorator"></span>
              Destinations Sélectionnées
              <span className="tourism-title-decorator"></span>
            </h2>
            <p className="tourism-section-subtitle">
              {destinations.length} merveilleuse{destinations.length > 1 ? 's' : ''} destination{destinations.length > 1 ? 's' : ''} découverte{destinations.length > 1 ? 's' : ''}
            </p>
          </div>
          
          {destinations.length === 0 ? (
            <div className="tourism-no-results">
              <div className="tourism-no-results-illustration">
                <Compass size={64} />
              </div>
              <h3>Aucune destination trouvée</h3>
              <p>Essayez de modifier vos critères de recherche</p>
              <button className="tourism-cta-button" onClick={resetFilters}>
                <Sparkles size={16} />
                Tout réinitialiser
              </button>
            </div>
          ) : (
            <div className="tourism-grid-equal">
              {destinations.map((destination) => (
                <TourismDestinationCard 
                  key={destination.id} 
                  destination={destination}
                  onSelect={setSelectedDestination}
                  isFavorite={favorites.has(destination.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="tourism-cta-section">
        <div className="tourism-container">
          <div className="tourism-cta-content">
            <div className="tourism-cta-text">
              <h2>Prêt à vivre l'aventure ?</h2>
              <p>Rejoignez des milliers de voyageurs et découvrez des expériences uniques</p>
            </div>
            <div className="tourism-cta-buttons">
              <button className="tourism-cta-primary">
                <Plane size={20} />
                Commencer l'aventure
              </button>
              <button className="tourism-cta-secondary">
                <Compass size={20} />
                Explorer plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedDestination && (
        <TourismDestinationModal 
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          isFavorite={favorites.has(selectedDestination.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

const TourismDestinationCard = ({ destination, onSelect, isFavorite, onToggleFavorite }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="tourism-destination-card"
      onClick={() => onSelect(destination)}
    >
      <div className="tourism-card-image-container">
        <div className={`tourism-image-wrapper ${imageLoaded ? 'tourism-image-loaded' : ''}`}>
          <img 
            src={destination.image} 
            alt={destination.title}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUEyQjJDIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE1MCAyMDBIMjUwTDIwMCAxNTBaIiBmaWxsPSIjMzg0QTUxIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiMzODRBNTEiLz4KPHRleHQgeD0iMjAwIiB5PSIyNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2ODc0ODAiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+SW1hZ2Ugbm90IGF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+';
              setImageLoaded(true);
            }}
          />
          <div className="tourism-image-overlay"></div>
        </div>
        
        <div className="tourism-card-badges">
          <span className={`tourism-category-badge tourism-${destination.category}`}>
            {destination.category === 'paysage' ? <Mountain size={12} /> : <Castle size={12} />}
            {destination.category === 'paysage' ? 'Paysage' : 'Patrimoine'}
          </span>
          <span className="tourism-price-badge">{destination.priceRange}</span>
        </div>
        
        <button 
          className={`tourism-favorite-btn ${isFavorite ? 'tourism-favorite-active' : ''}`}
          onClick={(e) => onToggleFavorite(destination.id, e)}
        >
          <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="tourism-card-content">
        <div className="tourism-card-header">
          <div className="tourism-location">
            <MapPin size={14} />
            <span>{destination.country}</span>
          </div>
          <div className="tourism-rating">
            <Star size={14} fill="currentColor" />
            <span>{destination.rating}</span>
          </div>
        </div>
        
        <h3 className="tourism-card-title">{destination.title}</h3>
        <p className="tourism-card-description">{destination.description}</p>
        
        <div className="tourism-card-experience">
          <Compass size={14} />
          <span>{destination.experience}</span>
        </div>
        
        <div className="tourism-card-meta">
          <div className="tourism-meta-item">
            <Users size={12} />
            <span>{destination.visitors}</span>
          </div>
          <div className="tourism-meta-item">
            <Clock size={12} />
            <span>{destination.bestSeason}</span>
          </div>
        </div>
        
        <div className="tourism-card-highlights">
          {destination.highlights.map((highlight, i) => (
            <span key={i} className="tourism-highlight-tag">{highlight}</span>
          ))}
        </div>
        
        <button className="tourism-card-action">
          <span>Découvrir</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const TourismDestinationModal = ({ destination, onClose, isFavorite, onToggleFavorite }) => {
  return (
    <div className="tourism-modal-overlay" onClick={onClose}>
      <div className="tourism-destination-modal" onClick={(e) => e.stopPropagation()}>
        <button className="tourism-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="tourism-modal-gallery">
          <div className="tourism-main-image">
            <img 
              src={destination.image} 
              alt={destination.title}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUEyQjJDIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE1MCAyMDBIMjUwTDIwMCAxNTBaIiBmaWxsPSIjMzg0QTUxIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyMCIgcj0iMjAiIGZpbGw9IiMzODRBNTEiLz4KPHRleHQgeD0iMjAwIiB5PSIyNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2ODc0ODAiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+SW1hZ2Ugbm90IGF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+';
              }}
            />
          </div>
        </div>
        
        <div className="tourism-modal-content">
          <div className="tourism-modal-header">
            <div className="tourism-header-top">
              <div className="tourism-destination-meta">
                <span className={`tourism-category-badge tourism-${destination.category}`}>
                  {destination.category === 'paysage' ? <Mountain size={14} /> : <Castle size={14} />}
                  {destination.category === 'paysage' ? 'Paysage' : 'Patrimoine'}
                </span>
                <div className="tourism-location">
                  <MapPin size={14} />
                  <span>{destination.country}</span>
                </div>
              </div>
              
              <div className="tourism-header-actions">
                <button className="tourism-action-btn tourism-share-btn">
                  <Share2 size={16} />
                </button>
                <button 
                  className={`tourism-action-btn tourism-favorite-btn ${isFavorite ? 'tourism-favorite-active' : ''}`}
                  onClick={() => onToggleFavorite(destination.id, { stopPropagation: () => {} })}
                >
                  <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
                </button>
              </div>
            </div>
            
            <h1 className="tourism-modal-title">{destination.title}</h1>
            
            <div className="tourism-rating-stats">
              <div className="tourism-rating">
                <Star size={20} fill="currentColor" />
                <span className="tourism-rating-value">{destination.rating}</span>
                <span className="tourism-rating-text">/5</span>
              </div>
              <div className="tourism-stats">
                <div className="tourism-stat">
                  <Users size={16} />
                  <span>{destination.visitors}</span>
                </div>
                <div className="tourism-stat">
                  <Clock size={16} />
                  <span>{destination.bestSeason}</span>
                </div>
                <div className="tourism-stat">
                  <Compass size={16} />
                  <span>{destination.experience}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tourism-modal-body">
            <div className="tourism-description-section">
              <h3>À propos</h3>
              <p>{destination.description}</p>
            </div>
            
            <div className="tourism-highlights-section">
              <h3>Points forts</h3>
              <div className="tourism-highlights-grid">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="tourism-highlight-item">
                    <div className="tourism-highlight-icon">
                      <Sparkles size={16} />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="tourism-details-section">
              <h3>Informations pratiques</h3>
              <div className="tourism-details-grid">
                <div className="tourism-detail-item">
                  <strong>Meilleure saison:</strong>
                  <span>{destination.bestSeason}</span>
                </div>
                <div className="tourism-detail-item">
                  <strong>Type d'expérience:</strong>
                  <span>{destination.experience}</span>
                </div>
                <div className="tourism-detail-item">
                  <strong>Budget moyen:</strong>
                  <span>{destination.priceRange}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tourism-modal-actions">
            <button className="tourism-primary-action">
              <Calendar size={20} />
              Planifier ma visite
            </button>
            <button className="tourism-secondary-action">
              <Compass size={20} />
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourismExplorer;