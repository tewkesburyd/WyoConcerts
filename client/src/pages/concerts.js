import { useState, useEffect } from 'react';
import ConcertCard from '../components/concertcard';
import JacksonHole2 from './../assets/images/JacksonHole2.jpeg';
import JacksonHole from './../assets/images/JacksonHole.jpeg';
import OysterRidge from './../assets/images/OysterRidge.jpeg';


export default function ConcertList(){

    const [concerts, setConcerts] = useState([])
    // const [location, setLocation] = useState('')
    // const [band, setBand] = useState('')

    useEffect(() => {
        fetch('/api/concerts')
        .then((r) => {
            if(r.ok){
                r.json()
                .then((data) => {
                    setConcerts(data)
                })
            } else {

            }
        })
    }, [])

    // const filterCity = concerts.filter((concert) => concert.venue.city.toLowerCase().includes(location.toLowerCase())? concert: null)

    // const filterConcert = concerts.filter((concert) => concert.name.toLowerCase().includes(band.toLowerCase())? concert: null)


    const concertlist = concerts.map((concert) => <ConcertCard key={concert.id} concert={concert} imgSize="relative box-border border-4 max-w-187" />)

    return(
        <div className="">
            <div className="grid grid-cols-4 container min-w-full h-60">
                <img src={JacksonHole2} alt="Jackson Hole Rendevous" className="h-60 w-full"/>
                <img src={OysterRidge} alt="Jackson Hole Rendevous" className="h-60 w-full"/>
                <img src={JacksonHole} alt="Jackson Hole Rendevous" className="h-60 w-full"/>
                <img src={OysterRidge} alt="Jackson Hole Rendevous" className="h-60 w-full"/>
            </div>
            <div className="flex ">
                <div className="w-1/4 justify-center border-r-2 mr-4 ">
                    <div className="flex justify-center mt-10 ">
                        <div className="mb-3 xl:w-50 justify-center ">
                            <label className="form-label inline-block mb-2 text-gray-700">Search</label>
                            <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by band"/>
                            <input className="mt-2 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by city"/>
                        </div>
                    </div>
                </div>
                <div className="w-3/4 pl-20 mt-10">
                    <div className="h-auto overflow-y-auto">
                        {concertlist}
                    </div>
                </div>
            </div>
        </div>
    )
}