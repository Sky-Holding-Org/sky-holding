"use client";

import { useState } from "react";
import { Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer id="footer" className="bg-[#001233] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <div className="w-12 h-0.5 bg-white mb-8"></div>
          <h2 className="text-4xl font-light mb-8 tracking-wide">CONTACT</h2>

          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <p className="font-light">
                Address:
                <a
                  href="https://maps.app.goo.gl/2YkpisqHQEdDreWa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline ml-1"
                >
                  One Kattameya, 215, Maadi Kattameya Ringroad - Cairo, Egypt
                </a>
              </p>
            </div>

            <div>
              <p className="font-light">
                Contacts:
                <a href="tel:+20206500094" className="hover:underline ml-1">
                  +2 20 65 00 94
                </a>
                <span className="mx-1">-</span>
                <a href="tel:+20206500095" className="hover:underline">
                  20 65 00 95
                </a>
              </p>
            </div>

            <div>
              <p className="font-light">
                E-mail:
                <a href="mailto:info@sky.eg" className="hover:underline ml-1">
                  info@sky.eg
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://www.linkedin.com/company/sky-holding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition"
            >
              <Linkedin className="w-5 h-5 text-[#001233]" />
            </a>
            <a
              href="https://www.facebook.com/skyholding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition"
            >
              <Facebook className="w-5 h-5 text-[#001233]" />
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Your Email *"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition resize-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-12 py-3 border border-white text-white hover:bg-white hover:text-[#001233] transition disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
            </div>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Sky Holding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
