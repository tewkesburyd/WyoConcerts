export default function ConcertListCard({ concert }) {
    return (
            <div className="my-5 border border-y-grey border-x-white grid grid-cols-2">
                <div className="w-3/4">
                    <h3 className="font-bold">{concert.name}</h3>
                    <p className="text-xs">{concert.name}</p>
                    <p className="text-xs" >{concert.city}, {concert.state}</p>
                    <a className="text-xs" href={concert.website}>Venue Website</a>
                </div>
                <div className="flex">
                    <button className="shadow bg-[#013662] hover:[#a41e1f] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded float-right self-center">Add To Your List</button>
                </div>
            </div>
    )
}