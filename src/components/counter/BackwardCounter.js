import useCounter from "../../hooks/useCounter";

import Card from "../UI/Card";

const BackwardCounter = () => {
  const counter = useCounter("backwards");

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
