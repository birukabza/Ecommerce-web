import './CheckoutItem.scss'

import removeButtonLogo from '../../assets/remove-button.svg'
import plusButtonLogo from '../../assets/plus-sign.svg'
import minusButtonLogo from '../../assets/minus-sign.svg'

import { clearItemFromCart, removeItem, addItemToCart } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CheckoutItem = ({cartItem}) => {
  const {name, price, quantity, imageUrl} = cartItem

  const dispatch = useDispatch()

  const handleClearFromCart = ()=>{
    dispatch(clearItemFromCart({id: cartItem.id}))
  }

  const handleRemoveItem = () => {
    dispatch(removeItem({id: cartItem.id}))
  }

  const handleAddItem = () => {
    dispatch(addItemToCart({id: cartItem.id}))
  }

  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="minus-plus-button" onClick={handleRemoveItem}>
          <img src={minusButtonLogo} alt="minus sign" />
        </div>
        <span className="value">{quantity}</span>
        <div className="minus-plus-button" onClick={handleAddItem}>
          <img src={plusButtonLogo} alt="plus sign" />
        </div>
        </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleClearFromCart}>
        <img src={removeButtonLogo} alt="remove button" />
      </div>
    </div>
  )
}

export default CheckoutItem
