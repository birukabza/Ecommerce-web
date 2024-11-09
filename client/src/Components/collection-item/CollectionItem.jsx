import './CollectionItem.scss'

import CustomButton from '../custom-button/CustomButton'

import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cartSlice'

import Swal from "sweetalert2";


const CollectionItem = ({ id, name, price, imageUrl }) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItemToCart({id, name, price, imageUrl}))
        Swal.fire({
            title: 'Added to Cart!',
            text: `${name} has been added to your cart.`,
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 1500,
            toast: true,
            position: 'bottom',
            showConfirmButton: false
        })
    }

    return (
        <div className="collection-item">
            <div className="image"
                style={styles}
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={handleAddToCart} inverted> Add To Cart</CustomButton>
        </div>
    )
}

export default CollectionItem


