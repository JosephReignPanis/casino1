"use client";
import Image from "next/image";
import { useState } from "react";

type subitem = {
  icon: string;
  value: string;
  menutext: string;
  layer2list: layer2item[];
};
type layer3item = {
  value3: string;
  menutext3: string;
};
type layer2item = {
  icon: string;
  value3: string;
  menutext3: string;
  layer3list: layer3item[];
};

type itemlist = {
  headerlist: subitem[];
};

export default function Tabs({ headerlist }: itemlist) {
  const [firstDropdownOpen, setfirstDropdownOpen] = useState<number | null>(
    null
  );
  const [secondDropdownOpen, setSecondDropdownOpen] = useState<number | null>(
    null
  );

  return (
    <>
      {headerlist.map((hl, i) => (
        <div key={i}>
          <div
            className="w-full flex flex-row justify-between gap-2 bg-neutral-900 align-middle items-center cursor-pointer p-2 hover:[box-shadow:inset_0_0_8px_#f59e0b] "
            onClick={() =>
              setfirstDropdownOpen((prev) => (prev === i ? null : i))
            }
          >
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={`/icon_sidebar/icon_${hl.icon}.png`}
                width={30}
                height={30}
                alt={"sa"}
              />
              <p>{hl.menutext}</p>
            </div>
            <p className="btn-gold-secondary-gradient py-1 px-4 rounded-full text-yellow-500 text-sm">
              {hl.value}
            </p>
          </div>

          {firstDropdownOpen === i && (
            <div>
              {hl.layer2list.map((ssl, j) => (
                <div key={j}>
                  <div
                    className="w-full flex flex-row justify-between px-5 bg-zinc-900/70 p-2 text-white hover:[box-shadow:inset_0_0_8px_#f99e0b]"
                    onClick={() =>
                      setSecondDropdownOpen((prev) => (prev === j ? null : j))
                    }
                  >
                    <div className="flex flex-row gap-2">
                      <Image src={ssl.icon} width={25} height={25} alt=" " />
                      <div className="cursor-pointer">{ssl.menutext3}</div>
                    </div>
                    <div>{ssl.value3}</div>
                  </div>

                  {secondDropdownOpen === j && (
                    <div>
                      {ssl.layer3list.map((tsl, k) => (
                        <div
                          key={k}
                          className="flex flex-row justify-between bg-zinc-900/50 p-2 text-white hover:[box-shadow:inset_0_0_8px_#f99e0b]"
                        >
                          <div className="cursor-pointer ml-5">
                            {tsl.menutext3}
                          </div>
                          <div className="mr-5">{tsl.value3}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
