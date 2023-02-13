import { useState } from 'react';

export default function AdminVenue(){
    const [error, setError] = useState([])
    const [form, setForm] = useState({
        name: '',
        address: '',
        city: '',
        zip: null,
        state: '',
        description: '',
        website: ''
        })

        const handleSubmit = (e) => {
            // console.log('submit')
            e.preventDefault()
            setError([])
            fetch('/api/venue', {
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
                    r.json().then((error) => setError(error.error))
                }
            })
        }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <span className="grid grid-cols-1 justify-items-stretch pt-10">
                <h1 className="justify-self-center block text-gray-500 font-bold">Add a Venue</h1>
            </span>
            <form className="border-b border-[#dae1e8] py-10" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-3 gap-3">
                <div className="md:flex md:items-center ">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Venue Name
                        </label>
                    </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="name" placeholder= "venue name" value={form.name} />
                        </div>
                    </div>
                <div className="md:flex md:items-center ">  
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Address
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="address" placeholder= "address" value={form.address} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            City
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="city"  onChange={handleChange} value={form.city} placeholder="city" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            State
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="state"  onChange={handleChange} value={form.state} placeholder="state" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Zip
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="zip"  onChange={handleChange} value={form.zip} placeholder="zip" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Website
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="website" onChange={handleChange} value={form.website} placeholder="website" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Description
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="description"  onChange={handleChange} value={form.description} placeholder="description" />
                        </div>
                    </div>
                    
                </div>
                <div className="grid justify-items-stretch ">
                    <div className="justify-self-center mt-5">
                        <button className="shadow bg-[#FFC425] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit Venue
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