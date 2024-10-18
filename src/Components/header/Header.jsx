import './Header.scss';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { auth } from '../../firebase/firebase.utility';

import LogoSvg from '../../assets/LogoSvg';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {clearCurrentUser} from '../../redux/user/userSlice'
import { selectCurrentUser } from '../../redux/user/userSelector';

import { useState } from 'react';



const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleCartDropdown = () => {
        setShowDropdown(prevShowDropdown => !prevShowDropdown)
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
            <Link className="logo-container" to="./">
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
            { showDropdown && <CartDropdown/> }

        </div>
    );
};

export default Header;
