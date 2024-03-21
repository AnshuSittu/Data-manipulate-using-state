import { LOGO_URL } from "../../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");


  const onlineStatus = useOnlineStatus();

  // using useContext 
  //This userContext comes from our User Context file 
   const {loggedInUser} = useContext(userContext);
  
   console.log(loggedInUser);


  return (
    <div className="flex mx-auto justify-between rounded-lg border-solid border-2 bg-white-500 shadow-lg shadow-#F0F3FF-500/50 max-sm">
      <div className="logo-container">
      <Link to="/"> <img className="w-28" src={LOGO_URL} /></Link> 
      </div>
      <div className="nav-items">
        <ul className="flex p-3 m-3 text-lg font-medium">
          <li>
            <Link to="/" className="px-1 mx-1">Home</Link>
          </li>
          <li>
            <Link to="/about" className="px-1 mx-1">About Us</Link>
          </li>
          <li>
            <Link to="/grocery" className="px-1 mx-1">Grocery</Link>
          </li>
          <li>
            <Link to="/contact" className="px-1 mx-1">Contact Us</Link>
          </li>
          <li><Link to="/cart" className="px-1 mx-1">Cart</Link></li>
          <li className="nav">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-1 mx-1 font-bold">{loggedInUser}</li>
          <button
            className="px-2 ml-2 cursor-pointer border-solid border-2 rounded-xl bg-white-500 shadow-lg shadow-#F0F3FF-500/50 "
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
