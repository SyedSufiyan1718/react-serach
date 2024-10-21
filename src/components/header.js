import { useRef, useEffect, useState } from "react";
import Products from "./products";
import "./style.css";

function Header(props) {
  let input = useRef();
  const [items, setitems] = useState(Products);
  const [filteredItems, setfilteredItems] = useState([]);
  console.log(props.text)

  function search() {
    let searchValue = input.current.value.toLowerCase();
    console.log("Search value: ", searchValue);

    const match = items.filter((value) => {
      const ismatch = value.name.toLowerCase().includes(searchValue);
      return ismatch;
    });

    setfilteredItems(match);
    console.log("items : " + match.map((items) => items));

    input.current.value = "";
  }

  function change() {
    console.log(input.current.value);
  }

  return (
    <header>
      <select name="" id="">
        <option value="">All Choices</option>
        <option value="">Price</option>
        <option value="">Ram</option>
        <option value="">Rom</option>
        <option value="">Year</option>
        <option value="">Display</option>
        <option value="">Camera</option>
        <option value="">Battery</option>
        <option value="">Processor</option>
      </select>
      <input
        type="text"
        placeholder="Search Item"
        ref={input}
        onChange={change}
      />
      <button onClick={search}>Search</button>
    </header>
  );
}

export default Header;
