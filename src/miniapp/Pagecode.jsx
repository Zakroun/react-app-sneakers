import React from "react";
import { Link } from "react-router-dom";

export default function Pagecode(){
    return (
        <div className="codediv">
            <h1 id="H11pass">Pagecode</h1>
            <div class="son">
                    <input type="text" id="input1" name="code1" class="inputver"></input>
                    <input type="text" id="input2" name="code2" class="inputver"></input>
                    <input type="text" id="input3" name="code3" class="inputver"></input>
                    <input type="text" id="input4" name="code4" class="inputver"></input>
                    <input type="text" id="input5" name="code5" class="inputver"></input>
                    <input type="text" id="input6" name="code6" class="inputver"></input>
                </div>
            <Link to="/pages/newpass"><button  id="sendbtn2">Confirm</button></Link>
        </div>
    )
}