import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../Slider/Slider.css'

 function Slider() {
    return (
        
           <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.frandroid.com/wp-content/uploads/2020/03/samsung-galaxy-s20-s20-plus-et-s20-ultra-scaled.jpg"
              alt="First_slide"
           
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
              className="d-block w-100"
              src="https://iphonesoft.fr/images/_012019/concept-iphone-x2-2019.jpg"
              alt="Second_slide"
             
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.cowcotland.com/images/news/2020/04/smartphone-apple-iphone-se-2020-489-euros-3.jpg"
              alt="Third_slide"
            
            />
          </Carousel.Item>
        </Carousel>
            
     
    )
}
export default Slider