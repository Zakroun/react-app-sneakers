import React from "react";

export default function PageSneak(props) {
  return (
    <div className="page-sneak">
      <div className="child1">
        <img src={props.sneaker.src} alt="img" id="img_sneak" />
      </div>
      <div className="child2">
        <h1 id="name_h1">{props.sneaker.name}</h1>

        <span id="span_Sneak">Price : {props.sneaker.price}</span>
        <div className="parentSneak">
          {props.sneaker.sizes.map((item, index) => {
            return (
              <div className="div_size" key={index}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
        <button id="btn_ajoutpani" onClick={()=>props.fnctajout(props.sneaker)}>Add to cart</button>
        <button id="btn_ajoutfav" onClick={()=>props.fnFavorites(props.sneaker)}>Add to favorite 
        <i className="fa fa-heart" style={{ fontSize: 20, color: "gray",marginLeft:5}}></i>
        </button>
      </div>
    </div>
  );
}
