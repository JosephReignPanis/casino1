"use client";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIESBUTTONS } from "@/const/routes";
import { PRIMARYBUTTONS } from "@/const/routes";
import Tabs from "../tabs";
import { headerlist } from "@/const/sidebar";
import { useState } from "react";
import LeftContent from "@/components/bank1/leftcontent";
import RightContent from "@/components/bank1/rightcontent";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const betButtons = [
    "1만",
    "5만",
    "10만",
    "30만",
    "50만",
    "100만",
    "전액",
    "정정",
  ];
  const router = useRouter();

  const closeSidebars = () => {
    setIsLeftOpen(false);
    setIsRightOpen(false);
  };

  const handleButtonClick = (path: string) => {
    closeSidebars();

    setTimeout(() => {
      router.push(path);
    }, 300);
  };
  return (
    <>
      <div className="hidden lg:block">
        <nav className="bg-[#171719]/30 flex justify-between text-lg font-bold p-2">
          <div className="flex flex-row items-center gap-2">
            <Link href={"/"}>
              <Image
                src={"/bank_logo.png"}
                width={220}
                height={120}
                alt="webLogo"
                className="pr-4"
              />
            </Link>
          </div>
          <div className="flex flex-row gap-4 items-center">
            {PRIMARYBUTTONS.map(({ label, path }, index) => (
              <Link key={index} href={path} className="nav-btn-primary">
                {label}
              </Link>
            ))}
            <Link href="/logout" className="nav-btn-logout px-4 py-2 text-sm">
              로그아웃
            </Link>
          </div>
        </nav>

        <hr className="hr-gradient" />
        <nav className="navgradient flex justify-center items-center px-3">
          <ul className="flex flex-row ">
            {CATEGORIESBUTTONS.map(({ label, path }, index) => (
              <li
                key={index}
                className="navspec flex items-center  justify-center flex-none"
              >
                <Link
                  href={path}
                  className="nav-btn-secondary text-center text-lg py-2 px-8 font-bold whitespace-nowrap w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="block lg:hidden">
        <nav className="bg-[#171719] flex justify-between p-3 items-center w-full text-white relative z-20">
          <i
            className="fa-solid fa-bars cursor-pointer text-2xl"
            onClick={() => {
              setIsLeftOpen(true);
              setIsRightOpen(false);
            }}
          ></i>

          <Image src="/bank_logo.png" width={120} height={72} alt="webLogo" />

          <i
            className="fa-regular fa-circle-user cursor-pointer text-2xl"
            onClick={() => {
              setIsRightOpen(true);
              setIsLeftOpen(false);
            }}
          ></i>
        </nav>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-zinc-950/90 text-white transform p-2 ${
            isLeftOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg z-30 overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <i
              className="fa-solid fa-xmark cursor-pointer text-2xl"
              onClick={() => setIsLeftOpen(false)}
            ></i>
          </div>
          <div onClick={() => setIsLeftOpen(false)}>
            <LeftContent />
          </div>{" "}
          <div className="flex flex-col my-2 gap-2 p-2 bg-neutral-900">
            <div className="flex flex-row">
              <input
                type="text"
                className="bg-neutral-800 w-full text-xs font-bold p-2"
                id="searchbar"
                placeholder="스포츠 해외형 검색 (국가/리그/팀명)"
              />
              <button className="bg-yellow-800 p-2">
                <Image
                  src={"/search.png"}
                  width={20}
                  height={20}
                  alt="search button"
                />
              </button>{" "}
            </div>
          </div>
          <Tabs headerlist={headerlist} />
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-full bg-zinc-950/90 text-white transform p-2 ${
            isRightOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg z-30 overflow-y-auto`}
        >
          <div className="flex justify-end p-4">
            <i
              className="fa-solid fa-xmark cursor-pointer text-2xl"
              onClick={() => setIsRightOpen(false)}
            ></i>
          </div>
          <div onClick={() => setIsRightOpen(false)}>
            <RightContent />
          </div>
          <div className="flex flex-col bg-zinc-900/90 p-3 gap-2 rounded-sm mt-2">
            <div className="flex flex-row justify-between border-b border-zinc-700">
              <p>배팅카트</p>
              <i className="fa-solid fa-trash-can" />
            </div>
            <div className="flex flex-row justify-between border-b border-zinc-700">
              <p>배팅폴더</p>
              <p className="text-yellow-400">0 개</p>
            </div>
            <div className="flex flex-row justify-between border-b py-2 border-zinc-700">
              <p>배팅금액</p>
              <input type="text" className="bg-white rounded-md text-black" />
            </div>

            <div className="grid grid-cols-4 gap-1">
              {betButtons.map((amount, i) => (
                <button key={i} className="btn-silver-gradient p-2 rounded-sm">
                  {amount}
                </button>
              ))}
            </div>

            <button className="flex btn-golden-gradient justify-center">
              베팅하기
            </button>

            <div className="flex flex-row justify-between border-b border-zinc-700">
              <p>총배당율</p>
              <p className="text-yellow-400">0.00</p>
            </div>
            <div className="flex flex-row justify-between border-b border-zinc-700">
              <p>총배당율</p>
              <p className="text-yellow-400">0.00</p>
            </div>
          </div>
        </div>

        {(isLeftOpen || isRightOpen) && (
          <div
            className="fixed inset-0 bg-zinc-950/80 z-10"
            onClick={closeSidebars}
          ></div>
        )}
      </div>
    </>
  );
}
