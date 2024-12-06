import React from "react";
import { Link } from "react-router-dom";
export default function Panier(props) {
  const total = props.tab.reduce((t, a) => t + a.price, 0);
  return (
    <>
      <div className="divsneak">
        <h1 id="hsnaek">Purchases</h1>
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
                    onClick={() => props.fnSupprimer(item.id)}
                    id="btndelete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <table width={"100%"} border={1} cellspacing={0}>
        <thead>
          <tr>
            <th>Sneaker</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.tab.map((b, k) => {
            return (
              <tr key={k}>
                <td className="countimg">
                  <img src={b.src} alt="sneaker" width="80"></img>
                </td>
                <td>{b.nom}</td>
                <td>{b.prix}</td>
                <td
                  className="countbtn"
                  onClick={() => props.fnSupprimer(b.id)}
                >
                  <button id="btndelete">Delete</button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4}>
              Total : 
              {props.tab.reduce((t, a) => t + a.prix, 0)}
            </td>
          </tr>
        </tbody>
      </table> */}
        <div className="total">
          <h1>Summary</h1>
          <div className="firstpart">
            <span>Subtotal</span>
            <span id="totalprix">{total} $</span>
            <br />
            <span>Estimated pick-up andshipping costs   </span>
            <span>     Free</span>
          </div>
          <div className="firstpart">
            <span>Total</span>
            <span id="totalprix">{total} $</span>
          </div>
          <Link to={'/pages/Payment'}><button className="btn_payer">Payment</button></Link>
          <br />
          <button className="btn_paypal">
            <span id="sp1">Pay</span>
            <span id="sp2">Pal</span>
          </button>
          {
            props.tab.length >0?<button onClick={()=>props.DeleteAll()} id="btndelete_all">Delete All</button>:''
          }
        </div>
      </div>
    </>
  );
}
