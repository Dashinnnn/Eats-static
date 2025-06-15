//imported components
import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import Welcome from './components/Welcome'
import WhyEats from './components/WhyEats'
import FlDish from './components/FlDish'
import ItlDish from './components/itlDish'
import ChDish from './components/chDish'
import './App.css'

//Imported images for img slider
import slide1 from './assets/slide1.jpg'
import slide2 from './assets/slide2.jpg'
import slide3 from './assets/slide3.jpg'
import slide4 from './assets/slide4.jpg'

//Imported files for dish contents
import flFood from './properties/flProperties'
import itlFood from './properties/itlProperties'
import chFood from './properties/chProperteis'


const arrImg = [slide1, slide2, slide3, slide4];

function App() {
  return (
    <>
      <Navbar />

      <div className="sliderCont">
        <ImageSlider imageUrls={arrImg} />
      </div>
      
      <Welcome />
      <div className="bg-border"></div>

      <div className="eats-main-content">
        <div className="whyEats-white-bg">
          <div className="dashes">
            <div className="why-eats">
              <WhyEats />
            </div>
          </div>
        </div> 

        <div className="food-cards-container">
          <h2 className="food-cards-title">Filipino Dish</h2>
          <div className="food-cards-grid">
            {flFood.map((dish) => (
              <FlDish
                key={dish.id}
                dishName={dish.dishName}
                img={dish.img}
                desc={dish.desc}
              />
            ))}
          </div>
        </div>

        <div className="food-cards-container">
          <h2 className="food-cards-title">Italian Dish</h2>
          <div className="food-cards-grid">
            {itlFood.map((dish) => (
              <ItlDish
                key={dish.id}
                dishName={dish.dishName}
                img={dish.img}
                desc={dish.desc}
              />
            ))}
          </div>
        </div>

        <div className="food-cards-container">
          <h2 className="food-cards-title">Chinese Dish</h2>
          <div className="food-cards-grid">
            {chFood.map((dish) => (
              <ChDish
                key={dish.id}
                dishName={dish.dishName}
                img={dish.img}
                desc={dish.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App