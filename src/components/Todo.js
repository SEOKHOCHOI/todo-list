import React from 'react';

const Todo = ({ todo }) => {
  return(
    <div className="todo" key={todo.list}>
      <div className="todo-list">{todo.list}</div>
    </div>
  );
}

export default Todo;