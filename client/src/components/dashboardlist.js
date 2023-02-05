import { useState, useEffect } from 'react';

export default function DashboardList({ concert, buttonText }) {
    const [show, setShow] = useState({})
    
    useEffect(() => {
        fetch(`/concerts/${concert.concert_id}`)
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => setShow(data))
            }
        })
    }, [])

    const handleDelete =  () => {
        fetch(`/user_lists/${concert.id}`, {
            method: 'DELETE',
        })
    }

    return (
        <div className="my-5 border border-y-grey border-x-white grid grid-cols-2">
        <div className="w-3/4">
            <h3 className="font-bold">{show.name}</h3>
            <p className="text-xs">{show.name}</p>
            <p className="text-xs" >{show.venue?.city}, {show.venue?.state}</p>
            <a className="text-xs" href={show.website}>Venue Website</a>
        </div>
        <div className="flex">
            <button onClick={handleDelete} value='' className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded float-right self-center">{buttonText}</button>
        </div>
    </div>
    )
}