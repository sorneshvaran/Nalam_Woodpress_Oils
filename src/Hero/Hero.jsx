import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content fade-in-up">
            <div className="hero-badge fade-in-up delay-1">Premium Quality Since 2017</div>
            <h1 className="fade-in-up delay-2">Authentic Cold-Pressed Wood Press Oils</h1>
            <p className="fade-in-up delay-3">Experience the traditional goodness of our premium wood-pressed oils. Made with time-honored techniques to preserve the natural flavor and nutritional benefits that your family deserves.</p>
            <div className="hero-buttons fade-in-up delay-4">
              <a href="#products" className="btn btn-primary">Explore Products</a>
              <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
            <div className="hero-stats fade-in-up delay-4">
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Natural</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">7+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
          <div className="hero-image fade-in-up delay-2">
            <div className="oil-bottle-display">
              <img src="/src/Card/Groundnut_Oil_1L.png" alt="Premium Wood Press Oil" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;