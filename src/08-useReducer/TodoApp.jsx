import { useReducer, useEffect } from "react"
import { TodoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
    {
        id: new Date().getTime()
        , desc: 'Item1'
        , done: false
    }
    , {
        id: new Date().getTime() + 1000
        , desc: 'Item2'
        , done: false
    }
]

export const TodoApp = () => {

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || [];

    }

    const [todos, dispatchTodos] = useReducer(TodoReducer, initialState, init)

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos) || [])

    }, [todos])


    const handleNewTodo = (todo) => {

        const action = {

            type: '[TODO] Add Todo'
            , payload: todo
        }

        dispatchTodos(action)

    }

    const handleRemoveTodo = (id) => {

        const action = {

            type: '[TODO] Remove Todo'
            , payload: id
        }

        dispatchTodos(action)

    }

    const handleToggleTodo = (id) => {


        const action = {

            type: '[TODO] Toggle Todo'
            , payload: id
        }

        dispatchTodos(action)

    }

    return (
        <>
            <div className="container">


                <div className="row">
                    <h1>
                        TodoApp: 100
                        <small>, Pendientes: 10</small>

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