
import { remove } from 'dom-helpers';

import React,{useState} from 'react';
import { InputGroup,FormControl,Button } from 'react-bootstrap';
import { connect } from 'react-redux';



const mapStateToProps=(state)=>{
    return{
        todos:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addTodo:(obj)=>dispatch(addTodos[obj]),
        removeTodo:(id)=>dispatch(removeTodos[id]),
        updateTodo:(obj)=>dispatch(updateTodos[obj]),
        completeTodo:(id)=>dispatch(completeTodos[obj])
    }
}

const AddTask = (props) => {

const [todo, setTodo] = useState("");



const handleChange= (e)=> {
    setTodo (e.target.value)
}

console.log("todo text",todo)


    return (
        <div>
             <InputGroup className="mb-3">
    <FormControl
      placeholder="text"
      aria-label="text"
      onChange={(e)=>handleChange(e)}
      
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={()=>props.addTodo({
         id:Math.floor(Math.random()*1000),
          item:todo,
         completed:false
    })
    
       
} >
      Add
    </Button>
  </InputGroup>
  <br/>
  <ul>
      <props.todos.map {item => {
          return 
      }}/>
  </ul>
        </div>
    )
}

export default connect (mapStateToProps,mapDispatchToProps)(AddTask)

