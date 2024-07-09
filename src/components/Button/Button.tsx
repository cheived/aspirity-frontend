import Image from "next/image";


export default function Button({ before, after, color, children, className }:
    { before?: string, after?: string, color?: string, children?: string, className?: string }) {
    return (
        <button className={"flex gap-2 items-center justify-center rounded text-text-primary text-button uppercase py-2.5 px-4" + " " + color + " " + className}>
            {before ? <> <Image src={before} width={24} height={24} alt={before} /> {children} </> : null}
            {after ? <>{children} <Image src={24} width={24} height={24} alt={after} />  </> : null}
            {!after && !before ? <>{children}</> : null}
        </button>
    )
}