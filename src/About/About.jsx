import './About.css';
import woodpressMachineImage from './assets/Woodpress_Machine.png';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-content fade-in-up">
            <div className="section-header">
              <h2>Our Story</h2>
              <p>Traditional craftsmanship meets modern quality</p>
            </div>
            <div className="about-text">
              <p>Founded in 2017, Nalam Woodpress Oils began with a simple mission: to bring the authentic taste and health benefits of traditionally cold-pressed oils to modern households.</p>
              <p>Our journey started in a small workshop where our founder, S. Ravi, learned the ancient art of wood-pressing from his grandfather. This traditional technique, passed down through generations, ensures that our oils retain their natural flavor, aroma, and nutritional properties without the use of heat or chemicals.</p>
              <p>Today, we continue to honor this heritage by using time-tested methods combined with modern quality controls. Every batch of our oil is carefully crafted to meet the highest standards of purity and excellence.</p>
              <div className="mission-values">
                <div className="value fade-in-up delay-1">
                  <h4>Our Mission</h4>
                  <p>To provide pure, natural, and nutritious oils that promote healthy living and preserve traditional wisdom.</p>
                </div>
                <div className="value fade-in-up delay-2">
                  <h4>Our Values</h4>
                  <p>Quality, authenticity, sustainability, and customer satisfaction guide everything we do.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image fade-in-up delay-1">
            <div className="image-placeholder">
              <div className="oil-process-image">
                <img
                  src={woodpressMachineImage}
                  alt="Traditional Woodpress Oil Extraction Machine"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;