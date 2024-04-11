import { FC } from "react";
import SocialBox from "./SocialBox";

const Footer: FC = () => {
  return (
    <footer id="contact">
      <div className="mt-20 footer-content">
        <h2 className="mb-5 font-bold !text-gray-800 dark:!text-gray-500">
          Contact me
        </h2>
        <SocialBox />
      </div>
    </footer>
  );
};

export default Footer;
