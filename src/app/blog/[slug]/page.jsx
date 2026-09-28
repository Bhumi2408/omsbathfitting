import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Calendar,
  ChevronRight,
  Clock,
  Download,
  PenLine,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { blogs, getBlog, readingTime, formatDate } from "../../data/blogs";
import { BUSINESS } from "../../data/businessdata";
import BlogContent from "../../components/blog/BlogContent";
import BlogTOC from "../../components/blog/BlogTOC";
import BlogFAQ from "../../components/blog/BlogFAQ";
import ReadingProgress from "../../components/blog/ReadingProgress";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return { title: "Not Found" };

  const url = `/blog/${blog.slug}`;
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      authors: [blog.author],
      images: [{ url: blog.image, width: 1672, height: 941, alt: blog.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}

// FAQ answers and headings come from the same blog object that renders
// the page, so the schema can never drift from the visible content.
function buildSchema(blog) {
  const url = `${BUSINESS.siteUrl}/blog/${blog.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: blog.title,
        description: blog.metaDescription,
        image: `${BUSINESS.siteUrl}${blog.image}`,
        datePublished: blog.publishedAt,
        dateModified: blog.updatedAt,
        author: { "@type": "Organization", name: BUSINESS.name, url: BUSINESS.siteUrl },
        publisher: {
          "@type": "Organization",
          name: BUSINESS.name,
          logo: { "@type": "ImageObject", url: BUSINESS.logo },
        },
        mainEntityOfPage: url,
        keywords: blog.keywords.join(", "),
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BUSINESS.siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: blog.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: blog.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

function ShareLinks({ blog }) {
  const url = encodeURIComponent(`${BUSINESS.siteUrl}/blog/${blog.slug}`);
  const text = encodeURIComponent(blog.title);
  const links = [
    { icon: faWhatsapp, label: "WhatsApp", href: `https://wa.me/?text=${text}%20${url}` },
    { icon: faFacebookF, label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
    { icon: faLinkedinIn, label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { icon: faXTwitter, label: "X", href: `https://twitter.com/intent/tweet?url=${url}&text=${text}` },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${link.label}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 hover:bg-[#b99658] hover:border-[#b99658] hover:text-black transition-colors"
        >
          <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const headings = blog.content
    .filter((block) => block.type === "h2")
    .map(({ id, text }) => ({ id, text }))
    .concat({ id: "faqs", text: "Frequently Asked Questions (FAQs)" });

  const otherPosts = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(blog)) }}
      />
      <ReadingProgress />

      {/* HERO */}
      <section className="relative bg-black overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-40 sm:pb-56 lg:pb-72">
        <span className="absolute -top-10 -right-6 font-heading text-[180px] sm:text-[280px] lg:text-[380px] leading-none text-white/[0.025] select-none pointer-events-none">
          OM
        </span>

        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500">
              <li>
                <Link href="/" className="hover:text-[#b99658] transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} />
              <li>
                <Link href="/blog" className="hover:text-[#b99658] transition-colors">
                  Blog
                </Link>
              </li>
              <ChevronRight size={14} />
              <li className="text-zinc-300 line-clamp-1">{blog.category}</li>
            </ol>
          </nav>

          <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm mb-5">
            {blog.category}
          </p>

          <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-[64px] leading-[1.08] mb-8 max-w-4xl">
            {blog.title}
          </h1>

          <div className="w-16 sm:w-24 h-[1px] bg-[#b99658] mb-8" />

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-zinc-400">
            <span className="flex items-center gap-2">
              <PenLine size={15} className="text-[#b99658]" />
              {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={15} className="text-[#b99658]" />
              <time dateTime={blog.publishedAt}>{formatDate(blog.publishedAt)}</time>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={15} className="text-[#b99658]" />
              {readingTime(blog)} min read
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-10 -mt-32 sm:-mt-44 lg:-mt-60 relative">
          <div className="relative aspect-[1672/941] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] ring-1 ring-[#b99658]/30">
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              fill
              priority
              sizes="(min-width: 1200px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ARTICLE + SIDEBAR */}
      <section className="bg-white pt-14 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-12 xl:gap-20">
          <article className="min-w-0">
            <BlogContent content={blog.content} />

            {/* FAQs */}
            <div id="faqs" className="scroll-mt-28 mt-16 sm:mt-20">
              <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm mb-4">
                FAQs
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] leading-tight text-black mb-8">
                Frequently Asked{" "}
                <span className="text-[#b99658] italic">Questions (FAQs)</span>
              </h2>
              <BlogFAQ faqs={blog.faqs} />
            </div>

            {/* Share */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-zinc-200 pt-8">
              <p className="uppercase tracking-[3px] text-xs text-zinc-500">
                Share this article
              </p>
              <ShareLinks blog={blog} />
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <BlogTOC headings={headings} />

              <div className="relative bg-black rounded-2xl p-7 overflow-hidden">
                <span className="absolute -bottom-8 -right-2 font-heading text-[120px] leading-none text-white/[0.04] select-none pointer-events-none">
                  OM
                </span>
                <p className="text-[#b99658] uppercase tracking-[3px] text-[11px] mb-3 relative">
                  For Dealers &amp; Builders
                </p>
                <p className="font-heading text-white text-2xl leading-tight mb-5 relative">
                  Partner with a genuine manufacturer.
                </p>
                <Link
                  href="/become-a-dealer"
                  className="group relative inline-flex items-center gap-2 bg-[#b99658] text-black uppercase tracking-[2px] text-xs px-5 py-3 hover:bg-white transition-colors"
                >
                  Become a Dealer
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="/catalogue.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-4 flex items-center gap-2 text-zinc-400 text-sm hover:text-[#b99658] transition-colors"
                >
                  <Download size={15} />
                  Download Catalogue
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#f8f6f2] py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {otherPosts.length > 0 ? (
            <>
              <h2 className="font-heading text-3xl sm:text-4xl mb-8">
                Keep <span className="text-[#b99658] italic">Reading</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image src={post.image} alt={post.imageAlt} fill sizes="400px" className="object-cover" />
                    </div>
                    <p className="font-heading text-xl p-6 group-hover:text-[#9a7a3f] transition-colors">
                      {post.title}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm mb-4">
                  Explore The Range
                </p>
                <h2 className="font-heading text-3xl sm:text-5xl leading-tight max-w-2xl">
                  500+ products across{" "}
                  <span className="text-[#b99658] italic">20+ collections.</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collections"
                  className="group inline-flex items-center gap-3 border border-[#b99658] px-7 py-4 text-[#9a7a3f] uppercase tracking-[3px] text-xs hover:bg-[#b99658] hover:text-black transition-colors"
                >
                  View Collections
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 bg-black px-7 py-4 text-white uppercase tracking-[3px] text-xs hover:bg-[#b99658] hover:text-black transition-colors"
                >
                  All Articles
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
