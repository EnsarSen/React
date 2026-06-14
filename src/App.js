import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [genExcuse, setGenExcuse] = useState("");

  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGenExcuse(res.data[0].excuse);
      },
    );
  };

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchData("party")}> Party </button>
      <button onClick={() => fetchData("family")}> Family </button>
      <button onClick={() => fetchData("office")}> Office </button>

      <p>{genExcuse}</p>
    </div>
  );
}
export default App;
