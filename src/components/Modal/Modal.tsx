"use client"
import Image from "next/image";




export default function Modal({ children, title, visible = false, setVisible }) {
    let classList = "bg-bg-modal absolute w-[650px] p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl"
    if (!visible) {
        classList += " hidden"
    }

    return (
        <div className={classList} >
            <div className=" flex justify-between pb-10">
                <p className="text-h4 text-text-primary">{title}</p>
                <button onClick={() => setVisible(false)}>
                    <Image src="/img/exit.svg" width={24} height={24} alt="exit.svg"></Image>
                </button>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}