import { useState } from 'react';
import AdminVenueEdit from './admin_venue_edit';
import edit from './../assets/logos/edit.png';

export default function VenueCard({ venue, user, setVenues, venues }) {
    const [isForm, setIsForm] = useState(false)

    return (
        <div>
        <div className="box-border md:h-25 md:w-full border-2 p-2 ">
            <div className="flex-left pr-5 w-1/4 justify-self-stretch">
                <h2 className="font-bold text-xl">{venue.name}</h2>
                <a href={venue.website} className="hover:text-blue-500 text-sm">Venue Website</a>
                <div className="flex">
                    <h4 className="text-sm pr-2">{`${venue.city} ${venue.state}`}</h4>
                    {user?.admin === true ? <img src={edit} alt="edit" className=" w-5 h-5" onClick={() => setIsForm(!isForm)}></img> : null}
                </div>
            </div>
            <div className=" pt-2">
                <p>{venue.description}</p>
            </div>
        </div>
            {user?.admin === true ? 
                <div>
                    {isForm === true ? <AdminVenueEdit venue={venue} setVenues={setVenues} venues={venues} setIsForm={setIsForm}/> : null}
                </div> 
                : null}
        </div>
    )
}