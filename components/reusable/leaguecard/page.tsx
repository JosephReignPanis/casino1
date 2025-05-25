import React from "react";
import Image from "next/image";

interface LeagueCardProps {
  imageSrc: string;
  league: string;
  date: string;
  time: string;
}

const LeagueCard: React.FC<LeagueCardProps> = ({
  imageSrc,
  league,
  date,
  time,
}) => {
  return (
    <div className="bg-zinc-800 p-1 mt-2">
      <div className="flex flex-row justify-between bg-zinc-900 border border-zinc-950 rounded-sm">
        <div className="flex flex-row p-2 gap-4 items-center justify-center">
          <Image
            src={imageSrc}
            width={25} // Ensure the image is the correct size
            height={25}
            alt={league}
            className="w-8 h-8"
          />
          <div className="flex flex-col">
            <p>{league}</p>
            <p>{`${date} ${time}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
