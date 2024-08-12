const TodoNew = (props) => {
    const {addNewTodo} = props;
    addNewTodo(`created by Khoi Ngo`);
    return (
        <>
            <div className='todo-input-form'>
                <input type="text" placeholder='Type something todo' />
                <button className='btn btn-success'>ADD</button>
            </div>
        </>
    );
}

export default TodoNew;