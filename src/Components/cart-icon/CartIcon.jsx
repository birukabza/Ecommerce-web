import './CartIcon.scss'

import CartIcon from '../../assets/CartIconLogo'

import { useSelector } from 'react-redux'
import { selectCartTotalQuantity } from '../../redux/cart/cartSelectors'

const Cart = (props) =>{

    const totalCartItems = useSelector(selectCartTotalQuantity)
        
    return (
    <div className="cart-icon" onClick={props.handleClick}>
        <CartIcon width="50px" height="50px"/>
        <span className='item-count'>{totalCartItems}</span>
    </div>
)}

export default Cart
