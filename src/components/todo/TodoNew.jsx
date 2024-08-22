// TodoNew.js
import { useState } from "react";

const TodoNew = (props) => {
    const [valueInput, setValueInput] = useState("");

    const handleOnchangeInput = (someText) => {
        setValueInput(someText);
    };

    const { addNewTodo } = props;
    const handleClickAddBtn = () => {
        if (valueInput.trim()) {
            addNewTodo(valueInput);
            setValueInput(""); // Clear the input after adding
        }
    };

    return (
        <div className="todo-input-form">
            <input
                id="input-text"
                type="text"
                placeholder="Type something todo"
                value={valueInput}
                onChange={(event) => handleOnchangeInput(event.target.value)}
            />
            <button className="btn-add" onClick={handleClickAddBtn}>
                ADD
            </button>
        </div>
    );
};

export default TodoNew;