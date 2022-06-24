import { useState, useEffect } from "react";

const useCounter = (direction = "forwards") => {
  const [counter, setCounter] = useState(0);

  let increment = direction === "forwards" ? 1 : -1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + increment);
    }, 1000);

    return () => clearInterval(interval);
  }, [increment]);

  return counter;
};

export default useCounter;
