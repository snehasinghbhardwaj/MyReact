//import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us !!!</h1>
//       {/* <Outlet /> */}
//       <ProfileFunctionComponent name={"Sneha"} title="From FunctionComponent" />
//       <Profile name={"Sneha"} title="From ClassComponenet" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-Constructor"); //First constructor is called
  }

  componentDidMount() {
    console.log("Parent-componentDidMount");
  }

  render() {
    console.log("Parent-render"); //Then render is called
    return (
      <div>
        <h1>About Us Page!!!</h1>
        <ProfileFunctionComponent />
        {/* <Profile Child="Child2" /> */}
      </div>
    );
  }
}

export default About;
