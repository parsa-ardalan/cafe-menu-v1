import { useRouter } from "next/router";

import cakeData from "@/data/cake.json";
import coffeeData from "@/data/coffee.json";
import juiceData from "@/data/juice.json";
import milkshakeData from "@/data/milkshake.json";

import Item from "./Item"

// function ItemCard({ name, image, price }) {

//     return (

//         <div className="col-span-6 bg-white p-4 rounded-lg">

//             <img src={image} alt={name} className="w-full h-auto rounded" />

//             <h2 className="text-lg mt-2">{name}</h2>

//             <p className="text-gray-700">${price}</p>

//         </div>

//     );
// }

export default function ItemPage() {

    const dataMap = {
        cake: cakeData,
        coffee: coffeeData,
        juice: juiceData,
        milkshake: milkshakeData,
    };

    const router = useRouter();
    const { index } = router.query;

    if (!index) return null;

    const data = dataMap[index];

    if (!data) return <p>no data found</p>;

    return (

        <div className="border border-white mx-auto w-full h-full backdrop-blur-sm backdrop-brightness-85 overflow-y-scroll rounded-lg md:w-4/6 md:h-5/6 md:overflow-hidden md:mt-13">

            <div className="h-auto mt-12 w-5/6 mx-auto text-3xl text-center text-white">
                <h1 style={{ fontFamily: "Cambria Math" }}>{index}</h1>
            </div>

            <div className="grid grid-cols-12 h-4/6 w-5/6 mx-auto gap-5 py-5 mt-8">

                {data.map((item) => (

                    <Item

                        key={item.id}
                        name={item.name}
                        image={item.imgAddress}
                        price={item.price}

                    />
                ))}

            </div>
            
        </div>
    );
}
