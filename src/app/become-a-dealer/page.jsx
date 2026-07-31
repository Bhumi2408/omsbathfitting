"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

const ACCESS_KEY_1 = "e0f2ad34-2eca-4d85-8063-ec6d51282ab8";
const ACCESS_KEY_2 = "05158624-434e-406f-b368-9e98fc30dcf9";

const professions = [
  "Dealer / Distributor",
  "Architect",
  "Interior Designer",
  "Contractor",
  "Plumber / Engineer",
  "Retailer",
  "Other",
];

export default function BecomeADealerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formEl = e.target;
    const payload = {
      name: formEl.name.value,
      company: formEl.company.value,
      email: formEl.email.value,
      phone: formEl.phone.value,
      city: formEl.city.value,
      state: formEl.state.value,
      profession: formEl.profession.value,
      message: formEl.message.value,
      subject: "New Dealer Enquiry - OM's Bath Fittings",
    };

    try {
      const submitToKey = (accessKey) =>
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...payload, access_key: accessKey }),
        }).then((res) => res.json());

      const [res1, res2] = await Promise.all([
        submitToKey("e0f2ad34-2eca-4d85-8063-ec6d51282ab8"),
        submitToKey("05158624-434e-406f-b368-9e98fc30dcf9"),
      ]);

      if (res1.success || res2.success) {
        formEl.reset();
        router.push("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <Image
          src="/banner/bonjobanner.png"
          fill
          priority
          alt="Become a Dealer"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1700px] mx-auto w-full px-6 sm:px-10 lg:px-12">
            <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-6">
              Partner With Us
            </p>

            <h1 className="font-heading text-white text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.95] mb-4 sm:mb-6">
              Become A Dealer
            </h1>

            <p className="text-[#c8a86b] text-lg sm:text-2xl lg:text-3xl italic font-heading mb-6 sm:mb-8">
              Grow With A Name Trusted For Two Decades
            </p>

            <div className="w-16 sm:w-24 h-[1px] bg-[#b99658] mb-6 sm:mb-8" />

            <p className="text-zinc-300 text-base sm:text-lg lg:text-xl leading-7 sm:leading-9 max-w-2xl">
              Join our growing network of dealers and distributors across
              India. Partner with an ISO 9001:2015 certified manufacturer
              of premium bathroom fittings.
            </p>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="bg-[#faf8f5] py-14 sm:py-20">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center px-4">
              <p className="font-heading text-[#b99658] text-4xl sm:text-5xl mb-3">
                20+
              </p>
              <p className="uppercase tracking-[2px] text-xs sm:text-sm text-zinc-600">
                Years Of Trust
              </p>
            </div>
            <div className="text-center px-4">
              <p className="font-heading text-[#b99658] text-4xl sm:text-5xl mb-3">
                500+
              </p>
              <p className="uppercase tracking-[2px] text-xs sm:text-sm text-zinc-600">
                Premium Products
              </p>
            </div>
            <div className="text-center px-4">
              <p className="font-heading text-[#b99658] text-4xl sm:text-5xl mb-3">
                ISO 9001:2015
              </p>
              <p className="uppercase tracking-[2px] text-xs sm:text-sm text-zinc-600">
                Certified Manufacturing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-black py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1000px] mx-auto px-6 sm:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-6">
              Dealer Registration
            </p>
            <h2 className="font-heading text-white text-4xl sm:text-5xl lg:text-6xl leading-none mb-4 sm:mb-5">
              Sign Up Now
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Fill in your details below and our team will get in touch
              with dealership and distribution opportunities in your area.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#141414] border border-[#2a2a2a] p-6 sm:p-10 lg:p-14"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8">
              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base outline-none focus:border-[#b99658] transition placeholder:text-white/80"
                />
              </div>

              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  Company / Firm Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base outline-none focus:border-[#b99658] transition placeholder:text-white/80"
                />
              </div>

              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base outline-none focus:border-[#b99658] transition placeholder:text-white/80"
                />
              </div>

              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your phone number"
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base outline-none focus:border-[#b99658] transition placeholder:text-white/80"
                />
              </div>

              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Your city"
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base outline-none focus:border-[#b99658] transition placeholder:text-white/80"
                />
              </div>

              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  required
                  placeholder="Your state"
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base outline-none focus:border-[#b99658] transition placeholder:text-white/80"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  You Are A
                </label>
                <select
                  name="profession"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base outline-none focus:border-[#b99658] transition [&>option]:bg-[#141414]"
                >
                  <option value="" disabled>
                    Select your profession
                  </option>
                  {professions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-[#b99658] uppercase tracking-[2px] text-xs block mb-3">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your business"
                  className="w-full bg-transparent border-b border-zinc-700 pb-3 text-white text-base resize-none outline-none focus:border-[#b99658] transition placeholder:text-white/80"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-6">{error}</p>
            )}

            <div className="pt-8 sm:pt-10 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  sm:gap-5
                  bg-[#b99658]
                  px-8
                  sm:px-10
                  py-4
                  sm:py-5
                  text-black
                  uppercase
                  tracking-[2px]
                  sm:tracking-[3px]
                  text-xs
                  sm:text-sm
                  hover:bg-[#c8a86b]
                  transition-all
                  duration-300
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                {loading ? (
                  <>
                    Submitting
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Sign Up Now
                    <ArrowRight
                      size={18}
                      className="transition duration-300 group-hover:translate-x-2"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#faf8f5] py-14 sm:py-20">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 text-center">
          <p className="text-[#b99658] uppercase tracking-[4px] text-xs sm:text-sm mb-4">
            Have Questions?
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Talk To Our Team Directly
          </h2>
          <Link
            href="/#contact"
            className="inline-block border border-[#b99658] px-8 py-4 text-[#b99658] uppercase tracking-[3px] text-sm hover:bg-[#b99658] hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}