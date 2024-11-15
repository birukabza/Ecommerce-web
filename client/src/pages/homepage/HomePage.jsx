import "./HomePage.scss";
import MenuContainer from "../../Components/menu-container/MenuContainer";
import Hero from "../../Components/hero/Hero";

const HomePage = () => (
    <div className="home-page">
        <Hero/>
        <MenuContainer />
    </div>
);

export default HomePage;
