import React , {useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import "./signup.css";
const Signup=()=>{
    const history=useNavigate();
    const[user, setUser]=useState({
        name:"", email:"",phone:"",work:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name = e.target.name;  
        value=e.target.value;
        setUser({...user,[name]:value});
    }

    const PostData=async (e)=>{
        e.preventDefault();
        const {name,email,phone,work,password,cpassword}= user;

       const res= await  fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,work,phone,password,cpassword
            })
       });
       const data=await res.json();
       if(res.status===422 || !data){
        window.alert("Invalid registration");
        console.log("Invalid registration");
       }else{
         window.alert("Registration");
         console.log("Successfull registration");
         history("/login");
       }
    }
     
    return(
        <>
        <form method="POST">
        <div className='wrapper'>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <div class="input-box">
                <input type="text" name='name' placeholder="Enter your name" required
                value={user.name}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="text" name='email' placeholder="Enter your name" required
                value={user.email}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="text" name='work' placeholder="Enter your work" required
                value={user.work}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="tel" name='phone' id="tel" placeholder="Enter your phone" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={user.phone}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="password" name='password'id='password' placeholder="Enter your password" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={user.password}
                onChange={handleInputs}/>
            </div>
            <div class="input-box">
                <input type="password" name='cpassword' placeholder="Enter your Confirm password" required pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={user.cpassword}
                onChange={handleInputs}/>
            </div>
            
            <div class="policy">
        <input type="checkbox"/>
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="Submit" onClick={PostData} value="Register Now"/>
      </div>
      <div class="text">
        <h3>Already have an account? <Link to="/login">Login now</Link></h3>
      </div>
    
            
           
            
        </div>
        </form>
        </>
    )
}
export default Signup;