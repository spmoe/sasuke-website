import { CalendarIcon } from "./SvgIcons";

export default function EmploymentItem({ role, from, to, description, stack }) {
  return (
    <div className="shadow-item dark:shadow-none px-5 py-6 rounded-xl overflow-hidden border-0 dark:border dark:border-gray-600">
      <p className="text-sm flex items-center gap-1 font-bold text-gray-800 dark:text-gray-400">
        <CalendarIcon />
        <span>
          {from} - {to}
        </span>
      </p>
      <p className="font-bold text-gray-800 dark:text-gray-200 text-lg my-2">
        {role}
      </p>
      {description.map((item, key) => (
        <p className="py-1 text-xs md:text-sm" key={key}>
          - {item.title}
        </p>
      ))}
      <ul className="flex flex-wrap ml-5 gap-2 list-disc mt-2">
        {stack.map((item, key) => (
          <li key={key} className="text-xs pr-8 font-semibold">{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
