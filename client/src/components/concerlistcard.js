import { useState } from 'react';

export default function ConcertListCard({ concert, buttonText}) {
    const [error, setError] = useState(null)

    const handleClick = () => {
        setError(null)
        fetch('/user_lists', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({concert_id: concert.id})
        })
        .then((r) => {
            if(r.ok){
                r.json()
            } else {
                if (r.statusText){
                    setError("Must Sign In")
                } else {
                    console.log(r)
                }
            }
        })
    }

    return (
            <div className="my-5 border border-y-grey border-x-white grid grid-cols-2">
                <div className="w-3/4">
                    <h3 className="font-bold">{concert.name}</h3>
                    <p className="text-xs">{concert.name}</p>
                    <p className="text-xs" >{concert.venue?.city}, {concert.venue?.state}</p>
                    <a className="text-xs" href={concert.website}>Venue Website</a>
                </div>
                <div className="flex">
                    <button onClick={handleClick} className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded float-right self-center">{buttonText}</button>
                    <p>{error}</p>
                </div>
            </div>
    )
}