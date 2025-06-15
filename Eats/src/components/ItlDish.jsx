import { useState } from "react";

export default function ItlDish({ img, dishName, desc }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={`food-card ${isHovered ? 'food-card-hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src={img.src} 
                alt={img.alt}
                className="food-card-img" 
            />
            <div className={`food-card-desc ${isHovered ? 'food-card-desc-visible' : ''}`}>
                <h3>{dishName}</h3>
                <p>{desc}</p>
            </div>

        </div>
    )
}