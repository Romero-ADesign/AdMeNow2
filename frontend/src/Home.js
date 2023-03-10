import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Ad from "./Ad.js";

function Home({ ads, tags }) {
  return (
    <div className="Ads">
      <h1>Current Ads</h1>
      <h2>Filter by Tags</h2>
      {tags.map((tag) => (
        <button>{tag.name}</button>
      ))}
      {ads.map((ad) => (
        <Ad ad={ad} key={ad.id} />
      ))}
    </div>
  );
}

export default Home;
