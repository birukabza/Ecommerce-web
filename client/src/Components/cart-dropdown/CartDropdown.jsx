import './CartDropdown.scss'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { useDispatch } from 'react-redux'
import { showDropdown } from '../../redux/cart/cartSlice'


const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate();
    const dispacth = useDispatch()

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        )) :
                        <span className="empty-message">Your Cart Is Empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                navigate('/checkout')
                dispacth(showDropdown())
            }}> Go To Check Out</CustomButton>
        </div>
    )
}

export default CartDropdown
