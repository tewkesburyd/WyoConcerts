import { useState } from 'react';
import deleteIcon from '../assets/logos/deleteIcon.png'
import { useHistory } from 'react-router-dom';


export default function AdminConcertEdit( {concert, setConcert, id, setFormIsShown} ) {
    let history = useHistory()

    const [error, setError] = useState([])
    const [form, setForm] = useState({
        name: concert.name,
        date: concert.date,
        price: concert.price || "",
        venue_id: concert.venue.id,
        image: concert.image,
        website: concert.website,
        description: concert.description || ""
        })
        
    const handleFormUpdate = (e) => {
        e.preventDefault()
        setError([])
        fetch(`/api/concerts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    setFormIsShown(false)
                    setConcert({...concert, ...data})
                })
            } else {
                r.json().then((error) => setError(error.error))
            }
        })
    }
    
    const handleDelete = () => {
        fetch(`/api/concerts/${id}`, {
            method: 'DELETE',
        })
        .then((r) => {
            if(r.ok){
                r.json()
                history.replace('/dashboard')
            } else {
                console.log(r.error)
            }
        })
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
    <div className="flex w-screen">
            <form className="border-b border-[#dae1e8] py-10" onSubmit={handleFormUpdate}>
                <div className="min-w-full">
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3 w-full mb-2">
                            <label className="block text-gray-500 font-bold md:text-right md:mb-0 pr-4">
                                Concert Name
                            </label>
                        </div>
                        <div className="md:w-2/3 mb-2">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="name" placeholder= {form.name} value={form.name} />
                        </div>
                    </div>
                <div className="md:flex md:items-center ">  
                        <div className="md:w-1/3 mb-2">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Date
                            </label>
                        </div>
                        <div className="md:w-2/3 mb-2">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="date" placeholder= "date" value={form.date} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-2">
                        <div className="md:w-1/3 mb-2">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Price
                            </label>
                        </div>
                        <div className="md:w-2/3 mb-2">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="price"  onChange={handleChange} value={form.price} placeholder="price" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-2">
                        <div className="md:w-1/3 mb-2">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Website
                            </label>
                        </div>
                        <div className="md:w-2/3 mb-2">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="website"  onChange={handleChange} value={form.website} placeholder="website" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-2">
                        <div className="md:w-1/3 mb-2">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Image
                            </label>
                        </div>
                        <div className="md:w-2/3 mb-2">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="image" onChange={handleChange} value={form.image} placeholder="Image" />
                        </div>
                    </div> 
                    <div className="md:flex md:items-center mb-2">
                        <div className="md:w-1/3 mb-2">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Description
                            </label>
                        </div>
                        <div className="md:w-2/3 mb-2">
                            <input rows="3" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="description" onChange={handleChange} value={form.description} placeholder="description" />
                        </div>
                    </div> 
                    <div className="md:flex md:items-center mb-2">
                        <div className="md:w-1/3 mb-2">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Delete Concert
                            </label>
                        </div>
                        <div className="md:w-2/3 mb-2">
                            <button onClick={handleDelete}>
                                <img src={deleteIcon} className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid justify-items-stretch ">
                    <div className="justify-self-center mt-5">
                        <button className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit Edit
                        </button>
                        <div className="pl-20 ">
                            <h3 className="ml-10 block text-red-500 font-bold">
                            {error}
                            </h3>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}