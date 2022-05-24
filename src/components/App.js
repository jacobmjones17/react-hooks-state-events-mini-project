import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [allTasks, setAllTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleAddTask(task) {
    setAllTasks(...allTasks, task)
  }

  function deleteTask(event) {
    console.log(event)
    const filteredTasks = allTasks.filter(task => task.text !== event)

    setAllTasks(filteredTasks)
  }
  const categoryFilter = allTasks.filter(
    (task) => category === "All" || task.category === category
  )

  console.log(categoryFilter)
  console.log(allTasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} category={category} setCategory={setCategory}/>
      <NewTaskForm handleAddTask={handleAddTask} aCategory={CATEGORIES.filter((c) => c !== "All")}/>
      <TaskList tasks={allTasks} deleteTask={deleteTask} categoryFilter={categoryFilter}/>
    </div>
  );
}

export default App;
