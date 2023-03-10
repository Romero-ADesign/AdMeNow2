import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function MyPage() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/users/1").then((resp) => {
      console.log(resp.data);
    });
  }, []);

  console.log(user);

  return (
    <div className="MyPage">
      <h1>My Adds</h1>
    </div>
  );
}

export default MyPage;
