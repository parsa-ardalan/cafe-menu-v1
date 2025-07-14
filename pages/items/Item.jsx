import Image from "next/image";

export default function Item(props) {

    return (

        <div className="grid grid-cols-10 col-span-12 md:col-span-4 rounded-md shadow-black shadow-md bg-black/25">

            {/* item photo */}

            <div className="col-span-5 md:col-span-10">
                <Image width={120} height={120} alt="item" src={props?.image} className="h-36 w-36 rounded-3xl mx-auto py-2 ml-1 md:mx-auto md:mt-10" />
            </div>

            <div className="col-span-5 md:col-span-10">

                {/* item name */}

                <h1 className="text-left text-white ml-4 text-lg mt-10 text-md md:mt-5 md:text-center md:text-2xl font-serif shadow-black md:-ml-0" style={{ fontFamily: "Cambria Math" }}> {props?.name} </h1>

                <div className="grid grid-cols-10 w-full h-1/5  mt-4 rounded-b-md">

                    {/* price */}
                    <div className="col-span-10 md:col-span-5 flex">
                        <span className="text-white ml-5 md:ml-10 text-lg mt-1 md:mt-3 md:text-xl" style={{ fontFamily: "Cambria Math" }}> {props?.price + "$"} </span>
                    </div>

                    <div className=" col-span-10 md:col-span-5" dir="rtl">

                        {/* add to cart button */}

                        <button className="h-10 w-10 rounded-full mr-5 md:mr-5 md:mt-2">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                className="text-white size-8">

                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}