import React from "react";
import { Link } from "react-router-dom";
export default function Login(){
    return(
        <div className="login">
            <h1 id="H11">Login</h1>
            <form method="post" className="formlogin">
                <label htmlFor="Username" id="labellog">Username</label><br />
                <input type="text" name="Username" id="Username" />
                <br/><br />
                <label htmlFor="Password" id="labellog">Password</label><br />
                <input type="text" name="Password" id="Password" />
                <br/><br />
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
                <br />
                <input type="submit" value="Login" id="loginbtn"/>
                <Link to={'/pages/register'} id="register"><button id="registerbtn">Register</button></Link><br /><br />
                <Link to={'/pages/forgetpass'} id="forgetlink">Forget My Password</Link>
            </form>
        </div>
    )
}