import useState from 'react'
import SHOP_DATA from "../../data/collections";
import PreviewCollection from '../../Components/preview-collection/PreviewCollection'

const ShopPage = () => {

  const collections = SHOP_DATA

  return (
    <div className='shop-page'>
      {
        collections.map(({id, ...otherDatas} )=> (
          <PreviewCollection key={id} {...otherDatas} />
        ))
      }
    </div>
  )
}

export default ShopPage
