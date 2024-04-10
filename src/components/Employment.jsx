import EmploymentItem from "./EmploymentItem";
import { SectionTitle } from "./StyledComponent";

export default function Employment() {
  return (
    <div id="experience" className="container mx-auto">
      <div className="experience mt-20">
        <SectionTitle>Work experience</SectionTitle>
        <div className="grid gap-10 mt-10 mb-10">
          {emplyments.map((item, key) => (
            <EmploymentItem
              key={key}
              role={item.role}
              from={item.from}
              to={item.to}
              description={item.description}
              stack={item.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const emplyments = [
  {
    role: "Moduluc | Senior Frontend and Web3 Developer | Part-time Contract",
    from: "Feb 2021",
    to: "Jan 2024",
    description: [
      {
        title:
          "Engineered the frontend for corporate websites, including https://moduluc.com, https://airia.xyz, and https://aus.airia.xyz.",
      },
      {
        title:
          "Led the AiriA collection to a total volume of 16.4K SOL (approx. 600K USD) on MagicEden.",
      },
      {
        title: "Achieved an exceptional user base growth from 50K to 200M.",
      },
    ],
    stack: [
      { title: "React" },
      { title: "Next.js" },
      { title: "Web3" },
      { title: "MUI" },
      { title: "SCSS" },
      { title: "Tailwind CSS" },
    ],
  },
  {
    role: "Shredded Apes (SAGC) | Head Frontend Developer | Part-time",
    from: "Aug 2022",
    to: "Present",
    description: [
      {
        title:
          "Directed the development and management of SAGC company websites, shreddedapes.io, and shreddedapes.shop.",
      },
      {
        title:
          "Contributed to a cumulative SAGC collection value of 47K SOL (approx. 1.2M USD) on the marketplace.",
      },
      { title: "Facilitated expansion of $WHEY holders to 20K+." },
    ],
    stack: [
      { title: "Solana" },
      { title: "React" },
      { title: "Next.js" },
      { title: "Web3.js" },
      { title: "Redux" },
      { title: "SCSS" },
    ],
  },
  {
    role: "SolanaShuffle | Senior Full-stack Developer | Full-time",
    from: "Jan 2022",
    to: "April 2023",
    description: [
      {
        title:
          "Pioneered the development and management of the SolanaShuffle website (https://solanashuffle.com)",
      },
      {
        title:
          "Introduced captivating games such as jackpot, tower, and coin-flip, generating over 200K dollars in casino revenue.",
      },
      {
        title:
          "Created a user-centric website that enhanced the overall experience.",
      },
    ],
    stack: [
      { title: "GoLang" },
      { title: "React" },
      { title: "Redux" },
      { title: "GraphQL" },
      { title: "Tailwind CSS" },
      { title: "SCSS" },
    ],
  },
];
