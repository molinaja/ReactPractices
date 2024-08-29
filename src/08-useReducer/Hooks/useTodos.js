import { useEffect, useReducer} from 'react'
import { TodoReducer } from '../todoReducer';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const useTodos = () => {



    const [todos, dispatchTodos] = useReducer(TodoReducer, [], init)

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos) || [])
        console.log(todos.filter(todo => !todos.done));

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

    return {
        todos
        , handleNewTodo
        , handleRemoveTodo
        , handleToggleTodo
        , todosCount : todos.length
        , todosCountPending: todos.filter(todo => !todo.done).length
    }


}
