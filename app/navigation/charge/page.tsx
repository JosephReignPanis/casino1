"use client";
import { useState } from "react";

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
  const instructions = [
    "선입금 후 충전신청 해주시기 바랍니다.",
    "충전 목적에 따라 보너스% 직접 선택하셔서 신청 가능합니다.",
    "만원이상 천원단위까지 충전가능합니다.",
    "입금전 반드시 계좌문의 후 입금부탁드리며, 전계좌로 입금하시는 경우에는 입금확인 불가하여 처리가 어려우니 꼭 유의하시고 이용바랍니다.",
    "등록된 계좌외 다른계좌로 이름만 바꿔서 입금하시는 경우에는 처리 불가합니다.",
    "수표 입금시 절대 충전불가/환전 불가합니다.",
    "무통장, ATM 및 CD기 입금은 처리가 불가합니다.",
    "1:1 가상계좌를 이용하시는 회원분들은 1회 입금 300만원까지 입금 가능하며 간편송금 , 타계좌, 기기 입금시 입금되지 않습니다.",
    "첫충전시 당일 환전여부, 보유금액 관계없이 포인트 지급됩니다.",
    "매충전시 환전하셔도 지급되지만, 보유금액 30만원 이상 있으실 경우 포인트 지급되지 않습니다.",
  ];
  const depositData = [
    {
      date: "00/00(일) 00:00",
      amount: "0.55",
      sender: "9.99",
      status: "0.66",
      action: "베팅",
    },
  ];
  return (
    <>
      <div className="col-span-8 pb-5">
        {" "}
        <p className="nav-btn-primary text-4xl font-black text-center py-2">
          입금신청
        </p>
        <div className="bg-zinc-900/80 w-full mb-2">
          <div className="bg-zinc-800 text-left p-2">충전방법</div>
          <div className="p-2">
            {instructions.map((text, index) => (
              <div
                key={index}
                className="flex sm:flex-col md:flex-row p-2 gap-2 rounded-b-md"
              >
                <span className="text-yellow-500 bg-zinc-700 w-6 h-6 text-sm flex items-center justify-center rounded-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="w-full md:w-6/6 text-white">
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-900/80 w-full">
          {" "}
          <div className="bg-zinc-800 text-left text-white p-2 ">충전요청</div>
          <div className="border-b border-zinc-800/50 p-2 px-4 flex flex-col">
            <span className="w-40 text-white">보유머니</span>
            <span className="text-gray-400 text-sm">0원</span>
          </div>
          <div className="border-b border-zinc-800/50 p-2 px-4 flex flex-col">
            <span className="text-white">충전금액</span>
            <p className="text-gray-400 text-sm">
              고객센터에서 알려드린 입금계좌로 이체 후 금액을 입력하고
              [충전요청]을 눌러주세요.
            </p>
            <input
              type="text"
              className="w-full bg-zinc-700 p-2 rounded mt-2 text-white"
            />
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
              {["1만원", "5만원", "10만원", "30만원", "50만원", "100만원"].map(
                (amount, idx) => (
                  <button
                    key={idx}
                    className="py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-sm"
                  >
                    {amount}
                  </button>
                )
              )}
              <button className="py-2 border border-yellow-500 hover:bg-yellow-500 hover:text-black rounded-sm">
                정정
              </button>
            </div>
          </div>
          <div className="p-2 px-4 flex flex-col gap-2">
            <span className="text-white">포인트 지급</span>
            <div className="rounded-lg space-y-2">
              {options.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center justify-between bg-zinc-800 text-gray-300 px-2 py-2 rounded-lg cursor-pointer hover:bg-zinc-700"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="custom-radio"
                      value={option.id}
                      checked={selected === option.id}
                      onChange={() => setSelected(option.id)}
                      className="hidden"
                      aria-label={`선택: ${option.label}`}
                    />
                    <div className="w-5 h-5 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                      {selected === option.id && (
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm">{option.label}</p>
                  </div>
                  <span className="bg-yellow-700 text-yellow-200 text-sm px-2 py-1 rounded">
                    {option.badge}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center p-4 gap-4">
          <button className="border border-yellow-400 text-yellow-400 px-6 hover:text-black hover:bg-yellow-400">
            입금신청하기
          </button>
          <button className="bg-zinc-700 px-6 py-2 hover:bg-zinc-500 ">
            입금신청하기
          </button>
        </div>{" "}
        <h1 className="nav-btn-primary text-2xl text-amber-300 pt-4 pb-2 text-center">
          입금신청
        </h1>
        <div className="flex flex-row gap-4 bg-zinc-900/80 p-2">
          <p className="text-yellow-400">30건 내역만 조회가능합니다</p>
        </div>
        <div className="w-full overflow-x-auto ">
          <table className="min-w-[600px] w-full ">
            <thead className="bg-zinc-800">
              <tr>
                <th className="p-2 align-middle text-center">날짜</th>
                <th className="p-2 text-center">요청금액(원)</th>
                <th className="p-2 text-center">입금자</th>
                <th className="p-2 text-center">상태</th>
                <th className="p-2 text-center">삭제</th>
              </tr>
            </thead>
            <tbody>
              {depositData.map((item, index) => (
                <tr
                  key={index}
                  className="bg-zinc-900/90 text-center hover:bg-zinc-950/50 border-b-2 border-zinc-800/50"
                >
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">{item.amount}</td>
                  <td className="p-2">{item.sender}</td>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
