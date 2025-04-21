
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/SocialLinks";

const SOCIALS = {
  phone: "+201118709398",
  linkedin: "https://www.linkedin.com/in/mohamed-hussien311",
  github: "https://github.com/MohamedHussien311",
  facebook: "https://www.facebook.com/mohamed.hussein.54315",
  email: "mohamed.hussein.alaraby@gmail.com",
  location: "Cairo, Egypt"
};

const CTA_TEXT = "Ready to catch bugs before they catch you? Let’s test your software to perfection!";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Sends a mail via the user's mail application using mailto. 
  // Sending directly from site without backend is not possible.
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name || 'Anonymous'}`);
    const bodyLines = [
      `Name: ${form.name ?? ""}`,
      `Email: ${form.email ?? ""}`,
      "",
      form.message ?? "",
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary/5 to-secondary/5 animate-fade-in">
      <div className="max-w-5xl mx-auto px-3">
        {/* Centered Title & CTA */}
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-1 text-center">Get In Touch</h2>
          <p className="mb-2 text-gray-700 text-lg text-center">{CTA_TEXT}</p>
        </div>
        {/* Left - Social & Contact | Right - Form */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center">
          {/* Left: Socials/Contact */}
          <div className="flex-1 flex flex-col gap-5 items-start md:items-start">
            <div className="mb-3">
              <SocialLinks
                linkedin={SOCIALS.linkedin}
                github={SOCIALS.github}
                facebook={SOCIALS.facebook}
                phone={SOCIALS.phone}
                iconSize={26}
                className="justify-start"
              />
            </div>
            <div>
              <a
                href={`mailto:${SOCIALS.email}`}
                className="flex gap-2 items-center font-semibold underline text-primary hover:opacity-70 transition mb-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="inline-block" size={22} />
                {SOCIALS.email}
              </a>
            </div>
            <div>
              <a
                href={`tel:${SOCIALS.phone.replace(/\s+/g, "")}`}
                className="flex gap-2 items-center font-semibold underline text-primary hover:opacity-70 transition mb-2"
              >
                <Phone className="inline-block" size={22} />
                {SOCIALS.phone}
              </a>
            </div>
            <div className="flex gap-2 items-center text-gray-600 mt-2">
              <span className="font-semibold">Location:</span>
              <span>{SOCIALS.location}</span>
            </div>
          </div>
          
          {/* Right: Send Message */}
          <form
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-5 w-full max-w-lg md:max-w-md"
            onSubmit={handleSend}
          >
            <div>
              <label className="block text-gray-900 font-semibold mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border border-primary/30 px-4 py-2 rounded w-full shadow focus:outline-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="border border-primary/30 px-4 py-2 rounded w-full shadow focus:outline-primary"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                minLength={5}
                rows={4}
                className="border border-primary/30 px-4 py-2 rounded w-full shadow focus:outline-primary"
                required
              />
            </div>
            <Button type="submit" className="w-full text-lg py-3 rounded-xl bg-primary hover:bg-primary/90">
              Send In Mail Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
