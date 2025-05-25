"use client";
import { useState } from "react";

const instructions = [
  "기간동안 (충전금액 - 환전금액 - 보유금액) * 지급비율(5%).",
  "최대 지급 금액: 1,000,000원.",
  "(충전금액 - 환전금액 - 보유금액)이 300,000원 이상이면 지급 대상입니다.",
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const options = [
    { id: 1, label: "★신규가입첫충전★", badge: "고객센터 문의시 수동지급" },
    {
      id: 2,
      label: " 포인트 미지급 ",
      badge: "모든 게임 롤링100% (미니게임, 카지노 최소 배팅 5회)%",
    },
    {
      id: 3,
      label: " 포인트 5% ",
      badge: "스포츠 단폴, 두폴더 (인플레이, 실시간포함)",
    },
    {
      id: 4,
      label: " 포인트 15%  ",
      badge: "스포츠 단폴, 두폴더 (인플레이, 실시간포함)",
    },
    {
      id: 5,
      label: " 포인트 3%  ",
      badge: "카지노 롤링 300% (최소 배팅 5회)",
    },
    {
      id: 6,
      label: " 포인트 10%   ",
      badge: "미니게임, 홀덤 롤링 300% (최소 배팅 5회)",
    },
    {
      id: 7,
      label: "  포인트 20%   ",
      badge: "슬롯전용 롤링 300%  (환전있을 경우 매충전 15%)",
    },
  ];

  return (
    <>
      {" "}
      <p className="nav-btn-primary text-4xl font-black text-center py-2">
        개인정산 (페이백)
      </p>{" "}
      <h2 className="bg-zinc-800 p-2 text-left ">충전방법</h2>
      <div className="bg-zinc-900/80 p-2 rounded-b-lg text-white w-full ">
        <div className="space-y-3 mt-2">
          {instructions.map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <p className="text-sm leading-tight">{text}</p>
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="bg-zinc-800 p-2 text-left mt-2">페이백 정산</div>{" "}
      <div className="bg-zinc-900/80 p-2 text-white rounded-b-lg w-full">
        <div className="flex flex-row border-b border-neutral-800 py-2">
          <p className="w-32">지급 예정 금액</p>
          <p className="">0 원</p>
        </div>{" "}
        <div className="flex flex-row border-b border-neutral-800 py-2">
          <p className="w-32">기간 총 충전금액</p>
          <p className="">0 원</p>
        </div>{" "}
        <div className="flex flex-row border-b border-neutral-800 py-2">
          <p className="w-32">기간 총 환전금액</p>
          <p className="">0 원</p>
        </div>{" "}
        <div className="flex flex-row border-neutral-800 py-2">
          <p className="w-32">보유머니</p>
          <p className="">0 원</p>
        </div>
      </div>
    </>
  );
}
