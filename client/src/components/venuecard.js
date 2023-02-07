import { useState } from 'react';
import AdminVenueEdit from './admin_venue_edit';

export default function VenueCard({ venue, user }) {
    const [isForm, setIsForm] = useState(false)

    return (
        <div>
        <div className="box-border md:h-25 md:w-full border-2 p-2 flex ">
            <div className="flex-left pr-5 w-1/4">
                <h2 className="font-bold text-xl">{venue.name}</h2>
                <a href={venue.website} className="hover:text-blue-500 text-sm">{venue.website}</a>
                <h4 className="text-sm">{`${venue.city}, ${venue.state}`}</h4>
            </div>
            <div className="pl-10 pt-7">
                <p>{venue.description}</p>
            </div>
        </div>
        <div className="">
            {user?.admin === true ? 
                <div>
                    <button className="text-[#013662] text-l font-bold font-['Arial', 'Helvetica', 'sans-serif'] " onClick={() => setIsForm(!isForm)}>{isForm === false ? "Edit Venue Above" : "Hide Form"}</button>
                    {isForm === true ? <AdminVenueEdit venue={venue}/> : null}
                </div> 
                : null}
            </div>
        </div>
    )
}