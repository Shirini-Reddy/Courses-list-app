// EnquiryForm.js
import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const EnquiryForm = () => {
    const navigate = useNavigate()
  
    const[formdata,setformdata]=useState({
        email:'',
        password:''
    })

    const handlechange = (event) => {
        const {name,value} = event.target;
        setformdata(prevData => ({
            // take already filled value
            ...prevData,
            // new filled value
            [name]:value
        }))
    }
    const isEmailValid = (email) => {
      // Email validation using a simple regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const isPasswordValid = (password) => {
      // Password validation: At least 8 characters
      return password.length >= 8;
    };
  
  
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        if (!formdata.email || !formdata.password) {
          alert('Please fill in all required fields.');
          return;
        }
        if (!isEmailValid(formdata.email)) {
          alert('Please enter a valid email address.');
          return;
        }
    
        if (!isPasswordValid(formdata.password)) {
          alert('Password must be at least 8 characters long.');
          return;
        }
        fetch('http://localhost:3001/users',{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formdata),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        navigate("/");
                })
       .catch(error => {
       console.error('Error:', error);
  });
       
       
    }
  return (
   <form onSubmit={handleSubmit} >
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={formdata.email} onChange={handlechange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={formdata.password} onChange={handlechange}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
   </form>
  );
};

export default EnquiryForm;
