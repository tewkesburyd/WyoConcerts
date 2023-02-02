
// need to add an about and contact
export default function Footer() {
    return (
        <span>
        <div className="absolute bottom-0 right-0 w-full">
            <div className="h-20 bg-[#404040] flex flex-row justify-center">
                <ul className="grid grid-cols-5 px-2 justify-center content-center">
                    <li>
                        <a href="/news" className="block py-2 w-20 text-white hover:bg-blue-100">About</a>
                    </li>
                    <li>
                        <a href="/concerts" className="block py-2 w-20 text-white hover:bg-blue-100 justify-self-center">Concerts</a>
                    </li>
                    <li>
                        <a href="/venues" className="block py-2 w-20 text-white hover:bg-blue-100 justify-self-center">Venues</a>
                    </li>
                    <li>
                        <a href="/news" className="block py-2 w-20 text-white hover:bg-blue-100 justify-self-center">News</a>
                    </li>
                    <li>
                        <button href="/" className="block py-2 w-20 text-white hover:bg-blue-100 justify-self-center">Contact</button>
                    </li>
                </ul>
            </div>
        </div>
        </span>
    )
}