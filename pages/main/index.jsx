import MenuPart from "./item";
import menuData from "@/data/menuData.json"

export default function MainPage() {

    return (

       <div className="flex items-center justify-center h-screen w-screen">

            <div className="py-10 border border-white mx-auto w-5/6 min-h-[60vh] max-h-[90vh] overflow-y-auto backdrop-blur-sm backdrop-brightness-75 rounded-lg md:w-4/6 md:h-auto md:overflow-hidden">

                <div className="h-auto w-5/6 mx-auto text-2xl text-center text-white md:text-3xl"> <h1 style={{ fontFamily: "Cambria Math" }}> Menu </h1> </div>

                <div className="grid grid-cols-12 h-auto w-5/6 mx-auto mt-20 gap-4 gap-y-16 md:px-44 md:gap-x-10">

                    {
                        menuData.map((item) => (

                            <MenuPart key={item?.id} image={item?.imageLink} name={item?.type} address={item?.address} />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}