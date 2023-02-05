import { useState, useEffect } from 'react';

import ConcertCard from '../components/concertcard';
import JacksonHole2 from './../assets/images/JacksonHole2.jpeg';
import JacksonHole from './../assets/images/JacksonHole.jpeg';
import OysterRidge from './../assets/images/OysterRidge.jpeg';


export default function ConcertList(){

    const [concerts, setConcerts] = useState([])

    useEffect(() => {
        fetch('/concerts')
        .then((r) => {
            console.log(r)
            if(r.ok){
                r.json()
                .then((data) => {
                    console.log(data)
                    setConcerts(data)
                })
            } else {

            }
        })
    }, [])


    const concertlist = concerts.map((concert) => <ConcertCard key={concert.id} concert={concert} />)

    return(
        <div className="h-screen">
            <div className="grid grid-cols-3">
                <img src={JacksonHole2} alt="Jackson Hole Rendevous" className="h-full w-full"/>
                <img src={OysterRidge} alt="Jackson Hole Rendevous" className="h-full w-full"/>
                <img src={JacksonHole} alt="Jackson Hole Rendevous" className="h-full w-full"/>
            </div>
            <div className="flex justify-center">
                <h3 className="font-bold text-xl">Concerts</h3>
            </div>
            <div className="flex">
                <div className="w-1/4 flex justify-center border-r-2 mr-4">
                    <h3>search</h3>
                </div>
                <div className="w-3/4 mt-3">
                    <div className="">
                        <div className="grid grid-cols-4 gap-4">
                            {concertlist}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}