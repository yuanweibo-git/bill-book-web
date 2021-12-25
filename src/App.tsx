import React, { useState } from 'react'

function App() {
  const [data, setData] = useState([1, 2, 3, 4, 5])
  return (
      <div className="App">
        {
          data.map((item, index) => <div key={index}>{item}</div>)
        }
      </div>
  )
}

export default App
