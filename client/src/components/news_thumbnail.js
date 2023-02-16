

export default function NewsThumbnail({image, newsSection, title}){
    return (
        <div className='border-1 w-60 h-60'>
            <a className="h-60 w-60 grid grid-cols-1" href="/news">
                <img className="h-60 w-60 rounded-t overflow-hidden" src={image} alt="Rendezvous Line Up" >
                </img>
                <h3 className="bg-[#404040] text-lg text-white font-bold rounded-b text-center w-full h-8">{title}</h3>
            </a>
        </div>
    )
}