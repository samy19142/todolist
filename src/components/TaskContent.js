import { Header, Icon, Grid } from "semantic-ui-react";
import Task from "./Task";

function TaskContent(props) {
  const { tasks, deleteTask } = props;

  return (
    <>
      {tasks.length > 0 ? (
        <Grid className="tasks-content">
          <Header as="h4" icon textAlign="center">
            <Icon name="settings" />
            Administra tus tareas
          </Header>

          <Grid.Row>
            {tasks.map((task, index) => (
              <Task key={index} task={task} deleteTask={deleteTask} />
            ))}
          </Grid.Row>
        </Grid>
      ) : (
        <Grid className="task-content">
          <Header icon textAlign="center">
            Eres Libre!
          </Header>
        </Grid>
      )}
    </>
  );
}

export default TaskContent;
