import { useState, useEffect, useRef } from 'react';
import booksImage from '../../assets/books-collection.webp';
import './vedette.css';
const FeaturedResources = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const resources = [
    {
      id: 1,
      title: "Histoire de l'Afrique Moderne",
      description: "Un guide complet sur l'évolution politique et sociale du continent africain au XXe siècle.",
      type: "Ebook Premium",
      rating: 4.9,
      downloads: "2.1K",
      price: "Gratuit",
      category: "Histoire",
      featured: true,
      color: "#FF6B35"
    },
    {
      id: 2,
      title: "Traditions Orales & Contes",
      description: "Collection de récits traditionnels transmis de génération en génération.",
      type: "Audiobook",
      rating: 4.8,
      downloads: "1.8K",
      price: "Premium",
      category: "Culture",
      featured: false,
      color: "#8B4513"
    },
    {
      id: 3,
      title: "Leadership Africain Contemporain",
      description: "Portraits de leaders inspirants qui façonnent l'avenir du continent.",
      type: "Guide Interactif",
      rating: 4.9,
      downloads: "950",
      price: "9.99€",
      category: "Leadership",
      featured: true,
      color: "#2E8B57"
    },
    {
      id: 4,
      title: "Art & Symbolisme Africain",
      description: "Exploration visuelle des codes artistiques et leur signification culturelle.",
      type: "Collection Visuelle",
      rating: 4.7,
      downloads: "1.5K",
      price: "Premium",
      category: "Art",
      featured: false,
      color: "#9932CC"
    }
  ];

  const categories = ["Tous", "Histoire", "Culture", "Leadership", "Art", "Économie"];

  const filteredResources = activeCategory === "Tous" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section ref={sectionRef} className="featured-resources-section">
      <div className="resources-container">
        {/* En-tête de section */}
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="section-badge">
            Ressources Premium
          </div>
          <h2 className="section-title">
            Bibliothèque de <span className="title-gradient">Connaissances</span>
          </h2>
          <p className="section-description">
            Accède à une collection soigneusement sélectionnée d'ebooks, guides, 
            audiobooks et ressources interactives sur la culture africaine.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className={`category-filters ${isVisible ? 'animate-fade-in-up' : ''}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image mise en avant */}
        <div className="featured-content">
          <div className="featured-image-container">
            <div className="image-wrapper">
              <img
                src={booksImage}
                alt="Collection de livres sur la culture africaine"
                className="featured-image"
              />
              <div className="image-overlay"></div>
              <div className="image-content">
                <h3 className="image-title">Collection Patrimoine Africain</h3>
                <p className="image-subtitle">
                  Plus de 500 ressources documentées et vérifiées par nos experts
                </p>
                <button className="image-button">
                  Découvrir 
                  <span className="button-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="featured-text">
            <h3 className="text-title">Une bibliothèque qui grandit avec toi</h3>
            <p className="text-description">
              Chaque mois, nous enrichissons notre collection avec de nouveaux contenus 
              créés par des experts, académiciens et acteurs culturels reconnus. 
              De l'histoire ancienne aux enjeux contemporains, trouve les ressources 
              qui nourrissent ta soif de connaissance.
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Contenu vérifié</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Mise à jour mensuelle</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Formats multiples</span>
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                <span>Accès offline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des ressources */}
        <div className="resources-grid">
          {filteredResources.map((resource, index) => (
            <div
              key={resource.id}
              className={`resource-card ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                '--accent-color': resource.color
              }}
            >
              {/* Badge et type */}
              <div className="card-header">
                <div className="category-badge" style={{ backgroundColor: resource.color + '20', color: resource.color }}>
                  {resource.category}
                </div>
                {resource.featured && (
                  <div className="featured-star">
                    <div className="star-icon">★</div>
                  </div>
                )}
              </div>

              {/* Titre et description */}
              <h4 className="resource-title">{resource.title}</h4>
              <p className="resource-description">{resource.description}</p>

              {/* Métadonnées */}
              <div className="resource-meta">
                <div className="meta-item">
                  <div className="rating">
                    <span className="rating-star">★</span>
                    <span>{resource.rating}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <div className="downloads">
                    <span className="download-icon">↓</span>
                    <span>{resource.downloads}</span>
                  </div>
                </div>
              </div>

              {/* Prix et CTA */}
              <div className="card-footer">
                <span className={`resource-price ${
                  resource.price === "Gratuit" ? "free" : 
                  resource.price === "Premium" ? "premium" : "paid"
                }`}>
                  {resource.price}
                </span>
                <button className="resource-button">
                  <span className="button-arrow">→</span>
                </button>
              </div>

              {/* Effet de hover */}
              <div className="card-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* CTA pour voir toutes les ressources */}
        <div className={`section-cta ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <button className="cta-button">
            Voir toutes les ressources
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="decorative-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
};

export default FeaturedResources;