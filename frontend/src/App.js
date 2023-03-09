import { useState, useEffect } from "react";
import React from "react";
import Home from "./Home.js";
import Ads from "./Ads.js";
import MyPage from "./MyPage.js";

function App() {
  /* const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []); */

  return (
    <div className="App">
      <Ads />
      <Home />
      <MyPage />
    </div>
  );
}

export default App;
