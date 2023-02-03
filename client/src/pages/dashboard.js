import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logout from '../components/logout'
import ConcertListCard from '../components/concerlistcard';

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

    console.log(concerts)

    const concertlist = concerts.map((concert) => <ConcertListCard key={concert.id} concert={concert} />)

    return (
        <div className='h-screen '>
            <div className="grid justify-items-center">
                <div className="">
                    <h2 className="text-xl">Welcome </h2>
                </div>
                <div className="">
                    <Logout />
                </div>
            </div>
            <div>
                {concertlist}
            </div>
        </div>
    )
}