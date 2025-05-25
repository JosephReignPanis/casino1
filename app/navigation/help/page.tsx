"use client";

import { title } from "process";

export default function   Home() {
  const datarow = [
    {
      name: "아이디",
      title: "제목",
      situation: "Lorem ipsum dolor sit amet, ",
    },
  ];
  return ( 
    <>
      <p className="nav-btn-primary text-4xl font-black text-center py-2">
        고객센터
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full bg-neutral-900 table-fixed ">
          <thead>
            <tr>
              <th className="text-yellow-300 text-center align-middle p-2">
                일시
              </th>
              <th className="text-yellow-300 text-center align-middle p-2">
                제목
              </th>
              <th className="text-yellow-300 text-center align-middle p-2">
                상태
              </th>
              <th className="text-yellow-300 text-center align-middle p-2">
                삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {datarow.map((items, i) => (         
              <tr key={i} className="border-b-2 border-neutral-800">
                <td className="p-2 text-center align-middle">{items.name}</td>
                <td className="p-2 text-center align-middle">{items.title}</td>
                <td className="p-2 text-center align-middle">
                  {items.situation}
                </td>
                <td className="p-2 text-center align-middle">
                  <i className="fa-solid fa-xmark" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
