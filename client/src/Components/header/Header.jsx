import './Header.scss';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { auth } from '../../firebase/firebase.utility';

import LogoSvg from '../../assets/LogoSvg';

import { Link } from 'react-router-dom';

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
            <Link className="logo-container" to="/">
                <LogoSvg className="logo" width="150px" height="110px"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contact">Contact</Link>
                {currentUser ? (
                    <div className="option" onClick={handleSignOut}>
                        Sign Out
                    </div>
                ) : (
                    <Link className="option" to="./signin">Sign In</Link>
                )}
                <CartIcon handleClick={toggleCartDropdown}/>
            </div>
            { showCart && <CartDropdown/> }
        </div>
    );
};

export default Header;
