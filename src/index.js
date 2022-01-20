
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// My first component
function Task(props){
    
    return (
        <li className="task-item">{props.taskName}</li>

    );
}


function TaskList (){
    return (
        <ul >
            <Task taskName="Add me on Facebook"/>
            <Task taskName="Connect in LinkedIn"/> 
            <Task taskName="Subscribe to Youtube Channel"/> 
             
        </ul>
    );

}
function App() {

    const paraStyle = {
        "marginBottom": "15px"
    };

  return (

    <div className="app">

        <header className="app-header">
            <h1>My Amazing ToDo-List App</h1>

            <p style={paraStyle}>The most simple and amazing todo-list React App.</p>
            
            <TaskList />
        </header>
    </div>
  );

}



ReactDOM.render(<App />, document.getElementById("root"));