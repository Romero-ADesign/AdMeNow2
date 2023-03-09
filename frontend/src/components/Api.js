import React, { useEffect, useState } from "react";
import axios from "axios";

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/ads/").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}

export default Api;