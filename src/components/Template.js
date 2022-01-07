// 어플리케이션 구조 담당
// 구조만 보기좋게 잡아주는 컴포넌트

import React from 'react';
import "./Template.css";

/* 
  children이란 인자로 App.js의 Template 컴포넌트 사이에 있는것을 받아와.
  Template.js에서 todoLength를 받아올 수 있으니까 빨리 끝내자 부분에 0대신
  받아온 todoLength값을 넣어줘.
*/
const Template = ({ children, todoLength }) => {
  return (
    <div className="template">
      <span className='separation'>
        <span className='separation-left'>
          <div className="title-left"> 빨리 끝내자 ({todoLength})</div>
          <span>{children}</span>
        </span>
        <span className='separation-right'>
          <div className="title-right"> 끝냈다!! ({todoLength})</div>
          <button onClick={() => {alert('hi')}}>gd</button>
        </span>
      </span>
    </div>
  );
}

export default Template;