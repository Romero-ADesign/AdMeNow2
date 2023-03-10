import React, { useState } from "react";

function Ad({ ad, user }) {
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function submitForm(e) {
    e.preventDefault();
    const configObj = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        price: parseInt(price),
        user_id: user.id,
        tag_id: 1,
      }),
    };
    fetch("http://localhost:3000/ads", configObj)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function clickChange() {
    setClicked(!clicked);
  }

  return (
    <div>
      <h2>{ad.name}</h2>
      <p>{ad.description}</p>
      <img src={ad.image} alt="product/service" />
      <h3>${ad.price}</h3>
      <button onClick={clickChange}>Edit form</button>
      (clicked ?{" "}
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
      : null)
    </div>
  );
}

export default Ad;
