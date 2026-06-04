import './App.css';
import { useState } from 'react'

function App() {

const[textColor, setTextColor] = useState("black");


return( <div className="App"> 
    <button onClick={ () => {setTextColor(textColor === "black" ? "red" : "black")}}>Show/Hide</button>
  <h1 style = {{color: textColor}}> HI MY NAME IS ENSAR</h1>
</div>
);
}


export default App;