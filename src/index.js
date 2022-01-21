
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskList from "./components/TaskList";
// My first component



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