import {db} from './firebase.utility'
import { collection, getDocs } from 'firebase/firestore'
import { setShopData } from '../redux/shopData/shopDataSlice'


const fetchShopData = async (dispatch) => {
    try{

        const shopDataRef = collection(db, "shopData")
        const shopDataSnapShot = await getDocs(shopDataRef)

        const shopData = shopDataSnapShot.docs.map(doc => {
            const {items, title} = doc.data()
            return(
                {
                    id: doc.id,
                    items,
                    title,
                }
            )
        })

        dispatch(setShopData(shopData))      

    }catch(error){
        console.log("Error fetching shopData", error.message)
       
    }
}

export default fetchShopData
