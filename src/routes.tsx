import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/about";
import CartPage from "./components/cart";
import Home from "./components/home";
import Layout from "./components/layout";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;

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
