import { useEffect, useState } from "react";
import Image from "./Component/Image";

function App() {
  const [number, setNumber] = useState(0);
  const [imageShowing, setImageShowing] = useState(false)

  useEffect(() => {
    // when ever you component mount / yaa fir jab mera component load ho jae ga tab useEffect run hoga
    console.log("App Component has been mounted");
  }, []);

  return (
    <div className="container">
      <h1>useEffect</h1>
      <h3>{number}</h3>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>
        -
      </button>
      <button className="btn btn-info" onClick={() => setImageShowing(!imageShowing)}>Hide / Show</button>
      {
        imageShowing ? <Image/> : null
      }
    </div>
  );
}

export default App;
