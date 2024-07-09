import Image from "next/image";

interface Props {
    children: React.ReactNode,
    title: string,
    visible: boolean,
    setVisible: Function,
    tw?: string
}


const Modal: React.FC<Props> = ({ children, title, tw, setVisible, visible = false, }) => {
    let classList = "bg-bg-modal fixed w-full max-w-[650px] p-4 sm:p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:rounded-xl"
    // let classList = "bg-bg-modal fixed inset-0 flex flex-col items-center justify-center  max-w-[650px] sm:rounded-xl"
    if (!visible) {
        classList += " hidden"
    }

    return (
        <div className={classList + " " + tw} >
            <div className=" flex justify-between pb-10">
                <p className="text-title3 sm:text-h4 text-text-primary">{title}</p>
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

export default Modal