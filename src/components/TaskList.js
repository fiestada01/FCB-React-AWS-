import { useState } from "react";
import Task from "./Task";


function TaskList (){

    const [taskItemList, setTaskItemsList] = useState([
        "Add me on Facebook",
        "Connect in LinkedIn",
        "Subscribe to Youtube Channel",
        "Add me on Instagram"        

    ]);

    const [taskValue, setTaskValue] = useState("");
   

    const inputChangeHandler = (e)=>{
        setTaskValue(e.target.value)
    };


    const addTaskHandler = (e) => {
        setTaskItemsList([e.target.value, ...taskItemList]);
        setTaskValue("");
      };

    return (

        <div>

    <input
        className="task-input"
        placeholder="Create a new task"
        onChange={inputChangeHandler}
        onBlur={addTaskHandler}
        value={taskValue}
      />

        <ul >
            {taskItemList.map((task, index)=>{
                

               return <Task key={index} taskName={task} />;
            })}
             
        </ul>

        </div>
    );

}
export default TaskList;