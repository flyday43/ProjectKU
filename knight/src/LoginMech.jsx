import React,{ useState}from "react";
import { useNavigate } from "react-router-dom";

function LoginMech (){
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  const navigate = useNavigate()  
  const toReigister=()=>{
    navigate("./register")
  }
  const toLogin=()=>{
    navigate("/")
  }

  return (
    <div className="login-page">
      <div className="left-side"></div>
      <div className="container">
        <img 
          src="\tesla.png" 
          alt="tesla" 
          className="big-image" />
      </div>

      <div className="auth-form-container"> 

        <form className="login-form " onSubmit={handleSubmit}>
          <center><img src="\iconmech.png" alt="logo" /></center>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            type="email" 
            placeholder="Email" 
            id="email" 
            name="email"/>
          <input 
            value={pass} 
            onChange={(e) => setPass(e.target.value)} 
            type="password" 
            placeholder="Password" 
            id="password" 
            name="password" />
        </form>
        <button className="button" type="submit"> Login</button>
        <button className="link-btnfo">forget Password?</button>
        <button className="link-btnu" onClick={()=>toLogin()}>Login for Customer</button>
        <button className="link-btn" onClick={()=>toReigister()}>For a new user Sign up here!</button>
      </div>

      <div className="right-side"></div>

    </div>
  )
}

export default LoginMech