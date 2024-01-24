import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SidebarComponent from "./sidebar/SidebarComponent";
import products from "./db/data";
import Cards from "./Components/Cards";
import "./index.css";

function App() {
  //setting the useState for getting and setting the value
  const [seleteCategory, setSeleteCategory] = useState(null);
  const [query, setQuery] = useState();

  //function
  function handleInputChange(e) {
    return e.target.value;
  }

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //--for radio filter --//
  const handleChange = (event) => {
    setSeleteCategory(event.target.value);
  };

  //--for button filter--//
  const handleClick = (event) => {
    setSeleteCategory(event.target.value);
  };

  //main function
  function filterData(products, selected, query) {
    let filterProducts = products;

    //flitering input items
    if (query) {
      filterProducts = filteredItems;
    }

    //selected filter
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filterProducts.map(
      ({ img, title, star, reviews, prePrice, newPrice }) => (
        <Cards
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prePrice={prePrice}
        />
      )
    );
  }
  const result = filterData(products, seleteCategory, query);
  return (
    <>
      <SidebarComponent handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
