import { useState, useEffect } from 'react';
import { Search, Calendar, Clock, User, ArrowRight, Tag, Heart, MessageCircle, Sparkles, Crown, Zap, BookOpen, Eye } from 'lucide-react';

const PremiumBlogList = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

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
    <div className="premium-blog-container">
      {/* Effet de particules animées */}
      <div className="blog-particles-background">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="blog-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${12 + Math.random() * 8}s`
          }} />
        ))}
      </div>

      {/* Curseur personnalisé */}
      <div 
        className="blog-custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <section className="premium-blog-section">
        <div className="premium-blog-content">
          {/* En-tête hero */}
          <div className="blog-hero-section">
            <div className="hero-background-glow" />
            <div className="premium-blog-header">
              <div className="blog-header-badge">
                <BookOpen className="badge-icon-blog" />
                <span>Savoir & Connaissance</span>
              </div>
              <h1 className="blog-main-title">
                <span className="blog-title-gradient">Blog &</span>
                <span className="blog-title-accent">Actualités</span>
              </h1>
              <div className="blog-title-underline">
                <div className="blog-underline-animation" />
              </div>
              <p className="blog-subtitle">
                Explorez nos articles, analyses et réflexions sur l'héritage africain, 
                la culture contemporaine et les enjeux qui façonnent notre avenir commun.
              </p>
            </div>
          </div>

          {/* Barre de recherche et filtres premium */}
          <div className={`premium-blog-search-section ${isScrolled ? 'scrolled' : ''}`}>
            <div className="blog-search-glass">
              <div className="blog-search-content">
                {/* Recherche avancée */}
                <div className="blog-search-wrapper">
                  <div className="search-input-container">
                    <Search className="blog-search-icon" />
                    <input
                      placeholder="Rechercher un article, un auteur, un tag..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="premium-blog-search-input"
                    />
                    <div className="search-underline-blog" />
                  </div>
                </div>

                {/* Filtres par catégorie avec animations */}
                <div className="premium-blog-filters">
                  <div className="blog-filters-header">
                    <Zap className="filter-sparkle-blog" />
                    <span>Explorer par thème</span>
                  </div>
                  <div className="blog-filters-grid">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        className={`blog-filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        <span className="filter-text">{category}</span>
                        <div className="filter-glow" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article featured avec design premium */}
          {filteredArticles.length > 0 && filteredArticles[0].featured && (
            <div className="premium-featured-article">
              <div className="featured-article-card">
                <div className="featured-grid">
                  {/* Image featured */}
                  <div className="featured-image-section">
                    <div className="featured-image-container">
                      <div className="featured-image-glow" />
                      <div className="featured-image-content">
                        <div className="featured-icon-orb">
                          <BookOpen className="featured-main-icon" />
                        </div>
                        <div className="featured-image-label">Article à la une</div>
                      </div>
                      
                      {/* Badge featured */}
                      <div className="featured-badge-premium">
                        <Crown className="featured-badge-icon" />
                        <span>ARTICLE EXCEPTIONNEL</span>
                      </div>

                      {/* Overlay interactif */}
                      <div className="featured-overlay">
                        <button className="featured-read-btn">
                          <span>Lire l'article</span>
                          <ArrowRight className="read-arrow-icon" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Contenu featured */}
                  <div className="featured-content-section">
                    <div className="featured-meta">
                      <div className="featured-category-tag">
                        {filteredArticles[0].category}
                      </div>
                      <div className="featured-date">
                        <Calendar className="meta-icon" />
                        {formatDate(filteredArticles[0].publishedDate)}
                      </div>
                    </div>

                    <h2 className="featured-title">
                      {filteredArticles[0].title}
                    </h2>

                    <p className="featured-excerpt">
                      {filteredArticles[0].excerpt}
                    </p>

                    <div className="featured-author-section">
                      <div className="author-avatar">
                        <User className="avatar-icon" />
                      </div>
                      <div className="author-info">
                        <div className="author-name">{filteredArticles[0].author}</div>
                        <div className="reading-time">
                          <Clock className="meta-icon" />
                          {filteredArticles[0].readTime} de lecture
                        </div>
                      </div>
                    </div>

                    {/* Tags featured */}
                    <div className="featured-tags">
                      {filteredArticles[0].tags.map((tag, index) => (
                        <span key={tag} className="featured-tag" style={{ animationDelay: `${index * 0.1}s` }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats et CTA */}
                    <div className="featured-actions">
                      <div className="article-stats">
                        <div className="stat-item">
                          <Heart className="stat-icon" />
                          <span>{filteredArticles[0].likes}</span>
                        </div>
                        <div className="stat-item">
                          <MessageCircle className="stat-icon" />
                          <span>{filteredArticles[0].comments}</span>
                        </div>
                        <div className="stat-item">
                          <Eye className="stat-icon" />
                          <span>{filteredArticles[0].views}</span>
                        </div>
                      </div>

                      <button className="premium-read-button">
                        <span>Lire l'article</span>
                        <div className="button-sparkle-group">
                          <Sparkles className="button-sparkle-icon" />
                        </div>
                        <div className="button-wave-effect" />
                      </button>
                    </div>
                  </div>

                  {/* Bordure animée */}
                  <div className="featured-card-border">
                    <div className="border-top-featured" />
                    <div className="border-right-featured" />
                    <div className="border-bottom-featured" />
                    <div className="border-left-featured" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grille des articles premium */}
          <div className="premium-articles-grid">
            {filteredArticles.slice(filteredArticles[0]?.featured ? 1 : 0).map((article, index) => (
              <article
                key={article.id}
                className="premium-article-card"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredArticle(article.id)}
                onMouseLeave={() => setHoveredArticle(null)}
              >
                <div className="article-card-inner">
                  {/* Image de l'article */}
                  <div className="article-image-section">
                    <div className="article-image-container">
                      <div className="article-image-glow" />
                      <div className="article-image-content">
                        <div className="article-icon-wrapper">
                          <Tag className="article-tag-icon" />
                        </div>
                        <div className="article-image-label">Illustration</div>
                      </div>

                      {/* Badges */}
                      <div className="article-badges">
                        {article.featured && (
                          <div className="article-badge-premium featured-badge">
                            <Sparkles className="badge-sparkle" />
                            <span>FEATURED</span>
                          </div>
                        )}
                        <div className="article-badge-premium category-badge">
                          {article.category}
                        </div>
                      </div>

                      {/* Overlay au hover */}
                      <div className={`article-image-overlay ${hoveredArticle === article.id ? 'active' : ''}`}>
                        <div className="overlay-actions">
                          <button className="article-like-btn">
                            <Heart className="action-icon" />
                          </button>
                          <button className="article-quick-view">
                            <span>Lire rapidement</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenu de l'article */}
                  <div className="premium-article-content">
                    {/* Métadonnées */}
                    <div className="article-meta-premium">
                      <div className="meta-date">
                        <Calendar className="meta-icon-small" />
                        {formatDate(article.publishedDate)}
                      </div>
                      <div className="meta-stats">
                        <div className="meta-stat">
                          <Heart className="meta-icon-small" />
                          {article.likes}
                        </div>
                        <div className="meta-stat">
                          <MessageCircle className="meta-icon-small" />
                          {article.comments}
                        </div>
                      </div>
                    </div>

                    {/* Titre */}
                    <h3 className="article-title-premium">
                      {article.title}
                    </h3>

                    {/* Extrait */}
                    <p className="article-excerpt-premium">
                      {article.excerpt}
                    </p>

                    {/* Auteur et temps de lecture */}
                    <div className="article-author-premium">
                      <div className="author-mini">
                        <User className="author-mini-icon" />
                        <span>{article.author}</span>
                      </div>
                      <div className="read-time-mini">
                        <Clock className="read-time-icon" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="article-tags-premium">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tag} className="article-tag" style={{ animationDelay: `${tagIndex * 0.05}s` }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="article-actions-premium">
                      <button className="premium-read-more">
                        <span>Lire l'article</span>
                        <ArrowRight className="read-more-arrow" />
                        <div className="read-more-glow" />
                      </button>
                    </div>
                  </div>

                  {/* Effet de bordure animée */}
                  <div className="article-card-border">
                    <div className="article-border-top" />
                    <div className="article-border-right" />
                    <div className="article-border-bottom" />
                    <div className="article-border-left" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter premium */}
          <div className="premium-newsletter-section">
            <div className="newsletter-glass">
              <div className="newsletter-content">
                <div className="newsletter-header">
                  <div className="newsletter-badge">
                    <Sparkles className="newsletter-sparkle" />
                    <span>Restez informé</span>
                  </div>
                  <h3 className="newsletter-title">
                    Ne ratez aucun article !
                  </h3>
                  <p className="newsletter-text">
                    Inscrivez-vous à notre newsletter pour recevoir nos derniers articles, 
                    analyses et réflexions directement dans votre boîte mail.
                  </p>
                </div>

                <div className="newsletter-form">
                  <div className="email-input-wrapper">
                    <input 
                      placeholder="Votre adresse email" 
                      className="premium-email-input"
                    />
                    <div className="input-underline" />
                  </div>
                  <button className="premium-subscribe-btn">
                    <span>S'abonner</span>
                    <div className="subscribe-sparkle">
                      <ArrowRight className="subscribe-arrow" />
                    </div>
                    <div className="subscribe-glow" />
                  </button>
                </div>
              </div>
              
              <div className="newsletter-decoration">
                <div className="newsletter-orb orb-1" />
                <div className="newsletter-orb orb-2" />
                <div className="newsletter-orb orb-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-blog-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #1e0f00 50%, #1a1a1a 75%, #0a0a0a 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          overflow-x: hidden;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Particules animées */
        .blog-particles-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .blog-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #FF6A00, #FF8C00);
          border-radius: 50%;
          animation: floatParticleBlog linear infinite;
          opacity: 0.4;
        }

        @keyframes floatParticleBlog {
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
        .blog-custom-cursor {
          position: fixed;
          width: 18px;
          height: 18px;
          background: radial-gradient(circle, #FF6A00, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .premium-blog-section {
          position: relative;
          z-index: 2;
        }

        .premium-blog-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .blog-hero-section {
          position: relative;
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-background-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse at center, rgba(255, 106, 0, 0.15) 0%, transparent 70%);
          opacity: 0.6;
        }

        .premium-blog-header {
          position: relative;
        }

        .blog-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.2), rgba(255, 140, 0, 0.1));
          border: 1px solid rgba(255, 106, 0, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: slideInDown 0.8s ease-out;
        }

        .badge-icon-blog {
          width: 1rem;
          height: 1rem;
          color: #FF6A00;
        }

        .blog-header-badge span {
          color: #FF8C00;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .blog-main-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .blog-title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .blog-title-accent {
          background: linear-gradient(135deg, #FF6A00 0%, #FF8C00 50%, #FFA500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 1rem;
        }

        .blog-title-underline {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .blog-underline-animation {
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #FF6A00, transparent);
          border-radius: 2px;
          animation: underlinePulse 2s ease-in-out infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.3); opacity: 0.8; }
        }

        .blog-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        /* Section recherche */
        .premium-blog-search-section {
          margin-bottom: 4rem;
          transition: all 0.3s ease;
        }

        .premium-blog-search-section.scrolled {
          transform: translateY(-10px);
        }

        .blog-search-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .blog-search-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .blog-search-wrapper {
          display: flex;
          justify-content: center;
        }

        .search-input-container {
          position: relative;
          max-width: 500px;
          width: 100%;
        }

        .blog-search-icon {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
          transition: color 0.3s ease;
        }

        .premium-blog-search-input {
          width: 100%;
          padding: 1.25rem 1.5rem 1.25rem 4rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: white;
          font-size: 1.125rem;
          transition: all 0.3s ease;
        }

        .premium-blog-search-input:focus {
          outline: none;
          border-color: #FF6A00;
          background: rgba(255, 106, 0, 0.05);
        }

        .premium-blog-search-input::placeholder {
          color: #64748b;
        }

        .search-underline-blog {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF6A00, #FF8C00);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .premium-blog-search-input:focus ~ .search-underline-blog {
          width: 100%;
        }

        /* Filtres */
        .premium-blog-filters {
          text-align: center;
        }

        .blog-filters-header {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: #94a3b8;
          font-weight: 600;
          font-size: 1.125rem;
        }

        .filter-sparkle-blog {
          width: 1.25rem;
          height: 1.25rem;
          color: #FF6A00;
        }

        .blog-filters-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }

        .blog-filter-btn {
          position: relative;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
          animation: slideInUp 0.6s ease-out both;
        }

        .blog-filter-btn:hover {
          background: rgba(255, 106, 0, 0.1);
          border-color: rgba(255, 106, 0, 0.3);
          color: #FF8C00;
          transform: translateY(-2px);
        }

        .blog-filter-btn.active {
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.2), rgba(255, 140, 0, 0.1));
          border-color: #FF6A00;
          color: #FF8C00;
          box-shadow: 0 8px 25px rgba(255, 106, 0, 0.3);
        }

        .filter-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 106, 0, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .blog-filter-btn.active .filter-glow {
          left: 100%;
        }

        /* Article featured */
        .premium-featured-article {
          margin-bottom: 4rem;
        }

        .featured-article-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .featured-article-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.3);
          box-shadow: 0 25px 50px -12px rgba(255, 106, 0, 0.25);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        .featured-image-section {
          position: relative;
          overflow: hidden;
        }

        .featured-image-container {
          position: relative;
          height: 100%;
          min-height: 400px;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.15), rgba(255, 140, 0, 0.1));
        }

        .featured-image-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 106, 0, 0.2), transparent 70%);
        }

        .featured-image-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 2;
        }

        .featured-icon-orb {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.3), transparent);
          border: 2px solid rgba(255, 106, 0, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          backdrop-filter: blur(10px);
          animation: orbPulse 3s ease-in-out infinite;
        }

        @keyframes orbPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(255, 106, 0, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(255, 106, 0, 0.6); }
        }

        .featured-main-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #FF6A00;
        }

        .featured-image-label {
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .featured-badge-premium {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          backdrop-filter: blur(10px);
          animation: badgeFloat 2s ease-in-out infinite;
        }

        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .featured-badge-icon {
          width: 0.875rem;
          height: 0.875rem;
        }

        .featured-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.9), rgba(255, 140, 0, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .featured-image-container:hover .featured-overlay {
          opacity: 1;
        }

        .featured-read-btn {
          background: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          color: #1a1a1a;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .featured-read-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .read-arrow-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .featured-content-section {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .featured-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .featured-category-tag {
          background: rgba(255, 106, 0, 0.1);
          color: #FF6A00;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .featured-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .meta-icon {
          width: 1rem;
          height: 1rem;
        }

        .featured-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          line-height: 1.2;
          color: white;
          margin-bottom: 1rem;
        }

        .featured-excerpt {
          color: #94a3b8;
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .featured-author-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .author-avatar {
          width: 3rem;
          height: 3rem;
          background: rgba(255, 106, 0, 0.1);
          border: 2px solid rgba(255, 106, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #FF6A00;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-weight: 600;
          color: white;
          margin-bottom: 0.25rem;
        }

        .reading-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .featured-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .featured-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #FF8C00;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          animation: fadeInUp 0.6s ease-out both;
        }

        .featured-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .article-stats {
          display: flex;
          gap: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .stat-icon {
          width: 1rem;
          height: 1rem;
        }

        .premium-read-button {
          position: relative;
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
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
        }

        .premium-read-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(255, 106, 0, 0.4);
        }

        .button-sparkle-group {
          display: flex;
          align-items: center;
        }

        .button-sparkle-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .button-wave-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .premium-read-button:hover .button-wave-effect {
          left: 100%;
        }

        .featured-card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .featured-card-border div {
          position: absolute;
          background: linear-gradient(90deg, #FF6A00, #FF8C00, #FF6A00);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .border-top-featured {
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
        }

        .border-right-featured {
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: top;
        }

        .border-bottom-featured {
          bottom: 0;
          right: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: right;
        }

        .border-left-featured {
          bottom: 0;
          left: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: bottom;
        }

        .featured-article-card:hover .border-top-featured {
          transform: scaleX(1);
          opacity: 1;
          transition-delay: 0s;
        }

        .featured-article-card:hover .border-right-featured {
          transform: scaleY(1);
          opacity: 1;
          transition-delay: 0.15s;
        }

        .featured-article-card:hover .border-bottom-featured {
          transform: scaleX(1);
          opacity: 1;
          transition-delay: 0.3s;
        }

        .featured-article-card:hover .border-left-featured {
          transform: scaleY(1);
          opacity: 1;
          transition-delay: 0.45s;
        }

        /* Grille des articles */
        .premium-articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .premium-article-card {
          animation: fadeInUp 0.6s ease-out both;
        }

        .article-card-inner {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
          height: 100%;
        }

        .premium-article-card:hover .article-card-inner {
          transform: translateY(-8px);
          border-color: rgba(255, 106, 0, 0.3);
          box-shadow: 0 20px 40px rgba(255, 106, 0, 0.2);
        }

        .article-image-section {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .article-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.1), rgba(255, 140, 0, 0.05));
        }

        .article-image-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(255, 106, 0, 0.15), transparent 70%);
        }

        .article-image-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 2;
        }

        .article-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(255, 106, 0, 0.2);
          border: 2px solid rgba(255, 106, 0, 0.3);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          backdrop-filter: blur(10px);
        }

        .article-tag-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #FF6A00;
        }

        .article-image-label {
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .article-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .article-badge-premium {
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

        .featured-badge {
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
          animation: badgePulse 2s ease-in-out infinite;
        }

        .category-badge {
          background: rgba(255, 106, 0, 0.3);
          border: 1px solid rgba(255, 106, 0, 0.5);
        }

        .badge-sparkle {
          width: 0.625rem;
          height: 0.625rem;
        }

        .article-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.9), rgba(255, 140, 0, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .article-image-overlay.active {
          opacity: 1;
        }

        .overlay-actions {
          display: flex;
          gap: 1rem;
        }

        .article-like-btn {
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

        .article-like-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .action-icon {
          width: 1.125rem;
          height: 1.125rem;
          color: #374151;
        }

        .article-quick-view {
          background: white;
          border: none;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          color: #1a1a1a;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .article-quick-view:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .premium-article-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          height: calc(100% - 200px);
        }

        .article-meta-premium {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .meta-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .meta-icon-small {
          width: 0.875rem;
          height: 0.875rem;
        }

        .meta-stats {
          display: flex;
          gap: 0.75rem;
        }

        .meta-stat {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #94a3b8;
          font-size: 0.75rem;
        }

        .article-title-premium {
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

        .article-excerpt-premium {
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

        .article-author-premium {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .author-mini, .read-time-mini {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.75rem;
        }

        .author-mini-icon, .read-time-icon {
          width: 0.75rem;
          height: 0.75rem;
        }

        .article-tags-premium {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
          margin-bottom: 1.5rem;
        }

        .article-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #FF8C00;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 500;
          animation: fadeInUp 0.4s ease-out both;
        }

        .article-actions-premium {
          margin-top: auto;
        }

        .premium-read-more {
          position: relative;
          background: transparent;
          border: 1px solid rgba(255, 106, 0, 0.3);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          color: #FF8C00;
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

        .premium-read-more:hover {
          background: rgba(255, 106, 0, 0.1);
          border-color: #FF6A00;
          transform: translateY(-2px);
        }

        .read-more-arrow {
          width: 1rem;
          height: 1rem;
          transition: transform 0.3s ease;
        }

        .premium-read-more:hover .read-more-arrow {
          transform: translateX(3px);
        }

        .read-more-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 106, 0, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .premium-read-more:hover .read-more-glow {
          left: 100%;
        }

        .article-card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .article-card-border div {
          position: absolute;
          background: linear-gradient(90deg, #FF6A00, #FF8C00, #FF6A00);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .article-border-top {
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          transform: scaleX(0);
          transform-origin: left;
        }

        .article-border-right {
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: top;
        }

        .article-border-bottom {
          bottom: 0;
          right: 0;
          width: 100%;
          height: 1px;
          transform: scaleX(0);
          transform-origin: right;
        }

        .article-border-left {
          bottom: 0;
          left: 0;
          width: 1px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: bottom;
        }

        .premium-article-card:hover .article-border-top {
          transform: scaleX(1);
          opacity: 1;
          transition-delay: 0s;
        }

        .premium-article-card:hover .article-border-right {
          transform: scaleY(1);
          opacity: 1;
          transition-delay: 0.1s;
        }

        .premium-article-card:hover .article-border-bottom {
          transform: scaleX(1);
          opacity: 1;
          transition-delay: 0.2s;
        }

        .premium-article-card:hover .article-border-left {
          transform: scaleY(1);
          opacity: 1;
          transition-delay: 0.3s;
        }

        /* Newsletter */
        .premium-newsletter-section {
          margin-bottom: 4rem;
        }

        .newsletter-glass {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          overflow: hidden;
        }

        .newsletter-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .newsletter-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .newsletter-sparkle {
          width: 1rem;
          height: 1rem;
          color: #FFD700;
        }

        .newsletter-badge span {
          color: #FFD700;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .newsletter-title {
          font-size: 2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .newsletter-text {
          color: #94a3b8;
          font-size: 1.125rem;
          max-width: 500px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 400px;
          margin: 0 auto;
        }

        .email-input-wrapper {
          position: relative;
          flex: 1;
        }

        .premium-email-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .premium-email-input:focus {
          outline: none;
          border-color: #FF6A00;
          background: rgba(255, 106, 0, 0.05);
        }

        .premium-email-input::placeholder {
          color: #64748b;
        }

        .input-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF6A00, #FF8C00);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .premium-email-input:focus ~ .input-underline {
          width: 100%;
        }

        .premium-subscribe-btn {
          position: relative;
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
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
        }

        .premium-subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 106, 0, 0.4);
        }

        .subscribe-sparkle {
          display: flex;
          align-items: center;
        }

        .subscribe-arrow {
          width: 1.25rem;
          height: 1.25rem;
        }

        .subscribe-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .premium-subscribe-btn:hover .subscribe-glow {
          left: 100%;
        }

        .newsletter-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .newsletter-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 80px;
          height: 80px;
          background: #FF6A00;
          top: 20%;
          left: 10%;
          animation: floatOrbNews 5s ease-in-out infinite;
        }

        .orb-2 {
          width: 120px;
          height: 120px;
          background: #FF8C00;
          top: 60%;
          right: 15%;
          animation: floatOrbNews 7s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 60px;
          height: 60px;
          background: #FFA500;
          bottom: 30%;
          left: 20%;
          animation: floatOrbNews 9s ease-in-out infinite;
        }

        @keyframes floatOrbNews {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(8px) rotate(240deg); }
        }

        /* Animations globales */
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .blog-main-title {
            font-size: 2.5rem;
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .premium-articles-grid {
            grid-template-columns: 1fr;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .blog-search-glass {
            padding: 1.5rem;
          }

          .featured-content-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumBlogList;