import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiComponent;
