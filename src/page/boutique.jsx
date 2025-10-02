import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart, Heart, Star, ArrowRight, Shirt, Book, Coffee, Gem, Sparkles, Zap, Crown } from 'lucide-react';

const AfroShopCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
      colors: ["Noir", "Marron", "Beige"],
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
      colors: ["Terre cuite", "Brun", "Ocre"],
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
    <div className="afro-shop-container">
      {/* Effet de particules animées */}
      <div className="afro-particles-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="afro-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }} />
        ))}
      </div>

      {/* Curseur personnalisé - seulement sur desktop */}
      {!isMobile && (
        <div 
          className="afro-custom-cursor"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      <section className="afro-shop-section">
        <div className="afro-shop-content">
          {/* En-tête avec effet parallax */}
          <div className="afro-hero-section">
            <div className="afro-hero-background" />
            <div className="afro-header">
              <div className="afro-header-badge">
                <Crown className="afro-badge-icon" />
                <span>Collection Premium</span>
              </div>
              <h1 className="afro-main-title">
                <span className="afro-title-gradient">Boutique</span>
                <span className="afro-title-accent">Culturelle</span>
              </h1>
              <div className="afro-title-underline">
                <div className="afro-underline-animation" />
              </div>
              <p className="afro-subtitle">
                Découvrez notre collection exclusive d'objets d'art et d'artisanat 
                qui célèbrent la richesse culturelle africaine
              </p>
            </div>
          </div>

          {/* Barre de recherche avec effet glassmorphism */}
          <div className={`afro-search-section ${isScrolled ? 'afro-scrolled' : ''}`}>
            <div className="afro-search-glass-container">
              <div className="afro-search-content">
                <div className="afro-search-input-wrapper">
                  <Search className="afro-search-icon" />
                  <input
                    placeholder="Rechercher un produit, une catégorie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="afro-search-input"
                  />
                  <div className="afro-search-underline" />
                </div>

                {/* Filtres avec animations */}
                <div className="afro-filters">
                  <div className="afro-filters-header">
                    <Zap className="afro-filter-sparkle" />
                    <span>Catégories</span>
                  </div>
                  <div className="afro-filters-scroll-container">
                    <div className="afro-filters-grid">
                      {categories.map((category, index) => {
                        const IconComponent = getCategoryIcon(category);
                        return (
                          <button
                            key={category}
                            className={`afro-filter-btn ${activeCategory === category ? 'afro-active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="afro-filter-icon-wrapper">
                              <IconComponent className="afro-filter-category-icon" />
                            </div>
                            <span className="afro-filter-text">{category}</span>
                            <div className="afro-filter-underline" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner promotionnel animé */}
          <div className="afro-promo-banner">
            <div className="afro-promo-content">
              <div className="afro-promo-badge">
                <Sparkles className="afro-promo-sparkle" />
                <span>Promotion Exclusive</span>
              </div>
              <h3 className="afro-promo-title">
                Collection Heritage 
                <span className="afro-promo-highlight"> -30%</span>
              </h3>
              <p className="afro-promo-text">
                Profitez de nos meilleures offres sur une sélection de produits authentiques
              </p>
              <button className="afro-cta-button">
                <span>Découvrir les offres</span>
                <div className="afro-button-sparkle">
                  <Sparkles className="afro-sparkle-icon" />
                </div>
                <div className="afro-button-glow" />
              </button>
            </div>
            <div className="afro-promo-decoration">
              <div className="afro-floating-orb afro-orb-1" />
              <div className="afro-floating-orb afro-orb-2" />
              <div className="afro-floating-orb afro-orb-3" />
            </div>
          </div>

          {/* Grille de produits avec animations avancées */}
          <div className="afro-products-grid">
            {filteredProducts.map((product, index) => {
              const IconComponent = getCategoryIcon(product.category);
              return (
                <div
                  key={product.id}
                  className="afro-product-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Carte produit avec effets 3D */}
                  <div className="afro-product-card-inner">
                    {/* Image avec overlay animé */}
                    <div className="afro-product-image-section">
                      <div className="afro-image-container">
                        <div className="afro-product-image-gradient" />
                        <div className="afro-product-icon-center">
                          <div className="afro-icon-orb">
                            <IconComponent className="afro-product-main-icon" />
                          </div>
                        </div>
                        
                        {/* Badges animés */}
                        <div className="afro-badges">
                          {product.sale && (
                            <div className="afro-badge afro-badge-sale">
                              <Zap className="afro-badge-inner-icon" />
                              <span>PROMO</span>
                            </div>
                          )}
                          {product.featured && (
                            <div className="afro-badge afro-badge-featured">
                              <Crown className="afro-badge-inner-icon" />
                              <span>EXCLUSIF</span>
                            </div>
                          )}
                          {!product.inStock && (
                            <div className="afro-badge afro-badge-soldout">
                              <span>ÉPUISÉ</span>
                            </div>
                          )}
                        </div>

                        {/* Overlay au hover */}
                        <div className={`afro-product-overlay ${hoveredProduct === product.id ? 'afro-active' : ''}`}>
                          <div className="afro-overlay-content">
                            <button className="afro-wishlist-btn">
                              <Heart className="afro-wishlist-icon" />
                            </button>
                            <button className="afro-quickview-btn">
                              <span>Vue rapide</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="afro-product-content">
                      <div className="afro-product-header">
                        <div className="afro-category-tag">
                          {product.category}
                        </div>
                        <div className="afro-rating">
                          <Star className="afro-star" />
                          <span>{product.rating}</span>
                          <span className="afro-reviews-count">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="afro-product-name">
                        {product.name}
                      </h3>

                      <p className="afro-product-description">
                        {product.description}
                      </p>

                      {/* Options produit */}
                      {(product.colors.length > 0 || product.sizes.length > 0) && (
                        <div className="afro-options">
                          {product.colors.length > 0 && (
                            <div className="afro-color-options">
                              <span className="afro-options-label">Couleurs disponibles</span>
                              <div className="afro-color-dots">
                                {product.colors.map((color, i) => (
                                  <div
                                    key={i}
                                    className="afro-color-dot"
                                    style={{ 
                                      backgroundColor: color === 'Noir' ? '#1a1a1a' : 
                                                     color === 'Marron' ? '#8B4513' : 
                                                     color === 'Beige' ? '#F5F5DC' : 
                                                     color === 'Terre cuite' ? '#B7410E' :
                                                     color === 'Brun' ? '#5D4037' :
                                                     color === 'Ocre' ? '#CC7722' : '#6B7280'
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
                      <div className="afro-product-footer">
                        <div className="afro-price-section">
                          <span className="afro-current-price">
                            {product.price}€
                          </span>
                          {product.originalPrice && (
                            <span className="afro-original-price">
                              {product.originalPrice}€
                            </span>
                          )}
                        </div>
                        
                        <button 
                          className={`afro-cart-btn ${!product.inStock ? 'afro-disabled' : ''}`}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="afro-cart-icon" />
                          <span className="afro-cart-text">{product.inStock ? 'Ajouter' : 'Épuisé'}</span>
                          <div className="afro-button-wave" />
                        </button>
                      </div>
                    </div>

                    {/* Effet de bordure animée */}
                    <div className="afro-card-border">
                      <div className="afro-border-top" />
                      <div className="afro-border-right" />
                      <div className="afro-border-bottom" />
                      <div className="afro-border-left" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section features premium */}
          <div className="afro-features-section">
            <div className="afro-features-header">
              <h2 className="afro-features-title">Pourquoi nous choisir</h2>
              <p className="afro-features-subtitle">Excellence et authenticité</p>
            </div>
            <div className="afro-features-grid">
              <div className="afro-feature-item">
                <div className="afro-feature-icon">
                  <div className="afro-icon-orb-feature">
                    <Zap className="afro-feature-svg" />
                  </div>
                </div>
                <h4>Livraison Express</h4>
                <p>Expédition sous 24h offerte dès 50€ d'achat</p>
              </div>
              
              <div className="afro-feature-item">
                <div className="afro-feature-icon">
                  <div className="afro-icon-orb-feature">
                    <Crown className="afro-feature-svg" />
                  </div>
                </div>
                <h4>Authenticité Garantie</h4>
                <p>Produits certifiés et sélectionnés avec soin</p>
              </div>
              
              <div className="afro-feature-item">
                <div className="afro-feature-icon">
                  <div className="afro-icon-orb-feature">
                    <Sparkles className="afro-feature-svg" />
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
        .afro-shop-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%,rgb(74, 60, 42) 50%, #1a1a1a 75%, #0a0a0a 100%);
          background-size: 400% 400%;
          animation: afroGradientShift 15s ease infinite;
          overflow-x: hidden;
          width: 100%;
        }

        /* Animation de fond dynamique */
        @keyframes afroGradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Particules animées */
        .afro-particles-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .afro-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #8B7355 0%, #A9927D 100%);
          border-radius: 50%;
          animation: afroFloatParticle linear infinite;
          opacity: 0.6;
        }

        @keyframes afroFloatParticle {
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
        .afro-custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, #8B7355 0% transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .afro-shop-section {
          position: relative;
          z-index: 2;
          width: 100%;
          overflow: hidden;
        }

        .afro-shop-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        /* Hero Section */
        .afro-hero-section {
          position: relative;
          padding: 4rem 0 3rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          width: 100%;
          overflow: hidden;
        }

        .afro-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(139, 69, 19, 0.1) 0%, transparent 70%);
          opacity: 0.6;
        }

        .afro-header {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.2), rgba(160, 82, 45, 0.1));
          border: 1px solid rgba(139, 69, 19, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: afroSlideInDown 0.8s ease-out;
          max-width: 100%;
        }

        .afro-badge-icon {
          width: 1rem;
          height: 1rem;
          color: #8B7355 ;
          flex-shrink: 0;
        }

        .afro-header-badge span {
          color:  #8B7355 ;
          font-weight: 600;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .afro-main-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          margin-bottom: 1rem;
          animation: afroFadeInUp 0.8s ease-out 0.2s both;
          line-height: 1.1;
          text-align: center;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .afro-title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .afro-title-accent {
          background: linear-gradient(135deg, #8B7355 50%, #A9927D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 0.5rem;
          display: inline-block;
        }

        .afro-title-underline {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          animation: afroFadeInUp 0.8s ease-out 0.4s both;
          width: 100%;
        }

        .afro-underline-animation {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #8B7355, transparent);
          border-radius: 2px;
          animation: afroUnderlinePulse 2s ease-in-out infinite;
        }

        @keyframes afroUnderlinePulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.2); opacity: 0.8; }
        }

        .afro-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          animation: afroFadeInUp 0.8s ease-out 0.6s both;
          text-align: center;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        /* Section recherche */
        .afro-search-section {
          margin-bottom: 3rem;
          transition: all 0.3s ease;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-search-section.afro-scrolled {
          transform: translateY(-20px);
        }

        .afro-search-glass-container {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: clamp(1.5rem, 4vw, 2rem);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-search-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .afro-search-input-wrapper {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }

        .afro-search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
          transition: color 0.3s ease;
          flex-shrink: 0;
        }

        .afro-search-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-sizing: border-box;
          max-width: 100%;
        }

        .afro-search-input:focus {
          outline: none;
          border-color:, #A9927D ;
          background: rgba(139, 69, 19, 0.05);
        }

        .afro-search-input::placeholder {
          color: #64748b;
        }

        .afro-search-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg,, #8B7355 0%, #A9927D 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .afro-search-input:focus ~ .afro-search-underline {
          width: 100%;
        }

        /* Filtres premium */
        .afro-filters {
          text-align: center;
          width: 100%;
        }

        .afro-filters-header {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color:rgb(253, 253, 253);
          font-weight: 600;
          font-size: clamp(1rem, 2vw, 1.125rem);
          max-width: 100%;
        }

        .afro-filter-sparkle {
          width: 1rem;
          height: 1rem;
          color:, #8B7355 ;
          flex-shrink: 0;
        }

        .afro-filters-scroll-container {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .afro-filters-scroll-container::-webkit-scrollbar {
          height: 4px;
        }

        .afro-filters-scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .afro-filters-scroll-container::-webkit-scrollbar-thumb {
          background:, #8B7355 ;
          border-radius: 2px;
        }

        .afro-filters-grid {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          min-width: min-content;
          padding: 0 0.25rem;
        }

        .afro-filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color:rgb(255, 255, 255);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          animation: afroSlideInUp 0.6s ease-out both;
          font-size: 0.875rem;
          white-space: nowrap;
          flex-shrink: 0;
          max-width: 100%;
        }

        .afro-filter-btn:hover {
          background: rgba(139, 69, 19, 0.1);
          border-color: rgba(139, 69, 19, 0.3);
          color:, #8B7355 ;
          transform: translateY(-2px);
        }

        .afro-filter-btn.afro-active {
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.2), rgba(160, 82, 45, 0.1));
          border-color:, #8B7355;
          color:rgb(149, 87, 24);
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
        }

        .afro-filter-icon-wrapper {
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .afro-filter-category-icon {
          width: 1rem;
          height: 1rem;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .afro-filter-btn.afro-active .afro-filter-category-icon {
          color:,rgb(27, 23, 19);
          transform: scale(1.1);
        }

        .afro-filter-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100px;
        }

        .afro-filter-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg,, #8B7355 0%, #A9927D 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .afro-filter-btn.afro-active .afro-filter-underline {
          width: 80%;
        }

        /* Banner promotionnel */
        .afro-promo-banner {
          position: relative;
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.15), rgba(160, 82, 45, 0.1));
          border: 1px solid rgba(139, 69, 19, 0.2);
          border-radius: 24px;
          padding: clamp(2rem, 4vw, 3rem);
          margin-bottom: 3rem;
          overflow: hidden;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-promo-content {
          position: relative;
          z-index: 2;
          text-align: center;
          width: 100%;
        }

        .afro-promo-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
          max-width: 100%;
        }

        .afro-promo-sparkle {
          width: 1rem;
          height: 1rem;
          color: #CD853F;
          flex-shrink: 0;
        }

        .afro-promo-badge span {
          color: #CD853F;
          font-weight: 600;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .afro-promo-title {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .afro-promo-highlight {
          background: linear-gradient(135deg,, #8B7355 0%, #A9927D 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .afro-promo-text {
          color: #94a3b8;
          font-size: clamp(1rem, 2vw, 1.125rem);
          margin-bottom: 2rem;
          line-height: 1.5;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .afro-cta-button {
          position: relative;
          background: linear-gradient(135deg, , #8B7355 0%, #A9927D 100%);
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
          max-width: 100%;
          box-sizing: border-box;
          color: black;
        }

        .afro-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(139, 69, 19, 0.4);
        }

        .afro-button-sparkle {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .afro-sparkle-icon {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .afro-button-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .afro-cta-button:hover .afro-button-glow {
          left: 100%;
        }

        .afro-promo-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .afro-floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
        }

        .afro-orb-1 {
          width: 80px;
          height: 80px;
          background:, #8B7355;
          top: 10%;
          left: 10%;
          animation: afroFloatOrb 6s ease-in-out infinite;
        }

        .afro-orb-2 {
          width: 120px;
          height: 120px;
          background:, #8B7355 ;
          top: 60%;
          right: 10%;
          animation: afroFloatOrb 8s ease-in-out infinite reverse;
        }

        .afro-orb-3 {
          width: 60px;
          height: 60px;
          background:rgb(132, 89, 45);
          bottom: 20%;
          left: 20%;
          animation: afroFloatOrb 10s ease-in-out infinite;
        }

        @keyframes afroFloatOrb {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(8px) rotate(240deg); }
        }

        /* Grille de produits */
        .afro-products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding: 0 1rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-product-card {
          animation: afroFadeInUp 0.6s ease-out both;
          display: flex;
          width: 100%;
        }

        .afro-product-card-inner {
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
          box-sizing: border-box;
        }

        .afro-product-card:hover .afro-product-card-inner {
          transform: translateY(-8px);
          border-color: rgba(139, 69, 19, 0.3);
          box-shadow: 0 20px 40px rgba(139, 69, 19, 0.2);
        }

        .afro-product-image-section {
          position: relative;
          height: 250px;
          overflow: hidden;
          flex-shrink: 0;
          width: 100%;
        }

        .afro-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .afro-product-image-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(160, 82, 45, 0.05) 100%);
        }

        .afro-product-icon-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
        }

        .afro-icon-orb {
          width: 70px;
          height: 70px;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.2), transparent);
          border: 2px solid rgba(139, 69, 19, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          animation: afroOrbGlow 3s ease-in-out infinite;
          margin: 0 auto;
        }

        @keyframes afroOrbGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 19, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 69, 19, 0.5); }
        }

        .afro-product-main-icon {
          width: 1.75rem;
          height: 1.75rem;
          color: #8B7355 ;
          flex-shrink: 0;
        }

        .afro-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: calc(100% - 2rem);
        }

        .afro-badge {
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          backdrop-filter: blur(10px);
          animation: afroBadgePulse 2s ease-in-out infinite;
          white-space: nowrap;
          max-width: 100%;
        }

        .afro-badge-sale {
          background: linear-gradient(135deg, #8B7355 0%, #A9927D 100%);
        }

        .afro-badge-featured {
          background: linear-gradient(135deg, #5D4037, #6D4C41);
        }

        .afro-badge-soldout {
          background: linear-gradient(135deg, #6b7280, #4b5563);
        }

        .afro-badge-inner-icon {
          width: 0.7rem;
          height: 0.7rem;
          flex-shrink: 0;
        }

        @keyframes afroBadgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .afro-product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, , #8B7355 0%, #A9927D 100%));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .afro-product-overlay.afro-active {
          opacity: 1;
        }

        .afro-overlay-content {
          display: flex;
          gap: 1rem;
          flex-direction: column;
          align-items: center;
          width: 100%;
          padding: 0 1rem;
          box-sizing: border-box;
        }

        .afro-wishlist-btn {
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
          flex-shrink: 0;
          color:rgb(7, 9, 12);
        }

        .afro-wishlist-btn:hover {
          background: white;
          transform: scale(1.1);
        }

        .afro-wishlist-icon {
          width: 1.125rem;
          height: 1.125rem;
          color: #374151;
          flex-shrink: 0;
        }

        .afro-quickview-btn {
          background: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          color: #1a1a1a;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .afro-quickview-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .afro-product-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          gap: 0.5rem;
          width: 100%;
        }

        .afro-category-tag {
          background: rgba(139, 69, 19, 0.1);
          color:  #8B7355 ;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
          max-width: 50%;
        }

        .afro-rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #94a3b8;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .afro-star {
          width: 0.875rem;
          height: 0.875rem;
          fill: , #8B7355;
          color:, #8B7355;
          flex-shrink: 0;
        }

        .afro-reviews-count {
          color: #64748b;
          font-size: 0.7rem;
          white-space: nowrap;
        }

        .afro-product-name {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: white;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .afro-product-description {
          color: #94a3b8;
          font-size: 0.875rem;
          line-height: 1.4;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .afro-options {
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .afro-color-options {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .afro-options-label {
          font-size: 0.7rem;
          color: #64748b;
          font-weight: 600;
          white-space: nowrap;
        }

        .afro-color-dots {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .afro-color-dot {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .afro-color-dot:hover {
          transform: scale(1.1);
          border-color:, #8B7355;
        }

        .afro-product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-top: auto;
          width: 100%;
        }

        .afro-price-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .afro-current-price {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          color: white;
          white-space: nowrap;
        }

        .afro-original-price {
          font-size: 0.875rem;
          color: #94a3b8;
          text-decoration: line-through;
          white-space: nowrap;
        }

        .afro-cart-btn {
          position: relative;
          background: linear-gradient(135deg, , #8B7355 0%, #A9927D 100%);
          border: none;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          color: black;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          overflow: hidden;
          transition: all 0.3s ease;
          font-size: 0.75rem;
          white-space: nowrap;
          flex: 1;
          max-width: 140px;
          justify-content: center;
          box-sizing: border-box;
        }

        .afro-cart-btn:hover:not(.afro-disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 69, 19, 0.4);
        }

        .afro-cart-btn.afro-disabled {
          background: #6b7280;
          cursor: not-allowed;
          opacity: 0.6;
        }

        .afro-cart-icon {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .afro-cart-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .afro-button-wave {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .afro-cart-btn:hover .afro-button-wave {
          left: 100%;
        }

        .afro-card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Section features */
        .afro-features-section {
          margin-bottom: 3rem;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-features-header {
          text-align: center;
          margin-bottom: 2rem;
          width: 100%;
        }

        .afro-features-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3rem);
          background: linear-gradient(135deg, #ffffff 0%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.1;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .afro-features-subtitle {
          color: #64748b;
          font-size: clamp(1rem, 2vw, 1.125rem);
          width: 100%;
        }

        .afro-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .afro-feature-item {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .afro-feature-item:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 69, 19, 0.3);
          box-shadow: 0 12px 25px rgba(139, 69, 19, 0.2);
        }

        .afro-feature-icon {
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .afro-icon-orb-feature {
          width: 70px;
          height: 70px;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.2), transparent);
          border: 2px solid rgba(139, 69, 19, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          animation: afroOrbGlow 3s ease-in-out infinite;
        }

        .afro-feature-svg {
          width: 1.75rem;
          height: 1.75rem;
          color:  #8B7355 ;
          flex-shrink: 0;
        }

        .afro-feature-item h4 {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.125rem;
          color: white;
          margin-bottom: 0.75rem;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }

        .afro-feature-item p {
          color: #94a3b8;
          line-height: 1.5;
          font-size: 0.875rem;
          width: 100%;
          word-wrap: break-word;
          overflow-wrap: break-word;
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

        /* Responsive Design */
        @media (min-width: 640px) {
          .afro-shop-content {
            padding: 0 1.5rem;
          }

          .afro-products-grid {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          .afro-overlay-content {
            flex-direction: row;
          }

          .afro-cart-btn {
            font-size: 0.875rem;
            padding: 0.75rem 1.25rem;
            max-width: 160px;
          }

          .afro-cart-text {
            display: block;
          }
        }

        @media (min-width: 768px) {
          .afro-shop-content {
            padding: 0 2rem;
          }

          .afro-hero-section {
            padding: 6rem 0 4rem;
            min-height: 70vh;
          }

          .afro-product-image-section {
            height: 280px;
          }

          .afro-feature-item {
            padding: 2rem;
          }

          .afro-filters-scroll-container {
            overflow-x: visible;
            padding-bottom: 0;
          }

          .afro-filters-grid {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (min-width: 1024px) {
          .afro-shop-content {
            padding: 0 2rem;
          }

          .afro-products-grid {
            gap: 2rem;
          }
        }

        @media (min-width: 1280px) {
          .afro-shop-content {
            padding: 0 2rem;
          }
        }

        /* Optimisations pour très grands écrans */
        @media (min-width: 1536px) {
          .afro-shop-content {
            max-width: 1400px;
          }
        }

        /* Support tactile amélioré */
        @media (hover: none) {
          .afro-product-card:hover .afro-product-card-inner {
            transform: none;
          }

          .afro-filter-btn:hover {
            transform: none;
          }

          .afro-cta-button:hover,
          .afro-cart-btn:hover,
          .afro-feature-item:hover {
            transform: none;
          }

          .afro-color-dot:hover {
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

export default AfroShopCatalog;