import Image from "next/image";


export default function Logo(props) {
    return (
        <header {...props}>

            <Image src={"/img/Logo.svg"} width={180} height={40} alt="logo" />
        </header>
    )
}