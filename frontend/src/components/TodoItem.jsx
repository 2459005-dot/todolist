import React from 'react'
import './TodoItem.css'

const TodoItem = () => {
  return (
    <div className='TodoItem'>
      <input type="checkbox" readOnly />
      <div className='content'>할일</div>
      <div className='date'>2025-08-18</div>
      <div className="btn-wrap">
        <button className='updateBtn'>수정</button>
        <button className='deleteBtn'>삭제</button>
      </div>
    </div>
  )
}

export default TodoItem