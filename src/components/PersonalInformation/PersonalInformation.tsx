"use client"
import { useState } from "react";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";


export default function PersonalInformation({ className }) {
    const [modalVisible, setModalVisible] = useState(false);

    const user = {
        firstName: { label: "Имя", value: "Юрий" },
        lastName: { label: "Фамилия", value: "Герыш" },
        fatherName: { label: "Отчество", value: "Андреевич" },
        birthday: { label: "Дата рожения", value: "01.01.0001" },
        employeeDate: { label: "Дата трудоустройства", value: "01.01.0002" },
        country: { label: "Страна", value: "Россия" },
        city: { label: "Город", value: "Красноярск" },
        position: { label: "Position", value: "UI/UX designer" },
        email: { label: "Электронная почта", value: "test@gmail.com" }
    }


    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: user
    });

    interface IFormInput {
        firstName: string;
        lastName: string;
        iceCreamType: { label: string; value: string };
    }
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <section className={"bg-bg-secondary rounded-xl p-[30px]" + " " + className}>
            <div className="mb-8 flex justify-between">
                <p className="text-text-primary text-h5">Персональная информация</p>
                <button className="text-subtitle2 text-icons-tertiary" onClick={() => setModalVisible(true)}>Изменить</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 grid-cols-2 grid-rows-5">
                    {Object.keys(user).map((item, i) => {
                        return (
                            <Controller
                                key={i}
                                name={item}
                                control={control}
                                render={({ field }) => <Input field={{ ...field }} label={user[item].label} userSelect={false} className={i === 2 ? "col-span-2" : null} />}
                            />
                        )
                    })}

                </div>
            </form>


            <Modal title="Персональная информация" visible={modalVisible} setVisible={setModalVisible}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 grid-cols-2 grid-rows-5 pb-10">
                        {Object.keys(user).map((item, i) => {
                            return (
                                <Controller
                                    key={i}
                                    name={item}
                                    control={control}
                                    render={({ field }) => <Input field={{ ...field }} label={user[item].label} className={i === 2 ? "col-span-2" : null} />}
                                />
                            )
                        })}
                    </div>
                    <Button onClick={() => handleSubmit(data => console.log(data))} className="bg-bg-accent w-full">Сохранить</Button>
                </form>
            </Modal>
        </section>
    )
}