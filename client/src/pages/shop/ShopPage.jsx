import PreviewCollection from "../../Components/preview-collection/PreviewCollection";
import { useDispatch, useSelector } from "react-redux";
import fetchShopData from "../../firebase/fetchShopData";
import {
  selectShopData,
  selectIsLoading,
} from "../../redux/shopData/shopDataSelector";
import { useEffect } from "react";
import { Loader } from "@mantine/core";

const ShopPage = () => {
  const dispatch = useDispatch();
  const collections = useSelector(selectShopData);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    fetchShopData(dispatch);
  }, [dispatch]);


  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Loader size={100} color="blue" variant="dots" />
      </div>
    )
  }


  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherDatas }) => (
        <PreviewCollection key={id} length={4} {...otherDatas} />
      ))}
    </div>
  );
};

export default ShopPage;
