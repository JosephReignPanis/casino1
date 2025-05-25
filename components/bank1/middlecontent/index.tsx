import Image from "next/image";
export default function MiddleContent() {
  const notices = [
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "NOTICE",
      title: "공지사항 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      type: "EVENT",
      title: "이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  interface CardListProps {
    data: { type: string; title: string; date: string }[];
    badgeColor: string;
  }

  const CardList: React.FC<CardListProps> = ({ data, badgeColor }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between py-4 px-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2">
            <div
              className={`px-2 py-1 text-xs text-center font-bold items-center flex rounded-lg ${badgeColor}`}
            >
              {item.type}
            </div>
            <p className="truncate max-w-40 text-sm overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-[100px] text-sm overflow-hidden whitespace-nowrap text-zinc-400">
              {item.date}
            </p>
            <Image
              src="/r-arrow.png"
              width={10}
              height={10}
              className="w-5 h-5 object-contain"
              alt="r-arrow"
            />
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="block sm:hidden">
        <Image
          src="/placeholder1.png"
          width={500}
          height={300}
          alt="placeholder"
          className="w-full"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
            <Image
              src={"/sports.png"}
              width={120}
              height={100}
              alt="placeholder"
              className="object-contain w-full"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>공지사항</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />{" "}
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
          <p>이벤트</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
      </div>

      <div className="col-span-3 hidden sm:block">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <Image
              src="/placeholder1.png"
              width={500}
              height={300}
              alt="placeholder"
              className="w-full"
            />
            <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
              <p>공지사항</p>
              <Image
                src="/plus_icon.png"
                width={10}
                height={10}
                className="w-5 h-5 object-contain"
                alt="plus"
              />
            </div>
            <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />
          </div>

          {/* Events Section */}
          <div className="col-span-1">
            <Image
              src="/placeholder2.png"
              width={500}
              height={300}
              alt="placeholder"
              className="w-full"
            />
            <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-lg items-center mt-3">
              <p>이벤트</p>
              <Image
                src="/plus_icon.png"
                width={10}
                height={10}
                className="w-5 h-5 object-contain"
                alt="plus"
              />
            </div>
            <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
          </div>
        </div>{" "}
        <div className="flex flex-row items-center gap-2 w-full py-2">
          <h3 className="text-2xl font-black nav-btn-primary">
            Namdaemun Sports
          </h3>
          <hr className="hr flex-1" />
        </div>
        <div className="grid grid-cols-5 my-4 gap-2 w-full">
          <Image
            src={"/sports_banner/game1.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game2.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game3.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game4.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game5.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
        </div>{" "}
        <div className="flex flex-row items-center gap-2 w-full py-2">
          <h3 className="text-2xl font-black nav-btn-primary">
            Namdaemun Games
          </h3>
          <hr className="hr flex-1" />
        </div>
        <div className="grid grid-cols-5 my-4 gap-2 w-full">
          <Image
            src={"/sports_banner/game1.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game2.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game3.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game4.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
          <Image
            src={"/sports_banner/game5.jpg"}
            width={120}
            height={100}
            alt="placeholder"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
