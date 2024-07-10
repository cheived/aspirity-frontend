import Image from "next/image";
import { Dispatch } from "react";


interface Props {
    before?: string,
    after?: string,
    color?: string,
    children?: string,
    tw?: string,
    onClick?: any,
    disabled?: boolean,
    transparent?: boolean
}

const Button: React.FC<Props> = ({ before, after, color, children, tw, onClick, disabled, transparent }) => {
    if (disabled) {
        color = "bg-accent-disabled "
    } else if (transparent) {

    } else {
        color = "bg-bg-accent hover:bg-state-blue-hover focus:bg-state-blue-focused " + color
    }
    return (
        <button disabled={disabled} onClick={onClick} className={"flex gap-2 items-center justify-center rounded text-text-primary text-button uppercase py-2.5 px-4  transition " + " " + color + " " + tw}>
            {before ? <> <Image src={before} width={24} height={24} alt={before} /> {children} </> : null}
            {after ? <>{children} <Image src={after} width={24} height={24} alt={after} />  </> : null}
            {!after && !before ? <>{children}</> : null}
        </button>
    )
}

export default Button