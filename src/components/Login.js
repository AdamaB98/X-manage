
import { useState } from "react";
import "./login.css";


function Login() {
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");

    const handleSubmit = (e) =>{
        e.preventDefault();


    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="login-container">
                <div className="logo">
                    <h3>Company logo</h3>
                </div>
                <h1>CONNEXION</h1>
                <input  value ={username} onChange={(e => setUsername.target.value)} className="username" type="text" placeholder="Username"/>
                <input value = {password} onChange={(e => setPassword.target.value)} className="password" type="password"  placeholder="Password"/>
                <button className="login-btn" type="submit" value="Submit">Login</button>
            </div>
        </form>
    );
}
export default Login;