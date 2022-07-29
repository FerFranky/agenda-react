import React from 'react';
import './TodoCounter.css';
function TodoCounter({total, compleated}) {
return (
  <React.Fragment>
    <h2 className='TodoCounter'>
      Has completado {compleated} de {total} TODOs
    </h2>
  </ React.Fragment>
);
}
export { TodoCounter };
