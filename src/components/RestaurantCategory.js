import { useState } from "react";
import ItemList from "./ItemList";



const RestaurantCategory =({data,showItems,setShowIndex})=>{
    console.log(data)
    // const [showItems,setShowItems]=useState()
   
    const handleClick=()=>{
         setShowIndex();
        
    }
   
    return (<div className="">
        <div  className="bg-stone-100 border-b-4 my-5 ">
          <span className="cursor-pointer" onClick={handleClick}> 
            <h1  className="font-bold text-l">{data.title}({data.itemCards.length})</h1>
         
          </span>

{ showItems && <ItemList items={data.itemCards}/>}
        </div>
    </div>)
}
export default RestaurantCategory;