import { useState, useEffect } from 'react';
import LanderPresents from './../assets/images/LanderPresents.jpeg'
import FrontierDays from './../assets/images/FrontierDays.jpeg'
import LanderBar from './../assets/images/LanderBar.jpeg'
import ConcertListCard from '../components/concertlistcard_home';
import ConcertCard from '../components/concertcard';
import NewsThumbnail from '../components/news_thumbnail'
import RendezvousLineUp from './../assets/images/RendezvousLineUp.jpeg';
import TheFutureBirds from './../assets/images/TheFutureBirds.jpeg';
import CodyFestival from './../assets/images/CodyFestival.jpeg';


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

    const date = new Date()
    const currentMonth = date.getMonth()
    const currentMonthName = date.toLocaleString('default', { month: 'long' })

    const freeConcertList = freeConcerts.map((freeConcert) => <ConcertCard key={freeConcert.id} concert={freeConcert} />);

    const currentDateToString = () =>{
        if(currentMonth + 1 < 10 ){
            const monthString = (currentMonth + 1).toString()
            return `0${monthString}`
        } else {
            return (currentMonth + 1).toString()
        }
    }

    const filteredConcerts = (
        concerts.filter((concert)=> {
            return (
                concert.date.slice(4,6) === currentDateToString() ? concert : null
            )
        })
    )

    const concertList = filteredConcerts.map((concert) => <ConcertListCard key={concert.id} concert={concert} buttonText="Add to Your List" />)


    return (
        <div className="min-h-screen ">
            <div className="grid grid-cols-4 h-60">
                <img src={LanderPresents} alt='Lander Presents' className="h-60 w-full"/>
                <img src={FrontierDays} alt='Fontier Days' className="h-60 w-full"/>
                <img src={LanderBar} alt='Lander Bar' className="h-60 w-full"/>
                <img src={LanderPresents} alt='Lander Presents' className="h-60 w-full"/>
            </div>
            <div className="pt-10 w-2/3 m-auto flex justify-center grid grid-cols-1">
                <h3 className="justify-self-start text-2xl text-[#43464b] font-bold font-['Georgia','Arial'] mb-4">News</h3>
                <div className="grid grid-cols-3 ">
                <NewsThumbnail image={RendezvousLineUp} title="Rendezvous Line Up" newsSection='/news#section1' />
                <NewsThumbnail image={TheFutureBirds} title="Free Concert in Lander" newsSection='/news#section2' />
                <NewsThumbnail image={CodyFestival} title="Cody Songwriter Festival" newsSection='/news#section3' />
                </div>
            </div>
            <div className="relative flex relative flex container min-h-96 mb-10">
                <div className="pt-10 m-auto flex justify-center grid grid-cols-2 w-5/6">
                    <div className="min-h-full p-5 justify-self-center w-full">
                        <div className="grid" >
                            <h3 className="justify-self-start text-2xl text-[#43464b] font-bold font-['Georgia','Arial'] mb-4">Free Concerts</h3>
                            {freeConcertList}
                        </div>
                    </div>
                    <div className="min-h-96 p-5 justify-self-center w-full float-right">
                        <div className="grid">
                            <h3 className="justify-self-start text-2xl text-[#43464b] font-bold font-['Georgia','Arial'] mb-4">Shows in {currentMonthName}</h3>
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