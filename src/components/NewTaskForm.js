import React, { useState } from "react";

function NewTaskForm({ handleAddTask, aCategory}) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTask({text, category})
    setText("")
    setCategory("Code")
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {aCategory.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
