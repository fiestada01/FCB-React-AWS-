import { useState } from "react";
import Task from "./Task";


function TaskList (){

    const taskItemList = [
        "Add me on Facebook",
        "Connect in LinkedIn",
        "Subscribe to Youtube Channel",
        "Add me on Instagram"        

    ];

    const [taskValue, setTaskValue] = useState("Juast another task");
   // console.log("taskvalue: ", taskValue);

    const inputChangeHandler = (e)=>{
        setTaskValue(e.target.value)
    };
    
    return (

        <div>

            <input className="task-iput" 
            placeholder="Create new task"
            onChange={inputChangeHandler}
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