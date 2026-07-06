import Image from "next/image";
import Link from "next/link";
;

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-10 border-t px-20 border-white">
      <div className="max-w-[1700px] mx-auto px-10">

        {/* Top */}
        <div className="grid grid-cols-4 gap-20">

          {/* Brand */}
          <div>
           <Image src="/logo.png" alt="logo" width={100} height={50}/>

            <p className="text-zinc-500 text-lg max-w-md mt-5">
              Precision-engineered bathroom fittings
              crafted for timeless interiors and
              modern luxury living.
            </p>

            {/* <div className="flex gap-6 mt-12">
              <Link href="#">
                <Instagram
                  size={24}
                  strokeWidth={1.5}
                  className="text-zinc-500 hover:text-[#b99658] transition"
                />
              </Link>

              <Link href="#">
                <Linkedin
                  size={24}
                  strokeWidth={1.5}
                  className="text-zinc-500 hover:text-[#b99658] transition"
                />
              </Link>

              <Link href="#">
                <MapPin
                  size={24}
                  strokeWidth={1.5}
                  className="text-zinc-500 hover:text-[#b99658] transition"
                />
              </Link>
            </div> */}
          </div>

          {/* Collections */}
          <div>
            <h4 className="
              text-[#b99658]
              uppercase
              tracking-[5px]
              text-sm
              mb-10
            ">
              Collections
            </h4>

            <div className="flex flex-col gap-5">
              <Link
                href="/royal"
                className="text-zinc-400 hover:text-white transition"
              >
                Royal
              </Link>

              <Link
                href="/neo"
                className="text-zinc-400 hover:text-white transition"
              >
                Neo
              </Link>

              <Link
                href="/bonjo"
                className="text-zinc-400 hover:text-white transition"
              >
                Bonjo
              </Link>

              <Link
                href="/donald"
                className="text-zinc-400 hover:text-white transition"
              >
                Donald
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="
              text-[#b99658]
              uppercase
              tracking-[5px]
              text-sm
              mb-10
            ">
              Company
            </h4>

            <div className="flex flex-col gap-5">
              <Link
                href="/#about"
                className="text-zinc-400 hover:text-white transition"
              >
                About Us
              </Link>

              <Link
                href="/#testimonials"
                className="text-zinc-400 hover:text-white transition"
              >
                Testimonials
              </Link>

              <Link
                href="#collections"
                className="text-zinc-400 hover:text-white transition"
              >
                Collections
              </Link>

              <Link
                href="/#contact"
                className="text-zinc-400 hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="
              text-[#b99658]
              uppercase
              tracking-[5px]
              text-sm
              mb-10
            ">
              Contact
            </h4>

            <div className="flex flex-col gap-5">

              <p className="text-zinc-400">
                New Delhi, 110083 India
              </p>

              <p className="text-zinc-400">
                omsbath@gmail.com
              </p>

              <p className="text-zinc-400">
                +91 88603 49883
              </p>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#141414] mt-16 pt-10">

          <div className="flex justify-center items-center">

            <p className="text-zinc-600">
              © 2026 OM'S Bath Fittings. All rights reserved | Powered by <Link href="https://www.cybertricksmedia.com/">Cybertricks Media Pvt Ltd.</Link>
            </p>

        

          </div>
        </div>

      </div>
    </footer>
  );
}