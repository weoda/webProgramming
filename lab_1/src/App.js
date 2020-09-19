import React, { useState } from "react";
import "./styleA.css";
import "./styleB.css";
// import "./styleC.css";
const items = ["A", "B", "C", "D", "E", "F"];
alert("Click-лээд style соль, App.js дотор StyleC-г идэвхжүүл :D");
function App() {
  const [change, setchange] = useState(false);
  return change == false ? (
    <div onClick={() => setchange(!change)} className="container">
      {items.map((items) => (
        <div>{items}</div>
      ))}
    </div>
  ) : (
    <div onClick={() => setchange(!change)} className="container_b">
      {items.map((items) => (
        <div>{items}</div>
      ))}
    </div>
  );
}

export default App;
