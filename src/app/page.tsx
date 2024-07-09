
import Button from "@/components/Button/Button";
import CardProfile from "@/components/CardProfile/CardProfile";
import EmployeeLoad from "@/components/EmployeeLoad/EmployeeLoad";
import Header from "@/components/Header/Header";
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
      <Header />
      <Button tw="my-2 mx-2" color="text-text-tertiary" before="/img/chevron-left.svg">Вернуться к сотрудикам</Button>
      <div className="flex flex-wrap gap-4 ">
        <CardProfile tw="w-full" data={tabs} />
        <PersonalInformation tw="grow h-fit" />
        <EmployeeLoad tw="grow" />
      </div>

    </div>
  );
}
