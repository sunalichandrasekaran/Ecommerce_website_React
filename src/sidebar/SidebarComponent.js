import React from "react";
import "./SideBar.css";
import Price from "./Price/Price";
import Categories from "./categories/Categories";
import Colors from "./colors/Colors";

const SidebarComponent = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Categories handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default SidebarComponent;
