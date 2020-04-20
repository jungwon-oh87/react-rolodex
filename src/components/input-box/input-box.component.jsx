import React from "react";

import "./input-box.style.css";

export const InputBox = (props) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
