// 할 일의 목록
import React from 'react';
import TodoItem from './TodoItem';
import "./TodoList.css";

const TodoList = ({ todos, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => { 
  return(
    <div className="TodoList">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} 
          onCheckToggle={onCheckToggle} 
          onInsertToggle={onInsertToggle} 
          onChangeSelectedTodo={onChangeSelectedTodo}
        />))
      }
    </div>
  );
};

export default TodoList;

/* 
  Hook이란 특별한 함수.
  예를 들어 useState는 state, 상태를 함수 컴포넌트 안에서 
  사용할 수 있게 해 줍니다.

  Hooks가 나오기 전엔 react에서 class형 compnent에서만
  state를 이용할수가 있었습니다.
  함수형 컴포넌트는 그냥 데이터를 가져와 보여주는 용도로만
  사용을 하였지만,
  Hooks가 도입되며 함수형 컴포넌트 안에서도 state를
  사용할 수 있게 해주었습니다.

  예전엔 함수 컴포넌트를 사용하던중 state를 추가하고 싶을 때
  클래스 컴포넌트로 바꾸곤 했지만 이제는 그럴 필요가 없다는 뜻입니다.
*/