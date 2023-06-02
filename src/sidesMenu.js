import React from 'react';
import NavComponent from './components/NavComponent';
import BBLogo3 from './images/BBLogo3.png';
import FBLogo from './images/FBLogo.png';
import DDIcon from './images/DoorDashIcon.png';
import BBLogo1 from './images/BBLogo1.png';
import './App.css';
import {Link} from 'react-router-dom';

export default function SidesMenu() {
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
                            <li><Link to="/burgerMenu" style={{color: "firebrick", textDecoration: "none"}}>Burgers</Link></li>
                            <li><Link to="/chickenBurgerMenu" style={{color: "firebrick", textDecoration: "none"}}>Chicken Burgers</Link></li>
                            <li><Link to="/sandwichMenu" style={{color: "firebrick", textDecoration: "none"}}>Sandwiches</Link></li>
                            <li><Link to="/chiliMenu" style={{color: "firebrick", textDecoration: "none"}}>Chili</Link></li>
                            <li><Link to="/dogsMenu" style={{color: "firebrick", textDecoration: "none"}}>Dogs</Link></li>
                            <li><Link to="/saladMenu" style={{color: "firebrick", textDecoration: "none"}}>Salads & Extras</Link></li>
                            <li><Link to="/sidesMenu" style={{color: "firebrick"}}>Sides</Link></li>
                            <li><Link to="/shakesMenu" style={{color: "firebrick", textDecoration: "none" }}>Milkshakes & Malts</Link></li>
                            <li><Link to="/sodaMenu" style={{color: "firebrick", textDecoration: "none" }}>Sodas</Link></li>
                        </ul>
                </aside>
                <section className='burgerMenu' style={{marginLeft: "3%", marginTop: "2%"}}>
                    <div className='menuTitle'>
                        <h1>Sides</h1>
                    </div>
                    <div className='burgerList'>
                        <section className='burgerSection'>
                            <ul style={{marginTop: "4%"}}>
                                <li>
                                    <h1>FRENCH FRIES</h1><p>Small $2.00</p><p>Large $3.00</p>
                                </li>
                                <li>
                                    <h1>TATOR TOTS</h1><p>Small $3.00</p><p>Large $4.00</p>
                                </li>
                                <li>
                                    <h1>CHILI CHEESE FRIES</h1><p>Small $6.00</p><p>Large $7.00</p>
                                </li>
                            </ul>
                        </section>
                        <section className='burgerSection'>
                            <ul style={{marginTop: "9%"}}>
                                <li>
                                    <h1>SWEET POTATO FRIES</h1><p>$4.25</p>
                                </li>
                                <li>
                                    <h1>BAG OF FRIES</h1><p>$7.25</p>
                                </li>
                                <li>
                                    <h1>ONION RINGS</h1><p>$6.00</p>
                                </li>
                            </ul>
                        </section>
                        <section className='burgerSection'>
                            <ul>
                                <li>
                                    <h1>CHICKEN NUGGETS</h1><p>$3.50</p>
                                </li>
                                <p>(6 Piece)</p>
                                <li>
                                    <h1>CHICKEN STRIPS</h1><p>$8.00</p>
                                </li>
                                <p>(4 Piece)</p>
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