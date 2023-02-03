import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logout from '../components/logout'

export default function Dashboard() {
    const history = useHistory()
    const [user, setUser] =useState(null)
    const [concerts, setConcerts] = useState([])

    useEffect(()=> {
    fetch(`/me`)
    .then(r => {
        if(r.ok){
            r.json()
            .then(data => {
                setUser(data)
                setConcerts(data.concerts)
            })
        } else {
            history.replace(`/login`)
        }
        })
    }, [])

    const concertlist = concerts.map((concert) => <h1>{concert.name}</h1>)

    return (
        <div>
            <h2>Welcome User</h2>
            <Logout />
            <div>
                {concertlist}
            </div>
        </div>
    )
}