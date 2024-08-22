// TodoData.js
const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleDelete = (id) => {
        deleteTodo(id);
    };

    return (
        <div className="task-list-table">
            {todoList.map((item) => (
                <div className="item-todo" key={item.id}>
                    <span>{item.value}</span>
                    <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoData;