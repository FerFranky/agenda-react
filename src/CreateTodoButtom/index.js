import react from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(){
  const onClickButton = (msg) => {
    alert(msg);
  }
    return(
        <button
        className='CreateTodoButton'
        onClick={ () => onClickButton('Modal proximamente') }
        >+</button>
    );
}

export { CreateTodoButtom};
