

import Image from "next/image";
import { useState } from "react";

interface Data {
    title: string,
    count: number,
    childrens: string[]
}

export default function Tab({ data }: { data: Data }) {

    const [active, setActive] = useState();

    return (
        <nav className="flex">
            {data ? data.map((item, i) => {
                let classList = "px-4 py-2.5 text-button text-text-primary flex gap-2 items-center text-button uppercase"
                if (active == i) {
                    classList += " border-border-accent border-b-2 text-text-primary"
                } else {
                    classList += " text-text-secondary"
                }
                return (
                    <button key={i} className={classList} onClick={() => setActive(i)}>
                        {item.title}
                        {item.count ? <div className="px-2 py-0.5 rounded-3xl bg-bg-accent/50" >{item.count}</div> : null}
                        {item.childrens.length ? <button className="flex items-center"><Image src="/img/chevron-down.svg" alt="chevron-down" className="h-4" width={16} height={16} /></button> : null}
                    </button>
                )
            }) : null}
        </nav>
    )
}