import React, {useState} from 'react';
import "./App.css";
import {Link} from 'react-router-dom';
import NavComponent from './components/NavComponent';
import BBLogo3 from "./images/BBLogo3.png";
import FBLogo from "./images/FBLogo.png";
import DDIcon from "./images/DoorDashIcon.png";
import BBLogo1 from "./images/BBLogo1.png";
import chickenBurger from "./images/chickenBurger.jpg";
import sandwiches from "./images/sandwiches.jpg";
import chili from "./images/chili.jpg";
import hotdog from "./images/hotdog.jpg";
import salads from "./images/salads.jpg";
import RightArrow from "./images/RightArrow.png";
import LeftArrow from "./images/LeftArrow.png";

export default function Gallery() {
    const [galleryIndex, setgalleryIndex] = useState(0);
const [stringIndex, setstringIndex] = useState(0);

const galleryArray = [chickenBurger, sandwiches, chili, hotdog, salads];
const galleryStrings = ["Chicken Burger description here", "Sandwich description here", "Chili description here", "Hotdog description here", "Salad description here"];

const galleryImage = galleryArray[galleryIndex];
const stringArray = galleryStrings[stringIndex];

const handleClickNext = () => {
    if (galleryIndex < 4) {
        setgalleryIndex((prev) => (prev + 1))
    } else {
        setgalleryIndex(0)
    }
    
    if (stringIndex < 4) {
        setstringIndex((prev) => (prev + 1))
    } else {
        setstringIndex (0)
    }
};


const handleClickPrevious = () => {
    if (galleryIndex > 0) {
        setgalleryIndex((prev) => (prev - 1))
    } else {
        setgalleryIndex(4)
    }

    if (stringIndex > 0) {
        setstringIndex((prev) => (prev - 1))
    } else {
        setstringIndex(4)
    }

}; 

return(
    <div>
        <header className='galleryHeader'>
                <NavComponent />
                <img src= {BBLogo3} alt="Barney's Burgers" className='app-logo'/>
                <nav className='socialMediaLogos'>
                <Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/"><img src= {DDIcon} alt="DoorDash Logo" className='DDlogo'/></Link>
                <Link to='https://www.facebook.com/barneysbetterburgers'><img src= {FBLogo} alt="Facebook Logo" className='FBlogo'/></Link>
                </nav>
        </header> 
        <main className='galleryContainer'>
            <h1>Barneys Burgers Gallery</h1>
            <section className="galleryImageContainer">
                <img className='galleryLeftArrow' src={LeftArrow} alt='Left Button' onClick={handleClickPrevious}/>
                <img className="galleryImage" src={galleryImage} alt="galleryImage" />
                <img className='galleryRightArrow' src={RightArrow} alt='Right Button' onClick={handleClickNext}/>
            </section>
            <p>{stringArray}</p>
        </main>
        <footer className="homeFooter">
            <img id='footerLogo' src= {BBLogo1} alt='Barneys Burgers Icon'/>
            <section className='footerContact'>
            <h1>Contact Us</h1>
            <ul className='footerList1'>
                <li>Riverside Location:  <a href="tel:15417704678">(541) 770-4678</a></li>
                <li>Biddle Location: <a href="tel:15415001092">(541) 500-1092</a></li>
            </ul>
            </section>
            <section className='footerAbout'>
            <h1>Follow Us</h1>
            <ul className='footerList2'>
                <li><Link to='https://www.facebook.com/barneysbetterburgers'><img src= {FBLogo} alt="Facebook Logo" className='FBFooterLogo'/></Link></li>
            </ul>
            </section>
            <section className='footerInfo'>
            <h1>Additional Info</h1>
            <ul className='footerList3'>
                <li style={{textDecoration: "underline"}}>Web Designer</li>
                <li style={{fontFamily: "'Splash', cursive"}}>Hansen Web Design</li>
            </ul>
            </section>
        </footer>
    </div>

);
}