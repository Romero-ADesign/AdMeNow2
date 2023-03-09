/*import { useState, useEffect } from "react";
import React from "react";
import Ad from "./Ad.js";

function Ads() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("/ads")
      .then((r) => r.json())
      .then((data) => setAds(data));
  }, []);

  return;
  <div className="Ads">
    <h1>Current Ads</h1>
    {ads.map((ad) => (
      <Ad ad={ad} />
    ))}
  </div>;
}

export default Ads */
import React from "react";

function Ads() {
  return <h1>Ads</h1>;
}

export default Ads;
