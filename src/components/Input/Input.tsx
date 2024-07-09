import Image from "next/image";
import { use } from "react";


export default function Input({ search = false, clear = false, select = false, label, placeholder, className, value, error, userSelect = true }:
    { search?: boolean, clear?: boolean, select?: boolean, label?: string, placeholder?: string, className?: string, value?: string, error?: string, userSelect?: boolean }) {
    let classList = "border-border-primary border-[1px] px-3.5 py-2 flex gap-1 rounded relative"
    if (error) {
        classList += " border-border-error"
    }

    return (
        <>
            <div className={classList + " " + className}>
                {search ? <Image src="/img/search.svg" alt="search" width={24} height={24} /> : null}
                <input defaultValue={value} placeholder={placeholder} className={"outline-0 color text-subtitle2 text-text-secondary bg-[#ffffff00] w-full " + " " + (!userSelect ? "pointer-events-none" : null)} />
                {label ? <p className="text-text-secondary text-caption absolute -top-2 left-3 ">{label}</p> : null}
                {clear || select ? <div className="flex">
                    {clear ? <Image src="/img/exit.svg" alt="search" width={24} height={24} /> : null}
                    {select ? <Image src="/img/chevron-down.svg" alt="search" width={24} height={24} /> : null}
                </div> : null}
                {error ? <div className="text-border-error text-caption absolute left-0 -bottom-5">{error}</div> : null}
            </div>

        </>
    )
}