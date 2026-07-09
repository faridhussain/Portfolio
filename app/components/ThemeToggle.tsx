'use client'

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
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
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label='Toggle theme'
            className='flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-xl text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:border-gray-700 dark:bg-[#17191f] dark:text-gray-200 dark:hover:bg-[#22252c] cursor-pointer'
        >
            <motion.i key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className={isDark ? 'ri-sun-line' : 'ri-moon-line'} />
        </motion.button>
    )
}
