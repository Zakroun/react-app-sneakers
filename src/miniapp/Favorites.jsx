import React from "react";
import { Link } from "react-router-dom";
export default function Favorites(props) {
    const total = props.tab.reduce((t, a) => t + a.price, 0);
    const addcart = () =>{
        const t = props.tab
        props.addAll(t)
    }
  return (
    <>
      <div className="divsneak">
        <h1 id="hsnaek">Favorites</h1>
      </div>
      <div className="parentofall">
        <div className="divsneak-count">
          {props.tab.map((item, index) => {
            return (
              <div className="parentpan" key={index}>
                <div className="childpan1">
                  <Link to={`/pages/pagsneak`} state={item} id="Link">
                    <img src={item.src} alt="imginpan" id="imginpan" />
                  </Link>
                </div>
                <div className="childpan2">
                  <h2 id="itemnom">{item.name}</h2>
                  <p id="itemprix">{item.price}</p>
                  <button
                    onClick={() => props.fnSupprimerfav(item.id)}
                    id="btndelete"
                  >
                    Delete
                  </button>
                  <button id="btn_ajoutfav2" onClick={()=>props.fnctajout(item)}>Add to cart</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="total">
          <h1>Summary</h1>
          <div className="firstpart">
            <span>Subtotal</span>
            <span id="totalprix">{total} $</span>
            <br />
            <span>Estimated pick-up and shipping costs  </span>
            <span>  Free</span>
          </div>
          <div className="firstpart">
            <span>Total</span>
            <span id="totalprix">{total} $</span>
          </div>
            <button className="btn_payer" onClick={addcart}>add to cart</button>
          <br />
          {props.tab.length > 0 ? (
            <button onClick={() => props.DeleteAllfav()} id="btndelete_all">
              Delete All
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
