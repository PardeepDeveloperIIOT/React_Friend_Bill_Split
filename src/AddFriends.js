import React, { useState } from "react";
import Button from "./Button";

function AddFriends({ setFriend }) {
  const [name, setAddFriendName] = useState();
  const [image, setAddFriendImg] = useState("https://i.pravatar.cc/42");

  function AddMyFrind(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const FinalFriendList = {
      name,
      image: `${image}?u=${id}`,
      id,
      balance: 0,
    };
    console.log(FinalFriendList);
    setFriend((olddata) => [...olddata, FinalFriendList]);
    setAddFriendName("");
  }

  return (
    <React.Fragment>
      <div className="addfriend-container">
        <form onSubmit={AddMyFrind}>
          <label>🧑‍🤝‍🧑Friend Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setAddFriendName(e.target.value)}
          ></input>
          <br></br>
          <label>🌄 Images URL</label>
          <input type="text" value={image} disabled></input>
          <br></br>
          <div className="addfriend-btn">
            <Button>Add</Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddFriends;
