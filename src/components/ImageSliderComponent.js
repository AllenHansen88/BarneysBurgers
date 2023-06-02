import React, {useState, useEffect} from 'react';
import CateringImage from '../images/CateringImage.jpg';
import DoorDashImage from '../images/DoorDashImage.jpg';
import FoodDisplay from '../images/FoodDisplay.jpg';
import GiftCards from '../images/GiftCards.png';
import InsideResturant from '../images/InsideResturant.jpg';
import LeftArrow from '../images/LeftArrow.png';
import RightArrow from '../images/RightArrow.png';
import '../App.css';

function ImgSlider() {

    const [index, setIndex] = useState(0);
    
    const sliderImgArray = [
        FoodDisplay, InsideResturant, DoorDashImage, GiftCards, CateringImage
    ];

    const indexValue = sliderImgArray[index];

    useEffect(() => {
       const intervalId = setInterval(() => {
            if (index < 4) {
                setIndex((prev) => prev + 1)
              } else setIndex(0)
        }, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
      });

      const handleClickNext = () => {
        if (index < 4) {
        setIndex((prev) => (prev + 1))
      } else {
        setIndex(0)
    }};


    const handleClickPrevious = () => {
        if (index > 0) {
        setIndex((prev) => (prev - 1))
      } else {
        setIndex(4)
    }}; 
   
    return (
        <div>  
            <section className= 'sliderContainer'>    
                <img className='sliderImages' src={indexValue} alt='Slider for Images'/>
                <div className='sliderButtons'>
                <button className='leftButton' onClick={handleClickPrevious}><img className='leftArrow' src={LeftArrow} alt='Left Button'/></button>
                <button className='rightButton' onClick={handleClickNext}><img className='rightArrow' src={RightArrow} alt='Right Button'/></button>
                </div>
            </section>
        </div>
    );
}

export default ImgSlider;
