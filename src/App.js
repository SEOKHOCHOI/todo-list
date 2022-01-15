import React from 'react';
import Navbar from './components/Navbar';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


<<<<<<< HEAD
  const done = (work) => {
    let filteredTodo = todoList.filter((each) => each !== work)
    setTodoList(filteredTodo);
    setDoneList([...doneList, work]);

    console.log('haha');
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
=======
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="container">
            <Switch> 
              {routes.map(route => {
                return (
                  <Route 
                    key={route.path} 
                    path={route.path} 
                    exact
                  >
                    <route.component />
                  </Route>
                )
              })}
            </Switch>
          </div>
      </div>
    </Router> 
>>>>>>> new
  );
}

export default App;

