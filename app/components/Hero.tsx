'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../lib/motion'
import { getLenis } from '../lib/lenis'

const scrollToContact = () => {
    const lenis = getLenis()

    if (lenis) {
        lenis.scrollTo('#contact')
    } else {
        document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
}

export default function Hero() {
    return (
        <section id='home' className='scroll-mt-24 max-w-350 mx-auto px-6 lg:px-8 mt-10 sm:mt-20 lg:mt-28 pb-16 lg:pb-23'>
            <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 sm:gap-10 md:gap-1'>
                <motion.div variants={containerVariants} initial='hidden' animate='visible' className='flex-1 flex flex-col gap-5 items-center text-center lg:items-start lg:text-left'>
                    <motion.h1 variants={itemVariants} className='sm:text-4xl text-2xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col text-gray-900 dark:text-white transition-colors duration-300'>
                        <span className='text-[#7b55ce] sm:mb-1'>Trust Me,</span>
                        <span className='tracking-tight leading-8 sm:leading-14'>I&apos;m a Frontend Developer.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className='sm:text-lg text-base md:text-xl text-[#565d6e] dark:text-gray-400 font-light lg:pr-10 transition-colors duration-300'>
                        I build responsive, high-performance web applications using React, Next.js, and TypeScript with a focus on clean design, maintainable code, and intuitive user experiences.
                    </motion.p>

                    <motion.div variants={itemVariants} className='shine-badge inline-flex items-center gap-2.5 rounded-full border border-[#7b55ce]/15 bg-[#7b55ce]/5 dark:bg-[#17191F] dark:border-[#2A2D35] px-2 py-1 sm:px-4 sm:py-2 transition-colors duration-300'>
                        <span className='relative inline-flex h-2 w-2 rounded-full bg-[#7b55ce]'></span>

                        <span className='text-[11px] sm:text-sm'>
                            <span className='font-medium text-[#7b55ce]'>Currently Learning</span>

                            <span className='text-gray-400'> • </span>

                            <span className='text-gray-600 dark:text-gray-400 transition-colors duration-300'>Node.js • Express.js • MongoDB</span>
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants} className='flex flex-col items-center lg:items-start gap-4 w-full sm:w-auto'>
                        <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>
                            <button onClick={scrollToContact} className='flex-1 sm:flex-none sm:w-auto bg-[#7b55ce] hover:bg-[#6942b4] duration-300 rounded-lg md:px-6 md:py-3 py-2.5 px-5 text-base md:text-lg font-medium text-white cursor-pointer text-center'>
                                Get in touch
                            </button>

                            <Link
                                href='/resume.pdf'
                                download
                                className='group w-full sm:w-auto border border-[#7b55ce] bg-white dark:bg-[#17191F] hover:shadow-lg hover:shadow-[#7b55ce]/15 transition-all duration-300 rounded-lg md:px-6 md:py-3 py-2.5 px-5 text-base md:text-lg font-medium flex items-center justify-center gap-2 text-[#7b55ce] cursor-pointer hover:bg-[#7b55ce]/5 dark:hover:bg-[#22252c]'
                            >
                                <i className='ri-download-line'></i>
                                Download Resume
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: 'easeOut',
                    }}
                    className='group sm:w-64 sm:h-64 h-52 w-52 md:w-80 md:h-80 lg:w-95 lg:h-95 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-[#2A2D35] shadow-lg dark:shadow-black/40 hover:shadow-2xl transition-all duration-300'
                >
                    <Image src='/profile/farid2.png' alt='Farid Hussain' width={400} height={400} className='w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]' priority />
                </motion.div>
            </div>
        </section>
    )
}
