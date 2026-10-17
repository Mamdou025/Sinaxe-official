"use client";

import { Paperclip, Spinner } from "@phosphor-icons/react";
import { useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const body = new FormData(form);

    try {
      const res = await fetch("/api/contact", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      setFileName(null);
    } catch {
      setError("Couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-glow p-10 text-center">
        <h3 className="text-xl font-medium text-ink">Request received.</h3>
        <p className="mt-2 text-sm text-ink-soft">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-ink underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="card-glow p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full border border-border bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border border-border bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="company" className="text-sm font-medium text-ink">
          Company{" "}
          <span className="font-normal text-muted-foreground">
            (optional)
          </span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 w-full border border-border bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
          placeholder="Company name"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none border border-border bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-ink"
          placeholder="Tell us about your workflow, timeline, or question."
        />
      </div>

      <div className="mt-6">
        <label htmlFor="document" className="text-sm font-medium text-ink">
          Attach a document{" "}
          <span className="font-normal text-muted-foreground">
            (optional, PDF/Word/image, up to 10MB)
          </span>
        </label>
        <label
          htmlFor="document"
          className="mt-2 flex cursor-pointer items-center gap-2 border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-ink hover:text-ink"
        >
          <Paperclip size={16} />
          {fileName ?? "Choose a file"}
        </label>
        <input
          id="document"
          name="document"
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" && (
          <Spinner size={16} className="animate-spin" />
        )}
        {status === "submitting" ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}
