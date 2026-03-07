import SectionTitle from "../components/section-title";
import { CodeIcon, HeadphonesIcon, WrenchIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const refs = useRef([]);

  const featuresData = [
    {
      icon: CodeIcon,
      title: "Web Development",
      description:
        "We create custom websites, from starter sites to full business platforms and e‑commerce stores - built to grow with your business.",
    },
    {
      icon: HeadphonesIcon,
      title: "Virtual IT Support",
      description:
        "Our remote support keeps your systems running smoothly with troubleshooting, setup, and cloud solutions.",
    },
    {
      icon: WrenchIcon,
      title: "PC Hardware Repair",
      description:
        "We diagnose, repair, and upgrade PCs locally to keep your hardware performing at their best.",
    },
  ];

  return (
    <section className="mt-32" id="features">
      <SectionTitle
        title="Who We Are"
        description="STCentral is a Cape Town‑based virtual IT agency. We build websites, deliver remote IT support, and repair PCs — making technology simple, affordable, and accessible for startups and small businesses."
      />

      <div className="flex flex-wrap items-stretch justify-center gap-8 mt-12 px-6">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-sm w-full min-h-[16rem] flex flex-col"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
            onAnimationComplete={() => {
              const card = refs.current[index];
              if (card) {
                card.classList.add("transition", "duration-300");
              }
            }}
          >
            <feature.icon className="size-9 text-white" />
            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-gray-100 pb-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}