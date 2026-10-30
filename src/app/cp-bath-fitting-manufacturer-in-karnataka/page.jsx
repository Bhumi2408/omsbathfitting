import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Download } from "lucide-react";
import { BUSINESS } from "../data/businessdata";
import BlogContent from "../components/blog/BlogContent";
import BlogTOC from "../components/blog/BlogTOC";
import BlogFAQ from "../components/blog/BlogFAQ";

const PATH = "/cp-bath-fitting-manufacturer-in-karnataka";
const PAGE_URL = `${BUSINESS.siteUrl}${PATH}`;
const H1 = "CP Bath Fitting Manufacturer in Karnataka - OM’s Bath";
const META_TITLE = "Best CP Bath Fitting Manufacturer in Karnataka | OM's Bath";
const META_DESCRIPTION =
  "OM's Bath is an ISO-certified CP Bath Fitting Manufacturer in Karnataka, supplying dealers and builders in Bengaluru and beyond. 500+ products. Enquire now.";
const IMAGE = "/karnataka.jpeg";
const IMAGE_ALT = "CP Bath Fitting Manufacturer in Karnataka - OM's Bath";

export const metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "CP Bath Fitting Manufacturer in Karnataka",
    "CP Bath Fitting Manufacturer In bengaluru",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PATH,
    type: "website",
    images: [{ url: IMAGE, width: 1600, height: 899, alt: IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [IMAGE],
  },
};

// Page copy — kept word for word from the client brief.
// **bold** and [text](/link) are rendered by RichText.
const content = [
  {
    type: "callout",
    title: "Quick answer",
    text: "**OM's Bath is a [CP Bath Fitting Manufacturer in Karnataka](/#contact) buyers can source from directly.** It is an ISO 9001:2015 certified brand with 20+ years of experience, 500+ chrome-plated brass products across 20+ collections, and its own factory in New Delhi. OM's Bath supplies dealers, builders and contractors in Bengaluru and across Karnataka.",
  },

  { type: "h2", id: "what-is-a-cp-bath-fitting", text: "What is a CP bath fitting?" },
  {
    type: "p",
    text: "A CP bath fitting is a tap, mixer, valve or shower made of brass and coated with chrome plating. \"CP\" stands for Chrome Plated. The chrome layer gives a shiny finish, resists rust and makes the fitting easy to clean, which is why CP fittings are the standard choice in most Indian homes and buildings.",
  },

  { type: "h3", text: "OM's Bath at a glance" },
  {
    type: "table",
    head: ["Fact", "Detail"],
    rows: [
      ["Company", "OM's Bath"],
      ["Business type", "Manufacturer of CP (chrome-plated) bath fittings — not a trader"],
      ["Factory", "G-3/17, Mangol Puri Industrial Area, New Delhi – 110083"],
      ["Certification", "ISO 9001:2015"],
      ["Experience", "20+ years"],
      ["Product range", "500+ products across 20+ collections"],
      [
        "Main products",
        "Bib cocks, angle valves, pillar cocks, sink & wall mixers, basin mixers, health faucets, showers, bath sets",
      ],
      [
        "Serves in Karnataka",
        "Bengaluru, Mysuru, Hubballi-Dharwad, Mangaluru, Belagavi and all districts",
      ],
      ["Buyers", "Dealers, distributors, builders, contractors, architects, hotels"],
      ["Contact", "+91 98116 12238 · omsbath@gmail.com"],
    ],
  },

  { type: "h2", id: "who-is-oms-bath", text: "Who is OM's Bath?" },
  {
    type: "p",
    text: "OM's Bath is an Indian manufacturer of chrome-plated (CP) brass bathroom fittings, based in New Delhi, with over 20 years in the business. The company makes taps, mixers, showers and bath accessories in its own ISO 9001:2015 certified facility and sells directly to dealers and builders across India, including Karnataka. Dealers and builders can choose OM's Bath as their CP Bath Fitting Manufacturer in Karnataka because every order comes straight from its own factory.",
  },

  {
    type: "h2",
    id: "why-choose-oms-bath",
    text: "Why Choose OM's Bath as Your CP Bath Fitting Manufacturer in Karnataka?",
  },
  {
    type: "p",
    text: "OM's Bath offers direct supply from its own factory, ISO-certified quality and a complete bathroom range from one supplier. For Karnataka dealers and builders, this means consistent finish across bulk orders, reliable supply and a single point of contact.",
  },
  {
    type: "ul",
    items: [
      "**Genuine manufacturer:** every product is made in OM's Bath's own factory, so quality is controlled at every step.",
      "**ISO 9001:2015 certified:** production follows documented quality standards.",
      "**500+ products, 20+ collections:** budget project ranges to premium designs like Quba, Aria and Opal.",
      "**Bulk and project supply:** apartments, villas, hotels and commercial buildings.",
    ],
  },

  {
    type: "h2",
    id: "cp-bath-fitting-manufacturer-in-bengaluru",
    text: "Which is a good CP Bath Fitting Manufacturer in Bengaluru for dealers and builders?",
  },
  {
    type: "p",
    text: "For buyers looking for a CP Bath Fitting Manufacturer in Bengaluru, OM's Bath is a strong option because it supplies the city directly from its own factory. Bengaluru dealers and builders get 500+ products, ISO-certified quality and one team for quotes, dispatch and after-sales.",
  },
  {
    type: "p",
    text: "OM's Bath can supply sanitary dealers in markets like Chickpet and Kalasipalya, as well as builders and contractors in fast-growing areas such as Whitefield, Sarjapur Road, Electronic City, Hebbal and Yelahanka.",
  },

  {
    type: "h2",
    id: "cp-bath-fittings-for-bengaluru-hard-water",
    text: "Are CP bath fittings good for Bengaluru's hard water?",
  },
  {
    type: "p",
    text: "Yes — good-quality CP fittings with a brass body and ceramic disc cartridges handle hard water well. Many Bengaluru homes use borewell or tanker water, which is often hard and high in dissolved solids, especially in areas like Whitefield, Sarjapur and Varthur. This water leaves white scale and can damage cheap zinc or plastic taps quickly. That is why choosing the right CP Bath Fitting Manufacturer in Bengaluru matters as much as choosing the right design.",
  },
  { type: "p", text: "OM's Bath fittings are built for these conditions:" },
  {
    type: "ul",
    items: [
      "**Brass body** that does not rust like iron or zinc alloy.",
      "**Ceramic disc cartridges** in mixers that stay smooth with mineral-rich water.",
      "**Durable chrome plating** that is easy to wipe clean of scale marks.",
    ],
  },
  {
    type: "p",
    text: "Tip: wipe fittings with a soft cloth after use and clean the aerator every few months.",
  },

  {
    type: "h2",
    id: "manufacturer-vs-trader",
    text: "Manufacturer vs trader: which is better for buying CP fittings?",
  },
  {
    type: "p",
    text: "Buying from a manufacturer is usually better for dealers and builders, because quality, range and supply are controlled at the source.",
  },
  {
    type: "table",
    head: ["Factor", "Buying from a manufacturer (OM's Bath)", "Buying from a trader"],
    rows: [
      ["Quality control", "Controlled in own factory, ISO 9001:2015", "Depends on trader's sources"],
      ["Range", "500+ products from one catalogue", "Mixed brands, uneven stock"],
      ["Bulk orders", "Produced and supplied in volume", "Limited by available stock"],
      ["After-sales", "Direct from the maker", "Passed back to supplier"],
    ],
  },

  {
    type: "h2",
    id: "cp-bath-fittings-supplied-in-karnataka",
    text: "What CP bath fittings does OM's Bath supply in Karnataka?",
  },
  {
    type: "p",
    text: "OM's Bath supplies the complete range of CP bathroom and kitchen fittings in Karnataka:",
  },
  {
    type: "table",
    head: ["Category", "Products", "Collection link"],
    rows: [
      ["Faucets & taps", "Bib cocks, angle valves, pillar cocks, swan necks", "[All Collections](/collections)"],
      ["Kitchen & sink", "Sink cocks, sink mixers, wall-mounted sink mixers", "[Quba](/quba)"],
      ["Mixers", "Wall mixers, single-lever basin mixers, diverters", "[Neo](/neo)"],
      ["Showers", "Rain showers 6\"x6\" to 16\"x16\", hand and overhead showers", "[Showers](/showers)"],
      ["Health faucets", "Health faucets with hose and hook", "[Health Faucets](/health-faucets)"],
      ["Bath accessories", "Towel racks, robe hooks, soap dishes, tumbler holders", "[Bath Sets](/bath-set)"],
      ["Concealed & essentials", "Concealed bodies, spares, connections", "[Essential Items](/essential-item)"],
    ],
  },

  {
    type: "h2",
    id: "cities-served-in-karnataka",
    text: "Which cities in Karnataka does OM's Bath serve?",
  },
  {
    type: "p",
    text: "OM's Bath serves all of Karnataka, including Bengaluru, Mysuru, Hubballi-Dharwad, Mangaluru, Belagavi, Kalaburagi, Davanagere, Ballari, Shivamogga, Tumakuru, Udupi and Hassan. Wherever your store or project is located, OM's Bath can be your CP Bath Fitting Manufacturer in Karnataka, with dispatch planned for your city.",
  },

  {
    type: "h2",
    id: "how-to-order-in-karnataka",
    text: "How do I order CP bath fittings from OM's Bath in Karnataka?",
  },
  {
    type: "p",
    text: "To order, send your product list to OM's Bath on WhatsApp, get a quotation, confirm payment and receive dispatch from Delhi. If you need a CP Bath Fitting Manufacturer in Bengaluru for a running site, the same five steps apply.",
  },
  {
    type: "ol",
    items: [
      "**Send your requirement** on WhatsApp — product codes, quantities and city.",
      "**Get a quotation** for your requirement.",
      "**Confirm the order** and payment terms with the OM's Bath team.",
      "**After-sales support** for product queries.",
    ],
  },

  {
    type: "h2",
    id: "become-a-dealer-in-karnataka",
    text: "How can I become an OM's Bath dealer in Karnataka?",
  },
  {
    type: "p",
    text: "To become a dealer, fill the form on the OM's Bath [Become a Dealer](/become-a-dealer) page or message the team on WhatsApp. OM's Bath is expanding its dealer and distributor network across Karnataka.",
  },

  {
    type: "cta",
    id: "partner-with-oms-bath",
    title: "Partner With a Trusted CP Bath Fitting Manufacturer in Karnataka",
    text: "Whether you need a CP Bath Fitting Manufacturer in Bengaluru for an apartment project or a long-term supplier for your store in Mysuru or Hubballi, OM's Bath is ready to help. Share your product list today to get the catalogue, product details and delivery timelines.",
  },
];

const faqs = [
  {
    q: "Which is a reliable CP Bath Fitting Manufacturer in Karnataka for dealers and builders?",
    a: "OM's Bath is an ISO 9001:2015 certified CP bath fitting manufacturer with 20+ years of experience and 500+ products. We manufacture at our own factory in New Delhi and supply dealers, builders and contractors across Karnataka.",
  },
  {
    q: "Is there a CP Bath Fitting Manufacturer in Bengaluru that supplies directly from its own factory?",
    a: "Yes. OM's Bath supplies dealers and builders in Bengaluru directly from its own factory, so there is no trader or middleman in between. Share your product list on WhatsApp to get a quotation.",
  },
  {
    q: "Where is OM's Bath located?",
    a: "OM's Bath's factory is at G-3/17, Mangol Puri Industrial Area, New Delhi – 110083. From there, OM's Bath supplies CP bath fittings to dealers, builders and contractors across India, including Bengaluru and all districts of Karnataka.",
  },
  {
    q: "Are your fittings suitable for hard borewell water in Bengaluru?",
    a: "Yes. Our fittings use brass bodies, ceramic disc cartridges in mixers and durable chrome plating, which handle mineral-rich water better than zinc or plastic fittings. Regular wiping and aerator cleaning keeps them looking new.",
  },
  {
    q: "How long does OM's Bath take to deliver to Bengaluru?",
    a: "OM's Bath dispatches orders from its Delhi factory to Bengaluru and all Karnataka cities. Delivery time depends on the location and transporter, and the OM's Bath team shares the expected timeline along with the quotation.",
  },
  {
    q: "What is the minimum order for OM's Bath dealers?",
    a: "The minimum order depends on the products and quantities required. Dealers, builders and project buyers can share their full requirement with OM's Bath on WhatsApp, and the team will confirm the order details.",
  },
  {
    q: "Why should builders buy from a CP Bath Fitting Manufacturer in Karnataka instead of a trader?",
    a: "A manufacturer controls quality and production at the source, so builders get consistent finish across hundreds of pieces and reliable bulk supply. OM's Bath regularly supplies bulk taps, mixers, showers and bath accessories for residential and commercial projects.",
  },
  {
    q: "How do I get OM's Bath's catalogue?",
    a: "Download the OM's Bath catalogue from omsbath.com or message +91 88603 49883 on WhatsApp with your city and business type. The team will get back to you with the details.",
  },
];

function buildSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: META_TITLE,
        description: META_DESCRIPTION,
        primaryImageOfPage: `${BUSINESS.siteUrl}${IMAGE}`,
        about: { "@id": `${BUSINESS.siteUrl}/#business` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "CP Bath Fitting Manufacturer in Karnataka",
        provider: { "@id": `${BUSINESS.siteUrl}/#business`, name: BUSINESS.name },
        areaServed: [
          { "@type": "State", name: "Karnataka" },
          ...[
            "Bengaluru",
            "Mysuru",
            "Hubballi-Dharwad",
            "Mangaluru",
            "Belagavi",
            "Kalaburagi",
            "Davanagere",
            "Ballari",
            "Shivamogga",
            "Tumakuru",
            "Udupi",
            "Hassan",
          ].map((name) => ({ "@type": "City", name })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BUSINESS.siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "CP Bath Fitting Manufacturer in Karnataka", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export default function KarnatakaPage() {
  const headings = content
    .filter((block) => block.type === "h2" || block.type === "cta")
    .map((block) => ({
      id: block.id,
      text: block.type === "cta" ? block.title : block.text,
    }))
    .concat({ id: "faqs", text: "FAQs" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />

      {/* HERO */}
      <section className="relative bg-black overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-40 sm:pb-56 lg:pb-72">
        <span className="absolute -top-10 -right-6 font-heading text-[180px] sm:text-[280px] lg:text-[380px] leading-none text-white/[0.025] select-none pointer-events-none">
          OM
        </span>

        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10">
          <nav aria-label="Breadcrumb" className="mb-8 sm:mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500">
              <li>
                <Link href="/" className="hover:text-[#b99658] transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight size={14} />
              <li className="text-zinc-300">Karnataka</li>
            </ol>
          </nav>

          <h1 className="font-heading text-white text-4xl sm:text-5xl lg:text-[64px] leading-[1.08] mb-8 max-w-4xl">
            {H1}
          </h1>

          <div className="w-16 sm:w-24 h-[1px] bg-[#b99658]" />
        </div>
      </section>

      {/* BANNER IMAGE */}
      <div className="bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-10 -mt-32 sm:-mt-44 lg:-mt-60 relative">
          <div className="relative aspect-[1600/899] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] ring-1 ring-[#b99658]/30">
            <Image
              src={IMAGE}
              alt={IMAGE_ALT}
              fill
              priority
              sizes="(min-width: 1200px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* CONTENT + SIDEBAR */}
      <section className="bg-white pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-12 xl:gap-20">
          <article className="min-w-0">
            <BlogContent content={content} />

            <div id="faqs" className="scroll-mt-28 mt-16 sm:mt-20">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[40px] leading-tight text-black mb-8">
                FAQs
              </h2>
              <BlogFAQ faqs={faqs} prefix="Q" />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8 pt-8">
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
    </>
  );
}
