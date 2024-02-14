import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ item, deleteTodo, editTodo, completed }) => {
  return (
    <div className='flex justify-between items-center bg-purple-700 px-4 mt-2 text-white rounded-md mb-3 py-4'>
      <div className='flex gap-3 ' onClick={() => completed(item.id)}>
        {item.isCompleted ? 
         <FontAwesomeIcon style={{width: '18px', height: '18px'}} icon={faSquareCheck} /> : 
         <FontAwesomeIcon style={{width: '18px', height: '18px'}} icon={faSquare} />
        }
      </div>
      <div onClick={() => completed(item.id)} className='text-white  pl-2 aligning text-left overflow-hidden 
        w-10/12'>{item.task}</div>
      <div className='flex gap-3 pl-2'>
         <FontAwesomeIcon style={{width: '18px', height: '18px'}} icon={faPenToSquare} onClick={() => editTodo(item.id)}/>
         <FontAwesomeIcon style={{width: '18px', height: '18px'}} icon={faTrash} onClick={() => deleteTodo(item.id)}/>
      </div>
      
    </div>
  )
}

export default Todo






















// import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

// const Todo = ({item, toggle, deleteTodo, editTodo}) => {
//   return (
//     <div className='flex justify-between items-center bg-purple-700 px-4 mt-2 text-white rounded-md mb-3'>
//       <div onClick={() => toggle(item.id)} className={`text-white text-lg py-4 text-left overflow-hidden 
//       h-auto w-10/12 ${item.isCompleted ? 'completed' : ""}`}>
//         {item.task}
//       </div>
//       <div className='flex gap-3'>
//         <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(item.id)}/>
//         <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(item.id)}/>
//       </div>
//     </div>
//   )
// }

// export default Todo