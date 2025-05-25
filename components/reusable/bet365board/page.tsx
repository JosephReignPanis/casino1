import React from "react";
import Image from "next/image";

interface OddsItem {
  leftLabel: string;
  leftValue: string;
  centerValue: string;
  rightLabel: string;
  rightValue: string;
}

interface Bet365BoardProps {
  videoSrc: string; // Video source URL
  sportIconSrc: string; // Icon source for the sport
  league: string; // The name of the league
  date: string; // Date and time of the match
  odds: OddsItem[]; // Array of odds for the match
}

const Bet365Board: React.FC<Bet365BoardProps> = ({
  videoSrc,
  sportIconSrc,
  league,
  date,
  odds,
}) => {
  return (
    <div className="w-full ">
      {/* Video Container */}
      <div className="w-full h-[200px] sm:h-[400px] bg-zinc-800 mx-auto">
        <video
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>{" "}
      <div className="bg-zinc-800 p-2 mt-2 rounded-lg">
        <button className="flex py-2 px-4 text-center border border-amber-400 text-amber-400 rounded-lg justify-center items-center">
          Refresh
        </button>
      </div>
      {/* Match Information */}
      <div className="bg-zinc-800 p-2 mt-2 rounded-lg">
        <div className="flex flex-row justify-between bg-zinc-900 border border-b-zinc-900 border-zinc-950 rounded-lg">
          <div className="flex flex-row p-2 gap-4 items-center justify-center">
            <Image
              src={sportIconSrc}
              width={20}
              height={20}
              alt="sport-icon"
              className="w-6 h-6"
            />
            <div className="flex flex-col">
              <p className="font-semibold text-white">{league}</p>
              <p className="text-zinc-500 text-sm">{date}</p>
            </div>
          </div>
        </div>

        {/* Odds rows */}
        {odds.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row w-full ${
              index === 0
                ? "mt-2 bg-zinc-900"
                : index === 1
                ? "bg-zinc-900 border-y border-y-neutral-950"
                : "bg-zinc-900"
            }`}
          >
            {/* Left Column */}
            <div className="flex flex-row justify-between p-2 w-full">
              <p className="font-medium text-white">{item.leftLabel}</p>
              <p className="text-zinc-500">{item.leftValue}</p>
            </div>

            {/* Center Column */}
            <div className="flex flex-row justify-between p-2 px-4 border-x border-x-neutral-950">
              <p className="font-medium text-white">{item.centerValue}</p>
            </div>

            {/* Right Column */}
            <div className="flex justify-between p-2 w-full flex-row-reverse">
              <p className="font-medium text-white">{item.rightLabel}</p>
              <p className="text-zinc-500">{item.rightValue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bet365Board;
