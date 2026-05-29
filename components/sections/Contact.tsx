"use client";

import SectionTag from "../ui/SectionTag";
import ContactForm from "./contact/ContactForm";
import ContactDetails from "./contact/ContactDetails";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-[#c8a97e]/6 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 transition-all duration-400 opacity-0 translate-y-10">
          <SectionTag>Let&apos;s Connect</SectionTag>
          <h2 className="text-3xl md:text-4xl font-black font-['Syne'] text-[#1a1a1a] leading-tight">
            Get In <span className="text-[#a07850]">Touch</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 transition-all duration-400 opacity-0 -translate-x-10">
            <ContactForm />
          </div>
          <div className="lg:col-span-2 transition-all duration-400 delay-100 opacity-0 translate-x-10">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
