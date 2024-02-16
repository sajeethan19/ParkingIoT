import React, { useState } from "react";
import "../Form.css";
import Navbar from "../components/Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

const Form: React.FC = () => {
  const [action, setAction] = useState("Login");

  // Backend dev by Sajeethan Starts here
    const [name, setName] = useState<string | undefined>(undefined); 
    const [username, setUsername] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);
    const navigate = useNavigate()

    const handleSubmit = (e: { preventDefault: () => void; }) =>{
      axios.post('http://localhost:5174/Users',{name,username,password})
      .then(result => console.log(result))
      .catch(err => console.log(err))
      navigate('/form')
    
    }
    const HandleLogin = (e: { preventDefault: () => void; }) =>{
      // console.log(username,password)
      axios.post('http://localhost:5174/login',{username,password})
      .then(result => {
        console.log(result.data)
        if (result.data.message === 'Success'){
          navigate('/dashboard')
        } else {
          console.log("Login Failed")
        }
      } )
      .catch(err => console.log(err))
      // navigate('/dashboard')
    // Backend dev by Sajeethan ends here
    }
  return (
    <div>
      <Navbar />
      <div className="container bg-transparent align-content-center mt-1">
      <div className="submit-container-select col-12 ">
        <div
          className={action === "Login" ? "col-lg-3 col-6 btn btn-success" : "col-lg-3 col-6 btn btn-light"}
          onClick={() => {
            setAction("Login");
          }}
        >
          <div>Log In</div>
        </div>
        <div
          className={action === "Sign Up" ? "col-lg-3 col-6  btn btn-success" : "col-lg-3 col-6 btn btn-light"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          <div>Sign Up</div>
        </div>
      </div>
      <div className="bg-transparent">
        <div className="header">
          <div className="text text-center">{action}</div>
          <div className="underline col-2"></div>
          

          {/* Sajeethan defined start node of Login Form */}
          {action === "Login" ? null : (
              <div className="col-lg-6 col-10">
              <div className="form1 d-flex flex-column text-center">
                <form onSubmit={action === "Sign Up" ? handleSubmit : HandleLogin}>
                  <div className="form-floating col-12 mb-3">
                    <input type="text" name="uName" className="form-control" id="floatingInput1" placeholder=""
                    onChange={(e)=>setUsername(e.target.value)} //call backend para 
                    />
                    <label htmlFor="floatingInput">Username</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="text" name="fName" className="form-control" id="floatingInput2" placeholder=""
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Full Name</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="password" name="pw" className="form-control" id="floatingInput3" placeholder=""/>
                    <label htmlFor="floatingInput">Password</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="password" name="cpw" className="form-control" id="floatingInput4" placeholder=""
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Confirm Password</label>       
                  </div>
                  <button className="sub btn btn-primary col-5" type="submit">Submit</button>
                </form>
              </div>
            </div>
            )}
          
          {/* Sajeethan defined start node of SignUp Form */}
          {action === "Sign Up" ? null : (
            <div className="col-lg-6 col-10">
              <div className="form1 d-flex flex-column text-center">
                <form onSubmit={action === "Login" ? HandleLogin : handleSubmit}>
                  <div className="form-floating col-12 mb-3">
                    <input type="text" name="u2Name" className="form-control" id="floatingInput5" placeholder=""
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Username</label>       
                  </div>
                  <div className="form-floating col-12 mb-3">
                    <input type="password" name="pw2  " className="form-control" id="floatingInput6" placeholder=""
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="floatingInput">Password</label>       
                  </div>
                  <button className="sub btn btn-primary col-5" type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
          {/*  */}
       
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Form;
