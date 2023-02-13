import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Login.css';

const SignUp=()=>{


  return(
    <>
    <center>
  <div className="form-container">
  
        <div className="parent-container">
        <form method="POST" className="login-form signup-form"><br />
          <h1 className="logo"><img className="logoimg" src="/incedo_Logo.jpg" /></h1><br />
          <p>Create New Account</p><br /><br />
          <div className="mb-3">
            {/* <label htmlFor='exampleInputEmail1' className="form-label"> </label> */}
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              autoComplete="off"
              // value={newUser.email}
              // onChange={handleUser}
              aria-describedby="emailHelp"
              placeholder="User ID"
              required
            />
          </div><br />
          <div className="mb-3">
            {/* <label htmlFor='exampleInputPassword1' className="form-label"></label> */}
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              autoComplete="off"
              // value={newUser.password}              
              // onChange={handleUser}
              placeholder="Password"
              required
            />
          </div><br />
          <div className="mb-3">
            {/* <label htmlFor='exampleInputPassword1' className="form-label"></label> */}
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="confirmPassword"
              autoComplete="off"
              // value={newUser.confirmPassword}
              // onChange={handleUser}
              required
              placeholder="Confirm Password"
              
            />
          </div><br /><br />
          <button type="submit" className="btn-primary" 
          
          // onClick={registerData}
          >
            Sign Up
          </button>
          <br /><br />
          {/* <button type="submit" className="btn-light">
            Sign Up
          </button> */}
        </form>
        <br /><br />
        <div className="bottom-container">
          <p>
            <Link to='/' className="signin-link">Sign In</Link>
          </p>
        </div>
      </div>
      </div>
      </center>
  </>)
}
export default SignUp;