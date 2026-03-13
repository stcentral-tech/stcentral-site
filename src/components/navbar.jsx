import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'Our Process', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '#faq' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`sticky top-0 z-50 flex w-full items-center px-3 py-2.5 md:px-10 lg:px-16 transition-colors 
                ${isScrolled ? 'bg-white/8 backdrop-blur-md' : ''}`}   // thinner overlay
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                >
                {/* Logo with gentle hover motion */}
                <a href='#' className='flex items-center gap-2'>
                    <motion.img
                        src='./assets/logo.svg'
                        alt='logo'
                        className='h-16 w-30'
                        width={205}
                        height={40}
                        whileHover={{ y: -4 }}   // simple up motion
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                </a>

                {/* Centered links */}
                <div className="hidden md:flex flex-1 justify-center space-x-10">
                    {links.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="transition hover:text-[#a0f5c5]"
                            whileHover={{ y: -3 }}   // same gentle up motion
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Sign Up button stays on the right */}
                <div className="hidden md:flex items-center">
                    <a href='#contact' className='btn glass'>
                        Contact Us
                    </a>
                </div>

                {/* Mobile menu button */}
                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden ml-auto'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            {/* Mobile menu overlay */}
            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-[#a0f5c5] transition"
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {link.name}
                    </motion.a>
                ))}

                <a href='#contact' className='btn glass' onClick={() => setIsOpen(false)}>
                    Contact Us
                </a>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div>
        </>
    );
}
