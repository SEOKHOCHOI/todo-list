// 목록 하나의 item
import React from 'react';
/*
  Todo를 check 하거나 해제할 때가 있는데, 그 아이콘을 
  React-icons 라는 프로젝트에서 사용했다.
  이미지는 svg로 되어 있다.
*/
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import "./TodoItem.css";


/*
  TodoList에서 todo 객체를 받아와. 받아온 객체에서 객체 구조 분해를 
  이용해서 todo 객체에서 text를 가져와 보여줘.
  1. react-icons 설치
  2. todo에 있는 속성을 구조분해 문법을 이용해서 가져와.
*/
const TodoItem = ({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) => {
  const { id, text, checked } = todo;
  return(
    <div className="TodoItem">
      {/* className은 checked가 있으면 하고 없으면 빈 문자열이 되도록. 
          왜냐? -> 체크 상태에 따라서 css 적용을 다르게 하기 위해.
      */}
      <div className={`content ${checked ? 'checked' : ''}`}>
        {/*
          체크가 돼 있는 아이템: react-icons에서 가져온 MdCheckBox
          안 돼 있다면: MdCheckBoxOutlineBlank
        */}
        {checked ? 
        (<MdCheckBox onClick={() => {onCheckToggle(id)}} />) : 
        (<MdCheckBoxOutlineBlank 
        onClick={() => {onCheckToggle(id)}} />)}
        {/*
            text는 취소선이다.
            체크박스가 아닌 글자를 눌렀을때도 뭔가 동작을 하도록(컴포넌트가 뜨도록)
            하기위해 onInsertToggle 함수를 TodoItem 컴포넌트에 
            전달을 해 주었다.
        */}
        <div className="text" onClick={() => {
          onChangeSelectedTodo(todo);
          onInsertToggle();
        }}>{text}</div>
      </div>
    </div>
  );
};

export default TodoItem;