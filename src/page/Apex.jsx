import React, { useState, useEffect } from 'react';
import { Globe, History, Users, MapPin, Award, BookOpen, ArrowRight, ChevronDown, Star, Zap, Brain, Heart, Compass, Dna, Mountain, Search, Filter } from 'lucide-react';
import './apex.css';

const Apex = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('decouvertes');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Données initiales enrichies
  const sections = [
    {
      id: 1,
      title: "L'Afrique, Berceau de l'Humanité",
      content: "Les découvertes archéologiques en Afrique ont révélé les plus anciens vestiges humains, démontrant que l'évolution complète de l'homme moderne s'est déroulée sur le continent africain. De Lucy en Éthiopie aux sites de Sterkfontein en Afrique du Sud, l'Afrique regorge de sites préhistoriques qui retracent l'histoire de l'humanité sur plusieurs millions d'années.",
      icon: 'Globe',
      stats: "7M d'années d'histoire",
      color: "var(--color-primary)",
      category: "archéologie"
    },
    {
      id: 2,
      title: "Lucy : Notre Ancêtre Commun",
      content: "Découverte en 1974 en Éthiopie, Lucy (Australopithecus afarensis) représente l'un des fossiles les plus complets jamais trouvés. Âgée de 3,2 millions d'années, elle démontre la bipédie précoce de nos ancêtres et constitue une pièce maîtresse dans la compréhension de l'évolution humaine.",
      icon: 'Users',
      stats: "3.2M d'années",
      color: "var(--color-secondary)",
      category: "fossiles"
    },
    {
      id: 3,
      title: "Civilisations Anciennes",
      content: "L'Égypte antique, le Royaume du Mali, l'Empire du Ghana, le Grand Zimbabwe... L'Afrique a vu naître certaines des civilisations les plus avancées de l'histoire humaine, avec des réalisations architecturales, scientifiques et culturelles remarquables.",
      icon: 'History',
      stats: "10 000 ans d'histoire",
      color: "var(--color-accent)",
      category: "civilisations"
    },
    {
      id: 4,
      title: "Héritage Génétique",
      content: "Les recherches en génétique confirment que toute l'humanité moderne partage des ancêtres communs originaires d'Afrique. L'ADN mitochondrial de l'Ève mitochondriale remonte à 200 000 ans en Afrique, établissant notre origine commune.",
      icon: 'Dna',
      stats: "99.9% ADN commun",
      color: "var(--color-primary)",
      category: "génétique"
    },
    {
      id: 5,
      title: "Sites Archéologiques Majeurs",
      content: "L'Afrique compte plus de 200 sites préhistoriques majeurs, dont les grottes de Blombos en Afrique du Sud qui révèlent les premières expressions artistiques de l'humanité datant de 75 000 ans.",
      icon: 'MapPin',
      stats: "200+ sites",
      color: "var(--color-secondary)",
      category: "archéologie"
    },
    {
      id: 6,
      title: "Savoirs Ancestraux",
      content: "Les connaissances en astronomie, médecine traditionnelle, métallurgie et agriculture développées en Afrique ont influencé le monde entier bien avant les contacts avec d'autres continents.",
      icon: 'BookOpen',
      stats: "5 000 ans de savoir",
      color: "var(--color-accent)",
      category: "savoirs"
    },
    {
      id: 7,
      title: "Innovations Technologiques",
      content: "Dès l'âge de pierre, les populations africaines ont développé des techniques avancées de taille d'outils, de production de pigments et de construction qui témoignent d'une intelligence et d'une créativité remarquables.",
      icon: 'Zap',
      stats: "2.5M d'innovations",
      color: "var(--color-primary)",
      category: "technologie"
    },
    {
      id: 8,
      title: "Résilience Humaine",
      content: "L'adaptation aux divers climats et écosystèmes africains a forgé la résilience et la diversité génétique qui caractérisent l'humanité moderne aujourd'hui.",
      icon: 'Mountain',
      stats: "54 écosystèmes",
      color: "var(--color-secondary)",
      category: "évolution"
    }
  ];

  const timelineData = [
    { year: "7M", event: "Apparition des premiers hominidés", location: "Tchad", icon: 'Users' },
    { year: "3.2M", event: "Lucy (Australopithecus afarensis)", location: "Éthiopie", icon: 'Star' },
    { year: "2.5M", event: "Premiers outils en pierre", location: "Tanzanie", icon: 'Zap' },
    { year: "1.8M", event: "Homo erectus en Afrique", location: "Kenya", icon: 'Compass' },
    { year: "300K", event: "Homo sapiens archaïque", location: "Maroc", icon: 'Brain' },
    { year: "100K", event: "Homo sapiens moderne", location: "Afrique de l'Est", icon: 'Heart' }
  ];

  const features = [
    { icon: 'Brain', title: "Intelligence", description: "Développement cognitif précoce" },
    { icon: 'Heart', title: "Adaptabilité", description: "Résilience aux divers climats" },
    { icon: 'Users', title: "Socialité", description: "Structures sociales complexes" },
    { icon: 'Zap', title: "Innovation", description: "Technologies avancées" }
  ];

  // Catégories uniques pour le filtre
  const categories = ['all', 'archéologie', 'fossiles', 'civilisations', 'génétique', 'savoirs', 'technologie', 'évolution'];

  // Filtrer les sections
  const filteredSections = sections.filter(section => {
    const matchesSearch = section.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         section.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Mapper les noms d'icônes aux composants React
  const iconComponents = {
    Globe,
    History,
    Users,
    MapPin,
    Award,
    BookOpen,
    Star,
    Zap,
    Brain,
    Heart,
    Compass,
    Dna,
    Mountain,
    Search,
    Filter
  };

  const getIconComponent = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? React.createElement(IconComponent, { className: "icon" }) : React.createElement(Star, { className: "icon" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header */}
    

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Carte de l'Afrique historique"
            className="hero-image"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            
            <h1 className="hero-title">
              L'Afrique est le <span className="hero-highlight">Berceau de l'Humanité</span>
            </h1>
            <p className="hero-subtitle">
              Découvrez les preuves scientifiques incontestables qui établissent l'Afrique comme origine unique de l'humanité moderne et le théâtre de son évolution complète
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">7M</div>
                <div className="stat-label">Années d'histoire</div>
              </div>
              <div className="stat">
                <div className="stat-number">200+</div>
                <div className="stat-label">Sites archéologiques</div>
              </div>
              <div className="stat">
                <div className="stat-number">54</div>
                <div className="stat-label">Pays témoins</div>
              </div>
            </div>
            <button className="cta-button">
              Explorer l'Héritage 
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Les Piliers de l'Évolution Humaine</h2>
            <p className="section-subtitle">Découvrez les fondements qui ont façonné l'humanité moderne</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-icon">
                  {getIconComponent(feature.icon)}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Chronologie de l'Évolution Humaine</h2>
            <p className="section-subtitle">Un voyage à travers les âges qui a façonné notre espèce</p>
          </div>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className="timeline-marker">
                  {getIconComponent(item.icon)}
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-event">{item.event}</div>
                  <div className="timeline-location">{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Filtre Section */}
          <div className="filter-section">
            <div className="filter-container">
              <div className="search-box">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Rechercher une découverte..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              
              <div className="category-filter">
                <Filter size={18} className="filter-icon" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="category-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Toutes les catégories' : 
                       category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Indicateurs de filtre */}
              {(searchTerm || selectedCategory !== 'all') && (
                <div className="filter-indicators">
                  {searchTerm && (
                    <span className="filter-tag">
                      Recherche: "{searchTerm}"
                      <button onClick={() => setSearchTerm('')}>×</button>
                    </span>
                  )}
                  {selectedCategory !== 'all' && (
                    <span className="filter-tag">
                      Catégorie: {selectedCategory}
                      <button onClick={() => setSelectedCategory('all')}>×</button>
                    </span>
                  )}
                  <button 
                    className="clear-filters"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                  >
                    Tout effacer
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Résultats du filtre */}
          <div className="filter-results">
            <p className="results-count">
              {filteredSections.length} résultat{filteredSections.length !== 1 ? 's' : ''} trouvé{filteredSections.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'decouvertes' ? 'active' : ''}`}
                onClick={() => setActiveTab('decouvertes')}
              >
                <MapPin size={18} />
                Découvertes
              </button>
              <button 
                className={`tab ${activeTab === 'civilisations' ? 'active' : ''}`}
                onClick={() => setActiveTab('civilisations')}
              >
                <History size={18} />
                Civilisations
              </button>
              <button 
                className={`tab ${activeTab === 'science' ? 'active' : ''}`}
                onClick={() => setActiveTab('science')}
              >
                <Award size={18} />
                Science
              </button>
            </div>
          </div>

          {/* Sections Grid */}
          <div className="sections-grid">
            {filteredSections.length > 0 ? (
              filteredSections.map((section, index) => (
                <section key={section.id} className="content-section" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="section-header-card">
                    <div className="section-icon" style={{ color: section.color }}>
                      {getIconComponent(section.icon)}
                    </div>
                    <div className="section-title-content">
                    <h2 className="section-titles">{section.title}</h2>
                    <div className="section-stats">{section.stats}</div>
                      <span className="section-category">{section.category}</span>
                    </div>
                  </div>
                  <div className="section-content">
                    <p className="section-text">{section.content}</p>
                    <button className="section-link">
                      En savoir plus <ArrowRight size={16} />
                    </button>
                  </div>
                </section>
              ))
            ) : (
              <div className="no-results">
                <p>Aucun résultat trouvé pour votre recherche.</p>
                <button 
                  className="reset-filters-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content" data-aos="zoom-in">
            <div className="quote-icon">❝</div>
            <blockquote className="quote">
              "L'Afrique n'est pas seulement le berceau de l'humanité, elle est la source de notre histoire commune et le fondement de notre avenir partagé. Chaque être humain porte en lui l'héritage génétique et culturel de ce continent ancestral."
            </blockquote>
            <div className="quote-author">- Commission du Patrimoine Africain</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apex;