"use client";
import Image from "next/image";
import { useState } from "react";
import { LIVECASINOIMAGES } from "@/const/images";

export default function Home() {
  const [showcasinogames, setcasinogames] = useState(false);
  const [showcasinocard, setcasinocards] = useState(true);

  return (
    <>
      <div className="col-span-1 gap-1">
        <Image
          src={"/livecasino/visual_casino.png"}
          width={500}
          height={300}
          alt="auto"
          className="object-fill w-full h-auto"
        />
        <div className="grid sm:grid-cols-6 grid-cols-4  gap-2 pt-2">
          {showcasinocard && (
            <>
              {LIVECASINOIMAGES.map((items, index) => (
                <Image
                  key={index}
                  src={`/livecasino/${items}.png`}
                  width={200}
                  height={200}
                  alt="banner"
                  className="object-fill w-full h-auto cursor-pointer"
                  onClick={() => {
                    setcasinogames(true);
                    setcasinocards(false);
                  }}
                />
              ))}
            </>
          )}
        </div>{" "}
        {showcasinogames && (
          <>
            <div className="flex justify-center items-start pt-4">
              <div className="flex flex-col items-center gap-4 w-full max-w-md">
                <input
                  type="text"
                  placeholder="name"
                  className="bg-neutral-900 p-2 w-full rounded"
                />
                <button
                  onClick={() => {
                    setcasinogames(false);
                    setcasinocards(true);
                  }}
                  className="border border-yellow-400 text-yellow-400 rounded-lg px-6 py-2 hover:text-black hover:bg-yellow-400 cursor-pointer"
                >
                  뒤로가기
                </button>
              </div>
            </div>{" "}
            <div className="grid sm:grid-cols-6 grid-cols-3 gap-2 pt-2 justify-center">
              put api here
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
}
