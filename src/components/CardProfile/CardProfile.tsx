"use client"
import Avatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import Tab from "../Tab/Tab";


export default function CardProfile({ data, className }) {
    return (
        <section className={"bg-bg-secondary rounded-xl px-10 py-10 pb-5" + " " + className}>
            <div className="flex gap-12  items-center pb-2 ">
                <Avatar size={160} />
                <div>
                    <p className="text-customheadline text-text-primary">Иванов</p>
                    <p className="text-customheadline text-text-primary">Иван Иванович</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 ml-52 mb-[56px]">
                <p className="text-subtitle1 text-text-primary">UI/UX designer</p>
                <p className="text-subtitle1 text-text-primary">Россия, Красноярск</p>
            </div>
            {/* <Input placeholder="Placeholder" search={true} clear={true} select={true}></Input> */}
            <Tab data={data}></Tab>
        </section>
    )
}