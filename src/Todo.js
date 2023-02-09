import React from "react";


function Todo( p )
{
    return (
      <>
          <li>
            <span>{p.item}</span>
            <button onClick={ ()=>{
                p.onSelect( p.id )
            }}> X </button>
          </li>
      </>
    );
}
 
export default Todo;