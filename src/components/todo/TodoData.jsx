const TodoData = (props) => {
    const { todoList, deleteTodo } = props;
    console.log(todoList);
    //todo: handle click delete
    const handleDelete = (id) => {
        deleteTodo(id);
    }


    return (
        <>
            <div className='task-list-table' >
                {todoList.map((item, index) => {
                    //! key map should not refer index of map, arr ... || => use key from BACKEND
                    return (<div className="item-todo" key={index}
                        style={{display: "flex", justifyContent: "space-between"}}
                    >
                        {/* content     */}
                        {item.value}
                        {/* delete button */}
                        <button className="btn"
                            style={{ cursor: "pointer", width: '15%'}}
                            onClick={() => { handleDelete(item.id) }}
                        ><i className="fa fa-trash"></i></button>
                    </div>);
                })}
            </div>
        </>
    );
}


export default TodoData;