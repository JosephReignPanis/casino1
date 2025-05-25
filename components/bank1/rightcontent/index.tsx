"use client";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function RightContent() {
  // const searchParams = useSearchParams();
  // const username = searchParams.get("username");
  // const level = searchParams.get("level");

  const userAssets = [
    { icon: "fa-won-sign", label: "바르셀로나", value: 0, unit: "원" },
    { icon: "fa-product-hunt", label: "포인트", value: 0, unit: "원" },
    { icon: "fa-ticket-simple", label: "쿠폰", value: 0, unit: "원" },
    { icon: "fa-envelope", label: "쪽지", value: 0, unit: "원" },
  ];

  const navbtn = [
    { href: "/navigation/charge", label: "충전" },
    { href: "/navigation/exchange", label: "환전" },
    { href: "/navigation/attendance", label: "출석체크" },
    { href: "/navigation/mypage", label: "프로필정보" },
  ];

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

  const banners = [
    "/banner-side-1.png",
    "/banner-side-2.png",
    "/banner-side-3.png",
  ];

  return (
    <>
      {/* {" "}
      <div>
        <p>Username: {username}</p>
        <p>Level: {level}</p>
      </div> */}
      <div>
        <div className="bg-zinc-900/90 rounded-lg">
          <div className="flex flex-row justify-between p-2 rounded-t-lg navgradient items-center">
            <div className="flex flex-row gap-2 items-center">
              <i className="fa-solid fa-user" />
              <p>건바리님</p>
              <p>level 1</p>
            </div>
            <i className="fa-solid fa-right-from-bracket" />
          </div>

          <div className="rounded-lg flex flex-col p-3 gap-2">
            {userAssets.map((item, index) => (
              <div className="flex flex-row justify-between" key={index}>
                <div className="flex flex-row items-center gap-2">
                  <i className={`fa-solid ${item.icon}`} />
                  <p>{item.label}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p>{item.value}</p>
                  <p>{item.unit}</p>
                  {index < 2 && (
                    <p className="text-sm bg-amber-300 text-black px-3 rounded-sm">
                      {item.unit}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
              {navbtn.map((item, i) => (
                <Link href={item.href} key={i} className="w-full sm:w-auto">
                  <button className="btn-gold-nav-gradient rounded-sm py-2 text-sm w-full whitespace-nowrap">
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
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

        {/* Optional: Use if you want to bring back banners */}
        {/* <div className="flex flex-col gap-2 mt-2">
          {banners.map((src, i) => (
            <Image key={i} src={src} width={400} height={150} alt={`banner-${i}`} />
          ))}
        </div> */}
      </div>
    </>
  );
}
