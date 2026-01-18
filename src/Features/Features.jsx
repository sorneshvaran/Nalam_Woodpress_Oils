import './Features.css';

function Features() {
  const features = [
    {
      icon: "🌱",
      title: "Cold-Pressed Extraction",
      description: "Our traditional wood pressing method preserves the natural nutrients and flavors of the oil without using heat or chemicals."
    },
    {
      icon: "🌿",
      title: "Pure & Natural",
      description: "No additives, chemicals, or preservatives. Just pure, natural oils from quality seeds and nuts sourced locally."
    },
    {
      icon: "💪",
      title: "Rich in Nutrients",
      description: "Retains essential vitamins, minerals, and healthy fats that are beneficial for your health and well-being."
    },
    {
      icon: "🚚",
      title: "Freshly Made",
      description: "Made to order ensuring maximum freshness and optimal nutritional value delivered to your doorstep."
    },
    {
      icon: "🔬",
      title: "Quality Tested",
      description: "Every batch undergoes rigorous quality testing to ensure purity, freshness, and nutritional integrity."
    },
    {
      icon: "🌍",
      title: "Sustainable Process",
      description: "Environmentally friendly production methods that support sustainable farming and eco-conscious practices."
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Why Choose Our Oils?</h2>
          <p>Discover the benefits of our traditional wood pressed oils</p>
        </div>

        <div className="grid-3">
          {features.map((feature, index) => (
            <div className="card feature-card fade-in-up" style={{animationDelay: `${index * 0.1}s`}} key={index}>
              <div className="feature-icon">
                <span className="icon">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;