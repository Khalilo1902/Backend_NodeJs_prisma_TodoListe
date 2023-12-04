import { useState } from "react";
import Task from "./components/Task";
import TodoForm from "./components/TopForm";
import { ITask } from "./interface";

const App = () => {
  const [tasks, setTask] = useState<ITask[]>([
    {
      id: "1",
      task: " numberOne",
    },
    {
      id: "2",
      task: " numberTow",
    },
    {
      id: "3",
      task: " numberThree",
    },
  ]);

  const deleteTask = (id: string) => {
    const cloneTask = structuredClone(tasks);
    const filterTask = cloneTask.filter((task) => task.id !== id);
    setTask(filterTask);
  };
  const addNewTask = (newTask: ITask) => {
    setTask([...tasks, newTask]);
  };
  const updateTask = (id: string, newTask: ITask[]) => {
    const findIndexTask = newTask.findIndex((task) => task.id === id);
    if (findIndexTask !== -1) {
      const updateTasks = [...tasks];
      updateTasks[findIndexTask] = { ...updateTasks[findIndexTask] };
      setTask(updateTasks);
    }
  };
  return (
    <div>
      <TodoForm addNewTask={addNewTask} />
      <Task tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  );
};

export default App;
