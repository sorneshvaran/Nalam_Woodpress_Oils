import './Products.css';
import Card from '../Card/Card.jsx';

function Products() {
  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Our Premium Collection</h2>
          <p>Discover our range of pure, wood-pressed oils</p>
        </div>

        <Card />
      </div>
    </section>
  );
}

export default Products;