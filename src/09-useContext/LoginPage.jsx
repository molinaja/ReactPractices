import { useContext } from 'react'
import { UserContext } from './context/USerContext';

export const LoginPage = () => {

    const { user, setUser } =  useContext(UserContext);
   

    return (
        <>
            <h1>Login</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button 
            onClick={ ()=> setUser(
                {
                    id: 123
                    , name: 'Juan M'
                    , email: 'Juan.molina@gmail.com'
                } 
            )}
            className="btn btn-primary">Set User</button>
        </>
    )

}
