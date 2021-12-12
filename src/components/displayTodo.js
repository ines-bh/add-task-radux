import React from 'react'
import { connect } from 'react-redux'
import todoItem from './todoItem'
import { addTodo, addTodos, removeTodos,removeTodo, updateTodo,updateTodos, completeTodos } from '../redux/reducer/reducer';

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

const displayTodo = (props) => {
    const [sort, setSort] = useState("active")
    return (
        <div>
            <div>
<button onClick={()=>setSort("active")}>Active</button>
<button onClick ={()=>setSort("completed")}>Completed</button>
<button onClick ={()=>setSort("all")}>All</button>
            </div>
            <ul>
                props.todos.length '{'>'}' 0 && sort==="active"?
                props.todos.maps{item=>{
                    return(
                        item.completed===false&&
                        <todoItem
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        
                        />
                    )
                }
                :null}

props.todos.length > 0 && sort==="all"?
                props.todos.maps{item=>{
                    return(
                        item.completed===true&&
                        <todoItem
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        
                        />
                    )
                }
                :null}

props.todos.length > 0 && sort==="active"?
                props.todos.maps{item=>{
                    return(
                       
                        <todoItem
                        key={item.id}
                        item={item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        
                        />
                    )
                }
                :null}
            </ul>
            
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(displayTodo)
