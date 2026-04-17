const SERVICE_AREAS = [
  "Elkhart",
  "Ankeny",
  "Des Moines",
  "Altoona",
  "Bondurant",
  "Huxley",
  "Other / nearby",
] as const;

type QuoteFormProps = {
  /** `moody` = navy panel + logo blues (Netlify form unchanged) */
  variant?: "default" | "dark" | "moody";
};

export function QuoteForm({ variant = "default" }: QuoteFormProps) {
  const moody = variant === "moody";
  const lightCard = variant === "dark";

  const shell = moody
    ? "border border-white/5 bg-slate-950 p-10 shadow-2xl shadow-black/40"
    : lightCard
      ? "rounded-lg border border-white/20 bg-white/95 p-8 shadow-lg backdrop-blur-sm"
      : "rounded-lg border border-slate-200 bg-white p-8 shadow-sm";

  const label = moody
    ? "text-[10px] font-bold uppercase tracking-widest text-slate-500"
    : lightCard
      ? "text-slate-700"
      : "text-slate-800";

  const hint = "text-slate-500";

  const field =
    "w-full border px-4 py-3.5 text-sm outline-none transition " +
    (moody
      ? "border-white/5 bg-[#0d1f2d] text-white placeholder:text-slate-500 focus:border-[#3d95d4] focus:ring-1 focus:ring-[#3d95d4]/30"
      : "rounded-md border-slate-200 bg-white text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20");

  const btn = moody
    ? "bg-[#2d7fb8] text-white hover:bg-white hover:text-slate-950"
    : "rounded-md bg-blue-700 text-white hover:bg-blue-800";

  const footnote = moody ? "text-slate-500" : "text-slate-500";

  const star = moody ? "text-red-400" : "text-red-600";

  return (
    <form
      name="quote-request"
      method="POST"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={`mx-auto max-w-xl space-y-4 ${shell}`}
    >
      <input type="hidden" name="form-name" value="quote-request" />

      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="space-y-1">
        <label htmlFor="quote-name" className={`mb-0 block ${label}`}>
          Full name <span className={star}>*</span>
        </label>
        <input id="quote-name" name="name" type="text" required autoComplete="name" className={field} />
      </div>

      <div className="space-y-1">
        <label htmlFor="quote-email" className={`mb-0 block ${label}`}>
          Your email <span className={star}>*</span>
        </label>
        <input
          id="quote-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={field}
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="quote-phone" className={`mb-0 block ${label}`}>
          Phone <span className={hint}>(optional)</span>
        </label>
        <input id="quote-phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>

      <div className="space-y-1">
        <label htmlFor="quote-city" className={`mb-0 block ${label}`}>
          City / area <span className={star}>*</span>
        </label>
        <select id="quote-city" name="city" required defaultValue="" className={field}>
          <option value="" disabled>
            Select your area
          </option>
          {SERVICE_AREAS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="quote-interest" className={`mb-0 block ${label}`}>
          I&apos;m interested in <span className={star}>*</span>
        </label>
        <select id="quote-interest" name="interest" required defaultValue="" className={field}>
          <option value="" disabled>
            Select an option
          </option>
          <option value="quote">A quote</option>
          <option value="info">General information</option>
          <option value="both">Quote and information</option>
        </select>
      </div>

      <div className="space-y-1">
        <label htmlFor="quote-message" className={`mb-0 block ${label}`}>
          Project details <span className={star}>*</span>
        </label>
        <textarea
          id="quote-message"
          name="message"
          required
          rows={5}
          placeholder="Stories, window count, timing, concerns…"
          className={field + " resize-y"}
        />
      </div>

      <button
        type="submit"
        className={`flex w-full items-center justify-center gap-2 py-5 text-xs font-black uppercase tracking-[0.2em] transition ${btn}`}
      >
        Send request
      </button>

      <p className={`text-center text-xs ${footnote}`}>
        We respond as soon as we can—usually within one business day.
      </p>
    </form>
  );
}
