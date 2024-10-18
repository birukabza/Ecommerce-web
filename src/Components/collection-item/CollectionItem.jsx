import './CollectionItem.scss'

import CustomButton from '../custom-button/CustomButton'

import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cartSlice'


const CollectionItem = ({ id, name, price, imageUrl }) => {
    const styles = {
        backgroundImage: `url(${imageUrl})`
    }

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addItemToCart({id, name, price, imageUrl}))
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


