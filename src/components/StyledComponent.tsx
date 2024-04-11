import { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const SectionTitle: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-[24px] md:text-[32px] text-center font-[800] text-gray-800 dark:text-gray-200 uppercase">
      {children}
    </h1>
  );
};
