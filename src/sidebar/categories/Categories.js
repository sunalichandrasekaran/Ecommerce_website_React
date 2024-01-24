import React from "react";
import "./Categories.css";
import Inputs from "../../Components/Inputs";

function Categories({ handleChange }) {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>
          <Inputs
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Inputs
            handleChange={handleChange}
            value="falts"
            title="Falts"
            name="test"
          />
          <Inputs
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Inputs
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </div>
      </div>
    </>
  );
}

export default Categories;
