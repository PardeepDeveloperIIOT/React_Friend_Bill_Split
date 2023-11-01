import React from "react";
import Button from "./Button";

function FriendListItems({ friendlist, onSelectFriend, SinglefriendData }) {
  let selectedFriend = friendlist.id === SinglefriendData.id ? true : false;

  return (
    <React.Fragment>
      <div className={`Friend_List ${selectedFriend && "Friend-active"}`}>
        <img src={friendlist.image} alt="i"></img>
        <div className="friend_name_message">
          <h3>{friendlist.name}</h3>

          {friendlist.balance < 0 && (
            <p className="friend-message-sub">
              You owe {friendlist.name} {Math.abs(friendlist.balance)} Rs
            </p>
          )}
          {friendlist.balance > 0 && (
            <p className="friend-message-add">
              {friendlist.name} owes you {Math.abs(friendlist.balance)} Rs
            </p>
          )}
          {friendlist.balance === 0 && (
            <p>You and {friendlist.name} are even</p>
          )}
        </div>
        <Button onClick={() => onSelectFriend(friendlist)}>
          {selectedFriend ? "Close" : "Select"}
        </Button>
      </div>
    </React.Fragment>
  );
}

export default FriendListItems;
