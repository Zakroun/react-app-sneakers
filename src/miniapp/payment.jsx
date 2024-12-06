import { useState } from "react";
import { Link } from "react-router-dom";
export default function Payment(props) {
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [secondname, setsecondname] = useState("");
  const [adresse, setadresse] = useState("");
  const [tel, settel] = useState("");

  const [cardnumber, setcardnumber] = useState("");
  const [datecard, setdatecard] = useState("");
  const [Cvv, setCvv] = useState("");
  const total = props.tab.reduce((t, a) => t + a.price, 0);
  const hide = () => {
    if (
      email !== "" &&
      firstname !== "" &&
      secondname !== "" &&
      adresse !== "" &&
      tel !== ""
    ) {
      document.getElementById("divadresse").style.display = "none";
      document.getElementById("divpaimentcart").style.display = "block";
    } else {
      alert("Please fill all the fields");
      setemail("");
      setfirstname("");
      setsecondname("");
      setadresse("");
      settel("");
    }
  };
  const hide2 = () => {
    if (cardnumber !== "" && datecard !== "" && Cvv !== "") {
      document.getElementById("divpaimentcart").style.display = "none";
      document.getElementById("orderSummary").style.display = "block";
    } else {
      alert("Please fill all the fields");
      setcardnumber("");
      setdatecard("");
      setCvv("");
    }
  };
  const confirminfo = () => {
    alert("The order was successfully completed");
  };
  return (
    <div className="payment">
      <h1 style={{ textAlign: "center" }}>Payment</h1>
      <div className="parentofall">
        <div className="parentpayment">
          <h1 style={{ color: "gray" }}>Adresse</h1>
          <div className="adresse" id="divadresse">
            <input
            value={email}
              type="email"
              name="email"
              id="inemail"
              placeholder="Email *"
              onChange={(e) => setemail(e.target.value)}
            />
            <br />
            <input
            value={firstname}
              type="text"
              name="name"
              id="name"
              placeholder="Forename *"
              onChange={(e) => setfirstname(e.target.value)}
            />
            <input
            value={secondname}
              type="text"
              name="name"
              id="name"
              placeholder="Name *"
              onChange={(e) => setsecondname(e.target.value)}
            />
            <br />
            <input
            value={adresse}
              type="text"
              name="adresse"
              id="inemail"
              placeholder="Start typing the adresse"
              onChange={(e) => setadresse(e.target.value)}
            />
            <br />
            <input
            value={tel}
              type="tel"
              name="tele"
              id="name"
              placeholder="Phone Number *"
              onChange={(e) => settel(e.target.value)}
            />
            <br />
            <button id="Save" onClick={hide}>
              Save and continue
            </button>
          </div>
          <hr className="hrdivs" />
          <h1 style={{ color: "gray" }}>Payment</h1>
          <div className="paimentcart" id="divpaimentcart">
            <input
            value={cardnumber}
              type="text"
              name="email"
              id="Card"
              placeholder="Your Card number *"
              onChange={(e) => setcardnumber(e.target.value)}
            />
            <br />
            <input
            value={datecard}
              type="text"
              name="name"
              id="infoCard"
              placeholder="MM/AA *"
              onChange={(e) => setdatecard(e.target.value)}
            />
            <input
            value={Cvv}
              type="text"
              name="name"
              id="infoCard"
              placeholder="CVV *"
              onChange={(e) => setCvv(e.target.value)}
            />
            <br />
            <div className="inform">
              <span>Shipping address : </span>
              <br />
              <span id="spaninfo">{email}</span>
              <br />
              <span id="spaninfo">
                {firstname} {secondname}
              </span>
              <br />
              <span id="spaninfo">{adresse}</span>
              <br />
              <span id="spaninfo">{tel}</span>
              <br />
            </div>
            <button id="Save" onClick={hide2}>
              Confirm and continue
            </button>
          </div>
          <hr className="hrdivs" />
          <h1 style={{ color: "gray" }}>Order Summary</h1>
          <div className="order" id="orderSummary">
            <span>Total Price</span>
            <span id="totalprix">{total} $</span>
            <br />
            <span>Shipping address : </span>
            <br />
            <span id="spaninfo">{email}</span>
            <br />
            <span id="spaninfo">
              {firstname} {secondname}
            </span>
            <br />
            <span id="spaninfo">{adresse}</span>
            <br />
            <span id="spaninfo">{tel}</span>
            <br />
            <br />
            <span>Shipping card : </span>
            <br />
            <span id="spaninfo">{cardnumber}</span>
            <br />
            <span id="spaninfo">{datecard}</span>
            <br />
            <span id="spaninfo">{Cvv}</span>
            <br />
            <Link to={"/"}>
              <button id="Save" onClick={confirminfo}>
                Confirm and continue
              </button>
            </Link>
          </div>
        </div>
        <div className="total">
          <h1>Summary</h1>
          <div className="firstpart">
            <span>Subtotal</span>
            <span id="totalprix">{total} $</span>
            <br />
            <span>Estimated pick-up and shipping costs</span>
            <span>Free</span>
          </div>
          <div className="firstpart">
            <span>Total</span>
            <span id="totalprix">{total} $</span>
          </div>
        </div>
      </div>
    </div>
  );
}
