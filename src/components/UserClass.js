import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    // API CALL
    const data = await fetch("https://api.github.com/users/anshusittu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

  //  console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("Componet is unmounted");
  }

  render() {
    const { name, location, avatar_url, company, bio } = this.state.userInfo;
    return (
      <div className="p-3 m-3 border-2 w-1/4 border-emerald-400 shadow-xl">
        <h1>
          This is coming from Class based Component
        </h1>
        <img className="w-80" src={avatar_url} />
        <h2 className="font-bold">Name: {name}</h2>
        <h3 className="font-bold">Location: {location}</h3>
        <h3 className="font-bold"> {company}</h3>
        <h3>Contact: anshu.possible@gmail.com</h3>
        <p className="break-words mt-1">BIO:{bio}</p>
      </div>
    );
  }
}

export default UserClass;
