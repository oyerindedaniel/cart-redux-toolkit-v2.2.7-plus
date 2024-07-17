import { createBrowserRouter } from "react-router-dom";
import About from "./components/about";
import CartPage from "./components/cart";
import Checkout from "./components/checkout";
import Home from "./components/home";
import Layout from "./components/layout";
import OrderConfirmation from "./components/order";
import Products from "./components/product";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;

// {
//     path: "/",
//     element: (
//       <Layout>
//         <Home />
//       </Layout>
//     ),
//   },
//   {
//     path: "/app",
//     element: <App />,
//   },
//   {
//     path: "/cart",
//     element: (
//       <Layout>
//         <CartPage />
//       </Layout>
//     ),
//   },
//   {
//     path: "/products",
//     element: (
//       <Layout>
//         <Products />
//       </Layout>
//     ),
//   },
//   {
//     path: "/checkout",
//     element: (
//       <Layout>
//         <Checkout />
//       </Layout>
//     ),
//   },
//   {
//     path: "/order-confirmation",
//     element: (
//       <Layout>
//         <OrderConfirmation />
//       </Layout>
//     ),
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },

// const Home = lazy(() => import("./components/home"));
// const About = lazy(() => import("./components/about"));

// const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Suspense fallback={<p>Loading...</p>}>
//         <Home />
//       </Suspense>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <Suspense fallback={<p>Loading...</p>}>
//         <About />
//       </Suspense>
//     ),
//   },
// ]);

// export default router;
