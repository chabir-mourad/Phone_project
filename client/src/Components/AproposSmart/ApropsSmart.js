import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import './AproposSmart.css'
import Navbarmenu from '../Navbarmenu/Navbarmenu'

 function ApropSmart() {
    return (
        <Fragment>

      <Navbarmenu/>
        <div className="essai">
            <h1> About Us</h1>
            <h4 className='question1'> WHAT WE DO ?</h4>
            <p className="parag"> SmartTech gives you a chance to quickly and easily find the phone you want and have it delivered to your home in no time, regardless of your location, as long as it is in one of the countries of the EU.</p>
            <h3 className ='question1'> WHY DO CUSTOMERS LOVE US?</h3>
            <p className="parag"> We have been in the business for quite a while now, and it that time we have not only managed to make close relationships with numerous suppliers all over the world, but also to recognize what people need. This means that we are always able to offer all the latest phones, great prices, reliable service, fast delivery and premium customer support.</p>
            <h1> The Story</h1>
            <h3 className="question2"> BEGINNING</h3>
            <p className="parag"> SmartTech website was launched in 2011, but its story actually began some 8 years before that when a group of college friends decided to go into business together. We started selling phones in shops, but our combined ambition, drive and abilities soon made us look for new challenges and new markets. Starting an online shop provided for both and allowed us to develop a strong international presence in a number of EU countries</p> 
       <h3 className="question2"> TODAY</h3>
       <p className="parag"> Collective experience of our team members and the years we have spent in the business allowed us to develop a vast network of suppliers, ensuring that our customers will always find what they are looking for. This also means that we are able to offer great prices, which are constantly being updated and follow the shifts in the market.</p>
       <p className="parag"> Our affordability, fast and reliable delivery, and the fact that you will always be able to find the phone that you are looking for in our offer, have made us stand out in the market, but they are simply symptoms of our dedication to what we are doing and our desire to constantly keep improving. We know that in order to do that, we need to keep in close touch with our customers and listen to their suggestions and critiques. This is why our customer service, which is always there to answer any question that you may have, is just as willing to listen as it is to inform.</p>
       <Footer/>
        </div>
        </Fragment>
    )
}
export default ApropSmart