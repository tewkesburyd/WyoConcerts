import { useState, useEffect } from 'react';
import LanderPresents from './../assets/images/LanderPresents.jpeg'
import FrontierDays from './../assets/images/FrontierDays.jpeg'
import LanderBar from './../assets/images/LanderBar.jpeg'
import ConcertListCard from '../components/concerlistcard';


export default function Home() {
    const [concerts, setConcerts] = useState([])

    useEffect(() => {
        fetch('/concerts')
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => {
                    console.log(data)
                    setConcerts(data)})
            } else {
                console.log(r)
            }
        })
    }, [])

    const concertList = concerts.map((concert) => <ConcertListCard key={concert.id} concert={concert}/>)

    return (
        <div className="h-screen">
            <div className="grid grid-cols-3">
                <img src={LanderPresents} alt='Lander Presents' className="h-auto w-full"/>
                <img src={FrontierDays} alt='Fontier Days' className="h-auto w-full"/>
                <img src={LanderBar} alt='Lander Bar' className="h-full w-full"/>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5  flex justify-center content-center">
                <div className="min-h-40 w-full p-5 border-2 border-black justify-self-center">
                    <div className="grid">
                        <h3 className="justify-self-center font-bold">Up Coming Shows</h3>
                    </div>
                    <div className="h-96">
                        <div className="overflow-y-scroll h-full">
                        {concertList}
                        </div>
                    </div>
                </div>
                <div className="min-h-40 w-full p-5 border-2 border-black justify-self-center">
                    <div className="grid" >
                        <p className="justify-self-center font-bold">Show of the Month</p>
                    </div>
                </div>
            </div>
        </div>
    )
}