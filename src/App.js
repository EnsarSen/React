import './App.css';

function App() {
  
  const age = 21; 
  const isGreen = true;
  
  
  return <div className="App"> 
  {age >= 18 ? <h1>Is over age</h1> : <h1> is under age</h1>}
  <h1 style= {{color: isGreen ? "green" : "red"}}> THIS HAS COLOR</h1>
  </div>  
  
  
  
  
}








export default App;
