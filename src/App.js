import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import BBLogo3 from "./images/BBLogo3.png";
import FBLogo from "./images/FBLogo.png";
import DDIcon from "./images/DoorDashIcon.png";
import BBLogo1 from "./images/BBLogo1.png";
import NavComponent from './components/NavComponent';
import ImgSlider from './components/ImageSliderComponent';
import DoorDash from "./images/WideDoorDash.jpg";
import OutsideStore from "./images/OutsideStore.jpg";
import BurgerAndFries from "./images/BurgerAndFries.jpg"; 
import Menu from "./menu";
import BurgerMenu from './burgerMenu';
import ChickenBurgerMenu from './chickenBurgerMenu';
import SandwichMenu from './sandwichMenu';
import ChiliMenu from './chiliMenu';
import DogsMenu from './dogsMenu';
import SaladMenu from './saladMenu';
import SidesMenu from './sidesMenu';
import ShakesMenu from './shakesMenu';
import SodaMenu from './sodaMenu';
import Locations from './locations';
import Gallery from './gallery';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
          <Route path="/burgerMenu" element={<BurgerMenu />} />
          <Route path="/chickenBurgerMenu" element={<ChickenBurgerMenu />} />
          <Route path="/sandwichMenu" element={<SandwichMenu />} />
          <Route path="/chiliMenu" element={<ChiliMenu />} />
          <Route path="/dogsMenu" element={<DogsMenu />} />
          <Route path="/saladMenu" element={<SaladMenu />} />
          <Route path="/sidesMenu" element={<SidesMenu />} />
          <Route path="/shakesMenu" element={<ShakesMenu />} />
          <Route path="/sodaMenu" element={<SodaMenu />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <header className='header'>
        <NavComponent />
        <img src= {BBLogo3} alt="Barney's Burgers" className='app-logo'/>
        <nav className='socialMediaLogos'>
        <Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/"><img src= {DDIcon} alt="DoorDash Logo" className='DDlogo'/></Link>
        <Link to='https://www.facebook.com/barneysbetterburgers'><img src= {FBLogo} alt="Facebook Logo" className='FBlogo'/></Link>
        </nav>
      </header> 
      <ImgSlider />
      <h1 className='BFSOhMyQuote'>"Burgers & Fries & Shakes, Oh My!"</h1>
      <p id='satisfiedCustomer'>- Satisfied Customer</p>
      <div className='DDContainer'>
        <img src= {DoorDash} alt="DoorDash picture" className='doorDashImg'/>
      </div>
      <div className='DDButtonContainer'>
        <button id='DDOrderNow'><Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/" style={{color: "rgb(69, 108, 251)", textDecoration: "none"}}>Order Now</Link></button>
      </div>
      <section className='asideHomePageElements'>
        <aside className='asideLocations'>
          <img id='outsideStoreImg' src= {OutsideStore} alt='Outside store view'/>
          <h1 id='asideH1'>VISIT OUR RESTAURANTS</h1>
          <p><strong>SUNDAY - SATURDAY</strong> 11AM - 6:00 PM</p>
          <p><a href="https://bit.ly/42j1fgJ">415 N Riverside Ave, Medford OR 97501</a></p> 
          <p><a href="https://bit.ly/42j4Hbb">1850 Biddle Rd, Medford OR 97504</a></p>
          <Link to="/locations"><button id="asideLocationsButton"><strong>HOURS & LOCATIONS</strong></button></Link>
        </aside>
        <aside className='asideMenu'>
          <img id='burgerAndFriesImg' src= {BurgerAndFries} alt='Burger & Fries'/>
          <h1 id='asideH1'>CHECK OUT OUR MENU</h1>
          <p><Link to="/menu" style={{color: "firebrick"}}>FOOD</Link></p>
          <p><Link to="/shakesMenu" style={{color: "firebrick"}}>MILKSHAKES & MALTS</Link></p>
          <p><Link to="/sodaMenu" style={{color: "firebrick"}}>SODA</Link></p>
          <Link to="/menu"><button id="asideLocationsButton"><strong>FULL MENU</strong></button></Link>
        </aside>
      </section>
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
