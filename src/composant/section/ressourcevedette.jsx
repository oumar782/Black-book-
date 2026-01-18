import { useState, useEffect, useRef } from 'react';
import cultureImage from '../../assets/black.webp';
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
      title: "Cheikh Anta Diop",
      description: "Le père de l'afrocentricité et ses contributions à la renaissance culturelle africaine.",
      type: "Savant Historien",
      rating: 4.9,
      downloads: "2.1K",
      category: "Histoire",
      featured: true,
      color: "#8B7355"
    },
    {
      id: 2,
      title: "Proverbes Africains",
      description: "La sagesse millénaire des ancêtres à travers les proverbes traditionnels.",
      type: "Sagesse Ancestrale",
      rating: 4.8,
      downloads: "1.8K",
      category: "Culture",
      featured: false,
      color: "#7D5A3A"
    },
    {
      id: 3,
      title: "Thomas Sankara",
      description: "Le leadership révolutionnaire et la vision panafricaine du président burkinabé.",
      type: "Leader Visionnaire",
      rating: 4.9,
      downloads: "950",
      category: "Leadership",
      featured: true,
      color: "#5C4033"
    },
    {
      id: 5,
      title: "L'Économie du Cacao",
      description: "La chaîne de valeur du cacao en Afrique de l'Ouest et ses enjeux économiques.",
      type: "Étude Économique",
      rating: 4.6,
      downloads: "1.2K",
      category: "Économie",
      featured: false,
      color: "#6B8E23"
    },
    {
      id: 6,
      title: "Mansa Musa",
      description: "L'empire du Mali et son souverain, l'homme le plus riche de l'histoire.",
      type: "Figure Historique",
      rating: 4.8,
      downloads: "1.4K",
      category: "Histoire",
      featured: false,
      color: "#DAA520"
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
            Savoirs & Réalisations
          </div>
          <h2 className="vedette-premium-title">
            Découvre nos <span className="vedette-premium-title-gradient">Figures Emblématiques</span>
          </h2>
          <p className="vedette-premium-description">
            Explore la vie et les contributions des grands savants, penseurs et leaders africains 
            qui ont façonné l'histoire et continuent d'inspirer les générations.
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
                src={cultureImage}
                alt="Symboles et représentations de la culture africaine"
                className="vedette-premium-image"
              />
              <div className="vedette-premium-image-overlay"></div>
              <div className="vedette-premium-image-content">
                <h3 className="vedette-premium-image-title">Panorama du Patrimoine Africain</h3>
                <p className="vedette-premium-image-subtitle">
                  Plus de 200 figures emblématiques documentées par nos chercheurs
                </p>
                <button className="vedette-premium-image-button">
                  Explorer le patrimoine
                  <span className="vedette-premium-button-arrow">→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="vedette-premium-text">
            <h3 className="vedette-premium-text-title">Une plateforme qui célèbre l'excellence africaine</h3>
            <p className="vedette-premium-text-description">
              Nous mettons en lumière les contributions exceptionnelles des penseurs, scientifiques, 
              artistes et leaders africains. Des civilisations anciennes aux innovations contemporaines, 
              découvre les parcours inspirants qui ont marqué l'histoire du continent.
            </p>
            <div className="vedette-premium-features-grid">
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Biographies détaillées</span>
              </div>
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Analyses historiques</span>
              </div>
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Documentations vérifiées</span>
              </div>
              <div className="vedette-premium-feature-item">
                <div className="vedette-premium-feature-dot"></div>
                <span>Contenu multimédia</span>
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
                  <div className="vedette-premium-type-badge">
                    {resource.type}
                  </div>
                </div>
                <div className="vedette-premium-meta-item">
                  <div className="vedette-premium-rating">
                    <span className="vedette-premium-rating-star">★</span>
                    <span>{resource.rating}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
             

              {/* Effet de hover */}
              <div className="vedette-premium-card-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* CTA pour voir toutes les ressources */}
        <div className={`vedette-premium-section-cta ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <button 
            className="vedette-premium-cta-button"
            onClick={() => window.location.href = '/savants'}
          >
            Voir toutes les figures emblématiques
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