import React, {useState} from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { MdAddCircle } from 'react-icons/md';

let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev)
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      }

      /* push 함수를 사용하면 해당 배열 자체가 변경됩니다.
        concat 함수를 사용하면 새 배열이 리턴이 되고 기존 배열은 변경되지 않습니다.
        concat을 이용하여 상태불변성을 지켜준 것입니다.
        */
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  /* 삭제 */
  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => (todo.id !== id)));
  }; 

  /* 수정 */
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }

  return(
  <Template todoLength={todos.length}>
    <TodoList todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle} 
      onChangeSelectedTodo={onChangeSelectedTodo} 
    />
    <div className="add-todo-button" onClick={onInsertToggle}>
      <MdAddCircle />
    </div>
    {insertToggle && (
      <TodoInsert 
        selectedTodo={selectedTodo}
        onInsertToggle={onInsertToggle} 
        onInsertTodo={onInsertTodo} 
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    )}
  </Template>
  );
};

export default App;

/*
  todos는 할일 목록이고, setTodos는 할일 목록을 조작하는 
  함수 입니다.
  초기값을 useState 함수의 인자로 넣어주는데,
  맨 처음에 객체배열을 넣어주었습니다.
*/ 