import { useState, useEffect } from "react"
import '../Styles/ImageSlider.css'

export default function ImageSlider ({imageUrls}) {

    const [imageIndex, setImageIndex] = useState(0)

    useEffect (() => {
        const interval = setInterval (() => {
            setImageIndex ((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000);
        
        return () => clearInterval(interval);
    },[imageUrls.length]);
    return (
        <>
            <div className="img-slider">
                <div className="imgSlider-cont">
                    {imageUrls.map(url => (
                        <img key={url} src={url} alt="pictures for image slider"  className="imgSlider-img" style={{
                        translate: `${-100 * imageIndex}%`
                        }}/> 
                    ))}
                </div>
                
            </div>
        </>
    )
}