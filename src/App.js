import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Headphones", price: 2000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
    { id: 4, name: "Watch", price: 4500, category: "Fashion" },
    { id: 5, name: "Mobile", price: 25000, category: "Electronics" }
  ];

  const [filter, setFilter] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (filter === "low") return p.price < 5000;
    if (filter === "high") return p.price >= 5000;
    return true;
  });

  return (
    <div className="container">
      <h1>Dynamic Product Filter</h1>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All Products</option>
        <option value="low">Below ₹5000</option>
        <option value="high">Above ₹5000</option>
      </select>

      <div className="grid">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <small>{item.category}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
