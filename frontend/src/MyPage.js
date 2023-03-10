import { useState, useEffect } from "react";
import React from "react";

function MyPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function submitForm(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        price: parseInt(price),
      }),
    };
    fetch("http://localhost:3000/ads", configObj)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="MyPage">
      <h1>Post A New Ad</h1>
      <form onSubmit={submitForm}>
        <label for="name">
          Name your ad
          <input
            type="text"
            id="name"
            placeholder="example: 2006 Honda"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <br />
        <label for="description">
          Description of your product/service
          <input
            type="text"
            id="description"
            placeholder="list specifics of here..."
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </label>
        <br />
        <label for="image">
          Image of your product/service
          <input
            type="text"
            id="image"
            placeholder="url link to image..."
            onChange={(e) => setImage(e.target.value)}
          ></input>
        </label>
        <br />
        <label for="price">
          Price you are offerring
          <input
            type="text"
            id="price"
            placeholder="numbers only no decimals, symbols, etc..."
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </label>
        <br />
        <input type="submit"></input>
      </form>
      <h1>My Adds</h1>
    </div>
  );
}

export default MyPage;
