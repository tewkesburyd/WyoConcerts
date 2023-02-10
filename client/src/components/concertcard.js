import location from '../assets/logos/location.png';

export default function ConcertCard({ concert, imgSize }) {

    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', { month: 'short' });
      }

    return (
            <a href={`/concerts/${concert?.id}`}  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100  dark:hover:bg-gray-100 relative">
                <img className="object-cover w-full h-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src="https://res.cloudinary.com/dhh19fozh/q_auto:good,f_auto,dpr_1.0/w_auto:breakpoints_85_850_10_10/jb7production-uploads/2015/06/andy-frasco-un-press-crop-1200x675.jpg" alt={concert?.name} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{concert?.name}</h1>
                    <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">@{concert?.venue.name}</h3>
                    <div className="max-w-max flex">
                        <img src={location} alt='location' className="float-left h-4 mt-1 pr-2"/>
                        <p className="max-w-max">{concert?.venue.city} {concert?.venue.state}</p>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 w-20 border border-1 grid grid-cols-1 h-full float-right place-items-center bg-[#013662] md:rounded-none md:rounded-r-lg text-white">
                    <div className="self-end">
                        {getMonthName(concert?.date.slice(4,6))},
                    </div>
                    <div className="">
                        {concert?.date.slice(6,8)}
                    </div>
                    <div className="self-start">
                        {concert?.date.slice(0,4)}
                    </div>
                </div>
            </a>
    )
}