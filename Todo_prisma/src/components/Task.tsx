import { ITask } from "../interface";
import Items from "./Items";

type ITaskProps = {
  tasks: ITask[]; // Corrected prop name
  deleteTask: (id: string) => void
  updateTask: (id: string, newTask: ITask[]) => void
};

const Task = ({ tasks,deleteTask,updateTask}: ITaskProps) => {
  return (
    <ul className="flex flex-col items-center py-10 gap-2">
      {
        tasks.map((task)=>(
            <Items key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
        ))
      }
    </ul>
  );
};

export default Task;
