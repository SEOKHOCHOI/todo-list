// 어플리케이션 구조 담당

import React from 'react';
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="template">
      <div className="title"> 내가 할 일 ({todoLength})</div>
      <div>{children}</div>
    </div>
  );
}

export default Template;