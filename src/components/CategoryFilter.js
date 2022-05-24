import React from "react";

function CategoryFilter({categories, category, setCategory}) {

  const categoryPicker = categories.map((c) => {
    const name = c === category ? "selected" : null
    return (
      <button key={c} className={name} onClick={() => setCategory(c)}>{c}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryPicker}
    </div>
  );
}

export default CategoryFilter;
