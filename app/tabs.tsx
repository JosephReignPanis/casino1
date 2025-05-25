"use client";
import Image from "next/image";
import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "스포츠", subtext: "1111" },
    { title: "실시간", subtext: "22222" },
    { title: "미니게임", subtext: "333" },
  ];

  return (
    <div className="">
      {/* Tab Buttons */}
      <div className="flex gap-1">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 p-1 text-center ${
              activeTab === index
                ? "bg-[#222222] text-white text-lg"
                : "bg-[#2d2d2d] hover:bg-zinc-800 text-lg"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <div>{tab.title}</div>
            <div className="text-sm text-yellow-500">{tab.subtext}</div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {activeTab === 0 && (
          <>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    {" "}
                    <Image
                      src={"/icon_sidebar/icon_1.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>축구</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>{" "}
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    <Image
                      src={"/icon_sidebar/icon_2.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>놈구</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>{" "}
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    {" "}
                    <Image
                      src={"/icon_sidebar/icon_3.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>배구</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>{" "}
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    {" "}
                    <Image
                      src={"/icon_sidebar/icon_4.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>아이스하키</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>{" "}
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    {" "}
                    <Image
                      src={"/icon_sidebar/icon_5.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>야구</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>{" "}
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    {" "}
                    <Image
                      src={"/icon_sidebar/icon_6.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>핸드볼</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>{" "}
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    {" "}
                    <Image
                      src={"/icon_sidebar/icon_7.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>테니스</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>{" "}
              <div className="flex flex-row gap-6 justify-between p-4 bg-[#222222] text-white py-2 align-middle items-center">
                <div className="flex flex-row gap-4">
                  <div>
                    {" "}
                    <Image
                      src={"/icon_sidebar/icon_8.png"}
                      width={20}
                      height={20}
                      alt="1"
                    />
                  </div>
                  <div>E스포츠</div>
                </div>
                <p className="bg-zinc-800 py-1 px-3 rounded-full text-yellow-500 text-sm">
                  121
                </p>
              </div>
            </div>
          </>
        )}
        {activeTab === 1 && (
          <>
            <div className="flex flex-row gap-6 justify-between">
              <div className="flex flex-row gap-4">
                <div>test\</div>
                <div>축구</div>
              </div>
              <div>+</div>
            </div>
          </>
        )}
        {activeTab === 2 && (
          <>
            <div className="flex flex-row gap-6 justify-between">
              <div className="flex flex-row gap-4">
                <div>test\</div>
                <div>축구</div>
              </div>
              <div>+</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
