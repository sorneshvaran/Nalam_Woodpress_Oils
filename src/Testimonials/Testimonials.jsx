import { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Regular Customer",
      text: "The quality of Nalam's groundnut oil is exceptional. My family has been using it for cooking for over 2 years now, and we love the taste. It's truly authentic wood-pressed oil that makes all the difference in our daily meals.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Health Enthusiast",
      text: "Their sesame oil has a rich aroma and taste that reminds me of my grandmother's cooking. Truly authentic wood-pressed oil! I appreciate the commitment to traditional methods and natural ingredients.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Vijay Patel",
      role: "Cooking Expert",
      text: "I've tried many brands, but nothing compares to Nalam's coconut oil. It's pure, natural, and has amazing health benefits. The difference in taste and quality is unmistakable in my kitchen.",
      rating: 5,
      avatar: "VP"
    },
    {
      name: "Meera Nair",
      role: "Nutritionist",
      text: "As a nutritionist, I recommend Nalam's oils to my clients. The cold-pressed extraction method preserves all the essential nutrients, making it a healthier choice for families.",
      rating: 5,
      avatar: "MN"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>What Our Customers Say</h2>
          <p>Hear from people who trust our products</p>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card card fade-in-up">
            <div className="testimonial-avatar">
              <div className="avatar-initials">{testimonials[currentIndex].avatar}</div>
            </div>
            <div className="rating">
              {'★'.repeat(testimonials[currentIndex].rating)}
            </div>
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <div className="customer-info">
              <h4 className="customer-name">{testimonials[currentIndex].name}</h4>
              <p className="customer-role">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button className="nav-btn prev-btn" onClick={prevTestimonial}>‹</button>
            <button className="nav-btn next-btn" onClick={nextTestimonial}>›</button>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;