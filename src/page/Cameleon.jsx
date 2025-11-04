// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Filter, X, ChevronRight, ExternalLink, BookOpen, 
  Zap, Globe, Lightbulb, Target, TrendingUp, Calendar, 
  MapPin, Mail, ArrowRight, Eye, Palette, Cpu, Heart, 
  Sparkles, Shield, Star, Clock, Bookmark, Share2, 
  ThumbsUp, MessageCircle, Play, Mountain, Users, Leaf,
  Code, Brain, Camera, Music, Atom, Database, Menu,
  ChevronDown, Download, Video, Mic, Image, FileText,
  Feather, GitBranch, Layers, Cctv
} from 'lucide-react';
import './cameleon.css';

const CameleonPro = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Données enrichies avec icônes corrigées
  const articles = [
    {
      id: 1,
      title: "L'intelligence du camouflage : stratégies évolutives",
      category: "nature",
      description: "Exploration des mécanismes d'adaptation les plus sophistiqués du règne animal et végétal.",
      content: `Le camouflage dans la nature représente l'une des adaptations les plus fascinantes de l'évolution. Les chromatophores du caméléon, les motifs disruptifs du léopard, ou la mimétique des phasmes démontrent des stratégies d'une complexité remarquable.

Ces mécanismes ne se limitent pas à la dissimulation physique. Ils incluent des adaptations comportementales, temporelles et même chimiques qui permettent aux organismes de se fondre parfaitement dans leur écosystème.

L'étude de ces phénomènes nous enseigne que l'adaptation réussie nécessite une compréhension profonde de son environnement et la capacité de modifier sa stratégie en temps réel.`,
      image: "/api/placeholder/600/400",
      stats: "15 min de lecture",
      date: "2023-10-15",
      likes: 142,
      views: 2100,
      tags: ["Évolution", "Adaptation", "Biodiversité"],
      color: "emerald",
      featured: true,
      level: "avancé"
    },
    {
      id: 2,
      title: "Stratégies d'adaptation en entreprise : naviguer dans l'incertitude",
      category: "societe",
      description: "Comment les organisations prospèrent en s'adaptant continuellement à leur environnement économique et social.",
      content: `Dans le paysage économique contemporain, la capacité d'adaptation est devenue la compétence organisationnelle la plus cruciale. Les entreprises qui réussissent sont celles qui maîtrisent l'art de la transformation continue.

Cette adaptation va bien au-delà des simples ajustements stratégiques. Elle implique une réinvention culturelle, une agilité structurelle et une vision prospective qui anticipe les disruptions plutôt que de les subir.

Le parallèle avec le caméléon est frappant : comme lui, les organisations doivent développer une sensibilité extrême à leur environnement tout en conservant leur identité fondamentale.`,
      image: "/api/placeholder/600/400",
      stats: "12 min de lecture",
      date: "2023-09-22",
      likes: 89,
      views: 1500,
      tags: ["Management", "Innovation", "Transformation"],
      color: "amber",
      featured: true,
      level: "intermédiaire"
    },
    {
      id: 3,
      title: "Technologies adaptatives : quand la machine apprend de la nature",
      category: "technologie",
      description: "Exploration des systèmes technologiques qui s'adaptent dynamiquement à leur environnement d'utilisation.",
      content: `Le biomimétisme technologique représente l'une des frontières les plus prometteuses de l'innovation contemporaine. Des matériaux qui changent de propriétés selon les conditions environnementales aux algorithmes qui s'adaptent en temps réel, la technologie apprend de la nature.

Ces systèmes adaptatifs ne se contentent pas de réagir aux changements - ils les anticipent, créant ainsi des boucles d'amélioration continue qui repoussent constamment les limites du possible.

Des réseaux neuronaux aux matériaux à mémoire de forme, l'adaptabilité devient la caractéristique déterminante des technologies d'avant-garde.`,
      image: "/api/placeholder/600/400",
      stats: "18 min de lecture",
      date: "2023-11-05",
      likes: 203,
      views: 3200,
      tags: ["IA", "Biomimétisme", "Innovation"],
      color: "violet",
      level: "expert"
    },
    {
      id: 4,
      title: "L'art du mimétisme dans la culture humaine contemporaine",
      category: "culture",
      description: "Comment les humains utilisent le mimétisme dans l'art, la mode et les relations sociales modernes.",
      content: `Le mimétisme n'est pas exclusif au règne animal. Dans la culture humaine contemporaine, nous observons diverses formes d'adaptation et d'imitation qui nous permettent de nous intégrer dans différents contextes sociaux et culturels.

Des tendances fashion aux codes sociaux, des mouvements artistiques aux comportements en ligne, le mimétisme culturel façonne notre identité collective et individuelle d'une manière profondément ancrée dans notre biologie évolutive.

Cette capacité d'adaptation culturelle nous permet de naviguer dans des environnements sociaux complexes tout en préservant notre singularité.`,
      image: "/api/placeholder/600/400",
      stats: "10 min de lecture",
      date: "2023-08-30",
      likes: 76,
      views: 1200,
      tags: ["Art", "Société", "Culture"],
      color: "rose",
      level: "intermédiaire"
    },
    {
      id: 5,
      title: "Modèles d'évolution et d'adaptation dans les systèmes complexes",
      category: "modeles",
      description: "Étude des modèles mathématiques et systémiques qui favorisent l'évolution et l'adaptation réussie.",
      content: `L'étude des modèles d'adaptation nous révèle des principes universels qui s'appliquent à de nombreux domaines, de l'écologie à l'économie en passant par les sciences sociales.

En comprenant ces modèles, nous pouvons mieux naviguer dans des environnements changeants et incertains, anticipant les transformations plutôt que de les subir.

Des algorithmes génétiques aux théories des jeux évolutionnaires, les modèles mathématiques nous offrent des outils puissants pour comprendre et maîtriser les processus d'adaptation.`,
      image: "/api/placeholder/600/400",
      stats: "20 min de lecture",
      date: "2023-12-10",
      likes: 154,
      views: 2800,
      tags: ["Modèles", "Évolution", "Stratégie"],
      color: "cyan",
      level: "expert"
    },
    {
      id: 6,
      title: "L'adaptabilité comme compétence essentielle du 21ème siècle",
      category: "developpement",
      description: "Pourquoi l'adaptabilité est devenue l'une des compétences les plus importantes dans un monde en mutation accélérée.",
      content: `Dans un monde en constante et rapide évolution, la capacité à s'adapter rapidement est devenue une compétence cruciale, peut-être même la plus importante du 21ème siècle.

Ceux qui maîtrisent l'art de l'adaptation sont mieux équipés pour faire face aux défis imprévus et saisir les opportunités émergentes dans un paysage professionnel et personnel en perpétuelle transformation.

L'adaptabilité n'est plus une option mais une nécessité pour prospérer dans l'économie de la connaissance et l'ère numérique.`,
      image: "/api/placeholder/600/400",
      stats: "14 min de lecture",
      date: "2023-07-18",
      likes: 98,
      views: 1800,
      tags: ["Développement", "Compétences", "Avenir"],
      color: "indigo",
      level: "débutant"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les domaines', icon: <Globe size={16} />, count: articles.length },
    { id: 'nature', name: 'Nature', icon: <Leaf size={16} />, count: articles.filter(a => a.category === 'nature').length },
    { id: 'societe', name: 'Société', icon: <Users size={16} />, count: articles.filter(a => a.category === 'societe').length },
    { id: 'technologie', name: 'Technologie', icon: <Cpu size={16} />, count: articles.filter(a => a.category === 'technologie').length },
    { id: 'culture', name: 'Culture', icon: <Palette size={16} />, count: articles.filter(a => a.category === 'culture').length },
    { id: 'modeles', name: 'Modèles', icon: <GitBranch size={16} />, count: articles.filter(a => a.category === 'modeles').length },
    { id: 'developpement', name: 'Développement', icon: <Target size={16} />, count: articles.filter(a => a.category === 'developpement').length }
  ];

  const features = [
    {
      icon: <Sparkles size={48} />,
      title: "Adaptation Intelligente",
      description: "Découvrez des stratégies d'adaptation sophistiquées inspirées des mécanismes naturels les plus avancés.",
      gradient: "from-violet-500 to-fuchsia-500",
      delay: "100ms"
    },
    {
      icon: <Eye size={48} />,
      title: "Vision Multidimensionnelle",
      description: "Explorez l'adaptation sous tous ses angles : biologique, technologique, social et culturel.",
      gradient: "from-cyan-500 to-blue-500",
      delay: "200ms"
    },
    {
      icon: <Atom size={48} />,
      title: "Systèmes Complexes",
      description: "Comprenez comment les systèmes complexes s'adaptent et évoluent dans des environnements changeants.",
      gradient: "from-emerald-500 to-teal-500",
      delay: "300ms"
    },
    {
      icon: <Shield size={48} />,
      title: "Résilience Adaptative",
      description: "Développez une capacité de résilience qui vous permet de prospérer dans l'incertitude.",
      gradient: "from-orange-500 to-amber-500",
      delay: "400ms"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);

  // Fonction pour obtenir l'icône de catégorie
  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : <Globe size={16} />;
  };

  // Fonction pour obtenir le nom de catégorie
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Tous les domaines';
  };

  return (
    <div className="cameleon-pro-app">
      {/* Effet de souris élégant amélioré */}
      <div 
        className="cameleon-mouse-gradient" 
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(226, 88, 34, 0.15), transparent 80%)`
        }}
      />
      
      {/* Header Luxueux */}
    
      {/* Hero Section Luxueuse */}
      <section className="cameleon-hero" ref={heroRef}>
        <div className="cameleon-hero-background">
          <div className="cameleon-hero-orbs">
            <div className="cameleon-hero-orb cameleon-orb-1" />
            <div className="cameleon-hero-orb cameleon-orb-2" />
            <div className="cameleon-hero-orb cameleon-orb-3" />
          </div>
          <div className="cameleon-hero-grid" />
        </div>
        
        <div className="cameleon-hero-content">
          <div className="cameleon-hero-badge">
            <Zap size={16} />
            Nouveaux concepts disponibles
          </div>
          
          <h1 className="cameleon-hero-title">
            <span className="cameleon-hero-title-line">Maîtrisez l'Art</span>
            <span className="cameleon-hero-title-line">
              du <span className="cameleon-hero-highlight">Camouflage</span>
            </span>
            <span className="cameleon-hero-title-line">Moderne</span>
          </h1>
          
          <p className="cameleon-hero-subtitle">
            Découvrez comment les principes d'adaptation les plus sophistiqués de la nature 
            peuvent révolutionner votre approche du monde contemporain.
          </p>

          <div className="cameleon-hero-stats">
            {[
              { number: "50+", label: "Stratégies" },
              { number: "12", label: "Domaines" },
              { number: "∞", label: "Applications" }
            ].map((stat, index) => (
              <div key={index} className="cameleon-stat">
                <div className="cameleon-stat-number">{stat.number}</div>
                <div className="cameleon-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="cameleon-hero-actions">
            <button className="cameleon-cta-button cameleon-primary">
              <span>Explorer les Concepts</span>
              <ArrowRight size={20} />
            </button>
            <button className="cameleon-cta-button cameleon-secondary">
              <Play size={20} />
              <span>Voir la Démo</span>
            </button>
          </div>
        </div>
        
        <div className="cameleon-scroll-indicator">
          <div className="cameleon-scroll-arrow">
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* Features Section Élégante */}
      <section className="cameleon-features-section" id="concepts">
        <div className="cameleon-container">
          <div className="cameleon-section-header">
            <div className="cameleon-section-badge">
              <Lightbulb size={16} />
              Concepts Fondamentaux
            </div>
            <h2 className="cameleon-section-heading">
              Les <span className="cameleon-gradient-text">Piliers</span> de l'Adaptation
            </h2>
            <p className="cameleon-section-subtitle">
              Explorez les principes fondamentaux qui régissent l'art de l'adaptation 
              dans tous les domaines de la connaissance.
            </p>
          </div>
          
          <div className="cameleon-features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="cameleon-feature-card"
                style={{ animationDelay: feature.delay }}
              >
                <div className="cameleon-feature-card-inner">
                  <div className={`cameleon-feature-icon cameleon-${feature.gradient}`}>
                    {feature.icon}
                  </div>
                  <h3 className="cameleon-feature-title">{feature.title}</h3>
                  <p className="cameleon-feature-description">{feature.description}</p>
                  <div className="cameleon-feature-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
                <div className="cameleon-feature-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation des Catégories Élégante */}
      <section className="cameleon-categories-section">
        <div className="cameleon-container">
          <div className="cameleon-categories-header">
            <h3 className="cameleon-categories-title">Explorer par Catégorie</h3>
            <div className="cameleon-categories-controls">
              <button className="cameleon-category-scroll-btn cameleon-prev">
                <ChevronRight size={16} />
              </button>
              <button className="cameleon-category-scroll-btn cameleon-next">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="cameleon-categories-nav-wrapper">
            <div className="cameleon-categories-nav">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`cameleon-category-button ${selectedCategory === category.id ? 'cameleon-active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="cameleon-category-icon">{category.icon}</span>
                  <span className="cameleon-category-name">{category.name}</span>
                  <span className="cameleon-category-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles Luxueuse */}
      <section className="cameleon-articles-section" id="articles">
        <div className="cameleon-container">
          <div className="cameleon-section-header">
            <h2 className="cameleon-section-heading">
              Dernières <span className="cameleon-gradient-text">Découvertes</span>
            </h2>
            <p className="cameleon-section-subtitle">
              Plongez dans notre collection d'articles explorant les facettes les plus fascinantes de l'adaptation.
            </p>
          </div>

          {/* Barre de Recherche Élégante */}
          <div className="cameleon-search-section">
            <div className="cameleon-search-container">
              <div className="cameleon-search-input-wrapper">
                <Search className="cameleon-search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher des concepts, stratégies, insights..."
                  className="cameleon-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button 
                    className="cameleon-clear-search"
                    onClick={() => setSearchQuery('')}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Articles en Vedette */}
          {selectedCategory === 'all' && searchQuery === '' && (
            <div className="cameleon-featured-articles-section">
              <h3 className="cameleon-featured-title">
                <Star size={20} />
                Articles en Vedette
              </h3>
              <div className="cameleon-featured-articles-grid">
                {featuredArticles.map((article, index) => (
                  <article 
                    key={article.id} 
                    className="cameleon-featured-article-card"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="cameleon-featured-article-badge">
                      <Star size={12} />
                      Vedette
                    </div>
                    <div className={`cameleon-article-level-badge cameleon-level-${article.level}`}>
                      {article.level}
                    </div>
                    <div className="cameleon-featured-article-content">
                      <div className="cameleon-article-header">
                        <div className="cameleon-article-category">
                          {getCategoryIcon(article.category)}
                          <span>{getCategoryName(article.category)}</span>
                        </div>
                        <div className="cameleon-article-meta">
                          <Clock size={14} />
                          <span>{article.stats}</span>
                        </div>
                      </div>
                      <h3 className="cameleon-featured-article-title">{article.title}</h3>
                      <p className="cameleon-featured-article-description">{article.description}</p>
                      <div className="cameleon-featured-article-footer">
                        <div className="cameleon-article-stats">
                          <div className="cameleon-stat-item">
                            <ThumbsUp size={14} />
                            <span>{article.likes}</span>
                          </div>
                          <div className="cameleon-stat-item">
                            <Eye size={14} />
                            <span>{article.views}</span>
                          </div>
                        </div>
                        <button className="cameleon-article-action">
                          <BookOpen size={16} />
                        </button>
                      </div>
                    </div>
                    <div className={`cameleon-featured-article-gradient cameleon-gradient-${article.color}`} />
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Grid d'Articles Responsive */}
          <div className="cameleon-articles-grid">
            {filteredArticles.map((article, index) => (
              <article 
                key={article.id} 
                className={`cameleon-article-card ${article.featured ? 'cameleon-featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArticle(article)}
              >
                {article.featured && (
                  <div className="cameleon-article-featured-badge">
                    <Star size={12} />
                    Vedette
                  </div>
                )}
                <div className={`cameleon-article-level-badge cameleon-level-${article.level}`}>
                  {article.level}
                </div>
                <div className="cameleon-article-card-inner">
                  <div className="cameleon-article-header">
                    <div className="cameleon-article-category">
                      {getCategoryIcon(article.category)}
                      <span>{getCategoryName(article.category)}</span>
                    </div>
                    <div className="cameleon-article-meta">
                      <Clock size={14} />
                      <span>{article.stats}</span>
                    </div>
                  </div>

                  <div className="cameleon-article-content">
                    <h3 className="cameleon-article-title">{article.title}</h3>
                    <p className="cameleon-article-description">{article.description}</p>
                    
                    <div className="cameleon-article-tags">
                      {article.tags.map(tag => (
                        <span key={tag} className="cameleon-article-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="cameleon-article-footer">
                    <div className="cameleon-article-stats">
                      <div className="cameleon-stat-item">
                        <ThumbsUp size={14} />
                        <span>{article.likes}</span>
                      </div>
                      <div className="cameleon-stat-item">
                        <Eye size={14} />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <button className="cameleon-article-action">
                      <BookOpen size={16} />
                    </button>
                  </div>
                </div>
                
                <div className={`cameleon-article-gradient cameleon-gradient-${article.color}`} />
                <div className="cameleon-article-hover-effect" />
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="cameleon-no-results">
              <div className="cameleon-no-results-content">
                <Search size={48} />
                <h3>Aucun résultat trouvé</h3>
                <p>Essayez de modifier vos critères de recherche</p>
                <button 
                  className="cameleon-reset-filters"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section Citation Inspirante */}
      <section className="cameleon-quote-section">
        <div className="cameleon-container">
          <div className="cameleon-quote-card">
            <div className="cameleon-quote-content">
              <div className="cameleon-quote-icon">
                <Sparkles size={24} />
              </div>
              <blockquote>
                "La véritable adaptation n'est pas la soumission à l'environnement, 
                mais l'art subtil de danser avec lui tout en conservant son essence."
              </blockquote>
              <div className="cameleon-quote-author">
                <div className="cameleon-author-avatar" />
                <div className="cameleon-author-info">
                  <strong>Dr. Élise Moreau</strong>
                  <span>Biologiste de l'Évolution</span>
                </div>
              </div>
            </div>
            <div className="cameleon-quote-pattern" />
          </div>
        </div>
      </section>

      {/* Modal d'Article Luxueux */}
      {selectedArticle && (
        <div className="cameleon-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="cameleon-article-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cameleon-modal-content">
              <button className="cameleon-modal-close" onClick={() => setSelectedArticle(null)}>
                <X size={24} />
              </button>
              
              <article className="cameleon-modal-article">
                <header className="cameleon-article-header-modal">
                  <div className="cameleon-article-meta-modal">
                    <div className="cameleon-category-badge">
                      {getCategoryIcon(selectedArticle.category)}
                      <span>{getCategoryName(selectedArticle.category)}</span>
                    </div>
                    <div className={`cameleon-level-badge cameleon-level-${selectedArticle.level}`}>
                      {selectedArticle.level}
                    </div>
                    <div className="cameleon-article-info-modal">
                      <div className="cameleon-info-item">
                        <Calendar size={16} />
                        <span>{selectedArticle.date}</span>
                      </div>
                      <div className="cameleon-info-item">
                        <Clock size={16} />
                        <span>{selectedArticle.stats}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h1 className="cameleon-article-title-modal">{selectedArticle.title}</h1>
                  
                  <div className="cameleon-article-stats-modal">
                    <div className="cameleon-stat-modal">
                      <ThumbsUp size={16} />
                      <span>{selectedArticle.likes} appréciations</span>
                    </div>
                    <div className="cameleon-stat-modal">
                      <Eye size={16} />
                      <span>{selectedArticle.views} vues</span>
                    </div>
                  </div>
                </header>

                <div className="cameleon-article-content-modal">
                  <div className="cameleon-content-section">
                    <p className="cameleon-article-lead">{selectedArticle.description}</p>
                    <div className="cameleon-article-body">
                      {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="cameleon-article-paragraph">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <footer className="cameleon-article-footer-modal">
                  <div className="cameleon-article-tags-modal">
                    {selectedArticle.tags.map(tag => (
                      <span key={tag} className="cameleon-tag-modal">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="cameleon-article-actions-modal">
                    <button className="cameleon-action-btn">
                      <Bookmark size={18} />
                      <span className="cameleon-action-text">Sauvegarder</span>
                    </button>
                    <button className="cameleon-action-btn">
                      <Share2 size={18} />
                      <span className="cameleon-action-text">Partager</span>
                    </button>
                    <button className="cameleon-action-btn cameleon-primary">
                      <ThumbsUp size={18} />
                      <span className="cameleon-action-text">Apprécier</span>
                    </button>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameleonPro;