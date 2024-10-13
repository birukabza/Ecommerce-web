import "./MenuContainer.scss"
import MenuItem from "../menu-item/MenuItem"
import sectionData from "../../data/menuData" 

const MenuContainer = () => {
    
    const menuItems = sectionData.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
    ));

    return (
        <div className="menu-container">
            {menuItems}
        </div>
    );
};

export default MenuContainer;
