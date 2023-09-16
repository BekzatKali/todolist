import React, {useState} from 'react'

const EditTodoForm = ({editTask, item}) => {

  const [value, setValue] = useState(item.task)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTask(value, item.id)
      setValue("")
    }
  }

  return (
    <form className='flex justify-between gap-3 mb-3 forMedia' onSubmit={handleSubmit}>
      <input className='text-white bg-transparent border-2 border-white px-8 py-2 rounded-md' type='text'
       value={value} placeholder='Update your task' 
      onChange={(e) => setValue(e.target.value)}/>
      <button className='text-center bg-purple-700 min-w-[106px] rounded-md py-4 text-cyan-50' type='submit'>Update</button>
    </form>
  )
}

export default EditTodoForm







































// import React, {useState} from 'react'


// const EditTodoForm = ({editTask, item}) => {
//   const [value, setValue] = useState(item.task)

//   const handleSubmit = (e) => { 
//     e.preventDefault();
//     if (value) {
//       editTask(value, item.id);
//       setValue('')
//     }
//   }

//   return (
//     <form className='flex justify-between gap-3 forMedia' onSubmit={handleSubmit}>
//       <input className='text-white bg-transparent border-2 border-white px-8 py-2 rounded-md' type='text' placeholder='Update the task' value={value} onChange={(e) => setValue(e.target.value)}/>
//       <button type='submit' className='text-center  bg-purple-700 min-w-fit rounded-md text-cyan-50 px-4'>Update</button>
//     </form> 
//   )
// }

// export default EditTodoForm