import { useState } from "react"

export default function FlDish({ img, desc }) {
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
        <p>{desc}</p>
      </div>
    </div>
  )
}