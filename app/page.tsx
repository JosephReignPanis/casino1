"use client";

import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MiddleContent from "@/components/bank1/middlecontent";

export default function Home() {
  const notices = [
    {
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  const CardList: React.FC<CardListProps> = ({ data }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between py-4 px-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-40 overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-[100px] overflow-hidden whitespace-nowrap text-zinc-400">
              {item.date}
            </p>
            <Image
              src="/r-arrow.png"
              width={10}
              height={10}
              className="w-8 h-5 sm:h-2 sm:w-2 object-contain"
              alt="r-arrow"
            />
          </div>
        </div>
      ))}
    </div>
  );
  interface CardListProps {
    data: { title: string; date: string }[];
  }
  return (
    <>
      <MiddleContent />{" "}
    </>
  );
}
