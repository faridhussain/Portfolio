'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '../lib/lenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            smoothWheel: true,
            touchMultiplier: 1.5,
        })

        setLenis(lenis)

        let rafId: number

        const raf = (time: number) => {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
