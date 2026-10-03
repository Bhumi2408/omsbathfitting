"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, Phone, Mail, MapPin } from "lucide-react";

const ACCESS_KEY_1 = "e0f2ad34-2eca-4d85-8063-ec6d51282ab8";
const ACCESS_KEY_2 = "05158624-434e-406f-b368-9e98fc30dcf9";

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
      phone: formEl.phone.value,
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
    <section id="contact" className="bg-[#f8f6f2] py-14 sm:py-20 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* heading */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
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

        {/* split panel: info (dark) + form (light card) */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] mb-16 sm:mb-20">

          {/* LEFT (on desktop, first) - dark info panel */}
          <div className="bg-[#161616] px-8 py-12 sm:px-12 sm:py-16 lg:p-16 relative overflow-hidden order-1">
            {/* watermark */}
            <span
              className="
                absolute
                -bottom-10
                -right-6
                font-heading
                text-[160px]
                lg:text-[220px]
                leading-none
                text-white/[0.03]
                select-none
                pointer-events-none
              "
            >
              OM
            </span>

            <p className="relative text-[#b99658] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm mb-8 sm:mb-10">
              Get In Touch
            </p>

            <div className="relative flex flex-col gap-8 sm:gap-10">

              {/* phone - 3 numbers */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full border border-[#b99658]/40 flex items-center justify-center">
                  <Phone size={18} strokeWidth={1.5} className="text-[#b99658]" />
                </div>
                <div>
                  <p className="text-zinc-500 uppercase tracking-[2px] text-[11px] mb-3">
                    Call Us
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+919811612238"
                      className="text-white text-base sm:text-lg hover:text-[#b99658] transition"
                    >
                      +91 98116 12238
                    </a>
                    <a
                      href="tel:+919999110648"
                      className="text-white text-base sm:text-lg hover:text-[#b99658] transition"
                    >
                      +91 99991 10648
                    </a>
                    <a
                      href="tel:+918860349883"
                      className="text-white text-base sm:text-lg hover:text-[#b99658] transition"
                    >
                      +91 88603 49883
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#2a2a2a]" />

              {/* email */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full border border-[#b99658]/40 flex items-center justify-center">
                  <Mail size={18} strokeWidth={1.5} className="text-[#b99658]" />
                </div>
                <div>
                  <p className="text-zinc-500 uppercase tracking-[2px] text-[11px] mb-3">
                    Email Us
                  </p>
                  <a
                    href="mailto:omsbath@gmail.com"
                    className="text-white text-base sm:text-lg hover:text-[#b99658] transition break-all"
                  >
                    omsbath@gmail.com
                  </a>
                </div>
              </div>

              <div className="h-px bg-[#2a2a2a]" />

              {/* address */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full border border-[#b99658]/40 flex items-center justify-center">
                  <MapPin size={18} strokeWidth={1.5} className="text-[#b99658]" />
                </div>
                <div>
                  <p className="text-zinc-500 uppercase tracking-[2px] text-[11px] mb-3">
                    Office Address
                  </p>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    G-3/17, Mangol Puri, Industrial Plot,
                    <br />
                    New Delhi - 110083
                  </p>
                </div>
              </div>
            </div>

            <p className="relative font-heading italic text-xl sm:text-2xl text-[#b99658] mt-12 sm:mt-16">
              "Luxury lives in the details."
            </p>
          </div>

          {/* RIGHT (on desktop, second) - form card */}
          <div className="bg-white px-8 py-12 sm:px-12 sm:py-16 lg:p-16 order-2">
            <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8">

              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[3px] text-xs block mb-2 sm:mb-3">
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
                    text-base
                    sm:text-lg
                    outline-none
                    focus:border-[#b99658]
                    transition
                  "
                />
              </div>
                <div>
                  <label className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[3px] text-xs block mb-2 sm:mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-zinc-300
                      pb-3
                      text-base
                      sm:text-lg
                      outline-none
                      focus:border-[#b99658]
                      transition
                    "
                  />
                </div>

                <div>
                  <label className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[3px] text-xs block mb-2 sm:mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    className="
                      w-full
                      bg-transparent
                      border-b
                      border-zinc-300
                      pb-3
                      text-base
                      sm:text-lg
                      outline-none
                      focus:border-[#b99658]
                      transition
                    "
                  />
                </div>

              <div>
                <label className="text-[#b99658] uppercase tracking-[2px] sm:tracking-[3px] text-xs block mb-2 sm:mb-3">
                  Your Project
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-zinc-300
                    pb-3
                    text-base
                    sm:text-lg
                    resize-none
                    outline-none
                    focus:border-[#b99658]
                    transition
                  "
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {/* button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    w-full
                    sm:w-auto
                    flex
                    items-center
                    justify-center
                    gap-3
                    sm:gap-5
                    bg-black
                    px-8
                    text-xs
                    sm:text-sm
                    py-4
                    sm:py-5
                    text-white
                    uppercase
                    tracking-[2px]
                    sm:tracking-[3px]
                    hover:bg-[#b99658]
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
          </div>
        </div>

        {/* MAP - full width */}
        <div className="w-full h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden border border-[#e5ddc8]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.7585082330197!2d77.0950842755032!3d28.696869675629646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQxJzQ4LjciTiA3N8KwMDUnNTEuNiJF!5e0!3m2!1sen!2sin!4v1785479092570!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="OM's Bath Fittings Location"
          />
        </div>

      </div>
    </section>
  );
}