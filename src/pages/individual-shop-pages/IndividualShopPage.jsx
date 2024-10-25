import { useParams } from "react-router-dom";
import PreviewCollection from "../../Components/preview-collection/PreviewCollection";
import { useSelector, useDispatch } from "react-redux";
import fetchShopData from "../../firebase/fetchShopData";
import { useEffect } from "react";
import { selectShopData } from "../../redux/shopData/shopDataSelector";

const IndividualShopPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const collections = useSelector(selectShopData)

    useEffect(()=>{
        fetchShopData(dispatch)
    },[dispatch])

    const selectedCollection = collections.find(
        (category) => category.routeName === id
    );

    return (
        <div className="individual-shop-page">
            {selectedCollection ? (
                <PreviewCollection title={selectedCollection.title} items={selectedCollection.items} length={selectedCollection.items.length}/>
            ) : (
                <p>Collection not found.</p>
            )}
        </div>
    );
};

export default IndividualShopPage;
