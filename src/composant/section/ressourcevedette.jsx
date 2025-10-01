import { useState, useEffect, useRef } from 'react';
import booksImage from '../../assets/books-collection.webp';
import './vedette.css';

const VedettePremium = () => {
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
      color: "#8B7355"
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
      color: "#7D5A3A"
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
      color: "#5C4033"
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
      color: "#A9927D"
    }
  ];

  const categories = ["Tous", "Histoire", "Culture", "Leadership", "Art", "Économie"];

  const filteredResources = activeCategory === "Tous" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <section ref={sectionRef} className="vedette-premium-section">
      <div className="vedette-premium-container">
        {/* En-tête de section */}
        <div className={`vedette-premium-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="vedette-premium-badge">
            Ressources Premium
          </div>
          <h2 className="vedette-premium-title">
            Bibliothèque de <span className="vedette-premium-title-gradient">Connaissances</span>
          </h2>
          <p className="vedette-premium-description">
            Accède à une collection soigneusement sélectionnée d'ebooks, guides, 
            audiobooks et ressources interactives sur la culture africaine.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className={`vedette-premium-category-filters ${isVisible ? 'animate-fade-in-up' : ''}`}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`vedette-premium-category-filter ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image mise en avant */}
        <div className="vedette-premium-content">
          <div className="vedette-premium-image-container">
            <div className="vedette-premium-image-wrapper">
              <img
                src={booksImage}
                alt="Collection de livres sur la culture africaine"
                className="vedette-premium-image"
              />
              <div className="vedette-premium-image-overlay"></div>
              <div className="vedette-premium-image-content">
                <h3 className="vedette-premium-image-title">Collection Patrimoine Africain</h3>
                <p className="vedette-premium-image-subtitle">
                  Plus de 500 ressources documentées et vérifiées par nos experts
                </p>
                <button className="vedette-premium-image-button">
                  Découvrir 
                  <span className="vedette-premium-button-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="vedette-premium-text">
            <h3 className="vedette-premium-text-title">Une bibliothèque qui grandit avec toi</h3>
            <p className="vedette-premium-text-description">
              Chaque mois, nous enrichissons notre collection avec de nouveaux contenus 
              créés par des experts, académiciens et acteurs culturels reconnus. 
              De l'histoire ancienne aux enjeux contemporains, trouve les ressources 
              qui nourrissent ta soif de connaissance.
            </p>
            <div className="vedette-premium-features-grid">
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Contenu vérifié</span>
              </div>
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Mise à jour mensuelle</span>
              </div>
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Formats multiples</span>
              </div>
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Accès offline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grille des ressources */}
        <div className="vedette-premium-resources-grid">
          {filteredResources.map((resource, index) => (
            <div
              key={resource.id}
              className={`vedette-premium-resource-card ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                '--vedette-premium-accent-color': resource.color
              }}
            >
              {/* Badge et type */}
              <div className="vedette-premium-card-header">
                <div className="vedette-premium-category-badge" style={{ backgroundColor: resource.color + '20', color: resource.color }}>
                  {resource.category}
                </div>
                {resource.featured && (
                  <div className="vedette-premium-featured-star">
                    <div className="vedette-premium-star-icon">★</div>
                  </div>
                )}
              </div>

              {/* Titre et description */}
              <h4 className="vedette-premium-resource-title">{resource.title}</h4>
              <p className="vedette-premium-resource-description">{resource.description}</p>

              {/* Métadonnées */}
              <div className="vedette-premium-resource-meta">
                <div className="vedette-premium-meta-item">
                  <div className="vedette-premium-rating">
                    <span className="vedette-premium-rating-star">★</span>
                    <span>{resource.rating}</span>
                  </div>
                </div>
                <div className="vedette-premium-meta-item">
                  <div className="vedette-premium-downloads">
                    <span className="vedette-premium-download-icon">↓</span>
                    <span>{resource.downloads}</span>
                  </div>
                </div>
              </div>

              {/* Prix et CTA */}
              <div className="vedette-premium-card-footer">
                <span className={`vedette-premium-resource-price ${
                  resource.price === "Gratuit" ? "free" : 
                  resource.price === "Premium" ? "premium" : "paid"
                }`}>
                  {resource.price}
                </span>
                <button className="vedette-premium-resource-button">
                  <span className="vedette-premium-button-arrow">→</span>
                </button>
              </div>

              {/* Effet de hover */}
              <div className="vedette-premium-card-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* CTA pour voir toutes les ressources */}
        <div className={`vedette-premium-section-cta ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <button className="vedette-premium-cta-button">
            Voir toutes les ressources
            <span className="vedette-premium-button-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="vedette-premium-decorative-elements">
        <div className="vedette-premium-floating-shape vedette-premium-shape-1"></div>
        <div className="vedette-premium-floating-shape vedette-premium-shape-2"></div>
        <div className="vedette-premium-floating-shape vedette-premium-shape-3"></div>
      </div>
    </section>
  );
};

export default VedettePremium;