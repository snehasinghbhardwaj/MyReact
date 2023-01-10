/**
 * todo cdbdbdh
 * Important
 * ? djsnfdjfnkd
 * !vgbhvhvbh
 */

const { reaction } = require("mobx");

import React from "react";
import ReactDOM from "react-dom/client";

//-------------------------Using JSX---------------------

//React Element
const Container0 = (
  <div id="container">
    <h3>Variable</h3> <h3>Variable</h3>
  </div>
);

/**
 * Normal Component Function
 */
const Container1 = function () {
  return (
    <div id="container">
      <h3>Normal Function</h3> <h3>Normal Function</h3>
    </div>
  );
};

/**
 * Component Function with return
 */
const Container2 = () => {
  return (
    <div id="container">
      <h3>Arrow Function with return</h3> <h3>Arrow Function with rerurn</h3>
    </div>
  );
};

/**
 * Component Function w/o return
 */
const Container3 = () => (
  <div id="container">
    <h3>Arrow Function without return</h3>
    <h3>Arrow Function without rerurn</h3>
  </div>
);

const Container5 = () => (
  <div id="container">
    <h1>------Rendering React Element-----</h1>
    {Container0}
    <h1>----Rendering Componenet Function with angular brackets---</h1>
    <Container1 />
    <Container2 />
    <Container3 />
    <h1>--Rendering Componenet Function just like calling a Function---</h1>
    {Container1()}
    {Container2()}
    {Container3()}
    {/**
     * Any JS Element can be written in {}
     */}
    {console.log(100)}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); //check by passing container in place of root

//below line will modify the DOM, it will overwrite the dom
//root.render(Container0);
// root.render(<Container1 />);
//root.render(<Container2 />);
root.render(<Container5 />);
