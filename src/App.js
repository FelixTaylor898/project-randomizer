import { useState } from "react";
import { randomizePlan } from "./utils/randomizer";
import "./App.css";

export default function App() {
const [minTime, setMinTime] = useState(5);
const [maxTime, setMaxTime] = useState(30);
const [projects, setProjects] = useState([]);
const [tasks, setTasks] = useState([]);
const [randomPlan, setRandomPlan] = useState(null);

const handleAddProject = () => {
const projectName = prompt("Enter project name:");
if (projectName) setProjects([...projects, projectName]);
};

const handleAddTask = () => {
const taskName = prompt("Enter task name:");
if (taskName) setTasks([...tasks, taskName]);
};

const handleDeleteProject = (index) => {
setProjects(projects.filter((_, i) => i !== index));
};

const handleDeleteTask = (index) => {
setTasks(tasks.filter((_, i) => i !== index));
};

const handleRandomize = () => {
if (projects.length === 0 || tasks.length === 0) {
alert("Please add at least one project and one task.");
return;
}
if (minTime > maxTime) {
alert("Minimum time cannot be greater than maximum time.");
return;
}
const result = randomizePlan(minTime, maxTime, projects, tasks);
setRandomPlan(result);
};

return (
<div>
  <h1>Random Work Planner</h1>
  <div className="center">
  <div className="section randomized">
     <h2>Randomized Plan</h2>
      {randomPlan && (
        <div className="randomPlan">
  <div className="randomPlanItem">
    <b>Project:</b> <span>{randomPlan.project}</span>
  </div>
  <div className="randomPlanItem">
    <b>Task:</b> <span>{randomPlan.task}</span>
  </div>
  <div className="randomPlanItem">
    <b>Duration:</b> <span>{randomPlan.time} mins</span>
  </div>
</div>

  )}
  <button className="functionButton mainButton" onClick={handleRandomize}>Randomize Plan</button>
</div>

    <div className="section inputs">

      <div className="input-container">
        <h2>Time</h2>

        <div className="numInput">
          <label className="input-label">Min minutes:</label>
          <input type="number" value={minTime} min="0" max={maxTime} onChange={(e)=> setMinTime(Number(e.target.value))}
          className="input-field"
          />
        </div>
        <div className="numInput">

          <label className="input-label">Max minutes:</label>
          <input type="number" value={maxTime} min={minTime} onChange={(e)=> setMaxTime(Number(e.target.value))}
          className="input-field"
          />
        </div>
      </div>

      <div className="taskProject">
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
          <li key={index}>
            <button className="delete" onClick={()=> handleDeleteProject(index)}>X</button> {project} 
          </li>
          ))}
        </ul>
        <button className="functionButton" onClick={handleAddProject}>Add Project</button>
      </div>

      <div className="taskProject">
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task, index) => (
          <li key={index}>
             <button className="delete" onClick={()=> handleDeleteTask(index)}>X</button> {task}
          </li>
          ))}
        </ul>
        <button className="functionButton" onClick={handleAddTask}>Add Task</button>
      </div>

    </div>

</div>
</div>
);
}