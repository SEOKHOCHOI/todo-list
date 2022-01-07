// TOdo를 입력
// 플러스 버튼 누르면 팝업 형식으로 나타나게.
// 뒷 배경 dim처리, 가운데 input박스
import React, { useState, useEffect } from "react";
import { MdAddCircle } from 'react-icons/md';
import {TiTrash, TiPencil} from "react-icons/ti";
import './TodoInsert.css'

/*
  인자로 넣어준 onInsertToggle을 가져와.
*/
const TodoInsert = ({ 
  onInsertToggle, 
  onInsertTodo, 
  selectedTodo, 
  onRemove, 
  onUpdate,
 }) => {
   // useState 이용해서 기본값을 설정. 기본값은 빈 문자열 ""
  const [value, setValue] = useState("");

  // setValue함수 이용해서 onChange함수 만들어, input이 변경될 때마다 실행
  const onChange = e => {
    //input이 변경 될때마다 이벤트에서 타겟(인풋)의 value를 받아서 setValue돼.
    //변화가 일어나면 setValue함수에 e.target.value를 넣어줘.
    setValue(e.target.value);
  };

  /*
    제출할시 자동적인 새로고침 막기위해! 
    왜냐면 form 형식의 속성인데 기본으로 button 타입이 submit으로
    돼있고 그 버튼을 실행하면 form을 서버에 제출하도록 설정 돼 있다.
    그래서 이것을 막아주기 위해 preventDefault 함수를 써주면 된다.
    그리고 받아온 onInsertTodo함수에 현재 value를 넣고
    setValue 함수를 이용해서 다시 값을 빈 문자열로 초기화 시켜주고
    onInsertToggle을 호출하면 창이 닫아진다.

    그 후 onSubmit 함수를 form에 전달해준다.
  */
  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  /* 
    컴포넌트가 처음 렌더링 후 어떤 것을 실행하느냐를 useEffect에서 처리 
    함수가 실행되면 
    만약 selectedTodo가 값이 있다면 초기값이 null인데 초기값이 있다는 거니까 setValue함수를 사용.
    그래서 selectedTodo.text 선택된 todo 안에있는 text를 보여주는 것!
    긔리고 두번째 인자는 빈 배열로 넣어준다. 여기서 사용하는 인자들을
    의존성을 위해서 인자로 받아온 selectedTodo를 여기에 넣어준다.
  */
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      {/* 
          아무것도 없는 백그라운드 역할.
          백그라운드에 돼 있는 부분을 클릭하면 함수를 실행하도록 onClick 넣어줘.
          
      */}
      <div className="background" onClick={onInsertToggle}></div>

      {/*
        from요소안에 input과 button요소 만들었다.
        버튼에 MdAddCircle이란 아이콘을 넣어주었다.
        플러스 버튼을 눌렀을때만 나와야하니 App.js에서 insertToggle이란
        함수를 만들어주었다.

        selectedTodo가 있는경우 수정 모드니까 onUpdate 함수에
        selectedTodo의 id와 text를 넣어주고 
        없는 경우는 그냥 onSubmit 함수를 호출하면 된다.

        그리고 이 함수는 연필모양 아이콘에서도 클릭되도록 했다.
      */}
      <form onSubmit={selectedTodo ? () => {onUpdate(selectedTodo.di, value)} : onSubmit}>
        
        {/*
          할 일 입력하면 input에 value를 기억해야하고, 
          바뀔때마다 실행하는 함수 onChange도 설정.
        */}
        <input placeholder="please type" value={value} onChange={onChange}></input>
        {selectedTodo ? ( 
          <div className="rewrite">
            <TiPencil onClick={() => {
              onUpdate(selectedTodo.id, value);
            }}/>
            {/* onRemove함수에 인자로 받아온 selectedTodo의 id를 넣어준다. */}
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