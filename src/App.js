import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [todoList, setTodoList] = useState('');
  const [doneList, setDoneList] = useState('');
  const [todos, setTodos] = useState([
    { list: '해야한다!!'},
    { list: '해야한다!!!'},
  ]);

  const renderTodos = todos.map(todo=>{
    return (
      <Todo todo={todo} key={todo.list} />
    );
  });
  const addTodoList = (event) => {
    event.preventDefault();
    setTodos([
    ...todos,
    {
      list: todoList,
    }])
    setTodoList('');
  };

  return (
    <div className="App">
      <h1>해야할 일</h1>
      <form addTodoList={addTodoList}>
        <input 
          type="text"
          value={todoList}
          placeholder="추가할 내용을 입력하세요."
          onChange={e => setTodoList(e.target.value)}
        /><br />
        <button type="submit">할 일 추가</button>
        <br />
        {renderTodos}
      </form>
      <form>
      <h1>완료한 일</h1>
        <input 
            type="text"
            value={doneList}
            placeholder="삭제할 내용을 입력하세요."
            onChange={e => setDoneList(e.target.value)}
        /><br />
        <button>할 일 삭제</button>
      </form>
    </div>
  );
}

export default App;

