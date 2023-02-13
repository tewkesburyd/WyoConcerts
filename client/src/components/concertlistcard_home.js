export default function ConcertListCard({ concert}) {
    return (
        <a href={`/concerts/${concert?.id}`} className="w-full">
            <div className="pl-1 mb-3 border border-y-grey border-x-white grid grid-cols-2 h-max dark:hover:bg-gray-100">
                <div className="w-3/4">
                    <h3 className="font-bold">{concert.name}</h3>
                    <p className="text-xs">{concert.name}</p>
                </div>
                <div className="float-right">
                    <h3 className=" text-xs text-[#43464b] font-bold font-['Georgia','Arial']">{concert.venue?.name}</h3>
                    <p className="text-xs" >{concert.venue?.city} {concert.venue?.state}</p>
                    {/* <a className="text-xs" href={concert.website}>Venue Website</a> */}
                </div>
            </div>
        </a>
    )
}