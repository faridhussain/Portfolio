'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ThemeIcon from './ThemeIcon'

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className='h-10 w-10 rounded-full border border-gray-200 dark:border-gray-700' />
    }

    const isDark = resolvedTheme === 'dark'

    return (
        <motion.button
            whileHover={{
                scale: 1.06,
            }}
            whileTap={{
                scale: 0.94,
            }}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label='Toggle theme'
            className='flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 dark:border-[#2A2D35] bg-white dark:bg-[#17191F] text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#22252C] transition-all duration-300 cursor-pointer'
        >
            <motion.div
                animate={{
                    rotate: isDark ? 180 : 0,
                }}
                transition={{
                    duration: 0.45,
                    ease: 'easeInOut',
                }}
            >
                <ThemeIcon className='h-5 w-5 text-current' />{' '}
            </motion.div>
        </motion.button>
    )
}
