import Script from "next/script";
import {
  BUSINESS,
  WHY_CHOOSE,
  WORKS_WITH,
  PRODUCTS,
  SERVICE_AREAS,
} from "../data/businessdata";

// Quick Facts table rows are derived from BUSINESS itself —
// nothing here is retyped, it all points back to businessData.js.
const quickFacts = [
  { label: "Company", value: BUSINESS.name },
  { label: "Category", value: BUSINESS.legalCategory },
  { label: "Founded", value: BUSINESS.yearsInOperation },
  { label: "Certification", value: BUSINESS.certification },
  { label: "Product Range", value: BUSINESS.productRange },
  { label: "Manufacturing Location", value: BUSINESS.manufacturingLocation },
  {
    label: "Service Area",
    value: `${BUSINESS.serviceAreaCities.join(", ")}, and pan-India dealer supply`,
  },
  { label: "Works With", value: BUSINESS.worksWithSummary },
  { label: "Manufacturer or Trader", value: BUSINESS.manufacturerType },
  {
    label: "Contact",
    value: `${BUSINESS.telephoneDisplay}, ${BUSINESS.email}`,
  },
];

// Schema is built programmatically from BUSINESS — change a value once
// in businessData.js and both the visible page and this JSON-LD update.
function buildSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BUSINESS.siteUrl}/#business`,
        name: BUSINESS.name,
        alternateName: BUSINESS.alternateName,
        image: BUSINESS.logo,
        description: BUSINESS.description,
        address: {
          "@type": "PostalAddress",
          ...BUSINESS.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          ...BUSINESS.geo,
        },
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        url: `${BUSINESS.siteUrl}/`,
        priceRange: BUSINESS.priceRange,
        areaServed: BUSINESS.serviceAreaCities.map((city) => ({
          "@type": "City",
          name: city,
        })),
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: BUSINESS.certification,
        },
        sameAs: BUSINESS.socials,
      },
      {
        "@type": "WebPage",
        "@id": `${BUSINESS.pageUrl}#webpage`,
        url: BUSINESS.pageUrl,
        name: BUSINESS.metaTitle,
        description: BUSINESS.metaDescription,
        isPartOf: { "@id": `${BUSINESS.siteUrl}/#business` },
        about: { "@id": `${BUSINESS.siteUrl}/#business` },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BUSINESS.siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "CP Bath Fitting Manufacturer in Delhi",
            item: BUSINESS.pageUrl,
          },
        ],
      },
    ],
  };
}

export default function CPBathFittingContent() {
  const schema = buildSchema();

  return (
    <>
      <Script
        id="oms-bath-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

 

      {/* Who Is OM's Bath / Why Choose */}
      <section className="bg-white py-14 sm:py-20 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] mb-3">
            Who Is {BUSINESS.name} and Why Choose Them as a{" "}
            <span className="text-[#b99658] italic">
              {BUSINESS.legalCategory}?
            </span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-9 mb-8 sm:mb-10">
            {BUSINESS.name} is an{" "}
            <strong className="font-semibold text-zinc-800">
              {BUSINESS.certification} certified {BUSINESS.legalCategory}
            </strong>{" "}
            with over{" "}
            <strong className="font-semibold text-zinc-800">
              20 years of manufacturing experience
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-zinc-800">
              {BUSINESS.productRange}
            </strong>
            . Here is why buyers choose {BUSINESS.name}:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#b99658] pl-5 sm:pl-6"
              >
                <h3 className="font-heading text-xl sm:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-sm sm:text-base leading-6 sm:leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-[#f8f6f2] py-14 sm:py-20 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] mb-8 sm:mb-10">
            Quick Facts About{" "}
            <span className="text-[#b99658] italic">{BUSINESS.name}</span>
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {quickFacts.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-1 sm:gap-6 px-6 sm:px-10 py-4 sm:py-5 ${
                  i !== quickFacts.length - 1 ? "border-b border-zinc-200" : ""
                }`}
              >
                <p className="font-heading text-lg sm:text-xl text-[#b99658]">
                  {row.label}
                </p>
                <p className="text-zinc-600 text-sm sm:text-base leading-6 sm:leading-7">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is a CP Bath Fitting */}
      <section className="bg-white py-14 sm:py-20 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] mb-6">
            What Is a{" "}
            <span className="text-[#b99658] italic">CP Bath Fitting?</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-9">
            <strong className="font-semibold text-zinc-800">
              CP means Chrome Plated.
            </strong>{" "}
            A CP bath fitting is a bathroom or kitchen plumbing part — such
            as a tap, mixer, valve, or shower — made from brass and coated
            with a layer of chrome plating. The chrome layer makes the
            fitting shiny, resistant to rust, and long-lasting, which is why
            CP fittings are the standard choice in most Indian homes and
            commercial buildings.
          </p>
        </div>
      </section>

      {/* Who Does OM's Bath Work With */}
      <section className="bg-[#f8f6f2] py-14 sm:py-20 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] mb-3">
            Who Does{" "}
            <span className="text-[#b99658] italic">{BUSINESS.name}</span>{" "}
            Work With?
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-9 mb-8 sm:mb-10">
            {BUSINESS.name}, a full-scale {BUSINESS.legalCategory}, supplies
            the following types of buyers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {WORKS_WITH.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#b99658] pl-5 sm:pl-6"
              >
                <h3 className="font-heading text-xl sm:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 text-sm sm:text-base leading-6 sm:leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-14 sm:py-20 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] mb-3">
            What Products Does{" "}
            <span className="text-[#b99658] italic">{BUSINESS.name}</span>{" "}
            Manufacture?
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-9 mb-8 sm:mb-10">
            {BUSINESS.name} manufactures the following categories of CP
            (Chrome Plated) bathroom fittings:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {PRODUCTS.map((item) => (
              <div
                key={item.title}
                className="border-l-2 border-[#b99658] pl-5 sm:pl-6"
              >
                <h3 className="font-heading text-xl sm:text-2xl mb-2">
                  {item.title}
                </h3>
                {item.text && (
                  <p className="text-zinc-600 text-sm sm:text-base leading-6 sm:leading-7">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-9">
            All products are available in multiple sizes, designs, and
            finishes for residential, commercial, and hospitality use.
          </p>
        </div>
      </section>

      {/* Location & Service Area */}
      <section className="bg-[#f8f6f2] py-14 sm:py-20 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] mb-6">
            Where Is{" "}
            <span className="text-[#b99658] italic">{BUSINESS.name}</span>{" "}
            Located and Which Areas Does It Serve?
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-7 sm:leading-9 mb-8">
            {BUSINESS.name}&apos;s manufacturing unit is located at{" "}
            <strong className="font-semibold text-zinc-800">
              {BUSINESS.manufacturingLocation}
            </strong>
            . As a {BUSINESS.legalCategory} based in {BUSINESS.city}, the
            company supplies to:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="flex items-start gap-3 text-zinc-600 text-sm sm:text-base"
              >
                <span className="text-[#b99658] mt-1">●</span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

    </>
  );
}