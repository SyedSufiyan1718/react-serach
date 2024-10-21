import logo from "./logo.svg";
import "./components/style.css";
import Products from "./components/products.js"; // Import the Products function
import Header from "./components/header.js";
import Main from "./components/main.js";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(Products); // Call the Products function to get array

  return (
    <div className="main_sec">
      <Header />
      <Main />
      <section className="card-main-Sec">
      {products.map((v, index) => (
          <section className="card" key={index}>
            <img src={v.img} alt="#" />
            <h1>{v.name}</h1>
            <p>{v.price}</p>
            <p>{v.year}</p>
            <p className="descrip">{v.description}</p>
            <div className="cardInfo">
              <span>{v.rom}</span>
              <span>{v.ram}</span>
            </div>
            <div className="cardInfo">
              <span>{v.processor}</span>
              <span>{v.battery}</span>
            </div>
            <div className="cardInfo">
              <span>{v.camera}</span>
              <span>{v.display}</span>
            </div>
            <div className="cardBtn">
              <button>Buy</button>
            </div>
          </section>
      ))}
      </section>
    </div>
  );
}

export default App;
