'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <div className='w-full border-b border-gray-200 sticky top-0 bg-white z-50'>
            <div className='flex justify-between w-[95%] md:w-[85%] lg:w-[70%] mx-auto py-2 md:py-3 lg:py-4 items-center'>
                <Link href='/' className='text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter'>
                    Farid Hussain
                </Link>

                <div className='hidden md:flex gap-3'>
                    {navLinks.map((link) => (
                        <Link key={link.href} className='bg-transparent hover:bg-gray-100 md:text-base lg:text-lg tracking-tight rounded py-2 px-3 font-medium text-[#626b77] hover:text-[#4a515c] duration-300 transition-all' href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button onClick={() => setIsOpen((prev) => !prev)} className='md:hidden text-2xl w-8 h-8 flex items-center justify-center' aria-label='Toggle menu'>
                    <i className={isOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
                </button>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'}`}>
                <div className='flex flex-col items-center gap-2 py-6'>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className='w-[90%] text-center py-3 rounded font-medium text-[#626b77] hover:text-[#4a515c] hover:bg-gray-100 duration-300 transition-all'>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
