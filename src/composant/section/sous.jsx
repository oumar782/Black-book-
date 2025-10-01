import { useState, useEffect, useRef } from 'react';
import './sous.css';
const Subscription = () => {
  const [isAnnual, setIsAnnual] = useState(false);
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

  const plans = [
    {
      name: "Explorer",
      price: "Gratuit",
      annualPrice: "Gratuit",
      priceDetail: "Pour toujours",
      annualPriceDetail: "Pour toujours",
      description: "Parfait pour découvrir notre univers",
      popular: false,
      color: "#6B7280",
      features: [
        "Accès à 50+ ressources gratuites",
        "Newsletter mensuelle",
        "Communauté Discord",
        "Événements publics",
        "Support par email"
      ]
    },
    {
      name: "Passionné",
      price: "19€",
      annualPrice: "15€",
      priceDetail: "par mois",
      annualPriceDetail: "par mois",
      description: "L'essentiel pour approfondir tes connaissances",
      popular: true,
      color: "#FF6B35",
      features: [
        "Tout du plan Explorer",
        "Accès complet à la bibliothèque",
        "Nouveaux contenus en priorité",
        "Ateliers en ligne mensuels",
        "Certificats de participation",
        "Support prioritaire"
      ]
    },
    {
      name: "Ambassadeur",
      price: "49€",
      annualPrice: "39€",
      priceDetail: "par mois",
      annualPriceDetail: "par mois",
      description: "Pour les leaders et créateurs de contenu",
      popular: false,
      color: "#F59E0B",
      features: [
        "Tout du plan Passionné",
        "Accès aux masterclasses exclusives",
        "Sessions 1-on-1 avec les experts",
        "Réseau privé d'ambassadeurs",
        "Opportunités de collaboration",
        "Badge ambassadeur vérifié",
        "Support VIP 24/7"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Amara Diallo",
      role: "Étudiante en Histoire",
      comment: "Une ressource inestimable pour mes études. Le contenu est riche et accessible.",
      rating: 5,
      avatar: "AD"
    },
    {
      name: "Marcus Johnson", 
      role: "Entrepreneur",
      comment: "Les masterclasses m'ont donné une nouvelle perspective sur le leadership africain.",
      rating: 5,
      avatar: "MJ"
    }
  ];

  const getPlanIcon = (planName) => {
    switch (planName) {
      case "Explorer":
        return "👥";
      case "Passionné":
        return "⚡";
      case "Ambassadeur":
        return "👑";
      default:
        return "⭐";
    }
  };

  return (
    <section ref={sectionRef} className="subscription-section">
      <div className="subscription-container">
        {/* En-tête */}
        <div className={`section-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="section-badge">
            Abonnements Premium
          </div>
          <h2 className="section-title">
            Choisis ton <span className="title-gradient">Parcours</span>
          </h2>
          <p className="section-description">
            Accède à des ressources premium, participe à des événements exclusifs 
            et connecte-toi avec une communauté passionnée.
          </p>
          
          {/* Toggle annuel/mensuel */}
          <div className="pricing-toggle">
            <div className="toggle-container">
              <button 
                className={`toggle-option ${!isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(false)}
              >
                Mensuel
              </button>
              <button 
                className={`toggle-option ${isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(true)}
              >
                Annuel <span className="discount-badge">-20%</span>
              </button>
              <div className={`toggle-slider ${isAnnual ? 'annual' : ''}`}></div>
            </div>
          </div>
        </div>

        {/* Grille des plans */}
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`plan-card ${plan.popular ? 'popular' : ''} ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                '--plan-color': plan.color
              }}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="popular-badge">
                  <div className="badge-content">
                    ⭐ Plus populaire
                  </div>
                  <div className="badge-tail"></div>
                </div>
              )}

              {/* Icône et titre */}
              <div className="plan-header">
                <div className={`plan-icon ${plan.popular ? 'popular-icon' : ''}`}>
                  <span className="icon-emoji">{getPlanIcon(plan.name)}</span>
                  <div className="icon-glow"></div>
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              {/* Prix */}
              <div className="plan-pricing">
                <div className="price-container">
                  <span className="price-amount">
                    {isAnnual ? plan.annualPrice : plan.price}
                  </span>
                  <span className="price-detail">
                    {isAnnual ? plan.annualPriceDetail : plan.priceDetail}
                  </span>
                </div>
                {isAnnual && plan.price !== "Gratuit" && (
                  <div className="annual-savings">
                    Économisez {Math.round((1 - parseInt(plan.annualPrice) / parseInt(plan.price)) * 100)}%
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <div className="feature-check">
                      <div className="check-icon">✓</div>
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`plan-button ${plan.popular ? 'popular-button' : ''}`}>
                {plan.name === 'Explorer' ? 'Commencer gratuitement' : 'Choisir ce plan'}
                <span className="button-arrow">→</span>
              </button>

              {/* Effets visuels */}
              <div className="card-glow"></div>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* Témoignages */}
        <div className={`testimonials-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h3 className="testimonials-title">Ils nous font confiance</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="rating-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="star">★</div>
                  ))}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ rapide */}
        <div className={`section-cta ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <p className="cta-text">
            Des questions ? Nous avons les réponses.
          </p>
          <button className="faq-button">
            Consulter la FAQ
          </button>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="decorative-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Subscription;