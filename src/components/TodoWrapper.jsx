import React, {useState, useEffect} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm'
import {v4 as uuidv4} from 'uuid'

const TodoWrapper = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (value) => {
    setTodos([...todos, {id: uuidv4(), task: value, isCompleted: false, isEditing: false}])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const editTodo = (id) => {
    setTodos(todos.map(item => item.id === id ? {...item, isEditing: !item.isEditing} : item))
  }

  const editTask = (value, id) => {
    setTodos(todos.map(item => item.id === id ? {...item, task: value, isEditing: !item.isEditing} : item))
  }

  const completed = (id) => {
    setTodos(todos.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item))
  }

  return (
    <div className='text-center max-w-[410px] bg-slate-900 m-auto p-5 rounded-md text-white'>
      <h1 className='text-white text-3xl font-bold mb-4'>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((item) => 
      (
        item.isEditing ? 
        (
          <EditTodoForm key={item.id} item={item} editTask={editTask}/>
        ) : 
        (
        <Todo key={item.id} item={item} deleteTodo={deleteTodo} editTodo={editTodo} completed={completed} todos={todos}/>
        )
      )
      )}
      {todos.length > 4 ? 
      <button onClick={() => setTodos([])} 
        className='text-center bg-purple-700 px-4 min-w-fit rounded-md text-cyan-50 py-4'>
        Clear the tasks
      </button> : ''}
      <h2 className='text-gray-300 text-xs mt-3'>By Bekzat Kali</h2>
    </div>
  )
}

export default TodoWrapper

































// import React, {useState} from 'react'
// import TodoForm from './TodoForm'
// import EditTodoForm from './EditTodoForm'
// import {v4 as uuidv4} from 'uuid'
// import Todo from './Todo';
// import '../App.css'
// uuidv4();

// const TodoWrapper = () => {
//   const [todos, setTodos] = useState([])

//   const addTodo = (value) => {
//     setTodos([...todos, 
//       {
//         id: uuidv4(), 
//         task: value, 
//         isCompleted: false, 
//         isEditing: false
//       }
//     ])
//   }

//   const toggle = (id) => {
//     setTodos(todos.map(item => item.id === id ? 
//       {...item, isCompleted: !item.isCompleted} : item
//       ))
//   }

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(item => item.id !== id))
//   }

//   const editTodo = (id) => {
//     setTodos(todos.map(item => item.id === id ?
//       {...item, isEditing: !item.isEditing} : item
//     ))
//   }

//   const editTask = (value, id) => {
//     setTodos(todos.map(item => item.id === id ? 
//       {...item, task: value, isEditing: !item.isEditing} : item))
//   }

//   console.log("rendering")

//   return (
//     <div className='text-center max-w-[400px] bg-slate-900 m-auto p-5 rounded-md'>
//       <h1 className='text-white text-3xl font-bold mb-4'>Get Things Done</h1> 
//       <TodoForm addTodo={addTodo}/>
//       {todos.map((item, index) => (
//         item.isEditing ? (
//           <EditTodoForm key={index} editTask={editTask} item={item}/>
//         ) : (
//           <Todo item={item} key={index} toggle={toggle} deleteTodo={deleteTodo} editTodo={editTodo}/>
//         )       
//       ))}
//     </div>
//   )
// }
// /* key={index} at this point isn't so necessary */
// export default TodoWrapper
