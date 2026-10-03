import { Phone, Mail, Globe, MapPin } from "lucide-react";
import RichText from "./RichText";
import { BUSINESS } from "../../data/businessdata";

function Bullet() {
  return (
    <span className="mt-[11px] h-[7px] w-[7px] shrink-0 rotate-45 bg-[#b99658]" />
  );
}

function List({ items }) {
  return (
    <ul className="space-y-3 my-6">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-4 text-zinc-600 text-base sm:text-[17px] leading-7 sm:leading-8"
        >
          <Bullet />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

const contactItems = [
  {
    icon: Phone,
    label: BUSINESS.telephoneDisplay,
    href: "tel:+919811612238",
  },
  { icon: Mail, label: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: Globe, label: "www.omsbath.com", href: "https://www.omsbath.com" },
  {
    icon: MapPin,
    label: "G-3/17, Mangol Puri Industrial Plot, New Delhi - 110083",
    href: "https://www.google.com/maps/search/?api=1&query=G-3%2F17%2C+Mangol+Puri+Industrial+Plot%2C+New+Delhi+110083",
  },
];

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id}
          className="scroll-mt-28 font-heading text-3xl sm:text-4xl lg:text-[40px] leading-tight text-black mt-14 sm:mt-16 mb-5 flex items-baseline gap-4"
        >
          <span className="hidden sm:block h-[1px] w-10 shrink-0 bg-[#b99658] translate-y-[-10px]" />
          <span>{block.text}</span>
        </h2>
      );

    case "h3":
      return (
        <h3 className="font-heading font-semibold text-2xl sm:text-[28px] text-black mt-10 mb-3">
          {block.text}
        </h3>
      );

    case "p":
      return (
        <p className="text-zinc-600 text-base sm:text-[17px] leading-7 sm:leading-8 my-5">
          <RichText text={block.text} />
        </p>
      );

    case "ul":
      return <List items={block.items} />;

    case "facts":
      return (
        <div className="my-8 bg-[#f8f6f2] border border-[#ebe4d6] rounded-2xl overflow-hidden">
          <p className="bg-black text-[#b99658] uppercase tracking-[4px] text-xs sm:text-sm px-6 sm:px-8 py-4">
            {block.title}
          </p>
          {block.items.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 px-6 sm:px-8 py-4 ${
                i !== block.items.length - 1 ? "border-b border-[#ebe4d6]" : ""
              }`}
            >
              <p className="font-semibold text-zinc-900 text-sm sm:text-base">
                {row.label}:
              </p>
              <p className="text-zinc-600 text-sm sm:text-base leading-6 sm:leading-7">
                <RichText text={row.value} />
              </p>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="my-8 overflow-x-auto rounded-2xl border border-[#ebe4d6]">
          <table className="w-full min-w-[520px] text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-black">
                {block.head.map((cell, i) => (
                  <th
                    key={cell}
                    className={`px-5 sm:px-6 py-4 font-semibold uppercase tracking-[2px] text-xs sm:text-[13px] ${
                      i === 1 ? "text-[#b99658]" : "text-white"
                    }`}
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-t border-[#ebe4d6]">
                  {row.map((cell, i) => (
                    <td
                      key={cell}
                      className={`px-5 sm:px-6 py-4 leading-6 ${
                        i === 0
                          ? "font-semibold text-zinc-900"
                          : i === 1
                          ? "bg-[#f8f6f2] text-zinc-800"
                          : "text-zinc-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "steps":
      return (
        <ol className="my-8 space-y-5">
          {block.items.map((step, i) => (
            <li
              key={step.title}
              className="relative bg-white border border-[#ebe4d6] rounded-2xl p-6 sm:p-8 pl-20 sm:pl-24 hover:border-[#b99658] hover:shadow-[0_10px_40px_-15px_rgba(185,150,88,0.35)] transition-all duration-300"
            >
              <span className="absolute left-6 sm:left-8 top-5 sm:top-7 font-heading italic text-4xl sm:text-5xl text-[#b99658] leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-black mb-2">
                {i + 1}. {step.title}
              </h3>
              <p className="text-zinc-600 text-base sm:text-[17px] leading-7">
                <RichText text={step.text} />
              </p>
              {step.list && (
                <ul className="mt-4 space-y-2">
                  {step.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-zinc-600 text-base leading-7"
                    >
                      <Bullet />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      );

    case "contact":
      return (
        <div className="relative my-10 bg-black rounded-2xl overflow-hidden px-6 sm:px-10 py-10 sm:py-12">
          <span className="absolute -bottom-10 -right-2 font-heading text-[160px] leading-none text-white/[0.03] select-none pointer-events-none">
            OM
          </span>
          <p className="font-heading text-white text-3xl sm:text-4xl mb-3 relative">
            <strong className="font-semibold">{block.title}</strong>
          </p>
          <p className="text-zinc-400 text-base sm:text-lg leading-7 mb-8 relative">
            {block.text}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="group flex items-start gap-4 border border-[#2a2a2a] rounded-xl px-5 py-4 hover:border-[#b99658] transition-colors"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b99658]/10 text-[#b99658] group-hover:bg-[#b99658] group-hover:text-black transition-colors">
                  <Icon size={18} />
                </span>
                <span className="text-zinc-300 text-sm sm:text-base leading-6 pt-2 break-words min-w-0">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogContent({ content }) {
  return (
    <div>
      {content.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
