import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { NavBar } from "@/components/nav-bar";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Contact — Sinaxe",
  description: "Get in touch with Sinaxe.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <NavBar />
      <section className="relative overflow-hidden bg-paper px-6 pb-20 pt-40">
        <div aria-hidden className="bg-grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            Contact
          </span>
          <h1 className="mt-3 text-balance text-4xl font-light tracking-tight text-ink sm:text-5xl">
            Tell us what you&apos;re working on.
          </h1>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Share your request and, if it helps, a document — we&apos;ll
            follow up by email.
          </p>
        </div>
        <div className="relative mx-auto mt-12 max-w-2xl">
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
