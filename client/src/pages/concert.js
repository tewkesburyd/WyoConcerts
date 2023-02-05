import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

export default function Concert() {
    let { id } = useParams()

    const [concert, setConcert] = useState({})
    useEffect(() => {
        fetch(`/concerts/${id}`)
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => setConcert(data))
            } else {
                console.log(r)
            }
        })
    },[id])

    const handleClick = () => {
        fetch('/user_lists', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({concert_id: id})
        })
        .then((r) => {
            if(r.ok){
                r.json()
            } else {
                console.log(r)
            }
        })
    }

    return (
        <div className="h-screen">
            <div>
                <div>
                    {concert.name}
                </div>
                <div>
                    <a href={concert.website}>
                        {concert.website}
                    </a>
                </div>
                <div>
                    {concert.date}
                </div>
                <div>
                    {concert.price}
                </div>
            </div>
            <div>
                <button onClick={handleClick} className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded self-center">
                    Add to Concert List
                </button>
            </div>
        </div>
    )
}