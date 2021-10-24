import React, { useState } from 'react';
import ToDoList from './ToDoList';
const App =()=>{

  const [inputList ,setInputList]=useState("");

const[Items, setItems]= useState([]);


  const itemEvet=(event)=>{
    setInputList(event.target.value);
  };

  const listOfItems =()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };

  const deleteItems =(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElm,index)=>{
        return index !==id;
      })
    })
};
 return ( <>
 <div className="main_div">
 <div class="center">
 <br/>
 <h1>List Pad React-App</h1>
   <br/>
   <input typr="text" placeholder="Add items"value={inputList} onChange={itemEvet}/>
  
  <button onClick={listOfItems}> + </button>
  <ol>
    {/* <li>{inputList}</li> */}
   { Items.map( (itemval, index)=>{
      return<ToDoList
       key={index} 
       id={index} 
       text={itemval}
         onSelect={deleteItems}
       />;
    })}

  </ol>
  </div>
 </div>
  </>);

};
export default App;