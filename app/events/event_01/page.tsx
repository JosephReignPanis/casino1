import Image from "next/image";
import Link from "next/link";

export default function event_01() {
  return (
    <>
      {" "}
      <div className="col-span-8 pb-5">
        {" "}
        <p className="nav-btn-primary text-4xl font-black text-center py-2">
          이벤트
        </p>
        <div className="bg-zinc-900/80 w-full mb-2 p-4">
          <p className="bg-neutral-800 p-2 mb-5"> 신규가입 첫충전 이벤트</p>
          <Image
            src={"/event_page/banner01.png"}
            width={100}
            height={100}
            alt="banner"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-row w-full justify-center p-4 gap-4">
          <Link href={"/"} className="bg-zinc-700 px-6 py-2 hover:bg-zinc-500 ">
            입금신청하기
          </Link>
        </div>{" "}
      </div>
    </>
  );
}
