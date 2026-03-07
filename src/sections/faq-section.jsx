import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'What services does STCentral provide?',
            answer: "We specialize in web development, branding, illustration, IT troubleshooting, and site design. Our goal is to blend technical mastery with creative strategy for modern, scalable solutions.",
        },
        {
            question: 'Do you work with small businesses or only larger companies?',
            answer: "We love working with entrepreneurs, startups, and small businesses, as well as established companies. Our flexible approach adapts to your scale and needs.",
        },
        {
            question: 'How long does it take to launch a website with you?',
            answer: "Timelines vary depending on complexity, but most projects are delivered within 2–6 weeks. We use rapid iteration to keep things moving efficiently.",
        },
        {
            question: 'Can you help with branding and design, not just coding?',
            answer: "Absolutely. We create cohesive brand identities, color palettes, illustrations, and marketing materials alongside technical development.",
        },
        {
            question: 'Do you offer ongoing support after launch?',
            answer: "Yes, we provide maintenance, updates, and troubleshooting to ensure your site and brand stay fresh and functional long after launch.",
        },
        {
            question: 'What makes STCentral different from other agencies?',
            answer: "We combine empathy, clarity, and technical excellence. Our layered design approach ensures modern aesthetics, while our systems thinking future-proofs your brand and site.",
        },
    ];

    return (
        <section className='mt-32' id='faq'>
            <SectionTitle 
                title="FAQ's" 
                description="Looking for answers to your frequently asked questions? Check out our FAQ section below." 
            />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className='flex flex-col glass rounded-md'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 
                            className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' 
                            onClick={() => setIsOpen(isOpen === index ? null : index)}
                        >
                            {item.question}
                            <ChevronDownIcon 
                                className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} 
                            />
                        </h3>
                        <p 
                            className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}
                        >
                            {item.answer}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}