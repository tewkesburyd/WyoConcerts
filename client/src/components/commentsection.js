import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CommentCard from './commentcard';

export default function CommentSection({posts, setPosts}){
    let { id } = useParams()

    const [error, setError] = useState(null)
    const [form, setForm] = useState({
        concert_id: id,
        message: ''
    })

    useEffect(() => {
        fetch(`/concerts/${id}`)
        .then((r) => {
            if(r.ok){
                r.json()
            }
        })
    }, [])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handlePost = (e) => {
        e.preventDefault()
        setError(null)
        fetch('/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
             },
             body: JSON.stringify(form)
        }) 
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => {
                    setPosts([...posts, data])
                })
            } else {
                if(r.status == 401){
                    setError("Must be signed in to comment")
                }
            }
        })

    }



    const commentsList = posts.map((comment) => <CommentCard key={comment.id} comment={comment} setPosts={setPosts} posts={posts} />)

    return (
        <section className="max-h-full bg-white dark:bg-[#013662]  lg:py-10">
            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion</h2>
                </div>
                <form className="mb-6" onSubmit={handlePost}>
                    <div className="py-2 px-4 mb-4 bg-[#f6f6f6] rounded-lg rounded-t-lg border border-gray-200 ">
                        <label className="sr-only">Your comment</label>
                        <textarea id="comment" rows="6"
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none bg-[#f6f6f6] dark:placeholder-black"
                            placeholder="Write a comment..." onChange={handleChange} name="message" value={form.message}></textarea>
                    </div>
                    <button type="submit"
                        className="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Post comment
                    </button>
                    <h1 className="text-[#a41e1f]">{error}</h1>
                </form>
            </div>
            <div className="max-w-2xl mx-auto px-4">
                <div className="justify-self-center ">
                {commentsList}
                </div>
            </div>
        </section>
    )
}