import { FC } from "react";
import Link from "next/link";
import {
  DiscordHIcon,
  GithubIcon,
  TelegramHIcon,
  TwitterIcon,
} from "./SvgIcons";

const SocialBox: FC = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
{/*       <Link href="https://twitter.com/sasuke61_sol" passHref target="_blank">
        <div className="grid w-10 h-10 p-2 rounded-md place-content-center shadow-item dark:shadow-none dark:bg-white">
          <TwitterIcon />
        </div>
      </Link> */}
      <Link href="https://github.com/spmoe" passHref target="_blank">
        <div className="grid w-10 h-10 p-2 rounded-md place-content-center shadow-item dark:shadow-none dark:bg-white">
          <GithubIcon />
        </div>
      </Link>
      <Link
        href="https://discord.com/users/920984371425579029"
        passHref
        target="_blank"
      >
        <div className="grid w-10 h-10 p-2 rounded-md place-content-center shadow-item dark:shadow-none dark:bg-white">
          <DiscordHIcon />
        </div>
      </Link>
      <Link href="https://t.me/sasuke310" passHref target="_blank">
        <div className="grid w-10 h-10 p-2 rounded-md place-content-center shadow-item dark:shadow-none dark:bg-white">
          <TelegramHIcon />
        </div>
      </Link>
    </div>
  );
};

export default SocialBox;
