/**
 * todo cdbdbdh
 * Important
 * ? djsnfdjfnkd
 * !vgbhvhvbh
 */

const heading = React.createElement("h1", { id: "head" }, "Namaste React");

const heading1 = React.createElement("h1", { id: "head1" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "head2" }, "Heading 2");

/**
 * Imp -  React.createElement will have 3 parameters
 * 1.html element
 * 2.props
 * 3.content which has to be writen
 *    3.1 If its just text then "text
 *    3.2 If its array of elements the [const_var1, cons_var2 etc]
 *    3.3 heading1, heading2 are React Elements & at the end of the day its object
 */
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root")); //check by passing container in place of root

//below line will modify the DOM, it will overwrite the dom
root.render;
root.render(container);
