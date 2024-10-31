import { useParams } from "react-router-dom";
import PreviewCollection from "../../Components/preview-collection/PreviewCollection";
import { useSelector, useDispatch } from "react-redux";
import fetchShopData from "../../firebase/fetchShopData";
import { useEffect } from "react";
import { selectShopData, selectIsLoading } from "../../redux/shopData/shopDataSelector";
import { Loader } from "@mantine/core";

const IndividualShopPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const collections = useSelector(selectShopData);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        fetchShopData(dispatch)
    }, [dispatch])

    if (isLoading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Loader size={100} color="blue" variant="dots" />
            </div>
        )
    }

    const selectedCollection = collections.find(
        (category) => category.routeName === id
    );

    return (
        <div className="individual-shop-page">
            {selectedCollection ? (
                <PreviewCollection title={selectedCollection.title} items={selectedCollection.items} length={selectedCollection.items.length} />
            ) : (
                <p>Collection not found.</p>
            )}
        </div>
    );
};

export default IndividualShopPage;
