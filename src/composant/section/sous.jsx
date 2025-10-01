import { useState, useEffect, useRef } from 'react';
import { Users, Zap, Crown, Check, Star, ArrowRight } from 'lucide-react';
import './sous.css';

const SouscriptionPremium = () => {
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
      name: "Explorateur",
      price: "Gratuit",
      annualPrice: "Gratuit",
      priceDetail: "Pour toujours",
      annualPriceDetail: "Pour toujours",
      description: "Parfait pour découvrir notre univers",
      popular: false,
      color: "#8B7355",
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
      color: "#D4AF37",
      features: [
        "Tout du plan Explorateur",
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
      color: "#C19A6B",
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
      case "Explorateur":
        return <Users size={32} />;
      case "Passionné":
        return <Zap size={32} />;
      case "Ambassadeur":
        return <Crown size={32} />;
      default:
        return <Star size={32} />;
    }
  };

  return (
    <section ref={sectionRef} className="souscription-premium-section">
      <div className="souscription-premium-container">
        {/* En-tête */}
        <div className={`souscription-header ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="souscription-badge">
            Abonnements Premium
          </div>
          <h2 className="souscription-title">
            Choisis ton <span className="souscription-title-gradient">Parcours</span>
          </h2>
          <p className="souscription-description">
            Accède à des ressources premium, participe à des événements exclusifs 
            et connecte-toi avec une communauté passionnée.
          </p>
          
          {/* Toggle annuel/mensuel */}
          <div className="souscription-toggle">
            <div className="souscription-toggle-container">
              <button 
                className={`souscription-toggle-option ${!isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(false)}
              >
                Mensuel
              </button>
              <button 
                className={`souscription-toggle-option ${isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(true)}
              >
                Annuel <span className="souscription-discount-badge">-20%</span>
              </button>
              <div className={`souscription-toggle-slider ${isAnnual ? 'annual' : ''}`}></div>
            </div>
          </div>
        </div>

        {/* Grille des plans */}
        <div className="souscription-plans-grid">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`souscription-plan-card ${plan.popular ? 'souscription-popular' : ''} ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                '--souscription-plan-color': plan.color
              }}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="souscription-popular-badge">
                  <div className="souscription-badge-content">
                    <Star size={14} />
                    Plus populaire
                  </div>
                  <div className="souscription-badge-tail"></div>
                </div>
              )}

              {/* Icône et titre */}
              <div className="souscription-plan-header">
                <div className={`souscription-plan-icon ${plan.popular ? 'souscription-popular-icon' : ''}`}>
                  {getPlanIcon(plan.name)}
                  <div className="souscription-icon-glow"></div>
                </div>
                <h3 className="souscription-plan-name">{plan.name}</h3>
                <p className="souscription-plan-description">{plan.description}</p>
              </div>

              {/* Prix */}
              <div className="souscription-plan-pricing">
                <div className="souscription-price-container">
                  <span className="souscription-price-amount">
                    {isAnnual ? plan.annualPrice : plan.price}
                  </span>
                  <span className="souscription-price-detail">
                    {isAnnual ? plan.annualPriceDetail : plan.priceDetail}
                  </span>
                </div>
                {isAnnual && plan.price !== "Gratuit" && (
                  <div className="souscription-annual-savings">
                    Économisez {Math.round((1 - parseInt(plan.annualPrice) / parseInt(plan.price)) * 100)}%
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="souscription-plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="souscription-feature-item">
                    <div className="souscription-feature-check">
                      <Check size={14} />
                    </div>
                    <span className="souscription-feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className={`souscription-plan-button ${plan.popular ? 'souscription-popular-button' : ''}`}>
                {plan.name === 'Explorateur' ? 'Commencer gratuitement' : 'Choisir ce plan'}
                <ArrowRight size={18} className="souscription-button-arrow" />
              </button>

              {/* Effets visuels */}
              <div className="souscription-card-glow"></div>
              <div className="souscription-card-shine"></div>
            </div>
          ))}
        </div>

        {/* Témoignages */}
        <div className={`souscription-testimonials-section ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h3 className="souscription-testimonials-title">Ils nous font confiance</h3>
          <div className="souscription-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="souscription-testimonial-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="souscription-rating-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="souscription-star">
                      <Star size={16} fill="currentColor" />
                    </div>
                  ))}
                </div>
                <p className="souscription-testimonial-comment">"{testimonial.comment}"</p>
                <div className="souscription-testimonial-author">
                  <div className="souscription-author-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="souscription-author-info">
                    <div className="souscription-author-name">{testimonial.name}</div>
                    <div className="souscription-author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ rapide */}
        <div className={`souscription-section-cta ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <p className="souscription-cta-text">
            Des questions ? Nous avons les réponses.
          </p>
          <button className="souscription-faq-button">
            Consulter la FAQ
          </button>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="souscription-decorative-elements">
        <div className="souscription-floating-orb souscription-orb-1"></div>
        <div className="souscription-floating-orb souscription-orb-2"></div>
        <div className="souscription-floating-orb souscription-orb-3"></div>
      </div>
    </section>
  );
};

export default SouscriptionPremium;