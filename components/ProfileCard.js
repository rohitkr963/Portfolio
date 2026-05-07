'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ProfileCard = ({
    avatarUrl,
    name,
    title,
    handle,
    status,
    contactText,
    onContactClick,
    showUserInfo = true,
    tagline,
    socialLinks = {},
    className = ''
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse move parallax effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct * 20); // Move range
        y.set(yPct * 20);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }

    // Split name for the big typography effect
    const firstName = name ? name.split(' ')[0] : 'ROHIT';
    const lastName = name ? name.split(' ').slice(1).join(' ') : 'KUMAR';

    return (
        <motion.div
            className={`relative w-full max-w-md mx-auto ${className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Main Card Container */}
            <div className="relative bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl group perspective-1000">

                {/* Image Section - Dominant (75% height) */}
                <div className="relative h-[500px] w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                    <div className="absolute inset-0 bg-gray-200 dark:bg-zinc-800 animate-pulse" /> {/* Loading placeholder */}

                    <motion.div
                        className="relative w-full h-full"
                        style={{ x: mouseX, y: mouseY, scale: 1.1 }} // Scale up slightly to avoid edges showing during parallax
                    >
                        <Image
                            src={avatarUrl || "/rohit-photo.jpg"}
                            alt={name || "Profile Image"}
                            fill
                            className="object-cover object-top transition-transform duration-1000 ease-out"
                            priority
                        />
                    </motion.div>

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />

                    {/* Big Bold Typography Name Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 pb-2 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0 pointer-events-none">
                        <motion.h1
                            className="text-[5rem] leading-[0.8] font-black text-white tracking-tighter mix-blend-overlay opacity-90 select-none"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.9 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {firstName.toUpperCase()}
                        </motion.h1>
                        <motion.h1
                            className="text-4xl font-bold text-white/80 tracking-widest uppercase ml-1 mt-1"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 0.8 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            {lastName.toUpperCase()}
                        </motion.h1>
                    </div>
                </div>

                {/* Info Section - Minimalist Bottom */}
                <div className="relative p-6 bg-white dark:bg-zinc-900 z-10">
                    <div className="flex justify-between items-end">
                        <div>
                            <motion.p
                                className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {title || "Full Stack Developer"}
                            </motion.p>
                            <motion.div
                                className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                {status || "Available for work"}
                            </motion.div>
                        </div>

                        {/* Social Icons - Minimal */}
                        <div className="flex gap-3">
                            {socialLinks.github && (
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                                    <FaGithub size={20} />
                                </a>
                            )}
                            {socialLinks.linkedin && (
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#0077b5] transition-colors">
                                    <FaLinkedin size={20} />
                                </a>
                            )}
                            {socialLinks.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#1DA1F2] transition-colors">
                                    <FaTwitter size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Expandable Contact Button */}
                    <motion.div
                        className="mt-6 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button
                            onClick={onContactClick}
                            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-300 flex items-center justify-center gap-2 group/btn"
                        >
                            {contactText || "Let's Talk"}
                            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProfileCard;
