
export default function AdminConcert( {handleForm, form, setForm} ) {


    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    return (
    <div>
        <span className="grid grid-cols-1 justify-items-stretch">
            <h1 className="justify-self-center block text-gray-500 font-bold">Add a Concert</h1>
            </span>
            <form className="border-b border-[#dae1e8] py-10" onSubmit={handleForm}>
                <div className="w-full grid grid-cols-3 gap-3">
                <div className="md:flex md:items-center ">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Concert Name
                        </label>
                    </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="name" placeholder="Concert Name" value={form.name} />
                        </div>
                    </div>
                <div className="md:flex md:items-center ">  
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Date
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="date" placeholder= "date" value={form.date} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Price
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="price"  onChange={handleChange} value={form.price} placeholder="price" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Website
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="website"  onChange={handleChange} value={form.website} placeholder="website" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Venue Id
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="venue_id"  onChange={handleChange} value={form.venue_id} placeholder="venue_id" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center ">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Image
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="image" onChange={handleChange} value={form.image} placeholder="Image" />
                        </div>
                    </div> 
                </div>
                <div className="grid justify-items-stretch ">
                    <div className="justify-self-center mt-5">
                        <button className="shadow bg-[#FFC425] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit Concert
                        </button>
                        <div className="pl-20 ">
                            <h3 className="ml-10 block text-red-500 font-bold">
                            {/* {error} */}
                            </h3>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}