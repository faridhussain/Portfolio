'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../lib/motion'

type SocialLink = {
    label: string
    href: string
    icon: string
}

const socialLinks: SocialLink[] = [
    {
        label: 'GitHub',
        href: 'https://github.com/faridhussain',
        icon: 'ri-github-fill',
    },
    {
        label: 'X',
        href: 'https://x.com/Farid_HussainX',
        icon: 'ri-twitter-x-fill',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/farid-codes',
        icon: 'ri-linkedin-fill',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/___faridhere___',
        icon: 'ri-instagram-fill',
    },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className='w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-20 lg:mt-28'>
            <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={containerVariants} className='border-t border-gray-200 dark:border-[#23262D] py-6 flex sm:flex-row items-center justify-between gap-4 transition-colors duration-300'>
                <motion.div variants={itemVariants} className='flex items-center gap-3 sm:gap-5'>
                    {socialLinks.map((social) => (
                        <a key={social.label} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label} className='group relative text-base sm:text-xl text-gray-500 dark:text-gray-400 hover:text-[#7b55ce] transition-all duration-300 hover:-translate-y-0.5'>
                            <i className={social.icon}></i>

                            <span className='pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-gray-900 dark:bg-[#22252C] px-2.5 py-1 text-xs font-light text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100'>{social.label}</span>
                        </a>
                    ))}
                </motion.div>

                <motion.p variants={itemVariants} className='sm:text-sm text-xs text-[#565d6e] dark:text-gray-400 font-light tracking-tight transition-colors duration-300'>
                    &copy; {year}
                </motion.p>
            </motion.div>
        </footer>
    )
}
