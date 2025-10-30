import React, { useState } from 'react';
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
  Phone
} from 'lucide-react';

// Import de l'image depuis le projet
import heroImage from '../assets/cultural-pattern.webp'; // Chemin vers votre image
import './lada.css'
const AfroInterface = () => {
  const [activeTab, setActiveTab] = useState('principes');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

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

  const articles = [
    {
      id: 1,
      title: "L'art de la palabre africaine",
      excerpt: "Découvrez comment nos ancêtres utilisaient l'arbre à palabre pour résoudre les conflits et prendre des décisions importantes pour la communauté.",
      category: "Tradition",
      readTime: "5 min",
      date: "15 Mars 2024"
    },
    {
      id: 2,
      title: "Les valeurs qui unissent notre peuple",
      excerpt: "Exploration des principes fondamentaux qui ont permis à nos communautés de traverser les siècles avec résilience et dignité.",
      category: "Valeurs",
      readTime: "7 min",
      date: "12 Mars 2024"
    },
    {
      id: 3,
      title: "L'éducation traditionnelle sous l'arbre à palabre",
      excerpt: "Comment les anciens transmettaient leur sagesse aux jeunes générations dans un cadre naturel et sacré.",
      category: "Éducation",
      readTime: "6 min",
      date: "10 Mars 2024"
    }
  ];

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
              <div className="stat-number">7</div>
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

      {/* Principles Section */}
      <section id="principes" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Les Principes de la Communauté</h2>
            <p className="section-subtitle">
              Les fondements qui guident notre vivre-ensemble, hérités de la sagesse de nos ancêtres
            </p>
          </div>
          
          <div className="features-grid">
            {principles.map((principle, index) => (
              <div key={index} className="feature-card">
                <div 
                  className="feature-icon"
                  style={{ background: principle.color }}
                >
                  {principle.icon}
                </div>
                <h3 className="feature-title">{principle.title}</h3>
                <p className="feature-description">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
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
          
          <div className="sections-grid">
            <div className="content-section">
              <div className="section-header-card">
                <div className="section-icon">
                  <Heart size={28} />
                </div>
                <div className="section-title-content">
                  <h3 className="section-title">Respect et Entraide</h3>
                  <div className="section-stats">Pilier Fondamental</div>
                </div>
              </div>
              <div className="section-content">
                <p className="section-text">
                  Le respect mutuel est la colonne vertébrale de notre communauté. 
                  Nos anciens nous ont enseigné que chaque individu a sa place et 
                  sa valeur dans le cercle communautaire.
                </p>
                <p className="section-text">
                  L'entraide n'est pas une option mais un devoir sacré. Quand un 
                  membre de la communauté souffre, c'est toute la communauté qui 
                  ressent cette douleur et se mobilise.
                </p>
                <button className="section-link">
                  Lire la suite
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="content-section">
              <div className="section-header-card">
                <div className="section-icon">
                  <Globe size={28} />
                </div>
                <div className="section-title-content">
                  <h3 className="section-title">Unité dans la Diversité</h3>
                  <div className="section-stats">Force Collective</div>
                </div>
              </div>
              <div className="section-content">
                <p className="section-text">
                  Nos différences sont notre richesse. Chaque ethnie, chaque culture 
                  apporte sa couleur unique à la tapisserie magnifique de notre héritage commun.
                </p>
                <p className="section-text">
                  L'arbre à palabre symbolise cette unité : différentes branches, 
                  un même tronc, des racines communes qui nous relient à la terre mère.
                </p>
                <button className="section-link">
                  Explorer nos racines
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
            <div className="content-section">
              <div className="section-header-card">
                <div className="section-icon">
                  <Clock size={28} />
                </div>
                <div className="section-title-content">
                  <h3 className="section-title">Transmission du Savoir</h3>
                  <div className="section-stats">Héritage Éternel</div>
                </div>
              </div>
              <div className="section-content">
                <p className="section-text">
                  La connaissance se transmet de bouche à oreille, de cœur à cœur, 
                  sous l'ombre bienveillante de l'arbre sacré. Les anciens sont les 
                  bibliothèques vivantes de notre peuple.
                </p>
                <p className="section-text">
                  Chaque conte, chaque proverbe, chaque chanson porte en elle la 
                  sagesse accumulée de générations qui ont marché avant nous.
                </p>
                <button className="section-link">
                  Découvrir les contes
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
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

      {/* Articles Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Sagesse et Enseignements</h2>
            <p className="section-subtitle">
              Des articles qui explorent la richesse de notre héritage culturel et spirituel
            </p>
          </div>
          
          <div className="features-grid">
            {articles.map(article => (
              <div key={article.id} className="feature-card">
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-info">{article.readTime} • {article.date}</span>
                </div>
                <h3 className="feature-title">{article.title}</h3>
                <p className="feature-description">{article.excerpt}</p>
                <button 
                  className="section-link"
                  onClick={() => setSelectedArticle(article)}
                >
                  Lire l'article
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
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
                    <span className="info-item">{selectedArticle.readTime}</span>
                    <span className="info-item">{selectedArticle.date}</span>
                  </div>
                </div>
                <h2 className="article-title">{selectedArticle.title}</h2>
                <div className="article-stats">Sagesse Ancestrale • Enseignement</div>
              </div>
              
              <div className="article-content">
                <p className="article-paragraph">
                  {selectedArticle.excerpt}
                </p>
                <p className="article-paragraph">
                  Sous l'ombre bienveillante de l'arbre à palabre, nos ancêtres se réunissaient 
                  pour partager leur sagesse, résoudre les conflits et prendre des décisions 
                  importantes pour la communauté. Ces moments sacrés étaient plus que de simples 
                  réunions ; c'étaient des occasions d'apprentissage, de transmission et de 
                  renforcement des liens communautaires.
                </p>
                <p className="article-paragraph">
                  Chaque parole prononcée sous l'arbre sacré portait le poids de la tradition 
                  et la lumière de la sagesse accumulée. Les anciens, gardiens de la connaissance, 
                  partageaient leurs expériences tandis que les plus jeunes écoutaient avec 
                  respect, s'imprégnant des enseignements qui guideraient leurs vies.
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