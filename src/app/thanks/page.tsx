import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank you | WindowWorksResidential",
  description: "Your quote request was received.",
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d1f2d] px-8">
      <div className="w-full max-w-2xl border border-white/5 bg-slate-950 px-8 py-16 text-center shadow-2xl">
        <CheckCircle className="mx-auto mb-8 text-[#3d95d4]" size={64} strokeWidth={1.5} />
        <h1 className="mb-6 font-serif text-4xl text-white md:text-5xl">Quote Request Received.</h1>
        <p className="mb-10 text-lg leading-relaxed text-slate-400">
          Michael is often in the field, but he will personally review your request and reach out within
          one business day to discuss your project.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-[#3d95d4] transition hover:text-white"
        >
          <ArrowLeft size={14} /> Back to Homepage
        </Link>
      </div>
    </main>
  );
}
