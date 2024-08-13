import { useState } from "react";

const TodoNew = (props) => {
    //handle onchange input text
    const [valueInput, setValueInput] = useState();
    const handleOnchangeInput = (someText) => {
        setValueInput(someText);
    }
    //! no overriding the setValueInput
    //handle onclick button add
    const { addNewTodo } = props;
    const handleClickAddBtn = () => {
        //add new item into todolist
        addNewTodo(valueInput);
    }
    //adding eventlistenner to clear after click add
    // let btn = document.querySelector(`.btn.btn-success`);
    // btn.addEventListener('click', clearInputText);
    // const clearInputText = () => {
    //     let inputTextBox = document.getElementById(`input-text`);
    //     inputTextBox.value = ``;
    // }
    return (
        <>
            <div className='todo-input-form'>
                <input type="text" placeholder='Type something todo'
                    onChange={(event) => { handleOnchangeInput(event.target.value) }}
                />
                <button className='btn btn-success' style={{ cursor: "pointer" }}
                    onClick={handleClickAddBtn}
                >ADD</button>
            </div>
        </>
    );
}

export default TodoNew;