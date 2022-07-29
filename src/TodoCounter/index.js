import React from 'react';
import './TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter() {
  const { totalTodos, compleatedTodos } = React.useContext(TodoContext);
return (
  <React.Fragment>
    <h2 className='TodoCounter'>
      Has completado {compleatedTodos} de {totalTodos} TODOs
    </h2>
  </ React.Fragment>
);
}
export { TodoCounter };
