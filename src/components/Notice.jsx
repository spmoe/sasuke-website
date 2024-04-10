import Link from "next/link";

export default function Notice() {
  return (
    <div className="px-10 py-5 border bg-red-100 text-black">
      <span className="text-[red] font-bold">Warning!! </span>There are scammers
      abusing my portfolio on Discord right now to get jobs.
      <br />
      <span className="underline">
        <Link href={"/lol"}>The scammer Discord portfolio is as follows:</Link>
      </span>
    </div>
  );
}
