import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (taskText, request_Config, transformData) => {
      // ----------------------------
      // -- IMPORTANT note: adding 'request_Config, transformData' as parameters inside 'sendRequest()' function and not the 'useHttp' hook, so that we don't have to deal with the useCallback dependencies, since these variables are external.
      // ⭐ So in the future, add variables that will be used inside a function as parameters to that function ⭐
      // ----------------------------

      setIsLoading(true);
      setError(null);

      // console.log(taskText);
      // console.log(request_Config);
      // console.log(transformData);

      try {
        // -- 🛑🛑 Had a problem with structuring this. Also Google default fetch API option values.
        const response = await fetch(request_Config.url, {
          method: request_Config.method ? request_Config.method : "GET",
          body: taskText ? JSON.stringify(taskText) : null,
          headers: request_Config.headers ? request_Config.headers : {},
        });

        console.log(response);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        console.log(data);

        transformData(data, taskText);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }

      setIsLoading(false);
    },
    []
  );

  /* modern javascript trick, where React will expand it out as <x>:<x> 
    Same as 👇
                return {
                    isLoading: isLoading,
                    error: error,
                    sendRequest: sendRequest,
                  }
    */
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
