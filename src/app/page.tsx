import { MapPin, Send, CheckCircle } from "lucide-react";
import { NavLogoMark } from "@/components/NavLogoMark";

const regions = ["Elkhart", "Ankeny", "Des Moines", "Altoona", "Bondurant", "Huxley"];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0d1f2d]">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0d1f2d]/95 px-8 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLogoMark />
          </div>
          <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a
              href="#contact"
              className="bg-[#2d7fb8] px-6 py-2.5 text-white transition hover:bg-white hover:text-slate-950"
            >
              Request Free Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center bg-[#0d1f2d] pt-24">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-8 md:grid-cols-2">
          <div>
            <span className="mb-6 block text-[11px] font-black uppercase tracking-[0.3em] text-[#3d95d4]">
              Premium Window Cleaning
            </span>
            <h1 className="mb-10 font-serif text-6xl leading-[0.9] text-white md:text-8xl">
              Clarity Without <br />
              <em className="italic text-[#3d95d4]">Compromise.</em>
            </h1>
            <p className="mb-12 text-lg font-light leading-relaxed text-slate-400">
              Professional glass care for homeowners in Elkhart and across Central Iowa. Delivering the
              streak-free results your home deserves.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#contact"
                className="bg-white px-10 py-5 text-xs font-black uppercase tracking-widest text-slate-950 transition hover:bg-[#2d7fb8] hover:text-white"
              >
                Get A Quote
              </a>
              <div className="flex items-center gap-3 border-l border-white/10 pl-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
                <MapPin size={16} className="text-[#3d95d4]" /> Serving Central Iowa
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#152b3e] px-8 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-16 font-serif text-4xl text-white md:text-5xl">Focused Clarity</h2>
          <div className="grid gap-px border border-white/5 bg-white/5 shadow-2xl md:grid-cols-3">
            <ServiceCard
              num="01"
              title="Interior & Exterior"
              desc="Full glass restoration for both sides of your windows, ensuring a streak-free, crystal-clear view."
            />
            <ServiceCard
              num="02"
              title="Screen & Track Care"
              desc="Optional deep-cleaning of window tracks and screen maintenance to finish the look of your glass."
            />
            <ServiceCard
              num="03"
              title="Stain & Mineral Removal"
              desc="Specialized treatment for stubborn hard water spots and mineral buildup standard cleaning misses."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/5 bg-[#0d1f2d] px-8 py-24">
        <div className="mx-auto grid max-w-5xl gap-20 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-left font-serif text-4xl text-white md:text-5xl">
              Let&apos;s Clear the Way.
            </h2>
            <p className="mb-10 max-w-md text-left text-lg text-slate-400">
              Michael personally reviews every request to provide an accurate estimate—usually within one
              business day.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {regions.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 border border-white/5 bg-slate-950 p-4 text-xs font-black uppercase tracking-widest text-slate-500"
                >
                  <CheckCircle size={14} className="shrink-0 text-[#3d95d4]" /> {city}
                </div>
              ))}
            </div>
          </div>

          <form
            name="quote-request"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thanks"
            className="space-y-4 border border-white/5 bg-slate-950 p-10 shadow-2xl"
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <p className="hidden" aria-hidden="true">
              <label>
                Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="space-y-1 text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full border border-white/5 bg-[#0d1f2d] p-4 text-white outline-none focus:border-[#3d95d4]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  required
                  autoComplete="address-level2"
                  placeholder="e.g. Ankeny"
                  className="w-full border border-white/5 bg-[#0d1f2d] p-4 text-white outline-none placeholder:text-slate-600 focus:border-[#3d95d4]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className="w-full border border-white/5 bg-[#0d1f2d] p-4 text-white outline-none focus:border-[#3d95d4]"
                />
              </div>
            </div>
            <div className="space-y-1 text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Project Details
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="How many stories? Any specific concerns?"
                className="w-full border border-white/5 bg-[#0d1f2d] p-4 text-white outline-none placeholder:text-slate-600 focus:border-[#3d95d4]"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-[#2d7fb8] py-5 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-slate-950"
            >
              Submit Request <Send size={14} />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#0a141c] px-8 py-16 text-center">
        <p className="mb-4 font-serif text-lg uppercase italic tracking-widest text-[#3d95d4]">
          WindowWorksResidential
        </p>
        <p className="text-[11px] uppercase tracking-[0.3em] text-slate-600">
          © {new Date().getFullYear()} WindowWorksResidential · Elkhart, IA · Licensed &amp; Insured
        </p>
      </footer>
    </main>
  );
}

function ServiceCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-[#0d1f2d] p-12 text-left transition hover:bg-slate-950">
      <div className="mb-6 font-serif text-3xl text-[#3d95d4]">{num}</div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
    </div>
  );
}
