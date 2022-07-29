import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Crear nueva tarea</label>
      <textarea
      value = {newTodoValue}
      onChange = {onChange}
      placeholder="Ingresa una nueva tarea"
       />
       <div>
        <button
        type="button"
        onClick={onCancel}
        className="TodoForm-button TodoForm-button--cancel"
        >
        Cancelar
        </button>
        <button
        type="submit"
        className="TodoForm-button TodoForm-button--add"
        >
        Agregar
        </button>
       </div>
    </form>
  );
}
export { TodoForm };
