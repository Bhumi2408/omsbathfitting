"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Loader2, X } from "lucide-react";

const ACCESS_KEY_1 = "e0f2ad34-2eca-4d85-8063-ec6d51282ab8";
const ACCESS_KEY_2 = "05158624-434e-406f-b368-9e98fc30dcf9";

const DELAY_MS = 5000;
// Once this is set the popup never opens again in this browser.
const SEEN_KEY = "oms_enquiry_popup_seen";

function hasSeenPopup() {
  try {
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markPopupSeen() {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {}
}

const inputClass =
  "w-full border-b border-zinc-300 bg-transparent py-2.5 text-black text-base outline-none placeholder:text-zinc-400 focus:border-[#b99658] transition-colors";
const labelClass =
  "text-[#b99658] uppercase tracking-[2px] text-[11px] block mb-1";

export default function EnquiryPopup() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (pathname === "/thank-you" || hasSeenPopup()) return;

    // count the 5s from when the page started opening, not from hydration
    const remaining = Math.max(0, DELAY_MS - performance.now());
    const timer = setTimeout(() => {
      if (hasSeenPopup()) return;
      markPopupSeen();
      setOpen(true);
    }, remaining);

    return () => clearTimeout(timer);
    // only on first load — later client-side navigations don't restart it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formEl = e.target;
    const payload = {
      name: formEl.name.value,
      email: formEl.email.value,
      phone: formEl.phone.value,
      city: formEl.city.value,
      message: formEl.message.value,
      page: pathname,
      subject: "New Popup Enquiry - OM's Bath Fittings",
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
        setOpen(false);
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-popup-title"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-[2px] animate-[popupFade_300ms_ease-out]"
        onClick={() => setOpen(false)}
      />

      <div className="relative w-full max-w-[880px] max-h-[92vh] overflow-y-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] animate-[popupIn_350ms_ease-out]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black hover:bg-[#b99658] transition-colors"
        >
          <X size={18} />
        </button>

        {/* LEFT — image panel (hidden on phones) */}
        <div className="relative hidden md:block min-h-[520px] bg-black">
          <Image
            src="/home/bath1.png"
            alt="OM's Bath CP bath fittings"
            fill
            sizes="400px"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8">
            <p className="text-[#b99658] uppercase tracking-[4px] text-[11px] mb-3">
              ISO 9001:2015 Certified
            </p>
            <p className="font-heading text-white text-3xl leading-tight mb-5">
              500+ products across{" "}
              <span className="italic text-[#b99658]">20+ collections.</span>
            </p>
            <div className="w-12 h-px bg-[#b99658] mb-4" />
            <p className="text-zinc-300 text-sm leading-6">
              Factory-direct prices for dealers, builders, architects and
              homeowners.
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <p className="text-[#b99658] uppercase tracking-[4px] text-[11px] mb-3">
            Get Best Price
          </p>
          <h2
            id="enquiry-popup-title"
            className="font-heading text-black text-3xl sm:text-[38px] leading-tight mb-2"
          >
            Send Us An <span className="italic text-[#b99658]">Enquiry</span>
          </h2>
          <p className="text-zinc-500 text-sm leading-6 mb-6">
            Share your details and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="popup-name" className={labelClass}>
                Full Name *
              </label>
              <input id="popup-name" name="name" required placeholder="Your name" className={inputClass} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="popup-phone" className={labelClass}>
                  Phone *
                </label>
                <input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9+\s-]{10,15}"
                  placeholder="+91"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="popup-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="popup-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="popup-city" className={labelClass}>
                City
              </label>
              <input id="popup-city" name="city" placeholder="Your city" className={inputClass} />
            </div>

            <div>
              <label htmlFor="popup-message" className={labelClass}>
                Requirement
              </label>
              <textarea
                id="popup-message"
                name="message"
                rows={2}
                placeholder="Products, quantity or any question"
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="group w-full inline-flex items-center justify-center gap-3 bg-black text-white uppercase tracking-[3px] text-xs px-6 py-4 hover:bg-[#b99658] hover:text-black transition-colors disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Submit Enquiry
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
