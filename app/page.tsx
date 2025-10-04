'use client';

import { useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';
import { 
  FaHome, 
  FaBuilding, 
  FaIndustry, 
  FaStar, 
  FaLeaf,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaDollarSign,
  FaUsers,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function CleaningService() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState<Language>('de');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const heroImages = [
    'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (placeholder)
    console.log('Form submitted:', formData);
    alert(t('thankYouMessage'));
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">{t('companyName')}</a>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>{t('home')}</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>{t('about')}</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>{t('services')}</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>{t('contact')}</a></li>
          </ul>
          <ul className={`mobile-nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => scrollToSection('home')}>{t('home')}</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>{t('about')}</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>{t('services')}</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>{t('contact')}</a></li>
            <button className="language-toggle" onClick={toggleLanguage}>
              <span className="flag">{language === 'de' ? '🇩🇪' : '🇺🇸'}</span>
              <span>{language === 'de' ? 'DE' : 'EN'}</span>
            </button>
          </ul>
          <button className="language-toggle" onClick={toggleLanguage}>
            <span className="flag">{language === 'de' ? '🇩🇪' : '🇺🇸'}</span>
            <span>{language === 'de' ? 'DE' : 'EN'}</span>
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="hero-content">
          <h1>{t('companyName')}</h1>
          <p className="tagline">{t('tagline')}</p>
          <a 
            href="#contact" 
            className="cta-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            {t('ctaButton')}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="section-title">{t('aboutTitle')}</h2>
          <p className="section-subtitle">
            {t('aboutSubtitle')}
          </p>
          <div className="about-content">
            <div className="about-text">
              <h3>{t('aboutHeading')}</h3>
              <p>
                {t('aboutText1')}
              </p>
              <p>
                {t('aboutText2')}
              </p>
              <p>
                {t('aboutText3')}
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.pexels.com/photos/4099123/pexels-photo-4099123.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Professional cleaning team at work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">{t('servicesTitle')}</h2>
          <p className="section-subtitle">
            {t('servicesSubtitle')}
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaHome />
              </div>
              <h3>{t('residentialTitle')}</h3>
              <p>
                {t('residentialDesc')}
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3>{t('officeTitle')}</h3>
              <p>
                {t('officeDesc')}
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaIndustry />
              </div>
              <h3>{t('industrialTitle')}</h3>
              <p>
                {t('industrialDesc')}
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaStar />
              </div>
              <h3>{t('deepTitle')}</h3>
              <p>
                {t('deepDesc')}
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaLeaf />
              </div>
              <h3>{t('ecoTitle')}</h3>
              <p>
                {t('ecoDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose">
        <div className="container">
          <h2 className="section-title">{t('whyTitle')}</h2>
          <p className="section-subtitle">
            {t('whySubtitle')}
          </p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <FaCheck />
              </div>
              <h3>{t('reliable')}</h3>
              <p>
                {t('reliableDesc')}
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaDollarSign />
              </div>
              <h3>{t('affordable')}</h3>
              <p>
                {t('affordableDesc')}
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>{t('experienced')}</h3>
              <p>
                {t('experiencedDesc')}
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>{t('ecoFriendly')}</h3>
              <p>
                {t('ecoFriendlyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('testimonialsTitle')}</h2>
          <p className="section-subtitle">
            {t('testimonialsSubtitle')}
          </p>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="testimonial-text">
                "{t('testimonial1')}"
              </p>
              <div className="testimonial-author">{t('testimonial1Author')}</div>
              <div className="testimonial-role">{t('testimonial1Role')}</div>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "{t('testimonial2')}"
              </p>
              <div className="testimonial-author">{t('testimonial2Author')}</div>
              <div className="testimonial-role">{t('testimonial2Role')}</div>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "{t('testimonial3')}"
              </p>
              <div className="testimonial-author">{t('testimonial3Author')}</div>
              <div className="testimonial-role">{t('testimonial3Role')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">{t('contactTitle')}</h2>
          <p className="section-subtitle">
            {t('contactSubtitle')}
          </p>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('fullName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t('fullNamePlaceholder')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('emailAddress')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t('emailPlaceholder')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                {t('sendMessage')}
              </button>
            </form>

            <div className="contact-info">
              <h3>{t('contactInfo')}</h3>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span className="contact-text">+49 (0) 123 456 7890</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span className="contact-text">info@ucsquare-clean.de</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">
                  Musterstraße 123<br />
                  12345 Berlin, Germany
                </span>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span className="contact-text">
                  {t('businessHours').split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < t('businessHours').split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092048731394!2d13.377684776019285!3d52.51663997202317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1704067200000!5m2!1sen!2sde"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UCSquare Clean Dienstleistung Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('companyName')}</h3>
            <p>
              {t('footerDesc')}
            </p>
            <p><strong>{t('phone')}:</strong> +49 (0) 123 456 7890</p>
            <p><strong>{t('email')}:</strong> info@ucsquare-clean.de</p>
          </div>
          
          <div className="footer-section">
            <h3>{t('servicesFooter')}</h3>
            <ul>
              <li><a href="#services">{t('residentialTitle')}</a></li>
              <li><a href="#services">{t('officeTitle')}</a></li>
              <li><a href="#services">{t('industrialTitle')}</a></li>
              <li><a href="#services">{t('deepTitle')}</a></li>
              <li><a href="#services">{t('ecoTitle')}</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>{t('businessHoursFooter')}</h3>
            <ul>
              <li>{t('mondayFriday')}</li>
              <li>{t('saturday')}</li>
              <li>{t('sunday')}</li>
              <li>{t('emergency')}</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>{t('legal')}</h3>
            <ul>
              <li><a href="/impressum">{t('impressum')}</a></li>
              <li><a href="/datenschutz">{t('privacyPolicy')}</a></li>
              <li><a href="/nutzungsbedingungen">{t('termsOfService')}</a></li>
              <li><a href="/versicherung">{t('insuranceInfo')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{t('footerCopyright')}</p>
        </div>
      </footer>
    </div>
  );
}