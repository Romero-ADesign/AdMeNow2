import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Home from "./Home.js";
import Login from "./Login.js";
import MyPage from "./MyPage.js";
import NavBar from "./NavBar.js";

function App() {
  const [ads, setAds] = useState([]);
  const [tags, setTags] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/ads").then((resp) => {
      setAds(resp.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/tags").then((resp) => {
      setTags(resp.data);
    });
  }, []);

  function changeUser(newUser) {
    setUser(newUser);
    console.log(newUser);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home ads={ads} tags={tags} />} />
            <Route path="login" element={<Login changeUser={changeUser} />} />
            <Route path="mypage" element={<MyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
