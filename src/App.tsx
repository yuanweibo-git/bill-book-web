import React, { useState, useEffect } from 'react';

function getList(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([9, 8, 7, 6, 5, 3, 3, 1]);
    }, 2000);
  });
}

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    (async () => {
      const data = await getList();
      console.log(data);
      setData(data);
    })();
  }, []);

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
