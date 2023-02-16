import location from '../assets/logos/location.png';

export default function ConcertCard({ concert, imgSize }) {
    const date = new Date();

    function getMonthName(monthNumber) {
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'short' });
      }

    return (
        <div className="pb-5 pr-5">
            <a href={`/concerts/${concert?.id}`} className="flex flex-col md:flex-row rounded inline-block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  dark:hover:bg-gray-100">
                <img className="rounded-t-lg object-cover overflow-hidden w-full h-48 md:w-48 md:h-auto md:rounded-none md:rounded-l-lg" src={concert.image} alt={concert?.name} />
                <div className="flex flex-col p-4 leading-normal md:w-full">
                    <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{concert?.name}</h1>
                    <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">@{concert?.venue.name}</h3>
                    <div className="max-w-max flex">
                        <img src={location} alt='location' className="float-left h-4 mt-1 pr-2"/>
                        <p className="max-w-max">{concert?.venue.city} {concert?.venue.state}</p>
                    </div>
                </div>
                <div className="w-40 border border-1 grid grid-cols-1 float-right place-items-center bg-[#013662] md:rounded-none md:rounded-r-lg text-white">
                    <div className="self-end">
                        {getMonthName(concert?.date.slice(0,2))},
                    </div>
                    <div className="">
                        {concert?.date.slice(2,4)}
                    </div>
                    <div className="self-start">
                        {concert?.date.slice(4,8)}
                    </div>
                </div>
            </a>
        </div>
    )
}