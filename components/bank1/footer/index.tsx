import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-neutral-900 text-zinc-600 flex flex-col justify-center gap-5 items-center p-8 bg-test ">
        <Image
          src={"/f_partners.png"}
          width={1020}
          height={1000}
          alt="footer"
        />
        <p className="max-w-screen-md text-sm text-center px-4">
          Our website is a company operated under a formal license.You can enjoy
          a variety of games online, and we provide the best quality and best
          mobile version.It also offers high odds and introduces new events
          every day. Start enjoying thousands of games today, including sports
          games, live casino slot games, mini games, and virtual games!
        </p>
        <Image src={"/bank_logo.png"} width={250} height={100} alt="footer" />{" "}
      </footer>
    </>
  );
}
