import React from 'react';

const Todo = ({ todo, removeTodo }) => {
  return(
    <div className="todo" key={todo.list}>
      <div className="todo-list">
        {todo.list}
        <span className="todo-Deadline">
          ({todo.date})
        </span>
      </div>
      <div>
        <button onClick={() => removeTodo(todo.id)}>
          삭제
        </button>
        {/* <button onClick={() => correctTodo(todo.id)}>
          수정
        </button>
        <button onClick={() => completeTodo(todo.id)}>
          완료
        </button> */}
      </div>
    </div>
  );
}

export default Todo;