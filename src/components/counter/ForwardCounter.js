import useCounter from "../hooks/useCounter";

import Card from "./UI/Card";

const ForwardCounter = () => {
  const counter = useCounter("forwards");

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
