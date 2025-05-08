import Navbar from './components/Navbar'
import ImageSlider from './components/ImageSlider'
import Welcome from './components/Welcome'
import './App.css'

//Imported images for img slider

import slide1 from './assets/slide1.jpg'
import slide2 from './assets/slide2.jpg'
import slide3 from './assets/slide3.jpg'
import slide4 from './assets/slide4.jpg'


const arrImg = [slide1, slide2, slide3, slide4];

function App() {
  

  return (
    <>
      <Navbar/>

      <div className="sliderCont">
        <ImageSlider imageUrls={arrImg}/>
      </div>
      
      <Welcome />
      <div className="bg-border">
        <hr />
      </div>

      <div className="eats-main-content">
      </div>
    </>
  )
}

export default App
