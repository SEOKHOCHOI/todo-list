// 어플리케이션 구조 담당

import React from 'react';
import "./Template.css";

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
          <span>여기다가 옮겨야함</span>
        </span>
      </span>
    </div>
  );
}

export default Template;