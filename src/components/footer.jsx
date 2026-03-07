import { useState, useRef } from "react";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);
  const policyRef = useRef(null);

  const handlePolicyClick = () => {
    setShowPolicy(true); // always open when clicked
    setTimeout(() => {
      if (policyRef.current) {
        policyRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 150); // slight delay so section exists before scrolling
  };

  const links = [
    { name: "Home", href: "#" },
    { name: "Privacy Policy", action: handlePolicyClick }, // toggle + scroll
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.footer
      className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <a href="#">
        <motion.img
          src="/assets/logo.svg"
          alt="logo"
          className="h-16 w-30"
          width={205}
          height={48}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </a>

      {/* Footer links */}
      <div className="flex flex-wrap items-center justify-center gap-8 py-8">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href && !link.action ? link.href : undefined}
            onClick={(e) => {
              if (link.action) {
                e.preventDefault();
                link.action();
              }
            }}
            className="cursor-pointer transition hover:text-[#a0f5c5]"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-6 pb-6">
      <motion.a
        href="https://instagram.com/sysadmin03"
        className="text-gray-200 transition"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, color: "#a0f5c5" }}
      >
        <Instagram />
      </motion.a>

      <motion.a
        href="https://facebook.com/profile.php?id=61587719296856"
        className="text-gray-200 transition"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, color: "#a0f5c5" }}
      >
        <Facebook />
      </motion.a>

      <motion.a
        href="https://linkedin.com/in/yourprofile"
        className="text-gray-200 transition"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, color: "#a0f5c5" }}
      >
        <Linkedin />
      </motion.a>

      <motion.a
        href="https://wa.me/27679814474"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 transition"
        whileHover={{ y: -3, color: "#a0f5c5" }}
      >
        {/* WhatsApp SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.19 1.6 6.01L0 24l6.17-1.61A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.29-1.52l-.38-.23-3.65.95.97-3.56-.25-.37A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.17-7.83c-.28-.14-1.65-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.73.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.18-.54-.32z"/>
        </svg>
      </motion.a>

      <motion.a
        href="https://x.com/STCentral2026"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 transition"
        whileHover={{ y: -3, color: "#a0f5c5" }}
      >
        <Twitter />
      </motion.a>

      <motion.a
        href="https://discordapp.com/users/1479845530224951477"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-200 transition"
        whileHover={{ y: -3, color: "#a0f5c5" }}
      >
        {/* Discord SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.074.035c-.211.375-.444.864-.608 1.248a18.27 18.27 0 00-5.487 0 12.36 12.36 0 00-.617-1.248.07.07 0 00-.074-.035 19.736 19.736 0 00-4.885 1.515.064.064 0 00-.03.025C2.242 9.045 1.515 13.58 1.815 18.061a.07.07 0 00.027.048c2.052 1.507 4.041 2.427 5.992 3.032a.07.07 0 00.074-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 00-.04-.096c-.652-.247-1.27-.555-1.846-.916a.07.07 0 01-.007-.115c.124-.093.248-.19.366-.287a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 01.074.01c.118.097.242.194.366.287a.07.07 0 01-.007.115c-.576.361-1.194.669-1.846.916a.07.07 0 00-.04.096c.353.699.765 1.364 1.226 1.994a.07.07 0 00.074.027c1.951-.605 3.94-1.525 5.992-3.032a.07.07 0 00.027-.048c.5-7.305-.838-11.797-3.548-13.667a.06.06 0 00-.03-.025zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.093 2.157 2.419 0 1.334-.955 2.419-2.157 2.419zm7.963 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.175 1.093 2.157 2.419 0 1.334-.955 2.419-2.157 2.419z"/>
        </svg>
      </motion.a>
    </div>
      <hr className="w-full border-white/20 mt-6" />

      <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4">
        <p>Sage Africa.</p>
        <p>
          Copyright © 2026
          <a href="#"> STCentral</a>. All rights reserved.
        </p>
      </div>

      {/* Privacy Policy full-page section */}
      {showPolicy && (
        <motion.section
          ref={policyRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 w-full glass rounded-t-xl px-8 py-20"
        >
          <div className="max-w-5xl mx-auto text-gray-200">
            <h2 className="text-3xl font-bold text-[#a0f5c5] mb-10">Privacy Policy</h2>

            <p className="mb-8 leading-relaxed">
              At <strong>STCentral</strong>, we respect your privacy. We collect only the information
              necessary to provide our services, such as your name, contact details, and project requirements.
            </p>

            <h3 className="text-xl font-semibold text-[#a0f5c5] mb-4">Information We Collect</h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Basic contact details (name, email, phone)</li>
              <li>Project requirements and preferences</li>
              <li>Technical information for troubleshooting</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#a0f5c5] mb-4">How We Use Your Data</h3>
            <p className="mb-8 leading-relaxed">
              We use your information to deliver services, improve our offerings, and communicate updates.
              We do not sell or trade your data.
            </p>

            <h3 className="text-xl font-semibold text-[#a0f5c5] mb-4">Your Rights</h3>
            <p className="mb-8 leading-relaxed">
              You have the right to access, update, or request deletion of your personal information.
              Contact us at any time to exercise these rights.
            </p>

            <p className="text-gray-400 text-sm mt-16">Last updated: March 2026</p>

            {/* Close button */}
            <button
              onClick={() => setShowPolicy(false)}
              className="mt-12 px-6 py-3 rounded-lg bg-[#a0f5c5] text-black font-semibold hover:bg-[#7de5a5] transition"
            >
              Close Policy
            </button>
          </div>
        </motion.section>
      )}
    </motion.footer>
  );
}