import { useState } from 'react';
import Signup from '../components/signup';
import LoginComponent from '../components/login';

export default function Login() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className='h-screen'>
            {loggedIn === false ? <Signup setLoggedIn={setLoggedIn} /> : <LoginComponent setLoggedIn={setLoggedIn}/>}
        </div>
    )
}