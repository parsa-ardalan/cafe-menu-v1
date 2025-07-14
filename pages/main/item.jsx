import Image from "next/image";
import Link from "next/link";

export default function MenuPart(props) {

    return (

        <Link href={`/items/${props.address}`} className="col-span-6 rounded-2xl backdrop-blur-2xl backdrop-brightness-45 h-full cursor-pointer hover:scale-105 transition-transform duration-200 block">

            <div>

                <Image src={props?.image} className="mx-auto -mt-8" alt={props?.name} width={80} height={80} />

                <h1 className="text-center text-lg w-full mt-2 text-white"> {props.name} </h1>
                <p className="text-stone-500 text-center text-xs mb-4 md:text-sm"> click to see more </p>
            </div>

        </Link>
    )
}
