import { useState } from 'react';
import AdminVenue from "./admin_venue_add";
import AdminConcert from "./admin_concert_add";

export default function Admin() {
    const [venue, setVenue] = useState(false)
    const [formIsShown, setFormIsShown] = useState(false)
    const [form, setForm] = useState({
        name: '',
        date: '',
        price: '',
        venue_id: '',
        image: '',
        website: ''
        })

        const handleSubmit = (e) => {
            // console.log('submit')
            e.preventDefault()
            // setError([])
            fetch('/concert', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(form)
            })
            .then((r) => {
                if(r.ok) {
                    r.json().then((user) => console.log(user))
                } else {
                    r.json().then((error) => {
                        console.log(error.error)
                        // setError(error.error)
                    })
                }
            })
        }


    return (
        <div className="h-screen ">
            <div className="grid grid-cols-1">
                <h1 className="text-[#013662] text-3xl font-bold font-['Arial', 'Helvetica', 'sans-serif'] py-5">Administrator Functions</h1>
            </div>
            <div>
                <button className="text-[#013662] text-xl font-bold font-['Arial', 'Helvetica', 'sans-serif']" onClick={()=>setVenue(!venue)}>{venue === false ? "Add A Venue" : "Hide Venue"}</button>
                {venue === true ? <AdminVenue /> : null}
            </div>
            <div>
                <p>To edit a venues information, go to the venue page</p>
            </div>
            <div>
                <button className="text-[#013662] text-xl font-bold font-['Arial', 'Helvetica', 'sans-serif']" onClick={()=>setFormIsShown(!formIsShown)}>
                    {formIsShown === false ? "Add A Concert" : "Hide Concert"}
                </button>
                {formIsShown === true ? <AdminConcert form={form} handleForm={handleSubmit} setForm={setForm}/> : null}
            </div> 
            <div>
                <p>To edit a concerts information, go to the specific concert page</p>
            </div>
        </div>
    )
}