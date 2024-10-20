import { useParams } from "react-router-dom";
import SHOP_DATA from "../../data/collections";
import PreviewCollection from "../../Components/preview-collection/PreviewCollection";

const IndividualShopPage = () => {
    const { id } = useParams();
    const collections = SHOP_DATA;

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
