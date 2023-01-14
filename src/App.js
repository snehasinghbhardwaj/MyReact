import React from "react";
import ReactDOM from "react-dom/client";
//import { Header, Logo } from "./components/Header.js";
//import Header, {Logo } from "./components/Header.js";
//import * as Obj from "./components/Header.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayOut = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut />);
