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
        <span>
          <div className="title-right"> 끝냈다!! ({todoLength})</div>
          <span className='separation-right'>{children}</span>
        </span>
      </span>
    </div>
  );
}

export default Template;