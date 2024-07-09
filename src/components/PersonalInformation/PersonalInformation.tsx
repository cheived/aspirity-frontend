import Input from "../Input/Input";


export default function PersonalInformation({ className }) {
    return (
        <section className={"bg-bg-secondary rounded-xl p-[30px]" + " " + className}>
            <div className="mb-8 flex justify-between">
                <p className="text-text-primary text-h5">Персональная информация</p>
                <button className="text-subtitle2 text-icons-tertiary">Изменить</button>
            </div>
            <div className="grid gap-6 grid-cols-2 grid-rows-5">
                <Input className="" label="Имя" />
                <Input className="" label="Фамилия" />
                <Input className="col-span-2" label="Отчество" />
                <Input className="" label="Дата рождения" />
                <Input className="" label="Дата трудоустройства" />
                <Input className="" label="Страна" />
                <Input className="" label="Город" />
                <Input className="" label="Должность" />
                <Input className="" label="Электронная почта" />
            </div>
        </section>
    )
}