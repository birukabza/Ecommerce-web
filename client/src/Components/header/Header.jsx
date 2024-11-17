import './Header.scss';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { auth } from '../../firebase/firebase.utility';

import LogoSvg from '../../assets/LogoSvg';

import {  NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {clearCurrentUser} from '../../redux/user/userSlice'
import { selectCurrentUser } from '../../redux/user/userSelector';
import { showDropdown } from '../../redux/cart/cartSlice'; 
import { selectShowDropDown } from '../../redux/cart/cartSelectors';




const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const showCart = useSelector(selectShowDropDown)
    const dispatch = useDispatch();

    const toggleCartDropdown = () => {
        dispatch(showDropdown())
    }

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(clearCurrentUser());
            })
            .catch((error) => console.error('Sign out error:', error));
    };

    return (
        <div className="header">
            <NavLink className="logo-container" to="/">
                <LogoSvg className="logo" width="100px" height="90px"/>
            </NavLink>
            <div className="options">
                <NavLink className="option" to="/shop">Shop</NavLink>
                <NavLink className="option" to="/contact">Contact</NavLink>
                {currentUser ? (
                    <div className="option" onClick={handleSignOut}>
                        Sign Out
                    </div>
                ) : (
                    <NavLink className="option" to="./signin">Sign In</NavLink>
                )}
                <div className="cart-icon-conatainer option">

                <CartIcon  handleClick={toggleCartDropdown}/>
                </div>
            </div>
            { showCart && <CartDropdown/> }
        </div>
    );
};

export default Header;
