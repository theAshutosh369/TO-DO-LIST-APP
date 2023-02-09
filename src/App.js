import "./App.css";
import { useState } from "react";
import Todo from "./Todo.js"

function App() {
  const [item, setItem] = new useState([]);
  const [temp, setTemp] = new useState();

  function update() {
    setItem([...item, temp]);

    // list render hone ke bad jo input tag me value type ki thi wo clear krne ke liye setTemp("") krna padega 
    setTemp("")
  }

  function updatetemp(e) {
    setTemp(e.target.value);
  }

  function deleteitem( id )
  {

    // modifying the item arr. filter function is same like map. i is the current element and index is index of current element. we got the id parameter after clicking on delete button then we have to return all the items which are not equal to id ( index!=id krna hai  )
     setItem( (prev)=>{
      return prev.filter( ( i , index )=>{
        return index!==id
      })
     })
  }



  return (
    <div className="App">
      <div className="card">
        <div className="title">
          <h1>TO DO LIST </h1>
        </div>

        <div className="additem">
          <input
            className="input"
            type="text"
            placeholder="Add items from here"
            onChange={updatetemp}
            value={temp}
          />
          <button onClick={update}> + </button>
        </div>

        <div className="list">
          <ol>{ item.map( (i , index)=> <Todo
           item={i}
           key={index}
           id={index}
           onSelect={deleteitem}
           ></Todo> ) }</ol>
        </div>

      </div>
    </div>
  );
}
export default App;
