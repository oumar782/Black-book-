import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageCircle, Sparkles, Zap, Crown, Clock, CheckCircle } from 'lucide-react';

const PremiumContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@culture-afrique.com",
      description: "Envoyez-nous un message à tout moment",
      delay: "0.1s"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
      description: "Lun - Ven, 9h - 18h",
      delay: "0.2s"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "123 Avenue de la Culture",
      description: "75001 Paris, France",
      delay: "0.3s"
    },
    {
      icon: Clock,
      title: "Réponse",
      details: "Sous 24h",
      description: "Temps de réponse garanti",
      delay: "0.4s"
    }
  ];

  return (
    <div className="premium-contact-container">
      {/* Effet de particules animées */}
      <div className="contact-particles-background">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="contact-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`
          }} />
        ))}
      </div>

      {/* Curseur personnalisé */}
      <div 
        className="contact-custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <section className="premium-contact-section">
        <div className="premium-contact-content">
          {/* En-tête hero */}
          <div className="contact-hero-section">
            <div className="contact-hero-glow" />
            <div className="premium-contact-header">
              <div className="contact-header-badge">
                <MessageCircle className="badge-icon-contact" />
                <span>Échange & Collaboration</span>
              </div>
              <h1 className="contact-main-title">
                <span className="contact-title-gradient">Contactez</span>
                <span className="contact-title-accent">-Nous</span>
              </h1>
              <div className="contact-title-underline">
                <div className="contact-underline-animation" />
              </div>
              <p className="contact-subtitle">
                Votre voix compte. Partagez vos idées, posez vos questions ou simplement échangeons 
                autour de la richesse culturelle africaine et de son avenir.
              </p>
            </div>
          </div>

          <div className="contact-main-grid">
            {/* Informations de contact */}
            <div className="contact-info-section">
              <div className="contact-info-glass">
                <div className="contact-info-header">
                  <div className="info-header-badge">
                    <Sparkles className="info-sparkle" />
                    <span>Plusieurs façons de nous joindre</span>
                  </div>
                  <h2 className="info-section-title">
                    Prenons <span className="info-title-accent">contact</span>
                  </h2>
                  <p className="info-section-description">
                    Que vous ayez une question précise, un projet en tête ou simplement 
                    l'envie d'échanger, nous sommes là pour vous écouter.
                  </p>
                </div>

                <div className="contact-info-grid">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={item.title}
                        className="contact-info-card"
                        style={{ animationDelay: item.delay }}
                      >
                        <div className="info-icon-wrapper">
                          <div className="info-icon-orb">
                            <IconComponent className="info-icon" />
                          </div>
                        </div>
                        <div className="info-content">
                          <h3 className="info-title">{item.title}</h3>
                          <p className="info-detail">{item.details}</p>
                          <p className="info-description">{item.description}</p>
                        </div>
                        <div className="info-card-glow" />
                      </div>
                    );
                  })}
                </div>

                {/* Stats de confiance */}
                <div className="trust-stats">
                  <div className="trust-stat">
                    <div className="stat-number">98%</div>
                    <div className="stat-label">de satisfaction</div>
                  </div>
                  <div className="trust-stat">
                    <div className="stat-number">24h</div>
                    <div className="stat-label">réponse moyenne</div>
                  </div>
                  <div className="trust-stat">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">contacts mensuels</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="contact-form-section">
              <div className="contact-form-glass">
                <div className="form-header">
                  <div className="form-badge">
                    <Zap className="form-badge-icon" />
                    <span>Message Rapide</span>
                  </div>
                  <h2 className="form-title">
                    Envoyez-nous un <span className="form-title-accent">message</span>
                  </h2>
                  <p className="form-description">
                    Remplissez le formulaire ci-dessous et nous vous répondrons 
                    dans les plus brefs délais.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon-wrapper">
                      <CheckCircle className="success-icon" />
                    </div>
                    <h3 className="success-title">Message envoyé !</h3>
                    <p className="success-description">
                      Merci pour votre message. Nous vous répondrons très rapidement.
                    </p>
                    <div className="success-glow" />
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="premium-contact-form">
                    {/* Champ Nom */}
                    <div className="form-group">
                      <div className="input-wrapper">
                        <User className="input-icon" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          className="premium-input"
                          placeholder="Votre nom complet"
                          required
                        />
                        <div className={`input-underline ${activeField === 'name' ? 'active' : ''}`} />
                      </div>
                    </div>

                    {/* Champ Email */}
                    <div className="form-group">
                      <div className="input-wrapper">
                        <Mail className="input-icon" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          className="premium-input"
                          placeholder="Votre adresse email"
                          required
                        />
                        <div className={`input-underline ${activeField === 'email' ? 'active' : ''}`} />
                      </div>
                    </div>

                    {/* Champ Sujet */}
                    <div className="form-group">
                      <div className="input-wrapper">
                        <MessageCircle className="input-icon" />
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('subject')}
                          onBlur={() => setActiveField(null)}
                          className="premium-input"
                          placeholder="Sujet de votre message"
                          required
                        />
                        <div className={`input-underline ${activeField === 'subject' ? 'active' : ''}`} />
                      </div>
                    </div>

                    {/* Champ Message */}
                    <div className="form-group">
                      <div className="textarea-wrapper">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          className="premium-textarea"
                          placeholder="Décrivez votre projet, posez votre question ou partagez vos idées..."
                          rows="6"
                          required
                        />
                        <div className={`textarea-underline ${activeField === 'message' ? 'active' : ''}`} />
                      </div>
                    </div>

                    {/* Bouton d'envoi */}
                    <button 
                      type="submit" 
                      className={`premium-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="submit-spinner" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <Send className="send-icon" />
                        </>
                      )}
                      <div className="submit-glow" />
                    </button>
                  </form>
                )}

                {/* Assurance confidentialité */}
                <div className="privacy-assurance">
                  <div className="privacy-badge">
                    <Crown className="privacy-icon" />
                    <span>Confidentialité garantie</span>
                  </div>
                  <p className="privacy-text">
                    Vos informations sont sécurisées et ne seront jamais partagées 
                    avec des tiers. Nous respectons votre vie privée.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section FAQ rapide */}
          <div className="quick-faq-section">
            <div className="faq-glass">
              <div className="faq-header">
                <h3 className="faq-title">Questions fréquentes</h3>
                <p className="faq-subtitle">Quelques réponses rapides</p>
              </div>
              <div className="faq-grid">
                <div className="faq-item">
                  <div className="faq-question">Quel est le délai de réponse ?</div>
                  <div className="faq-answer">Nous répondons sous 24 heures ouvrées maximum.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">Proposez-vous des collaborations ?</div>
                  <div className="faq-answer">Absolument ! Nous sommes ouverts aux partenariats.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-question">Puis-je suggérer un sujet d'article ?</div>
                  <div className="faq-answer">Oui, nous adorons recevoir vos suggestions.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .premium-contact-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #ff6b35 50%, #1a1a1a 75%, #0a0a0a 100%);
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
          overflow-x: hidden;
          padding: 2rem 0;
        }

     

        /* Particules animées */
        .contact-particles-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .contact-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: linear-gradient(45deg, #ff6b35 0%, #e55a2b 100%);
          border-radius: 50%;
          animation: floatParticleContact linear infinite;
          opacity: 0.3;
        }

        @keyframes floatParticleContact {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Curseur personnalisé */
        .contact-custom-cursor {
          position: fixed;
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, #ff6b35, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: screen;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .premium-contact-section {
          position: relative;
          z-index: 2;
        }

        .premium-contact-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .contact-hero-section {
          position: relative;
          padding: 4rem 0 6rem;
          text-align: center;
        }

        .contact-hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse at center, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
          opacity: 0.6;
        }

        .premium-contact-header {
          position: relative;
        }

        .contact-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);
          border: 1px solid rgba(255, 107, 53, 0.3);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          animation: slideInDown 0.8s ease-out;
          color: white;
        }

        .badge-icon-contact {
          width: 1rem;
          height: 1rem;
          color: white;
        }

        .contact-header-badge span {
          color: white;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .contact-main-title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .contact-title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-title-accent {
          background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 0.5rem;
        }

        .contact-title-underline {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .contact-underline-animation {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #ff6b35, transparent);
          border-radius: 2px;
          animation: underlinePulse 2s ease-in-out infinite;
        }

        @keyframes underlinePulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.2); opacity: 0.8; }
        }

        .contact-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        /* Grille principale */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        /* Section informations */
        .contact-info-section {
          animation: fadeInLeft 0.8s ease-out both;
        }

        .contact-info-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
          height: fit-content;
          position: sticky;
          top: 2rem;
        }

        .contact-info-header {
          margin-bottom: 2.5rem;
        }

        .info-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .info-sparkle {
          width: 1rem;
          height: 1rem;
          color: #ff6b35;
        }

        .info-header-badge span {
          color: #ff6b35;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .info-section-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: white;
          margin-bottom: 1rem;
        }

        .info-title-accent {
          background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .info-section-description {
          color: #94a3b8;
          line-height: 1.6;
        }

        .contact-info-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .contact-info-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out both;
          overflow: hidden;
        }

        .contact-info-card:hover {
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.1);
        }

        .info-icon-wrapper {
          margin-bottom: 1rem;
        }

        .info-icon-orb {
          width: 50px;
          height: 50px;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.2), transparent);
          border: 1px solid rgba(255, 107, 53, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .info-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: #ff6b35;
        }

        .info-content h3 {
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
        }

        .info-detail {
          color: #ff6b35;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .info-description {
          color: #94a3b8;
          font-size: 0.875rem;
        }

        .info-card-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .contact-info-card:hover .info-card-glow {
          left: 100%;
        }

        .trust-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .trust-stat {
          text-align: center;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        /* Section formulaire */
        .contact-form-section {
          animation: fadeInRight 0.8s ease-out both;
        }

        .contact-form-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
        }

        .form-header {
          margin-bottom: 2.5rem;
        }

        .form-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 107, 53, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .form-badge-icon {
          width: 1rem;
          height: 1rem;
          color: #ff6b35;
        }

        .form-badge span {
          color: #ff6b35;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .form-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: white;
          margin-bottom: 1rem;
        }

        .form-title-accent {
          background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .form-description {
          color: #94a3b8;
          line-height: 1.6;
        }

        .premium-contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          position: relative;
        }

        .input-wrapper, .textarea-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          width: 1.25rem;
          height: 1.25rem;
          transition: color 0.3s ease;
          z-index: 2;
        }

        .premium-input, .premium-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .premium-input {
          padding: 1rem 1rem 1rem 3rem;
          height: 54px;
        }

        .premium-textarea {
          padding: 1rem 1rem 1rem 1.5rem;
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        .premium-input:focus, .premium-textarea:focus {
          outline: none;
          border-color: #ff6b35;
          background: rgba(255, 107, 53, 0.03);
        }

        .premium-input:focus + .input-underline,
        .premium-textarea:focus + .textarea-underline {
          width: 100%;
        }

        .input-underline, .textarea-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35 0%, #e55a2b 100%);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          z-index: 2;
        }

        .input-underline.active, .textarea-underline.active {
          width: 100%;
        }

        .premium-input::placeholder, .premium-textarea::placeholder {
          color: #64748b;
        }

        .premium-input:focus ~ .input-icon {
          color: #ff6b35;
        }

        .premium-submit-btn {
          position: relative;
          background: linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%);
          border: none;
          padding: 1.25rem 2rem;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          overflow: hidden;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .premium-submit-btn:hover:not(.submitting) {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(255, 107, 53, 0.4);
        }

        .premium-submit-btn.submitting {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .submit-spinner {
          width: 1.25rem;
          height: 1.25rem;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .send-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .submit-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .premium-submit-btn:hover .submit-glow {
          left: 100%;
        }

        /* Message de succès */
        .success-message {
          position: relative;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          overflow: hidden;
        }

        .success-icon-wrapper {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.2), transparent);
          border: 2px solid rgba(34, 197, 94, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          animation: successPulse 2s ease-in-out infinite;
        }

        @keyframes successPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .success-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: #22c55e;
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }

        .success-description {
          color: #94a3b8;
          line-height: 1.6;
        }

        .success-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent);
          animation: successGlow 3s ease-in-out infinite;
        }

        @keyframes successGlow {
          0%, 100% { left: -100%; }
          50% { left: 100%; }
        }

        /* Assurance confidentialité */
        .privacy-assurance {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .privacy-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .privacy-icon {
          width: 1rem;
          height: 1rem;
          color: #94a3b8;
        }

        .privacy-badge span {
          color: #94a3b8;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .privacy-text {
          color: #64748b;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Section FAQ */
        .quick-faq-section {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .faq-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 2.5rem;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .faq-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 2rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        .faq-subtitle {
          color: #94a3b8;
          font-size: 1.125rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateY(-2px);
        }

        .faq-question {
          font-weight: 600;
          color: white;
          margin-bottom: 0.75rem;
          font-size: 1.125rem;
        }

        .faq-answer {
          color: #94a3b8;
          line-height: 1.5;
        }

        /* Animations */
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info-glass {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .contact-main-title {
            font-size: 2.5rem;
          }

          .contact-info-glass,
          .contact-form-glass,
          .faq-glass {
            padding: 1.5rem;
          }

          .trust-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default PremiumContactPage;