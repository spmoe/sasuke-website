import { FC } from "react";
import Image from "next/image";
import { SectionTitle } from "./StyledComponent";

const Education: FC = () => {
  return (
    <div id="education" className="container mx-auto mt-20">
      <SectionTitle>education</SectionTitle>
      <div className="flex pt-10 pb-20">
        <div className="flex-row items-center flex w-full shadow-item dark:shadow-none bg-white dark:bg-transparent border border-transparent dark:border-gray-600 rounded-xl overflow-hidden">
          <Image src="/e1.jpg" alt="" width={170} height={170} />
          <div className="ml-4 w-[calc(100%-110px)]">
            <p className="fromto highlight">2010 - 2014</p>
            <p className="qualification">
              Master of Computer Application (MCA)
            </p>
            <p className="uni">
              <span className="highlight">
                Tokyo University of Information Sciences
              </span>{" "}
              Tokyo, Japan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
