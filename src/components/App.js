import React,{useState} from "react"
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid"

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [tasksWithIds , setTasksWithIds]=useState(
     TASKS.map((task) => ({...task, id:uuid()}))
   )

  const[selectCategory, setSelectCategory]= useState('All')
  
   function handleDelete(id){

     setTasksWithIds(tasksWithIds.filter((task) => task.id !== id))
   }
 
  const filteredTasks = tasksWithIds.filter((task) => 
    selectCategory === "All" || task.category === selectCategory
  );

  function handleTaskItemSubmit(newTaskItem) {

    const taskWithId = newTaskItem.id ? newTaskItem : { ...newTaskItem, id: uuid() };
    
    
    setTasksWithIds(prevTasks => [...prevTasks, taskWithId]);

    console.log({ newTaskItem: taskWithId });
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES={CATEGORIES} selectCategory={setSelectCategory}/>
      <NewTaskForm CATEGORIES={CATEGORIES} onTaskFormSubmit={handleTaskItemSubmit} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;