import { EXPERIENCE } from "@/config";
import ExperienceItem from "./ExperienceItemCard";
import { SectionTitle } from "./StyledComponent";
import { useState } from "react";

export default function Experience() {
  const [tab, setTab] = useState("all");

  return (
    <div id="experience" className="container mx-auto mt-20">
      <div className="experience">
        <SectionTitle>My experience</SectionTitle>
        <p className="my-3 text-sm text-center font-semibold text-purple-800 dark:text-purple-500">
          There are recent projects.
        </p>
        <div className="flex flex-wrap justify-center my-5">
          {[
            "all",
            "web3",
            "game",
            "e-commerce",
            // "sass",
            // "education",
            "blog",
            "design",
          ].map((item, key) => (
            <button
              key={key}
              onClick={() => setTab(item)}
              className={`py-2 ${
                tab === item
                  ? "shadow-tab text-purple-800 border-purple-800 dark:text-purple-500 dark:border-purple-500"
                  : "border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300"
              } border-[1px] text-center font-bold rounded-md m-1 md:m-2 px-5 text-[12px] md:text-[14px] capitalize`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {EXPERIENCE.map(
            (item, key) =>
              (tab === "all" || item.category.indexOf(tab) !== -1) && (
                <ExperienceItem
                  key={key}
                  activeCat={tab}
                  thumb={item.thumb}
                  hoverThumb={item.hoverThumb}
                  role={item.role}
                  from={item.from}
                  to={item.to}
                  description={item.description}
                  stack={item.stack}
                  url={item.url}
                  isStar={item.isStar}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
