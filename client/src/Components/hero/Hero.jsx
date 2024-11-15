import "./Hero.scss";


import { Link } from "react-router-dom";

import CustomButton from "../custom-button/CustomButton";

import LogoSvg from "../../assets/LogoSvg";



const Hero = () => {
    
    return (
        <div className='hero-section'>
            <div  className="hero-img-container">
                <div className="banner">
                    <Link to="/">
                    <LogoSvg width="350px" height="300px"/>
                    </Link>
                    <h2>Unleash Your Style</h2>
                    <h1>Discover the Latest Trends at Any Store</h1>
                    <Link to="/shop"> <CustomButton> Shop Now </CustomButton> </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
