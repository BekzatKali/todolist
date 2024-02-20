import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value)
      setValue("")
    } else {
      alert('Write a task')
    }
  }

  return (
    <form className='flex justify-between gap-3 mb-3 forMedia' onSubmit={handleSubmit}>
      <input className='text-white bg-transparent border-2 border-white px-8 py-2 rounded-md' 
      type='text' value={value} 
      placeholder='Write your task' 
      onChange={(e) => setValue(e.target.value)}/>
      <button className='text-center bg-purple-700 min-w-[106px] py-4 rounded-md text-cyan-50' type='submit'>Add a task</button>
    </form>
  )
}

export default TodoForm










































// import React, {useState} from 'react'

// const TodoForm = ({addTodo}) => {
//   const [value, setValue] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (value) {
//       addTodo(value);
//       setValue('')
//     }
//   }

//   return (
//     <form className='flex justify-between gap-3 mb-3 forMedia' onSubmit={handleSubmit}>
//       <input className='text-white bg-transparent border-2 border-white px-8 py-2 rounded-md' type='text' placeholder='write your task' value={value} onChange={(e) => setValue(e.target.value)}/>
//       <button type='submit' className='text-center bg-purple-700 min-w-fit rounded-md text-cyan-50 px-4'>Attend</button>
//     </form> 
//   )
// }

// export default TodoForm