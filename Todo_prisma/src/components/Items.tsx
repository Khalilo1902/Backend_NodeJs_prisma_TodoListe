import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { ITask } from "../interface";

type ItemsProps = {
  task: ITask;
  deleteTask: (id: string) => void;
  updateTask: (id: string, newTask: ITask[]) => void;
};

const Items = ({ task, deleteTask }: ItemsProps) => {
  return (
    <li
      className={`w-2/3 p-2  border-2 rounded shadow-md flex justify-between `}
    >
      <div>{task.task}</div>
      <div className=" flex items-center gap-2 justify-center">
        <button>
          <HiOutlinePencilAlt />
        </button>
        <button onClick={() => deleteTask(task.id)}>
          <IoTrashOutline />
        </button>
        <button>
          <MdDone />
        </button>
      </div>{" "}
    </li>
  );
};

export default Items;
