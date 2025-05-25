"use client";

import { useState } from "react";
import React from "react";

export default function Home() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const data = [
    {
      status: "읽음",
      title: " 인플레이 정상화 안내",
      date: "05/04",
      message: `
                  다가오는 야구 시즌 관련 경기 마감 규정 안내차 쪽지 보내드립니다...

                        messsage here

many enter
many enter
many enter
many enter
many enter

many enter
`,
      link: "평생남대문.com",
    },
    {
      status: "읽음",
      title: "NCvsKIA 홈원정 오류",
      date: "02/06",
      message: "이번 주 축구 경기 일정이 변경되었습니다.",
      link: "sportsupdate.com",
    },
  ];

  return (
    <div className="p-4 w-full">
      <p className="text-2xl md:text-4xl font-black text-center py-4 text-yellow-300">
        쪽지함
      </p>

      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-neutral-900 table-fixed text-sm md:text-base">
          <thead>
            <tr className="border-b border-neutral-800">
              <th className="text-yellow-300 text-center p-2 w-1/6">일시</th>
              <th className="text-yellow-300 text-center p-2 w-1/2">제목</th>
              <th className="text-yellow-300 text-center p-2 w-1/6">작성일</th>
              <th className="text-yellow-300 text-center p-2 w-1/6">삭제</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr
                  className="text-white border-b border-neutral-800 hover:bg-neutral-800 cursor-pointer text-center"
                  onClick={() => toggleRow(index)}
                >
                  <td className="py-2">
                    <span className="inline-block p-1 md:p-2 bg-zinc-700 rounded-full text-xs md:text-sm">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2">{item.title}</td>
                  <td className="py-2">{item.date}</td>
                  <td className="py-2">
                    <i className="fa-solid fa-xmark" />
                  </td>
                </tr>

                {expandedRow === index && (
                  <tr>
                    <td
                      colSpan={4}
                      className="bg-zinc-950 text-white text-left p-4"
                    >
                      <p className="pb-2 text-sm md:text-base">
                        안녕하세요 남대문 운영진입니다.
                      </p>
                      <p className="pb-2 text-xs md:text-sm text-neutral-400">
                        ----------------------------------------------
                      </p>
                      <p className="whitespace-pre-line pb-4 text-sm md:text-base">
                        {item.message}
                      </p>
                      <p className="text-yellow-400 text-sm md:text-base">
                        평생 주소 : {item.link}
                      </p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button Group */}
      <div className="flex flex-col sm:flex-row w-full justify-center mt-6 gap-4">
        <button className="border border-yellow-400 text-yellow-400 px-6 py-2 hover:text-black hover:bg-yellow-400 transition-colors duration-200">
          입금신청하기
        </button>
        <button className="bg-zinc-800 text-white px-6 py-2 hover:bg-zinc-700 transition-colors duration-200">
          출금신청하기
        </button>
      </div>
    </div>
  );
}
