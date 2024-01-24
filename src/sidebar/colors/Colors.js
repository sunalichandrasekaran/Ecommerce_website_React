import React from "react";
import "./Colors.css";
import Inputs from "../../Components/Inputs";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark all"></span>All
        </label>
        <Inputs
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />
        <Inputs
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />
        <Inputs
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />
        <label className="sidebar-label-container">
          <Inputs
            handleChange={handleChange}
            value="green"
            title="Green"
            name="test3"
            type="radio"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
