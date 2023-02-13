import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Login.css';


const SignIn = () => {
const [records,setRecords] = useState([]);
 const [registration,setRegistration] = useState(
    {
        email:"",
        password:""
    }
 );

  const handleInput=(e)=>{
const name= e.target.name;
const value = e.target.value;
setRegistration( {...registration,[name]:value})


  }

  const handleSubmit=()=>{
const newRecord = ({...registration,id:new Date().getTime.toString()})
setRecords=([...records,newRecord]);
setRecords({email:"",password:""})
  }

  return (

    <>
    <center>
      <div className="form-container">
        <div className="parent-container">
          <form className="login-form" 
          onSubmit={handleSubmit}
          >
           <br /> 
            <h1 className="logo">
            <img className="logoimg" src="/incedo_Logo.jpg" />
            </h1>
            <br />
            <p>Enter your credentials to access your account</p>
            <br />
            <br /> 
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                autoComplete="off"
                value={registration.email}
                onChange={handleInput}
                aria-describedby="emailHelp"
                placeholder="User ID"
              i/>
            </div>
            <br />
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                autoComplete="off"
                value={registration.password}
                onChange={handleInput}
                placeholder="Password"
                
              />
            </div>
            { <br /> }
            <br />
<Link to="/homepage">
            <button type="submit" className="btn-primary">
              Sign In
            </button>
            </Link>
            <br />
            <br />
            <Link to="/register">
              <button type="submit" className="btn-light">
                Sign Up
              </button>
            </Link>
          </form>
          <br />
          <br />
          <div className="bottom-container">
            <p>
              Don't have an account? <Link to="/register" className="signup-link">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      <div>
      {
      records.map((elem)=>{
        return
        <div key={elem.id}>
        <p>
{elem.email}
        </p>
        <p>{elem.password}</p>
        </div>
      })
      }
      </div>
      </center>
    </>
  );
};
export default SignIn;