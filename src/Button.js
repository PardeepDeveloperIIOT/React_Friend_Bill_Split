import React from "react";

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="allbtn">
      {children}
    </button>
  );
}

export default Button;
