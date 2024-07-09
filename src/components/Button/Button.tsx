import Image from "next/image";
import { Dispatch } from "react";


interface Props {
    before?: string,
    after?: string,
    color?: string,
    children?: string,
    tw?: string,
    onClick?: Dispatch<>
}

const Button: React.FC<Props> = ({ before, after, color, children, tw, onClick }) => {
    return (
        <button onClick={onClick} className={"flex gap-2 items-center justify-center rounded text-text-primary text-button uppercase py-2.5 px-4 hover:bg-state-blue-hover focus:bg-state-blue-focused transition  " + " " + color + " " + tw}>
            {before ? <> <Image src={before} width={24} height={24} alt={before} /> {children} </> : null}
            {after ? <>{children} <Image src={after} width={24} height={24} alt={after} />  </> : null}
            {!after && !before ? <>{children}</> : null}
        </button>
    )
}

export default Button