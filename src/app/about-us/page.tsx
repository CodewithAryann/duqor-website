import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Duqor | About Us - Crafting Timeless Interiors",
  description:
    "Duqor merges design excellence with timeless craftsmanship to create residential, commercial, hospitality, and retail interiors.",
  alternates: {
    canonical: "https://www.duqor.ae/about-us",
  },
};

export default function AboutPage() {
  const headingClass =
    "relative font-serif font-bold tracking-wide leading-tight bg-clip-text text-transparent bg-gradient-to-b from-[#e7c675] via-[#c38a27] to-[#8b5b10]";

  const buttonClass =
    "px-8 sm:px-10 py-3 rounded-full font-serif font-semibold text-lg tracking-wide text-black bg-gradient-to-b from-[#f5d67a] via-[#c38a27] to-[#8b5b10] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg";

  return (
    <section className="bg-[#0a0a0a] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/images/portfolio/project-1/pic-2.png"
          alt="Duqor About Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mt-24">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl mb-6 ${headingClass}`}>
            Crafting Spaces that Inspire, Reflect, and Endure
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-12">
            At Duqor, we merge design excellence with timeless craftsmanship to
            create environments that tell stories of elegance and purpose.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/portfolio">
              <button className={buttonClass}>Explore Projects</button>
            </Link>
            <Link href="/contact">
              <button className={buttonClass}>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= PHILOSOPHY ================= */}
      <div className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Image
          src="/images/portfolio/project-5/pic-6.jpg"
          alt="Duqor Design Philosophy"
          width={600}
          height={400}
          loading="lazy"
          className="rounded-2xl shadow-lg object-cover"
        />

        <div>
          <h2 className={`${headingClass} text-3xl sm:text-4xl mb-4`}>
            Our Philosophy
          </h2>
          <p className="text-gray-300 mb-4">
            Every Duqor project begins with a vision — to blend form and function
            in perfect harmony.
          </p>
          <p className="text-gray-300">
            Our process is rooted in collaboration, creativity, and attention to
            detail.
          </p>
        </div>
      </div>

      {/* ================= EXPERTISE (FIXED ALIGNMENT) ================= */}
      <div className="py-24 bg-[#111]">
        <h2 className={`${headingClass} text-3xl sm:text-4xl text-center mb-16`}>
          Our Expertise
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center px-6">
          {[
            {
              title: "Residential Design",
              desc: "Crafting intimate, luxurious living spaces.",
              img: "/images/portfolio/project-2/pic-1.png",
            },
            {
              title: "Commercial Design",
              desc: "Workspaces that inspire productivity.",
              img: "/images/portfolio/project-1/pic-5.png",
            },
            {
              title: "Hospitality Design",
              desc: "Immersive environments built around comfort.",
              img: "/images/portfolio/project-5/pic-9.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group w-full max-w-[380px] rounded-2xl overflow-hidden
                         bg-[#0d0d0d] border border-[#2c2c2c]
                         hover:border-[#c38a27]/60 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="p-6">
                <h3 className={`${headingClass} text-xl mb-2`}>
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTACT FORM (UNCHANGED) ================= */}
      <section className="py-28 bg-[#0a0a0a] text-white px-6" id="contact-form">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#e7c675] via-[#c38a27] to-[#8b5b10]">
              Discuss
            </span>{" "}
            Your Project
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3">
            Fill out the form and our design specialists will connect with you shortly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative w-full h-[610px] rounded-2xl overflow-hidden">
            <Image
              src="/images/portfolio/project-3/pic-14.png"
              alt="Interior Design"
              fill
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="h-[610px] bg-[#111] border border-[#2c2c2c] rounded-2xl p-10 flex flex-col justify-between"
          >
            <input type="hidden" name="access_key" value="b601d7fe-9d0c-448b-8f4e-f83b4879d175" />
            <input type="hidden" name="subject" value="Interior Inquiry - Duqor" />

            <div className="space-y-4 grow">
              {["name", "email", "phone"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-300 mb-1 capitalize">
                    {field} *
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full p-3 bg-[#0d0d0d] border border-[#333] rounded-lg resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#c38a27] text-black rounded-full font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div
        className="text-center py-28 bg-cover bg-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/about/cta.webp')",
        }}
      >
        <h2 className={`${headingClass} text-4xl sm:text-5xl mb-6`}>
          Let’s Create Something Extraordinary Together
        </h2>

        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether it’s a residence, workspace, or hospitality destination —
          Duqor brings visions to life through design that speaks.
        </p>

        <Link href="/contact">
          <button className={`${buttonClass} mx-auto`}>Contact Us</button>
        </Link>
      </div>
    </section>
  );
}
