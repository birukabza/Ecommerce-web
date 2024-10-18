import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomePage from "../pages/homepage/HomePage"
import Layout from "../Components/layout/Layout"
import ShopPage from "../pages/shop/ShopPage"
import SignInSignUpPage from "../pages/sign-in-sign-up-page/SignInSignUpPage"
import Checkout from '../pages/checkout/Checkout';

const createRouter = (currentUser) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,  
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/shop',
          element: <ShopPage />,
        },
        {
          path: '/signin',
           element:  currentUser ? <Navigate to="/"/> : <SignInSignUpPage />,
        },
        {
          path: '/checkout',
          element: <Checkout/>
        },
      ],
    },
  ]);

export default createRouter;
