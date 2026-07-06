import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f8f6f2] py-14"
    >
      <div className="max-w-[1000px] mx-auto px-10">

        {/* heading */}
        <div className="text-center mb-24">

          <p className="
            text-[#b99658]
            uppercase
            tracking-[8px]
            text-sm
            mb-6
          ">
            Contact
          </p>

          <h2 className="
            font-heading
            text-black
            text-[70px]
            leading-none
            mb-5
          ">
            Begin Your
            <span className="
              block
              italic
              text-[#b99658]
            ">
              Design Journey
            </span>
          </h2>

          <p className="
            text-zinc-500
            text-lg
            leading-8
            max-w-3xl
            mx-auto
          ">
            Whether you're designing a luxury residence,
            hospitality project, or commercial space,
            our specialists are here to create
            something extraordinary.
          </p>

        </div>

        {/* form */}
        <form className="space-y-12">

          <div>
            <label className="
              text-[#b99658]
              uppercase
              tracking-[4px]
              text-sm
              block
              mb-5
            ">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full
                bg-transparent
                border-b
                border-zinc-300
                pb-5
                text-xl
                outline-none
                focus:border-[#b99658]
                transition
              "
            />
          </div>

          <div>
            <label className="
              text-[#b99658]
              uppercase
              tracking-[4px]
              text-sm
              block
              mb-5
            ">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                bg-transparent
                border-b
                border-zinc-300
                pb-5
                text-xl
                outline-none
                focus:border-[#b99658]
                transition
              "
            />
          </div>

          <div>
            <label className="
              text-[#b99658]
              uppercase
              tracking-[4px]
              text-sm
              block
              mb-5
            ">
              Your Project
            </label>

            <textarea
              rows={2}
              placeholder="Tell us about your project"
              className="
                w-full
                bg-transparent
                border-b
                border-zinc-300
                pb-3
                text-xl
                resize-none
                outline-none
                focus:border-[#b99658]
                transition
              "
            />
          </div>

          {/* button */}
          <div className="pt-5 flex justify-center">

            <button
              className="
                group
                flex
                items-center
                gap-5
                border
                border-black
                px-8
                text-sm
                py-5
                uppercase
                tracking-[4px]
                hover:bg-black
                hover:text-white
                transition-all
                duration-300
              "
            >
              Book Consultation

              <ArrowRight
                size={18}
                className="
                  transition
                  duration-300
                  group-hover:translate-x-2
                "
              />
            </button>

          </div>

        </form>

        {/* footer note */}
        <div className="text-center mt-10">

          <p className="
            font-heading
            italic
            text-4xl
            text-[#b99658]
          ">
            "Luxury lives in the details."
          </p>

        </div>

      </div>
    </section>
  );
}