"use client"
import { useState } from "react";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";


interface Props {
    tw: string
}

const PersonalInformation: React.FC<Props> = ({ tw }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const user = {
        firstName: "Юрий",
        lastName: "Герыш",
        fatherName: "Андреевич",
        birthday: "01.01.0001",
        employeeDate: "01.01.0002",
        country: "Россия",
        city: "Красноярск",
        position: "UI/UX designer",
        email: "test@gmail.com"
    }

    const labels = [
        "Имя",
        "Фамилия",
        "Отчество",
        "Дата рожения",
        "Дата трудоустройства",
        "Страна",
        "Город",
        "Position",
        "Электронная почта"
    ]

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: user
    });

    function handleButtonSave() {
        handleSubmit(data => console.log(data))
    }

    interface IFormInput {
        firstName: string;
        lastName: string;
        iceCreamType: { label: string; value: string };
    }
    const onSubmit = (data: object) => {
        console.log(data)
    };

    return (
        <section className={"bg-bg-secondary rounded-xl px-4 py-[30px] sm:p-[30px] " + " " + tw}>
            <div className="mb-8 flex justify-between">
                <p className="text-text-primary text-title3 sm:text-h5">Персональная информация</p>
                <button className="text-subtitle2 text-icons-tertiary" onClick={() => setModalVisible(true)}>Изменить</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 md:grid-cols-2 ">
                    {Object.keys(user).map((item, i) => {

                        return (
                            <Controller
                                defaultValue={user[item].label}
                                key={i}
                                name={item}
                                control={control}
                                render={({ field }) => <Input field={{ ...field }} label={labels[i]} userSelect={false} tw={i === 2 ? "md:col-span-2" : null} />}
                            />
                        )
                    })}

                </div>
            </form>


            <Modal title="Персональная информация" visible={modalVisible} setVisible={setModalVisible}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 md:grid-cols-2 pb-10">
                        {Object.keys(user).map((item, i) => {
                            return (
                                <Controller
                                    key={i}
                                    name={item}
                                    control={control}
                                    render={({ field }) => <Input field={{ ...field }} label={labels[i]} tw={i === 2 ? "md:col-span-2" : null} />}
                                />
                            )
                        })}
                    </div>
                    <Button onClick={() => handleButtonSave()} tw="bg-bg-accent w-full">Сохранить</Button>
                </form>
            </Modal>
        </section>
    )
}


export default PersonalInformation