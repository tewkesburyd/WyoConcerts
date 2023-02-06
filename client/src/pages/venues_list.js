import { useState, useEffect } from 'react'
import VenueCard from '../components/venuecard';

export default function VenueList() {
    const [venues, setVenues] = useState([])

    useEffect(() => {
        fetch('/venues')
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => setVenues(data))
            } else {

            }
        })
    },[])

    const venuelist = venues.map((venue) => <VenueCard key={venue.id} venue={venue}/>)

    return (
        <div className='h-screen'>
            <div className="grid place-items-center px-20 pt-10">
                <p className="text-center px-40">Wyoming is a big state. With many local bars hosting live music, it’s difficult to include all concerts and venues. In order to simplify finding a venue, we included some of the larger cities and towns. If the area you are look for in not include, please check out the miscellaneous category.</p>
            </div>
            <div className="grid justify-items-stretch">
                <div className="w-3/4 grid grid-cols-1 gap-4 p-10 justify-self-center">
                    {venuelist}
                </div>
            </div>
        </div>
    )
}