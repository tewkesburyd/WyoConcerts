
// need to add an about and contact
export default function Footer() {
    return (
        <span className="">
        <div className="right-0 w-full">
            <div className="h-10 bg-[#404040] flex justify-center  ">
                <ul className="flex justify-center space-x-10">
                    <li>
                        <a href="/news" className="block py-2 text-white hover:bg-blue-100">About</a>
                    </li>
                    <li>
                        <a href="/concerts" className="block py-2 text-white hover:bg-blue-100 ">Concerts</a>
                    </li>
                    <li>
                        <a href="/venues" className="block py-2 text-white hover:bg-blue-100 ">Venues</a>
                    </li>
                    <li>
                        <a href="/news" className="block py-2 text-white hover:bg-blue-100 ">News</a>
                    </li>
                    <li>
                        <button href="/" className="block py-2 text-white hover:bg-blue-100">Contact</button>
                    </li>
                </ul>
            </div>
        </div>
        </span>
    )
}