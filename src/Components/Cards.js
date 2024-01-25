import React from "react";
import { BsFillBagHeartFill } from "react-icons/bs";
import "./Cards.css";

const Cards = ({ img, title, star, reviews, prePrice, newPrice }) => {
  return (
    <section className="card_container">
      <img className="img_card" src={img} alt={title} />
      <div className="card-details">
        <h3 className="card_title">{title}</h3>
        <section className="card-reviews">
          {star} {star}
          {star}
          {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prePrice}</del>
            {newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cards;
