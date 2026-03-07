import { motion } from "framer-motion";
import { PhoneIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import SectionTitle from "../components/section-title";

export default function ContactPage() {
  return (
    <section className="mt-32 relative" id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-60 blur-2xl"></div>

      <SectionTitle
        title="Get in Touch"
        description="We’d love to hear from you. Reach out for support, quotes, or collaboration."
      />

      {/* Main block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative z-10 glass p-10 rounded-2xl max-w-3xl mx-auto mt-12 flex flex-col gap-8 shadow-xl"
      >
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <PhoneIcon className="size-5 text-green-400" />
            <span className="text-lg">067 981 4474</span>
          </div>
          <div className="flex items-center gap-3">
            <MailIcon className="size-5 text-blue-400" />
            <span className="text-lg">stcentral.info@gmail.com</span>
          </div>
          <motion.a
            href="https://wa.me/27679814474"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(17, 134, 60, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-green-500 text-white rounded-md py-3 px-6 font-semibold flex items-center justify-center gap-2"
          >
            <MessageCircleIcon className="size-5" />
            Chat on WhatsApp
          </motion.a>
        </div>

        {/* Contact Form */}
        <motion.form
          action="https://formspree.io/f/xwvrkgze" // replace with your Formspree form ID
          method="POST"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input glass rounded-md p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="input glass rounded-md p-3"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="input glass rounded-md p-3"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#1f2937" }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-white text-gray-800 rounded-md py-3 font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}