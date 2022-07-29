import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const {error, loading, searchedTodos, completeTodo, deleteTodo,} = React.useContext(TodoContext);
  return (
    <React.Fragment>
     <TodoCounter />
     <TodoSearch />

     {/* Podemos acceder a nuestro contexto con el consumer */}
     <TodoContext.Consumer>
       {({

       }) => (
         <TodoList>
           {error && <p>Desespérate, hubo un error...</p>}
           {loading && <p>Estamos cargando, no desesperes...</p>}
           {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

           {searchedTodos.map(todo => (
             <TodoItem
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
             />
           ))}
         </TodoList>
       )}
     </TodoContext.Consumer>

     <CreateTodoButtom />
   </React.Fragment>
  );
}

export { AppUI };