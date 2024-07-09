import Image from "next/image";


interface Props {
    size: number,
    tw?: string
}

const Avatar: React.FC<Props> = ({ size, tw }) => {
    return (
        <Image className={`h-[${size}px] outline outline-2 outline-bg-secondary outline rounded-full ${tw}`} src="/img/avatar.png" alt="avatar" width={size} height={size} />
    )
}


export default Avatar