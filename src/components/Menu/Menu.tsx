import Image from "next/image";
import Avatar from "../Avatar/Avatar";


export default function Menu({ sizes }: { sizes: number }) {
    return (
        <div className="flex rounded-[18px] px-4 py-1.5 border-[1px] border-border-primary text-text-primary items-center h-9"><Avatar size={24} /><Image className="h-6" src="/img/chevron-down.svg" alt="chevron-down" width={sizes} height={sizes} /></div >
    )
}