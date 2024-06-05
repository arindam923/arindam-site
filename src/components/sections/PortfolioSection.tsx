import Image from "next/image"



const PortfolioSection = () => {
    return (
        <section className="container mx-auto mt-5">
            <h3 className="uppercase text-sm text-primary font-semibold tracking-wider">our portfolio</h3>
            <p className="text-stone-400 text-sm mt-2 ">Have a look at our last copuple projects . Where Inovation met experienced create somethig really magical</p>



            <div className="grid mt-5  grid-cols-8 grid-rows-2 gap-4">
                <div className="col-span-4 border border-slate-800 cursor-pointer h-[300px] group relative row-span-1 transition-all duration-75 ease-in-out rounded-md p-5" >
                    <Image src={"/pro1.png"} className="rounded-md object-cover group-hover:object-contain" fill alt="project" />
                </div>
                <div className="col-span-2 border border-slate-800 cursor-pointer h-[300px] group relative row-span-1 transition-all duration-75 ease-in-out rounded-md p-5" >
                    <Image src={"/pro2.png"} className="rounded-md object-cover group-hover:object-contain" fill alt="project" />
                </div>
                <div className="col-span-2 border border-slate-800 cursor-pointer h-[300px] group relative row-span-1 transition-all duration-75 ease-in-out rounded-md p-5" >
                    <Image src={"/pro3.png "} className="rounded-md object-cover group-hover:object-contain" fill alt="project" />
                </div>
                <div className="col-span-2 border border-slate-800 cursor-pointer h-[300px] group relative row-span-1 transition-all duration-75 ease-in-out rounded-md p-5" >
                    <Image src={"/pro4.png"} className="rounded-md object-cover group-hover:object-contain" fill alt="project" />
                </div>
                <div className="col-span-2 border border-slate-800 cursor-pointer h-[300px] group relative row-span-1 transition-all duration-75 ease-in-out rounded-md p-5" >
                    <Image src={"/pro5.png"} className="rounded-md object-cover group-hover:object-contain" fill alt="project" />
                </div>
                <div className="col-span-4 border border-slate-800 cursor-pointer h-[300px] group relative row-span-1 transition-all duration-75 ease-in-out rounded-md p-5" >
                    <Image src={"/pro6.png"} className="rounded-md object-cover group-hover:object-contain" fill alt="project" />
                </div>
            </div>

        </section>
    )
}


export default PortfolioSection