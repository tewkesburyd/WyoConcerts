export default function ConcertCard({ concert }) {
    return (
        <div className="box-border md:h-32 md:w-32 border-4">
        <p>{concert.name}</p>
    </div>
    )
}