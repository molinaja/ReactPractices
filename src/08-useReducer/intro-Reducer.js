console.log('reducer');

const initialState = [
    {
        id: 1
        , todo: 'tarea1'
        , done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] Add Todo') {
        return [...state, action.payload];

    }

    return state

}

let todos = todoReducer();
console.log(1)
console.log(todos)

const newTodo = [
    {
        id: 2
        , todo: 'tarea1'
        , done: false
    }
]

const addTodoAction = {

    type: '[TODO] Add Todo'
    , payload: newTodo

}

 
todos = todoReducer( todos , addTodoAction)
console.log(2)
console.log(todos)







