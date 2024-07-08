import Image from "next/image";
import Avatar from "../Avatar/Avatar";


export default function EmployeeLoad() {
    return (
        <section className="bg-bg-secondary p-[30px] rounded-xl ">
            <div className="flex justify-between mb-10">
                <p className="text-h5 text-text-primary">Загрузка сотрудика</p>
                <p className="text-state-error-focused text-button">100%</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-y-10">
                <div className="col-span-">
                    <p className="text-text-tertiary text-subtitle1 mb-2">Название проекта</p>
                    <p className="text-text-primary text-subtitle1">MedPoint 24</p>
                </div>
                <div className="col-span-">
                    <p className="text-text-tertiary text-subtitle1 mb-2">Тип проекта</p>
                    <p className="text-text-primary text-subtitle1">Коммерческий</p>
                </div>
                <div className="col-span-">
                    <p className="text-text-tertiary text-subtitle1 mb-2">Ответсвенный</p>
                    <div className="flex gap-2 items-center">
                        <Avatar size={48} />
                        <p className="text-text-primary text-subtitle1">Анна Кузнецова</p>
                    </div>
                </div>
                <div className="col-span-">
                    <p className="text-text-tertiary text-subtitle1 mb-2">Команда</p>
                    <p className="text-text-primary text-subtitle1">MedPoint 24</p>
                </div>
                <div className="col-span-2">
                    <p className="text-text-tertiary text-subtitle1 mb-2">Сроки работы</p>
                    <div className="flex gap-2">
                        <p className="text-text-secondary text-subtitle1">03 марта 2023</p>
                        <Image src="/img/arrow-right.svg" width={24} height={24} alt="arrow-right" />
                        <p className="text-text-secondary text-subtitle1">23 марта 2023</p>
                    </div>
                </div>
            </div>
        </section>
    )
}