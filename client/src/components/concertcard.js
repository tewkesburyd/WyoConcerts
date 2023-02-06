export default function ConcertCard({ concert, imgSize }) {
    return (
        <div className="grid justify-items-center">
            <a href={`/concerts/${concert?.id}`}  className="grid justify-items-center">
                <img className={imgSize} src={concert?.image} alt={concert?.name} />
                <p className="justify-self-center">{concert?.name}</p>
                <p className="relative bottom-2 justify-self-center">{concert?.date}</p>
            </a>
        </div>
    )
}