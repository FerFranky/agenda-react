import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {error, loading, searchedTodos, completeTodo, deleteTodo,openModal, setOpenModal} = React.useContext(TodoContext);
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
     {!!openModal && (
       <Modal>
         <TodoForm />
       </Modal>
     )}
     <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal} />
   </React.Fragment>
  );
}

export { AppUI };
