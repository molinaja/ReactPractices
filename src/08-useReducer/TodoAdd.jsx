import { useForm } from "../hooks/useForm"


export const TodoAdd = ( { onNewTodo }) => {

    const { formState,
            onInputChange,
            onResetForm, } = useForm({
                task: ''
        })

    const onFormSubmit = (event)=>{

        event.preventDefault();
        if (formState.task.lenght <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime()
            , desc: formState.task
            , done: false
        }
        onResetForm();
        onNewTodo(newTodo);

    }
    
    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder="Que hay que hacer?"
                    className="form-control form-text"
                    name="task"
                    value={formState.task}
                    onChange={onInputChange}
                ></input>
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>

            </form>
        </>
    )


}