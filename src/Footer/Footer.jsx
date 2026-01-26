import './Footer.css';
import Logo from '../Header/Nalam_Logo.png';

function Footer(){
    return(
        <footer className="shop-footer" id="contact">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-column fade-in-up">
              <div className="footer-logo">
                <img src={Logo} alt="Nalam Woodpress Oils Logo" />
                <h3>Nalam Woodpress Oils</h3>
              </div>
              <p>Premium cold-pressed wood oils made with traditional methods and modern quality standards.</p>
            </div>

            <div className="footer-column fade-in-up delay-1">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#testimonials">Customer's Review</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column fade-in-up delay-2">
              <h4>Our Products</h4>
              <ul>
                <li>Groundnut Oil</li>
                <li>Gingelly Oil (Sesame Oil)</li>
                <li>Coconut Oil</li>
                <li>Other Varieties</li>
              </ul>
            </div>

            <div className="footer-column fade-in-up delay-3">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p><strong>Owner:</strong> S.Ravi</p>
                <p><strong>Phone:</strong> <a href="tel:+917010423027">+91 7010423027</a></p>
                <p><strong>Address:</strong> 29, Karpagavalli Nagar, Molachur - 602106</p>
                <p><strong>Hours:</strong> Everyday: 8AM-9PM</p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <p>&copy; {new Date().getFullYear()} Nalam Woodpress Oils. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;