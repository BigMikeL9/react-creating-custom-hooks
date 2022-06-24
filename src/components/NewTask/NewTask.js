import React from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/useHttp";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // -------------------------------------------------------------------
  const request_Config = {
    url: "https://react-custom-http-hook-e2fcb-default-rtdb.firebaseio.com//tasks.json",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const transformedData = (data, taskText) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    console.log(createdTask);

    props.onAddTask(createdTask);
  };

  //  -- using Custom Hook --
  const { isLoading, error, sendRequest: enterTaskHandler } = useHttp();
  // -------------------------------------------------------------------

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        requestConfig={request_Config}
        transformedData={transformedData}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
