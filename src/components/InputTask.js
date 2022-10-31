import { useState } from "react";
import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: "Casa", value: "casa" },
  { key: "oficina", text: "Oficina", value: "oficina" },
  { key: "otra", text: "Otra", value: "otra" },
];

function InputTask(props) {
  const { createTask } = props;

  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });

  const [error, setError] = useState();

  const onChangeTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const onChangeCategory = (e, data) => {
    setTask({ ...task, [data.name]: data.value });
  };

  const cleanTask = () => {
    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    });
  };

  const validateTask = () => {
    if (task.taskName.trim() === "") {
      setError(true);
      return false;
    }
    setError(false);
    task.idTask = uuidv4();
    return true;
  };

  const onSubmitTask = (e) => {
    e.preventDefault();

    //Validamos inputs
    if (!validateTask()) {
      return;
    }

    //creando la tarea
    createTask(task);

    //Limpiamos los inputs
    cleanTask();
  };

  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            type="text"
            size="small"
            icon="add"
            placeholder="Escribe tu tarea"
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="Categoria"
            value={task.categoryTask}
            onChange={onChangeCategory}
          />
          <Button type="submit" color="violet" onClick={onSubmitTask}>
            Añadir Tarea
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La Tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
}

export default InputTask;
