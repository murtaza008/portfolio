import { useMemo, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const apiUrl = useMemo(() => {
    const base = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");
    return `${base}/api/contact`;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStatus("idle");
    setErrorMsg("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Failed to send message.");
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md rounded-xl p-5 space-y-2 transition-all duration-300"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-1 text-sm">
            Name
          </label>
          <input
            id="name"
            required
            className="w-full px-3.5 py-2.5 bg-white/20 border border-white/30 rounded-lg text-white text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
            placeholder="Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-1 text-sm">
            Email
          </label>
          <input
            id="email"
            required
            className="w-full px-3.5 py-2.5 bg-white/20 border border-white/30 rounded-lg text-white text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
            placeholder="your@email.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-white font-medium mb-1 text-sm">
          Subject
        </label>
        <input
          id="subject"
          required
          className="w-full px-3.5 py-2.5 bg-white/20 border border-white/30 rounded-lg text-white text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
          placeholder="Project Discussion"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white font-medium mb-1 text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          maxLength={500}
          required
          className="w-full px-3.5 py-2.5 bg-white/20 border border-white/30 rounded-lg text-white text-sm placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none hover:bg-white/25"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <p className="text-blue-200 text-xs mt-1">Maximum 500 characters</p>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 whitespace-nowrap cursor-pointer"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" ? (
        <p className="text-green-200 text-sm pt-1">
          Thanks! Your message was sent. I’ll get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-red-200 text-sm pt-1">{errorMsg}</p>
      ) : null}
    </form>
  );
};

export default ContactForm;

