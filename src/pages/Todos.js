import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

const Todos = () => {
  const [todos, setTodos] = useState([
    // 빈 배열로 시작.
  ]);
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => {
      return todo.id !== id;
    }));
  };
  const renderTodos = todos.length ? todos.map(todo=>{
    return (
      <Todo 
        todo={todo} 
        key={todo.id} 
        removeTodo={removeTodo}
        />
    );
  }) : '추가된 일이 없습니다.';
  const addTodoList = (todo) => {
    setTodos([
      ...todos,
      todo
    ]);
  };
  return (
    <>
      <h1>TodoList</h1>
      <TodoForm addTodoList={addTodoList} />
      {renderTodos}
    </>
  );
};

export default Todos;