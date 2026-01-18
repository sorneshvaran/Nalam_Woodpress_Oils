import './Card.css';

function Card(){
    // Define products data
    const products = [
        {
            id: 1,
            name: "Groundnut Oil",
            image: "/src/Card/Groundnut_Oil_1L.png",
            quantity: "½L",
            price: "₹125",
            category: "cooking"
        },
        {
            id: 2,
            name: "Groundnut Oil",
            image: "/src/Card/Groundnut_Oil_1L.png",
            quantity: "1L",
            price: "₹250",
            category: "cooking"
        },
        {
            id: 3,
            name: "Groundnut Oil",
            image: "/src/Card/Groundnut_Oil_1L.png",
            quantity: "3L",
            price: "₹750",
            category: "cooking"
        },
        {
            id: 4,
            name: "Groundnut Oil",
            image: "/src/Card/Groundnut_Oil_1L.png",
            quantity: "5L",
            price: "₹1200",
            category: "cooking"
        },
        {
            id: 5,
            name: "Gingelly Oil (Sesame Oil)",
            image: "/src/Card/Gingelly_Oil_1L.png",
            quantity: "½L",
            price: "₹200",
            category: "cooking"
        },
        {
            id: 6,
            name: "Gingelly Oil (Sesame Oil)",
            image: "/src/Card/Gingelly_Oil_1L.png",
            quantity: "1L",
            price: "₹400",
            category: "cooking"
        },
        {
            id: 7,
            name: "Coconut Oil",
            image: "/src/Card/Coconut_Oil_500ml.png",
            quantity: "½L",
            price: "₹220",
            category: "cooking"
        },
        {
            id: 8,
            name: "Coconut Oil",
            image: "/src/Card/Coconut_Oil_500ml.png",
            quantity: "1L",
            price: "₹440",
            category: "cooking"
        },
        {
            id: 9,
            name: "Nalam Rock Salt",
            image: "/src/Card/Rock_Salt.png",
            quantity: "500g",
            price: "₹65",
            category: "cooking"
        },
        {
            id: 10,
            name: "Nalam Rock Salt Powder",
            image: "/src/Card/Rock_Salt_Powder.png",
            quantity: "500g",
            price: "₹65",
            category: "cooking"
        },
        {
            id: 11,
            name: "Coconut Oil",
            image: "/src/Card/Coconut_Oil_500ml.png",
            quantity: "1L",
            price: "₹440",
            category: "cooking"
        },
        {
            id: 12,
            name: "Coconut Oil",
            image: "/src/Card/Coconut_Oil_500ml.png",
            quantity: "1L",
            price: "₹440",
            category: "cooking"
        }
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