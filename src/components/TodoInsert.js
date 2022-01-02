// TOdo를 입력
// 플러스 버튼 누르면 팝업 형식으로 나타나게.
import React, { useState, useEffect } from "react";
import { MdAddCircle } from 'react-icons/md';
import {TiTrash, TiPencil} from "react-icons/ti";
import './TodoInsert.css'

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove }) => {
  const [value, setValue] = useState("");

  // input이 변경될 때마다 실행
  const onChange = e => {
    //이벤트에서 타겟(인풋)의 value를 받아서 setValue돼.
    setValue(e.target.value);
  };

  /* 새로고침 막기위해 */
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  /* 컴포넌트가 처음 렌더링 후 어떤 것을 실행하느냐를 useEffect에서 처리 */
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input placeholder="please type" value={value} onChange={onChange}></input>
        {selectedTodo ? (
          <div className="rewrite">
            <TiPencil />
            <TiTrash onClick={() => {onRemove(selectedTodo.id)}}/> 
          </div>
        ) : (<button type="submit">
          <MdAddCircle />
        </button>)}
      </form>
    </div>
  );
};

export default TodoInsert;