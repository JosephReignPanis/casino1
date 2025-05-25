"use client";
import { JSX, useState } from "react";
import Image from "next/image";
import React from "react";
import Bet365Board from "@/components/reusable/bet365board/page";
import Bet365Race from "@/components/reusable/bet365race/page";
const soccerMatchDetails = {
  videoSrc: "/video.mp4",
  sportIconSrc: "/sports_nav/icon_sports02.png",
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
  videoSrc: "/video.mp4",
  sportIconSrc: "/sports_nav/icon_sports04.png",
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
  soccer: [
    { id: "World Cup", label: "World Cup" },
    { id: "Euro Cup", label: "Euro Cup" },
    { id: "Premier", label: "Premier League" },
    { id: "Super League", label: "Super League" },
  ],
  basketball: [
    { id: "NBA", label: "NBA" },
    { id: "워터포트", label: "워터포트 아레나" },
  ],
  horseracing: [
    { id: "브리타니아", label: "브리타니아 웨이" },
    { id: "페스티발", label: "페스티발 다운스" },
    { id: "빅토리아", label: "빅토리아 파크" },
  ],
  virtualopening: [
    { id: "골든힐", label: "골든힐 파크" },
    { id: "힐사이드", label: "힐사이드 파크" },
  ],
};

// Component map for content
const tabComponents: Record<string, Record<string, JSX.Element>> = {
  soccer: {
    "World Cup": <AllWorldCup />,
    "Euro Cup": <AllEuroCup />,
    Premier: <AllPremier />,
    "Super League": <AllSuperLeague />,
  },
  basketball: {
    NBA: <NbaDetails />,
    워터포트: <워터포트Details />,
  },
  horseracing: {
    브리타니아: <브리타니아Details />,
    페스티발: <브리타니아Details />,
    빅토리아: <브리타니아Details />,
  },
  virtualopening: {
    골든힐: <브리타니아Details />,
    힐사이드: <브리타니아Details />,
  },
};

const sports = [
  { id: "soccer", name: "가상축구", icon: "/icon_bet365.png" },
  { id: "basketball", name: "가상농구", icon: "/icon_bet365.png" },
  { id: "horseracing", name: "가상경마", icon: "/icon_bet365.png" },
  { id: "virtualopening", name: "가상개경", icon: "/icon_bet365.png" },
];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("soccer");
  const [activeTab, setActiveTab] = useState("World Cup");

  return (
    <>
      <div className="overflow-x-auto bg-neutral-900 scrollbar-hide">
        <div className="flex min-w-max">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className={`flex-shrink-0 w-1/3 sm:w-1/4 grid place-items-center py-2 border-r-2 border-zinc-950/50 cursor-pointer ${
                selectedSport === sport.id ? "bg-zinc-800" : ""
              }`}
              onClick={() => {
                setSelectedSport(sport.id);
                setActiveTab(sportTabs[sport.id]?.[0]?.id || ""); // Set active tab to the first tab by default
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
                className={`mt-1 py-2 px-4 text-lg w-full font-semibold whitespace-nowrap border border-green-800/60 ${
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
