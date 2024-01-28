import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const HomePage=()=>{

    return(
        <>
         <div className="header">
           <center><h1>Home</h1></center>
        </div>
        <div>
            <Link to="/usersinfo"><h1>Enquiries</h1></Link>
        </div>
        </>
       
    )
}
export default HomePage