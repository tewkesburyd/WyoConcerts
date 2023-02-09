import user from '../assets/logos/user.png';
import wyomingflag from '../assets/logos/wyomingflag.png';

export default function Navbar(){
    return (
        <span className="">
        <div className="h-30">
            <div className="h-10 bg-[#a41e1f] flex flex-row justify-end">
                <ul className="grid grid-cols-4 gap-2">
                    <li>
                        <a href="/concerts" className="py-2 block text-black hover:text-white">Concerts</a>
                    </li>
                    <li>
                        <a href="/venues" className="py-2 block text-black hover:text-white">Venues</a>
                    </li>
                    <li>
                        <a href="/news" className="py-2 block text-black hover:text-white">News</a>
                    </li>
                    <li>
                        <a href="/dashboard" className="py-2 block ">
                        <img src={user} alt="user" className="h-7" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="h-14 bg-[#f6f6f6] border border-y border-[#dae1e8] grid grid-cols-2 flex justify-center content-center relative">
                <img src={wyomingflag} alt='wyoming flag' className="float-left ml-10 w-16"/>
                <a href="/" className="text-[#013662] text-3xl font-bold font-['Arial', 'Helvetica', 'sans-serif'] absolute justify-self-center self-center">WyoConcerts</a>
            </div>
        </div>
        </span>
    )
}