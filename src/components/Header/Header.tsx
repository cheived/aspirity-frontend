import Image from "next/image"
import Menu from "../Menu/Menu"
import Link from "next/link"



const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between py-6 px-4 md:py-4 md:px-0">
            <Link href="/">
                <Image src={"/img/Logo.svg"} width={180} height={40} alt="logo" className="" />
            </Link>

            <div className="flex gap-2 items-center">
                <Menu size={24} />
                <Image className="mx-2" src="/img/burger.svg" width={24} height={24} alt="menu" />
                {/* <Button before="/img/burger.svg" /> */}
            </div>
        </header>
    )
}

export default Header