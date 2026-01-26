import { useState, useEffect } from 'react';
import './Header.css';
import Logo from './Nalam_Logo.png';

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-nav">
            <div className="nav-brand">
                <div className="logo-container">
                    <img src={Logo} alt="Nalam Woodpress Oils Logo" className="logo" />
                </div>
                <div className="brand-info">
                    <h1>Nalam Woodpress Oils</h1>
                    <p>Pure & Natural Cold-Pressed Oils</p>
                </div>
            </div>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <ul className="nav-list">
                    <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
                    <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
                    <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Customer's Review</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
            </nav>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
        </div>
    </header>);
}

export default Header;