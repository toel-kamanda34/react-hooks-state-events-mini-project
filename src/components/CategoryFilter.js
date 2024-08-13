
import React, {useState} from "react"

function CategoryFilter({CATEGORIES, selectCategory}) {

  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleCategoryClick(category){

  setSelectedCategory(category)
  selectCategory(category)

  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}

      {CATEGORIES.map((category)=> 
      <button key={category} 
              className={selectedCategory === category ? 'selected' : ''}
              onClick={()=>handleCategoryClick(category)}>{category} </button>

        
      )}
      
    </div>
  );
}

export default CategoryFilter;