import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart, Heart, Star, ArrowRight, Shirt, Book, Coffee, Gem, Sparkles, Zap, Crown } from 'lucide-react';

const PremiumShopCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    'Tous', 'Vêtements', 'Livres', 'Décoration', 'Bijoux', 'Accessoires', 'Art'
  ];

  const products = [
    {
      id: 1,
      name: "T-shirt \"Ubuntu\" Collection Heritage",
      description: "T-shirt en coton bio avec design inspiré de la philosophie Ubuntu et motifs traditionnels.",
      price: 35,
      originalPrice: 45,
      category: "Vêtements",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      featured: true,
      sale: true,
      colors: ["Noir", "Orange", "Blanc"],
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Livre \"Sagesse Ancestrale Africaine\"",
      description: "Recueil de proverbes et sagesses traditionnelles du continent africain, illustré.",
      price: 28,
      originalPrice: null,
      category: "Livres",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      featured: false,
      sale: false,
      colors: [],
      sizes: []
    },
    {
      id: 3,
      name: "Masque Décoratif Akan",
      description: "Reproduction artisanale d'un masque traditionnel Akan, parfait pour la décoration murale.",
      price: 85,
      originalPrice: null,
      category: "Décoration",
      rating: 4.7,
      reviews: 43,
      inStock: true,
      featured: true,
      sale: false,
      colors: [],
      sizes: []
    },
    {
      id: 4,
      name: "Collier Wax \"Ankara Pride\"",
      description: "Bijou élégant confectionné avec des perles et tissu wax authentique, fait main.",
      price: 42,
      originalPrice: 55,
      category: "Bijoux",
      rating: 4.6,
      reviews: 67,
      inStock: false,
      featured: false,
      sale: true,
      colors: ["Multicolore", "Bleu", "Rouge"],
      sizes: []
    },
    {
      id: 5,
      name: "Sac Cabas \"Continent\"",
      description: "Sac en toile résistante avec carte de l'Afrique brodée et poches intérieures pratiques.",
      price: 38,
      originalPrice: null,
      category: "Accessoires",
      rating: 4.5,
      reviews: 156,
      inStock: true,
      featured: false,
      sale: false,
      colors: ["Beige", "Noir"],
      sizes: []
    },
    {
      id: 6,
      name: "Tableau \"Baobab Moderne\"",
      description: "Œuvre d'art contemporaine représentant un baobab stylisé, impression haute qualité sur toile.",
      price: 120,
      originalPrice: null,
      category: "Art",
      rating: 4.9,
      reviews: 21,
      inStock: true,
      featured: true,
      sale: false,
      colors: [],
      sizes: ["40x60cm", "60x80cm", "80x120cm"]
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'Tous' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Vêtements': return Shirt;
      case 'Livres': return Book;
      case 'Accessoires': return Coffee;
      case 'Bijoux': return Gem;
      default: return Sparkles;
    }
  };

  return (
    <div className="premium-shop-container">
      {/* Effet de particules animées */}
      <div className="particles-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      {/* Curseur personnalisé */}
      <div 
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <section className="premium-shop-section">
        <div className="premium-shop-content">
          {/* En-tête avec effet parallax */}
          <div className="premium-hero-section">
            <div className="hero-background" />
            <div className="premium-header">
              <div className="header-badge">
                <Crown className="badge-icon" />
                <span>Collection Premium</span>
              </div>
              <h1 className="premium-main-title">
                <span className="title-gradient">Boutique</span>
                <span className="title-accent">Culturelle</span>
              </h1>
              <div className="title-underline">
                <div className="underline-animation" />
              </div>
              <p className="premium-subtitle">
                Découvrez notre collection exclusive d'objets d'art et d'artisanat 
                qui célèbrent la richesse culturelle africaine
              </p>
            </div>
          </div>

          {/* Barre de recherche avec effet glassmorphism */}
          <div className={`premium-search-section ${isScrolled ? 'scrolled' : ''}`}>
            <div className="search-glass-container">
              <div className="search-content">
                <div className="search-input-wrapper">
                  <Search className="search-icon-premium" />
                  <input
                    placeholder="Rechercher un produit, une catégorie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="premium-search-input"
                  />
                  <div className="search-underline" />
                </div>

                {/* Filtres avec animations */}
                <div className="premium-filters">
                  <div className="filters-header">
                    <Zap className="filter-sparkle" />
                    <span>Catégories</span>
                  </div>
                  <div className="filters-grid">
                    {categories.map((category, index) => {
                      const IconComponent = getCategoryIcon(category);
                      return (
                        <button
                          key={category}
                          className={`premium-filter-btn ${activeCategory === category ? 'active' : ''}`}
                          onClick={() => setActiveCategory(category)}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="filter-icon-wrapper">
                            <IconComponent className="filter-category-icon" />
                          </div>
                          <span>{category}</span>
                          <div className="filter-underline" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner promotionnel animé */}
          <div className="premium-promo-banner">
            <div className="promo-content">
              <div className="promo-badge">
                <Sparkles className="promo-sparkle" />
                <span>Promotion Exclusive</span>
              </div>
              <h3 className="promo-title">
                Collection Heritage 
                <span className="promo-highlight"> -30%</span>
              </h3>
              <p className="promo-text">
                Profitez de nos meilleures offres sur une sélection de produits authentiques
              </p>
              <button className="premium-cta-button">
                <span>Découvrir les offres</span>
                <div className="button-sparkle">
                  <Sparkles className="sparkle-icon" />
                </div>
                <div className="button-glow" />
              </button>
            </div>
            <div className="promo-decoration">
              <div className="floating-orb orb-1" />
              <div className="floating-orb orb-2" />
              <div className="floating-orb orb-3" />
            </div>
          </div>

          {/* Grille de produits avec animations avancées */}
          <div className="premium-products-grid">
            {filteredProducts.map((product, index) => {
              const IconComponent = getCategoryIcon(product.category);
              return (
                <div
                  key={product.id}
                  className="premium-product-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Carte produit avec effets 3D */}
                  <div className="product-card-inner">
                    {/* Image avec overlay animé */}
                    <div className="product-image-section">
                      <div className="image-container">
                        <div className="product-image-gradient" />
                        <div className="product-icon-center">
                          <div className="icon-orb">
                            <IconComponent className="product-main-icon" />
                          </div>
                        </div>
                        
                        {/* Badges animés */}
                        <div className="premium-badges">
                          {product.sale && (
                            <div className="badge-premium badge-sale-premium">
                              <Zap className="badge-inner-icon" />
                              <span>PROMO</span>
                            </div>
                          )}
                          {product.featured && (
                            <div className="badge-premium badge-featured-premium">
                              <Crown className="badge-inner-icon" />
                              <span>EXCLUSIF</span>
                            </div>
                          )}
                          {!product.inStock && (
                            <div className="badge-premium badge-soldout-premium">
                              <span>ÉPUISÉ</span>
                            </div>
                          )}
                        </div>

                        {/* Overlay au hover */}
                        <div className={`product-overlay ${hoveredProduct === product.id ? 'active' : ''}`}>
                          <div className="overlay-content">
                            <button className="premium-wishlist-btn">
                              <Heart className="wishlist-icon" />
                            </button>
                            <button className="premium-quickview-btn">
                              <span>Vue rapide</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="premium-product-content">
                      <div className="product-header">
                        <div className="category-tag">
                          {product.category}
                        </div>
                        <div className="rating-premium">
                          <Star className="star-premium" />
                          <span>{product.rating}</span>
                          <span className="reviews-count">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="product-name-premium">
                        {product.name}
                      </h3>

                      <p className="product-description-premium">
                        {product.description}
                      </p>

                      {/* Options produit */}
                      {(product.colors.length > 0 || product.sizes.length > 0) && (
                        <div className="premium-options">
                          {product.colors.length > 0 && (
                            <div className="color-options-premium">
                              <span className="options-label">Couleurs disponibles</span>
                              <div className="color-dots-premium">
                                {product.colors.map((color, i) => (
                                  <div
                                    key={i}
                                    className="color-dot-premium"
                                    style={{ 
                                      backgroundColor: color === 'Noir' ? '#1a1a1a' : 
                                                     color === 'Blanc' ? '#ffffff' : 
                                                     color === 'Orange' ? '#FF6A00' : 
                                                     color === 'Multicolore' ? 'linear-gradient(45deg, #FF6A00, #FF0000, #0000FF)' :
                                                     color === 'Bleu' ? '#0066CC' :
                                                     color === 'Rouge' ? '#CC0000' :
                                                     color === 'Beige' ? '#F5F5DC' : '#6B7280'
                                    }}
                                    title={color}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Pied de carte avec prix et CTA */}
                      <div className="premium-product-footer">
                        <div className="price-section-premium">
                          <span className="current-price-premium">
                            {product.price}€
                          </span>
                          {product.originalPrice && (
                            <span className="original-price-premium">
                              {product.originalPrice}€
                            </span>
                          )}
                        </div>
                        
                        <button 
                          className={`premium-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="cart-icon-premium" />
                          <span>{product.inStock ? 'Ajouter au panier' : 'Épuisé'}</span>
                          <div className="button-wave" />
                        </button>
                      </div>
                    </div>

                    {/* Effet de bordure animée */}
                    <div className="card-border">
                      <div className="border-top" />
                      <div className="border-right" />
                      <div className="border-bottom" />
                      <div className="border-left" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section features premium */}
          <div className="premium-features-section">
            <div className="features-header">
              <h2 className="features-title">Pourquoi nous choisir</h2>
              <p className="features-subtitle">Excellence et authenticité</p>
            </div>
            <div className="features-grid-premium">
              <div className="feature-item-premium">
                <div className="feature-icon-premium">
                  <div className="icon-orb-feature">
                    <Zap className="feature-svg" />
                  </div>
                </div>
                <h4>Livraison Express</h4>
                <p>Expédition sous 24h offerte dès 50€ d'achat</p>
              </div>
              
              <div className="feature-item-premium">
                <div className="feature-icon-premium">
                  <div className="icon-orb-feature">
                    <Crown className="feature-svg" />
                  </div>
                </div>
                <h4>Authenticité Garantie</h4>
                <p>Produits certifiés et sélectionnés avec soin</p>
              </div>
              
              <div className="feature-item-premium">
                <div className="feature-icon-premium">
                  <div className="icon-orb-feature">
                    <Sparkles className="feature-svg" />
                  </div>
                </div>
                <h4>Support Premium</h4>
                <p>Conseillers dédiés 7j/7 pour vous accompagner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-shop-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d1b00 50%, #1a1a1a 75%, #0a0a0a 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          overflow-x: hidden;
        }

        /* Animation de fond dynamique */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Particules animées */
        .particles-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #FF6A00, #FF8C00);
          border-radius: 50%;
          animation: floatParticle linear infinite;
          opacity: 0.6;
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Curseur personnalisé */
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, #FF6A00, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .premium-shop-section {
          position: relative;
          z-index: 2;
        }

        .premium-shop-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .premium-hero-section {
          position: relative;
          padding: 8rem 0 4rem;
          text-align: center;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(255, 106, 0, 0.1) 0%, transparent 70%);
          opacity: 0.6;
        }

        .premium-header {
          position: relative;
        }

        .header-badge {
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

        .badge-icon {
          width: 1rem;
          height: 1rem;
          color: #FF6A00;
        }

        .header-badge span {
          color: #FF8C00;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .premium-main-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 4.5rem;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-accent {
          background: linear-gradient(135deg, #FF6A00 0%, #FF8C00 50%, #FFA500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 1rem;
        }

        .title-underline {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .underline-animation {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #FF6A00, transparent);
          border-radius: 2px;
          animation: underlinePulse 2s ease-in-out infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.2); opacity: 0.8; }
        }

        .premium-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        /* Section recherche */
        .premium-search-section {
          margin-bottom: 4rem;
          transition: all 0.3s ease;
        }

        .premium-search-section.scrolled {
          transform: translateY(-20px);
        }

        .search-glass-container {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .search-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .search-input-wrapper {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-icon-premium {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
          transition: color 0.3s ease;
        }

        .premium-search-input {
          width: 100%;
          padding: 1.25rem 1rem 1.25rem 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: white;
          font-size: 1.125rem;
          transition: all 0.3s ease;
        }

        .premium-search-input:focus {
          outline: none;
          border-color: #FF6A00;
          background: rgba(255, 106, 0, 0.05);
        }

        .premium-search-input::placeholder {
          color: #64748b;
        }

        .search-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF6A00, #FF8C00);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .premium-search-input:focus ~ .search-underline {
          width: 100%;
        }

        /* Filtres premium */
        .premium-filters {
          text-align: center;
        }

        .filters-header {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: #94a3b8;
          font-weight: 600;
        }

        .filter-sparkle {
          width: 1rem;
          height: 1rem;
          color: #FF6A00;
        }

        .filters-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }

        .premium-filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #94a3b8;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.6s ease-out both;
        }

        .premium-filter-btn:hover {
          background: rgba(255, 106, 0, 0.1);
          border-color: rgba(255, 106, 0, 0.3);
          color: #FF8C00;
          transform: translateY(-2px);
        }

        .premium-filter-btn.active {
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.2), rgba(255, 140, 0, 0.1));
          border-color: #FF6A00;
          color: #FF8C00;
          box-shadow: 0 8px 25px rgba(255, 106, 0, 0.3);
        }

        .filter-icon-wrapper {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .filter-category-icon {
          width: 1rem;
          height: 1rem;
          transition: all 0.3s ease;
        }

        .premium-filter-btn.active .filter-category-icon {
          color: #FF6A00;
          transform: scale(1.1);
        }

        .filter-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FF6A00, #FF8C00);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .premium-filter-btn.active .filter-underline {
          width: 80%;
        }

        /* Banner promotionnel */
        .premium-promo-banner {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.15), rgba(255, 140, 0, 0.1));
          border: 1px solid rgba(255, 106, 0, 0.2);
          border-radius: 24px;
          padding: 3rem;
          margin-bottom: 4rem;
          overflow: hidden;
        }

        .promo-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .promo-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .promo-sparkle {
          width: 1rem;
          height: 1rem;
          color: #FFD700;
        }

        .promo-badge span {
          color: #FFD700;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .promo-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }

        .promo-highlight {
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .promo-text {
          color: #94a3b8;
          font-size: 1.125rem;
          margin-bottom: 2rem;
        }

        .premium-cta-button {
          position: relative;
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .premium-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(255, 106, 0, 0.4);
        }

        .button-sparkle {
          position: absolute;
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
        }

        .sparkle-icon {
          width: 1rem;
          height: 1rem;
        }

        .button-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .premium-cta-button:hover .button-glow {
          left: 100%;
        }

        .promo-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
        }

        .orb-1 {
          width: 100px;
          height: 100px;
          background: #FF6A00;
          top: 10%;
          left: 10%;
          animation: floatOrb 6s ease-in-out infinite;
        }

        .orb-2 {
          width: 150px;
          height: 150px;
          background: #FF8C00;
          top: 60%;
          right: 10%;
          animation: floatOrb 8s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 80px;
          height: 80px;
          background: #FFA500;
          bottom: 20%;
          left: 20%;
          animation: floatOrb 10s ease-in-out infinite;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        /* Grille de produits */
        .premium-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .premium-product-card {
          animation: fadeInUp 0.6s ease-out both;
        }

        .product-card-inner {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .premium-product-card:hover .product-card-inner {
          transform: translateY(-10px);
          border-color: rgba(255, 106, 0, 0.3);
          box-shadow: 0 25px 50px -12px rgba(255, 106, 0, 0.25);
        }

        .product-image-section {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .product-image-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 106, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 100%);
        }

        .product-icon-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .icon-orb {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.2), transparent);
          border: 2px solid rgba(255, 106, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          animation: orbGlow 3s ease-in-out infinite;
        }

        @keyframes orbGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 106, 0, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 106, 0, 0.6); }
        }

        .product-main-icon {
          width: 2rem;
          height: 2rem;
          color: #FF6A00;
        }

        .premium-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .badge-premium {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          backdrop-filter: blur(10px);
          animation: badgePulse 2s ease-in-out infinite;
        }

        .badge-sale-premium {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .badge-featured-premium {
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
        }

        .badge-soldout-premium {
          background: linear-gradient(135deg, #6b7280, #4b5563);
        }

        .badge-inner-icon {
          width: 0.75rem;
          height: 0.75rem;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .product-overlay {
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

        .product-overlay.active {
          opacity: 1;
        }

        .overlay-content {
          display: flex;
          gap: 1rem;
        }

        .premium-wishlist-btn {
          width: 3rem;
          height: 3rem;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .premium-wishlist-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .wishlist-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #374151;
        }

        .premium-quickview-btn {
          background: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          color: #1a1a1a;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .premium-quickview-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .premium-product-content {
          padding: 1.5rem;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .category-tag {
          background: rgba(255, 106, 0, 0.1);
          color: #FF6A00;
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .rating-premium {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .star-premium {
          width: 1rem;
          height: 1rem;
          fill: #FF6A00;
          color: #FF6A00;
        }

        .reviews-count {
          color: #64748b;
        }

        .product-name-premium {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .product-description-premium {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .premium-options {
          margin-bottom: 1.5rem;
        }

        .color-options-premium {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .options-label {
          font-size: 0.75rem;
          color: #64748b;
          font-weight: 600;
        }

        .color-dots-premium {
          display: flex;
          gap: 0.5rem;
        }

        .color-dot-premium {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .color-dot-premium:hover {
          transform: scale(1.2);
          border-color: #FF6A00;
        }

        .premium-product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price-section-premium {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .current-price-premium {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: white;
        }

        .original-price-premium {
          font-size: 1rem;
          color: #94a3b8;
          text-decoration: line-through;
        }

        .premium-cart-btn {
          position: relative;
          background: linear-gradient(135deg, #FF6A00, #FF8C00);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .premium-cart-btn:hover:not(.disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 106, 0, 0.4);
        }

        .premium-cart-btn.disabled {
          background: #6b7280;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .cart-icon-premium {
          width: 1.25rem;
          height: 1.25rem;
        }

        .button-wave {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .premium-cart-btn:hover .button-wave {
          left: 100%;
        }

        .card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .card-border div {
          position: absolute;
          background: linear-gradient(90deg, #FF6A00, #FF8C00, #FF6A00);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .border-top {
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
        }

        .border-right {
          top: 0;
          right: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: top;
        }

        .border-bottom {
          bottom: 0;
          right: 0;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: right;
        }

        .border-left {
          bottom: 0;
          left: 0;
          width: 2px;
          height: 100%;
          transform: scaleY(0);
          transform-origin: bottom;
        }

        .premium-product-card:hover .border-top {
          transform: scaleX(1);
          opacity: 1;
          transition-delay: 0s;
        }

        .premium-product-card:hover .border-right {
          transform: scaleY(1);
          opacity: 1;
          transition-delay: 0.15s;
        }

        .premium-product-card:hover .border-bottom {
          transform: scaleX(1);
          opacity: 1;
          transition-delay: 0.3s;
        }

        .premium-product-card:hover .border-left {
          transform: scaleY(1);
          opacity: 1;
          transition-delay: 0.45s;
        }

        /* Section features */
        .premium-features-section {
          margin-bottom: 4rem;
        }

        .features-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .features-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 3rem;
          background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .features-subtitle {
          color: #64748b;
          font-size: 1.125rem;
        }

        .features-grid-premium {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-item-premium {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-item-premium:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 106, 0, 0.3);
          box-shadow: 0 15px 30px rgba(255, 106, 0, 0.2);
        }

        .feature-icon-premium {
          margin-bottom: 1.5rem;
        }

        .icon-orb-feature {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(255, 106, 0, 0.2), transparent);
          border: 2px solid rgba(255, 106, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          animation: orbGlow 3s ease-in-out infinite;
        }

        .feature-svg {
          width: 2rem;
          height: 2rem;
          color: #FF6A00;
        }

        .feature-item-premium h4 {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
          margin-bottom: 0.75rem;
        }

        .feature-item-premium p {
          color: #94a3b8;
          line-height: 1.5;
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
          .premium-main-title {
            font-size: 3rem;
          }

          .premium-products-grid {
            grid-template-columns: 1fr;
          }

          .search-content {
            gap: 1.5rem;
          }

          .filters-grid {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumShopCatalog;