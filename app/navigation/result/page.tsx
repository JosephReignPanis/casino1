"use client";
import Image from "next/image";
import React from "react";

const dataheader = ["경기일시", "종목", "승[홈]", "무", "패[원정]", "점수"];
const datarow = [
  {
    icon: "icon_1",
    desc: "미국 MLS Next 프로",
    date: "03/27",
    time: "11:30",
    event: "",
    win: "티그레스 UANL",
    lose: "데포르티보 톨루카",
    winnerscore: "0",
    loserscore: "0",
  },
];
export default function Home() {
  return (
    <>
      <div className="col-span-8 gap-1">
        {" "}
        <p className="nav-btn-primary text-4xl font-black text-center py-2">
          경기결과
        </p>
        <div className="overflow-x-auto max-w-full">
          <div className="min-w-[800px]">
            {" "}
            {/* Set a minimum width here */}
            <table className="w-full bg-neutral-900 table-auto">
              <thead>
                <tr>
                  {dataheader.map((items, i) => (
                    <th key={i} className="text-amber-400 align-middle p-4">
                      {items}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {datarow.map((dataitems, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td colSpan={6} className="p-2 bg-neutral-800">
                        <div className="flex items-center gap-1">
                          <Image
                            src={`/icon_sidebar/${dataitems.icon}.png`}
                            width={20}
                            height={20}
                            alt="test"
                          />
                          <span className="text-sm">{dataitems.desc}</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-2 border-neutral-800 p-4">
                      <td className="p-2 flex flex-row text-center align-middle text-sm gap-2">
                        <p>{dataitems.date}</p>
                        <p>{dataitems.time}</p>
                      </td>
                      <td className="text-center">
                        <div className="flex justify-center items-center">
                          <Image
                            src={`/icon_sidebar/${dataitems.icon}.png`}
                            width={20}
                            height={20}
                            alt="test"
                          />
                        </div>
                      </td>
                      <td className="p-2 text-center align-middle text-sm">
                        {dataitems.win}
                      </td>
                      <td className="p-2 text-center align-middle bg-yellow-400 text-black text-sm">
                        VS
                      </td>
                      <td className="p-2 text-center align-middle text-sm">
                        {dataitems.lose}
                      </td>
                      <td className="p-2 text-center align-middle text-sm">
                        {dataitems.winnerscore}:{dataitems.loserscore}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
