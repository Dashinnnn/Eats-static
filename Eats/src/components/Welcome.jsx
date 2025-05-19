import { useState } from "react"
import '../Styles/Welcome.css'

export default function Welcome () {
    // const  [isVisible, setIsVisible] = useState(true);
    // if (!isVisible) return null 

    return (       
        <>
            <div className="welcome-cont">
                <div className="welcome-content">
                    <div className="welcome-header">
                        <h2>Welcome!</h2>
                        {/* <button
                            onClick={() => setIsVisible(false)}
                            className="close-btn"
                        >
                            ✕
                        </button> */}
                    </div>
                        <div className="welcome-text">
                            <p className="welcome-text">Thank you for visiting <span className="highlight">Eats!</span> Explore tons of recipe and please enjoy your stay.</p>
                        </div>

                        <div className="get-started-btn">
                            <button className="start-btn">
                                Get Started!
                            </button>
                        </div>    
                </div>
            </div>
        </>
    )
}