import React, {useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState([]); // 할 일
  const [doneList, setDoneList] = useState([]); // 완료

  const addList = () => { // 추가
    const todo = window.prompt('해야할 일을 적어주세요!');
    setTodoList([...todoList, todo]);
  }

  const todoDone = (number) => { // 완료
    // button 클릭 요소 완료
    const done = todoList.filter((data, index) => index === number);

    // button 클릭 요소 제외
    const doneNot = todoList.filter((data, index) => index !== number);

    // 완료한 일 state값
    setDoneList([...doneList, done]);

    // 완료한 일 제외 state 값
    setTodoList(doneNot);
  }

  const todoNotDone = (number) => { 
    const todo = doneList.filter((data, index) => index === number);
    const todoNot = doneList.filter((data, index) => index !== number);
    setTodoList([...todoList, todo]);
    setDoneList(todoNot);
  }
  return(

    <div className="App">
      <p>해야할 일</p>
      {
        todoList.map((data, index)=>(
          <ul>
            <li key={index+1}>{data}</li>
            <button onClick={()=>{todoDone(index)}}>완료</button>
          </ul>
        ))
      }

      <p>완료한 일</p>
      {
        doneList.map((data, index)=>(
          <ul>
            <li key={index+1}>{data}</li>
            <button onClick={()=>{todoNotDone(index)}}>완료</button>
          </ul>
        ))
      }
      <p onClick={addList}>추가하기</p>
    </div>
    );
};

export default App;