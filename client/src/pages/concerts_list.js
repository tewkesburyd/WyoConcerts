import JacksonHole2 from './../assets/images/JacksonHole2.jpeg';
import JacksonHole from './../assets/images/JacksonHole.jpeg';
import OysterRidge from './../assets/images/OysterRidge.jpeg';


export default function ConcertList(){
    return(
        <div>
            <div className="grid grid-cols-3">
                <img src={JacksonHole2} alt="Jackson Hole Rendevous" className="h-full w-full"/>
                <img src={OysterRidge} alt="Jackson Hole Rendevous" className="h-full w-full"/>
                <img src={JacksonHole} alt="Jackson Hole Rendevous" className="h-full w-full"/>
            </div>
            <div className="grid grid-cols-2">
                <div className="w-1/5">
                    <h3>search</h3>
                </div>
                <div className="w-full">
                    <h3>concerts</h3>
                </div>
            </div>
        </div>
    )
}