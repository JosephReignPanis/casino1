"use client";
import { useState } from "react";
import Image from "next/image";

const sports = [
  { id: "all", name: "하이로우10초", icon: "/icon_token.png" },
  { id: "soccer", name: "하이로우5초", icon: "/icon_token.png" },
];
const data = [["11111111", "222222", "sss"]];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("all");

  const renderContent = () => {
    switch (selectedSport) {
      case "all":
        return (
          <>
            <div className="grid grid-cols-4 w-full sm:overflow-x-auto">
              {/* Left Section */}
              <div className="col-span-3 w-full">
                {/* API Box Placeholder */}
                <div className="bg-neutral-800 h-96">put Api here</div>

                {/* Controls Section */}
                <div className="flex flex-col gap-4 p-4">
                  {/* Inputs & Button Row */}
                  <div className="flex flex-wrap gap-4 justify-between w-full">
                    {/* First Input Group */}
                    <div className="flex flex-row gap-2 items-center flex-1 min-w-[180px]">
                      <p className="text-2xl whitespace-nowrap">보유금</p>
                      <input
                        type="text"
                        className="bg-neutral-500 rounded-sm px-2 py-1 flex-1 min-w-0"
                      />
                    </div>

                    {/* Second Input Group */}
                    <div className="flex flex-row gap-2 items-center flex-1 min-w-[180px]">
                      <p className="text-2xl whitespace-nowrap">보유금</p>
                      <input
                        type="text"
                        className="bg-neutral-500 rounded-sm px-2 py-1 flex-1 min-w-0"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center">
                      <button className="btn-gold-nav-gradient rounded-sm p-2 whitespace-nowrap">
                        정정
                      </button>
                    </div>
                  </div>

                  {/* Quick Amount Buttons */}
                  <div className="flex flex-wrap gap-4 justify-between">
                    {["5천", "1만", "5만", "10만", "50만"].map(
                      (amount, index) => (
                        <button
                          key={index}
                          className="btn-gold-nav-gradient rounded-sm w-full sm:w-auto p-2 flex-1"
                        >
                          {amount}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Round Table */}
                <div className="overflow-x-auto hidden sm:block">
                  <table className="w-full border border-gray-900">
                    <thead className="bg-neutral-950">
                      <tr>
                        <th className="border border-gray-800 py-2 px-4 text-center">
                          Round
                        </th>
                        <th className="border border-gray-800 py-2 px-4 text-center">
                          Result
                        </th>
                        <th className="border border-gray-800 py-2 px-4 text-center">
                          Round Hash
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="border border-gray-800 text-center py-2 px-2"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-span-1">
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-900">
                    <thead className="bg-neutral-950">
                      <tr>
                        <th className="border border-gray-800 py-2 text-center">
                          유저ID
                        </th>
                        <th className="border border-gray-800 py-2 text-center">
                          @
                        </th>
                        <th className="border border-gray-800 py-2 text-center">
                          배팅금액
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="border border-gray-800 text-center py-2 px-2"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        );
      case "soccer":
        return (
          <>
            <div className="grid grid-cols-4 w-full sm:overflow-x-auto">
              {/* Left Section */}
              <div className="col-span-3 w-full">
                {/* API Box Placeholder */}
                <div className="bg-neutral-800 h-96">put Api here</div>

                {/* Controls Section */}
                <div className="flex flex-col gap-4 p-4">
                  {/* Inputs & Button Row */}
                  <div className="flex flex-wrap gap-4 justify-between w-full">
                    {/* First Input Group */}
                    <div className="flex flex-row gap-2 items-center flex-1 min-w-[180px]">
                      <p className="text-2xl whitespace-nowrap">보유금</p>
                      <input
                        type="text"
                        className="bg-neutral-500 rounded-sm px-2 py-1 flex-1 min-w-0"
                      />
                    </div>

                    {/* Second Input Group */}
                    <div className="flex flex-row gap-2 items-center flex-1 min-w-[180px]">
                      <p className="text-2xl whitespace-nowrap">보유금</p>
                      <input
                        type="text"
                        className="bg-neutral-500 rounded-sm px-2 py-1 flex-1 min-w-0"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center">
                      <button className="btn-gold-nav-gradient rounded-sm p-2 whitespace-nowrap">
                        정정
                      </button>
                    </div>
                  </div>

                  {/* Quick Amount Buttons */}
                  <div className="flex flex-wrap gap-4 justify-between">
                    {["5천", "1만", "5만", "10만", "50만"].map(
                      (amount, index) => (
                        <button
                          key={index}
                          className="btn-gold-nav-gradient rounded-sm w-full sm:w-auto p-2 flex-1"
                        >
                          {amount}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Round Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-900">
                    <thead className="bg-neutral-950">
                      <tr>
                        <th className="border border-gray-800 py-2 px-4 text-center">
                          Round
                        </th>
                        <th className="border border-gray-800 py-2 px-4 text-center">
                          Result
                        </th>
                        <th className="border border-gray-800 py-2 px-4 text-center">
                          Round Hash
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="border border-gray-800 text-center py-2 px-2"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-span-1">
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-900">
                    <thead className="bg-neutral-950">
                      <tr>
                        <th className="border border-gray-800 py-2 text-center">
                          유저ID
                        </th>
                        <th className="border border-gray-800 py-2 text-center">
                          @
                        </th>
                        <th className="border border-gray-800 py-2 text-center">
                          배팅금액
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="border border-gray-800 text-center py-2 px-2"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return (
          <div className="p-4 text-lg text-white">
            <p>Invalid selection.</p>
          </div>
        );
    }
  };

  return (
    <>
      <div className="col-span-8 gap-1">
        <div className="grid grid-cols-2 bg-neutral-900">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className={`grid grid-cols-1 place-items-center py-2 border-r-2 border-zinc-950/50 ${
                selectedSport === sport.id ? "bg-zinc-800" : ""
              }`}
              onClick={() => setSelectedSport(sport.id)}
            >
              <button className="flex flex-col items-center justify-center space-y-1 focus:outline-none">
                <Image
                  src={sport.icon}
                  height={30}
                  width={30}
                  alt={sport.name}
                />
                <p className="font-medium">{sport.name}</p>
              </button>
            </div>
          ))}
        </div>

        <div className="flex bg-neutral-900 my-2">{renderContent()}</div>
      </div>
    </>
  );
}
