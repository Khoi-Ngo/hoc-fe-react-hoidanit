const TodoData = (props) => {
    const { todoList } = props;
    console.log(todoList);
    //todo: handle click delete


    return (
        <>
            <div className='task-list-table'>
                {todoList.map((item, index) => {
                    //! key map should not refer index of map, arr ... || => use key from BACKEND
                    return (<div className="item-todo" key={index}>{item.value}
                        <button className="btn"><i className="fa fa-trash"></i></button>
                    </div>);
                })}
            </div>
        </>
    );
}


export default TodoData;