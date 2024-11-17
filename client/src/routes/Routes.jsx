import { createBrowserRouter } from 'react-router-dom';
import Layout from "../Components/layout/Layout";
import { lazy } from 'react';


const HomePage = lazy(() => import("../pages/homepage/HomePage"));
const ShopPage = lazy(() => import("../pages/shop/ShopPage"));
const SignInSignUpPage = lazy(() => import("../pages/sign-in-sign-up-page/SignInSignUpPage"));
const Checkout = lazy(() => import('../pages/checkout/Checkout'));
const IndividualShopPage = lazy(() => import('../pages/individual-shop-pages/IndividualShopPage'));
const Contact = lazy(()=> import("../pages/contact/Contact"));

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
        {
          path: 'contact',
          element: <Contact/>,
        },
      ],
    },
  ]);

export default createRouter;
