import './Card.css';
import Groundnut_Oil_1L from '../assets/Groundnut_Oil_1L.png';
import Nalam_Groundnut_Oil_5L from '../assets/Nalam_Groundnut_Oil_5L.png';
import Nalam_Groundnut_Oil_3L from '../assets/Nalam_Groundnut_Oil_3L.png';
import Gingelly_Oil_1L from '../assets/Gingelly_Oil_1L.png';
import Coconut_Oil_500ml from '../assets/Coconut_Oil_500ml.png';
import Rock_Salt from '../assets/Rock_Salt.png';
import Rock_Salt_Powder from '../assets/Rock_Salt_Powder.png';
import Nalam_Jaggery_Powder from '../assets/Nalam_Jaggery_Powder.png';

function Card(){
    // Define products data
    const products = [
        {
            id: 1,
            name: "Groundnut Oil",
            image: Groundnut_Oil_1L,
            quantity: "½L",
            price: "₹125",
            category: "cooking"
        },
        {
            id: 2,
            name: "Groundnut Oil",
            image: Groundnut_Oil_1L,
            quantity: "1L",
            price: "₹250",
            category: "cooking"
        },
        {
            id: 3,
            name: "Groundnut Oil",
            image: Nalam_Groundnut_Oil_5L,
            quantity: "3L",
            price: "₹750",
            category: "cooking"
        },
        {
            id: 4,
            name: "Groundnut Oil",
            image: Nalam_Groundnut_Oil_3L,
            quantity: "5L",
            price: "₹1200",
            category: "cooking"
        },
        {
            id: 5,
            name: "Gingelly Oil (Sesame Oil)",
            image: Gingelly_Oil_1L,
            quantity: "½L",
            price: "₹200",
            category: "cooking"
        },
        {
            id: 6,
            name: "Gingelly Oil (Sesame Oil)",
            image: Gingelly_Oil_1L,
            quantity: "1L",
            price: "₹400",
            category: "cooking"
        },
        {
            id: 7,
            name: "Coconut Oil",
            image: Coconut_Oil_500ml,
            quantity: "½L",
            price: "₹220",
            category: "cooking"
        },
        {
            id: 8,
            name: "Coconut Oil",
            image: Coconut_Oil_500ml,
            quantity: "1L",
            price: "₹440",
            category: "cooking"
        },
        {
            id: 9,
            name: "Nalam Rock Salt",
            image: Rock_Salt,
            quantity: "500g",
            price: "₹65",
            category: "cooking"
        },
        {
            id: 10,
            name: "Nalam Rock Salt Powder",
            image: Rock_Salt_Powder,
            quantity: "500g",
            price: "₹65",
            category: "cooking"
        },
        {
            id: 11,
            name: "Nalam Jaggery",
            image: Nalam_Jaggery_Powder,
            quantity: "500g",
            price: "₹50",
            category: "cooking"
        },
    ];

    return(
        <div className="product-grid">
            {products.map((product, index) => (
                <div className="product-card card fade-in-up" style={{animationDelay: `${index * 0.1}s`}} key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                        <div className="quantity-badge">
                            <span>{product.quantity}</span>
                        </div>
                    </div>
                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-price">
                            <span className="price">{product.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;