import {useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const addWork = () => {
    let work = window.prompt('할일을 입력하세요');
    setTodoList([...todoList, work]);
  }

  const done = (work) => {
    let filteredTodo = todoList.filter((each) => each !== work)
    setTodoList(filteredTodo);
    setDoneList([...doneList, work]);
  }
  

  return(
    <div className="App">
      <button onClick={addWork}>할일 추가</button>
      <table>
        <caption>
          할일목록
        </caption>
        <tbody>
          {
            todoList.map((work)=>(
              <tr>
                <td onClick={()=>done(work)}>{work}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <table>
        <caption>완료목록</caption>
        <tbody>
          {
            doneList.map((work)=>(
              <tr>
                <td>{work}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;

