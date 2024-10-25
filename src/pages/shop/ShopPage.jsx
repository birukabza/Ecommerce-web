import PreviewCollection from '../../Components/preview-collection/PreviewCollection'
import { useDispatch, useSelector } from 'react-redux'
import fetchShopData from '../../firebase/fetchShopData'
import { selectShopData } from '../../redux/shopData/shopDataSelector'
import { useEffect } from 'react'

const ShopPage = () => {
  const dispatch = useDispatch()
  const collections = useSelector(selectShopData)

  useEffect(()=>{
    fetchShopData(dispatch)
  }, [dispatch])

  return (
    <div className='shop-page'>
      {
        collections.map(({id, ...otherDatas} )=> (
          <PreviewCollection key={id} length = {4} {...otherDatas} />
        ))
      }
    </div>
  )
}

export default ShopPage
