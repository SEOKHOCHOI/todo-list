import React, {useState} from 'react';
import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import { MdAddCircle } from 'react-icons/md';

let nextId = 4;
let xeId=1;

const App = () => {
  /*
    글자를 눌렀을 때 해당되는 글씨도 받아져 뜨도록 하기위해 만듬.
  */
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedTodoa, setSelectedTodoa] = useState(null);
  /* 
    플러스 버튼을 눌렀을때만 나오기 위한 toggle 값,
    입력 토글이니 이름은 insertToggle 기본값은 false.
  */
  const [insertToggle, setInsertToggle] = useState(false);
  const [insertTogglea, setInsertTogglea] = useState(false);
  /*
    todos: 할 일 목록
    setTodos: 할 일 목록들을 조작할 수 있는 함수.
    useState에 초기값 인자를 넣어줬는데 나는 객체 배열을 넣어줌.
  */
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "HTML, CSS",
      checked: true,
    },
    {
      id: 2,
      text: "JavaScript",
      checked: false,
    },
    {
      id: 3,
      text: "React",
      checked: true,
    },
  ]);
  const [todosa, setTodosa] = useState([
    {
      id: 1,
      text: "abcd",
      checked: true,
    },
  ]);

  /*
  setInsertToggle 함수를 넣어주는데,  ()안에 
  이전 값의 Boolean 값을 반대로 바꿔주는 함수를 리턴 하도록 했다.
  그리고 onInsertToggle을 className="add-todo-button" 쪽에 넣어주었다.
  그럼 플러스 버튼을 누르면 컴포넌트가 생기고 취소를 하면 사라진다.
  
  TodoInsert에서도 이 기능이 필요하기에 여기 또한 인자로 사용하도록 넣어주었다.
  왜냐면 팝업에 백그라운드의 검정색 화면을 클릭했을 때 TodoInsert화면이
  없어지도록 할 것이기에.

  삭제했어도 글자가 안바뀌고 그대로 뜨는걸 수정을 위한 기능으론
  만약 selectedTodo가 있는 경우에는 setSelectedTodo를 이용해서
  다시 null값을 줘.
  그럼 클릭하고나서 취소하고 플러버튼을 눌렀을때 아무것도 없어.
  */
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev)
  };
  const onInsertTogglea = () => {
    if (selectedTodoa) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev)
  };
  /*
    입력한 상태를 value라는 값으로 TodoInsert 컴포넌트가 가지고 있는데,
    이 value를 추가 버튼을 누를시 배열에 넣어 해야 할 일에 추가해주면 된다.
    그 함수가 onInsertTodo 이다.

    그리고 이것을 TodoInsert에 인자로 넘겨준다.
    그럼 TodoInsert에서 해당함수를 받아서 쓸 수가 있게 된다.
  */
  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      /* 
        객체형식으로 todos에 저장되니 객체를 만들어줌.
        nextId는 함수 바깥에서 만들어줌.
        함수 안에 있을시 함수가 새로 리렌더링 될 때마다 
        계속 처음 값으로 돌아가기 때문이다.
        */
      const todo = {
        id: nextId,
        text,
        checked: false,
      }
      /*
        위에서 설정한 setTodos 함수를 사용.
        변경되기 전의 값을 기억하고 있어야 되기에 변경 전의 값 자체를 변경시키면 안된다.
        push 함수를 사용하면 해당 배열 자체가 변경됩니다.
        concat 함수를 사용하면 새 배열이 리턴이 되고 기존 배열은 변경되지 않습니다.
        concat을 이용하여 상태불변성을 지켜준 것입니다.
        */
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  };
  const onInsertTodoa = (texta) => {
    if (texta === "") {
    return alert("할 일을 입력해주세요.");
        id: xeId,
    } else {
        const todoa = {
        texta,
        checked: false,
      }
      setTodosa(todosa => todosa.concat(todoa));
      xeId++;
    }
  };
  /*
    클릭 하면 체크가 되고 체크가 해제 돼야 된다. 그 기능이다.
    할 일 배열을 다루기 때문에 App.js 컴포넌트에서 작성해주었다.
    인자는 id를 받아왔고, setTodos 함수를 이용해서 todos 배열은
    새로운 함수를 리턴해야 하는데 이부분은 클릭한 객체의 id를 보고
    그 id와 일치하는 객체를 찾아서 해당 객체의 checked 라는 속성을,
    boolean 값을 반대로 바꿔주면 된다. 그래서 map 함수를 이용해서
    todo를 받아 todo.id와 인자 id가 일치한다면 
    스프레드연산자를 이용해서 todo가 가지고 있는 객체 속성을 모두 가져오고
    checked 값을 반대로 바꿔준다.
    만약 같지 않다면 다른 애들이니 그냥 todo를 반환해준다.

    이제 onCheckToggle을 TodoList에 보내주면 된다.
    그리고 TodoList가 받은 함수를 TodoItem에 그대로 전달해준다.
    그리고 TodoItem 컴포넌트로 가서 받아온 함수를 
    체크박스에 넣어줘야 하는데 onClick 함수로 하나하나 다 넣어주었다.
  */
  const onCheckToggle = (id) => {
    setTodos(todos => 
      todos.map(todo => 
        (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
  };
  const onCheckTogglea = (id) => {
    setTodosa(todosa => 
      todosa.map(todoa => 
        (todoa.id === id ? {...todoa, checked: !todoa.checked} : todoa)))
  };
  /*
    todos 배열을 건드리기 때문에 App.js 컴포넌트에서 작업함.
    이 함수를 TodoItem 컴포넌트로 보내줘.
  */
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  const onChangeSelectedTodoa = (todoa) => {
    setSelectedTodo(todoa);
  };
  /* 
  쓰레기통 아이콘 눌러 삭제 
  삭제를 했으니 창이 닫히겠지? 그를 위한 onInsertToggle.
  todos를 변경하기 위해서 setTodos 함수를 todos에 filter 함수를 이용해서
  todo에 id가 인자로 받아온 id와 일치하지 않는 것만 리턴한다.

  그 후 onRemove를 TodoInsert 컴포넌트에 전달해준다.
  */
  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => (todo.id !== id)));
  }; 
  const onRemovea = id => {
    onInsertTogglea();
    setTodosa(todosa => todosa.filter(todoa => (todoa.id !== id)));
  };
  /*
  작성된걸 수정 
  인자는 id와 text를 받아왔고
  수정하면 당연히 토글이 닫혀야하니 onInsertToggle함수도 불러와.
  그 후 setTodos 함수를 이용해서 todo 아이템 받아서 todo.id와 인자로
  받아온 id가 일치한다면 spread 연산자로 todo 객체의 모든 속성을
  다 풀어주고 그리고 text만 인자로 가져온 새로운 text로 바꾸어 준다.
  만약 다른 그냥 일반적인 todo item들은 todo를 반환해준다.

  이 onUpdate를 TodoInsert에 넘겨주었다.
  */
  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text} : todo))
  }
  const onUpdatea = (id, text) => {
    onInsertTogglea();
    setTodos(todosa => todosa.map(todoa => todoa.id === id ? {...todoa, text} : todoa))
  }
  return(
    /*
      내가 할 일(0): 에서 0부분이 할 일 갯수가 바껴도 그대로이다.
      이 부분을 바뀌게 수정하는 방법으로 App.js에서 Template에
      todoLength를 보냈다. (todo.length=todo에 대한 길이)
    */
  <Template todoLength={todos.length}>
    <TodoList todos={todos} 
      onCheckToggle={onCheckToggle} 
      onInsertToggle={onInsertToggle} 
      onChangeSelectedTodo={onChangeSelectedTodo} 
    />
    <TodoList todosa={todosa}
    onCheckTogglea={onCheckTogglea} 
    onInsertTogglea={onInsertTogglea} 
    onChangeSelectedTodoa={onChangeSelectedTodoa} 
    ></TodoList>
  

    {/* 플러스 모양 버튼 */}
    <div className="add-todo-button" onClick={onInsertToggle}>
      <MdAddCircle />
    </div>

    {/* 
      TodoInsert 컴포넌트는 toggle이 true인 경우에만 나오도록 했다. 
      즉, 플러스 버튼을 누르지 않으면 false이니 나오지 않고,
      플러스 버튼을 클릭을 하면 true로 바뀌어 TodoInsert 컴포넌트가 나와.
    */}
    {insertToggle && (
      <TodoInsert 
        selectedTodo={selectedTodo}
        onInsertToggle={onInsertToggle} 
        onInsertTodo={onInsertTodo} 
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    )}
    <TodoInsert
    selectedTodoa={selectedTodoa}
    onInsertTogglea={onInsertTogglea} 
    onInsertTodoa={onInsertTodoa} 
    onRemovea={onRemovea}
    onUpdatea={onUpdatea}>
    
    </TodoInsert>
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