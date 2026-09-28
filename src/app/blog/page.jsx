import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { blogs, readingTime, formatDate } from "../data/blogs";

export const metadata = {
  title: "Blog | Bathroom Fitting Guides & Tips | OM's Bath",
  description:
    "Buyer's guides, care tips and expert advice on CP bath fittings, showers and bathroom accessories from OM's Bath, a CP Bath Fitting Manufacturer in Delhi.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | OM's Bath",
    description:
      "Buyer's guides, care tips and expert advice on CP bath fittings from OM's Bath.",
    url: "/blog",
    type: "website",
  },
};

function PostMeta({ blog, light }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm ${
        light ? "text-zinc-400" : "text-zinc-500"
      }`}
    >
      <span className="flex items-center gap-2">
        <Calendar size={14} className="text-[#b99658]" />
        {formatDate(blog.publishedAt)}
      </span>
      <span className="flex items-center gap-2">
        <Clock size={14} className="text-[#b99658]" />
        {readingTime(blog)} min read
      </span>
    </div>
  );
}

export default function BlogPage() {
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );
  const [featured, ...rest] = sorted;

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[470px] overflow-hidden">
        <Image
          src="/home/bath2.png"
          fill
          priority
          alt="OM's Bath Blog"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1700px] mx-auto w-full px-6 sm:px-10 lg:px-12">
            <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-6">
              Journal
            </p>
            <h1 className="font-heading text-white text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.95] mb-4 sm:mb-6">
              Our Blog
            </h1>
            <p className="text-[#c8a86b] text-lg sm:text-2xl lg:text-3xl italic font-heading mb-6 sm:mb-8">
              Guides, ideas &amp; care tips for better bathrooms
            </p>
            <div className="w-16 sm:w-24 h-[1px] bg-[#b99658] mb-6 sm:mb-8" />
            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-7 sm:leading-9 max-w-2xl">
              Practical advice from two decades of manufacturing CP bath
              fittings — to help you choose, buy and care for your fittings
              with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f2] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-6 sm:px-10">
          {/* FEATURED POST */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_70px_-25px_rgba(185,150,88,0.45)] transition-shadow duration-500"
            >
              {/* Full-width image at its natural ratio — banner has text, so never crop it */}
              <div className="relative aspect-[1672/941] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 1300px) 1220px, 100vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-14 p-7 sm:p-10 lg:p-14">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="bg-black text-[#b99658] uppercase tracking-[3px] text-[11px] px-3 py-1.5">
                      Latest
                    </span>
                    <span className="text-[#b99658] uppercase tracking-[3px] text-[11px]">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] leading-tight text-black group-hover:text-[#9a7a3f] transition-colors">
                    {featured.title}
                  </h2>
                </div>

                <div className="flex flex-col justify-end lg:border-l lg:border-zinc-200 lg:pl-14">
                  <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-8 mb-6">
                    {featured.excerpt}
                  </p>
                  <PostMeta blog={featured} />

                  <span className="mt-8 inline-flex items-center gap-3 self-start border border-[#b99658] px-6 py-3.5 text-[#9a7a3f] uppercase tracking-[3px] text-xs group-hover:bg-[#b99658] group-hover:text-black transition-colors duration-300">
                    Read Article
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* MORE POSTS */}
          {rest.length > 0 && (
            <>
              <h2 className="font-heading text-3xl sm:text-4xl mt-16 sm:mt-20 mb-8 sm:mb-10">
                More <span className="text-[#b99658] italic">Articles</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {rest.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_-25px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="text-[#b99658] uppercase tracking-[3px] text-[11px] mb-3">
                        {blog.category}
                      </p>
                      <h3 className="font-heading text-2xl leading-snug text-black mb-3 group-hover:text-[#9a7a3f] transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-zinc-600 text-sm sm:text-base leading-6 mb-5 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <PostMeta blog={blog} />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
