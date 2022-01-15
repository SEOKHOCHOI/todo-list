import React, { useState } from 'react';
import InputField from './InputField';

const TodoForm = ({ addTodoList }) => {
  const [todoList, setTodoList] = useState('');
  const [todoDeadline, setTodoDeadline] = useState('');
  const [listError, setListError] = useState('');
  const [dateError, setDateError] = useState('');

  const resetForm = () => {
    setTodoList('');
    setTodoDeadline('');
  };

  const validateForm = () => {
    resetErrors();
    let validated = true;
    if (!todoList) {
      setListError('할 일을 넣어주세요!');
      validated = false;
    }

    if (!todoDeadline) {
      setDateError('마감일을 넣어주세요!');
      validated = false;
    }
    return validated;
  };

  const resetErrors = () => {
    setListError('');
    setDateError('');
  };

  const onSubmit = (event) => {
    event.preventDefault();   //이벤트 전파 방지
    if (validateForm()) {
      addTodoList({
        id: Date.now(),
        list: todoList,
        date: todoDeadline,
      });
      resetErrors();
      resetForm();
    } 
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <InputField 
          type="text"
          value={todoList}
          placeholder="해야할 일 입력"
          onChange={e => setTodoList(e.target.value)}
          errorMessage={listError}
        />
        <InputField 
          type="number"
          value={todoDeadline}
          placeholder="마감일 입력"
          onChange={e => setTodoDeadline(e.target.value)}
          errorMessage={dateError}
        />
        <button type="submit">할 일 추가</button>
        <br />
      </form>
    </div>
  );
};

export default TodoForm;