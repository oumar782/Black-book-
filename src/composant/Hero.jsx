import { useState, useEffect } from 'react';
import { 
  Globe, 
  Compass, 
  MapPin, 
  ChevronDown,
  Award,
  Map,
  Star
} from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&q=80',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=80',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80',
  'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&q=80',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToDestinations = () => {
    const destinations = document.getElementById('destinations');
    if (destinations) {
      destinations.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={styles.section}>
      {/* Background Images with Crossfade */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          style={{
            ...styles.imageContainer,
            opacity: index === currentImage ? 1 : 0,
          }}
        >
          <img
            src={img}
            alt="African landscape"
            style={styles.backgroundImage}
          />
          <div style={styles.gradientOverlay} />
          <div style={styles.gradientOverlayRight} />
        </div>
      ))}

      {/* Content */}
      <div style={styles.contentContainer}>
        <div style={styles.contentWrapper}>
          <div style={styles.content}>
            {/* Badge */}
            <div style={styles.badge}>
              <Globe size={16} color="#FF6B35" />
              <span style={styles.badgeText}>Tourisme Afro Black Book</span>
            </div>

            {/* Main Title */}
            <h1 style={styles.mainTitle}>
              <span style={styles.titleLine}>Explorez l'</span>
              <span style={styles.gradientText}>Afrique</span>
              <span style={styles.titleLine}> et sa Diaspora</span>
            </h1>

            {/* Subtitle */}
            <p style={styles.subtitle}>
              Découvrez les destinations les plus captivantes d'Afrique et d'Afro-Amérique. 
              Safaris, plages paradisiaques, cultures millénaires et gastronomie unique.
            </p>

            {/* CTA Buttons */}
            <div style={styles.buttonContainer}>
              <button style={styles.primaryButton} onClick={scrollToDestinations}>
                <Compass size={20} />
                <span>Explorer les Destinations</span>
              </button>
              <button style={styles.secondaryButton}>
                <MapPin size={20} />
                <span>Circuits Organisés</span>
              </button>
            </div>

            {/* Stats */}
            <div style={styles.statsContainer}>
              <div style={styles.statItem}>
                <p style={styles.statNumber}>54+</p>
                <p style={styles.statLabel}>Pays Africains</p>
              </div>
              <div style={styles.statItem}>
                <p style={styles.statNumber}>500+</p>
                <p style={styles.statLabel}>Régions</p>
              </div>
              <div style={styles.statItem}>
                <p style={styles.statNumber}>1000+</p>
                <p style={styles.statLabel}>Expériences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToDestinations}
        style={styles.scrollIndicator}
      >
        <span style={styles.scrollText}>Découvrir</span>
        <ChevronDown size={24} color="rgba(255, 255, 255, 0.7)" />
      </button>

      {/* Image Indicators */}
      <div style={styles.imageIndicators}>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            style={{
              ...styles.indicator,
              width: index === currentImage ? '32px' : '8px',
              backgroundColor: index === currentImage ? '#FF6B35' : 'rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: 'opacity 1s ease-in-out',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6))',
  },
  gradientOverlayRight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent, transparent)',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 16px',
  },
  contentWrapper: {
    margin: '0 auto',
    maxWidth: '1280px',
    width: '100%',
  },
  content: {
    maxWidth: '768px',
  },
  badge: {
    marginBottom: '24px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '9999px',
    backgroundColor: 'rgba(255, 107, 53, 0.2)',
    padding: '8px 16px',
    backdropFilter: 'blur(4px)',
  },
  badgeText: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  mainTitle: {
    marginBottom: '24px',
    fontSize: '48px',
    fontWeight: 'bold',
    lineHeight: 1.2,
    letterSpacing: '-0.025em',
    color: '#FFFFFF',
  },
  titleLine: {
    display: 'block',
  },
  gradientText: {
    display: 'block',
    background: 'linear-gradient(90deg, #FF6B35, #FFA726)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    marginBottom: '32px',
    maxWidth: '36rem',
    fontSize: '18px',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FF6B35',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  secondaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  buttonIcon: {
    fontSize: '20px',
  },
  statsContainer: {
    marginTop: '48px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    maxWidth: '28rem',
  },
  statItem: {
    textAlign: 'left',
  },
  statNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#FF6B35',
    margin: 0,
  },
  statLabel: {
    fontSize: '14px',
    color: 'rgba(255, 255, 255, 0.7)',
    margin: 0,
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    color: 'rgba(255, 255, 255, 0.7)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  scrollText: {
    fontSize: '14px',
  },
  arrowIcon: {
    fontSize: '24px',
  },
  imageIndicators: {
    position: 'absolute',
    bottom: '32px',
    right: '32px',
    display: 'flex',
    gap: '8px',
  },
  indicator: {
    height: '8px',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default Hero;