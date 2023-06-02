import React from 'react';
import NavComponent from './components/NavComponent';
import BBLogo3 from './images/BBLogo3.png';
import FBLogo from './images/FBLogo.png';
import DDIcon from './images/DoorDashIcon.png';
import BBLogo1 from './images/BBLogo1.png';
import './App.css';
import {Link} from 'react-router-dom';

export default function BurgerMenu() {
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
            <main className="menuPage"> 
                <aside className= 'sideMenu'>
                    <h3><Link to="/menu" style={{color: "rgb(35, 33, 33)", textDecoration: "none" }}>Our Menu</Link></h3>
                        <ul>
                            <li><Link to="/burgerMenu" style={{color: "firebrick"}}>Burgers</Link></li>
                            <li><Link to="/chickenBurgerMenu" style={{color: "firebrick", textDecoration: "none" }}>Chicken Burgers</Link></li>
                            <li><Link to="/sandwichMenu" style={{color: "firebrick", textDecoration: "none" }}>Sandwiches</Link></li>
                            <li><Link to="/chiliMenu" style={{color: "firebrick", textDecoration: "none"}}>Chili</Link></li>
                            <li><Link to="/dogsMenu" style={{color: "firebrick", textDecoration: "none" }}>Dogs</Link></li>
                            <li><Link to="/saladMenu" style={{color: "firebrick", textDecoration: "none" }}>Salads & Extras</Link></li>
                            <li><Link to="/sidesMenu" style={{color: "firebrick", textDecoration: "none" }}>Sides</Link></li>
                            <li><Link to="/shakesMenu" style={{color: "firebrick", textDecoration: "none" }}>Milkshakes & Malts</Link></li>
                            <li><Link to="/sodaMenu" style={{color: "firebrick", textDecoration: "none" }}>Sodas</Link></li>
                        </ul>
                </aside>
                <section className='burgerMenu'>
                    <div className='menuTitle'>
                        <h1>Fresh Hand Pressed Burgers</h1>
                    </div>
                    <div className='menuTitle'>
                        <p>Served with mayo, lettuce, tomato, onion, and pickle. All burgers are made with 100% beef from Cherry Street Meats. 
                        Hamburgers are cooked to order. Consuming raw or uncooked meats, poultry or eggs may increase your risk of food borne illness.</p>
                    </div>
                    <div className='burgerList'>
                        <section className='burgerSection'>
                            <ul>
                                <li>
                                    <h1>QUARTER POUNDER</h1><p>$6.25</p>
                                </li>
                                <p>With Chesse--$6.75</p>
                                <li>
                                    <h1>DOUBLE</h1><p>$8.25</p>
                                </li>
                                <p>With Cheese--$8.75</p>
                                <li>
                                    <h1>TRIPLE</h1><p>$10.75</p>
                                </li>
                                <p>(3) 1/4 lb patties stacked</p>
                                <p>With Cheese--$11.00</p>
                                <li>
                                    <h1>EXTREME</h1><p>$13.50</p>
                                </li>
                                <p>3/4 lb patty on a 6" bun</p>
                                <p>With Cheese--$15.50</p>
                                <li>
                                    <h1>VEGI BURGER</h1><p>$7.65</p>
                                </li>
                                <p>With Cheese--$7.95</p>
                                <li>
                                    <h1>AVOCADO JACK</h1><p>$8.95</p>
                                </li>
                                <li>
                                    <h1>BACON CHEDDAR</h1><p>$8.95</p>
                                </li>
                                <li>
                                    <h1>DOUBLE BACON CHEDDER</h1><p>$10.95</p>
                                </li>
                            </ul>
                        </section>
                        <section className='burgerSection'>
                            <ul>
                                <li>
                                    <h1>CHILI BURGER</h1><p>$8.75</p>
                                </li>
                                <p>Onions and choice of cheese</p>
                                <li>
                                    <h1>HAWAIIAN</h1><p>$8.65</p>
                                </li>
                                <p>Ham, pineapple, & swiss</p>
                                <li>
                                    <h1>MUSHROOM SWISS</h1><p>$8.75</p>
                                </li>
                                <li>
                                    <h1>TERIYAKI</h1><p>$8.00</p>
                                </li>
                                <p>Teriyaki sauce and pineapple</p>
                                <li>
                                    <h1>ORTEGA JACK</h1><p>$8.25</p>
                                </li>
                                <p>Mild green chili and jack cheese</p>
                                <li>
                                    <h1>BBQ, BACON, & CHEESE</h1><p>$8.65</p>
                                </li>
                                <li>
                                    <h1>JALAPENO & PEPPERJACK</h1><p>$8.75</p>
                                </li>
                                <li>
                                    <h1>PATTY MELT</h1><p>$8.00</p>
                                </li>
                                <p>Sourdough or Rye</p>
                            </ul>
                        </section>
                        <section className='burgerSection'>
                            <ul>
                                <li>
                                    <h1>MUSHROOM, BACON, AND CHEESE</h1><p>$9.25</p>
                                </li>
                                <li>
                                    <h1>REUBEN</h1><p>$8.00</p>
                                </li>
                                <li>
                                    <h1>RUSTY'S ROUNDUP</h1><p>$9.50</p>
                                </li>
                                <p>BBQ, bacon, & onion rings</p>
                                <li>
                                    <h1 style={{color: "rgb(35, 33, 33)", textDecoration: "underline"}}>SPECIALTY 1/3 POUND BURGERS</h1>
                                </li>
                                <li>
                                    <h1>ROGUE BLEU CHEESE BURGER</h1><p>$13.00</p>
                                </li>
                                <li>
                                    <h1>SPICY TRI TIP PHILLY BURGER</h1><p>$13.00</p>
                                </li>
                                <li>
                                    <h1>TRI TIP BISTRO BURGER</h1><p>$13.00</p>
                                </li>
                                <li>
                                    <h1>PULLED PORK BURGER</h1><p>$13.00</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
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