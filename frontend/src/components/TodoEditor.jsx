import React from 'react'
import './TodoEditor.css'

const TodoEditor = () => {
  return (
    <form className='TodoEditor'>
      <input type="text" placeholder='새로운 todo'/>
      <button>추가</button>
    </form>
  )
}

export default TodoEditor