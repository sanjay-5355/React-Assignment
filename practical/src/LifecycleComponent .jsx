
// o Create a class component that fetches data from an API when the component
// mounts using componentDidMount(). Display the data in the component.

// o Implement a component that logs a message to the console when it updates using
// componentDidUpdate(). Log another message when the component unmounts
// using componentWillUnmount().


import React, { Component } from "react";

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      count: 0,
    };
  }

  // Task 1: Fetch API when component mounts
  componentDidMount() {
    console.log("Component Mounted");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  // Task 2: Runs when component updates
  componentDidUpdate() {
    console.log("Component Updated");
  }

  // Task 2: Runs when component unmounts
  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return (
      <div>
        <h2>User List</h2>

        {/* Button to trigger update */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update ({this.state.count})
        </button>

        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LifecycleComponent;
