import React from "react";
// import { Link } from "react-router-dom";
export default function Register(){
    return(
        <div className="login">
            <h1 id="H11">Register</h1>
            <form method="post" className="formlogin">
                <label htmlFor="email" id="labellog">Email</label><br />
                <input type="email" name="email" id="email" />
                <br/><br />
                <label htmlFor="Username" id="labellog">Username</label><br />
                <input type="text" name="Username" id="Username" />
                <br/><br />
                <label id="labellog">Sex</label><br />
                <input type="radio" name="Sexe" id="Male" /><label htmlFor="Male" id="sexelabel">Male</label>
                <input type="radio" name="Sexe" id="Female" /><label htmlFor="Female"  id="sexelabel">Female</label>
                <br/><br />
                <label htmlFor="Password" id="labellog">Password</label><br />
                <input type="text" name="Password" id="Password" />
                <br/><br />
                <label htmlFor="Password" id="labellog">Confirm Password</label><br />
                <input type="text" name="Password" id="Password" />
                <br />
                <input type="submit" value="Register" id="Register"/>
            </form>
        </div>
    )
}