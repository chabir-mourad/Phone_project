import React from 'react'
import {Carousel} from 'react-bootstrap'

 function Slider() {
    return (
        <div>
            <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://targetyoutube.com/wp-content/uploads/2019/08/A-new-OPPO-Slider-Smartphone-Appeared-on-the-Renderers-1280x500.jpg"
              alt="First slide"
           
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://iphonesoft.fr/images/_012019/concept-iphone-x2-2019.jpg"
              alt="Second slide"
             
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv5IfuVanYvskYmRwZIRksmHK5HFBVFBfOKNWMMaGffGuKrTAk&usqp=CAU"
              alt="Third slide"
            
            />
          </Carousel.Item>
        </Carousel>
            
        </div>
    )
}
export default Slider