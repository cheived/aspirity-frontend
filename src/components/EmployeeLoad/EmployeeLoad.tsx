"use client"
import Image from "next/image";
import Avatar from "../Avatar/Avatar";
import AvatarGroup from "../AvatarGroup/AvatarGroup";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";


const team = [
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
    { name: "John Smith", position: "Junior UI/UX designer" },
]

interface Props {
    tw: string
}


const EmployeeLoad: React.FC<Props> = ({ tw }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <section className={"bg-bg-secondary px-4 py-[30px] sm:p-[30px] rounded-xl" + " " + tw}>
            <div className="flex justify-between mb-10">
                <p className="text-title3 sm:text-h5 text-text-primary">Загрузка сотрудника</p>
                <p className="text-state-error-focused text-button">100%</p>
            </div>
            <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 gap-y-[25px] mb-10">
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
                    <button onClick={() => setModalVisible(true)}>
                        <AvatarGroup limit={7} team={team} />
                    </button>
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
            <Button onClick={() => setModalVisible(true)} tw="w-full">Посмотреть всю загрузку</Button>
            <Modal title="Команда" visible={modalVisible} setVisible={setModalVisible}>
                <div className="flex flex-col gap-4">
                    {team.map((item, i) => {
                        return (
                            <div key={i} className="flex gap-2">
                                <Avatar size={48} />
                                <div>
                                    <p className="text-subtitle1 text-text-primary">{item.name}</p>
                                    <p className="text-body2 text-text-secondary">{item.position}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </section >
    )
}

export default EmployeeLoad