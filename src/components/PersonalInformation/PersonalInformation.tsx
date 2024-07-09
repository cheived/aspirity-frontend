"use client"
import { useState } from "react";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";


export default function PersonalInformation({ className }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <section className={"bg-bg-secondary rounded-xl p-[30px]" + " " + className}>
            <div className="mb-8 flex justify-between">
                <p className="text-text-primary text-h5">Персональная информация</p>
                <button className="text-subtitle2 text-icons-tertiary" onClick={() => setModalVisible(true)}>Изменить</button>
            </div>
            <div className="grid gap-6 grid-cols-2 grid-rows-5">
                <Input className="" label="Имя" value="Юрий" />
                <Input className="" label="Фамилия" value="Герыш" />
                <Input className="col-span-2" label="Отчество" value="Андреевич" />
                <Input className="" label="Дата рождения" value="06.01.2014" />
                <Input className="" label="Дата трудоустройства" value="15.05.2020" />
                <Input className="" label="Страна" value="Россия" />
                <Input className="" label="Город" value="Красноярск" />
                <Input className="" label="Должность" value="UI/UX designer" />
                <Input className="" label="Электронная почта" value="test@gmail.com" />
            </div>
            <Modal title="Персональная информация" visible={modalVisible} setVisible={setModalVisible}>
                <div className="grid gap-6 grid-cols-2 grid-rows-5 pb-10">
                    <Input className="" label="Имя" value="Юрий" userSelect={false} />
                    <Input className="" label="Фамилия" value="Герыш" />
                    <Input className="col-span-2" label="Отчество" value="Андреевич" />
                    <Input className="" label="Дата рождения" value="06.01.2014" />
                    <Input className="" label="Дата трудоустройства" value="15.05.2020" />
                    <Input className="" label="Страна" value="Россия" />
                    <Input className="" label="Город" value="Красноярск" />
                    <Input className="" label="Должность" value="UI/UX designer" />
                    <Input className="" label="Электронная почта" value="test@gmail.com" />
                </div>
                <Button className="bg-bg-accent w-full">Сохранить</Button>
            </Modal>
        </section>
    )
}