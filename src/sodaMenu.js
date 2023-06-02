import React from 'react';
import NavComponent from './components/NavComponent';
import BBLogo3 from './images/BBLogo3.png';
import FBLogo from './images/FBLogo.png';
import DDIcon from './images/DoorDashIcon.png';
import BBLogo1 from './images/BBLogo1.png';
import './App.css';
import {Link} from 'react-router-dom';

export default function SodaMenu() {
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
                            <li><Link to="/chickenBurgerMenu" style={{color: "firebrick", textDecoration: "none" }}>Chicken Burgers</Link></li>
                            <li><Link to="/sandwichMenu" style={{color: "firebrick", textDecoration: "none" }}>Sandwiches</Link></li>
                            <li><Link to="/chiliMenu" style={{color: "firebrick", textDecoration: "none"}}>Chili</Link></li>
                            <li><Link to="/dogsMenu" style={{color: "firebrick", textDecoration: "none" }}>Dogs</Link></li>
                            <li><Link to="/saladMenu" style={{color: "firebrick", textDecoration: "none" }}>Salads & Extras</Link></li>
                            <li><Link to="/sidesMenu" style={{color: "firebrick", textDecoration: "none" }}>Sides</Link></li>
                            <li><Link to="/shakesMenu" style={{color: "firebrick", textDecoration: "none" }}>Milkshakes & Malts</Link></li>
                            <li><Link to="/sodaMenu" style={{color: "firebrick"}}>Sodas</Link></li>
                        </ul>
                </aside>
                <section className='burgerMenu' style={{marginLeft: "15%", marginTop: "3%"}}>
                    <div className='menuTitle'>
                        <h1>Sodas</h1>
                    </div>
                    <div className='menuTitle'>
                        <p style={{fontSize: "1.5vw"}}>Small 12oz--$1.75 &nbsp;&nbsp; Medium 16oz--$2.50 &nbsp;&nbsp; Large 32oz--$2.75</p>
                    </div>
                    <div className='burgerList'>
                        <section className='burgerSection' style={{marginRight: "10%"}}>
                            <ul>
                                <li>
                                    <h1>PEPSI</h1>
                                </li>
                                <li>
                                    <h1>DIET PEPSI</h1>
                                </li>
                                <li>
                                    <h1>MOUNTAIN DEW</h1>
                                </li>
                                <li>
                                    <h1>WILD CHERRY PEPSI</h1>
                                </li>
                            </ul>
                        </section>
                        <section className='burgerSection' style={{marginRight: "10%"}}>
                        <ul>
                                <li>
                                    <h1>MUG ROOT BEER</h1>
                                </li>
                                <li>
                                    <h1>SIERRA MIST</h1>
                                </li>
                                <li>
                                    <h1>DR. PEPPER</h1>
                                </li>
                                <li>
                                    <h1>LEMONADE</h1>
                                </li>
                            </ul>
                        </section>
                        <section className='burgerSection'>
                        <ul>
                                <li>
                                    <h1>ICED TEA</h1>
                                </li>
                                <li>
                                    <h1>RASPBERRY ICED TEA</h1>
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