import { useState } from 'react';

//imported components
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Welcome from './components/Welcome';
import WhyEats from './components/WhyEats';
import FlDish from './components/FlDish';
import ItlDish from './components/itlDish';
import ChDish from './components/chDish';
import Footer from './components/Footer';
import './App.css';

//Imported images for img slider
import slide1 from './assets/slide1.jpg';
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';

//Imported files for dish contents
import flFood from './properties/flProperties';
import itlFood from './properties/itlProperties';
import chFood from './properties/chProperteis';

const arrImg = [slide1, slide2, slide3, slide4];
const cardWidth = 16; 
const gap = 1.5; 
const totalStep = cardWidth + gap;
const visibleWidth = (cardWidth * 3) + (gap * 2); 

function App() {
  const [flCurrentIndex, setFlCurrentIndex] = useState(0);
  const [flTranslateX, setFlTranslateX] = useState(0);

  const [itlCurrentIndex, setItlCurrentIndex] = useState(0);
  const [itlTranslateX, setItlTranslateX] = useState(0)

  const [chCurrentIndex, setChCurrentIndex] = useState(0);
  const [chTranslateX, setChTranslateX] = useState(0);

  const handlePrevFl = () => {
    const newIndex = flCurrentIndex === 0 ? flFood.length - 3 : flCurrentIndex - 1;
    setFlCurrentIndex(newIndex);
    setFlTranslateX(-newIndex * totalStep);
  };

  const handleNextFl = () => {
    const newIndex = flCurrentIndex >= flFood.length - 3 ? 0 : flCurrentIndex + 1;
    setFlCurrentIndex(newIndex);
    setFlTranslateX(-newIndex * totalStep);
  };

  const handlePrevItl = () => {
    const newIndex = itlCurrentIndex === 0 ? itlFood.length - 3 : itlCurrentIndex - 1;
    setItlCurrentIndex(newIndex)
    setItlTranslateX(-newIndex * totalStep)
  };

  const handleNextItl = () => {
    const newIndex = itlCurrentIndex >= itlFood.length - 3 ? 0 : itlCurrentIndex + 1;
    setItlCurrentIndex(newIndex)
    setItlTranslateX(-newIndex * totalStep);
  };

  const handlePrevCh = () => {
    const newIndex = chCurrentIndex === 0 ? chFood.length - 3 : chCurrentIndex - 1;
    setChCurrentIndex(newIndex)
    setChTranslateX(-newIndex * totalStep) 
  };

  const handleNextCh = () => {
    const newIndex = chCurrentIndex >= chFood.length - 3 ? 0 : chCurrentIndex + 1;
    setChCurrentIndex(newIndex)
    setChTranslateX(-newIndex * totalStep);
  }

  const visibleCardsFl = flFood.map((dish, index) => (
    <FlDish
      key={dish.id}
      dishName={dish.dishName}
      img={dish.img}
      desc={dish.desc}
      isHighlighted={flCurrentIndex <= index && index < flCurrentIndex + 3 && index === flCurrentIndex + 1}
    />
  ));

  const visibleCardsItl = itlFood.map((dish, index) => (
    <ItlDish
      key={dish.id}
      dishName={dish.dishName}
      img={dish.img}
      desc={dish.desc}
      isHighlighted={itlCurrentIndex <= index && index < itlCurrentIndex + 3 && index === itlCurrentIndex + 1}
    />
  ));

  const visibleCardsCh = chFood.map((dish, index) => (
    <ChDish
      key={dish.id}
      dishName={dish.dishName}
      img={dish.img}
      desc={dish.desc}
      isHighlighted={chCurrentIndex <= index && index < chCurrentIndex + 3 && index === chCurrentIndex + 1}
    />
  ))

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
          <div className="food-cards-nav">
            <button className="nav-button" onClick={handlePrevFl}>
              ←
            </button>
            <div className="food-cards-slider" style={{ width: `${visibleWidth}rem` }}>
              <div className="food-cards-grid" style={{ transform: `translateX(${flTranslateX}rem)` }}>
                {visibleCardsFl}
              </div>
            </div>
            <button className="nav-button" onClick={handleNextFl}>
              →
            </button>
          </div>
        </div>

        <div className="food-cards-container">
          <h2 className="food-cards-title">Italian Dish</h2>
            <div className="food-cards-nav">
              <button className="nav-button" onClick={handlePrevItl}>
                ←
              </button>
              <div className="food-cards-slider" style={{width: `${visibleWidth}rem` }}>
                <div className="food-cards-grid" style={{ transform: `translateX(${itlTranslateX}rem)` }}>
                  {visibleCardsItl}
                </div>
              </div>
              <button className="nav-button" onClick={handleNextItl}>
                →
              </button>
          </div>
        </div>

        <div className="food-cards-container">
          <h2 className="food-cards-title">Chinese Dish</h2>
            <div className="food-cards-nav">
              <button className="nav-button" onClick={handlePrevCh}>
                ←
              </button>
              <div className="food-cards-slider" style={{width: `${visibleWidth}rem`}}>
                <div className="food-cards-grid" style={{transform: `translateX(${chTranslateX}rem)`}}>
                  {visibleCardsCh}
                </div>
              </div>
              <button className="nav-button" onClick={handleNextCh}>
                →
              </button>
            </div>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  );
}

export default App;