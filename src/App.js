import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation Menu */}
      <nav 
        className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navigation__container">
          {/* Logo */}
          <div className="navigation__logo">
            <a href="#home" className="navigation__logo-link">
              BrandName
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="navigation__menu navigation__menu--desktop">
            {navItems.map((item, index) => (
              <li key={index} className="navigation__item">
                <a
                  href={item.href}
                  className="navigation__link"
                  onClick={handleNavClick}
                  aria-current={item.name === 'Home' ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="navigation__toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            <span className={`navigation__hamburger ${isMobileMenuOpen ? 'navigation__hamburger--active' : ''}`}>
              <span className="navigation__hamburger-line"></span>
              <span className="navigation__hamburger-line"></span>
              <span className="navigation__hamburger-line"></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`navigation__mobile-menu ${isMobileMenuOpen ? 'navigation__mobile-menu--open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="navigation__menu navigation__menu--mobile">
            {navItems.map((item, index) => (
              <li key={index} className="navigation__item">
                <a
                  href={item.href}
                  className="navigation__link"
                  onClick={handleNavClick}
                  aria-current={item.name === 'Home' ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Landing Page</h1>
            <p className="hero-description">
              Experience our interactive navigation menu with smooth transitions and responsive design.
            </p>
          </div>
        </section>

        <section id="features" className="content-section">
          <h2>Features</h2>
          <p>This section demonstrates the navigation menu's scroll behavior and shadow effect.</p>
        </section>

        <section id="pricing" className="content-section">
          <h2>Pricing</h2>
          <p>Scroll down to see the navigation menu's shadow effect when scrolled.</p>
        </section>

        <section id="about" className="content-section">
          <h2>About</h2>
          <p>The navigation menu remains fixed at the top with smooth transitions.</p>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <p>Test the mobile hamburger menu by resizing your browser window.</p>
        </section>
      </main>
    </div>
  );
};

export default App;