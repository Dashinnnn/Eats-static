import eatsLogo from '../assets/logo1.png'
import {useState, useEffect} from 'react';
import '../Styles/Navbar.css'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else { 
            setIsScrolled(false)
        }
    };

    useEffect (() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
        <div className={`mainNav ${isScrolled ? 'solid' : 'transparent'}`}>
                <div>
                <img src={eatsLogo} alt="Eats logo" className="logo" />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Simple Dish</li>
                    <li>Famous Dish</li>
                    <li>Dish of the Day</li>
                </ul>
            </div>
        </div>
        
            
        </>
    )
}