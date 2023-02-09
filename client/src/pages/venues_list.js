import { useState, useEffect } from 'react'
import VenueCard from '../components/venuecard';

export default function VenueList({user}) {
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

    const venuelist = venues.map((venue) => <VenueCard key={venue.id} venue={venue} user={user}/>)

    return (
        <div className='h-screen grid'>
            <div className="grid place-items-center justify-self-center px-20 pt-10 pb-5 border-b-2 border-gray-700 w-3/4">
                <p className="text-center px-40  ">Wyoming is a big state. With many local bars hosting live music, it’s difficult to include all concerts and venues. In order to simplify finding a venue, we included some of the larger cities and towns. If the area you are look for in not include, please check out the miscellaneous category.</p>
            </div>
            <div className="flex justify-center  mr-4 static">
                    <div class=" mt-10 ">
                        <div className="mb-3 xl:w-50 p-4 flex">
                            <label className="mr-2 pt-1 form-label inline-block mb-2 text-black">Search</label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by city"/>
                        </div>
                    </div>
                </div>
            <div className="grid justify-items-stretch">
                <div className="w-3/4 grid grid-cols-1 gap-4 p-10 justify-self-center">
                    {venuelist}
                </div>
            </div>
        </div>
    )
}