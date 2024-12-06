import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export function Hedear(props) {
  useEffect(() => {
    if (props.Favorites && props.Favorites.length > 0) {
        (document.getElementById("favheart").style.color = "red");
    } else {
      document.getElementById("favheart").style.color = "black";
    }
  }, [props.Favorites]);
  return (
    <div className="parentHedear">
      <div id="titre">
        <img src="../images/nikeicon.png" alt="logo" id="logo" />
      </div>
      <div className="categorie">
        <Link to={"/pages/New"} id="categorie">
          New
        </Link>
        <Link to={"/pages/Man"} id="categorie">
          Man
        </Link>
        <Link to={"/pages/Woman"} id="categorie">
          Woman
        </Link>
        <Link to={"/pages/Kids"} id="categorie2">
          Kids
        </Link>
      </div>
      <div className="searchbar">
        <input
          onChange={(e) => props.fnrecherch(e.target.value)}
          type="text"
          id="serchebar"
          placeholder="Search your desired sneakers..."
        ></input>
      </div>
      <div className="secondparent">
        <Link to={"/"} id="link">
          Home
        </Link>
        <Link to={"/pages/About"} id="link">
          About
        </Link>
        <Link to={"/pages/Login"} id="link">
          login
        </Link>
        <Link to={"/pages/favorite"} id="link">
          <i id="favheart" className="fa fa-heart"></i>
        </Link>
      </div>
      <div className="panier">
        <Link to={"/pages/panier"} id="link2">
          <img src="../images/cart.png" alt="img" id="panierimg" />
        </Link>
        <div className="numberofsneakers">
          {props.listpanier.reduce((t, e) => t + 1, 0)}
        </div>
      </div>
    </div>
  );
}
