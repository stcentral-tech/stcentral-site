import { MonitorIcon, GlobeIcon, WrenchIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <>
            {/* Static Sage + Blue background blobs */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-1/3 h-[28rem] w-[28rem] bg-[#4A635D]/80 blur-[80px]" />
                <div className="absolute rounded-full top-60 right-1/4 h-[26rem] w-[26rem] bg-[#1E3A5F]/85 blur-[70px]" />
                <div className="absolute rounded-full top-0 left-1/2 h-[22rem] w-[22rem] bg-[#3A7CA5]/80 blur-[60px]" />
            </div>

            <motion.section className="flex flex-col items-center" id='home'>
                
                {/* Icon row */}
                <motion.div 
                    className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-12 mt-32"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <MonitorIcon className="size-7 text-gray-200 hover:text-[#a0f5c5] transition" />
                    </motion.div>
                    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <GlobeIcon className="size-7 text-gray-200 hover:text-[#a0f5c5] transition" />
                    </motion.div>
                    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <WrenchIcon className="size-7 text-gray-200 hover:text-[#a0f5c5] transition" />
                    </motion.div>
                </motion.div>

                {/* Headline with lighter blue gradient */}
                <motion.h1 
                    className="text-center text-4xl/13 md:text-6xl/19 mt-8 font-semibold tracking-tight max-w-3xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Your <span className="font-extrabold bg-gradient-to-r from-[#3A7CA5] via-[#4ABDAC] to-[#A0F5C5] bg-clip-text text-transparent">
                        All‑in‑One
                    </span> IT Partner – Websites, Support & Repairs
                </motion.h1>

                {/* Supporting text */}
                <motion.p 
                    className="text-center text-gray-100 text-base/7 max-w-md mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Affordable, reliable IT solutions for small businesses and entrepreneurs in Cape Town and beyond.
                </motion.p>

                {/* CTA button */}
                <motion.div 
                    className="flex flex-col md:flex-row items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <button className="btn w-full max-w-sm md:w-auto glass py-3">
                    <a href="https://wa.me/27679814474" target="_blank" rel="noopener noreferrer">
                        Get Started
                    </a>
                    </button>
                </motion.div>
            </motion.section>
        </>
    );
}