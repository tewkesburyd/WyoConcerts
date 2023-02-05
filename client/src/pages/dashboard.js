import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logout from '../components/logout'
import DashboardList from '../components/dashboardlist';
import Calendar from 'react-calendar';

export default function Dashboard() {
    const history = useHistory()
    const [user, setUser] =useState(null)
    const [userList, setUserList] = useState([])

    useEffect(()=> {
    fetch(`/me`)
    .then(r => {
        if(r.ok){
            r.json()
            .then(data => {
                setUser(data)
                setUserList(data.user_lists)
            })
        } else {
            history.replace(`/login`)
        }
        })
    }, [history])

    const concertlist = userList.map((concert) => <DashboardList key={concert.id} concert={concert} buttonText="Remove From List" setUserList={setUserList} />)

    return (
        <div className='h-screen'>
            <div className="grid grid-cols-2 gap-2 ">
                <div className="max-w-md flex flex-col">
                    <div className="mt-5 mb-5  ml-10">
                        <h2 className="text-4xl mb-3">Welcome</h2>
                        <Logout className=""/>
                    </div>
                    <div className="min-h-40 max-w-md border-2 border-black ml-10">
                        <Calendar />
                    </div>

                </div>
                <div className="bg-[#f6f6f6] overflow-hidden w-full h-screen">
                    <div className="px-6 py-4 flex-1 overflow-y-scroll">
                        {userList.length === 0 ? <div><h1 className="">There are no concert's in your list at this time.</h1><a href="/concerts">Explore Concerts</a></div>: concertlist}
                    </div>
                </div>
            </div>
        </div>
    )
}