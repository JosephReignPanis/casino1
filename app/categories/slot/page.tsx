"use client";
import { SLOTIMAGES } from "@/const/images";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showslotgames, setslotgames] = useState(false);
  const [showsslotcards, setslotcards] = useState(true);

  return (
    <>
      <Image
        src={"/slot/visual_slot.png"}
        width={500}
        height={300}
        alt="auto"
        className="object-fill w-full h-auto"
      />
      <div className="grid sm:grid-cols-6 grid-cols-3 gap-2 pt-2 justify-center">
        {showsslotcards &&
          SLOTIMAGES.map((items, index) => (
            <Image
              key={index}
              src={`/slot/${items}`}
              width={200}
              height={200}
              alt="banner"
              className="object-fill w-full h-auto"
              onClick={() => {
                setslotgames(true);
                setslotcards(false);
              }}
            />
          ))}
      </div>
      {showslotgames && (
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
                  setslotgames(false);
                  setslotcards(true);
                }}
                className="border border-yellow-400 text-yellow-400 rounded-lg px-6 py-2 hover:text-black hover:bg-yellow-400 cursor-pointer"
              >
                뒤로가기
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-6 grid-cols-3 gap-2 pt-2 justify-center">
            put api here
          </div>
        </>
      )}
    </>
  );
}
