import React,{ useState}from "react";
import { useNavigate } from "react-router-dom";

function Register () {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    const [sur,setSur] = useState('');
    const [phone,setPhone] = useState('');
    const [compass,setComPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const navigate = useNavigate()
    const toLogin=()=>{
        navigate("/")
      }
    return(
        <div className="login-page">
            <div className="left-side"></div>
            <div className="auth-form-container-regis"> 
                <form className="Regis-form " onSubmit={handleSubmit}>
                    <label>Sign up</label>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        type="name" 
                        placeholder="First Name" 
                        id="name" 
                        name="name" />
                    <input 
                        value={sur} 
                        onChange={(e) => setSur(e.target.value)} 
                        type="sur" 
                        placeholder="Last Name" 
                        id="sur" 
                        name="sur" />
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        placeholder="Email" 
                        id="email" 
                        name="email" />
                    <input 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        type="phone" 
                        placeholder="Phone" 
                        id="phone" 
                        name="phone" />
                    <input 
                        value={pass} 
                        onChange={(e) => setPass(e.target.value)} 
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        name="password" />
                    <input 
                        value={compass} 
                        onChange={(e) => setComPass(e.target.value)} 
                        type="password" 
                        placeholder="Confirm Password" 
                        id="compassword" 
                        name="compassword" />
                    <center><button type="submit" className="button" onClick={()=>toLogin()}> Submit</button></center>
                    <center><button type="submit" className="button-cancel" onClick={()=>toLogin()}> Cancel</button></center>
                </form>
            </div>
            <div className="right-side"></div>
        </div>
    )
}

export default Register