import React from "react";
import Task from "./Task"



function TaskList({ deleteTask, categoryFilter}) {

  const taskedList = categoryFilter.map((t) => (
    <Task key={t.text} text={t.text} category={t.category} deleteTask={deleteTask}/>
  ))

  // const mappedArray = tasks.map(task =>
  //   <Task category={task.category} text={task.text} key={task.text} task={tasks} deleteTask={deleteTask}/>
  // )
  return (
    <div className="tasks">
      {taskedList}
    </div>
  );
}

export default TaskList;
