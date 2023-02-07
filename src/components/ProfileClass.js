import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        login: "dummy",
        url: "dummy",
      },
    };
    console.log(this.props.Child + "-Constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("setInterval from Profile Class Component");
    }, 1000);
    console.log(this.props.Child + "-ComponenetDidMount");
    //best place to do api call
    const data = await fetch("https://api.github.com/users/snehasinghbhardwaj");
    const json = await data.json();
    /**
     *
     * We cannot use the value directly on the render method.  I was doing this misatake. We have to always use State to render the value to DOM.
     * We have to initialisze state with dummy value & then assign the api value to setState
     *
     *  */
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log(this.props.Child + "-componenetDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.Child + "-componentWillUnmount");
  }

  IncremnetCount(count) {
    this.setState({ count: count + 1 });
  }
  render() {
    console.log(this.props.Child + "-render");
    const { count, count2 } = this.state;
    const { login, url, following } = this.state.userInfo;
    return (
      <>
        {/* <h1>This is Profile Class based Component</h1>
        <h3>{this.props.name + ":" + this.props.title}</h3>
        <h3>initial count: {count}</h3>
        <button
          //We DO NOT MUTATE STATE DIRECTLY
          onClick={() => this.IncremnetCount(count)}
        >
          Click
        </button>
        <h3>count2: {count2}</h3>
        <button
          //We DO NOT MUTATE STATE DIRECTLY
          onClick={() => {
            this.setState({ count: count + 1, count2: count2 + 1 });
          }}
        >
          Click
        </button>*/}
        <h3>Login: {login}</h3>
        <h3>Url: {url}</h3>
        <h3>Following: {following}</h3>
      </>
    );
  }
}

export default Profile;

/**
 * Parent-Constructor
   Parent-render
      Child1-Constructor
      Child1-render
      Child2-Constructor
      Child2-render
      ======================================
      Child1-ComponenetDidMount
      Child2-ComponenetDidMount
  Parent-componentDidMount
  *
 */
