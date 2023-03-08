import React,{useContext, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
//import './signup.css';
import './login.css';
import { UserContext } from "../App";
const Login=()=>{
    const {state, dispatch}=useContext(UserContext);
    const history=useNavigate();
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const loginUser=async (e)=>{
        e.preventDefault();
        const res = await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data=res.json();
        if(res.status===400 || !data){
            window.alert("Invalid Credentials")
        }else{
            dispatch({type:"USER",payload:true})
            window.alert("Login successfull");
            history("/");
        }
    }
    return(
        <>
        
    <div class="wrapper">
      <div class="title">Login Form</div>
      <form action="#">
        <div class="field">
          <input type="text" name="email" required  value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
          <label>Email Address</label>
        </div>
        <div class="field">
          <input type="password" name="password" required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
          <label>Password</label>
        </div>
        <div class="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">Remember me</label>
          </div>
          <div class="pass-link"><a href="#">Forgot password?</a></div>
        </div>
        <div class="field">
          <input type="submit" onClick={loginUser} value="Login"/>
        </div>
        <div class="signup-link">Not a member? <Link to="/signup" >Signup now</Link></div>
      </form>
    </div>

        
        </>
    )
}
export default Login;