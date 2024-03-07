import { useState } from "react";

function App() {
  // useState is a function which will return an Array
  // 1 -> initialValue
  // 2 -> function this function will change the initialValue

  const [userName, setUserName] = useState("Sahaj");
  const [number, setNumber] = useState(0);
  const [onOff, setOnOff] = useState(true)

  return (
    <div className="container">
      <h1>Working With Boolean :-</h1>
      <button className="btn btn-danger mx-1" onClick={() => setOnOff(false)}>Hide</button>
      <button className="btn btn-primary mx-1" onClick={() => setOnOff(true)}>Show</button>
      <button className="btn btn-info mx-1" onClick={() => setOnOff(!onOff)}>Hide/Show</button>
      <br/>
      <br/>
      {
      onOff ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdq5xss
      DWYFEfUFurMPXpkiaVUaVhVp70qaQ&usqp=CAU"></img> : null 
      }
      <hr />
      <h1>Working with number :-</h1>
      <h1>{number}</h1>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>
        -
      </button>
      <hr />
      <h1>Working with string :-</h1>
      <h1>My Name is {userName}</h1>
      <button className="btn btn-info" onClick={() => setUserName("Sahaj_109")}>
        Change
      </button>
    </div>
  );
}

export default App;
