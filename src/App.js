import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  // -------------------------------------------------------------------
  //  -- using Custom Hook --
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const request_Config = {
      url: "https://react-custom-http-hook-e2fcb-default-rtdb.firebaseio.com/tasks.json",
    };

    const transformedData = (data) => {
      const loadedTasks = Object.entries(data);

      const fetchedTasks = loadedTasks.map((task) => {
        const [key, value] = task;

        return {
          id: key,
          text: value,
        };
      });

      setTasks(fetchedTasks);
    };

    fetchTasks("", request_Config, transformedData);
  }, [fetchTasks]);
  // -------------------------------------------------------------------

  const taskAddHandler = useCallback((task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
