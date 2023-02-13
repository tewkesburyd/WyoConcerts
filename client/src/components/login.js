import { useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function LoginComponent({ setLoggedIn }) {
    let history = useHistory()

    const [error, setError] = useState([])
    const [form, setForm] = useState({
        email: '',
        password: ''
        })

    const handleSubmit = (e) => {
        // console.log('submit')
        e.preventDefault()
        setError([])
        fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(form)
        })
        .then((r) => {
            if(r.ok) {
                r.json()
                .then((data) => console.log(data))
                .then(history.replace('/dashboard'))
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
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            E-mail
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" onChange={handleChange} name="email" placeholder= "email address" value={form.email} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="password" type="password" onChange={handleChange} value={form.password} placeholder="*************" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button className="shadow bg-[#FFC425] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Login
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
                            Not a member? <button className="font-bold" onClick={(() => setLoggedIn(false))}>Sign Up!</button>
                            </h3>
                        </div>
                    </div>
            </form>
        </div>
    )
}