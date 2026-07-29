"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";

const ACCESS_KEY_1 = "YOUR_FIRST_WEB3FORMS_ACCESS_KEY";
const ACCESS_KEY_2 = "YOUR_SECOND_WEB3FORMS_ACCESS_KEY";

export default function Contact() {
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
      email: formEl.email.value,
      message: formEl.message.value,
      subject: "New Enquiry - OM's Bath Fittings",
    };

    try {
      const submitToKey = (accessKey) =>
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...payload, access_key: accessKey }),
        }).then((res) => res.json());

      const [res1, res2] = await Promise.all([
        submitToKey(ACCESS_KEY_1),
        submitToKey(ACCESS_KEY_2),
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
    <section id="contact" className="bg-[#f8f6f2] py-12 sm:py-14">
      <div className="max-w-[1000px] mx-auto px-6 sm:px-10">

        {/* heading */}
        <div className="text-center mb-14 sm:mb-20 lg:mb-24">
          <p className="text-[#b99658] uppercase tracking-[4px] sm:tracking-[8px] text-xs sm:text-sm mb-4 sm:mb-6">
            Contact
          </p>

          <h2 className="font-heading text-black text-4xl sm:text-5xl lg:text-[70px] leading-none mb-4 sm:mb-5">
            Begin Your
            <span className="block italic text-[#b99658]">
              Design Journey
            </span>
          </h2>

          <p className="text-zinc-500 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 max-w-3xl mx-auto">
            Whether you're designing a luxury residence,
            hospitality project, or commercial space,
            our specialists are here to create
            something extraordinary.
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12">

          <div>
            <label className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm block mb-3 sm:mb-5">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="
                w-full
                bg-transparent
                border-b
                border-zinc-300
                pb-3
                sm:pb-5
                text-base
                sm:text-xl
                outline-none
                focus:border-[#b99658]
                transition
              "
            />
          </div>

          <div>
            <label className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm block mb-3 sm:mb-5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="
                w-full
                bg-transparent
                border-b
                border-zinc-300
                pb-3
                sm:pb-5
                text-base
                sm:text-xl
                outline-none
                focus:border-[#b99658]
                transition
              "
            />
          </div>

          <div>
            <label className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm block mb-3 sm:mb-5">
              Your Project
            </label>
            <textarea
              name="message"
              rows={3}
              required
              placeholder="Tell us about your project"
              className="
                w-full
                bg-transparent
                border-b
                border-zinc-300
                pb-3
                text-base
                sm:text-xl
                resize-none
                outline-none
                focus:border-[#b99658]
                transition
              "
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* button */}
          <div className="pt-3 sm:pt-5 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="
                group
                flex
                items-center
                gap-3
                sm:gap-5
                border
                border-black
                px-6
                sm:px-8
                text-xs
                sm:text-sm
                py-4
                sm:py-5
                uppercase
                tracking-[2px]
                sm:tracking-[4px]
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? (
                <>
                  Sending
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Book Consultation
                  <ArrowRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-2"
                  />
                </>
              )}
            </button>
          </div>
        </form>

        {/* footer note */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="font-heading italic text-2xl sm:text-3xl lg:text-4xl text-[#b99658]">
            "Luxury lives in the details."
          </p>
        </div>

      </div>
    </section>
  );
}