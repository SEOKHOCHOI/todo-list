import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Navbars from './components/Navbars';
import './App.css';
import Todos from './components/Todos';


function App() {

  const [todoList, setTodoList] = useState([]); // 할 일
  const [doneList, setDoneList] = useState([]); // 완료

  const addList = () => { // 추가
    const todo = window.prompt('해야할 일을 적어주세요!');
    setTodoList([...todoList, todo]);
  }

  const todoDone = (number) => { // 완료
    // button 클릭 요소 완료
    const done = todoList.filter((data, index) => index === number)[0];

    // button 클릭 요소 제외
    const doneNot = todoList.filter((data, index) => index !== number);

    // 완료한 일 state값
    setDoneList([...doneList, done]);

    // 완료한 일 제외 state 값
    setTodoList(doneNot);

    console.log(number);
  }

  const todoNotDone = (number) => { 
    const todo = doneList.filter((data, index) => index === number)[0];
    const todoNot = doneList.filter((data, index) => index !== number);
    setTodoList([...todoList, todo]);
    setDoneList(todoNot);

    console.log(number);
  }
  return(

    <div className="App">
      <Navbars />
      <div className="topView">
        <p className="font02">해야할 일</p>
        <ol>
        {
          todoList.map((data, index)=>(
            <Todos key={'todo_'+index+1} data={data} variant="danger" onClick={()=>{todoDone(index)}}>완료</Todos>
          ))
        }
        </ol>

        <p className="font02">완료한 일</p>
        <ol>
        {
          doneList.map((data, index)=>(
            <Todos key={'done_'+index+1} data={data} variant="success" onClick={()=>{todoNotDone(index)}}>되돌리기</Todos>
          ))
        }
        </ol>
        
        <Button variant="dark" onClick={addList}>추가하기</Button>{' '}
      </div>
    </div>
    );
};

export default App;