import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/homepage/HomePage"
import Layout from "../Components/layout/Layout"
import ShopPage from "../pages/shop/ShopPage"
import SignInSignUpPage from "../pages/sign-in-sign-up-page/SignInSignUpPage"

const createRouter = (currentUser) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout currentUser={currentUser} />,  
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
          element: <SignInSignUpPage />,
        },
      ],
    },
  ]);

export default createRouter;
