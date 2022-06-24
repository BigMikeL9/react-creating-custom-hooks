import { useRef } from "react";
import styled from "styled-components";

const TaskFormStyled = styled.form`
  display: flex;
  justify-content: space-between;

  & input {
    font: inherit;
    padding: 0.25rem;
    border: none;
    border-bottom: 3px solid #ccc;
    flex: 1;
    margin-right: 2rem;
  }

  & input:focus {
    outline: none;
    border-color: #7a0144;
  }
`;

const TaskForm = (props) => {
  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      props.onEnterTask(
        enteredValue,
        props.requestConfig,
        props.transformedData
      );
    }
  };

  return (
    <TaskFormStyled onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{props.loading ? "Sending..." : "Add Task"}</button>
    </TaskFormStyled>
  );
};

export default TaskForm;
