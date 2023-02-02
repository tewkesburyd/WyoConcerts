import user from '../assets/logos/user.png';

export default function Navbar(){
    return (
        <div className="w-full h-30">
            <div className="h-10 bg-[#FFC425] flex flex-row justify-end">
                <ul className="grid grid-cols-4">
                    <li>
                        <a href="/concerts" className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100">Concerts</a>
                    </li>
                    <li>
                        <a href="/venues" className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100">Venues</a>
                    </li>
                    <li>
                        <a href="/news" className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100">News</a>
                    </li>
                    <li>
                        <a href="/login" className="block py-2 pl-3 pr-4 text-black hover:bg-blue-100">
                        <img src={user} alt="user" className="h-7" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="h-20 bg-[#492F24] grid grid-cols-1 flex justify-center content-center">
                <a href="/" className="text-[#FFC425] text-5xl justify-self-center">WyoConcerts</a>
            </div>
        </div>
    )
}