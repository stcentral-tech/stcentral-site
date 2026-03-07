import SectionTitle from "../components/section-title";
import { CheckIcon, RocketIcon, CrownIcon, WrenchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PricingPlans() {
  const ref = useRef([]);
  const whatsappLink = "https://wa.me/27679814474";

  const data = [
    {
      icon: RocketIcon,
      title: "Web Development",
      description: "Modern websites tailored to your needs",
      price: "R2,500 – R10,500",
      buttonText: "Request a Quote",
      features: [
        "Starter Site: R2,500 – R4,500",
        "Business Pro: R5,000 – R7,500",
        "E‑Commerce: R8,000 – R10,500",
        "Maintenance: R800 – R1,200/month",
      ],
    },
    {
      icon: CrownIcon,
      title: "Virtual IT Assistance",
      description: "Remote support for individuals & teams",
      price: "R1,500 – R5,000/month",
      buttonText: "Choose a Plan",
      features: [
        "Basic Support: R1,500/month (5 hours)",
        "Standard Support: R2,800/month (10 hours)",
        "Premium Support: R5,000/month (20 hours)",
      ],
    },
    {
      icon: WrenchIcon,
      title: "PC Hardware Repair",
      description: "Diagnostics, repairs, and upgrades",
      price: "R400 – R3,500 + parts",
      buttonText: "Book a Repair",
      features: [
        "Diagnostics: R400 – R600",
        "Standard Repair: R800 – R1,500 + parts",
        "Advanced Repair: R2,000 – R3,500 + parts",
        "Upgrades: R600 – R1,200",
      ],
    },
  ];

  return (
    <section className="mt-32" id="pricing">
      <SectionTitle
        title="Our Pricing Plans"
        description="Simple, transparent pricing designed to fit your business needs. Choose the plan that works best for you and start growing with us today."
      />

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="group w-full max-w-96 glass p-6 rounded-xl hover:-translate-y-0.5 min-h-[500px]"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
            ref={(el) => (ref.current[index] = el)}
            onAnimationComplete={() => {
              const card = ref.current[index];
              if (card) {
                card.classList.add("transition", "duration-300");
              }
            }}
          >
            <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
              <item.icon className="size-3.5" />
              <span>{item.title}</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold">{item.price}</h3>
            <p className="text-gray-200 mt-3">{item.description}</p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.buttonText} via WhatsApp`}
              className={`mt-7 inline-block text-center rounded-md w-full btn ${
                item.mostPopular ? "bg-white text-gray-800" : "glass"
              } px-4 py-2`}
            >
              {item.buttonText}
            </a>

            <div className="mt-6 flex flex-col">
              {item.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 py-2">
                  <div className="rounded-full glass border-0 p-1">
                    <CheckIcon className="size-3 text-white" strokeWidth={3} />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}