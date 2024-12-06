import React from "react";
import { Link } from "react-router-dom";
export function Hedear2(){
    document.title = 'Nike | Home Page'
    return(
        <div className="container2">
            <div className="first-child">
                <p id="title">
                    Step Up Your Game with the Latest Sneakers
                </p>
                <p id="paragraphe">
                "Discover the hottest sneakers for every occasion, blending style, comfort, and performance."
                </p>
                <Link to={'/pages/Login'}><button className="buybtn">Get Started</button></Link>
            </div>
            {/* <div className="second-child">
                <img src="images/grey1backremove.png" alt="img" id="imghead"/>
            </div> */}
        </div>
    )
}