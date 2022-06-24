import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import styled from "styled-components";

const TasksListStyled = styled.ul`
  text-align: center;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
  }
`;

const Tasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <TasksListStyled>{content}</TasksListStyled>
    </Section>
  );
};

export default Tasks;
