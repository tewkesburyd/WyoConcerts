import { useHistory } from 'react-router-dom';

export default function Logout(){
    const history = useHistory()

    const handleLogout = () => {
        // console.log('logout')
        fetch('/logout', {
            method: 'DELETE',
        })
        .then((r) => {
            r.json()
            history.replace('/')
        })
    }

    return (
        <div className="">
            <button className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white px-2 rounded" onClick={handleLogout}>
                Log Out
            </button>
        </div>

    )
}