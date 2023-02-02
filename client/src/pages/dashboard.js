import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logout from '../components/logout'

export default function Dashboard() {
    const history = useHistory()
    const [user, setUser] =useState(null)

    useEffect(()=> {
    fetch('/users/:id')
    .then(r => {
        if(r.ok){
            r.json()
            .then(data => setUser(data))
        } else {
            history.replace(`/login`)
        }
        })
    }, [history, user])


    return (
        <div>
            <h1> Why Isn't This Working?</h1>
            <h2>Welcome User</h2>
            <Logout />
        </div>
    )
}