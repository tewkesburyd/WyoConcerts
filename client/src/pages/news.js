import NewsCard from './../components/news_card'
import RendezvousLineUp from './../assets/images/RendezvousLineUp.jpeg';
import TheFutureBirds from './../assets/images/TheFutureBirds.jpeg';
import CodyFestival from './../assets/images/CodyFestival.jpeg';

export default function News() {

    const text = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"


    return (
        <div className='h-full pt-10 w-5/6 mx-auto grid grid-cols-1 pb-20'>
            <h3 className="justify-self-start text-2xl text-[#43464b] font-bold font-['Georgia','Arial']">News</h3>
            <NewsCard id="section1" img={RendezvousLineUp} title="Jackson Hole Rendezvous" text={text}/>
            <NewsCard id="section2" img={TheFutureBirds} title="Show in Lander" text={text}/>
            <NewsCard id="section3" className="mb-20" img={CodyFestival} title="Songwriter Festival" text={text}/>
        </div>
    )
}