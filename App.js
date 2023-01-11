import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Chart() {
  const [xValues, setXValues] = useState("");
  const [yValues, setYValues] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {x: xValues, y: yValues};
    axios.post('http://localhost:5000/plot.png',data)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          X values:
          <input
            type="text"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
        </label>
        <label>
          Y values:
          <input
            type="text"
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <img src={`http://localhost:5000/plot.png?x=${x}&y=${y}`} alt="Wykres" />
    </>
  );
}


export default Chart;
