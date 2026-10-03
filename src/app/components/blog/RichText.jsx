import Link from "next/link";

// Renders the tiny inline markup used in data/blogs.js:
//   **bold**  and  [text](href)  (bold may wrap a link)
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function SmartLink({ href, children }) {
  const className =
    "text-[#9a7a3f] underline decoration-[#b99658]/40 underline-offset-4 hover:decoration-[#b99658] hover:text-[#b99658] transition-colors";

  const isInternalPage = href.startsWith("/") && !href.endsWith(".pdf");
  if (isInternalPage) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  const opensNewTab = href.startsWith("http") || href.endsWith(".pdf");
  return (
    <a
      href={href}
      className={className}
      {...(opensNewTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

export default function RichText({ text }) {
  const parts = [];
  let last = 0;

  for (const match of text.matchAll(TOKEN)) {
    if (match.index > last) parts.push(text.slice(last, match.index));

    const key = match.index;
    if (match[1] !== undefined) {
      parts.push(
        <strong key={key} className="font-semibold text-zinc-900">
          <RichText text={match[1]} />
        </strong>
      );
    } else {
      parts.push(
        <SmartLink key={key} href={match[3]}>
          {match[2]}
        </SmartLink>
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
