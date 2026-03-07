import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { ExternalLinkIcon, X } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consult & Understand",
    short: "We start with a conversation to understand your business needs and goals, free-of-charge.",
    description:
      "We kick things off with a short discovery chat to learn how you work, what’s causing headaches, and what you want to achieve. We talk to the right people, check your current tools, and spot quick wins as well as longer‑term improvements. By the end you’ll have a clear brief and a prioritized roadmap so every next step actually moves the needle.",
    link: "#contact",
    image: "/assets/workflow1.png",
  },
  {
    id: 2,
    title: "Plan & Build",
    short: "Design and implementation with clarity, reliability, and scalability in mind.",
    description:
      "We turn that plan into action: wireframes, tech architecture, and a clear timeline. We build in short cycles — prototypes first, then production‑ready features — focusing on secure integrations, solid error handling, and a smooth user experience. You’ll see working demos early and get predictable delivery milestones.",
    link: "#contact",
    image: "/assets/workflow2.png",
  },
  {
    id: 3,
    title: "Support & Grow",
    short: "Ongoing support to keep systems secure, optimized, and growing with you.",
    description:
      "After launch we keep things running with regular updates, security patches, and performance tweaks so your systems stay reliable. We monitor how things perform, pull simple analytics to show impact, and suggest improvements as you grow. Our support is practical — focused on uptime, security, and making sure you actually get value from the work.",
    link: "#contact",
    image: "/assets/workflow3.png",
  },
];

export default function WorkflowSteps() {
  const [activeStep, setActiveStep] = useState(null); // step object or null
  const modalRef = useRef(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (activeStep) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeStep]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveStep(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus modal when opened
  useEffect(() => {
    if (activeStep && modalRef.current) {
      modalRef.current.focus();
    }
  }, [activeStep]);

  // Close modal and scroll to contact form
  const handleStartProject = () => {
    setActiveStep(null);
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
        const firstInput = contactEl.querySelector("input, textarea, button, a");
        if (firstInput) firstInput.focus({ preventScroll: true });
      }
    }, 120);
  };

  return (
    <section className="mt-32 relative" id="services">
      <SectionTitle
        title="Our Process"
        description="From first consultation to ongoing support, we make technology simple, reliable, and tailored to your business."
      />

      <motion.div
        className="relative space-y-20 md:space-y-30 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Timeline numbers (desktop) */}
        <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2">
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            01
          </p>
          <div className="h-72 w-0.5 bg-linear-to-b from-transparent via-white to-transparent" />
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            02
          </p>
          <div className="h-72 w-0.5 bg-linear-to-b from-transparent via-white to-transparent" />
          <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
            03
          </p>
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex items-center justify-center gap-6 md:gap-20 ${
              index % 2 !== 0 ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
            }`}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              src={step.image}
              alt={step.title}
              className="flex-1 h-auto w-full max-w-sm rounded-2xl shadow-lg"
            />

            <div className="flex-1 flex flex-col gap-6 md:px-6 max-w-md">
              <h3 className="text-2xl font-medium text-white">{step.title}</h3>
              <p className="text-gray-100 text-sm/6 pb-2">{step.short}</p>

              <button
                onClick={() => setActiveStep(step)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#a0f5c5] hover:underline"
                aria-haspopup="dialog"
                aria-expanded={activeStep?.id === step.id}
              >
                Learn More
                <ExternalLinkIcon className="size-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal / full-page style popup anchored under footer area */}
      {activeStep && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActiveStep(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />

          {/* Modal card: use flex-col and min-h-0 so children can scroll properly */}
          <motion.article
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-5xl mx-6 mb-8 glass rounded-2xl shadow-2xl overflow-hidden flex flex-col min-h-0"
            style={{ maxHeight: "85vh" }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6 p-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#a0f5c5]">
                  {activeStep.title}
                </h3>
                <p className="text-sm text-gray-200 mt-2 max-w-2xl">{activeStep.short}</p>
              </div>

              <button
                onClick={() => setActiveStep(null)}
                className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition"
                aria-label="Close"
              >
                <X className="text-gray-100" />
              </button>
            </div>

            {/* Content: make this the scrollable area */}
            <div className="p-8 overflow-auto min-h-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left column: main text */}
                <div className="space-y-6 min-h-0">
                  <p className="text-gray-100 leading-relaxed">{activeStep.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold text-white mt-4 mb-2">What you get</h4>
                    <ul className="list-disc list-inside text-gray-200 space-y-2">
                      <li>Clear deliverables and timeline</li>
                      <li>Secure integrations and data handling</li>
                      <li>Prototype and production handoff</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mt-4 mb-2">Who this is for</h4>
                    <p className="text-gray-200">
                      Startups, small teams, and SMBs who need pragmatic automation and reliable
                      product delivery without the overhead of a large agency.
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleStartProject}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#a0f5c5] text-black font-semibold hover:bg-[#7de5a5] transition"
                    >
                      Start a Project
                      <ExternalLinkIcon />
                    </button>
                  </div>
                </div>

                {/* Right column: image + quick facts (sticky so it won't be hidden) */}
                <div className="flex flex-col gap-4 min-h-0">
                  <img
                    src={activeStep.image}
                    alt={activeStep.title}
                    className="w-full rounded-xl object-cover shadow-lg"
                    style={{ maxHeight: 420 }}
                  />

                  <div className="bg-white/5 rounded-lg p-4 sticky top-6 self-start">
                    <h5 className="text-sm font-semibold text-white mb-2">Quick facts</h5>
                    <ul className="text-gray-200 text-sm space-y-1">
                      <li>Typical engagement: 2–8 weeks</li>
                      <li>Deliverables: prototype, integration, docs</li>
                      <li>Support options: monthly retainer or ad‑hoc</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Close CTA at bottom */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setActiveStep(null)}
                  className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-100 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </section>
  );
}