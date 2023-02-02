export default function VenueCard({ venue }) {
    return (
        <div className="box-border md:h-25 md:w-full border-2 p-2 flex ">
            <div className="flex-left pr-5 w-1/4">
                <h2 className="font-bold text-xl">{venue.name}</h2>
                <a href={venue.website} className="hover:text-blue-500 text-sm">{venue.website}</a>
                <h4 className="text-sm">{`${venue.city}, ${venue.state}`}</h4>
            </div>
            <div className="pl-10 pt-7">
                <p>{venue.description}</p>
            </div>
        </div>
    )
}