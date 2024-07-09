
import Button from "@/components/Button/Button";
import CardProfile from "@/components/CardProfile/CardProfile";
import EmployeeLoad from "@/components/EmployeeLoad/EmployeeLoad";
import Menu from "@/components/Menu/Menu";
import PersonalInformation from "@/components/PersonalInformation/PersonalInformation";
import Image from "next/image";

const tabs = [
  { title: "Основная информация", count: 0, childrens: [] },
  { title: "Отпуск", count: 0, childrens: [] },
]

export default function Home() {
  return (
    <div className="max-w-[1494px] mx-auto pb-6" >
      <header className="flex items-center justify-between py-6 px-4 md:py-4 md:px-0">
        <Image src={"/img/Logo.svg"} width={180} height={40} alt="logo" className="" />
        <div className="flex gap-2 items-center">
          <Menu sizes={24} />
          <Image className="mx-2" src="/img/burger.svg" width={24} height={24} alt="menu" />
          {/* <Button before="/img/burger.svg" /> */}
        </div>
      </header>
      <Button className="my-2 mx-2" color="text-text-tertiary" before="/img/chevron-left.svg">Вернуться к сотрудикам</Button>
      <div className="flex flex-wrap gap-4 ">
        <CardProfile className="w-full" data={tabs} />
        <PersonalInformation className="grow h-fit" />
        <EmployeeLoad className="grow" />
      </div>

    </div>
  );
}
