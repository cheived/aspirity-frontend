"use client"
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import Tab from "../Tab/Tab";

interface Data {
    title: string,
    count: number,
    childrens?: string[]
}

interface Props {
    data: Data[],
    tw: string
}

const CardProfile: React.FC<Props> = ({ data, tw }) => {
    return (
        <section className={"bg-bg-secondary rounded-xl px-10 py-10 pb-5" + " " + tw}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center pb-2 ">
                <Avatar size={160} />
                <div className="flex flex-col items-center md:items-baseline">
                    <p className="md:text-customheadline text-h5 text-text-primary flex">Иванов</p>
                    <p className="md:text-customheadline text-h5 text-text-primary flex">Иван Иванович</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-baseline md:ml-52 mb-6 md:mb-[56px]">
                <p className="text-subtitle1 text-text-primary">UI/UX designer</p>
                <p className="text-subtitle1 text-text-primary">Россия, Красноярск</p>
            </div>
            <Tab data={data} ></Tab>
        </section>
    )
}

export default CardProfile