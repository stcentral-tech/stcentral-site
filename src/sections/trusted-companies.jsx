import { motion } from "framer-motion";

export default function TrustedCompanies() {
  const logos = [
    "/assets/company-logo-1.svg",
    "/assets/company-logo-2.svg",
    "/assets/company-logo-3.svg",
    "/assets/company-logo-4.svg",
    "/assets/company-logo-5.svg",
  ];

  return (
    <motion.section
      className="mt-14"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
    >
      <p className="py-6 mt-14 text-center">
        We build with trusted technologies, including —
      </p>

      <div
        className="grid grid-cols-3 gap-6 justify-items-center max-w-2xl w-full mx-auto py-4 md:flex md:flex-row md:gap-10 md:justify-center"
        id="logo-container"
      >
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="logo"
            className="h-12 w-auto"
            whileHover={{
              y: -8, // float upwards
              scale: 1.05, // slight zoom
              transition: { type: "spring", stiffness: 300, damping: 15 },
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}