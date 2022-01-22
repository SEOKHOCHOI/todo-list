import React from 'react';
import { Button } from 'react-bootstrap';

function Todos({data, onClick, children, variant}) {
  
  return (
    <li >{data}
      <Button variant={variant} onClick={onClick}>{children}</Button>
    </li>
  );
}

export default Todos;