import React from "react";
import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(0);

  return (
    <div className="user-cart">
      <h1 style={{ textAlign: "Center" }}>
        This is coming from Functional Component{" "}
      </h1>

      <h2>Name: {name}</h2>
      <h2>Location: Pune</h2>
      <h2>Contact: anshu.raj.singh@outlook.com</h2>
      <h4>count = {count}</h4>
      <h4>count 2 = {count2}</h4>
    </div>
  );
};

export default User;
