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

    const validation = {
        textField: {
            required: "Это поле обязательно"
        },
        email:
        {
            pattern: {
                value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                message: "Невалидный адрес"
            },
            required: "Это поле обязательно"
        }

    }


    const { handleSubmit, control, formState: { errors, isValid } } = useForm({
        defaultValues: user,
        mode: "onChange"
    });

    function handleButtonSave() {
        handleSubmit(data => console.log(data))
        setModalVisible(false)
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

                    <Controller
                        name={"firstName"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Имя"} userSelect={false} />}
                    />
                    <Controller
                        name={"lastName"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Фамилия"} userSelect={false} />}
                    />
                    <Controller
                        name={"fatherName"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Отчество"} userSelect={false} tw="md:col-span-2" />}
                    />
                    <Controller
                        name={"birthday"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Дата рождения"} userSelect={false} />}
                    />
                    <Controller
                        name={"employeeDate"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Дата трудоустройства"} userSelect={false} />}
                    />
                    <Controller
                        name={"country"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Страна"} userSelect={false} />}
                    />
                    <Controller
                        name={"city"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Город"} userSelect={false} />}
                    />
                    <Controller
                        name={"position"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Должность"} userSelect={false} />}
                    />
                    <Controller
                        name={"email"}
                        control={control}
                        render={({ field }) => <Input field={{ ...field }} label={"Электронная почта"} userSelect={false} />}
                    />



                </div>
            </form>


            <Modal title="Персональная информация" visible={modalVisible} setVisible={setModalVisible}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 md:grid-cols-2 pb-10">
                        {/* {console.log(errors.firstName?.message)} */}
                        <Controller
                            rules={validation.textField}
                            name={"firstName"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.firstName?.message} label={"Имя"} />}
                        />
                        <Controller
                            rules={validation.textField}
                            name={"lastName"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.lastName?.message} label={"Фамилия"} />}
                        />
                        <Controller
                            rules={validation.textField}
                            name={"fatherName"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.fatherName?.message} label={"Отчество"} tw="md:col-span-2" />}
                        />
                        <Controller
                            rules={validation.textField}
                            name={"birthday"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.birthday?.message} label={"Дата рождения"} />}
                        />
                        <Controller
                            rules={validation.textField}
                            name={"employeeDate"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.employeeDate?.message} label={"Дата трудоустройства"} />}
                        />
                        <Controller
                            rules={validation.textField}
                            name={"country"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.country?.message} label={"Страна"} />}
                        />
                        <Controller
                            rules={validation.textField}
                            name={"city"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.city?.message} label={"Город"} />}
                        />
                        <Controller
                            rules={validation.textField}
                            name={"position"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.position?.message} label={"Position"} />}
                        />
                        <Controller
                            rules={validation.email}
                            name={"email"}
                            control={control}
                            render={({ field }) => <Input field={{ ...field }} error={errors.email?.message} label={"Электронная почта"} />} />
                    </div>
                    <Button onClick={() => handleButtonSave()} disabled={!isValid ? true : false} tw="w-full ">Сохранить</Button>
                </form>
            </Modal>
        </section>
    )
}


export default PersonalInformation