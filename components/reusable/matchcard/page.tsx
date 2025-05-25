"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type MatchCardProps = {
  flagSrc: string;
  sportIconSrc: string;
  league: string;
  date: string;
  teamA: string;
  teamB: string;
  betCount: string;
  odds: {
    leftLabel: string;
    leftValue: string;
    centerValue: string;
    rightLabel: string;
    rightValue: string;
  }[];
};
// function ComponentA() {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/pageB?username=건바리님&level=1");
//   };

//   return <button onClick={handleClick}>Go to Page B</button>;
// }

const MatchCard = ({
  flagSrc,
  sportIconSrc,
  league,
  date,
  teamA,
  teamB,
  betCount,
  odds,
}: MatchCardProps) => {
  return (
    <div className="max-h-screen overflow-y-auto rounded-lg">
      {/* <ComponentA /> */}
      <div className="bg-zinc-800 p-1 mt-2 rounded-lg">
        <div className="flex flex-row justify-between     bg-zinc-900 border border-b-zinc-900 border-zinc-950 rounded-t-lg">
          <div className="flex flex-row p-2 gap-4 items-center justify-center">
            <Image
              src={flagSrc}
              width={20}
              height={20}
              alt="flag"
              className="w-7 h-7 "
            />
            <div className="flex flex-col">
              <p>{league}</p>
              <p className="text-zinc-500 text-sm">{date}</p>
            </div>
          </div>
          <div className="flex p-2 items-center justify-center">
            <Image
              src={sportIconSrc}
              width={20}
              height={20}
              alt="sport-icon"
              className="w-6 h-6 "
            />
          </div>
        </div>

        <div className="flex flex-row justify-between bg-zinc-900/60 border border-zinc-950 rounded-b-lg">
          <div className="flex flex-row p-2 gap-4 items-center justify-center">
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <p>{teamA}</p>
                <p className="text-red-600 ">VS</p>
                <p>{teamB}</p>
              </div>
              <p className="text-zinc-400 text-sm">{date}</p>
            </div>
          </div>
          <div className="flex p-2 items-center justify-center border-l border-zinc-800">
            <p className="text-yellow-400">{betCount}</p>
          </div>
        </div>

        {/* Odds rows (3 times) */}
        {odds.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row w-full ${
              index === 0
                ? "mt-2 bg-zinc-900 rounded-t-lg"
                : index === 1
                ? "bg-zinc-900 border-y border-y-neutral-950"
                : "bg-zinc-900 rounded-b-lg"
            }`}
          >
            <div className="flex flex-row justify-between p-2 w-full">
              <p>{item.leftLabel}</p>
              <p className="text-zinc-500">{item.leftValue}</p>
            </div>
            <div className="flex flex-row justify-between p-2 px-4 border-x border-x-neutral-950">
              <p>{item.centerValue}</p>
            </div>
            <div className="flex justify-between p-2 w-full flex-row-reverse">
              <p>{item.rightLabel}</p>
              <p className="text-zinc-500">{item.rightValue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchCard;
