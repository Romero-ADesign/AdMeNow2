import React, { useState, useEffect } from 'react';

function SampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/sample_data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data.message}</div>;
}

export default SampleComponent;