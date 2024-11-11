import { createBrowserRouter } from 'react-router-dom';
import Layout from "../Components/layout/Layout";
import { lazy, Suspense } from 'react';
import { Loader } from "@mantine/core";


const HomePage = lazy(() => import("../pages/homepage/HomePage"));
const ShopPage = lazy(() => import("../pages/shop/ShopPage"));
const SignInSignUpPage = lazy(() => import("../pages/sign-in-sign-up-page/SignInSignUpPage"));
const Checkout = lazy(() => import('../pages/checkout/Checkout'));
const IndividualShopPage = lazy(() => import('../pages/individual-shop-pages/IndividualShopPage'));

const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: (
            <Suspense fallback={<Loader size={100} color="blue" variant="dots" />
          }>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: 'shop',
          element: (
            <Suspense fallback={<Loader size={100} color="blue" variant="dots" />
          }>
              <ShopPage />
            </Suspense>
          ),
        },
        {
          path: 'shop/:id',
          element: (
            <Suspense fallback={<Loader size={100} color="blue" variant="dots" />}>
              <IndividualShopPage />
            </Suspense>
          ),
        },
        {
          path: 'signin',
          element: (
            <Suspense fallback={<Loader size={100} color="blue" variant="dots" />}>
              <SignInSignUpPage />
            </Suspense>
          ),
        },
        {
          path: 'checkout',
          element: (
            <Suspense fallback={<Loader size={100} color="blue" variant="dots" />}>
              <Checkout />
            </Suspense>
          ),
        },
      ],
    },
  ]);

export default createRouter;
