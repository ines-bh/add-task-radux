import React from 'react'

const todoItem = (props) => {
    const {item, updateTodo,completeTodo,removeTodo}=props;
    const inputRef=useRef(true)

const changeFocus=()=>{
    inputRef.current.disabled=false;
    inputRef.current.focus();
}
const update=(id,value,e)=>{
if(e.which===13){
   updateTodo({id, item:value})
    inputRef.current.disabled=true;
}
}
    return (
        <li key={item.id}>
        <textarea 
        ref={inputRef} 
        disabled={inputRef} 
        defaultValue={item.item}
        onKeyPress={(e)=>update(item.id, inputRef.current.value, e)}/>
    <button onClick={()=>changeFocus()}>Edit  </button>
    <button onClick={()=>completeTodo(item.id)}>complete  </button>
    <button onClick={()=>removeTodo(item.id)}>Delete</button>

    {item.completed&& <span>done</span>}

    </li>

    )
}

export default todoItem
