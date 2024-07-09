import Image from "next/image";


export default function Avatar({ size, className }: { size?: number, className?: string }) {
    return (
        <Image className={`h-[${size}px] outline outline-2 outline-bg-secondary outline rounded-full ${className}`} src="/img/avatar.png" alt="avatar" width={size} height={size} />
    )
}