import React from "react";

const Inputs = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <sapn className="checkmark" style={{ backgroundColor: color }}></sapn>
      {title}
    </label>
  );
};

export default Inputs;
