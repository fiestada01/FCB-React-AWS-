import Task from "./Task";


function TaskList (){

    const taskItemList = [
        "Add me on Facebook",
        "Connect in LinkedIn",
        "Subscribe to Youtube Channel",
        "Add me on Instagram"        

    ];

    return (

        <div>

            <input className="task-iput"/>
        <ul >
            {taskItemList.map((task, index)=>{
                

               return <Task key={index} taskName={task} />;
            })}
             
        </ul>

        </div>
    );

}
export default TaskList;