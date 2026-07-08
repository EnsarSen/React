import "./App.css";
import { useCounter } from "./useCounter";

function App() {
  const { increase, decrease, reset, counter } = useCounter();

  return (
    <div className="App">
      <button onClick={increase}> Increase </button>
      <button onClick={decrease}> Decrease </button>
      <button onClick={reset}> Reset </button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
