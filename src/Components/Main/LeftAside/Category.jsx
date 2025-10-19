import React ,{use} from 'react'
import { NavLink } from "react-router";
const category = fetch("/categories.json").then((res) => res.json());
const Category = () => {
    const CatdData = use(category);
  return (
    
    <div >
         <h2 className="text-2xl uppercase font-medium">All categories</h2>
      <div className="flex flex-col gap-3 mt-3 cat">
        {CatdData.map((category) => (
          <NavLink to={`/category/${category.id}`} className='bg-white p-3 rounded-[5px] shadow-md'  key={category.id}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  )
}

export default Category