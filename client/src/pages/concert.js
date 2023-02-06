import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CommentSection from '../components/commentsection';

export default function Concert() {
    let { id } = useParams()

    const [concert, setConcert] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`/concerts/${id}`)
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
        fetch('/user_lists', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({concert_id: id})
        })
        .then((r) => {
            if(r.ok){
                r.json()
            } else {
                console.log(r)
            }
        })
    }

    return (
        <div className="h-screen grid grid-cols-1">
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
                <div className="lg:max-w-full lg:flex ">
                    <img className="object-cover w-full md:flex-row md:max-w-xl" src={concert.image} alt={concert.name} />
                </div>
                <div className="w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8" >
                        <h1 className="mb-2 text-2xl font-bold tracking-tight ">
                        {concert.name}
                        </h1>
                        <a href={concert.website}>
                        {concert.website}
                        </a>
                        <p>
                        {concert.date}
                        </p>
                        <p>
                        {concert.price}
                        </p>
                    </div>
                    <div>
                        <button onClick={handleClick} className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded self-center">
                        Add to Concert List
                        </button>
                    </div>
                </div>
            </div>
            <CommentSection posts={posts} setPosts={setPosts}/>
        </div>
    )
}