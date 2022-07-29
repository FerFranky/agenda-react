import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButtom(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButtom };
