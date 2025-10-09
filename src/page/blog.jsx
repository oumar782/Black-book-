import { useState, useEffect } from 'react';
import { Search, Calendar, Clock, User, ArrowRight, Tag, Heart, MessageCircle, Sparkles, Crown, Zap, BookOpen, Eye } from 'lucide-react';

const AfroBlogList = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const categories = [
    'Tous', 'Histoire', 'Culture', 'Art', 'Politique', 'Société', 'Éducation', 'Innovation'
  ];

  const articles = [
    {
      id: 1,
      title: "L'impact du royaume du Kush sur la civilisation moderne",
      excerpt: "Découvrez comment les innovations du royaume de Kush continuent d'influencer notre monde contemporain, de l'architecture à la gouvernance.",
      content: "Une analyse approfondie des contributions durables de cette civilisation méconnue...",
      category: "Histoire",
      author: "Dr. Amina Kone",
      publishedDate: "2024-12-08",
      readTime: "8 min",
      featured: true,
      likes: 156,
      comments: 23,
      views: 2847,
      tags: ["Kush", "Civilisation", "Héritage"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Renaissance de l'art contemporain africain à Paris",
      excerpt: "Retour sur l'exposition 'Visions d'Afrique' qui bouleverse les codes de l'art contemporain dans la capitale française.",
      content: "L'art africain contemporain connaît un renouveau spectaculaire...",
      category: "Art",
      author: "Marcus Diallo",
      publishedDate: "2024-12-06",
      readTime: "5 min",
      featured: false,
      likes: 89,
      comments: 15,
      views: 1423,
      tags: ["Art contemporain", "Exposition", "Paris"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Les langues africaines à l'ère du numérique",
      excerpt: "Comment la technologie moderne peut-elle contribuer à la préservation et à la promotion des langues africaines ?",
      content: "Un défi majeur s'impose : adapter nos langues ancestrales...",
      category: "Innovation",
      author: "Fatou Sané",
      publishedDate: "2024-12-04",
      readTime: "6 min",
      featured: true,
      likes: 134,
      comments: 31,
      views: 1876,
      tags: ["Langues", "Numérique", "Préservation"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Ubuntu : philosophie africaine pour un leadership moderne",
      excerpt: "Exploration des principes Ubuntu et leur application dans les modèles de leadership contemporains.",
      content: "Ubuntu, cette philosophie millénaire qui prône l'interconnexion...",
      category: "Société",
      author: "Dr. Kwame Asante",
      publishedDate: "2024-12-02",
      readTime: "7 min",
      featured: false,
      likes: 201,
      comments: 45,
      views: 3102,
      tags: ["Ubuntu", "Leadership", "Philosophie"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Éducation en Afrique : défis et innovations",
      excerpt: "État des lieux des systèmes éducatifs africains et présentation d'initiatives innovantes qui transforment l'apprentissage.",
      content: "L'éducation reste l'un des piliers fondamentaux...",
      category: "Éducation",
      author: "Prof. Aminata Traoré",
      publishedDate: "2024-11-30",
      readTime: "9 min",
      featured: false,
      likes: 167,
      comments: 28,
      views: 2234,
      tags: ["Éducation", "Innovation", "Développement"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Musique afrobeat : de Lagos à la scène mondiale",
      excerpt: "Comment l'afrobeat a conquis la planète et influence aujourd'hui la musique populaire internationale.",
      content: "De Fela Kuti à Burna Boy, retracez l'histoire...",
      category: "Culture",
      author: "Ahmed Diallo",
      publishedDate: "2024-11-28",
      readTime: "4 min",
      featured: true,
      likes: 298,
      comments: 67,
      views: 4567,
      tags: ["Afrobeat", "Musique", "Culture"],
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'Tous' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="afro-blog-container">
      {/* Effet de particules animées */}
      <div className="afro-blog-particles-background">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="afro-blog-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }} />
        ))}
      </div>

      {/* Curseur personnalisé - seulement sur desktop */}
      {!isMobile && (
        <div 
          className="afro-blog-custom-cursor"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      <section className="afro-blog-section">
        <div className="afro-blog-content">
          {/* En-tête hero */}
          <div className="afro-blog-hero-section">
            <div className="afro-hero-background-glow" />
            <div className="afro-blog-header">
              <div className="afro-blog-header-badge">
                <BookOpen className="afro-badge-icon-blog" />
                <span>Savoir & Connaissance</span>
              </div>
              <h1 className="afro-blog-main-title">
                <span className="afro-blog-title-gradient">Blog &</span>
                <span className="afro-blog-title-accent">Actualités</span>
              </h1>
              <div className="afro-blog-title-underline">
                <div className="afro-blog-underline-animation" />
              </div>
              <p className="afro-blog-subtitle">
                Explorez nos articles, analyses et réflexions sur l'héritage africain, 
                la culture contemporaine et les enjeux qui façonnent notre avenir commun.
              </p>
            </div>
          </div>

          {/* Barre de recherche et filtres premium */}
          <div className={`afro-blog-search-section ${isScrolled ? 'afro-scrolled' : ''}`}>
            <div className="afro-blog-search-glass">
              <div className="afro-blog-search-content">
                {/* Recherche avancée */}
                <div className="afro-blog-search-wrapper">
                  <div className="afro-search-input-container">
                    <Search className="afro-blog-search-icon" />
                    <input
                      placeholder="Rechercher un article, un auteur, un tag..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="afro-blog-search-input"
                    />
                    <div className="afro-search-underline-blog" />
                  </div>
                </div>

                {/* Filtres par catégorie avec animations */}
                <div className="afro-blog-filters">
                  <div className="afro-blog-filters-header">
                    <Zap className="afro-filter-sparkle-blog" />
                    <span>Explorer par thème</span>
                  </div>
                  <div className="afro-blog-filters-grid">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        className={`afro-blog-filter-btn ${activeCategory === category ? 'afro-active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        <span className="afro-filter-text">{category}</span>
                        <div className="afro-filter-glow" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article featured avec design premium */}
          {filteredArticles.length > 0 && filteredArticles[0].featured && (
            <div className="afro-featured-article">
              <div className="afro-featured-article-card">
                <div className="afro-featured-grid">
                  {/* Image featured */}
                  <div className="afro-featured-image-section">
                    <div className="afro-featured-image-container">
                      <div className="afro-featured-image-glow" />
                      <div className="afro-featured-image-content">
                        <div className="afro-featured-icon-orb">
                          <BookOpen className="afro-featured-main-icon" />
                        </div>
                        <div className="afro-featured-image-label">Article à la une</div>
                      </div>
                      
                      {/* Badge featured */}
                      <div className="afro-featured-badge-premium">
                        <Crown className="afro-featured-badge-icon" />
                        <span>ARTICLE EXCEPTIONNEL</span>
                      </div>

                      {/* Overlay interactif */}
                      <div className="afro-featured-overlay">
                        <button className="afro-featured-read-btn">
                          <span>Lire l'article</span>
                          <ArrowRight className="afro-read-arrow-icon" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contenu featured */}
                  <div className="afro-featured-content-section">
                    <div className="afro-featured-meta">
                      <div className="afro-featured-category-tag">
                        {filteredArticles[0].category}
                      </div>
                      <div className="afro-featured-date">
                        <Calendar className="afro-meta-icon" />
                        {formatDate(filteredArticles[0].publishedDate)}
                      </div>
                    </div>

                    <h2 className="afro-featured-title">
                      {filteredArticles[0].title}
                    </h2>

                    <p className="afro-featured-excerpt">
                      {filteredArticles[0].excerpt}
                    </p>

                    <div className="afro-featured-author-section">
                      <div className="afro-author-avatar">
                        <User className="afro-avatar-icon" />
                      </div>
                      <div className="afro-author-info">
                        <div className="afro-author-name">{filteredArticles[0].author}</div>
                        <div className="afro-reading-time">
                          <Clock className="afro-meta-icon" />
                          {filteredArticles[0].readTime} de lecture
                        </div>
                      </div>
                    </div>

                    {/* Tags featured */}
                    <div className="afro-featured-tags">
                      {filteredArticles[0].tags.map((tag, index) => (
                        <span key={tag} className="afro-featured-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats et CTA */}
                    <div className="afro-featured-actions">
                      <div className="afro-article-stats">
                        <div className="afro-stat-item">
                          <Heart className="afro-stat-icon" />
                          <span>{filteredArticles[0].likes}</span>
                        </div>
                        <div className="afro-stat-item">
                          <MessageCircle className="afro-stat-icon" />
                          <span>{filteredArticles[0].comments}</span>
                        </div>
                        <div className="afro-stat-item">
                          <Eye className="afro-stat-icon" />
                          <span>{filteredArticles[0].views}</span>
                        </div>
                      </div>

                      <button className="afro-premium-read-button">
                        <span>Lire l'article</span>
                        <div className="afro-button-sparkle-group">
                          <Sparkles className="afro-button-sparkle-icon" />
                        </div>
                        <div className="afro-button-wave-effect" />
                      </button>
                    </div>
                  </div>

                  {/* Bordure animée */}
                  <div className="afro-featured-card-border">
                    <div className="afro-border-top-featured" />
                    <div className="afro-border-right-featured" />
                    <div className="afro-border-bottom-featured" />
                    <div className="afro-border-left-featured" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grille des articles premium */}
          <div className="afro-articles-grid">
            {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article, index) => (
              <article
                key={article.id}
                className="afro-article-card"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredArticle(article.id)}
                onMouseLeave={() => setHoveredArticle(null)}
              >
                <div className="afro-article-card-inner">
                  {/* Image de l'article */}
                  <div className="afro-article-image-section">
                    <div className="afro-article-image-container">
                      <div className="afro-article-image-glow" />
                      <div className="afro-article-image-content">
                        <div className="afro-article-icon-wrapper">
                          <Tag className="afro-article-tag-icon" />
                        </div>
                        <div className="afro-article-image-label">Illustration</div>
                      </div>

                      {/* Badges */}
                      <div className="afro-article-badges">
                        {article.featured && (
                          <div className="afro-article-badge-premium afro-featured-badge">
                            <Sparkles className="afro-badge-sparkle" />
                            <span>FEATURED</span>
                          </div>
                        )}
                        <div className="afro-article-badge-premium afro-category-badge">
                          {article.category}
                        </div>
                      </div>

                      {/* Overlay au hover */}
                      <div className={`afro-article-image-overlay ${hoveredArticle === article.id ? 'afro-active' : ''}`}>
                        <div className="afro-overlay-actions">
                          <button className="afro-article-like-btn">
                            <Heart className="afro-action-icon" />
                          </button>
                          <button className="afro-article-quick-view">
                            <span>Lire rapidement</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu de l'article */}
                  <div className="afro-article-content">
                    {/* Métadonnées */}
                    <div className="afro-article-meta">
                      <div className="afro-meta-date">
                        <Calendar className="afro-meta-icon-small" />
                        {formatDate(article.publishedDate)}
                      </div>
                      <div className="afro-meta-stats">
                        <div className="afro-meta-stat">
                          <Heart className="afro-meta-icon-small" />
                          {article.likes}
                        </div>
                        <div className="afro-meta-stat">
                          <MessageCircle className="afro-meta-icon-small" />
                          {article.comments}
                        </div>
                      </div>
                    </div>

                    {/* Titre */}
                    <h3 className="afro-article-title">
                      {article.title}
                    </h3>

                    {/* Extrait */}
                    <p className="afro-article-excerpt">
                      {article.excerpt}
                    </p>

                    {/* Auteur et temps de lecture */}
                    <div className="afro-article-author">
                      <div className="afro-author-mini">
                        <User className="afro-author-mini-icon" />
                        <span>{article.author}</span>
                      </div>
                      <div className="afro-read-time-mini">
                        <Clock className="afro-read-time-icon" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="afro-article-tags">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tag} className="afro-article-tag" style={{ animationDelay: `${tagIndex * 0.05}s` }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="afro-article-actions">
                      <button className="afro-premium-read-more">
                        <span>Lire l'article</span>
                        <ArrowRight className="afro-read-more-arrow" />
                        <div className="afro-read-more-glow" />
                      </button>
                    </div>
                  </div>

                  {/* Effet de bordure animée */}
                  <div className="afro-article-card-border">
                    <div className="afro-article-border-top" />
                    <div className="afro-article-border-right" />
                    <div className="afro-article-border-bottom" />
                    <div className="afro-article-border-left" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter premium */}
          <div className="afro-newsletter-section">
            <div className="afro-newsletter-glass">
              <div className="afro-newsletter-content">
                <div className="afro-newsletter-header">
                  <div className="afro-newsletter-badge">
                    <Sparkles className="afro-newsletter-sparkle" />
                    <span>Restez informé</span>
                  </div>
                  <h3 className="afro-newsletter-title">
                    Ne ratez aucun article !
                  </h3>
                  <p className="afro-newsletter-text">
                    Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, 
                    analyses et réflexions directement dans votre boîte mail.
                  </p>
                </div>

                <div className="afro-newsletter-form">
                  <div className="afro-email-input-wrapper">
                    <input 
                      placeholder="Votre adresse email" 
                      className="afro-email-input"
                    />
                    <div className="afro-input-underline" />
                  </div>
                  <button className="afro-premium-subscribe-btn">
                    <span>S'abonner</span>
                    <div className="afro-subscribe-sparkle">
                      <ArrowRight className="afro-subscribe-arrow" />
                    </div>
                    <div className="afro-subscribe-glow" />
                  </button>
                </div>
              </div>
              
              <div className="afro-newsletter-decoration">
                <div className="afro-newsletter-orb afro-orb-1" />
                <div className="afro-newsletter-orb afro-orb-2" />
                <div className="afro-newsletter-orb afro-orb-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .afro-blog-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #9A3412 50%, #1a1a1a 75%, #0a0a0a 100%);
          background-size: 400% 400%;
          animation: afroGradientShift 20s ease infinite;
          overflow-x: hidden;
        }

       

        /* Particules animées */
        .afro-blog-particles-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .afro-blog-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #C2410C 0%, #9A3412 100%);
          border-radius: 50%;
          animation: afroFloatParticleBlog linear infinite;
          opacity: 0.4;
        }

        @keyframes afroFloatParticleBlog {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Curseur personnalisé */
        .afro-blog-custom-cursor {
          position: fixed;
          width: 18px;
          height: 18px;
          background: radial-gradient(circle, #C2410C 0%, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .afro-blog-section {
          position: relative;
          z-index: 2;
        }

        .afro-blog-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        /* Hero Section */
        .afro-blog-hero-section {
          position: relative;
          padding: 4rem 0 3rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
        }

        .afro-hero-background-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(600px, 90vw);
          height: min(600px, 90vw);
          background: radial-gradient(ellipse at center, rgba(194, 65, 12, 0.15) 0%, transparent 70%);
          opacity: 0.6;
        }

        .afro-blog-header {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .afro-blog-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(194, 65, 12, 0.2), rgba(154, 52, 18, 0.1));
          border: 1px solid rgba(194, 65, 12, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: afroSlideInDown 0.8s ease-out;
        }

        .afro-badge-icon-blog {
          width: 1rem;
          height: 1rem;
          color: #C2410C;
        }

        .afro-blog-header-badge span {
          color: #C2410C;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .afro-blog-main-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 8vw, 4rem);
          margin-bottom: 1rem;
          animation: afroFadeInUp 0.8s ease-out 0.2s both;
          line-height: 1.1;
          text-align: center;
        }

        .afro-blog-title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .afro-blog-title-accent {
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 0.5rem;
        }

        .afro-blog-title-underline {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          animation: afroFadeInUp 0.8s ease-out 0.4s both;
        }

        .afro-blog-underline-animation {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #C2410C, transparent);
          border-radius: 2px;
          animation: afroUnderlinePulse 2s ease-in-out infinite;
        }

        @keyframes afroUnderlinePulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.3); opacity: 0.8; }
        }

        .afro-blog-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          animation: afroFadeInUp 0.8s ease-out 0.6s both;
          text-align: center;
        }

        /* Section recherche */
        .afro-blog-search-section {
          margin-bottom: 3rem;
          transition: all 0.3s ease;
          padding: 0 1rem;
        }

        .afro-blog-search-section.afro-scrolled {
          transform: translateY(-10px);
        }

        .afro-blog-search-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: clamp(1.5rem, 4vw, 2.5rem);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          max-width: 1200px;
          margin: 0 auto;
        }

        .afro-blog-search-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .afro-blog-search-wrapper {
          display: flex;
          justify-content: center;
        }

        .afro-search-input-container {
          position: relative;
          max-width: 500px;
          width: 100%;
        }

        .afro-blog-search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
          transition: color 0.3s ease;
        }

        .afro-blog-search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .afro-blog-search-input:focus {
          outline: none;
          border-color: #C2410C;
          background: rgba(194, 65, 12, 0.05);
        }

        .afro-blog-search-input::placeholder {
          color: #64748b;
        }

        .afro-search-underline-blog {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #C2410C, #9A3412);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .afro-blog-search-input:focus ~ .afro-search-underline-blog {
          width: 100%;
        }

        /* Filtres */
        .afro-blog-filters {
          text-align: center;
        }

        .afro-blog-filters-header {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: #94a3b8;
          font-weight: 600;
          font-size: clamp(1rem, 2vw, 1.125rem);
        }

        .afro-filter-sparkle-blog {
          width: 1.25rem;
          height: 1.25rem;
          color: #C2410C;
        }

        .afro-blog-filters-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .afro-blog-filter-btn {
          position: relative;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          animation: afroSlideInUp 0.6s ease-out both;
          font-size: 0.875rem;
        }

        .afro-blog-filter-btn:hover {
          background: rgba(194, 65, 12, 0.1);
          border-color: rgba(194, 65, 12, 0.3);
          color: #C2410C;
          transform: translateY(-2px);
        }

        .afro-blog-filter-btn.afro-active {
          background: linear-gradient(135deg, rgba(194, 65, 12, 0.2), rgba(154, 52, 18, 0.1));
          border-color: #C2410C;
          color: #C2410C;
          box-shadow: 0 8px 25px rgba(194, 65, 12, 0.3);
        }

        .afro-filter-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(194, 65, 12, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .afro-blog-filter-btn.afro-active .afro-filter-glow {
          left: 100%;
        }

        /* Article featured */
        .afro-featured-article {
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .afro-featured-article-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
          max-width: 1200px;
          margin: 0 auto;
        }

        .afro-featured-article-card:hover {
          transform: translateY(-5px);
          border-color: rgba(194, 65, 12, 0.3);
          box-shadow: 0 25px 50px -12px rgba(194, 65, 12, 0.25);
        }

        .afro-featured-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        .afro-featured-image-section {
          position: relative;
          overflow: hidden;
          min-height: 300px;
        }

        .afro-featured-image-container {
          position: relative;
          height: 100%;
          min-height: 300px;
          background: linear-gradient(135deg, rgba(194, 65, 12, 0.15), rgba(154, 52, 18, 0.1));
        }

        .afro-featured-image-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(194, 65, 12, 0.2), transparent 70%);
        }

        .afro-featured-image-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 2;
        }

        .afro-featured-icon-orb {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(194, 65, 12, 0.3), transparent);
          border: 2px solid rgba(194, 65, 12, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          backdrop-filter: blur(10px);
          animation: afroOrbPulse 3s ease-in-out infinite;
        }

        @keyframes afroOrbPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(194, 65, 12, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(194, 65, 12, 0.6); }
        }

        .afro-featured-main-icon {
          width: 2rem;
          height: 2rem;
          color: #C2410C;
        }

        .afro-featured-image-label {
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .afro-featured-badge-premium {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #C2410C, #9A3412);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          backdrop-filter: blur(10px);
          animation: afroBadgeFloat 2s ease-in-out infinite;
        }

        @keyframes afroBadgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .afro-featured-badge-icon {
          width: 0.875rem;
          height: 0.875rem;
        }

        .afro-featured-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .afro-featured-image-container:hover .afro-featured-overlay {
          opacity: 1;
        }

        .afro-featured-read-btn {
          background: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          color: #1a1a1a;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .afro-featured-read-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .afro-read-arrow-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .afro-featured-content-section {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .afro-featured-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .afro-featured-category-tag {
          background: rgba(194, 65, 12, 0.1);
          color: #C2410C;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .afro-featured-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .afro-meta-icon {
          width: 1rem;
          height: 1rem;
        }

        .afro-featured-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 4vw, 2rem);
          line-height: 1.2;
          color: white;
          margin-bottom: 1rem;
        }

        .afro-featured-excerpt {
          color: #94a3b8;
          font-size: clamp(1rem, 2vw, 1.125rem);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .afro-featured-author-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .afro-author-avatar {
          width: 3rem;
          height: 3rem;
          background: rgba(194, 65, 12, 0.1);
          border: 2px solid rgba(194, 65, 12, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .afro-avatar-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #C2410C;
        }

        .afro-author-info {
          display: flex;
          flex-direction: column;
        }

        .afro-author-name {
          font-weight: 600;
          color: white;
          margin-bottom: 0.25rem;
        }

        .afro-reading-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .afro-featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .afro-featured-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #C2410C;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          animation: afroFadeInUp 0.6s ease-out both;
        }

        .afro-featured-actions {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .afro-article-stats {
          display: flex;
          gap: 1.5rem;
        }

        .afro-stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .afro-stat-icon {
          width: 1rem;
          height: 1rem;
        }

        .afro-premium-read-button {
          position: relative;
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          max-width: 200px;
        }

        .afro-premium-read-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(194, 65, 12, 0.4);
        }

        .afro-button-sparkle-group {
          display: flex;
          align-items: center;
        }

        .afro-button-sparkle-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .afro-button-wave-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .afro-premium-read-button:hover .afro-button-wave-effect {
          left: 100%;
        }

        .afro-featured-card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .afro-featured-card-border div {
          position: absolute;
          background: linear-gradient(90deg, #C2410C 0%, #9A3412 100%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        /* Grille des articles */
        .afro-articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding: 0 1rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        .afro-article-card {
          animation: afroFadeInUp 0.6s ease-out both;
          display: flex;
        }

        .afro-article-card-inner {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .afro-article-card:hover .afro-article-card-inner {
          transform: translateY(-8px);
          border-color: rgba(194, 65, 12, 0.3);
          box-shadow: 0 20px 40px rgba(194, 65, 12, 0.2);
        }

        .afro-article-image-section {
          position: relative;
          height: 200px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .afro-article-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(194, 65, 12, 0.1), rgba(154, 52, 18, 0.05));
        }

        .afro-article-image-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(194, 65, 12, 0.15), transparent 70%);
        }

        .afro-article-image-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 2;
        }

        .afro-article-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(194, 65, 12, 0.2);
          border: 2px solid rgba(194, 65, 12, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          backdrop-filter: blur(10px);
        }

        .afro-article-tag-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #C2410C;
        }

        .afro-article-image-label {
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .afro-article-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .afro-article-badge-premium {
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.375rem;
          backdrop-filter: blur(10px);
        }

        .afro-featured-badge {
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          animation: afroBadgePulse 2s ease-in-out infinite;
        }

        .afro-category-badge {
          background: rgba(194, 65, 12, 0.3);
          border: 1px solid rgba(194, 65, 12, 0.5);
        }

        .afro-badge-sparkle {
          width: 0.625rem;
          height: 0.625rem;
        }

        .afro-article-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .afro-article-image-overlay.afro-active {
          opacity: 1;
        }

        .afro-overlay-actions {
          display: flex;
          gap: 1rem;
        }

        .afro-article-like-btn {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .afro-article-like-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .afro-action-icon {
          width: 1.125rem;
          height: 1.125rem;
          color: #374151;
        }

        .afro-article-quick-view {
          background: white;
          border: none;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          color: #1a1a1a;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .afro-article-quick-view:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .afro-article-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .afro-article-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .afro-meta-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .afro-meta-icon-small {
          width: 0.875rem;
          height: 0.875rem;
        }

        .afro-meta-stats {
          display: flex;
          gap: 0.75rem;
        }

        .afro-meta-stat {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .afro-article-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 1.3;
          color: white;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .afro-article-excerpt {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .afro-article-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .afro-author-mini, .afro-read-time-mini {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.75rem;
        }

        .afro-author-mini-icon, .afro-read-time-icon {
          width: 0.75rem;
          height: 0.75rem;
        }

        .afro-article-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-bottom: 1.5rem;
        }

        .afro-article-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #C2410C;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 500;
          animation: afroFadeInUp 0.4s ease-out both;
        }

        .afro-article-actions {
          margin-top: auto;
        }

        .afro-premium-read-more {
          position: relative;
          background: transparent;
          border: 1px solid rgba(194, 65, 12, 0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          color: #C2410C;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .afro-premium-read-more:hover {
          background: rgba(194, 65, 12, 0.1);
          border-color: #C2410C;
          transform: translateY(-2px);
        }

        .afro-read-more-arrow {
          width: 1rem;
          height: 1rem;
          transition: transform 0.3s ease;
        }

        .afro-premium-read-more:hover .afro-read-more-arrow {
          transform: translateX(3px);
        }

        .afro-read-more-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(194, 65, 12, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .afro-premium-read-more:hover .afro-read-more-glow {
          left: 100%;
        }

        .afro-article-card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Newsletter */
        .afro-newsletter-section {
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .afro-newsletter-glass {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: clamp(2rem, 4vw, 3rem);
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
        }

        .afro-newsletter-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .afro-newsletter-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .afro-newsletter-sparkle {
          width: 1rem;
          height: 1rem;
          color: #C2410C;
        }

        .afro-newsletter-badge span {
          color: #C2410C;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .afro-newsletter-title {
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .afro-newsletter-text {
          color: #94a3b8;
          font-size: clamp(1rem, 2vw, 1.125rem);
          max-width: 500px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .afro-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .afro-email-input-wrapper {
          position: relative;
          width: 100%;
        }

        .afro-email-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .afro-email-input:focus {
          outline: none;
          border-color: #C2410C;
          background: rgba(194, 65, 12, 0.05);
        }

        .afro-email-input::placeholder {
          color: #64748b;
        }

        .afro-input-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #C2410C 0%, #9A3412 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .afro-email-input:focus ~ .afro-input-underline {
          width: 100%;
        }

        .afro-premium-subscribe-btn {
          position: relative;
          background: linear-gradient(135deg, #C2410C 0%, #9A3412 100%);
          border: none;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
          justify-content: center;
        }

        .afro-premium-subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(194, 65, 12, 0.4);
        }

        .afro-subscribe-sparkle {
          display: flex;
          align-items: center;
        }

        .afro-subscribe-arrow {
          width: 1.25rem;
          height: 1.25rem;
        }

        .afro-subscribe-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .afro-premium-subscribe-btn:hover .afro-subscribe-glow {
          left: 100%;
        }

        .afro-newsletter-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .afro-newsletter-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.4;
        }

        .afro-orb-1 {
          width: 80px;
          height: 80px;
          background: #C2410C;
          top: 20%;
          left: 10%;
          animation: afroFloatOrbNews 5s ease-in-out infinite;
        }

        .afro-orb-2 {
          width: 120px;
          height: 120px;
          background: #C2410C;
          top: 60%;
          right: 15%;
          animation: afroFloatOrbNews 7s ease-in-out infinite reverse;
        }

        .afro-orb-3 {
          width: 60px;
          height: 60px;
          background: #9A3412;
          bottom: 30%;
          left: 20%;
          animation: afroFloatOrbNews 9s ease-in-out infinite;
        }

        @keyframes afroFloatOrbNews {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(8px) rotate(240deg); }
        }

        /* Animations globales */
        @keyframes afroFadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes afroSlideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes afroSlideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes afroBadgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Responsive Design - Points de rupture optimisés */
        @media (min-width: 640px) {
          .afro-blog-content {
            padding: 0 1.5rem;
          }

          .afro-articles-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          }

          .afro-featured-actions {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .afro-premium-read-button {
            width: auto;
          }

          .afro-newsletter-form {
            flex-direction: row;
          }
        }

        @media (min-width: 768px) {
          .afro-blog-content {
            padding: 0 2rem;
          }

          .afro-blog-hero-section {
            padding: 6rem 0 4rem;
            min-height: 70vh;
          }

          .afro-featured-grid {
            grid-template-columns: 1fr 1fr;
          }

          .afro-featured-image-section {
            min-height: 400px;
          }

          .afro-featured-image-container {
            min-height: 400px;
          }
        }

        @media (min-width: 1024px) {
          .afro-blog-content {
            padding: 0 2rem;
          }

          .afro-articles-grid {
            gap: 2rem;
          }

          .afro-featured-content-section {
            padding: 2.5rem;
          }
        }

        @media (min-width: 1280px) {
          .afro-blog-content {
            padding: 0 2rem;
          }
        }

        /* Optimisations pour très grands écrans */
        @media (min-width: 1536px) {
          .afro-blog-content {
            max-width: 1400px;
          }
        }

        /* Support tactile amélioré */
        @media (hover: none) {
          .afro-article-card:hover .afro-article-card-inner {
            transform: none;
          }

          .afro-featured-article-card:hover {
            transform: none;
          }

          .afro-blog-filter-btn:hover {
            transform: none;
          }

          .afro-premium-read-more:hover,
          .afro-premium-read-button:hover,
          .afro-premium-subscribe-btn:hover {
            transform: none;
          }
        }

        /* Réduire les animations pour les préférences de réduction de mouvement */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AfroBlogList;