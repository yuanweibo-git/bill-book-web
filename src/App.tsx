import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    data.map((item) => {
      console.log(item);
    });
  });

  return (
    <div className="App">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setData([9, 6, 3, 5, 78, 5, 9]);
          }}
        >
          {item}
          <div />
        </div>
      ))}
    </div>
  );
}

export default App;
