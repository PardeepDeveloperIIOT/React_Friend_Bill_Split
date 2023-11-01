import React, { useState } from "react";
import Mydata from "./data";
import FriendListItems from "./FriendListItems";
import SplitBill from "./SplitBill";
import AddFriends from "./AddFriends";
import Button from "./Button";

function App() {
  const [Friend, setFriend] = useState(Mydata);
  const [addContainer, setAddContainer] = useState(true);
  const [SinglefriendData, setSingleFriendData] = useState("");
  const [balance, setbalance] = useState(0);

  function handleAddContainerBtn() {
    setAddContainer(!addContainer);
  }
  function handleSelectFriend(friend) {
    setSingleFriendData(friend);
  }
  function handlePendingPyament(payment, id) {
    setbalance(payment);
    setFriend((olddata) =>
      olddata.map((e) =>
        e.id === SinglefriendData.id
          ? { ...e, balance: e.balance + payment }
          : e
      )
    );
  }

  return (
    <React.Fragment>
      <h1 className="heading">🫵 SPLIT BILL 💵</h1>
      <div className="main">
        <div className="start">
          <div className="Friend_Container">
            <FriendListContainer
              Friend={Friend}
              SinglefriendData={SinglefriendData}
              onSelectFriend={handleSelectFriend}
            ></FriendListContainer>
          </div>
          {SinglefriendData && (
            <div className="SplitBill_container">
              <SplitBill
                payment={handlePendingPyament}
                SinglefriendData={SinglefriendData}
              ></SplitBill>
            </div>
          )}
        </div>
        <div className="addFriend-main">
          {addContainer && <AddFriends setFriend={setFriend}></AddFriends>}
        </div>
        <div className="addfriendbtnlast">
          <Button onClick={handleAddContainerBtn}>
            {addContainer ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

function FriendListContainer({ Friend, onSelectFriend, SinglefriendData }) {
  return (
    <React.Fragment>
      {Friend.map((friendlist, index) => (
        <FriendListItems
          SinglefriendData={SinglefriendData}
          onSelectFriend={onSelectFriend}
          friendlist={friendlist}
          key={index}
        ></FriendListItems>
      ))}
    </React.Fragment>
  );
}
export default App;
