import { useReducer, useEffect } from "react"
import { TodoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "./Hooks/useTodos"



export const TodoApp = () => {

    const {todos
        , handleNewTodo
        , handleRemoveTodo
        , handleToggleTodo
        , todosCount
        , todosCountPending } = useTodos();

    return (
        <>
            <div className="container">


                <div className="row">
                    <h1>
                        TodoApp: {todosCount}
                        <small>, Pendientes: {todosCountPending}</small>

                    </h1>

                </div>

                <div className="row">

                    <div className="col-7">

                        <TodoList
                            todos={todos}
                            onDeleteTodo={id => handleRemoveTodo(id)}
                            onToggleTodo={id => handleToggleTodo(id)}
                        />

                    </div>

                    <div className="col-5">
                        <h4>Agregar Tarea</h4>
                        <hr />
                        <TodoAdd onNewTodo={todo => handleNewTodo(todo)} />
                    </div>

                </div>

            </div>

        </>
    )

}