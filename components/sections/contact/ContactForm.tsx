"use client";

import React from "react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd handle form submission here
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <div className="bg-white rounded-3xl p-7 border border-stone-100">
      <h3 className="font-['Syne'] font-bold text-lg text-[#1a1a1a] mb-5">
        Send a Message
      </h3>
      <form onSubmit={handleSubmit} id="contact-form" className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-stone-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">
              Name
            </label>
            <input
              suppressHydrationWarning
              required
              placeholder="Your full name"
              className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300"
              type="text"
              name="name"
            />
          </div>
          <div>
            <label className="block text-stone-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <input
              suppressHydrationWarning
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div>
          <label className="block text-stone-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">
            Subject
          </label>
          <input
            suppressHydrationWarning
            required
            placeholder="What is this about?"
            className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300"
            type="text"
            name="subject"
          />
        </div>
        <div>
          <label className="block text-stone-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">
            Message <span className="ml-1 text-stone-300">(0/500)</span>
          </label>
          <textarea
            name="message"
            required
            rows={4}
            maxLength={500}
            placeholder="Tell me about your project or opportunity..."
            className="w-full px-4 py-2.5 bg-[#f8f5f0] border border-stone-200 rounded-xl text-[#1a1a1a] text-sm placeholder-stone-300 focus:outline-none focus:border-[#c8a97e] focus:bg-white transition-all duration-300 resize-none"
          ></textarea>
        </div>
        <button
          suppressHydrationWarning
          type="submit"
          className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] text-white font-semibold rounded-xl hover:bg-[#a07850] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap text-sm"
        >
          <i className="ri-send-plane-fill"></i> Send Message
        </button>
      </form>
    </div>
  );
}
