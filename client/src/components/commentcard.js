import { useState } from 'react';

export default function CommentCard({ comment, setPosts, posts, user }){
    const [form, setForm] = useState({
        message: ''
    })

    const handleDelete = () => {
        fetch(`/api/posts/${comment.id}`, {
            method: 'DELETE'
        })
        .then((r) => {
            if(r.ok){
                r.json()
                setPosts(posts.filter(post => post.id !== comment.id))
            }
        })
    }
    const handleEdit = () => {
        fetch(`/api/posts/${comment.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        })
        .then((r) => {
            r.json()
        })
    }

    return (
        <div className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 w-full">
        <footer className="flex justify-between items-center">
            <div className="grid items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">{comment.user.username}</p>
                <p className="inline-flex items-center mr-3 text-sm text-gray-600 dark:text-gray-400 mb-3">{comment.created_at}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{comment.message}</p>
            </div>
            <div className="border-l w-30 justify-center shadow ">
                {user?.id === comment.user.id ? 
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                    <li className="">
                        <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</button>
                    </li>
                    <li>
                        <button onClick={handleDelete} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</button>
                    </li>
                </ul>
                : null}
            </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400"></p>
    </div>
    )
}