export default function NewsCard({text, img, title}){
    return (
        <div className="h-100  mb-10">
            <div className="shadow-lg">
                <div className="rounded ">
                    <img className="float-left h-64 w-48 md:h-auto rounded pr-4" alt={title}src={img} />
                    <p className="mb-2 pl-5 text-xl text-[#43464b] font-bold font-['Georgia','Arial']">{title}</p>
                    <p className="md:text-left text-m overflow-contain p-1">
                    {text}
                    </p>
                </div>
                {/* <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                    <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Visit now</button>
                </div> */}
            </div>
        </div>
    )
}