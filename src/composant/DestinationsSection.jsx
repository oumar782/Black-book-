import React, { useState, useMemo, useCallback } from 'react';
import { 
  Globe, Sun, Mountain, Compass, Trees, Building, MapPin, 
  Star, ArrowRight, Landmark, ChefHat, Utensils, Bus, Send, 
  X, Heart, Thermometer, Calendar, Bed, ChevronRight, Users,
  Map, Flag, Navigation, Waves, Palette, Music, Camera,
  Coffee, Wine, Ship, Plane, Train, Car, Hotel, Umbrella,
  Cloud, CloudRain, CloudSnow, CloudSun, Zap, Wind, Sun as SunIcon,
  Moon, Sunrise, Sunset, Award, Shield, AlertCircle, CheckCircle,
  Search, Filter, XCircle
} from 'lucide-react';
import '../page/tourism.css';

// Import des données de toutes les régions
import { eastAfricaCountries } from '../Data/eastAfricaCountries';
import { westAfricaCountries } from '../Data/westAfricaCountries';
import { northAfricaCountries } from '../Data/northAfricaCountries';
import { centralAfricaCountries } from '../Data/centralAfricaCountries';
import { southernAfricaCountries } from '../Data/southernAfricaCountries';
import { afroAmericanCountries } from '../Data/afroAmericanCountries';

// Fonction pour normaliser les données
const normalizeData = (data) => {
  if (!data) return [];
  return data.map(item => ({
    ...item,
    name: item.name || '',
    capital: item.capital || '',
    description: item.description || '',
    highlights: Array.isArray(item.highlights) ? item.highlights : [],
    regions: Array.isArray(item.regions) ? item.regions : [],
    languages: Array.isArray(item.languages) ? item.languages : [],
    gastronomy: item.gastronomy || {},
    practicalInfo: item.practicalInfo || {},
    testimonials: Array.isArray(item.testimonials) ? item.testimonials : []
  }));
};

// Combiner tous les pays avec leur région d'origine
const allCountries = [
  ...normalizeData(westAfricaCountries)?.map(country => ({ 
    ...country, 
    subregion: 'west-africa', 
    regionName: 'Afrique de l\'Ouest',
    continent: 'Afrique'
  })) || [],
  ...normalizeData(northAfricaCountries)?.map(country => ({ 
    ...country, 
    subregion: 'north-africa', 
    regionName: 'Afrique du Nord',
    continent: 'Afrique'
  })) || [],
  ...normalizeData(eastAfricaCountries).map(country => ({ 
    ...country, 
    subregion: 'east-africa', 
    regionName: 'Afrique de l\'Est',
    continent: 'Afrique'
  })),
  ...normalizeData(centralAfricaCountries)?.map(country => ({ 
    ...country, 
    subregion: 'central-africa', 
    regionName: 'Afrique Centrale',
    continent: 'Afrique'
  })) || [],
  ...normalizeData(southernAfricaCountries)?.map(country => ({ 
    ...country, 
    subregion: 'southern-africa', 
    regionName: 'Afrique Australe',
    continent: 'Afrique'
  })) || [],
  ...normalizeData(afroAmericanCountries)?.map(country => ({ 
    ...country, 
    subregion: 'afro-american', 
    regionName: 'Diaspora Afro-Américaine',
    continent: 'Diaspora'
  })) || []
].map((country, index) => ({
  ...country,
  id: country.id || `country-${index}`,
  name: country.name || 'Pays inconnu',
  capital: country.capital || '',
  description: country.description || '',
  image: country.image || 'https://via.placeholder.com/400x300?text=Image+non+disponible',
  bestTimeToVisit: country.bestTimeToVisit || 'Toute l\'année',
  flag: country.flag || '🏳️',
  subRegion: country.regionName || country.subregion || 'Non spécifié',
  highlights: Array.isArray(country.highlights) ? country.highlights : [],
  regions: Array.isArray(country.regions) ? country.regions : [],
  languages: Array.isArray(country.languages) ? country.languages : [],
  gastronomy: country.gastronomy || { dishes: [] },
  practicalInfo: country.practicalInfo || {},
  testimonials: Array.isArray(country.testimonials) ? country.testimonials : []
}));

export const countries = allCountries;

// Sous-régions avec statistiques
export const subregions = [
  { 
    id: 'all', 
    name: 'Toutes les régions', 
    icon: Globe,
    count: allCountries.length,
    color: '#FF6B35',
    description: 'Toutes nos destinations'
  },
  { 
    id: 'west-africa', 
    name: 'Afrique de l\'Ouest', 
    icon: Sun,
    count: normalizeData(westAfricaCountries)?.length || 0,
    color: '#FF9E2C',
    description: 'Culture vibrante et traditions'
  },
  { 
    id: 'north-africa', 
    name: 'Afrique du Nord', 
    icon: Mountain,
    count: normalizeData(northAfricaCountries)?.length || 0,
    color: '#4ECDC4',
    description: 'Histoire et déserts'
  },
  { 
    id: 'east-africa', 
    name: 'Afrique de l\'Est', 
    icon: Compass,
    count: normalizeData(eastAfricaCountries).length,
    color: '#45B7D1',
    description: 'Safaris et paysages'
  },
  { 
    id: 'central-africa', 
    name: 'Afrique Centrale', 
    icon: Trees,
    count: normalizeData(centralAfricaCountries)?.length || 0,
    color: '#96CEB4',
    description: 'Forêts et biodiversité'
  },
  { 
    id: 'southern-africa', 
    name: 'Afrique Australe', 
    icon: Globe,
    count: normalizeData(southernAfricaCountries)?.length || 0,
    color: '#FFEAA7',
    description: 'Aventures et nature'
  },
  { 
    id: 'afro-american', 
    name: 'Diaspora Afro-Américaine', 
    icon: Building,
    count: normalizeData(afroAmericanCountries)?.length || 0,
    color: '#DDA0DD',
    description: 'Culture afro-caribéenne'
  }
].filter(subregion => subregion.count > 0);

// Filtres supplémentaires par activité avec correspondances de mots-clés
const activityFilters = [
  { 
    id: 'all', 
    name: 'Tout', 
    icon: Globe, 
    color: '#FF6B35',
    keywords: []
  },
  { 
    id: 'beach', 
    name: 'Plages', 
    icon: Waves, 
    color: '#45B7D1',
    keywords: ['plage', 'beach', 'mer', 'océan', 'côte', 'sable', 'bord de mer']
  },
  { 
    id: 'mountain', 
    name: 'Montagnes', 
    icon: Mountain, 
    color: '#96CEB4',
    keywords: ['mont', 'mountain', 'montagne', 'altitude', 'sommet', 'pic', 'alpin']
  },
  { 
    id: 'safari', 
    name: 'Safari', 
    icon: Navigation, 
    color: '#FF9E2C',
    keywords: ['safari', 'wildlife', 'faune', 'animaux', 'réserve', 'parc national', 'lion', 'éléphant', 'girafe', 'zèbre']
  },
  { 
    id: 'culture', 
    name: 'Culture', 
    icon: Users, 
    color: '#DDA0DD',
    keywords: ['culture', 'histoire', 'traditions', 'patrimoine', 'musée', 'art', 'tradition']
  },
  { 
    id: 'adventure', 
    name: 'Aventure', 
    icon: Map, 
    color: '#4ECDC4',
    keywords: ['aventure', 'adventure', 'trekking', 'randonnée', 'expédition', 'exploration', 'sport extrême']
  },
  { 
    id: 'nature', 
    name: 'Nature', 
    icon: Trees, 
    color: '#96CEB4',
    keywords: ['nature', 'parc', 'forêt', 'jungle', 'biodiversité', 'écologie', 'environnement']
  },
  { 
    id: 'gastronomy', 
    name: 'Gastronomie', 
    icon: Utensils, 
    color: '#FF6B35',
    keywords: ['gastronomie', 'cuisine', 'plat', 'nourriture', 'restaurant', 'spécialité', 'culinaire']
  },
];

// Composant SubregionTabs
const SubregionTabs = ({ subregions, activeSubregion, onSubregionChange }) => {
  return (
    <div className="subregion-tabs">
      <div className="subregion-tabs-container">
        {subregions.map((subregion) => {
          const Icon = subregion.icon;
          return (
            <button
              key={subregion.id}
              onClick={() => onSubregionChange(subregion.id)}
              className={`subregion-tab ${activeSubregion === subregion.id ? 'active' : ''}`}
              data-color={subregion.color}
              title={subregion.description}
            >
              <div className="subregion-tab-content">
                <Icon size={16} />
                <span>{subregion.name}</span>
              </div>
              <div className="subregion-tab-count">
                {subregion.count}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Composant ActivityFilters
const ActivityFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="activity-filters-container">
      <div className="activity-filters-header">
        <div className="filters-title">
          <Filter size={16} />
          <span>Filtres d'activités</span>
        </div>
        {activeFilter !== 'all' && (
          <button
            onClick={() => onFilterChange('all')}
            className="clear-filters-button"
          >
            <XCircle size={14} />
            Effacer
          </button>
        )}
      </div>
      <div className="activity-filters">
        {activityFilters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`activity-filter ${activeFilter === filter.id ? 'active' : ''}`}
              data-color={filter.color}
              title={filter.name}
            >
              <Icon size={14} />
              <span>{filter.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Composant CountryCard
const CountryCard = ({ country, onClick }) => {
  const getRegionColor = (region) => {
    const regionColors = {
      'west-africa': '#FF9E2C',
      'north-africa': '#4ECDC4',
      'east-africa': '#45B7D1',
      'central-africa': '#96CEB4',
      'southern-africa': '#FFEAA7',
      'afro-american': '#DDA0DD'
    };
    return regionColors[region] || '#FF6B35';
  };

  const regionColor = getRegionColor(country.subregion);
  const highlights = country.highlights || [];
  const languages = country.languages || [];
  const regions = country.regions || [];

  return (
    <div
      onClick={onClick}
      className="country-card"
      data-color={regionColor}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="country-card-image">
        <img
          src={country.image}
          alt={country.name}
          loading="lazy"
        />
        <div className="country-card-badge capital" style={{ backgroundColor: `${regionColor}CC` }}>
          <MapPin size={12} />
          {country.capital || 'Capitale non spécifiée'}
        </div>
        <div className="country-card-badge flag">
          <Flag size={12} />
          {country.flag || '🏳️'}
        </div>
        <div className="country-card-badge best-time">
          <span>Meilleure période :</span> {country.bestTimeToVisit || 'Toute l\'année'}
        </div>
      </div>
      <div className="country-card-content">
        <div className="country-card-header">
          <h3>{country.name}</h3>
          <div className="country-card-region" style={{ backgroundColor: `${regionColor}20`, color: regionColor }}>
            {country.regionName || country.subRegion}
          </div>
        </div>
        
        <p className="country-card-description">
          {country.description || 'Aucune description disponible.'}
        </p>
        
        {highlights.length > 0 && (
          <div className="country-card-highlights">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="country-card-highlight"
                style={{ backgroundColor: `${regionColor}15`, color: regionColor }}
              >
                {highlight}
              </span>
            ))}
            {highlights.length > 3 && (
              <span className="country-card-highlight-more">
                +{highlights.length - 3}
              </span>
            )}
          </div>
        )}
        
        <div className="country-card-footer">
          <div className="country-card-stats">
            <div className="country-card-stat">
              <div className="stat-label">Régions</div>
              <div className="stat-value">{regions.length}</div>
            </div>
            <div className="stat-divider" />
            <div className="country-card-stat">
              <div className="stat-label">Langues</div>
              <div className="stat-value">{languages.length}</div>
            </div>
          </div>
          <div className="country-card-explore" style={{ color: regionColor }}>
            <span>Explorer</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant CountryModal
const CountryModal = ({ country, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('regions');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const getRegionColor = (region) => {
    const regionColors = {
      'west-africa': '#FF9E2C',
      'north-africa': '#4ECDC4',
      'east-africa': '#45B7D1',
      'central-africa': '#96CEB4',
      'southern-africa': '#FFEAA7',
      'afro-american': '#DDA0DD'
    };
    return regionColors[region] || '#FF6B35';
  };

  const regionColor = getRegionColor(country?.subregion);

  const tabConfig = [
    { id: 'regions', label: 'Régions', icon: <Map size={16} /> },
    { id: 'activities', label: 'Activités', icon: <Navigation size={16} /> },
    { id: 'gastronomy', label: 'Gastronomie', icon: <Utensils size={16} /> },
    { id: 'practical', label: 'Infos Pratiques', icon: <Bus size={16} /> },
    { id: 'testimonials', label: 'Avis', icon: <Star size={16} /> },
    { id: 'contact', label: 'Demande', icon: <Send size={16} /> },
  ];

  const activityIcons = {
    culture: <Users size={20} />,
    nature: <Trees size={20} />,
    adventure: <Map size={20} />,
    gastronomy: <ChefHat size={20} />,
    safari: <Navigation size={20} />,
    beach: <Waves size={20} />,
    mountain: <Mountain size={20} />,
    heritage: <Landmark size={20} />,
    wildlife: <Trees size={20} />,
    trekking: <Navigation size={20} />,
    photography: <Camera size={20} />,
    art: <Palette size={20} />,
    music: <Music size={20} />,
    coffee: <Coffee size={20} />,
    wine: <Wine size={20} />,
  };

  if (!isOpen || !country) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="country-modal-overlay">
      <div className="country-modal" data-color={regionColor}>
        {/* Header avec image */}
        <div className="country-modal-header">
          <img
            src={country.image}
            alt={country.name}
          />
          <div className="country-modal-header-content">
            <div className="country-modal-location-info">
              <div className="location-item">
                <MapPin size={16} />
                <span>{country.capital}</span>
              </div>
              <div className="location-item">
                <Flag size={16} />
                <span>{country.flag} {country.name}</span>
              </div>
              <div className="country-modal-region-badge" style={{ backgroundColor: `${regionColor}30`, color: regionColor }}>
                {country.subRegion}
              </div>
            </div>
            <h2>{country.name}</h2>
            <p>{country.description}</p>
          </div>

          <button
            onClick={onClose}
            className="country-modal-close"
          >
            <X size={20} />
          </button>

          <button className="country-modal-favorite">
            <Heart size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="country-modal-tabs">
          {tabConfig.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`country-modal-tab ${activeTab === tab.id ? 'active' : ''}`}
              data-color={regionColor}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenu des tabs */}
        <div className="country-modal-content">
          {/* Régions */}
          {activeTab === 'regions' && (
            <div className="regions-grid">
              {country.regions?.map((region) => (
                <div 
                  key={region.id} 
                  className="region-card"
                  data-color={regionColor}
                >
                  <div className="region-card-image">
                    <img
                      src={region.image}
                      alt={region.name}
                    />
                  </div>
                  <div className="region-card-content">
                    <h4>{region.name}</h4>
                    <p>{region.description}</p>
                    <div className="region-highlights">
                      {region.highlights?.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="region-highlight" data-color={regionColor}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <div className="region-stats">
                      <span>{region.activities?.length || 0} activités</span>
                      <span>•</span>
                      <span>{region.gastronomy?.length || 0} spécialités</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Activités - Basé sur les régions */}
          {activeTab === 'activities' && (
            <div className="activities-list">
              {country.regions?.flatMap((region, regionIndex) => 
                region.activities?.map((activity, activityIndex) => (
                  <div 
                    key={`${regionIndex}-${activityIndex}`} 
                    className="activity-card"
                    data-color={regionColor}
                  >
                    <div className="activity-icon" style={{ backgroundColor: `${regionColor}15`, color: regionColor }}>
                      {activityIcons[activity.toLowerCase()] || <Navigation size={20} />}
                    </div>
                    <div className="activity-content">
                      <div className="activity-header">
                        <h4>{activity}</h4>
                        <span className="activity-region" style={{ color: regionColor, backgroundColor: `${regionColor}15` }}>
                          {region.name}
                        </span>
                      </div>
                      <p>Découvrez {activity.toLowerCase()} dans la région de {region.name}</p>
                      <div className="activity-highlights">
                        {region.highlights?.map((highlight, index) => (
                          <span key={index} className="activity-highlight">
                            <CheckCircle size={12} />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Gastronomie */}
          {activeTab === 'gastronomy' && (
            <div className="gastronomy-content">
              <div className="gastronomy-intro" style={{ backgroundColor: `${regionColor}10` }}>
                <h4>
                  <ChefHat size={18} />
                  Cuisine traditionnelle
                </h4>
                <p>{country.gastronomy?.description}</p>
              </div>
              
              <div className="dishes-grid">
                {country.gastronomy?.dishes?.map((dish, index) => (
                  <div 
                    key={index} 
                    className="dish-card"
                    data-color={regionColor}
                  >
                    <div className="dish-icon" style={{ backgroundColor: `${regionColor}15`, color: regionColor }}>
                      <Utensils size={20} />
                    </div>
                    <span className="dish-name">{dish}</span>
                  </div>
                ))}
              </div>
              
              <h4 className="regional-specialties-title">Spécialités régionales</h4>
              <div className="regional-specialties">
                {country.regions?.map((region) => (
                  <div key={region.id} className="regional-specialty">
                    <h5>{region.name}</h5>
                    <div className="specialty-dishes">
                      {region.gastronomy?.map((dish, index) => (
                        <span key={index} className="specialty-dish" data-color={regionColor}>
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Infos pratiques */}
          {activeTab === 'practical' && (
            <div className="practical-info">
              <div className="info-cards-grid">
                <div className="info-card" style={{ backgroundColor: `${regionColor}10`, borderColor: `${regionColor}20` }}>
                  <div className="info-card-header">
                    <Calendar size={18} />
                    <h4>Meilleure période</h4>
                  </div>
                  <p>{country.bestTimeToVisit}</p>
                </div>

                <div className="info-card" style={{ backgroundColor: `${regionColor}10`, borderColor: `${regionColor}20` }}>
                  <div className="info-card-header">
                    <Shield size={18} />
                    <h4>Visa</h4>
                  </div>
                  <p>{country.practicalInfo?.visa}</p>
                </div>

                <div className="info-card" style={{ backgroundColor: `${regionColor}10`, borderColor: `${regionColor}20` }}>
                  <div className="info-card-header">
                    <CloudSun size={18} />
                    <h4>Climat</h4>
                  </div>
                  <p>Varies by region - {country.regions?.[0]?.practicalInfo?.bestTime || 'Check specific regions'}</p>
                </div>
              </div>

              {/* Transport */}
              <div className="transport-section">
                <div className="section-header">
                  <Plane size={20} />
                  <h4>Transport</h4>
                </div>
                <div className="transport-grid">
                  <div className="transport-item">
                    <Plane size={20} color={regionColor} />
                    <div>
                      <div className="transport-name">Avion</div>
                      <div className="transport-desc">Vols internationaux</div>
                    </div>
                  </div>
                  <div className="transport-item">
                    <Car size={20} color={regionColor} />
                    <div>
                      <div className="transport-name">Route</div>
                      <div className="transport-desc">4x4 recommandé</div>
                    </div>
                  </div>
                  <div className="transport-item">
                    <Bus size={20} color={regionColor} />
                    <div>
                      <div className="transport-name">Bus</div>
                      <div className="transport-desc">Réseau national</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hébergement */}
              <div className="accommodation-section">
                <div className="section-header">
                  <Hotel size={20} />
                  <h4>Hébergement</h4>
                </div>
                <div className="accommodation-grid">
                  {country.regions?.slice(0, 3).map((region, index) => (
                    <div key={index} className="accommodation-item">
                      <div className="accommodation-region">{region.name}</div>
                      <div className="accommodation-desc">
                        {region.practicalInfo?.accommodation?.join(', ') || 'Lodges et hôtels disponibles'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conseils santé et sécurité */}
              <div className="health-safety-section" style={{ backgroundColor: `${regionColor}10`, borderColor: `${regionColor}20` }}>
                <div className="section-header">
                  <AlertCircle size={20} color={regionColor} />
                  <h4>Santé & Sécurité</h4>
                </div>
                <div className="health-safety-grid">
                  <div className="health-safety-item">
                    <div className="health-safety-title">
                      <CheckCircle size={14} />
                      Vaccins recommandés
                    </div>
                    <div className="health-safety-desc">
                      {country.practicalInfo?.health}
                    </div>
                  </div>
                  <div className="health-safety-item">
                    <div className="health-safety-title">
                      <Shield size={14} />
                      Sécurité
                    </div>
                    <div className="health-safety-desc">
                      {country.practicalInfo?.safety}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Témoignages */}
          {activeTab === 'testimonials' && (
            <div className="testimonials-list">
              {country.testimonials?.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar" style={{ backgroundColor: `${regionColor}15`, color: regionColor }}>
                      {testimonial.author?.[0]}
                    </div>
                    <div className="testimonial-info">
                      <div className="testimonial-author">{testimonial.author}</div>
                      <div className="testimonial-meta">
                        {testimonial.country} • {new Date(testimonial.date).toLocaleDateString('fr-FR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill={regionColor}
                          color={regionColor}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="testimonial-text">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
              
              {/* Avis moyen */}
              {country.testimonials?.length > 0 && (
                <div className="average-rating" style={{ backgroundColor: `${regionColor}10`, borderColor: `${regionColor}20` }}>
                  <div className="rating-content">
                    <div>
                      <h4>Note moyenne</h4>
                      <div className="rating-count">Basé sur {country.testimonials.length} avis</div>
                    </div>
                    <div className="rating-display">
                      <div className="rating-score">5.0</div>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            fill={regionColor}
                            color={regionColor}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Formulaire de contact */}
          {activeTab === 'contact' && (
            <div className="contact-form">
              <div className="contact-header">
                <h3>
                  <Send size={24} />
                  Demande de Voyage
                </h3>
                <p>
                  Intéressé par {country.name} ? Envoyez-nous votre demande et nous vous contacterons sous 24h.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Votre message</label>
                  <textarea
                    placeholder={`Décrivez votre projet de voyage pour ${country.name}...`}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <button type="submit" className="submit-button" style={{ backgroundColor: regionColor }}>
                  <Send size={18} />
                  Envoyer la demande de voyage
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Composant principal DestinationsSection
const DestinationsSection = () => {
  const [activeSubregion, setActiveSubregion] = useState('all');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction de recherche intelligente
  const searchInCountry = useCallback((country, term) => {
    const normalizedTerm = term.toLowerCase().trim();
    
    if (!normalizedTerm) return true;

    // Recherche dans les champs principaux
    const mainFields = [
      country.name,
      country.capital,
      country.description,
      country.subRegion,
      country.regionName
    ].some(field => field?.toLowerCase().includes(normalizedTerm));

    if (mainFields) return true;

    // Recherche dans les highlights
    if (country.highlights?.some(highlight => 
      highlight?.toLowerCase().includes(normalizedTerm)
    )) return true;

    // Recherche dans les régions
    if (country.regions?.some(region => 
      region.name?.toLowerCase().includes(normalizedTerm) ||
      region.description?.toLowerCase().includes(normalizedTerm) ||
      region.highlights?.some(h => h?.toLowerCase().includes(normalizedTerm))
    )) return true;

    // Recherche dans les activités
    if (country.regions?.some(region => 
      region.activities?.some(activity => 
        activity?.toLowerCase().includes(normalizedTerm)
      )
    )) return true;

    // Recherche dans la gastronomie
    if (country.gastronomy?.dishes?.some(dish => 
      dish?.toLowerCase().includes(normalizedTerm)
    )) return true;

    // Recherche dans les langues
    if (country.languages?.some(lang => 
      lang?.toLowerCase().includes(normalizedTerm)
    )) return true;

    return false;
  }, []);

  // Fonction de filtrage par activité optimisée
  const filterByActivity = useCallback((country, filterId) => {
    if (filterId === 'all') return true;

    const filterConfig = activityFilters.find(f => f.id === filterId);
    if (!filterConfig) return true;

    const { keywords } = filterConfig;
    
    // Vérifier les mots-clés dans différents champs
    const searchInText = (text) => {
      if (!text) return false;
      const normalizedText = text.toLowerCase();
      return keywords.some(keyword => normalizedText.includes(keyword.toLowerCase()));
    };

    // Recherche dans les champs principaux
    if (searchInText(country.name) || 
        searchInText(country.description) ||
        searchInText(country.capital)) {
      return true;
    }

    // Recherche dans les highlights
    if (country.highlights?.some(highlight => searchInText(highlight))) {
      return true;
    }

    // Recherche dans les régions et leurs activités
    if (country.regions?.some(region => {
      if (searchInText(region.name) || searchInText(region.description)) {
        return true;
      }
      
      if (region.highlights?.some(highlight => searchInText(highlight))) {
        return true;
      }
      
      if (region.activities?.some(activity => searchInText(activity))) {
        return true;
      }
      
      return false;
    })) {
      return true;
    }

    // Filtre spécifique pour gastronomie
    if (filterId === 'gastronomy') {
      const hasDishes = country.gastronomy?.dishes?.length > 0;
      const hasRegionalGastronomy = country.regions?.some(region => 
        region.gastronomy?.length > 0
      );
      return hasDishes || hasRegionalGastronomy;
    }

    return false;
  }, []);

  // Filtrage intelligent des pays - optimisé avec useMemo
  const filteredCountries = useMemo(() => {
    let result = allCountries;

    // Filtre par sous-région
    if (activeSubregion !== 'all') {
      result = result.filter(country => country.subregion === activeSubregion);
    }

    // Filtre par recherche
    if (searchTerm.trim()) {
      result = result.filter(country => searchInCountry(country, searchTerm));
    }

    // Filtre par activité
    if (activeFilter !== 'all') {
      result = result.filter(country => filterByActivity(country, activeFilter));
    }

    return result;
  }, [activeSubregion, activeFilter, searchTerm, searchInCountry, filterByActivity]);

  // Statistiques des résultats
  const resultsStats = useMemo(() => {
    const totalCountries = allCountries.length;
    const currentCount = filteredCountries.length;
    const percentage = totalCountries > 0 ? Math.round((currentCount / totalCountries) * 100) : 0;
    
    return {
      totalCountries,
      currentCount,
      percentage,
      hasFilters: activeSubregion !== 'all' || activeFilter !== 'all' || searchTerm.trim() !== '',
      filterCount: [
        activeSubregion !== 'all',
        activeFilter !== 'all',
        searchTerm.trim() !== ''
      ].filter(Boolean).length
    };
  }, [filteredCountries, activeSubregion, activeFilter, searchTerm]);

  const handleCountryClick = useCallback((country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  }, []);

  const resetAllFilters = useCallback(() => {
    setActiveSubregion('all');
    setActiveFilter('all');
    setSearchTerm('');
  }, []);

  return (
    <section id="destinations">
      <div className="destinations-container">
        {/* En-tête */}
        <div className="destinations-header">
          <div className="destinations-badge">
            <Compass size={16} />
            <span>Nos Destinations</span>
          </div>
          <h2>Explorez par Région</h2>
          <p>
            De l'Afrique de l'Ouest aux Caraïbes, découvrez les destinations qui célèbrent 
            la richesse culturelle africaine et sa diaspora.
          </p>
          
          {/* Barre de recherche */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher un pays, une ville ou une activité..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="search-icon">
              <Search size={20} />
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="destinations-stats">
          <div className="stat-item">
            <div className="stat-number">{allCountries.length}</div>
            <div className="stat-label">Destinations</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {allCountries.reduce((acc, country) => acc + (country.regions?.length || 0), 0)}
            </div>
            <div className="stat-label">Régions</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              {allCountries.reduce((acc, country) => acc + (country.languages?.length || 0), 0)}
            </div>
            <div className="stat-label">Langues</div>
          </div>
        </div>

        {/* Tabs des régions */}
        <SubregionTabs
          subregions={subregions}
          activeSubregion={activeSubregion}
          onSubregionChange={setActiveSubregion}
        />

        {/* Filtres par activité */}
        <ActivityFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Contrôles des filtres */}
        {resultsStats.hasFilters && (
          <div className="active-filters-bar">
            <div className="active-filters-header">
              <span className="filters-title">Filtres appliqués :</span>
              <button
                onClick={resetAllFilters}
                className="reset-all-filters"
              >
                <XCircle size={14} />
                Tout effacer
              </button>
            </div>
            <div className="active-filters-tags">
              {activeSubregion !== 'all' && (
                <span className="active-filter-tag">
                  Région: {subregions.find(r => r.id === activeSubregion)?.name}
                  <button
                    onClick={() => setActiveSubregion('all')}
                    className="remove-filter-tag"
                  >
                    ×
                  </button>
                </span>
              )}
              {activeFilter !== 'all' && (
                <span className="active-filter-tag">
                  Activité: {activityFilters.find(f => f.id === activeFilter)?.name}
                  <button
                    onClick={() => setActiveFilter('all')}
                    className="remove-filter-tag"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchTerm && (
                <span className="active-filter-tag">
                  Recherche: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="remove-filter-tag"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Grille des pays */}
        <div className="countries-grid">
          {filteredCountries.map((country, index) => (
            <CountryCard
              key={country.id || index}
              country={country}
              onClick={() => handleCountryClick(country)}
            />
          ))}
        </div>

        {/* État vide */}
        {filteredCountries.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">🌍</div>
            <h3>Aucune destination trouvée</h3>
            <p>
              Essayez de modifier vos filtres ou votre recherche pour découvrir plus de destinations.
            </p>
            <button
              onClick={resetAllFilters}
              className="reset-filters-button"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Résumé des résultats */}
        {filteredCountries.length > 0 && (
          <div className="results-summary">
            <div className="results-header">
              <div>
                <div className="results-label">Résultats</div>
                <div className="results-count">
                  {filteredCountries.length} {filteredCountries.length === 1 ? 'destination' : 'destinations'}
                </div>
              </div>
              <div className="active-filters">
                {activeSubregion !== 'all' && (
                  <span className="active-filter">
                    {subregions.find(r => r.id === activeSubregion)?.name}
                    <button
                      onClick={() => setActiveSubregion('all')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {activeFilter !== 'all' && (
                  <span className="active-filter">
                    {activityFilters.find(f => f.id === activeFilter)?.name}
                    <button
                      onClick={() => setActiveFilter('all')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="active-filter">
                    Recherche: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm('')}
                      className="remove-filter"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <CountryModal
        country={selectedCountry}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default DestinationsSection;