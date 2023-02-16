import { useState } from 'react';
import add from './../assets/logos/add.png'
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
            e.preventDefault()
            // setError([])
            fetch('/api/concerts', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(form)
            })
            .then((r) => {
                if(r.ok) {
                    r.json().then((data) => console.log(data))
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
                <h1 className="text-[#013662] text-2xl font-bold font-['Arial', 'Helvetica', 'sans-serif'] pt-5">Admin Functions</h1>
                <p>To edit a venue or concert,</p>
                <p>go to the respective page.</p>
                <p>Click the edit icon in the</p>
                <p>information section.</p>
            </div>
            <div className="flex">
                <img src={add} alt="add" className="max-h-6" onClick={()=>setVenue(!venue)}></img>
                <h3>Venue</h3>
                {venue === true ? <AdminVenue setFormIsShown={setFormIsShown}/> : null}
                
            </div>
            <div className="flex">
                <img src={add} alt="add" className="max-h-6" onClick={()=>setFormIsShown(!formIsShown)}></img>
                <h3>Concert</h3>
                {formIsShown === true ? <AdminConcert form={form} handleForm={handleSubmit} setForm={setForm}/> : null}
                
            </div> 

        </div>
    )
}