import React from "react";
import Image from "next/image";

interface OddsItem {
  leftLabel: string;
  leftValue: string;
}

interface Bet365RaceProps {
  videoSrc: string;
  sportIconSrc: string;
  raceIconSrc: string;
  league: string;
  date: string;
  odds: OddsItem[];
}

const Bet365Race: React.FC<Bet365RaceProps> = ({
  videoSrc,
  sportIconSrc,
  raceIconSrc,
  league,
  date,
  odds,
}) => {
  return (
    <div className="w-full">
      {/* Video Container */}
      <div className="w-full h-[200px] sm:h-[400px] bg-zinc-800">
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

        {odds.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 sm:grid-cols-4 w-full gap-2 border p-1 rounded-lg border-neutral-950 ${
              index === 0
                ? "mt-2 bg-zinc-900"
                : index === 1
                ? "bg-zinc-900"
                : "bg-zinc-900"
            }`}
          >
            {/* Left Column */}
            <div className="flex flex-row  p-2 items-center gap-2 justify-between border border-zinc-800 rounded-lg">
              <div className="flex flex-row gap-2">
                <Image
                  src={raceIconSrc}
                  width={10}
                  height={10}
                  alt="sport-icon"
                  className="w-4 h-4"
                />
                <p className="font-medium text-white text-sm">
                  {item.leftLabel}
                </p>
              </div>{" "}
              <p className=" text-zinc-500 text-sm">{item.leftValue}</p>
            </div>
            {/* Center Column */}
            <div className="flex flex-row  p-2 items-center gap-2 justify-between border border-zinc-800 rounded-lg">
              <div className="flex flex-row gap-2">
                <Image
                  src={raceIconSrc}
                  width={10}
                  height={10}
                  alt="sport-icon"
                  className="w-4 h-4"
                />
                <p className="font-medium text-white text-sm">
                  {item.leftLabel}
                </p>
              </div>{" "}
              <p className=" text-zinc-500 text-sm">{item.leftValue}</p>
            </div>
            {/* Right Column */}
            <div className="flex flex-row  p-2 items-center gap-2 justify-between border border-zinc-800 rounded-lg">
              <div className="flex flex-row gap-2">
                <Image
                  src={raceIconSrc}
                  width={10}
                  height={10}
                  alt="sport-icon"
                  className="w-4 h-4"
                />
                <p className="font-medium text-white text-sm">
                  {item.leftLabel}
                </p>
              </div>{" "}
              <p className=" text-zinc-500 text-sm">{item.leftValue}</p>
            </div>{" "}
            <div className="flex flex-row  p-2 items-center gap-2 justify-between border border-zinc-800 rounded-lg">
              <div className="flex flex-row gap-2">
                <Image
                  src={raceIconSrc}
                  width={10}
                  height={10}
                  alt="sport-icon"
                  className="w-4 h-4"
                />
                <p className="font-medium text-white text-sm">
                  {item.leftLabel}
                </p>
              </div>{" "}
              <p className=" text-zinc-500 text-sm">{item.leftValue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bet365Race;
