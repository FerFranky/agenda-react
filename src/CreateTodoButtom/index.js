import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButtom(props) {
  const onClickButton = () => {
    console.log(props.openModal );
      props.setOpenModal(prevState => !prevState);
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
