import React from "react";
import { Link } from "react-router-dom";

export default function Newpass() {
  return (
    <div className="pagenewpass">
      <h1 id="H11pass">Change Password</h1>

      <form method="post" className="formlogin">
        <label htmlFor="pass1" id="labellog">
          New Password
        </label>
        <br />
        <input type="password" name="pass" id="pass1" />
        <br />
        <label htmlFor="pass2" id="labellog">
          Confirm New Password
        </label>
        <br />
        <input type="password" name="passconfirm" id="pass2" />
        <br />
        <Link to="/">
          <button id="sendbtn">Confirm</button>
        </Link>
      </form>
    </div>
  );
}
