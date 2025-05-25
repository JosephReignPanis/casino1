"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import Bet365Board from "@/components/reusable/bet365board/page";
import Bet365Race from "@/components/reusable/bet365race/page";
import SnifflingBoard from "@/components/reusable/snifflingboard/page";
import ButtonTable from "@/components/reusable/buttontable/page";

const matchData = {
  title: "Rodssa",
  round: "518",
  videoSrc: "p",
  buttons: [
    { label: "Bet Close", color: "bg-amber-400" },
    { label: "12:00", color: "bg-amber-200" },
  ],
  categoryrows: [
    {
      category: "홀짝",
      options: [
        { label: "홀", value: "1.95" },
        { label: "짝", value: "1.95" },
        { label: "무", value: "1.95" },
      ],
    },
  ],
};
const matchData1 = {
  title: "Rodssa",
  round: "518",
  videoSrc: "p",
  buttons: [
    { label: "Bet Close", color: "bg-amber-400" },
    { label: "12:00", color: "bg-amber-200" },
  ],
  categoryrows: [
    {
      category: "홀짝",
      options: [
        { label: "홀", value: "1.95" },
        { label: "짝", value: "1.95" },
        { label: "무", value: "1.95" },
      ],
    },
    {
      category: "홀짝",
      options: [
        { label: "홀", value: "2.45" },
        { label: "짝", value: "1.25" },
        { label: "무", value: "5.95" },
      ],
    },
  ],
};

const soccerMatchDetails = {
  videoSrc: "/video.mp4", // Replace with actual video source
  sportIconSrc: "/sports_nav/icon_sports02.png", // Replace with actual icon path
  league: "Premier League",
  date: "April 8, 2025 - 18:00",
  odds: [
    {
      leftLabel: "Poland",
      leftValue: "0.1",
      centerValue: "2.5",
      rightLabel: "England",
      rightValue: "2.32",
    },
    {
      leftLabel: "Poland",
      leftValue: "0.1",
      centerValue: "2.5",
      rightLabel: "England",
      rightValue: "2.32",
    },
  ],
};
const basketballMatchDetails = {
  videoSrc: "/video.mp4", // Replace with actual video source
  sportIconSrc: "/sports_nav/icon_sports04.png", // Replace with actual icon path
  league: "NBA",
  date: "April 8, 2025 - 18:00",
  odds: [
    {
      leftLabel: "Dallas Mavericks",
      leftValue: "0.1",
      centerValue: "2.5",
      rightLabel: "Los Angeles Lakers",
      rightValue: "2.32",
    },
  ],
};

const RacelMatchDetails = {
  videoSrc: "/video.mp4",
  sportIconSrc: "/sports_nav/icon_sports04.png",
  raceIconSrc: "/sports_nav/icon_sports04.png",
  league: "Festival Downs",
  date: "Tue Apr 08 14:48",
  odds: [
    {
      leftLabel: " Wiggy",
      leftValue: "0.1",
    },
    {
      leftLabel: " Wiggy",
      leftValue: "0.1",
    },
  ],
};

const AllWorldCup = () => <Bet365Board {...soccerMatchDetails} />;
const AllEuroCup = () => <Bet365Board {...soccerMatchDetails} />;
const AllPremier = () => <Bet365Board {...soccerMatchDetails} />;
const AllSuperLeague = () => <Bet365Board {...soccerMatchDetails} />;

const NbaDetails = () => <Bet365Board {...basketballMatchDetails} />;
const 워터포트Details = () => <Bet365Board {...basketballMatchDetails} />;

const 브리타니아Details = () => <Bet365Race {...RacelMatchDetails} />;

// Tabs per sport
const sportTabs: Record<string, { id: string; label: string }[]> = {
  로투스: [
    { id: "로투스sniffling", label: "sniffling" },
    { id: "로투스baccarat", label: "baccarat" },
  ],
  크라운: [
    { id: "크라운sniffling", label: "sniffling" },
    { id: "크라운baccarat", label: "baccarat" },
  ],
  MGM: [
    { id: "MGMsniffling", label: "sniffling" },
    { id: "MGMbaccarat", label: "baccarat" },
  ],
  보글: [
    { id: "보글파워볼2분", label: "파워볼 2분" },
    { id: "보글사다리3분", label: "사다리 3분" },
  ],
  보스코어: [
    { id: "보스코어별다리3분", label: "별다리 3분" },
    { id: "보스코어별다리2분", label: "별다리 2분" },
    { id: "보스코어별다리1분", label: "별다리 1분" },
  ],
  네임드: [
    { id: "네임드파워볼5분", label: "파워볼 5분" },
    { id: "네임드사다리5분", label: "사다리 5분" },
  ],
  EOS: [
    { id: "EOS파워볼5분", label: "파워볼 5분" },
    { id: "EOS파워볼3분", label: "파워볼 3분" },
    { id: "EOS파워볼1분", label: "파워볼 1분" },
  ],
  알파게임: [
    { id: "알파게임패널티킥1분", label: "패널티킥 1분" },
    { id: "알파게임망치망치1분", label: "망치망치 1분" },
  ],
  게임스타: [
    { id: "게임스타라이언무지", label: "라이언무지" },
    { id: "게임스타피그사다리", label: "피그사다리" },
    { id: "게임스타스플릿", label: "스플릿" },
  ],
  PBG: [{ id: "PBG파워볼5분", label: "파워볼5분" }],
};

const tabComponents: Record<string, Record<string, React.ReactNode>> = {
  로투스: {
    로투스sniffling: (
      <>
        <SnifflingBoard {...matchData} />
        <ButtonTable />
      </>
    ),
    로투스baccarat: (
      <>
        <SnifflingBoard {...matchData} />
        <ButtonTable />
      </>
    ),
  },
  크라운: {
    크라운sniffling: (
      <>
        <SnifflingBoard {...matchData} />
        <ButtonTable />
      </>
    ),
    크라운baccarat: (
      <>
        <SnifflingBoard {...matchData} />
        <ButtonTable />
      </>
    ),
  },
  MGM: {
    MGMsniffling: (
      <>
        <SnifflingBoard {...matchData} />
        <ButtonTable />
      </>
    ),
    MGMbaccarat: (
      <>
        <SnifflingBoard {...matchData} />
        <ButtonTable />
      </>
    ),
  },
  보글: {
    보글파워볼2분: (
      <>
        <SnifflingBoard {...matchData1} />
        <ButtonTable />
      </>
    ),
    보글사다리3분: (
      <>
        <SnifflingBoard {...matchData} />
        <ButtonTable />
      </>
    ),
  },
  보스코어: {
    //3 tabs
    보스코어별다리3분: <브리타니아Details />,
    보스코어별다리2분: <브리타니아Details />,
    보스코어별다리1분: <브리타니아Details />,
  },
  네임드: {
    네임드파워볼5분: <브리타니아Details />,
    네임드사다리5분: <브리타니아Details />,
  },
  EOS: {
    EOS파워볼5분: <브리타니아Details />,
    EOS파워볼3분: <브리타니아Details />,
    EOS파워볼1분: <브리타니아Details />,
  },
  알파게임: {
    알파게임패널티킥1분: <브리타니아Details />,
    알파게임망치망치1분: <브리타니아Details />,
  },
  게임스타: {
    게임스타라이언무지: <브리타니아Details />,
    게임스타피그사다리: <브리타니아Details />,
    게임스타스플릿: <브리타니아Details />,
  },
  PBG: {
    PBG파워볼5분: <브리타니아Details />,
  },
};

const sports = [
  { id: "로투스", name: "로투스", icon: "/icon_minigame/icon_01.png" },
  { id: "크라운", name: "크라운", icon: "/icon_minigame/icon_02.png" },
  { id: "보글", name: "보글", icon: "/icon_minigame/icon_04.png" },
  { id: "보스코어", name: "보스코어", icon: "/icon_minigame/icon_05.png" },
  { id: "네임드", name: "네임드", icon: "/icon_minigame/icon_06.png" },
  { id: "EOS", name: "EOS", icon: "/icon_minigame/icon_07.png" },
  { id: "알파게임", name: "알파게임", icon: "/icon_minigame/icon_08.png" },
  { id: "게임스타", name: "게임스타", icon: "/icon_minigame/icon_09.png" },
  { id: "PBG", name: "PBG", icon: "/icon_minigame/icon_10.png" },
];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("로투스");
  const [activeTab, setActiveTab] = useState("로투스sniffling");

  return (
    <>
      <div className="overflow-x-auto bg-neutral-900 ">
        <div className="flex w-max">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className={`flex-shrink-0 w-1/3 sm:w-1/4 grid place-items-center py-2 border-r-2 border-zinc-950/50 cursor-pointer ${
                selectedSport === sport.id ? "bg-zinc-800" : ""
              }`}
              onClick={() => {
                setSelectedSport(sport.id);
                setActiveTab(sportTabs[sport.id]?.[0]?.id || "");
              }}
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
      </div>

      {sportTabs[selectedSport] && (
        <div className="overflow-x-auto bg-neutral-900 scrollbar-hide">
          <div className="flex w-max min-w-full scrollbar-hide">
            {sportTabs[selectedSport].map((tab) => (
              <button
                key={tab.id}
                className={`my-2 py-2 px-4 text-lg w-full font-semibold whitespace-nowrap border border-green-800/60 ${
                  activeTab === tab.id
                    ? "bg-neutral-800 text-white"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {tabComponents[selectedSport]?.[activeTab] || (
        <div>No content Availalbe</div>
      )}
    </>
  );
}
