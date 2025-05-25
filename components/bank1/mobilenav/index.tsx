"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import LeftContent from "@/components/bank1/leftcontent";
import RightContent from "@/components/bank1/rightcontent";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRouter } from "next/navigation";

export default function MobileNav() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const router = useRouter(); // Next.js router to handle navigation

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
          </div>
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
