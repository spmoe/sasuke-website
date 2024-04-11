import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ItemProps {
  thumb: string;
  role: string;
  description: string;
  stack: string;
  url: string;
  hoverThumb?: string;
  isStar?: boolean;
}

const ExperienceItem: FC<ItemProps> = ({
  thumb,
  role,
  hoverThumb,
  description,
  stack,
  url,
  isStar,
}) => {
  const stacks = stack.split(",");
  return (
    <div className="group shadow-item dark:shadow-none rounded-xl flex flex-col w-full !p-0 relative border border-transparent dark:border-gray-700">
      {isStar && (
        <div className="absolute -left-4 -top-4 z-50 w-12 h-12 -rotate-12">
          <Image
            src="/star.png"
            sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
            fill
            alt=""
          />
        </div>
      )}
      {hoverThumb ? (
        <>
          <div className="relative rounded-t-[12px] w-full h-[160px] block group-hover:hidden overflow-hidden">
            <Image
              src={thumb}
              fill
              sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
              className="object-cover"
              alt=""
            />
          </div>
          <div className="hidden group-hover:block rounded-t-[12px] w-full h-[160px] object-cover relative overflow-hidden">
            <Image
              src={hoverThumb}
              fill
              className="object-cover"
              sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
              alt=""
            />
          </div>
        </>
      ) : (
        <div className="rounded-t-[12px] w-full h-[160px] relative overflow-hidden">
          <Image
            src={thumb}
            fill
            sizes="(max-width: 768px) auto, (max-width: 1200px) auto"
            className="object-cover"
            alt=""
          />
        </div>
      )}
      <div className="p-4">
        <p className="font-bold text-[#333] dark:text-gray-200 text-[16px] my-1">
          {role}
        </p>
        <Link href={url} rel="noreferrer" target="_blank">
          <div className="text-[14px] text-purple-800 dark:text-purple-500 font-semibold cursor-pointer">
            {url}
          </div>
        </Link>
        <p className="text-xs md:text-[14px] leading-[1.5]">{description}</p>
        <ul
          className="flex flex-wrap gap-3 mt-4 font-bold list-disc text-[#333] dark:text-gray-400
          "
        >
          {stacks.map((item, key) => (
            <li key={key} className="text-[12px] ml-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
