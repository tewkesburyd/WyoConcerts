import { useState } from 'react'

export default function NewsCard({text, img, title}){
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="mb-10">
            <div className="shadow-lg">
                {showMore === false ? 
                <>
                <div className='rounded w-full h-60 overflow-hidden' >
                    <img className="float-left h-50 w-48 rounded pr-4" alt={title}src={img} />
                    <p className="mb-2 pl-5 text-xl text-[#43464b] font-bold font-['Georgia','Arial']">{title}</p>
                    <p className="md:text-left text-m p-1  h-30">
                    {text}
                    </p>
                </div>
                <span className="w-full mt-6 lg:mt-0 text-center md:text-left">
                    <button onClick={() => setShowMore(!showMore)} className="w-full shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded self-center">Show More</button>
                </span>
                </>
                :
                <>
                <div className='rounded w-full h-auto'>
                    <img className="float-left h-50 w-48 rounded pr-4" alt={title}src={img} />
                    <p className="mb-2 pl-5 text-xl text-[#43464b] font-bold font-['Georgia','Arial']">{title}</p>
                    <p className="md:text-left text-m p-1  h-30">
                    {text}
                    </p>
                </div>
                <span className="w-full mt-6 lg:mt-0 text-center md:text-left">
                    <button onClick={() => setShowMore(!showMore)} className="w-full shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded self-center">Show Less</button>
                </span>
                </>
                }
            </div>
        </div>
    )
}