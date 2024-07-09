

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Data {
    title: string,
    count: number,
    childrens?: string[],
    href: string
}

interface Props {
    data: Data[],
    tw?: string
}

const Tab: React.FC<Props> = ({ data, tw }) => {

    const [active, setActive] = useState<string>("/");

    return (
        <nav className="flex justify-center md:justify-start">
            {data ? data.map((item: Data, i: number) => {
                let classList = "px-4 py-2.5 text-button flex gap-2 items-center text-center text-button uppercase relative"
                if (active == item.href) {
                    classList += " text-text-primary"
                } else {
                    classList += " text-text-secondary"
                }
                return (
                    <Link key={i} className={classList} href={item.href} onClick={() => setActive(item.href)}>
                        {item.title}
                        {item.count ? <div className="px-2 py-0.5 rounded-3xl bg-bg-accent/50" >{item.count}</div> : null}
                        {item.childrens?.length ? <button className="flex items-center"><Image src="/img/chevron-down.svg" alt="chevron-down" className="h-4" width={16} height={16} /></button> : null}
                        {active == item.href ? <div className="absolute w-full bg-border-accent bottom-0 left-0 h-[2px]"></div> : null}
                    </Link>
                )
            }) : null}
        </nav>
    )
}
export default Tab