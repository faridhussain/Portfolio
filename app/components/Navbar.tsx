'use client'

import Link from 'next/link'
import { useState } from 'react'
import { getLenis } from '../lib/lenis'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'contact', label: 'Contact' },
    ]

    const scrollToSection = (id: string) => {
        const scroll = () => {
            const lenis = getLenis()

            if (lenis) {
                lenis.scrollTo(`#${id}`)
            } else {
                document.getElementById(id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }

        if (isOpen) {
            setIsOpen(false)
            setTimeout(scroll, 300)
        } else {
            scroll()
        }
    }

    return (
        <header className='sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#23262d] bg-white dark:bg-[#0F1115] transition-colors duration-300'>
            <nav className='max-w-350 mx-auto px-6 lg:px-8'>
                <div className='flex items-center justify-between py-3 lg:py-4'>
                    <Link
                        href='/'
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection('home')
                        }}
                        className='text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter text-gray-900 dark:text-white transition-colors duration-300'
                    >
                        Farid Hussain
                    </Link>

                    <div className='hidden md:flex items-center gap-4'>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className='rounded-md px-3 py-2 text-base lg:text-lg tracking-tight text-[#626b77] dark:text-gray-300 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-[#1A1D24] hover:text-[#4a515c] dark:hover:text-white cursor-pointer'
                            >
                                {link.label}
                            </button>
                        ))}

                        <ThemeToggle />
                    </div>

                    <div className='flex items-center gap-2 md:hidden'>
                        <ThemeToggle />

                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className='flex h-10 w-10 items-center justify-center text-2xl text-gray-900 dark:text-white transition-colors duration-300'
                            aria-label='Toggle menu'
                        >
                            <i className={isOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-[#0F1115] ${
                    isOpen
                        ? 'max-h-96 border-t border-gray-200 dark:border-[#23262d]'
                        : 'max-h-0'
                }`}
            >
                <div className='max-w-300 mx-auto px-6 py-5'>
                    <div className='flex flex-col gap-2 items-center'>
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className='w-full rounded-md px-4 py-3 text-center text-lg font-medium text-[#626b77] dark:text-gray-300 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-[#1A1D24] hover:text-[#4a515c] dark:hover:text-white cursor-pointer'
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}