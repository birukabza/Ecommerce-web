import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/homepage/HomePage";
import Layout from "../Components/layout/Layout";
import ShopPage from "../pages/shop/ShopPage";
import SignInSignUpPage from "../pages/sign-in-sign-up-page/SignInSignUpPage";
import Checkout from '../pages/checkout/Checkout';
import IndividualShopPage from '../pages/individual-shop-pages/IndividualShopPage';

const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'shop',
          element: <ShopPage />,
        },
        {
          path: 'shop/:id',
          element: <IndividualShopPage />,
        },
        {
          path: 'signin',
          element: <SignInSignUpPage />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
      ],
    },
  ]);

export default createRouter;
