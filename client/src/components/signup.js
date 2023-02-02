import { useState } from 'react';

export default function Signup({ setLoggedIn }) {

    const [error, setError] = useState([])
    const [form, setForm] = useState({
        email: '',
        password: '',
        promotion_interest: true
        })

    const handleSubmit = (e) => {
        // console.log('submit')
        e.preventDefault()
        setError([])
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(form)
        })
        .then((r) => {
            if(r.ok) {
                r.json().then((user) => console.log(user))
                setLoggedIn(true)
            } else {
                r.json().then((error) => setError(error.error))
            }
        })
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <div className="flex justify-center content-center pt-10">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            E-mail
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="email" placeholder= "email address" value={form.email} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="password" type="password" onChange={handleChange} value={form.password} placeholder="*************" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" onChange={handleChange} name='promotion_interest' value={form.promotion_interest} />
                            <span className="text-sm">
                            Send me concert notifications!
                            </span>
                        </label>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="shadow bg-[#FFC425] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Sign Up
                                </button>
                            </div>
                    </div>
                    <div className="pl-20 mb-6">
                        <div className="">
                            <h3 className="ml-10 block text-red-500 font-bold">
                            {error}
                            </h3>
                        </div>
                    </div>
                    <div className="pl-20 mb-6">
                        <div className="">
                            <h3 className="ml-10 block text-black-500">
                            Already a member? <button className="font-bold" onClick={(() => setLoggedIn(true))}>Sign In!</button>
                            </h3>
                        </div>
                    </div>
            </form>
        </div>
    )
}