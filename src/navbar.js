import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import authContext from "./context/authContext";
export default function Navbar() {

const [state , dispatch]= useContext(authContext);

const toggleAuth = () => {
//if user is logged in , log him out 
// if user is not logged in , logged him in

if(state.isAuthenticated ){
    dispatch("LOGOUT")
}
else {
    dispatch("LOGIN")
}


    
};


return (
<nav className="navbar navbar-expand-sm navbar-light justify-content-center">
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to ="/home">
            WHO AM I ? 
            </Link>
        </li>
        <li className="nav-item">
            <Link  className="nav-link" to ="/page1">
            My Todo List
            </Link>
        </li>

       <li className="nav-item">
            <Link className="nav-link" to="/page2">
           My Dream 
            </Link>
        </li>





    </ul>
    <button className= {`btn btn-${state.isAuthenticated ? "danger" : "success"}   btn-lg`}  onClick={toggleAuth}>
        {state.isAuthenticated ? "LOGOUT" : "LOGIN"}
    </button>

</nav>
);
}
