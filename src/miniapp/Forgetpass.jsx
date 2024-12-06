import React from "react";
import { Link } from "react-router-dom";
export default function Forgetpass() {
  return (
    <div className="Forget">
      <h1 id="H11pass">Forget My Password</h1>
      <form method="post" className="formlogin">
        <label htmlFor="email" id="labellog">
          Email
        </label>
        <br />
        <input type="text" name="email" id="email" />
        <br />
        <br />
        <Link to={'/pages/code'}><input type="submit" value="Send Code" id="sendbtn" /></Link>
      </form>
    </div>
  );
}
