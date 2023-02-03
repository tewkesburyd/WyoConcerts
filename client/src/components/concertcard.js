export default function ConcertCard({ concert }) {
    return (
        <div className="relative box-border md:h-32 md:w-32 border-4 ">
            <a href={`/concerts/${concert.id}`}  className="grid justify-items-stretch">
                <p className="justify-self-center text-center">{concert.name}</p>
                <p className="absolute bottom-2 justify-self-center">{concert.date}</p>
            </a>
        </div>
    )
}