import { useState, useEffect } from "react";

const Profile = (props) => {
  const { name, title } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("inside useEffct");
    // const timer = setInterval(() => {
    //   console.log("settimer from usEffcet");
    // }, 1000);

    //Clean up will be done in return, like below
    return () => {
      //clearInterval(timer);
      console.log("cleanUp from useEffect");
    };
  }, []);

  console.log("First render");
  return (
    <>
      <h2>This is Function based Component</h2>
      <h3>{name + ":" + title}</h3>
      <h3>count:{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click1
      </button>
      <h3>count2:{count2} </h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Click2
      </button>
    </>
  );
};

export default Profile;
