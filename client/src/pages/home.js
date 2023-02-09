import { useState, useEffect } from 'react';
import LanderPresents from './../assets/images/LanderPresents.jpeg'
import FrontierDays from './../assets/images/FrontierDays.jpeg'
import LanderBar from './../assets/images/LanderBar.jpeg'
import ConcertListCard from '../components/concerlistcard';
import ConcertCard from '../components/concertcard';


export default function Home() {
    const [concerts, setConcerts] = useState([])
    const [freeConcerts, setFreeConcerts] = useState([])

    useEffect(() => {
        fetch('/concerts')
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => {
                    setConcerts(data)})
            } else {
                console.log(r)
            }
        })
    }, [])

    useEffect(() => {
        fetch('/freeconcerts')
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => {
                    setFreeConcerts(data)})
            } else {
                console.log(r)
            }
        })
    }, [])

    const freeConcertList = freeConcerts.map((freeConcert) => <ConcertCard key={freeConcert.id} concert={freeConcert} />);

    const concertList = concerts.map((concert) => <ConcertListCard key={concert.id} concert={concert} buttonText="Add to Your List" />)

    return (
        <div className="h-screen">
            <div className="grid grid-cols-4 h-60">
                <img src={LanderPresents} alt='Lander Presents' className="h-60 w-full"/>
                <img src={FrontierDays} alt='Fontier Days' className="h-60 w-full"/>
                <img src={LanderBar} alt='Lander Bar' className="h-60 w-full"/>
                <img src={LanderPresents} alt='Lander Presents' className="h-60 w-full"/>
            </div>
            <div className="relative flex relative flex container min-h-96 ">
                <div className="p-5 flex justify-center content-center static min-h-full">
                <div className="min-h-full w-3/6 p-5 justify-self-center">
                        <div className="grid" >
                            <p className="justify-self-center font-bold">Free Concerts</p>
                            {freeConcertList}
                        </div>
                    </div>
                    <div className="min-h-96 w-1/3 p-5 justify-self-center">
                        <div className="grid">
                            <h3 className="justify-self-center font-bold">All Shows</h3>
                        </div>
                        <div className="h-96">
                            <div className="overflow-y-scroll h-full">
                                {concertList}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}