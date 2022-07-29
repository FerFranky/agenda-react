import react from "react";
import './TodoItem.css';
import * as Icons from "react-icons/fa";
function TodoItem(props) {
  const onComplete = props.onComplete;
  const onDelete = props.onDelete;
  return (
    <li className="TodoItem">
      <span
      className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={onComplete}
      >
        <Icons.FaCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
      className="Icon Icon-delete"
      onClick={onDelete}
      >
        <Icons.FaMinusCircle />
      </span>
    </li>
  );
}

export { TodoItem };
