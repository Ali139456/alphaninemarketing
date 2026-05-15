"use client";

import { ButtonOrixo } from "@/components/ui/ButtonOrixo";
import { useState } from "react";

const initialForm = { name: "", email: "", company: "", message: "" };

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className = "" }: ContactFormProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    setForm(initialForm);
    window.setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3.5 text-white outline-none transition placeholder:text-[var(--text-dim)] focus:border-[var(--accent)]/50 focus:bg-[var(--bg)] focus:ring-2 focus:ring-[var(--accent)]/15";

  return (
    <form
      onSubmit={onSubmit}
      className={`card-premium flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl ${className}`}
      noValidate
    >
      <div className="flex flex-1 flex-col space-y-5 p-6 sm:p-8">
        <div className="grid shrink-0 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Name
            </span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={onChange}
              className={inputClass}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
              Email
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={onChange}
              className={inputClass}
            />
          </label>
        </div>

        <label className="flex shrink-0 flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
            Company (optional)
          </span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={onChange}
            className={inputClass}
          />
        </label>

        <label className="flex min-h-[120px] flex-1 flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
            Message
          </span>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={onChange}
            className={`${inputClass} min-h-[120px] flex-1 resize-none`}
          />
        </label>

        <div className="mt-auto flex shrink-0 flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center">
          <ButtonOrixo type="submit">Send message</ButtonOrixo>
          <p className="text-sm text-[var(--text-dim)]">
            No pressure, just a focused conversation.
          </p>
        </div>

        {status === "sent" && (
          <p
            className="shrink-0 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-4 py-3 text-sm text-[var(--accent)]"
            role="status"
          >
            Thanks — your note is on our desk. We&apos;ll be in touch shortly.
          </p>
        )}
      </div>
    </form>
  );
}
