import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Ad from "./Ad.js";

function Ads() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/ads").then((resp) => {
      setAds(resp.data);
    });
  }, []);
  return (
    <div className="Ads">
      <h1>Current Ads</h1>
      {ads.map((ad) => (
        <Ad ad={ad} />
      ))}
    </div>
  );
}

export default Ads;
