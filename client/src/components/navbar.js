import user from '../assets/logos/user.png';
import wyomingflag from '../assets/logos/wyomingflag.png';
import twitter from '../assets/logos/twitter.png';
import instagram from '../assets/logos/instagram.png';
import facebook from '../assets/logos/facebook.png';

export default function Navbar(){
    return (
        <span className="bg-white">
        <div className="h-30">
            <div className="flex">
                <div className="h-20 container flex justify-center">
                    <img src={wyomingflag} alt='wyoming flag' className=" w-16 mr-2"/>
                    <a href="/" className=" justify-self-center self-center">
                        <h1 className="text-3xl text-[#43464b] justify-self-center self-center font-bold font-['Georgia','Arial']">
                        WyoConcerts
                        </h1>
                    </a>
                </div>
                <div className="flex pr-5 self-center gap-2">
                    <h3 className="pt-1 pr-1">
                        Follow
                    </h3>
                    <img src={twitter} alt="twitter" className=" w-8 mr-2"></img>
                    <img src={facebook} alt="facebook" className=" w-8 mr-2"></img>
                    <img src={instagram} alt="instagram" className=" w-8 mr-2"></img>
                </div>
            </div>
            <div className="h-12 bg-[#fe902d] flex flex-row justify-end pr-20">
                <ul className="grid gap-x-7 grid-cols-4 ">
                    <li>
                        <a href="/concerts" className="py-3 self-center block text-white hover:text-black">Concerts</a>
                    </li>
                    <li>
                        <a href="/venues" className="py-3 block text-white hover:text-black">Venues</a>
                    </li>
                    <li>
                        <a href="/news" className="py-3 block text-white hover:text-black">News</a>
                    </li>
                    <li>
                        <a href="/dashboard" className="py-3 block ">
                        <img src={user} alt="user" className="h-7" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </span>
    )
}