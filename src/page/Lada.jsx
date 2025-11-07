import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Users, 
  Heart, 
  BookOpen, 
  Shield, 
  Globe, 
  Clock, 
  Star,
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Loader
} from 'lucide-react';

// Import de l'image depuis le projet
import heroImage from '../assets/cultural-pattern.webp';
import './lada.css';

const AfroInterface = () => {
  const [activeTab, setActiveTab] = useState('principes');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [sectionsContenu, setSectionsContenu] = useState([]);
  const [loading, setLoading] = useState({
    articles: true,
    sections: true
  });
  const [error, setError] = useState(null);

  // Données statiques pour les principes (ne viennent pas de l'API)
  const principles = [
    {
      title: "Respect Mutuel",
      description: "On peut être adversaire sans pour autant être ennemis. Le respect est la base de toute relation harmonieuse.",
      icon: <Users size={24} />,
      color: "#8B4513"
    },
    {
      title: "Unité Familiale",
      description: "Aucune frontière ne me sépare de mon frère ou de ma sœur. Nous formons une seule famille.",
      icon: <Heart size={24} />,
      color: "#D2691E"
    },
    {
      title: "Diversité Culturelle",
      description: "Toutes les peaux ne sont égales… plus on est noir, plus le gène est dominant sur la couleur plus claire.",
      icon: <Globe size={24} />,
      color: "#CD853F"
    },
    {
      title: "Honneur du Temps",
      description: "Ajouter le temps, il faut l'honorer. Le temps est un trésor qui nous est donné.",
      icon: <Clock size={24} />,
      color: "#A0522D"
    },
    {
      title: "Éducation Traditionnelle",
      description: "L'éducation est le pilier de notre communauté, transmise de génération en génération.",
      icon: <BookOpen size={24} />,
      color: "#DEB887"
    },
    {
      title: "Protection Communautaire",
      description: "La cohésion et l'unité nous protègent et nous permettent de prospérer ensemble.",
      icon: <Shield size={24} />,
      color: "#F4A460"
    }
  ];

  // Icônes pour les sections
  const sectionIcons = {
    respect_entraide: <Heart size={28} />,
    unite_diversite: <Globe size={28} />,
    transmission_savoir: <Clock size={28} />
  };

  // 🔌 Récupérer les articles depuis l'API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://backblack.vercel.app/api/lada');
        const result = await response.json();
        
        if (result.success) {
          setArticles(result.data);
        } else {
          throw new Error(result.error);
        }
      } catch (err) {
        console.error('Erreur chargement articles:', err);
        setError(err.message);
      } finally {
        setLoading(prev => ({ ...prev, articles: false }));
      }
    };

    fetchArticles();
  }, []);

  // 🔌 Récupérer les sections contenu depuis l'API
  useEffect(() => {
    const fetchSectionsContenu = async () => {
      try {
        const response = await fetch('https://backblack.vercel.app/api/principe');
        const result = await response.json();
        
        if (result.success) {
          setSectionsContenu(result.data);
        } else {
          throw new Error(result.error);
        }
      } catch (err) {
        console.error('Erreur chargement sections:', err);
        setError(err.message);
      } finally {
        setLoading(prev => ({ ...prev, sections: false }));
      }
    };

    fetchSectionsContenu();
  }, []);

  // Fonction pour formater le contenu des sections
  const formatSectionContent = (contentText) => {
    return contentText.split('\n\n').map((paragraph, index) => (
      <p key={index} className="section-text">
        {paragraph}
      </p>
    ));
  };

  // Fonction pour récupérer le contenu complet d'un article
  const fetchArticleContent = async (articleId) => {
    try {
      const response = await fetch(`https://backblack.vercel.app/api/lada/id/${articleId}`);
      const result = await response.json();
      
      if (result.success) {
        return result.data;
      }
    } catch (err) {
      console.error('Erreur chargement contenu article:', err);
    }
    return null;
  };

  // Gestionnaire pour ouvrir le modal d'article
  const handleOpenArticle = async (article) => {
    // Si l'article n'a pas de contenu complet, on le récupère
    if (!article.content) {
      const articleWithContent = await fetchArticleContent(article.id);
      setSelectedArticle(articleWithContent || article);
    } else {
      setSelectedArticle(article);
    }
  };

  // Afficher le loader pendant le chargement
  if (loading.articles && loading.sections) {
    return (
      <div className="afro-interface">
        <div className="loading-container">
          <Loader size={48} className="spinner" />
          <p>Chargement de la sagesse ancestrale...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="afro-interface">
    
      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="hero-background">
          <img 
            src={heroImage} 
            alt="Arbre à palabre entouré des anciens du village"
            className="hero-image"
          />
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Star size={16} />
            Sagesse Ancestrale
          </div>
          
          <h1 className="hero-title">
            L'Arbre à <span className="hero-highlight">Palabre</span>
          </h1>
          
          <p className="hero-subtitle">
            Redécouvrons les enseignements de nos ancêtres et les principes qui ont guidé 
            nos communautés à travers les siècles. Sous l'arbre sacré, la sagesse se partage 
            et l'unité se construit.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">{principles.length}</div>
              <div className="stat-label">Principes Fondamentaux</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Générations</div>
            </div>
            <div className="stat">
              <div className="stat-number">54</div>
              <div className="stat-label">Pays Africains</div>
            </div>
          </div>
          
          <button className="cta-button">
            Découvrir la Sagesse
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Principles Section - Données statiques */}
      <section id="principes" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Les Principes de la Communauté</h2>
            <p className="section-subtitle">
              Les fondements qui guident notre vivre-ensemble, hérités de la sagesse de nos ancêtres
            </p>
          </div>
          
          <div className="features-grid">
            {principles.map((principe, index) => (
              <div key={index} className="feature-card">
                <div 
                  className="feature-icon"
                  style={{ background: principe.color }}
                >
                  {principe.icon}
                </div>
                <h3 className="feature-title">{principe.title}</h3>
                <p className="feature-description">{principe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Sections depuis l'API */}
      <section className="main">
        <div className="container">
          <div className="tabs-container">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === 'principes' ? 'active' : ''}`}
                onClick={() => setActiveTab('principes')}
              >
                <BookOpen size={18} />
                Principes Détaillés
              </button>
              <button 
                className={`tab ${activeTab === 'sagesse' ? 'active' : ''}`}
                onClick={() => setActiveTab('sagesse')}
              >
                <Star size={18} />
                Sagesse Ancestrale
              </button>
              <button 
                className={`tab ${activeTab === 'communaute' ? 'active' : ''}`}
                onClick={() => setActiveTab('communaute')}
              >
                <Users size={18} />
                Vie Communautaire
              </button>
            </div>
          </div>
          
          {loading.sections ? (
            <div className="loading-section">
              <Loader size={32} className="spinner" />
              <p>Chargement du contenu...</p>
            </div>
          ) : error ? (
            <div className="error-section">
              <p>Erreur: {error}</p>
            </div>
          ) : (
            <div className="sections-grid">
              {sectionsContenu.map((section) => (
                <div key={section.id} className="content-section">
                  <div className="section-header-card">
                    <div className="section-icon">
                      {sectionIcons[section.section_key] || <BookOpen size={28} />}
                    </div>
                    <div className="section-title-content">
                      <h3 className="section-title">{section.title}</h3>
                      <div className="section-stats">{section.subtitle}</div>
                    </div>
                  </div>
                  <div className="section-content">
                    {formatSectionContent(section.content_text)}
                    <button className="section-link">
                      Lire la suite
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <div className="quote-icon">"</div>
            <blockquote className="quote">
              Un seul doigt ne peut pas attraper un pou. C'est dans l'union que réside notre force, 
              dans le partage que vit notre sagesse, et dans le respect que demeure notre dignité.
            </blockquote>
            <div className="quote-author">— Proverbe Africain</div>
          </div>
        </div>
      </section>

      {/* Articles Section - Depuis l'API */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Sagesse et Enseignements</h2>
            <p className="section-subtitle">
              Des articles qui explorent la richesse de notre héritage culturel et spirituel
            </p>
          </div>
          
          {loading.articles ? (
            <div className="loading-section">
              <Loader size={32} className="spinner" />
              <p>Chargement des articles...</p>
            </div>
          ) : error ? (
            <div className="error-section">
              <p>Erreur: {error}</p>
            </div>
          ) : (
            <div className="features-grid">
              {articles.map(article => (
                <div key={article.id} className="feature-card">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-info">{article.read_time} • {article.publish_date}</span>
                  </div>
                  <h3 className="feature-title">{article.title}</h3>
                  <p className="feature-description">{article.excerpt}</p>
                  <button 
                    className="section-link"
                    onClick={() => handleOpenArticle(article)}
                  >
                    Lire l'article
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="article-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <button 
                className="modal-close"
                onClick={() => setSelectedArticle(null)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="article-header">
                <div className="article-meta">
                  <span className="article-category">{selectedArticle.category}</span>
                  <div className="article-info">
                    <span className="info-item">{selectedArticle.read_time}</span>
                    <span className="info-item">{selectedArticle.publish_date}</span>
                  </div>
                </div>
                <h2 className="article-title">{selectedArticle.title}</h2>
                <div className="article-stats">Sagesse Ancestrale • Enseignement</div>
              </div>
              
              <div className="article-content">
                <p className="article-paragraph">
                  {selectedArticle.excerpt}
                </p>
                {selectedArticle.content && (
                  <div>
                    {selectedArticle.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="article-paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                <p className="article-paragraph">
                  Sous l'ombre bienveillante de l'arbre à palabre, nos ancêtres se réunissaient 
                  pour partager leur sagesse, résoudre les conflits et prendre des décisions 
                  importantes pour la communauté. Ces moments sacrés étaient plus que de simples 
                  réunions ; c'étaient des occasions d'apprentissage, de transmission et de 
                  renforcement des liens communautaires.
                </p>
              </div>
              
              <div className="article-footer">
                <div className="article-actions">
                  <button className="action-btn secondary">
                    <Heart size={16} />
                    Apprécier
                  </button>
                  <button className="action-btn primary">
                    Partager la Sagesse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfroInterface;