import React, {useState} from "react"
import { v4 as uuid } from "uuid"


function NewTaskForm({onTaskFormSubmit, CATEGORIES}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES[1] || "Code")

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({
      id:uuid(),
      text,
      category
    })
    setText("");
  }
  function handleChange(event){

    setCategory(event.target.value)
   }


  function handleNameChange(event){

    setText(event.target.value)
      }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>

      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleNameChange}/>
      </label>

      <label>
        Category
        <select name="category" onChange={handleChange}>
        <option value="Code">Code</option>
        <option value="Food">Food</option>
        <option value="Money">Money</option>
        <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;