import Image from "next/image";
import Header from "../components/Header";

export default function LolPage() {
  return (
    <div className="p-0">
      <Header />
      <div className="py-[200px] flex items-center justify-center flex-col">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Cute scammers who call themselves Sasuke! 🤣
        </h1>
        <ul className="mt-8">
          <li className="flex gap-3 md:gap-6 flex-col md:flex-row">
            <div className="">
              <Image
                src={"/scammers/james0128.png"}
                alt="James0128"
                width={320}
                height={320}
              />
            </div>
            <div className="">
              <h2 className="text-lg md:text-xl">Username: James0128</h2>
              <p className="text-sm">
                I saw him at CureCoin Discord Server <br />
                He say he is &apos;sasuke&apos; and seeking jobs
              </p>
            </div>
          </li>
          <li className="flex gap-3 md:gap-6 flex-col md:flex-row">
            <div className="">
              <Image
                src={"/scammers/sasuke.sol.png"}
                alt="James0128"
                width={320}
                height={320}
              />
            </div>
            <div className="">
              <h2 className="text-lg md:text-xl">Username: sasuke</h2>
              <p className="text-sm">
                I saw him at Ethena Discord Server <br />
                Do not be fooled by that person.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
