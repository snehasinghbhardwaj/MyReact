import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-DOM";
//import { Header, Logo } from "./components/Header.js";
//import Header, {Logo } from "./components/Header.js";
//import * as Obj from "./components/Header.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import ResturantMenu from "./components/ResturantMenu";
import Error from "./components/Error";

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
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }], //we can write either /about/profile or profile //parentPath/{path} or localhost:1234/about/profile
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
