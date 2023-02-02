export default function Logout(){

    const handleLogout = () => {
        // console.log('logout')
        fetch('/logout', {
            method: 'DELETE',
        })
        .then((r) => r.json())
    }

    return (
        <div className="flex justify-center content-center pt-10">
                <div className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-[#FFC425] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
                            Log Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}