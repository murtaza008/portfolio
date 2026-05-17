"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [charCount, setCharCount] = useState(0);
  const MAX_CHARS = 500;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const autoReplyTemplateId =
      process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      const formData = new FormData(formRef.current);
      const templateParams = {
        from_name: formData.get("from_name") as string,
        reply_to: formData.get("reply_to") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      };

      // 1️⃣  Main email → mujhe (owner ko)
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      // 2️⃣  Auto-reply → sender ko (thanks for messaging)
      await emailjs.send(serviceId, autoReplyTemplateId, templateParams, {
        publicKey,
      });

      setStatus("success");
      formRef.current.reset();
      setCharCount(0);

      // 5 second baad idle ho jao
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error("EmailJS error details:", err?.text || err?.message || err);
      if (err?.status) {
        console.error("EmailJS error status:", err.status);
      }
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="bg-white rounded-3xl p-7 border border-stone-100 relative overflow-hidden">
      {/* ── Toast Notifications ── */}
      {status === "success" && (
        <div className="absolute inset-x-0 top-0 z-10 animate-slide-down">
          <div className="mx-7 mt-7 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-2xl px-4 py-3 text-sm font-medium shadow-sm">
            <i className="ri-checkbox-circle-fill text-lg text-emerald-500" />
            <span>
              Message sent! Check your inbox — a confirmation email is on its
              way too.
            </span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-x-0 top-0 z-10 animate-slide-down">
          <div className="mx-7 mt-7 flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-2xl px-4 py-3 text-sm font-medium shadow-sm">
            <i className="ri-error-warning-fill text-lg text-red-500" />
            <span>
              Something went wrong. Please try again or email me directly.
            </span>
          </div>
        </div>
      )}

      <h3
        className={`font-['Syne'] font-bold text-lg text-[#1a1a1a] mb-5 transition-all duration-300 ${
          status === "success" || status === "error" ? "mt-14" : ""
        }`}
      >
        Send a Message
      </h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="contact-form"
        className="space-y-4"
      >
        {/* Name + Email row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">
              Name
            </label>
            <input
              suppressHydrationWarning
              required
              disabled={isLoading}
              placeholder="Your full name"
              className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300 disabled:opacity-50"
              type="text"
              name="from_name"
            />
          </div>
          <div>
            <label className="block text-stone-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <input
              suppressHydrationWarning
              required
              disabled={isLoading}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300 disabled:opacity-50"
              type="email"
              name="reply_to"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-stone-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">
            Subject
          </label>
          <input
            suppressHydrationWarning
            required
            disabled={isLoading}
            placeholder="What is this about?"
            className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300 disabled:opacity-50"
            type="text"
            name="subject"
          />
        </div>

        {/* Message */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-stone-500 text-xs font-semibold uppercase tracking-wider">
              Message
            </label>
            <span
              className={`text-xs font-medium transition-colors duration-200 ${
                charCount >= MAX_CHARS
                  ? "text-red-400"
                  : charCount >= MAX_CHARS * 0.8
                  ? "text-amber-400"
                  : "text-stone-300"
              }`}
            >
              {charCount}/{MAX_CHARS}
            </span>
          </div>
          <textarea
            name="message"
            required
            disabled={isLoading}
            rows={4}
            maxLength={MAX_CHARS}
            placeholder="Tell me about your project or opportunity..."
            onChange={(e) => setCharCount(e.target.value.length)}
            className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300 resize-none disabled:opacity-50"
          />
        </div>

        {/* Submit Button */}
        <button
          suppressHydrationWarning
          type="submit"
          disabled={isLoading}
          className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#a07850] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap text-sm"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Sending…
            </>
          ) : (
            <>
              <i className="ri-send-plane-fill" /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
