import { db } from './firebase.utility';
import { collection, onSnapshot } from 'firebase/firestore';
import { setShopData, setLoading, setError } from '../redux/shopData/shopDataSlice';

const fetchShopData = (dispatch) => {
    dispatch(setLoading(true)); 

    const shopDataRef = collection(db, "shopData");
    
    const unsubscribe = onSnapshot(shopDataRef, (shopDataSnapShot) => {
        const shopData = shopDataSnapShot.docs.map(doc => {
            const { items, title } = doc.data();
            return {
                id: doc.id,
                items,
                title,
            };
        });

        dispatch(setShopData(shopData));
    }, (error) => {
        dispatch(setError(error.message));
        console.log("Error fetching shopData", error.message);
    });

    return unsubscribe; 
};

export default fetchShopData;
