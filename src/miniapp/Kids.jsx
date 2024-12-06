import React from "react";
import { Link } from "react-router-dom";

export default function Kids(props) {
  return (
    <div className="divsneak">
      <h1 id="hsnaek">Kids</h1>
      <div className="container">
        {props.tab.map((a, k) => {
          return (
            <div className="Sneak" key={k}>
              <Link to={`/pages/pagsneak`} state={a} id="Link">
                <img id="imgsneak" src={a.src} alt={a.name} />
              </Link>
              <span id="namesnea">{a.name}</span>
              <br />
              <br />
              <span id="price">{a.price} $ </span>
              <br />
              <br />
              <div className="sizes">
                {a.sizes.map((a, k) => {
                  return (
                    <div key={k} className="siz">
                      <span id="size">{a}</span>
                    </div>
                  );
                })}
              </div>
              <button
                id="btncart"
                onClick={() => props.fnctajout(a)}
              >
                Add to cart
              </button>
              <button id="btnlike" onClick={()=> props.fnFavorites(a)}>
              <i className="fa fa-heart" style={{ fontSize: 27, color: "white",cursor: 'pointer'}}></i>
            </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
