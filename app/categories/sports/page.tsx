"use client";
import { useState } from "react";
import Image from "next/image";
import MatchCard from "@/components/reusable/matchcard/page";
import DividendsBonus from "@/components/reusable/dividendsBonus/page";

const sports = [
  { id: "all", name: "All", icon: "/sports_nav/icon_sports01.png" },
  { id: "soccer", name: "축구", icon: "/sports_nav/icon_sports02.png" },
  { id: "basketball", name: "농구", icon: "/sports_nav/icon_sports04.png" },
  { id: "baseball", name: "야구", icon: "/sports_nav/icon_sports03.png" },
  { id: "volleyball", name: "배구", icon: "/sports_nav/icon_sports05.png" },
  { id: "ice_hockey", name: "ICE하키", icon: "/sports_nav/icon_sports09.png" },
  { id: "lol", name: "LOL", icon: "/sports_nav/icon_sports10.png" },
];

export default function Home() {
  const [selectedSport,  setSelectedSport] = useState("all");
  return (
    <>
      <div className="flex flex-row  items-center bg-neutral-900 overflow-x-auto">
        {sports.map((sport) => {
          const isSelected = selectedSport === sport.id;

          return (
            <div
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={[
                "w-[120px]",
                "h-[100px]",
                "flex-none",
                "flex flex-col items-center justify-center",
                "cursor-pointer",
                "transition-colors duration-200",
                "border-r-2 border-zinc-950/50",
                isSelected && "bg-neutral-800",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <button className="flex flex-col items-center justify-center space-y-1 focus:outline-none">
                <Image
                  src={sport.icon}
                  height={30}
                  width={30}
                  alt={sport.name}
                />
                <p className="my-0">{sport.name}</p>
                <p className="my-0 text-sm text-gray-400">(123)</p>
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex p-2 px-4 font-bold bg-neutral-900 my-2">
        스포츠 해외형
      </div>
      {/* Content Section */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 text-white">
        <div className="col-span-1 ">
          {selectedSport === "all" && (
            <>
              <DividendsBonus
                title=" 다폴더 보너스 추가 배당 (자동)"
                description="(3, 5, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

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
          {selectedSport === "soccer" && (
            <>
              <DividendsBonus
                title=" 다폴더 보너스  (자동)"
                description="(3, 1, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 5이상",
                    value: "1.12",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />

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
          {selectedSport === "basketball" && (
            <>
              <DividendsBonus
                title=" 다폴더 보너스  (자동)"
                description="(3, 2, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 5이상",
                    value: "1.12",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />
              <MatchCard
                flagSrc="/flag_icon/korea.png"
                sportIconSrc="/sports_nav/icon_sports04.png"
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
          {selectedSport === "baseball" && (
            <>
              {" "}
              <DividendsBonus
                title=" 다폴더 보너스  (자동)"
                description="(3, 2, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 5이상",
                    value: "1.12",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />
              <MatchCard
                flagSrc="/flag_icon/korea.png"
                sportIconSrc="/sports_nav/icon_sports04.png"
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
          {selectedSport === "volleyball" && (
            <>
              {" "}
              <>
                {" "}
                <DividendsBonus
                  title=" 다폴더 보너스  (자동)"
                  description="(3, 2, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                  rows={[
                    {
                      label: " 5이상",
                      value: "1.12",
                      textColorClass: "text-violet-300",
                    },
                    {
                      label: " 3폴더이상",
                      value: "1.03",
                      textColorClass: "text-yellow-300",
                    },
                    {
                      label: " 3폴더이상",
                      value: "1.03",
                      textColorClass: "text-blue-300",
                    },
                  ]}
                />
                <MatchCard
                  flagSrc="/flag_icon/korea.png"
                  sportIconSrc="/sports_nav/icon_sports04.png"
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
            </>
          )}
          {selectedSport === "ice_hockey" && (
            <>
              {" "}
              <>
                {" "}
                <DividendsBonus
                  title=" 다폴더 보너스  (자동)"
                  description="(3, 2, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                  rows={[
                    {
                      label: " 5이상",
                      value: "1.12",
                      textColorClass: "text-violet-300",
                    },
                    {
                      label: " 3폴더이상",
                      value: "1.03",
                      textColorClass: "text-yellow-300",
                    },
                    {
                      label: " 3폴더이상",
                      value: "1.03",
                      textColorClass: "text-blue-300",
                    },
                  ]}
                />
                <MatchCard
                  flagSrc="/flag_icon/korea.png"
                  sportIconSrc="/sports_nav/icon_sports04.png"
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
            </>
          )}
          {selectedSport === "lol" && (
            <>
              {" "}
              <DividendsBonus
                title=" 다폴더 보너스  (자동)"
                description="(3, 2, 7) 폴더 이상 조합시 지급 (1.30미만 배당 조합불가)"
                rows={[
                  {
                    label: " 5이상",
                    value: "1.12",
                    textColorClass: "text-violet-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-yellow-300",
                  },
                  {
                    label: " 3폴더이상",
                    value: "1.03",
                    textColorClass: "text-blue-300",
                  },
                ]}
              />
              <MatchCard
                flagSrc="/flag_icon/korea.png"
                sportIconSrc="/sports_nav/icon_sports04.png"
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

        <div className="hidden sm:block col-span-1 max-h-screen overflow-y-auto">
          <Image
            src={"/banner_long.png"}
            width={500}
            height={200}
            alt="banner"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
