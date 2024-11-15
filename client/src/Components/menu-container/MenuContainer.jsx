import "./MenuContainer.scss"
import MenuItem from "../menu-item/MenuItem"
import sectionData from "../../data/menuData"

const MenuContainer = () => {

    const menuItems = sectionData.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
    ));

    return (
        <>
            <div className="menu-title">
                <h1>Curated Fashion for Everyone</h1>
                <h2>Shop our categories and find the look that defines you.</h2>
            </div>
            <div className="menu-container">
                {menuItems}
            </div>
        </>
    );
};

export default MenuContainer;
