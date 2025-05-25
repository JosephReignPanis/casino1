import Image from "next/image";
import Tabs from "@/components/bank1/tabs";
import Link from "next/link";
import { headerlist } from "@/const/sidebar";

export default function LeftContent() {
  const primaryButtons = [
    {
      label: "입금신청 ",
      path: "/navigation/charge",
      src: "/icon/left_icon01.png",
    },
    {
      label: "출금신청 ",
      path: "/navigation/exchange",
      src: "/icon/left_icon02.png",
    },
  ];
  const secondButtons = [
    { label: "슬롯", path: "/categories/slot", src: "/icon/left_game01.png" },
    {
      label: "카지노",
      path: "/categories/livecasino",
      src: "/icon/left_game02.png",
    },
  ];
  const categoryButtons = [
    [
      { label: "해외형", path: "/categories/sports" },
      { label: "국내형", path: "/categories/sportscross" },
      { label: "스페셜", path: "/categories/sportsspecial" },
    ],
    [
      { label: "인플레이", path: "/inplay" },
      { label: "실시간", path: "/categories/sports-live-kor" },
      { label: "미니게임", path: "/categories/minigame" },
    ],
    [
      { label: "벳365", path: "/categories/bet365" },
      { label: "토큰게임", path: "/categories/tokengame" },
      { label: "카지노", path: "/categories/livecasino" },
    ],
    [
      { label: "슬롯", path: "/categories/slot" },
      { label: "경기결과", path: "/navigation/result" },
      { label: "베팅내역", path: "/navigation/betlist" },
    ],
    [
      { label: "공지사항", path: "/navigation/notice" },
      { label: "이벤트", path: "/navigation/event" },
      { label: "개인정산", path: "/categories/payback" },
    ],
    [
      { label: "쪽지함", path: "/navigation/message" },
      { label: "고객센터", path: "/navigation/help" },
      { label: "마이페이지", path: "/navigation/mypage" },
    ],
    [
      { label: "출석체크", path: "/navigation/attendance" },
      { label: "입금신청", path: "/navigation/charge" },
      { label: "출금신청", path: "/navigation/exchange" },
    ],
  ];

  return (
    <>
      <div className="grid grid-cols-2 gap-1 pb-2">
        {primaryButtons.map(({ label, path, src }, index) => (
          <Link key={index} href={path} className="">
            <button className="btn-gold-gradient p-2 flex flex-row items-center justify-center w-full h-full gap-2 border border-neutral-500/60 shadow-inner hover:[box-shadow:inset_0_0_8px_#f99e0b]">
              <Image src={src} width={40} height={40} alt="sd" />
              {label}
            </button>
          </Link>
        ))}
      </div>
      {categoryButtons.map((group, idx) => (
        <div key={idx} className="bg-neutral-900  grid grid-cols-3 ">
          {group.map(({ label, path }, index) => (
            <Link key={index} href={path} className="w-full ">
              <button className="w-full text-sm p-2 border border-neutral-700/50 text-neutral-300 bg-neutral-900  hover:[box-shadow:inset_0_0_8px_#f59e0b]">
                {label}
              </button>
            </Link>
          ))}
        </div>
      ))}
      <div className="grid grid-cols-2 gap-1 my-2 ">
        {secondButtons.map(({ label, path, src }, index) => (
          <Link key={index} href={path} className="">
            <Image
              src={src}
              width={40}
              height={40}
              alt="sd"
              className="w-full h-full hover:brightness-150"
            />
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <div className="flex flex-col my-2 gap-2 p-2 bg-neutral-900">
          <div className="flex flex-row">
            <input
              type="text"
              className="bg-neutral-800 w-full text-xs font-bold p-2"
              id="searchbar"
              placeholder="스포츠 해외형 검색 (국가/리그/팀명)"
            />
            <button className="bg-yellow-800 p-2">
              <Image
                src={"/search.png"}
                width={20}
                height={20}
                alt="search button"
              />
            </button>{" "}
          </div>
        </div>
        <Tabs headerlist={headerlist} />
      </div>
    </>
  );
}
