import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import edit from './../assets/logos/edit.png';
import CommentSection from '../components/commentsection';
import AdminConcertEdit from '../components/admin_concert_edit';

export default function Concert({ user, addRsvp, removeRsvp }) {
    let { id } = useParams()

    const [concert, setConcert] = useState({})
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState([])
    const [formIsShown, setFormIsShown] = useState(false)

    useEffect(() => {
        fetch(`/api/concerts/${id}`)
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => {
                    setConcert(data)
                    setPosts(data.posts)
                    })
            } else {
                console.log(r)
            }
        })
    },[id])

    const handleClick = () => {
        fetch('/api/user_lists', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({concert_id: concert.id})
        })
        .then((r) => {
            if(r.ok){
                r.json().then(addRsvp)
            } else {
                if(r.status === 401){
                    setError("Must be signed in")
                }
            }
        })
    }

    const userListFilter = user?.user_lists.find((list) => list.concert_id == id ? list.concert_id : null)

    const handleDelete =  () => {
        fetch(`/api/user_lists/${userListFilter.id}`, {
            method: 'DELETE',
        })
        .then(removeRsvp(userListFilter))
    }    

    return (
        <div className="">
            <div className="p-10 flex grid ">
                <div className="lg:max-w-full lg:flex h-500 w-500 grid grid-cols-2">
                    <img className="object-contain overflow-hidden w-500 h-500  md:max-w-xl" src={concert.image} alt={concert.name} />
                    <div className="pl-4">
                        <h1 className="text-2xl text-[#43464b] font-bold font-['Georgia','Arial'] mb-4 tracking-tight pr-2 ">
                        {concert.name}
                        </h1>
                        <a href={concert.website}>
                            Details
                        </a>
                        <p>
                        {concert.date?.slice(0,2)}/{concert.date?.slice(2,4)}/{concert.date?.slice(4,8)}
                        </p>
                        <p>
                        Cost: ${concert.price}
                        </p>
                            {user?.admin === true ? <img src={edit} alt="edit" className="h-8" onClick={() => setFormIsShown(!formIsShown)}></img> : null}
                            {formIsShown === true ? <AdminConcertEdit setConcert={setConcert} concert={concert} id={id} setFormIsShown={setFormIsShown}/> : null}
                    </div>
                </div>
                <div className=" border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-4 w-full">
                        
                        <p>{concert.description}</p>
                    <div>
                        {userListFilter?.concert_id != id ? 
                            <button onClick={handleClick} className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded self-center">
                            Add to RSVP List
                            </button> 
                            :
                            <button onClick={handleDelete} className="shadow bg-[#fe902d] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded self-center">
                            Remove
                            </button>
                        }
                        <h1 className="text-[#a41e1f]">{error}</h1>
                        {error ? <a href="/login" className="text-xs">Sign up or Log in</a>: null}
                    </div>
                </div>
            </div>

            <CommentSection posts={posts} setPosts={setPosts} user={user}/>
        </div>
    )
}