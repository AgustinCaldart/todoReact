import React from 'react';
import '../assets/style/TodoList.css';

const TodoList = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};

export default TodoList;
