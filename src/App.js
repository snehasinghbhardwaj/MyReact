import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-DOM";
//import { Header, Logo } from "./components/Header.js";
//import Header, {Logo } from "./components/Header.js";
//import * as Obj from "./components/Header.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import ResturantMenu from "./components/ResturantMenu";
//import Instamart from "./components/Instamart";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";

/**
 * Lazy - Callback function
 * Suspense will have prop as fallback
 * When we will clcik on menu then thebundle related to ot shud load in browser lazily so with lazy callback function
 *        we shud import the componenet instead of wriring as usual import compoenetfile from "relative_path";
 */
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }], //we can write either /about/profile or profile //parentPath/{path} or localhost:1234/about/profile
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart fallback={<Shimmer />} />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
