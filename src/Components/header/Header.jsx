// Header.jsx
import './Header.scss';

import { Logo } from '../../assets/Logo';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase/firebase.utility';
import {clearCurrentUser} from '../../redux/reducers/user.reducer'

const Header = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

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
                <Logo className="logo" />
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
            </div>
        </div>
    );
};

export default Header;
