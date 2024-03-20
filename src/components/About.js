import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import userContext from "../../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="m-2 p-2">
      <div>
      Loggedin user:
        <userContext.Consumer>
       { ({logedInUser}) => <h1 className="text-xl font-bold">{logedInUser}</h1>}
        </userContext.Consumer>
      </div>
        <h1 className="text-xl font-semibold">About Class Component</h1>
        <h2 className="text-xl font-semibold">This is Namste Food App</h2>
        <UserClass name={"First"} location="Pune" />
      </div>
    );
  }
}

export default About;
