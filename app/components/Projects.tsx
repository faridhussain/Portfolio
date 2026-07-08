'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'

type Project = {
    title: string
    description: string
    image: string
    tech: string[]
    liveUrl: string
    githubUrl: string
}

const projects: Project[] = [
    {
        title: 'Mega Blog',
        description: 'Full-stack blog application built with React and Appwrite (BaaS). Includes authentication, CRUD functionality, TinyMCE editor, image uploads, protected routes, and responsive UI with well-commented, beginner-friendly code.',
        image: '/projects/mega-blog.png',
        tech: ['React', 'Appwrite', 'Redux Toolkit', 'React Router DOM', 'React Hook Form', 'Tailwind CSS', 'TinyMCE', 'Vite'],
        liveUrl: 'https://mega-blog-seven-ebon.vercel.app',
        githubUrl: 'https://github.com/faridhussain/Mega-Blog',
    },
    {
        title: 'Dog Studio Clone',
        description: 'A cinematic Dog Studio clone built with React, Three.js, React Three Fiber, Drei, and GSAP, featuring an interactive 3D wolf model, scroll-driven animations, and immersive web experiences.',
        image: '/projects/dog-studio-clone.png',
        tech: ['React', 'Three.js', 'React Three Fiber', 'GSAP', 'React Three Drei', 'Vite'],
        liveUrl: 'https://dog-studio-clone-one.vercel.app/',
        githubUrl: 'https://github.com/faridhussain/Dog-Studio-Clone',
    },
    {
        title: 'Image Editor',
        description: 'A simple browser-based image editor built using HTML, Tailwind CSS, and JavaScript. You can upload an image, apply filters, use presets, and download the edited result.',
        image: '/projects/image-editor.png',
        tech: ['HTML', 'Tailwind CSS', 'Javascript (Canvas API)'],
        liveUrl: 'https://resonant-boba-b43afe.netlify.app/',
        githubUrl: 'https://github.com/faridhussain/Image-Editor',
    },
]

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
}

export default function Projects() {
    return (
        <section id='projects' className='scroll-mt-24 max-w-350 mx-auto px-3 sm:px-6 lg:px-8 pb-25 lg:pb-33'>
            <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
                <motion.div variants={itemVariants} className='flex flex-col items-center text-center lg:items-start lg:text-left gap-1 sm:mb-12 mb-10'>
                    <h2 className='sm:text-4xl text-2xl md:text-5xl font-bold leading-tight'>
                        <span className='tracking-tight'>Here&apos;s What I&apos;ve Built.</span>
                    </h2>

                    <p className='md:text-lg text-base text-[#565d6e] font-light max-w-2xl'>A few projects that show how I think about interfaces, structure, and detail.</p>
                </motion.div>

                <motion.div variants={containerVariants} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch'>
                    {projects.map((project, index) => {
                        const isOrphan = index === projects.length - 1 && projects.length % 2 !== 0

                        return (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                whileHover={{
                                    y: -6,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                className={`group h-full flex flex-col rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg duration-300 ${isOrphan ? 'md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0' : ''}`}
                            >
                                <div className='relative w-full aspect-16/10 lg:aspect-video overflow-hidden bg-gray-100 shrink-0'>
                                    <Image src={project.image} alt={`${project.title} preview`} fill sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' className='object-cover transition-transform duration-500 group-hover:scale-105' />
                                </div>

                                <div className='flex flex-col flex-1 gap-4 sm:p-5 p-3'>
                                    <div>
                                        <h3 className='sm:text-xl text-lg font-medium tracking-tight'>{project.title}</h3>

                                        <p className='mt-2 text-sm sm:text-base text-[#565d6e] font-light leading-relaxed'>{project.description}</p>
                                    </div>

                                    <div className='flex flex-wrap sm:gap-2 gap-1'>
                                        {project.tech.map((item) => (
                                            <span key={item} className='rounded-md bg-gray-100 px-3 py-1 text-xs sm:text-sm text-[#565d6e]'>
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='flex gap-3 mt-auto pt-2'>
                                        <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='group/live flex-1 flex items-center justify-center gap-1.5 bg-[#7b55ce] hover:bg-[#6942b4] duration-300 rounded-lg px-3 md:px-4 py-1 md:py-2.5 text-sm sm:text-base font-medium text-white whitespace-nowrap'>
                                            Live Demo
                                            <i className='ri-arrow-right-up-line text-base sm:text-lg transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5'></i>
                                        </a>

                                        <a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className='flex-1 flex items-center justify-center gap-1.5 border border-gray-300 bg-gray-100 hover:bg-white duration-300 rounded-lg px-3 md:px-4 py-1 md:py-2.5 text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap'>
                                            <i className='ri-github-fill text-xl mb-0.5'></i>
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}
