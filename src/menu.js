import React from 'react';
import Burger from './images/Burger.jpg';
import NavComponent from './components/NavComponent';
import {Link} from 'react-router-dom';
import BBLogo3 from "./images/BBLogo3.png";
import FBLogo from "./images/FBLogo.png";
import DDIcon from "./images/DoorDashIcon.png";
import BBLogo1 from "./images/BBLogo1.png";
import chickenBurger from "./images/chickenBurger.jpg";
import sandwiches from "./images/sandwiches.jpg";
import chili from "./images/chili.jpg";
import hotdog from "./images/hotdog.jpg";
import salads from "./images/salads.jpg";
import milkshake from "./images/milkshake.jpg";
import soda from "./images/soda.jpg";
import sides from "./images/sides.jpg";
import './App.css';

function Menu() {
    return(
        <div>
            <header className='header'>
                <NavComponent />
                <img src= {BBLogo3} alt="Barney's Burgers" className='app-logo'/>
                <nav className='socialMediaLogos'>
                <Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/"><img src= {DDIcon} alt="DoorDash Logo" className='DDlogo'/></Link>
                <Link to='https://www.facebook.com/barneysbetterburgers'><img src= {FBLogo} alt="Facebook Logo" className='FBlogo'/></Link>
                </nav>
            </header>
            <main className="menuPage"> 
                <aside className= 'sideMenu'>
                    <h3><Link to="/menu" style={{color: "rgb(35, 33, 33)"}}>Our Menu</Link></h3>
                        <ul>
                            <li><Link to="/burgerMenu" style={{color: "firebrick", textDecoration: "none" }}>Burgers</Link></li>
                            <li><Link to="/chickenBurgerMenu" style={{color: "firebrick", textDecoration: "none" }}>Chicken Burgers</Link></li>
                            <li><Link to="/sandwichMenu" style={{color: "firebrick", textDecoration: "none" }}>Sandwiches</Link></li>
                            <li><Link to="/chiliMenu" style={{color: "firebrick", textDecoration: "none" }}>Chili</Link></li>
                            <li><Link to="/dogsMenu" style={{color: "firebrick", textDecoration: "none" }}>Dogs</Link></li>
                            <li><Link to="/saladMenu" style={{color: "firebrick", textDecoration: "none" }}>Salads & Extras</Link></li>
                            <li><Link to="/sidesMenu" style={{color: "firebrick", textDecoration: "none" }}>Sides</Link></li>
                            <li><Link to="/shakesMenu" style={{color: "firebrick", textDecoration: "none" }}>Milkshakes & Malts</Link></li>
                            <li><Link to="/sodaMenu" style={{color: "firebrick", textDecoration: "none" }}>Sodas</Link></li>
                        </ul>
                </aside>
                <div className='menuCategories'>
                    <h2>Categories</h2>
                    <div className="categoryContainer1">
                    <div id='burgers'><Link to="/burgerMenu"><img id='categoryImg' src={Burger}/></Link><h3>Burgers</h3></div>
                    <div id='burgers'><Link to="/chickenBurgerMenu"><img id='categoryImg' src={chickenBurger}/></Link><h3>Chicken Burgers</h3></div>
                    <div id='burgers'><Link to="/sandwichMenu"><img id='categoryImg' src={sandwiches}/></Link><h3>Sandwiches</h3></div>
                    </div>
                    <div className="categoryContainer2">
                    <div id='burgers'><Link to="/chiliMenu"><img id='categoryImg' src={chili}/></Link><h3>Chili</h3></div>
                    <div id='burgers'><Link to="/dogsMenu"><img id='categoryImg' src={hotdog}/></Link><h3>Dogs</h3></div>
                    <div id='burgers'><Link to="/saladMenu"><img id='categoryImg' src={salads}/></Link><h3>Salads & Extras</h3></div>
                    </div>
                    <div className="categoryContainer3">
                    <div id='burgers'><Link to="/sidesMenu"><img id='categoryImg' src={sides}/></Link><h3>Sides</h3></div>
                    <div id='burgers'><Link to="/shakesMenu"><img id='categoryImg' src={milkshake}/></Link><h3>Milkshakes & Malts</h3></div>
                    <div id='burgers'><Link to="/sodaMenu"><img id='categoryImg' src={soda}/></Link><h3>Sodas</h3></div>
                    </div>
                </div>
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
    )
}

export default Menu;