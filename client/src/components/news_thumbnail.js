export default function NewsThumbnail({image, newsSection, title}){
    return (
        <div className="grid grid-cols-3 ">
            <div className='relative overflow-hidden rounded border-1 w-60 h-60'>
                <a className="h-60 w-60 grid grid-cols-1" href={newsSection}>
                    <img className="h-60 w-60 overflow-hidden" src={image} alt="Rendezvous Line Up" >
                    </img>
                    <h3 className="absolute bottom-0 bg-[#404040] text-lg text-white font-bold rounded-b text-center w-full h-8">{title}</h3>
                </a>
            </div>
        </div>
    )
}