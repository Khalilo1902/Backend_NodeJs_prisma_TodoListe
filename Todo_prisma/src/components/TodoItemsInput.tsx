import { FaSave } from "react-icons/fa";
import { ITask } from "../interface";
import { useState } from "react";

type TodoInputProps = {
  task: ITask;
  updateTask: (id: string, newTask:string) => void;
};
const TodoItemsInput = ({ task, updateTask }: TodoInputProps) => {
    const [newName,setNewName]= useState<string>(task.task)

    const handleUpdate = ()=>{
        updateTask(task.task,newName)
    }
   
  return (
    <li
      className={` w-2/3 p-2  border-2 rounded shadow-md flex justify-between `}
    >
      <input
        value={newName}
        className="border border-gray-300 outline outline-none bg-gray-100 text-black rounded py-1"
        type="text"
        onChange={(e)=>setNewName(e.target.value)}
      />
      <button onClick={}>
        <FaSave />
      </button>
    </li>
  );
};

export default TodoItemsInput;
