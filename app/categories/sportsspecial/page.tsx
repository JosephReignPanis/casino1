"use client";
import { useState } from "react";
import Image from "next/image";
import DividendsBonus from "@/components/reusable/dividendsBonus/page";
import MatchCard from "@/components/reusable/matchcard/page";
const sports = [
  { id: "로투스", name: "로투스", icon: "/icon_minigame/icon_01.png" },
  { id: "크라운", name: "크라운", icon: "/icon_minigame/icon_02.png" },
  { id: "MGM", name: "MGM", icon: "/icon_minigame/icon_03.png" },
  { id: "보글", name: "보글", icon: "/icon_minigame/icon_04.png" },
  { id: "보스코어", name: "보스코어", icon: "/icon_minigame/icon_05.png" },
];

export default function Home() {
  const [selectedSport, setSelectedSport] = useState("로투스");
  return (
    <>
      <div className="flex flex-row items-center bg-neutral-900 overflow-x-auto">
        {sports.map((sport, index) => (
          <div
            key={sport.id}
            onClick={() => setSelectedSport(sport.id)}
            className={`w-[170px] h-[80px] flex-none box-border flex flex-col items-center justify-center cursor-pointer transition-colors duration-200  ${
              selectedSport === sport.id ? "bg-zinc-800" : ""
            }`}
          >
            <Image src={sport.icon} height={30} width={30} alt={sport.name} />
            <p className="font-medium mt-2 text-sm text-center truncate w-full px-1">
              {sport.name}
            </p>
          </div>
        ))}
      </div>

      <div className="flex p-2 font-bold bg-neutral-900 my-2">스페셜</div>
      <DividendsBonus
        title=" 다폴더 보너스 추가 배당 (자동)"
        description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
        rows={[
          {
            label: " 3aaaa",
            value: "1.03",
            textColorClass: "text-violet-300",
          },
          {
            label: " 3bbbb",
            value: "1.03",
            textColorClass: "text-yellow-300",
          },
          {
            label: " 3cccc",
            value: "1.03",
            textColorClass: "text-blue-300",
          },
        ]}
      />
      <div className="grid grid-cols-2 gap-2 text-white">
        {" "}
        <div className="col-span-2">
          {selectedSport === "로투스" && (
            <>
              {" "}
              <div className="max-h-screen overflow-y-auto">
                <MatchCard
                  flagSrc="/flag_icon/uk.png"
                  sportIconSrc="/sports_nav/icon_sports02.png"
                  league="J 리그컵"
                  date="03월26일(수) 19:00"
                  teamA="Sydney CBD"
                  teamB="Hurstville"
                  betCount="배팅 +11"
                  odds={[
                    {
                      leftLabel: "3폴더이상",
                      leftValue: "1.03",
                      centerValue: "1.03",
                      rightLabel: "3폴더이상",
                      rightValue: "1.03",
                    },
                    {
                      leftLabel: "3폴더이상",
                      leftValue: "1.03",
                      centerValue: "1.03",
                      rightLabel: "3폴더이상",
                      rightValue: "1.03",
                    },
                  ]}
                />
              </div>
            </>
          )}
          {selectedSport === "크라운" && (
            <>
              {" "}
              <div className="max-h-screen overflow-y-auto">
                <MatchCard
                  flagSrc="/flag_icon/korea.png"
                  sportIconSrc="/sports_nav/icon_sports02.png"
                  league="J 리그컵"
                  date="03월26일(수) 19:00"
                  teamA="Sydney CBD"
                  teamB="Hurstville"
                  betCount="배팅 +11"
                  odds={[
                    {
                      leftLabel: "3폴더이상",
                      leftValue: "1.03",
                      centerValue: "1.03",
                      rightLabel: "3폴더이상",
                      rightValue: "1.03",
                    },
                    {
                      leftLabel: "3폴더이상",
                      leftValue: "1.03",
                      centerValue: "1.03",
                      rightLabel: "3폴더이상",
                      rightValue: "1.03",
                    },
                  ]}
                />
              </div>
            </>
          )}
          {selectedSport === "MGM" && (
            <>
              {" "}
              <div className="max-h-screen overflow-y-auto">
                <MatchCard
                  flagSrc="/flag_icon/indonesia_icon.png"
                  sportIconSrc="/sports_nav/icon_sports02.png"
                  league="J 리그컵"
                  date="03월26일(수) 19:00"
                  teamA="Sydney CBD"
                  teamB="Hurstville"
                  betCount="배팅 +11"
                  odds={[
                    {
                      leftLabel: "3폴더이상",
                      leftValue: "1.03",
                      centerValue: "1.03",
                      rightLabel: "3폴더이상",
                      rightValue: "1.03",
                    },
                    {
                      leftLabel: "3폴더이상",
                      leftValue: "1.03",
                      centerValue: "1.03",
                      rightLabel: "3폴더이상",
                      rightValue: "1.03",
                    },
                  ]}
                />
              </div>
            </>
          )}
          {selectedSport === "보글" && (
            <>
              {" "}
              <MatchCard
                flagSrc="/flag_icon/japan_icon.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
          {selectedSport === "보스코어" && (
            <>
              {" "}
              <MatchCard
                flagSrc="/flag_icon/uk.png"
                sportIconSrc="/sports_nav/icon_sports02.png"
                league="J 리그컵"
                date="03월26일(수) 19:00"
                teamA="Sydney CBD"
                teamB="Hurstville"
                betCount="배팅 +11"
                odds={[
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                  {
                    leftLabel: "3폴더이상",
                    leftValue: "1.03",
                    centerValue: "1.03",
                    rightLabel: "3폴더이상",
                    rightValue: "1.03",
                  },
                ]}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
