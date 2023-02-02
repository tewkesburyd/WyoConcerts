import LanderPresents from './../assets/images/LanderPresents.jpeg'
import FrontierDays from './../assets/images/FrontierDays.jpeg'
import LanderBar from './../assets/images/LanderBar.jpeg'


export default function Home() {
    return (
        <div className="">
            <div className="grid grid-cols-3">
                <img src={LanderPresents} alt='Lander Presents' className="h-auto w-full"/>
                <img src={FrontierDays} alt='Fontier Days' className="h-auto w-full"/>
                <img src={LanderBar} alt='Lander Bar' className="h-full w-full"/>
            </div>
            <div className="grid grid-cols-2 p-5 m-5 flex justify-center content-center">
                <div className="min-h-40 w-full p-5 border-2 border-black justify-self-center">
                    <div>
                        <h3>Up Coming Shows</h3>
                    </div>
                </div>
                <div className="min-h-40 w-full p-5 border-2 border-black justify-self-center">
                    <div>
                        <p>Show of the Month</p>
                    </div>
                </div>
            </div>
        </div>
    )
}