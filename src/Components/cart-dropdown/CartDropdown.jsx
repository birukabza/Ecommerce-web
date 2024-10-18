import './CartDropdown.scss'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelectors'


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length?
                cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                )):
                <span className="empty-message">Your Cart Is Empty</span>
                }
            </div>
            <CustomButton onClick={()=> navigate('/checkout')}> Go To Check Out</CustomButton>
        </div>
    )
}

export default CartDropdown
