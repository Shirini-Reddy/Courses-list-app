import React,{useState,useEffect} from "react";

const Userinfo=()=>{
    const[usersinfo,setusersinfo]=useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3001/users');
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setusersinfo(data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    }, []);
  return(
    <div>
    <h1>UserEnquiries</h1>
    {usersinfo.map(users=>(
    <li>
    <div key={users.id}>
    <p><b>Email:</b>{users.email}</p>
    <p><b>Password:</b>{users.password}</p>
    </div>
    </li>    
   
    ))}      
    </div>
  )
}
export default Userinfo