import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";

function MyPage({ads, tags}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [selectedTagId, setSelectedTagId] = useState(null);
  

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
        tag_id: selectedTagId
      }),
    };
  
    fetch("http://localhost:3000/api/ads", configObj)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  //placeholder until we can make user id 3 dynamic with auth
  const myAds = ads.filter((ad) => ad.user_id === 3);

  return (
    <div className="MyPage">
      <h1>Post A New Ad</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="name">
          Name your ad
          <input
            type="text"
            id="name"
            placeholder="example: 2006 Honda"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <br />
        <label htmlFor="description">
          Description of your product/service
          <input
            type="text"
            id="description"
            placeholder="list specifics of here..."
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </label>
        <br />
        <label htmlFor="image">
          Image of your product/service
          <input
            type="text"
            id="image"
            placeholder="url link to image..."
            onChange={(e) => setImage(e.target.value)}
          ></input>
        </label>
        <br />
        <label htmlFor="price">
          Price you are offerring
          <input
            type="text"
            id="price"
            placeholder="numbers only no decimals, symbols, etc..."
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </label>
        <br />
        <label htmlFor="tag">
          Select a tag
          <select id="tag" onChange={(e) => setSelectedTagId(e.target.value)}>
            <option value="">Select a tag</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit"></input>
      </form>
      <h1>My Ads</h1>
      {myAds.map((ad) => (
        <div key={ad.id}>
          <h2>{ad.name}</h2>
          <p>{ad.description}</p>
          <Link to={`/ad/${ad.id}`}>
            <img src={ad.image} alt="product/service" />
          </Link>
          <p>{ad.price}</p>
        </div>
      ))}
    </div>
  );
}

export default MyPage;
