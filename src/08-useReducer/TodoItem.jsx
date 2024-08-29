
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {

    return (
        <>

            <li className=" list-group-item d-flex justify-content-between">
                <span
                    className={
                        `align-content-center ${ (todo.done) ? 'text-decoration-line-through' : ''} `
                    }
                    onClick={() => onToggleTodo(todo.id)}
                >
                    {todo.desc}
                </span>
                <button
                    className="btn btn-outline-danger "
                    onClick={() => onDeleteTodo(todo.id)} >
                    Borrar
                </button>
            </li>

        </>
    )

}