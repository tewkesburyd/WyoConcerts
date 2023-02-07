import { useState } from 'react';
import AdminVenue from "./admin_venue";
import AdminConcert from "./admin_concert";

export default function Admin() {
    const [venue, setVenue] = useState(false)
    const [concert, setConcert] = useState(false)


    return (
        <div className="h-screen ">
            <div className="grid grid-cols-1">
                <h1 className="text-[#013662] text-3xl font-bold font-['Arial', 'Helvetica', 'sans-serif'] py-5">Administrator Functions</h1>
            </div>
            <div>
                <button className="text-[#013662] text-xl font-bold font-['Arial', 'Helvetica', 'sans-serif']" onClick={()=>setVenue(!venue)}>{venue === false ? "Add/Edit Venue" : "Hide Venue"}</button>
                {venue === true ? <AdminVenue /> : null}
            </div>
            <div>
                <button className="text-[#013662] text-xl font-bold font-['Arial', 'Helvetica', 'sans-serif']" onClick={()=>setConcert(!concert)}>{concert === false ? "Add/Edit Concert" : "Hide Concert"}</button>
                {concert === true ? <AdminConcert /> : null}
            </div> 
        </div>
    )
}