import Image from "next/image";


export default function Input({ search = false, clear = false, select = false, label, placeholder, className }:
    { search?: boolean, clear?: boolean, select?: boolean, label?: string, placeholder?: string, className?: string }) {
    return (
        <div className={"border-border-primary border-[1px] px-3.5 py-2 flex gap-1 rounded relative" + " " + className}>
            {search ? <Image src="/img/search.svg" alt="search" width={24} height={24} /> : null}
            <input placeholder={placeholder} className="outline-0 color text-subtitle2 text-text-primary bg-[#ffffff00] w-full" />
            {label ? <p className="text-text-secondary text-caption absolute -top-2 left-3 ">{label}</p> : null}
            {clear || select ? <div className="flex">
                {clear ? <Image src="/img/exit.svg" alt="search" width={24} height={24} /> : null}
                {select ? <Image src="/img/chevron-down.svg" alt="search" width={24} height={24} /> : null}
            </div> : null}
        </div>

    )
}