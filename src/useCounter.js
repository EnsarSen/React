import { useState } from "react";

export const useCounter = (initalVal = 0) => {
  const [counter, setCounter] = useState(initalVal);

  const increase = () => {
    setCounter((prev) => prev + 1);
  };

  const decrease = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter((prev) => (prev = 0));
  };
  return { increase, decrease, reset, counter };
};
