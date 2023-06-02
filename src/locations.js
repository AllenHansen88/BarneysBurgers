import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import NavComponent from './components/NavComponent';
import BBLogo3 from "./images/BBLogo3.png";
import FBLogo from "./images/FBLogo.png";
import DDIcon from "./images/DoorDashIcon.png";
import BBLogo1 from "./images/BBLogo1.png";
import './App.css';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

function ClickMarker() {
    <Link to="https://bit.ly/42j1fgJ" />
  };

function MapHomeRiverside() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyB-aJy1zwdW95AAjc8IWJgDJCIhNV00rT4"
    });
    
    if (!isLoaded) return <div>Loading...</div>;
    return <RiversideMap />;
}

function RiversideMap() {
    const center = useMemo(() => ({lat: 42.33171, lng: -122.87307}), [])

    return <GoogleMap zoom={17} center={center} mapContainerClassName="riversideMap">
        <Marker position={{lat: 42.33171, lng: -122.87307}}/>
    </GoogleMap>
}

function MapHomeBiddle() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyB-aJy1zwdW95AAjc8IWJgDJCIhNV00rT4"
    });
    
    if (!isLoaded) return <div>Loading...</div>;
    return <BiddleMap />;
}

function BiddleMap() {
    const center = useMemo(() => ({lat: 42.34742, lng: -122.87431}), [])

    return <GoogleMap zoom={17} center={center} mapContainerClassName="biddleMap">
        <Marker position={{lat: 42.34742, lng: -122.87431}} />
    </GoogleMap>
}


export default function Locations() {
    return(
        <div>
            <header className='locationsHeader'>
                <NavComponent />
                <img src= {BBLogo3} alt="Barney's Burgers" className='app-logo'/>
                <nav className='socialMediaLogos'>
                <Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/"><img src= {DDIcon} alt="DoorDash Logo" className='DDlogo'/></Link>
                <Link to='https://www.facebook.com/barneysbetterburgers'><img src= {FBLogo} alt="Facebook Logo" className='FBlogo'/></Link>
                </nav>
            </header> 
            <h1 id="locationsTitle">Barneys Burgers Locations</h1>
            <div className='mapContainer'>
            <section id="map">
                <h2>Riverside Location</h2>
                <MapHomeRiverside />
                <Link to="https://bit.ly/42j1fgJ" style={{color: "firebrick"}}><h3>415 N Riverside Ave, Medford OR 97501</h3></Link>
                <p>SUNDAY - SATURDAY 11AM - 6:00PM</p>
                <Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/"><button id="DDOrderNow" style={{color: "rgb(69, 108, 251)"}}>Order Online</button></Link>
            </section>
            <section id="map">
                <h2>Biddle Location</h2>
                <MapHomeBiddle />
                <Link to="https://bit.ly/42j4Hbb" style={{color: "firebrick"}}><h3>1850 Biddle Rd, Medford OR 97504</h3></Link>
                <p>SUNDAY - SATURDAY 11AM - 6:00PM</p>
                <Link to="https://www.doordash.com/store/barney%E2%80%99s-better-burgers-medford-2635557/"><button id="DDOrderNow" style={{color: "rgb(69, 108, 251)"}}>Order Online</button></Link>
            </section>
            </div>
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