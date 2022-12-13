
import "./login.css";


function Login() {

    return(
        <form>
            <div className="login-container">
                <div className="logo">
                    <h3>Company logo</h3>
                </div>
                <h1>CONNEXION</h1>
                <input  className="username" type="email" placeholder="Username"/>
                <input className="password" type="password"  placeholder="Password"/>
                <button className="login-btn" type="submit" value="Submit">Login</button>
            </div>
        </form>
    );
}
export default Login;