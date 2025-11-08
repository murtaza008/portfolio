import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md rounded-xl p-6 space-y-3 transform hover:scale-105 transition-all duration-300"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
            placeholder="Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            required
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
            placeholder="your@email.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-white font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          required
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 hover:bg-white/25"
          placeholder="Project Discussion"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          maxLength={500}
          required
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 resize-none hover:bg-white/25"
          placeholder="Tell me about your project..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <p className="text-blue-200 text-sm mt-1">Maximum 500 characters</p>
      </div>
      <button
        type="submit"
        className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;

