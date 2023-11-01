import React, { useState } from "react";

function SplitBill({ SinglefriendData, payment }) {
  const [bill, setbill] = useState(0);
  const [Yourbill, setYourbill] = useState(0);
  const [payingbill, setPayingBill] = useState("");

  if (Yourbill > bill ? setYourbill(0) : Yourbill);
  let TotalPending = bill - Yourbill;

  function test(e) {
    let mybalance;
    e.preventDefault();
    payingbill === "user"
      ? (mybalance = TotalPending)
      : (mybalance = -TotalPending);
    payment(mybalance, SinglefriendData.id);
  }
  return (
    <React.Fragment>
      <div className="splitbill-section">
        <h3 style={{ textAlign: "center" }}>
          {`SPLIT BILL WITH ${SinglefriendData.name}`.toUpperCase()}
        </h3>
        <form onSubmit={test}>
          <label>💵Bill Value</label>
          <input
            type="text"
            value={bill}
            onChange={(e) => setbill(Number(e.target.value))}
          ></input>
          <br></br>
          <label>🫵 Your Expense</label>
          <input
            type="text"
            value={Yourbill}
            onChange={(e) => setYourbill(Number(e.target.value))}
          ></input>
          <br></br>
          <label>🙆‍♂️ {SinglefriendData.name} expense</label>
          <input type="text" disabled value={TotalPending}></input>
          <br></br>
          <label>🔘 Who is paying the bill ?</label>
          <br></br>
          <select
            value={payingbill}
            onChange={(e) => setPayingBill(e.target.value)}
          >
            <option value="user">You</option>
            <option value="rahul">{SinglefriendData.name}</option>
          </select>
          <div className="addfriend-btn">
            <button className="allbtn">Select</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default SplitBill;
