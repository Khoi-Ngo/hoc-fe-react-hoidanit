const TodoNew = (props) => {
    const { addNewTodo } = props;
    // addNewTodo(`created by Khoi Ngo`);
    const handleClickAddBtn = () => {
        alert(`You sure about that`);
    }

    //! onchange event in react inputted param event having many usages

    const someFunction = (event) => {
        console.log(`Check inputted text: ${event.target.value}`);
    }


    const handleOnchangeInput = (someText) => {
        console.log(`Check inputted text: ${someText}`);
    }
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