// 목록 하나의 item
import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle,CheckToggle2, onInsertToggle, onChangeSelectedTodo }) => {
  const { id, text, checked } = todo;
  return(
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? 
        (<MdCheckBox onClick={() => {onCheckToggle(id)}} />) : 
        (<MdCheckBoxOutlineBlank 
        onClick={() => {onCheckToggle(id)}} />)}
        <div className="text" onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}>{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;